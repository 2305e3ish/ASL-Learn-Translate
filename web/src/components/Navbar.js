import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links" style={{ fontFamily: 'Arial Rounded MT' }}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/learn">Learn</NavLink></li>
        <li><NavLink to="/translate">Translate</NavLink></li>
        <li><NavLink to="/practice">Practice</NavLink></li>
        <li><NavLink to="/play">Play</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
