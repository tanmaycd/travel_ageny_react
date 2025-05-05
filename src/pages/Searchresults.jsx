import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import trips from '../data/trips.json';
import './SearchResults.css';

const SearchResults = () => {
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [filters, setFilters] = useState({
    price: '',
    location: '',
    duration: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFilteredTrips(trips);
  }, []);

  useEffect(() => {
    let results = trips;

    if (filters.price) {
      results = results.filter(trip => parseInt(trip.price) <= parseInt(filters.price));
    }

    if (filters.location) {
      results = results.filter(trip =>
        trip.destination.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.duration) {
      const days = parseInt(filters.duration);
      results = results.filter(trip => {
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

        <div className="grid">
          {filteredTrips.length > 0 ? (
            filteredTrips.map(trip => (
              <div key={trip.id} className="trip-card" onClick={() => handleCardClick(trip.id)}>
                <img src={trip.images[0]} alt={trip.destination} />
                <h3>{trip.destination}</h3>
                <p>Price: ${trip.price}</p>
                <p>Duration: {trip.duration}</p>
              </div>
            ))
          ) : (
            <p>No trips match your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
