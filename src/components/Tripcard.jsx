import React from 'react';
import { Link } from 'react-router-dom';
import './TripCard.css';

const TripCard = ({ trip }) => (
  <div className="trip-card">
    <img src={trip.images[0]} alt={trip.destination} />
    <div className="trip-card-content">
      <h3>{trip.destination}</h3>
      <p>Price: ${trip.price}</p>
      <p>Duration: {trip.duration}</p>
      <p>Rating: {trip.rating}</p>
      <Link to={`/trip/${trip.id}`}>View Details</Link>
    </div>
  </div>
);

export default TripCard;
