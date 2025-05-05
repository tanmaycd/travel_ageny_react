// src/routes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/Searchresults";
import TripDetails from "./pages/Tripdetails";
// import Confirmation from "./pages/Confirmation";
// import Checkout from "./pages/Checkout";



const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/trip/:id" element={<TripDetails />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
