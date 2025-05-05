import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import './Home.css';
import trips from "../data/trips.json"; // Directly importing trips data

const Home = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Initially set the top 3 destinations
    const selectedDestinations = trips.slice(0, 5);
    setFeaturedDestinations(selectedDestinations);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      // Reset to top 3 destinations if search query is empty
      setFeaturedDestinations(trips.slice(0, 3));
    } else {
      // Filter destinations based on the search query
      const filteredDestinations = trips.filter((dest) =>
        dest.destination.toLowerCase().includes(query.toLowerCase())
      );
      setFeaturedDestinations(filteredDestinations);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Find Your Dream Vacation</h1>
        <SearchBar onSearch={handleSearch} />
        <h2>Featured Destinations</h2>
        <div className="carousel">
          {featuredDestinations.map((dest) => (
            <div key={dest.id} className="carousel-item">
              <img src={dest.images[0]} alt={dest.destination} />
              <p>{dest.destination}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;