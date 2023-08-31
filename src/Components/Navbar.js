import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h>
        <NavLink id="logo" to="/">
          <strong>Portfolio</strong>
        </NavLink>
      </h>
      <nav ref={navRef}>
        <NavLink id="am" to="/">
          ABOUT ME
        </NavLink>
        <NavLink id="rsm" to="/resume">
          RESUME
        </NavLink>
        <NavLink id="pro" to="/project">
          PROJECTS
        </NavLink>
        <NavLink id="cnt" to="/cont">
          CONTACT
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
