import React, { useState } from 'react';

const SkillsForm = ({ onSkillsSubmit, loading }) => {
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSkillsSubmit(skills);
  };

  return (
    <div className="skills-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter your skills (e.g., Python, SQL, React)"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </form>
    </div>
  );
};

export default SkillsForm;