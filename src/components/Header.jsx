import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav style={{ padding: '1rem', background: '#e0ffe0', display: 'flex', gap: '1rem' }}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/resume">Resume</NavLink>
    <NavLink to="/work">Work</NavLink>
    <NavLink to="/lors">LORs</NavLink>
  </nav>
);

export default Header;
