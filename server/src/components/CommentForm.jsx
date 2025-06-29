import React, { useState, useEffect } from "react";
import "./CommentForm.css";

const CommentForm = ({ destinationId, onClose }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/comments?destinationId=${destinationId}`
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [destinationId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      destinationId,
      user,
      comment,
      date: new Date().toISOString(),
    };

    try {
      await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      alert("Comment submitted successfully!");
      setComment("");
      setUser("");
      onClose();
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment.");
    }
  };

  return (
    <div className="comment-form">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Your name"
          required
        />
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
      <div className="comments-list">
        <h4>Comments</h4>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="comment">
              <p>
                <strong>{c.user}</strong> ({new Date(c.date).toLocaleString()}):
              </p>
              <p>{c.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
