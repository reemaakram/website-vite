import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav style={{ background: "#333", padding: 10 }}>
    <NavLink
      to="/Library"
      style={({ isActive }) => ({
        color: isActive ? "#88f38bff" : "white",
        marginRight: 15,
        textDecoration: "none",
      })}
    >Library
    </NavLink>
    <NavLink
      to="/Users"
      style={({ isActive }) => ({
        color: isActive ? "#88f38bff" : "white",
        marginRight: 15,
        textDecoration: "none",
      })}
    > Users
    </NavLink>
    <NavLink
      to="/Landmarks"
      style={({ isActive }) => ({
        color: isActive ? "#88f38bff" : "white",
        textDecoration: "none",
      })}
    >Landmarks
    </NavLink>
  </nav>
);

export default Navbar;
