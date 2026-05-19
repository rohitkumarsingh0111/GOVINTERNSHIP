import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./BrowseInternship.css";
import Footer from "./Footer";

const BrowseInternships = () => {

  const [userSkills, setUserSkills] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [visibleCount, setVisibleCount] =
    useState(6);

  const [allInternships, setAllInternships] =
    useState([]);

  const [
    filteredInternships,
    setFilteredInternships
  ] = useState([]);

  /* LOAD USER SKILLS */
  useEffect(() => {

    const savedProfileData =
      localStorage.getItem("profileData");

    if (savedProfileData) {

      try {

        const parsedData =
          JSON.parse(savedProfileData);

        if (parsedData.skills) {
          setUserSkills(parsedData.skills);
        }

      } catch (error) {

        console.error(
          "Error parsing profile data:",
          error
        );

      }
    }

  }, []);

  /* LOAD CSV */
  useEffect(() => {

    Papa.parse("/data/sampledata.csv", {

      download: true,

      header: true,

      skipEmptyLines: true,

      complete: (results) => {

        const formattedData =
          results.data.map((item, index) => ({

            id: item.id || index + 1,

            title:
              item.title || "Internship",

            company:
              item.company || "Company",

            location:
              item.location || "India",

            description:
              item.description ||
              "No description available",

            duration:
              item.duration || "3 Months",

            applyBy:
              item.applyBy || "Open",

            type:
              item.type || "Full-time",

            salary:
              item.salary ||
              "₹15,000/month",

            match:
              Math.floor(
                Math.random() * 20
              ) + 80,

            skills:
              item.required_skills
                ? item.required_skills
                    .split(",")
                    .map(skill =>
                      skill.trim()
                    )
                : [],

          }));

        setAllInternships(formattedData);

        setFilteredInternships(
          formattedData
        );

      },

    });

  }, []);

  /* MISSING SKILLS */
  const getMissingSkills = (
    internshipSkills
  ) => {

    const userSkillsLower =
      userSkills.map(skill =>
        skill.toLowerCase()
      );

    return internshipSkills.filter(
      skill =>
        !userSkillsLower.includes(
          skill.toLowerCase()
        )
    );
  };

  /* USER HAS SKILL */
  const hasSkill = (skill) => {

    return userSkills.some(
      userSkill =>
        userSkill.toLowerCase() ===
        skill.toLowerCase()
    );
  };

  /* SEARCH */
  const handleSearch = (e) => {

    const term =
      e.target.value.toLowerCase();

    setSearchTerm(term);

    if (!term) {

      setFilteredInternships(
        allInternships
      );

    } else {

      const filtered =
        allInternships.filter(
          internship =>

            internship.title
              ?.toLowerCase()
              .includes(term) ||

            internship.company
              ?.toLowerCase()
              .includes(term) ||

            internship.skills?.some(
              skill =>
                skill
                  .toLowerCase()
                  .includes(term)
            )
        );

      setFilteredInternships(filtered);

    }
  };

  return (

    <div className="browse-container">

      <div className="browse-content-left">

        {/* HERO */}
        <div className="page-title-left">

          <h2>
            Browse Internships
          </h2>

          <p>
            Discover opportunities
            across India
          </p>

          {userSkills.length > 0 && (
            <p>
              <strong>
                Your skills:
              </strong>{" "}
              {userSkills.join(", ")}
            </p>
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

          <h3>
            {
              filteredInternships.length
            }{" "}
            Internships Found
          </h3>

        </div>

        {/* INTERNSHIP LIST */}
        <div className="internships-list-left">

          {filteredInternships.length === 0 ? (

            <p>No results found</p>

          ) : (

            filteredInternships
              .slice(0, visibleCount)
              .map((internship) => {

                const missingSkills =
                  getMissingSkills(
                    internship.skills
                  );

                return (

                  <div
                    key={internship.id}
                    className="internship-item-left"
                  >

                    {/* TOP */}
                    <div className="card-top">

                      <h3>
                        {internship.title}
                      </h3>

                      <span className="match-tag">
                        {
                          internship.match
                        }% Match
                      </span>

                    </div>

                    <p className="company-name">
                      {internship.company}
                    </p>

                    <p className="location">
                      📍{" "}
                      {internship.location}
                    </p>

                    <p className="duration">
                      ⏳{" "}
                      {internship.duration}
                    </p>

                    <p className="salary">
                      💰{" "}
                      {internship.salary}
                    </p>

                    <p className="apply-by">
                      📅 Apply By:{" "}
                      {
                        internship.applyBy
                      }
                    </p>

                    <p className="description">
                      {
                        internship.description
                      }
                    </p>

                    {/* SKILLS */}
                    <div className="skills-wrapper">

                      {internship.skills.map(
                        (skill, i) => (

                          <span
                            key={i}
                            className={
                              hasSkill(skill)
                                ? "skill-have"
                                : "skill-missing"
                            }
                          >

                            {skill}{" "}

                            {hasSkill(skill)
                              ? "✓"
                              : "✗"}

                          </span>
                        )
                      )}

                    </div>

                    {/* MISSING */}
                    {missingSkills.length >
                      0 && (

                      <p className="missing-text">

                        Missing:{" "}

                        {
                          missingSkills.join(
                            ", "
                          )
                        }

                      </p>

                    )}

                    {/* BUTTONS */}
                    <div className="card-buttons">

                      <button>
                        Apply
                      </button>

                      <button>
                        View
                      </button>

                    </div>

                  </div>
                );
              })
          )}

        </div>

        {/* VIEW MORE */}
        {visibleCount <
          filteredInternships.length && (

          <div className="view-more-section">

            <button
              className="view-more-btn"
              onClick={() =>
                setVisibleCount(
                  filteredInternships.length
                )
              }
            >

              View More Internships

            </button>

          </div>
        )}

      </div>
      <Footer/>
    </div>
  );
};

export default BrowseInternships;