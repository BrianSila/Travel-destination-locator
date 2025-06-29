import React, { useState } from "react";
import "./DestinationList.css";
import DestinationCard from "./DestinationCard";
import DestinationForm from "./DestinationForm";

const DestinationList = ({ destinations }) => {
  const [editingDestination, setEditingDestination] = useState(null);

  const handleEdit = (destination) => {
    setEditingDestination(destination);
  };

  const handleFormSubmit = () => {
    setEditingDestination(null);
    // Optionally refresh the destination list here
  };

  if (destinations.length === 0) {
    return (
      <p className="no-results">
        No destinations found. Try a different search.
      </p>
    );
  }

  return (
    <div>
      {editingDestination ? (
        <DestinationForm
          existingData={editingDestination}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <section className="destinations-grid" id="destinations-container">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-item">
              <DestinationCard destination={destination} onEdit={handleEdit} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default DestinationList;
