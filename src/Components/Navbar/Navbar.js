import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <a href="/">
            <h1 className="logo-text">DHIH</h1>
          </a>
        </div>
        <ul>
        <li><Link to="/about">About</Link></li>
          <li><a href="#">Contract</a></li>
        </ul>
        <div className="signin_signup">
          <li><a href="#">Sign In/Up</a></li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
