import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link"to="/" exact>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/projects">Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/resume">Resume</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;