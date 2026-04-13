import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <p className="job-company">{job.company}</p>
      <p className="job-location">📍 {job.location}</p>
      <p>Match Score: {(job.match_score * 100).toFixed(2)}%</p>
      <div className="job-skills">
        {job.skills.split(',').map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;