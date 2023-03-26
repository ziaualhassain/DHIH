import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';

function HomeComponent() {
  return (
    <div className="container bg-image"> {/* add the CSS class to the root element */}
      <div className="text-container">
      <h1> Hear us out! </h1>
      <h3>"Health is wealth, and the right information is key to unlocking it."</h3>
      <p>We provide a secure & decentralised system to store and organise your health records!</p>
      <Link to="/authentication">
        <button>Join Us </button>
      </Link>
    </div>
    </div>
  );
}

export default HomeComponent;
