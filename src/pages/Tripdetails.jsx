import "./TripDetails.css";
import { useParams } from "react-router-dom";
import trips from "../data/trips.json";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const TripDetails = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  return (
    <div className="trip-details-container">
      <Navbar />
      <motion.div
        className="trip-details"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="trip-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {trip.destination}
        </motion.h2>
        <motion.img
          className="trip-image"
          src={`/images/${trip.images[0]}`}
          alt={trip.destination}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="trip-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="trip-detail"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <strong>Duration:</strong> {trip.duration}
          </motion.p>
          <motion.p
            className="trip-detail"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <strong>Price:</strong> ${trip.price}
          </motion.p>
        </motion.div>
        <motion.h3
          className="trip-itinerary-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Itinerary
        </motion.h3>
        <motion.ul
          className="trip-itinerary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {trip.itinerary.map((day, i) => (
            <motion.li
              key={i}
              className="trip-itinerary-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              {day}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default TripDetails;