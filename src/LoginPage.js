import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="login-wrapper">
      <div
        className="login-hover-box"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2>{hovered ? 'Login' : 'Hover to Login'}</h2>
        {hovered && (
          <div className="login-form">
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" /><br />
            <button>Login</button>
          </div>
        )}
        {!hovered && <p className="subtext">Welcome back sneakerhead</p>}
      </div>
      <div className="signup">
        Don’t have an account? <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default LoginPage;
