import React, { useState } from "react";
import Footer from "../components/Footer";

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

    <div className="min-h-screen bg-[#f5f7fb] overflow-x-hidden">

      {/* HERO */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <div className="bg-white rounded-[28px] border border-gray-200 overflow-hidden relative shadow-sm">

          {/* BG GLOW */}
          <div className="absolute top-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-10 lg:p-16">

            {/* LEFT */}
            <div className="relative z-10">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5">

                🚀 AI Powered Internship Matching

              </div>

              {/* TITLE */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">

                Find Your
                <span className="text-orange-500 block">
                  Dream Internship
                </span>

              </h1>

              {/* SUBTITLE */}
              <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl">

                Explore personalized internship opportunities
                powered by AI. Match your skills with top
                companies across India.

              </p>

              {/* SEARCH */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-4"
              >

                <input
                  type="text"
                  placeholder="Enter skills (React, Python, AI...)"
                  value={skills}
                  onChange={(e) =>
                    setSkills(e.target.value)
                  }
                  className="flex-1 px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-orange-500 text-sm sm:text-base"
                />

                <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-6 sm:px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 text-sm sm:text-base">

                  Get Recommendations

                </button>

              </form>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">

                {[
                  ["100+", "Opportunities"],
                  ["50+", "Companies"],
                  ["95%", "Match Accuracy"],
                  ["AI", "Powered"],
                ].map((item, i) => (

                  <div
                    key={i}
                    className={`rounded-2xl p-4 sm:p-5 text-center border ${
                      i === 0
                        ? "bg-orange-50 border-orange-100"
                        : "bg-white border-gray-200"
                    }`}
                  >

                    <h3 className={`text-2xl sm:text-3xl font-bold ${
                      i === 0
                        ? "text-orange-500"
                        : "text-gray-900"
                    }`}>

                      {item[0]}

                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mt-1">

                      {item[1]}

                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex flex-col gap-6">

              {/* CARD 1 */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-5 sm:p-6">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">

                  <div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">

                      Frontend Developer Intern

                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base">

                      TechNova • Remote

                    </p>

                  </div>

                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-xs sm:text-sm font-bold w-fit">

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
                      className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-5 sm:p-6 lg:ml-10">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">

                  <div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">

                      AI Research Intern

                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base">

                      Smart Solutions • Hybrid

                    </p>

                  </div>

                  <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs sm:text-sm font-bold w-fit">

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
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm"
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
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 py-5">

        <div className="mb-8">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">

            Recommended Opportunities

          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">

            Personalized AI recommendations based on your skills

          </p>

        </div>

        {/* LOADING */}
        {loading && (

          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center text-gray-500">

            Loading recommendations...

          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          (!jobs || jobs.length === 0) && (

          <div className="bg-white rounded-3xl border border-gray-200 p-10 sm:p-16 text-center">

            <div className="text-5xl sm:text-6xl mb-5">
              🔍
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">

              No Recommendations Yet

            </h3>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">

              Enter your skills above to discover internships.

            </p>

          </div>
        )}

        {/* JOBS */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

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
                className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-7 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="flex items-start justify-between gap-4 mb-5">

                  <div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">

                      {job?.title ||
                        "No Title"}

                    </h3>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">

                      {job?.company ||
                        "Unknown Company"}

                    </p>

                  </div>

                  <div className="bg-orange-100 text-orange-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">

                    {job?.match_score
                      ? (
                          job.match_score *
                          100
                        ).toFixed(1)
                      : 0}
                    %

                  </div>

                </div>

                <p className="text-gray-500 mb-4 text-sm sm:text-base">

                  📍 {job?.location || "N/A"}

                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {skillsArray.map(
                    (skill, i) => (

                      <span
                        key={i}
                        className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >

                        {skill.trim()}

                      </span>
                    )
                  )}

                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base">

                  Apply Now

                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 py-16 sm:py-20">

        <div className="text-center mb-12 sm:mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">

            Why Choose DISHAA?

          </h2>

          <p className="text-gray-500 mt-4 text-base sm:text-lg">

            Smart internship discovery platform powered by AI

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {[
            ["🤖", "AI Powered", "Advanced recommendation engine matching students with perfect opportunities."],
            ["🎯", "Personalized", "Skill-based internship recommendations tailored for your growth."],
            ["🌍", "Nationwide Access", "Discover internships from top companies all across India."],
          ].map((item, i) => (

            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 text-center hover:shadow-xl transition"
            >

              <div className="text-5xl mb-6">

                {item[0]}

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">

                {item[1]}

              </h3>

              <p className="text-gray-500 leading-8 text-sm sm:text-base">

                {item[2]}

              </p>

            </div>
          ))}

        </div>

      </section>

    <Footer/>
    </div>
  
);
};


export default Home;