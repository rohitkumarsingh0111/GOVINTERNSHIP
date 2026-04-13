import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BrowseInternship.css";

const BrowseInternships = () => {
  const [userSkills, setUserSkills] = useState([]);

  // Load user skills from localStorage
  useEffect(() => {
    const savedProfileData = localStorage.getItem("profileData");

    if (savedProfileData) {
      try {
        const parsedData = JSON.parse(savedProfileData);
        if (parsedData.skills) {
          setUserSkills(parsedData.skills);
        }
      } catch (error) {
        console.error("Error parsing profile data:", error);
      }
    }
  }, []);

  // Check missing skills
  const getMissingSkills = (internshipSkills) => {
    const userSkillsLower = userSkills.map((skill) => skill.toLowerCase());

    return internshipSkills.filter(
      (skill) => !userSkillsLower.includes(skill.toLowerCase())
    );
  };

  // Check if user has skill
  const hasSkill = (skill) => {
    return userSkills.some(
      (userSkill) => userSkill.toLowerCase() === skill.toLowerCase()
    );
  };

  // Dummy data
  const allInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      match: 95,
      company: "Tech Solutions Ltd.",
      location: "Mumbai, Maharashtra",
      duration: "3 months",
      applyBy: "Dec 15, 2024",
      description: "Join our dynamic team to build modern web applications using React and latest frontend technologies. Perfect for students looking to gain hands-on experience in a fast-paced environment.",
      type: "Full-time",
      salary: "₹15,000/month",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      title: "Data Science Intern",
      match: 88,
      company: "Analytics Pro",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      applyBy: "Dec 20, 2024",
      description: "Work on real-world data science projects and contribute to AI-driven solutions for enterprise clients. Great opportunity to work with cutting-edge technologies.",
      type: "Remote",
      salary: "₹20,000/month",
      skills: ["Python", "Machine Learning", "SQL", "Data Analysis"]
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      match: 82,
      company: "Creative Agency Inc.",
      location: "Delhi, Delhi",
      duration: "4 months",
      applyBy: "Dec 25, 2024",
      description: "Learn digital marketing strategies and execute campaigns for leading brands in various industries. Perfect for creative minds with business acumen.",
      type: "Part-time",
      salary: "₹12,000/month",
      skills: ["Social Media", "Content Writing", "SEO", "Google Analytics"]
    },
    {
      id: 4,
      title: "Mobile App Developer Intern",
      match: 91,
      company: "InnovateTech",
      location: "Hyderabad, Telangana",
      duration: "5 months",
      applyBy: "Dec 18, 2024",
      description: "Develop cross-platform mobile applications for startups and established companies. Great opportunity to work on user-facing products.",
      type: "Full-time",
      salary: "₹18,000/month",
      skills: ["React Native", "Flutter", "JavaScript", "Mobile Development"]
    },
    {
      id: 5,
      title: "Content Writing Intern",
      match: 75,
      company: "Media House",
      location: "Chennai, Tamil Nadu",
      duration: "3 months",
      applyBy: "Dec 22, 2024",
      description: "Create engaging content for blogs, social media, and marketing campaigns. Perfect for students passionate about storytelling and communication.",
      type: "Part-time",
      salary: "₹10,000/month",
      skills: ["Writing", "Research", "SEO", "Content Strategy"]
    },
    {
      id: 6,
      title: "UI/UX Design Intern",
      match: 87,
      company: "Design Studio",
      location: "Pune, Maharashtra",
      duration: "4 months",
      applyBy: "Dec 28, 2024",
      description: "Design beautiful and functional user interfaces for web and mobile applications. Work closely with product teams to create amazing user experiences.",
      type: "Full-time",
      salary: "₹16,000/month",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing"]
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInternships, setFilteredInternships] =
    useState(allInternships);

  // Search logic
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setFilteredInternships(allInternships);
    } else {
      const filtered = allInternships.filter((internship) =>
        internship.title.toLowerCase().includes(term) ||
        internship.company.toLowerCase().includes(term) ||
        internship.skills.some((skill) =>
          skill.toLowerCase().includes(term)
        )
      );

      setFilteredInternships(filtered);
    }
  };

  return (
    <div className="browse-container">
      <div className="browse-content-left">

        {/* TITLE */}
        <div className="page-title-left">
          <h2>Browse Internships</h2>
          <p>Discover opportunities across India</p>

          {userSkills.length > 0 && (
            <p><strong>Your skills:</strong> {userSkills.join(", ")}</p>
          )}
        </div>

        {/* SEARCH */}
        <div className="search-section-left">
          <input
            type="text"
            placeholder="Search internships..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input-left"
          />
        </div>

        {/* RESULTS */}
        <div className="results-info-left">
          <h3>{filteredInternships.length} Internships Found</h3>
        </div>

        {/* LIST */}
        <div className="internships-list-left">
          {filteredInternships.length === 0 ? (
            <p>No results found</p>
          ) : (
            filteredInternships.map((internship) => {
              const missingSkills = getMissingSkills(internship.skills);

              return (
                <div key={internship.id} className="internship-item-left">
                  <h3>
                    {internship.title}{" "}
                    <span>{internship.match}% Match</span>
                  </h3>

                  <p>{internship.company}</p>
                  <p>{internship.location}</p>
                  <p>{internship.description}</p>

                  {/* SKILLS */}
                  <div>
                    {internship.skills.map((skill, i) => (
                      <span key={i}>
                        {skill} {hasSkill(skill) ? "✓" : "✗"}
                      </span>
                    ))}
                  </div>

                  {/* MISSING */}
                  {missingSkills.length > 0 && (
                    <p>Missing: {missingSkills.join(", ")}</p>
                  )}

                  {/* BUTTONS */}
                  <div>
                    <button>Apply</button>
                    <button>View</button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CTA */}
        <div className="start-journey-section-left">
          <Link to="/dashboard" className="start-btn">
            Go to Dashboard →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BrowseInternships;