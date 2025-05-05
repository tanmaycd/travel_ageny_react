import "./TripDetails.css";
import { useParams } from "react-router-dom";
import trips from "../data/trips.json";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const TripDetails = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  return (
    <div>
      <Navbar />
      <motion.div
        className="trip-details"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {trip.destination}
        </motion.h2>
        <motion.img
          src={`/images/${trip.images[0]}`}
          alt={trip.destination}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <strong>Duration:</strong> {trip.duration}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>Price:</strong> ${trip.price}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Itinerary
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {trip.itinerary.map((day, i) => (
            <motion.li
              key={i}
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