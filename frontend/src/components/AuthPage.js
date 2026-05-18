
import React, {
  useState,
  useContext
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  UserContext
} from "../context/UserContext";

import {
  loginUser
} from "../services/api";

const AuthPage = () => {

  const { setUser } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const data =
        await loginUser(formData);

      if (data.error) {

        alert(data.error);

        setLoading(false);

        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setUser(data.user);

      navigate("/dashboard");

    } catch (error) {

      alert("Login failed");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* ORANGE GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-orange-400/10 rounded-full blur-3xl"></div>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:55px_55px]"></div>

      {/* FLOATING JOB CARDS */}
      <div className="hidden lg:block absolute left-10 top-32 rotate-[-8deg] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 w-72 shadow-2xl">

        <div className="flex items-center gap-4 mb-4">


          <div>
            <h3 className="text-white font-bold text-lg">
              Frontend Intern
            </h3>
            <p className="text-gray-400 text-sm">
              TechNova • Remote
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
            React
          </span>
          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            JavaScript
          </span>
          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            UI/UX
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-green-400 font-semibold text-sm">
            ₹25k/month
          </p>

          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            95% Match
          </span>
        </div>

      </div>

      {/* SECOND FLOATING CARD */}
      <div className="hidden lg:block absolute right-14 bottom-28 rotate-[8deg] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 w-72 shadow-2xl">

        <div className="flex items-center gap-4 mb-4">

          <div>
            <h3 className="text-white font-bold text-lg">
              AI Research Intern
            </h3>
            <p className="text-gray-400 text-sm">
              Smart Solutions • Hybrid
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
            Python
          </span>
          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            AI
          </span>
          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            ML
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-green-400 font-semibold text-sm">
            ₹30k/month
          </p>

          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Trending
          </span>
        </div>

      </div>

      {/* LOGIN CARD */}
      <div className="w-full max-w-md relative z-10">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] relative overflow-hidden">

          {/* CARD GLOW */}
          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-orange-500/15 rounded-full blur-3xl"></div>

          {/* LOGO */}
          <div className="relative z-10 mb-8">

            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
              Find Your
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent block">
                Dream Internship
              </span>
            </h1>

            <p className="text-gray-400 leading-7 text-sm">
              Explore premium opportunities, build skills, and launch your career with top companies across India.
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 relative z-10"
          >

            {/* EMAIL */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password:
                      e.target.value
                  })
                }
              />

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-bold py-4 rounded-2xl shadow-2xl shadow-orange-500/30 mt-3 text-lg"
            >

              {loading
                ? "Logging in..."
                : "Login & Explore Opportunities"}

            </button>

          </form>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-8 relative z-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-orange-400 text-2xl font-bold">
                100+
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Internships
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-orange-400 text-2xl font-bold">
                50+
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Companies
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-orange-400 text-2xl font-bold">
                24/7
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Access
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthPage;

