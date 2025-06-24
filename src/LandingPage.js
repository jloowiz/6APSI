import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    document.getElementById('get-started').classList.add('clicked');
    setTimeout(() => navigate('/login'), 500); // after animation
  };

  return (
    <div className="landing-container">
      <h1 className="title">Sneakify</h1>
      <p className="tagline">Step into the future of sneakers</p>
      <button id="get-started" className="start-btn" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
