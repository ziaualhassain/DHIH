import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div class="header">
            <nav>
              <div class="logo">
                <a href="/">L O G O</a>
              </div>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contract</a></li>
              </ul>
              <div class="signin_signup">
                 <li><a href="#">Sign In/Up</a></li>
              </div>
            </nav>
    </div>
  );
}

export default Navbar;