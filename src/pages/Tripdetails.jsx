import "./TripDetails.css";
import { useParams } from "react-router-dom";
import trips from "../data/trips.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TripDetails = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  return (
    <div>
      <Navbar />
      <div className="trip-details">
        <h2>{trip.destination}</h2>
        <img src={`/images/${trip.images[0]}`} alt={trip.destination} />
        <p><strong>Duration:</strong> {trip.duration}</p>
        <p><strong>Price:</strong> ${trip.price}</p>
        <h3>Itinerary</h3>
        <ul>
          {trip.itinerary.map((day, i) => <li key={i}>{day}</li>)}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TripDetails;
