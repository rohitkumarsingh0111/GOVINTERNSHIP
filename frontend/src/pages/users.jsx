import React, { useState } from "react";

const Home = ({
  onRecommend,
  jobs = [],
  loading = false,
}) => {

  const [skills, setSkills] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!skills.trim()) {
      return alert("Enter skills");
    }

    onRecommend(skills);
  };

  return (

    <div className="min-h-screen bg-[#f5f7fb]">


      {/* HERO SECTION */}
      <section className="max-w-[1500px] mx-auto px-6 py-10">

        <div className="bg-white rounded-[30px] border border-gray-200 overflow-hidden relative">

          {/* BG GLOW */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">

            {/* LEFT */}
            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                 AI Powered Internship Matching
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">

                Find Your
                <span className="text-orange-500 block">
                  Dream Internship
                </span>

              </h1>

              <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">

                Explore personalized internship opportunities
                powered by AI. Match your skills with top
                companies across India.

              </p>

              {/* SEARCH */}
              <form
                onSubmit={handleSubmit}
                className="mt-10 bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-4"
              >

                <input
                  type="text"
                  placeholder="Enter skills (React, Python, AI...)"
                  value={skills}
                  onChange={(e) =>
                    setSkills(e.target.value)
                  }
                  className="flex-1 px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-orange-500"
                />

                <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20">

                  Get Recommendations

                </button>

              </form>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center">

                  <h3 className="text-3xl font-bold text-orange-500">
                    100+
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Opportunities
                  </p>

                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">

                  <h3 className="text-3xl font-bold text-gray-900">
                    50+
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Companies
                  </p>

                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">

                  <h3 className="text-3xl font-bold text-gray-900">
                    95%
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Match Accuracy
                  </p>

                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">

                  <h3 className="text-3xl font-bold text-gray-900">
                    AI
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Powered
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              {/* FLOATING CARDS */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 mb-6">

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      Frontend Developer Intern
                    </h3>

                    <p className="text-gray-500">
                      TechNova • Remote
                    </p>

                  </div>

                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold">
                    95% Match
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {[
                    "React",
                    "JavaScript",
                    "Tailwind",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 ml-10">

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      AI Research Intern
                    </h3>

                    <p className="text-gray-500">
                      Smart Solutions • Hybrid
                    </p>

                  </div>

                  <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                    Trending
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {[
                    "Python",
                    "AI",
                    "Machine Learning",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RESULTS */}
      <section className="max-w-[1500px] mx-auto px-6 py-5">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-gray-900">
              Recommended Opportunities
            </h2>

            <p className="text-gray-500 mt-2">
              Personalized AI recommendations based on your skills
            </p>

          </div>

        </div>

        {loading && (

          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center text-gray-500">

            Loading recommendations...

          </div>
        )}

        {!loading &&
          (!jobs || jobs.length === 0) && (

          <div className="bg-white rounded-3xl border border-gray-200 p-16 text-center">

            <div className="text-6xl mb-5">
              🔍
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              No Recommendations Yet
            </h3>

            <p className="text-gray-500 mt-3">
              Enter your skills above to discover internships.
            </p>

          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">

          {jobs?.map((job, i) => {

            let skillsArray = [];

            if (Array.isArray(job.skills)) {
              skillsArray = job.skills;
            } else if (
              typeof job.skills === "string"
            ) {
              skillsArray =
                job.skills.split(",");
            }

            return (

              <div
                key={job.id || i}
                className="bg-white rounded-3xl border border-gray-200 p-7 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="flex items-start justify-between mb-5">

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900">

                      {job?.title ||
                        "No Title"}

                    </h3>

                    <p className="text-gray-500 mt-2">

                      {job?.company ||
                        "Unknown Company"}

                    </p>

                  </div>

                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold">

                    {job?.match_score
                      ? (
                          job.match_score *
                          100
                        ).toFixed(1)
                      : 0}
                    %

                  </div>

                </div>

                <p className="text-gray-500 mb-4">

                  📍{" "}
                  {job?.location || "N/A"}

                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {skillsArray.map(
                    (skill, i) => (

                      <span
                        key={i}
                        className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                      >

                        {skill.trim()}

                      </span>
                    )
                  )}

                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-bold">

                  Apply Now

                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-[1500px] mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">

            Why Choose DISHAA?

          </h2>

          <p className="text-gray-500 mt-4 text-lg">

            Smart internship discovery platform powered by AI

          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center">

            <div className="text-5xl mb-6">
              🤖
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">

              AI Powered

            </h3>

            <p className="text-gray-500 leading-8">

              Advanced recommendation engine matching students with perfect opportunities.

            </p>

          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center">

            <div className="text-5xl mb-6">
              🎯
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">

              Personalized

            </h3>

            <p className="text-gray-500 leading-8">

              Skill-based internship recommendations tailored for your growth.

            </p>

          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center">

            <div className="text-5xl mb-6">
              🌍
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">

              Nationwide Access

            </h3>

            <p className="text-gray-500 leading-8">

              Discover internships from top companies all across India.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;