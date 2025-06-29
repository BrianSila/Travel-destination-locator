import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = (continent) => {
    setActiveFilter(continent);
    onFilter(continent);
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <input
          type="text"
          id="search-input"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        />
        <button id="search-btn" onClick={handleSearch}>
          <i className="ri-search-line"></i>
        </button>
      </div>
      <div className="filter-buttons">
        {[
          "all",
          "africa",
          "asia",
          "europe",
          "north-america",
          "south-america",
          "australia",
          "antarctica",
        ].map((continent) => (
          <button
            key={continent}
            className={`filter-btn ${
              activeFilter === continent ? "active" : ""
            }`}
            onClick={() => handleFilter(continent)}
          >
            {continent.charAt(0).toUpperCase() +
              continent.slice(1).replace("-", " ")}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Search;
