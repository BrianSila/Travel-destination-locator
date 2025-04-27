import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./DestinationForm.css";

const DestinationForm = ({ existingData, onSubmit }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState(
    existingData || {
      name: "",
      country: "",
      continent: "",
      description: "",
      image: "",
      bestTimeToVisit: "",
      averageCost: "",
      travelTips: "",
      longDescription: "",
      rating: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingData && !existingData.id) {
        console.error(
          "Error: Missing destination ID for update. Existing data:",
          existingData
        );
        alert("Error: Missing destination ID for update.");
        return;
      }

      const response = await fetch(
        existingData
          ? `http://localhost:3000/destinations/${existingData.id}`
          : "http://localhost:3000/destinations",
        {
          method: existingData ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert(
          existingData
            ? "Destination updated successfully!"
            : "Destination added successfully!"
        );
        setFormData({
          name: "",
          country: "",
          continent: "",
          description: "",
          image: "",
          bestTimeToVisit: "",
          averageCost: "",
          travelTips: "",
          longDescription: "",
          rating: "",
        });
        if (onSubmit) onSubmit();
        navigate("/"); 
      } else {
        alert("Failed to save destination.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the destination.");
    }
  };

  return (
    <div className="destination-form">
      <h2>{existingData ? "Edit Destination" : "Add a New Destination"}</h2>
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
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Continent:
          <select
            name="continent"
            value={formData.continent}
            onChange={handleChange}
            required
          >
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="australia">Australia/Oceania</option>
            <option value="antarctica">Antarctica</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Long Description:
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Image URL:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Best time to visit:
          <input
            type="text"
            name="bestTimeToVisit"
            value={formData.bestTimeToVisit}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Average Cost:
          <input
            type="number"
            name="averageCost"
            value={formData.averageCost}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Travel tip:
          <input
            type="text"
            name="travelTip"
            value={formData.travelTips}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </label>
        <button type="submit">
          {existingData ? "Update Destination" : "Add Destination"}
        </button>
      </form>
    </div>
  );
};

export default DestinationForm;
