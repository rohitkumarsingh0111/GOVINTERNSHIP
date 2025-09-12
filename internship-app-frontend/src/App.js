import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SkillsForm from "./components/SkillsForm";
import JobCard from "./components/JobCard";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider, UserContext } from "./context/UserContext";
import "./App.css";
import Register from "./components/Register";
import BrowseInternship from "./components/BrowseInternship";
import Profile from "./components/Profile";   // ✅ sirf ek baar
import AuthPage from "./components/AuthPage";
import Home from "./pages/users";
import Admin from "./pages/admin";


function App() {
  const location = window.location;
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecommendations = async (skills) => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ skills }),
        }
      );
      const data = await response.json();
      setRecommendedJobs(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      alert(
        "Failed to get recommendations. Please check if the backend server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserProvider>
      <Router>
        <div className="app-container-full-width">
          {window.location.pathname === "/" ? (
            <header className="main-header">
              <div className="logo-section">
                <img
                  src="logo-removebg-preview.png"
                  alt="Uttarakhand Logo"
                  className="state-logo"
                />
              </div>
              <div className="header-content">
                {/* <h1 className="main-title">NATIONAL WEB PORTAL FOR JOBS</h1>
                <p className="subtitle">along with AICTE makes it easier to find and hire talent</p> */}
              </div>
              <AuthButtons />
               <div className="admin-panel-btn">
        <Link to="/admin" className="auth-btn">
          Admin Panel
        </Link>
      </div>
              <div className="state-logo-section">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.hkhEAuwNAjWbCM6GFaM7HAAAAA?r=0&pid=ImgDet&w=184&h=134&c=7&dpr=1.3&o=7&rm=3"
                  alt="AICTE Logo"
                  className="aicte-logo"
                />
              </div>
              
            </header>
          ) : null}



          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="page-1">
                    <div className="page-1a">
                      <h6 className="heading">
                        {" "}
                        Government Of India Initiative - PM Internship Scheme
                      </h6>
                      <h1 className="heading-up">Find Your Perfect</h1>
                      <h1 className="heading-down">Internship Match</h1>
                      <p>
                        AI-powered recommendations designed for students from
                        rural areas, tribal districts, and urban communities.
                        Get personalized internship suggestions that match your
                        skills and aspirations.
                      </p>
                    </div>
                    <div className="cta-buttons">
                      <Link to="register" className="start-btn">
                        Start Your Journey →
                      </Link>
                      <button className="demo-btn">▶ Watch Demo</button>
                    </div>
                    <div className="stats">
                      <div>
                        <strong>10,000+</strong>
                        <p>Internships Available</p>
                      </div>
                      <div>
                        <strong>50,000+</strong>
                        <p>Students Registered</p>
                      </div>
                      <div>
                        <strong>95%</strong>
                        <p>Match Accuracy</p>
                      </div>
                      <div>
                        <strong>500+</strong>
                        <p>Partner Companies</p>
                      </div>
                    </div>
                  </div>
                  <div className="recommendation-app-section">
                    <h2>AI Recommendations</h2>
                    <SkillsForm
                      onSkillsSubmit={getRecommendations}
                      loading={loading}
                    />
                    <main className="recommendations-container">
                      {loading ? (
                        <p>Finding the perfect internships for you...</p>
                      ) : recommendedJobs.length > 0 ? (
                        <div className="job-grid">
                          {recommendedJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                          ))}
                        </div>
                      ) : (
                        <p>Your recommendations will appear here.</p>
                      )}
                    </main>
                  </div>
                  <div className="info-cards-section">
                    <div className="info-card left-card">
                      <p className="card-number">
                        More than{" "}
                        <span className="highlight-number">1 Lakh</span>
                      </p>
                      <p className="card-text">
                        aspirants are available from AICTE approved institutions
                      </p>
                    </div>
                    <div className="info-card right-card-top">
                      <p className="card-number">
                        500+{" "}
                        <span className="highlight-number">
                          Internships Opportunities
                        </span>
                      </p>
                      <p className="card-text">
                        Internships available across multiple domains —
                        Technology, Management, Social Sector, and Government
                        Projects — all in one portal.
                      </p>
                    </div>
                    <div className="info-card right-card-bottom">
                      <p className="card-number">
                        Smart{" "}
                        <span className="highlight-number">
                          Smart AI Recommendations
                        </span>
                      </p>
                      <p className="card-text">
                        Continuous increase in the number of aspirants
                      </p>
                    </div>
                  </div>
                  <section className="how-it-works">
                    <h2>How DISHAA Works</h2>
                    <p className="subtitle">
                      Simple steps to find your perfect internship match
                    </p>

                    <div className="steps">
                      <div className="step-card">
                        <div className="icon">📝</div>
                        <h3>Create Your Profile</h3>
                        <p>
                          Tell us about your education, skills, interests, and
                          location preferences. Simple form, no complex details
                          required.
                        </p>
                      </div>

                      <div className="step-card">
                        <div className="icon">🧠</div>
                        <h3>AI Analysis</h3>
                        <p>
                          Our smart algorithm analyzes thousands of internships
                          to find the best 2–5 matches for your unique profile.
                        </p>
                      </div>

                      <div className="step-card">
                        <div className="icon">✅</div>
                        <h3>Apply & Succeed</h3>
                        <p>
                          Review your personalized recommendations and apply to
                          internships that truly match your goals and abilities.
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="why-choose">
                    <h2>Why Choose DISHAA?</h2>
                    <p className="subtitle">
                      Built specifically for Indian students with limited
                      digital exposure and <br />
                      no prior internship experience
                    </p>

                    <div className="features">
                      <div className="feature-card">
                        <div className="icon">🧠</div>
                        <h3>AI-Powered Matching</h3>
                        <p>
                          Smart recommendations based on your skills, interests,
                          and location preferences
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="icon">🎯</div>
                        <h3>Personalized Results</h3>
                        <p>
                          Get 3-5 top internship matches instead of browsing
                          hundreds of listings
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="icon">👥</div>
                        <h3>For Everyone</h3>
                        <p>
                          Designed for first-generation learners from rural
                          areas, tribal districts, and urban slums
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="icon">📍</div>
                        <h3>Location-Based</h3>
                        <p>
                          Find opportunities near you or explore remote
                          internship options
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="success-stories">
                    <h2>Success Stories</h2>
                    <p className="subtitle">
                      Hear from students who found their dream internships with
                      DISHAA
                    </p>

                    <div className="testimonials">
                      <div className="testimonial-card">
                        <div className="rating">★★★★★</div>
                        <div className="quote">
                          <p>
                            "DISHAA helped me find the perfect tech internship.
                            The AI recommendations were spot-on!"
                          </p>
                        </div>
                        <div className="student-info">
                          <h4>Priya Sharma</h4>
                          <p>Computer Science Student</p>
                          <p>Rural Maharashtra</p>
                        </div>
                      </div>

                      <div className="testimonial-card">
                        <div className="rating">★★★★★</div>
                        <div className="quote">
                          <p>
                            "As a first-generation college student, DISHAA made
                            internship hunting so much easier."
                          </p>
                        </div>
                        <div className="student-info">
                          <h4>Amit Kumar</h4>
                          <p>Engineering Student</p>
                          <p>Jharkhand Tribal Area</p>
                        </div>
                      </div>

                      <div className="testimonial-card">
                        <div className="rating">★★★★★</div>
                        <div className="quote">
                          <p>
                            "Got my dream internship in just 2 weeks thanks to
                            DISHAA's smart recommendations."
                          </p>
                        </div>
                        <div className="student-info">
                          <h4>Sneha Patel</h4>
                          <p>Business Student</p>
                          <p>Gujarat</p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="cta-section">
                    <div className="cta-container">
                      <h2>Ready to Find Your Perfect Internship?</h2>
                      <p>
                        Join thousands of students who have already discovered
                        amazing
                        <br />
                        opportunities through DISHAA
                      </p>
                      <button className="cta-button">Get Started Now →</button>
                    </div>
                  </section>
                  <footer className="footer">
                    <div className="footer-container">
                      <div className="footer-brand">
                        <h3>DISHAA</h3>
                        <p>AI Internship Recommendations</p>
                        <p className="government-text">
                          A Government of India initiative under the PM
                          Internship Scheme, helping students discover the right
                          opportunities.
                        </p>
                      </div>

                      <div className="footer-links">
                        <div className="footer-column">
                          <h4>Platform</h4>
                          <ul>
                            <li>
                              <Link to="/browseinternship">
                                Browse Internships
                              </Link>
                            </li>
                            <li>
                              <Link to="/partners">Partner Companies</Link>
                            </li>
                            <li>
                              <Link to="/about">About DISHAA</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="footer-column">
                          <h4>Support</h4>
                          <ul>
                            <li>
                              <Link to="/help">Help Center</Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="footer-column">
                          <h4>Legal</h4>
                          <ul>
                            <li>
                              <Link to="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                              <Link to="/terms">Terms of Service</Link>
                            </li>
                            <li>
                              <Link to="/accessibility">Accessibility</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-bottom">
                      <p>
                        © 2025 DISHAA - Government of India. All rights
                        reserved.
                      </p>
                    </div>
                  </footer>
                </>
              }
            />
            {/* SignIn and SignUp routes removed, only Register remains */}
            <Route path="/browseinternship" element={<BrowseInternship />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

function AuthButtons() {
  const { user, setUser } = useContext(UserContext);
  const navigate = require('react-router-dom').useNavigate();
  if (user) {
    return (
      <div className="auth-buttons">
        <button
          className="auth-btn"
          onClick={() => {
            setUser(null);
            navigate("http://localhost:3000");
          }}
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className="auth-buttons">
      <Link to="/authpage" className="auth-btn">SignIn</Link>
      <Link to="/register" className="auth-btn">SignUp</Link>
    </div>
  );
}

export default App;
