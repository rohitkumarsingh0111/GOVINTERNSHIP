import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Footer from "./Footer";

  const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [profileCompletion, setProfileCompletion] = useState(0);

  useEffect(() => {
    const savedCompletion = localStorage.getItem('profileCompletion');
    if (savedCompletion) {
      setProfileCompletion(parseInt(savedCompletion));
    }
  }, []);

  const handleBrowseInternships = (e) => {
    e.preventDefault();
    navigate('/browseinternship');
  };

  return (
    <div className="dashboard-container">
    
      {/* Main Content */}
      <div className="dashboard-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Welcome back, {user?.name || "User"}! 👋</h2>
          <p>Ready to discover your next opportunity?</p>
        </section>

        {/* Profile Completion */}
        <div className="profile-completion-section">
          <h3>Complete Your Profile</h3>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${profileCompletion}%`}}></div>
            </div>
            <span className="progress-text">{profileCompletion}% complete - Add skills and preferences to get better recommendations</span>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Applications Sent</div>
            <div className="stat-trend">+3 this week</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">48</div>
            <div className="stat-label">Profile Views</div>
            <div className="stat-trend">+15 this week</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">156</div>
            <div className="stat-label">Skill Matches</div>
            <div className="stat-trend">Based on profile</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">Learning Hours</div>
            <div className="stat-trend">This month</div>
          </div>
        </div>

        {/* Action Cards Section */}
        <div className="action-cards-section">
          <div className="action-card">
            <div className="action-icon">⚙️</div>
            <h3>Update Preferences</h3>
            <p>Refine your internship preferences to get better matches</p>
          </div>

          <div className="action-card">
            <div className="action-icon">🔍</div>
            <h3 onClick={handleBrowseInternships} style={{cursor: 'pointer'}}>Browse All Internships</h3>
            <p>Explore hundreds of opportunities across different sectors</p>
          </div>

          <div className="action-card">
            <div className="action-icon">📊</div>
            <h3>Skills Assessment</h3>
            <p>Take assessments to showcase your abilities to employers</p>
          </div>
        </div>

        {/* Recommended Internships Section */}
        <div className="recommended-section">
          <div className="recommended-header">
            <h2>Recommended for You</h2>
            <p>Personalized matches based on your profile and preferences</p>
          </div>

          <div className="internship-cards">
            {/* Frontend Developer Intern */}
            <div className="internship-card">
              <div className="card-header">
                <h3>Frontend Developer Intern</h3>
                <span className="match-badge">95% Match</span>
              </div>
              <h4 className="company-name">Tech Solutions Ltd.</h4>
              
              <div className="internship-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <span>3 months</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>Apply by Dec 15, 2024</span>
                </div>
              </div>
              
              <p className="internship-desc">
                Join our dynamic team to build modern web applications using React and latest frontend technologies. Perfect for students looking to gain hands-on experience.
              </p>
              
              <div className="divider"></div>
              
              <div className="job-details">
                <span className="job-type full-time">Full-time</span>
                <span className="salary">₹15,000/month</span>
              </div>
              
              <div className="tech-tags-container">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS</span>
                <span className="more-tags">+1 more</span>
              </div>
              
              <div className="divider"></div>
              
              <div className="card-actions">
                <button className="apply-btn">Apply Now</button>
                <button className="view-btn">View Details</button>
              </div>
            </div>

            {/* Data Science Intern */}
            <div className="internship-card">
              <div className="card-header">
                <h3>Data Science Intern</h3>
                <span className="match-badge">88% Match</span>
              </div>
              <h4 className="company-name">Analytics Pro</h4>
              
              <div className="internship-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <span>6 months</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>Apply by Dec 20, 2024</span>
                </div>
              </div>
              
              <p className="internship-desc">
                Work on real-world data science projects and contribute to AI-driven solutions for enterprise clients.
              </p>
              
              <div className="divider"></div>
              
              <div className="job-details">
                <span className="job-type remote">Remote</span>
                <span className="salary">₹20,000/month</span>
              </div>
              
              <div className="tech-tags-container">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">SQL</span>
                <span className="more-tags">+1 more</span>
              </div>
              
              <div className="divider"></div>
              
              <div className="card-actions">
                <button className="apply-btn">Apply Now</button>
                <button className="view-btn">View Details</button>
              </div>
            </div>

            {/* Digital Marketing Intern */}
            <div className="internship-card">
              <div className="card-header">
                <h3>Digital Marketing Intern</h3>
                <span className="match-badge">82% Match</span>
              </div>
              <h4 className="company-name">Creative Agency Inc.</h4>
              
              <div className="internship-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Delhi, Delhi</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <span>4 months</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>Apply by Dec 25, 2024</span>
                </div>
              </div>
              
              <p className="internship-desc">
                Learn digital marketing strategies and execute campaigns for leading brands in various industries.
              </p>
              
              <div className="divider"></div>
              
              <div className="job-details">
                <span className="job-type part-time">Part-time</span>
                <span className="salary">₹12,000/month</span>
              </div>
              
              <div className="tech-tags-container">
                <span className="tech-tag">Social Media</span>
                <span className="tech-tag">Content Writing</span>
                <span className="tech-tag">SEO</span>
                <span className="more-tags">+1 more</span>
              </div>
              
              <div className="divider"></div>
              
              <div className="card-actions">
                <button className="apply-btn">Apply Now</button>
                <button className="view-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">📋</div>
              <div className="activity-content">
                <p>Applied to Frontend Developer position at Tech Solutions Ltd.</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon">👀</div>
              <div className="activity-content">
                <p>Profile viewed by Analytics Pro Hiring team</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon">✅</div>
              <div className="activity-content">
                <p>Completed JavaScript skill assessment - Score: 85/100</p>
                <span className="activity-time">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
