import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (

    <footer className="bg-[#0b0b0b] border-t border-white/10 mt-20 overflow-hidden relative">

      {/* ORANGE GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1500px] mx-auto px-6 py-14 relative z-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 pb-12 border-b border-white/10">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <div>

                <h2 className="text-2xl font-black text-white">

                  DISHAA

                </h2>

                <p className="text-gray-400 text-sm">

                  AI Internship Portal

                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-7 text-sm">

              Smart AI-powered internship recommendation
              platform helping students discover career
              opportunities across India.

            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-white font-bold text-lg mb-5">

              Quick Links

            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Home
              </Link>

              <Link
                to="/dashboard"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/browseinternship"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Browse Internships
              </Link>

              <Link
                to="/profile"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Profile
              </Link>

            </div>

          </div>

          {/* RESOURCES */}
          <div>

            <h3 className="text-white font-bold text-lg mb-5">

              Resources

            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                FAQs
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Guidelines
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Tutorials
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Support
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white font-bold text-lg mb-5">

              Contact

            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <p>
                📧 support@dishaa.ai
              </p>

              <p>
                📍 India
              </p>

              <p>
                ☎ +91 1234567890
              </p>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">

              {[
                "🌐",
                "📘",
                "📸",
                "💼",
              ].map((icon, i) => (

                <div
                  key={i}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer"
                >

                  {icon}

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">

          <div className="flex flex-col gap-2 text-center md:text-left">

  <p className="text-gray-500 text-sm">

    © 2026 DISHAA. All rights reserved.

  </p>

  <p className="text-gray-600 text-sm flex items-center gap-2 justify-center md:justify-start">

    Built with 
    <span className="text-red-400 animate-pulse">
      ❤️
    </span>
    by

    <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent font-bold tracking-wide">

      Rohit

    </span>

  </p>

</div>

          <div className="flex items-center gap-6 text-sm">

            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition"
            >
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;