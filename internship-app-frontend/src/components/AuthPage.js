import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./AuthPage.css";

const AuthPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }
    // Simulate authentication (replace with real API call if needed)
    setUser({ name: "Demo User", email: formData.email });
    navigate("/dashboard");
  };

  return (
    <div className="auth-main-container">
      <div className="auth-background">
        <div className="auth-content">
          {/* Header */}
          <div className="auth-header">
            <img
                src="logo-removebg-preview.png"
                alt="Uttarakhand Logo"
                className="state-logo"
              />
            <p>Find the perfect internship opportunity for your skills</p>
          </div>

          {/* Login Form */}
          <div className="auth-form-box">
            <h2>Welcome Back</h2>
            <p className="welcome-subtitle">Continue your internship journey</p>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-input-group">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="auth-input"
                  required
                />
              </div>

              <div className="form-input-group">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="auth-input"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <div className="forgot-password-link">
                <a href="#">Forgot your password?</a>
              </div>

              <button type="submit" className="auth-submit-button">
                Sign In
              </button>
            </form>
            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>

            <div className="auth-footer">
              <p>A Government of India Initiative - PM Internship Scheme</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;