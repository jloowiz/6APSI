import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import sneakerImg from '../assets/sneakers.jpg'; // image import

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      <div className="content">
        <h1 className="title">Sneakify</h1>
        <p className="description">
          Welcome to Sneakify — your one-stop sneaker shop for the latest drops, timeless classics, and exclusive styles.
        </p>
        <img src={sneakerImg} alt="Sneakers" className="sneaker-image" />
        <button className="get-started" onClick={handleStart}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
