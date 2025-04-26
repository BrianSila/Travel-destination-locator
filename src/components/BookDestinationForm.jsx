import React, { useState, useEffect } from "react";
import "./BookDestinationForm.css";

const AVERAGE_COST_PER_DAY = 1000;

const BookDestinationForm = ({ destination, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelDate: "",
    numberOfPeople: "",
    numberOfDays: "",
  });

  const [totalCost, setTotalCost] = useState(0); // State to store the total cost
  const [averageCostPerDay, setAverageCostPerDay] = useState(0); // State to store the average cost per day

  useEffect(() => {
    // Calculate total cost and average cost per day whenever numberOfDays or numberOfPeople changes
    const days = parseInt(formData.numberOfDays, 10) || 0;
    const people = parseInt(formData.numberOfPeople, 10) || 0;
    const calculatedTotalCost = days * people * AVERAGE_COST_PER_DAY; // Total cost calculation
    setTotalCost(calculatedTotalCost);
    setAverageCostPerDay(days > 0 ? calculatedTotalCost / days : 0); // Average cost per day
  }, [formData.numberOfDays, formData.numberOfPeople]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { ...formData, destination: destination.name };

    try {
      const response = await fetch("http://localhost:3000/Booked-Locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to save booking data");
      }

      // Add the travel date to the user's calendar
      const calendarEvent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Trip to ${destination.name}
DTSTART:${formData.travelDate.replace(/-/g, "")}T000000Z
DTEND:${formData.travelDate.replace(/-/g, "")}T235900Z
DESCRIPTION:Enjoy your trip to ${destination.name}!
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([calendarEvent], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Trip_to_${destination.name}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Booking successful! The trip has been added to your calendar.");
      onClose();
    } catch (error) {
      console.error("Error saving booking data:", error);
      alert("Failed to book the trip. Please try again.");
    }
  };

  return (
    <div className="form-modal">
      <div className="form-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Book a Trip to {destination.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Travel Date:
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Number of People:
            <input
              type="number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
              min={1}
            />
          </label>
          <label>
            Number of Days:
            <input
              type="number"
              name="numberOfDays"
              value={formData.numberOfDays}
              onChange={handleChange}
              required
              min={1}
            />
          </label>
          <p className="cost-info">
            Total Cost: <span>$ {totalCost}</span>
          </p>
          <p className="cost-info">
            Average Cost per Day: <span>$ {averageCostPerDay.toFixed(2)}</span>
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookDestinationForm;