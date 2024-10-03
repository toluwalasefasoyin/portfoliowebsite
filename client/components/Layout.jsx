/**
 * File Name: Layout.jsx
 * Student’s Name: Toluwalase Fasoyin
 * StudentID: 301359772
 * Date: September 30th 2024
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <h1>My Portfolio</h1>
        
          <Link to="/">Home</Link>|<Link to="/about">About Me</Link>|<Link to="/projects">Projects</Link>|<Link to="/services">Services</Link>|<Link to="/contact">Contact</Link>
        
      </nav>
      <main>{children}</main>
      <footer>&copy; {new Date().getFullYear()} My Portfolio</footer>
    </div>
  );
};

export default Layout;
