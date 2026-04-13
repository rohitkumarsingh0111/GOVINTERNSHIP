import React, { useState } from "react";

const Home = ({ onRecommend, jobs = [], loading = false }) => {
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skills.trim()) return alert("Enter skills");
    onRecommend(skills);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-orange-100 to-white">
        <h1 className="text-5xl font-bold text-gray-800">
          Find Your Perfect <span className="text-orange-500">Internship</span>
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          AI-powered internship recommendations based on your skills, interests,
          and career goals.
        </p>

        {/* SEARCH BAR */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex justify-center gap-2"
        >
          <input
            type="text"
            placeholder="Enter skills (React, Python, SQL...)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-96 p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Get Recommendations
          </button>
        </form>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-10 text-center">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-500">10K+</h2>
          <p className="text-gray-600">Internships</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-500">50K+</h2>
          <p className="text-gray-600">Students</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-500">95%</h2>
          <p className="text-gray-600">Match Accuracy</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-500">500+</h2>
          <p className="text-gray-600">Companies</p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="px-10 py-10">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">
    Recommended Internships
  </h2>

  {loading && <p>Loading recommendations...</p>}

  {!loading && (!jobs || jobs.length === 0) && (
    <p className="text-gray-500">No recommendations yet.</p>
  )}

  <div className="grid md:grid-cols-3 gap-6">
    {jobs?.map((job, i) => {
      // ✅ SAFE SKILLS HANDLING
      let skillsArray = [];

      if (Array.isArray(job.skills)) {
        skillsArray = job.skills;
      } else if (typeof job.skills === "string") {
        skillsArray = job.skills.split(",");
      }

      return (
        <div
          key={job.id || i}
          className="bg-white shadow-md p-5 rounded-xl hover:shadow-xl transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            {job?.title || "No Title"}
          </h3>

          <p className="text-gray-500">{job?.company || "Unknown Company"}</p>

          <p className="text-sm text-gray-400 mt-2">
            📍 {job?.location || "N/A"}
          </p>

          <div className="mt-3 text-orange-500 font-semibold">
            Match:{" "}
            {job?.match_score
              ? (job.match_score * 100).toFixed(1)
              : 0}
            %
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {skillsArray.map((skill, i) => (
              <span
                key={i}
                className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose DISHAA?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-orange-500">
              🤖 AI Powered
            </h3>
            <p className="text-gray-600 mt-2">
              Smart recommendations based on your skills.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-500">
              🎯 Personalized
            </h3>
            <p className="text-gray-600 mt-2">
              Tailored internships just for you.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-500">
              🌍 For Everyone
            </h3>
            <p className="text-gray-600 mt-2">
              Built for students across India.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-orange-500 text-white">
        <h2 className="text-3xl font-bold">
          Start Your Career Journey Today 
        </h2>
        <p className="mt-3">
          Join thousands of students finding internships with AI
        </p>
      </section>

    </div>
  );
};

export default Home;