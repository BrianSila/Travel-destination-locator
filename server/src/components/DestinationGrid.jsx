import React, { useState, useEffect } from "react";
import Search from "./Search";
import DestinationList from "./DestinationList";
import "./DestinationGrid.css";

function DestinationGrid() {
  const [allDestinations, setAllDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [error, setError] = useState(null);

  const fetchDestinations = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/destinations"
      );
      if (!response.ok) throw new Error("Failed to fetch destinations");
      const data = await response.json();
      setAllDestinations(data);
      setFilteredDestinations(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredDestinations(allDestinations);
      return;
    }
    const results = allDestinations.filter((dest) =>
      [dest.name, dest.country, dest.continent, dest.description].some(
        (field) => field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredDestinations(results);
  };

  const handleFilter = (continent) => {
    if (continent === "all") {
      setFilteredDestinations(allDestinations);
      return;
    }
    const results = allDestinations.filter(
      (dest) => dest.continent.toLowerCase() === continent
    );
    setFilteredDestinations(results);
  };

  return (
    <main className="container">
      <Search onSearch={handleSearch} onFilter={handleFilter} />
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <DestinationList destinations={filteredDestinations} />
      )}
    </main>
  );
}

export default DestinationGrid;
