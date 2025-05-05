import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">XYZ Travel Agency</Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
    </ul>
  </nav>
);

export default Navbar;
