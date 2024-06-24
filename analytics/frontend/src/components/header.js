import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import LoadDataButton from "./LoadDataButton";

function Header() {
  return (
    <nav className="header">
      <ul className="nav-list">
        <li>Actividades</li>
        <LoadDataButton />
        {}
      </ul>
    </nav>
  );
}

export default Header;
