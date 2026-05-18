import React, {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  registerUser
} from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res =
        await registerUser(formData);

      if (res.error) {

        alert(res.error);

        setLoading(false);

        return;
      }

      alert("Registered Successfully!");

      navigate("/auth");

    } catch (error) {

      alert("Registration failed");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* ORANGE GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-orange-400/10 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:55px_55px]"></div>

      {/* FLOATING LEFT CARD */}
      <div className="hidden lg:block absolute left-10 top-32 rotate-[-8deg] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 w-72 shadow-2xl">

        <div className="flex items-center gap-4 mb-4">

          <div>

            <h3 className="text-white font-bold text-lg">
              UI/UX Design Intern
            </h3>

            <p className="text-gray-400 text-sm">
              Pixel Studio • Remote
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-2 mb-4">

          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
            Figma
          </span>

          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            UI Design
          </span>

          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            Prototyping
          </span>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-green-400 font-semibold text-sm">
            ₹18k/month
          </p>

          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Hiring
          </span>

        </div>

      </div>

      {/* FLOATING RIGHT CARD */}
      <div className="hidden lg:block absolute right-14 bottom-28 rotate-[8deg] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 w-72 shadow-2xl">

        <div className="flex items-center gap-4 mb-4">

          <div>

            <h3 className="text-white font-bold text-lg">
              Software Engineer Intern
            </h3>

            <p className="text-gray-400 text-sm">
              NextGen Tech • Hybrid
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-2 mb-4">

          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
            React
          </span>

          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            Node.js
          </span>

          <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
            MongoDB
          </span>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-green-400 font-semibold text-sm">
            ₹28k/month
          </p>

          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Trending
          </span>

        </div>

      </div>

      {/* REGISTER CARD */}
      <div className="w-full max-w-md relative z-10">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] relative overflow-hidden">

          {/* CARD GLOW */}
          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-orange-500/15 rounded-full blur-3xl"></div>

          {/* HEADER */}
          <div className="relative z-10 mb-8">

            

            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">

              Create Your
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent block">

                Career Account

              </span>

            </h1>

            <p className="text-gray-400 leading-7 text-sm">

              Join thousands of students discovering internships and career opportunities powered by AI.

            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 relative z-10"
          >

            {/* NAME */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block font-medium">

                Full Name

              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
              />

            </div>

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
                placeholder="Create password"
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

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-bold py-4 rounded-2xl shadow-2xl shadow-orange-500/30 mt-3 text-lg"
            >

              {loading
                ? "Creating Account..."
                : "Create Account"}

            </button>

          </form>

          {/* FOOTER */}
          <div className="mt-8 text-center relative z-10">

            <p className="text-gray-500 text-sm">

              Start building your future with DISHAA.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;