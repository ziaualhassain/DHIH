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
          <li><a href="https://drive.google.com/file/d/1fHHQuWP5htWCFfrSFf9JYIpItVwHkSJm/view">White Paper</a></li>
        </ul>
        <div className="signin_signup">
          <li><a href="https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask">Connect Wallet</a></li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
