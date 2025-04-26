import React, { useState } from "react";
import BookDestinationForm from "./BookDestinationForm";
import CommentForm from "./CommentForm"; // Import the new CommentForm component
import "./DestinationModal.css";

const DestinationModal = ({ destination, isOpen, onClose }) => {
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);
  const [isCommentFormOpen, setCommentFormOpen] = useState(false); // State for comment form

  const handleOpenBookingForm = () => {
    setBookingFormOpen(true);
  };

  const handleCloseBookingForm = () => {
    setBookingFormOpen(false);
  };

  const handleOpenCommentForm = () => {
    setCommentFormOpen(true);
  };

  const handleCloseCommentForm = () => {
    setCommentFormOpen(false);
  };

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <i key={`full-${i}`} className="fas fa-star"></i>
          ))}
        {halfStar === 1 && <i className="fas fa-star-half-alt"></i>}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <i key={`empty-${i}`} className="far fa-star"></i>
          ))}
      </>
    );
  };

  if (!isOpen || !destination) return null;

  return (
    <div className="modal" id="destination-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <div className="modal-body">
          <img
            id="modal-image"
            src={destination.image}
            alt={destination.name}
          />
          <div className="modal-info">
            <h2 id="modal-title">{destination.name}</h2>
            <p className="location" id="modal-location">
              {destination.country}, {destination.continent}
            </p>
            <div className="rating" id="modal-rating">
              {getStarRating(destination.rating)}
            </div>
            <p className="description" id="modal-description">
              {destination.longDescription || destination.description}
            </p>
            <div className="details">
              <p>
                <strong>Best Time to Visit:</strong>{" "}
                <span id="modal-best-time">{destination.bestTimeToVisit}</span>
              </p>
              <p>
                <strong>Average Cost:</strong>{" "}
                <span id="modal-cost">
                  {destination.averageCost || "Information not available"}
                </span>
              </p>
              <p>
                <strong>Travel Tips:</strong>{" "}
                <span id="modal-tips">
                  {destination.travelTips || "No tips available"}
                </span>
              </p>
            </div>
            <button className="book-btn" onClick={handleOpenBookingForm}>
              Book a Trip
            </button>
            <button className="comment-btn" onClick={handleOpenCommentForm}>
              Leave a Comment
            </button>
          </div>
        </div>
      </div>
      {isBookingFormOpen && (
        <BookDestinationForm
          destination={destination}
          onClose={handleCloseBookingForm}
        />
      )}
      {isCommentFormOpen && (
        <CommentForm
          destinationId={destination.id}
          onClose={handleCloseCommentForm}
        />
      )}
    </div>
  );
};

export default DestinationModal;
