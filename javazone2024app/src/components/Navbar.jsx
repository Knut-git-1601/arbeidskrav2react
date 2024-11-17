// Navbar.jsx er en enkel funksjonell komponent som returnerer en navigasjonsmeny med lenker til ulike sider i applikasjonen.

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/speakers">Foredragsholdere</Link>
      <Link to="/talks">Foredrag</Link>
      <Link to="/rooms">Rom</Link>
      <Link to="/create-speaker">Legg til foredragsholdere</Link>
      <Link to="/create-talk">Legg til foredrag</Link>
    </nav>
  );
};

export default Navbar;
