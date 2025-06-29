import React, { useState } from "react";
import DestinationModal from "./DestinationModal";
import "./DestinationCard.css";

const DestinationCard = ({ destination, onEdit }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleViewDetails = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (halfStar) {
      stars.push("☆");
    }
    while (stars.length < 5) {
      stars.push("☆");
    }

    return stars.join(" ");
  };

  return (
    <>
      <div className="destination-card">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-img"
        />
        <div className="destination-info">
          <h3>{destination.name}</h3>
          <p className="rating">
            {renderStars(destination.rating)} ({destination.rating})
          </p>
          <p className="location">
            {destination.country}, {destination.continent}
          </p>
          <p className="description">{destination.description}</p>
          <div className="button-group">
            <button className="view-btn" onClick={handleViewDetails}>
              View Details
            </button>
            <button
              className="edit-btn"
              onClick={() => onEdit(destination)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <DestinationModal
        destination={destination}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default DestinationCard;
