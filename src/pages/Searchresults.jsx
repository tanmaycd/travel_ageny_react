import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import trips from "../data/trips.json";
import { motion } from "framer-motion";
import "./SearchResults.css";

const SearchResults = () => {
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    location: "",
    duration: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFilteredTrips(trips);
  }, []);

  useEffect(() => {
    let results = trips;

    if (filters.price) {
      results = results.filter(
        (trip) => parseInt(trip.price) <= parseInt(filters.price)
      );
    }

    if (filters.location) {
      results = results.filter((trip) =>
        trip.destination.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.duration) {
      const days = parseInt(filters.duration);
      results = results.filter((trip) => {
        const match = trip.duration.match(/\d+/);
        return match && parseInt(match[0]) <= days;
      });
    }

    setFilteredTrips(results);
  }, [filters]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleCardClick = (tripId) => {
    navigate(`/trip/${tripId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="results-container">
        <h2>Search Results</h2>

        <div className="filters">
          <input
            type="text"
            name="location"
            placeholder="Filter by location"
            value={filters.location}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Max Price ($)"
            value={filters.price}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="duration"
            placeholder="Max Duration (days)"
            value={filters.duration}
            onChange={handleInputChange}
          />
        </div>

        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip) => (
              <motion.div
                key={trip.id}
                className="trip-card"
                onClick={() => handleCardClick(trip.id)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: trip.id * 0.1 }}
              >
                <img src={trip.images[0]} alt={trip.destination} />
                <h3>{trip.destination}</h3>
                <p>Price: ${trip.price}</p>
                <p>Duration: {trip.duration}</p>
              </motion.div>
            ))
          ) : (
            <p>No trips match your criteria.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchResults;