import React, { useState } from 'react';
import './Auth.css';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaRegEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Auth = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="modern-auth-viewport">
      {/* LEFT: MINIMAL BRANDING */}
      <div className="branding-pane">
        <div className="branding-container">
          <div className="mini-brand-logo">
            <span className="wa-square">WA</span>
            <span className="wa-text">SOFTWARE COMPANY</span>
          </div>
          <h1 className="hero-heading">Engineering the Future.</h1>
          <p className="hero-subtext">
            Building high-performance digital ecosystems for the modern web.
          </p>
          <div className="pill-container">
            <span>Innovation</span> • <span>Precision</span> • <span>Power</span>
          </div>
        </div>
      </div>

      {/* RIGHT: THE "SMALL" MODERN CARD */}
      <div className="form-pane">
        <div className="auth-card-slim">
          <div className="card-intro-text">
            <h2>{isLogin ? 'Welcome Back' : 'Join WA'}</h2>
            <p>{isLogin ? 'Sign in to your portal' : 'Start your journey'}</p>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="slim-input-wrapper">
                <FaUser className="slim-icon" />
                <input type="text" placeholder="Full Name" required />
              </div>
            )}

            <div className="slim-input-wrapper">
              <FaRegEnvelope className="slim-icon" />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="slim-input-wrapper">
              <FaLock className="slim-icon" />
              <input type="password" placeholder="Password" required />
            </div>

            <button type="submit" className="slim-btn-primary">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>

            <div className="slim-divider">OR</div>

            <div className="slim-social-group">
              <button type="button" className="slim-social-btn"><FcGoogle /></button>
              <button type="button" className="slim-social-btn"><FaGithub /></button>
            </div>

            <p className="slim-footer-link">
              {isLogin ? "New here?" : "Member?"} 
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? ' Create Account' : ' Login'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;