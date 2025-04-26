import React, { useState } from "react";
import "./DestinationForm.css";

const DestinationForm = ({ onAddDestination }) => {
  const [destination, setDestination] = useState({
    name: "",
    description: "",
    image: "",
    country: "",
    continent: "",
    rating: "",
    bestTimeToVisit: "",
    averageCost: "",
    travelTips: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.name && destination.description) {
      onAddDestination(destination);
      setDestination({
        name: "",
        description: "",
        image: "",
        country: "",
        continent: "",
        rating: "",
        bestTimeToVisit: "",
        averageCost: "",
        travelTips: "",
      }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Destination Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={destination.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          value={destination.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="destination-country">Destination country</label>
        <input
          type="text"
          name="country"
          value={destination.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="destination-continent">Destination continent</label>
        <input
          type="text"
          name="continent"
          value={destination.continent}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="destination-rating">Destination Rating</label>
        <input
          type="text"
          name="rating"
          value={destination.rating}
          onChange={handleChange}
          min={0}
          max={5}
          required
        />
      </div>
      <div>
        <label htmlFor="best-time-to-visit">Best Time to Visit:</label>
        <input
          type="text"
          name="bestTimeToVisit"
          value={destination.bestTimeToVisit}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="average-cost">Average Cost:</label>
        <input
          type="number"
          name="averageCost"
          value={destination.averageCost}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="travel-tips">Travel Tips:</label>
        <textarea
          name="travelTips"
          value={destination.travelTips}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={destination.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Destination</button>
    </form>
  );
};

export default DestinationForm;
