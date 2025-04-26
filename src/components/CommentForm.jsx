import React, { useState } from "react";
import "./CommentForm.css"

const CommentForm = ({ destinationId, onClose }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      destinationId,
      text: comment,
      date: new Date().toISOString(),
    };

    try {
      await fetch("http://localhost:3000/Comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      alert("Comment submitted successfully!");
      setComment("");
      onClose();
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment.");
    }
  };

  return (
    <div className="comment-form">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          required
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
