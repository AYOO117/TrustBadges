import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav >
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/profile">PROFILE</NavLink>
        <NavLink to="/verify">VERIFY</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </header>
  );
};

export default Header;
