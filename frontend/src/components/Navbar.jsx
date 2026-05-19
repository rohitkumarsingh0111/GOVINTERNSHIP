import React, {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

export default function Navbar() {

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem("token");

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const logout = () => {

    localStorage.clear();

    navigate("/auth");
  };

  return (

    <header className="sticky top-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-2xl border-b border-white/10">

      <div className="max-w-[1500px] mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-4"
          >


            {/* TEXT */}
            <div>

              <h1 className="text-2xl font-black tracking-wide text-white">

                DISHAA

              </h1>

              <p className="text-xs text-gray-400">

                AI Based Internship Portal

              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-300 hover:text-orange-400 transition font-medium"
            >
              Home
            </Link>

            {token && (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-orange-400 transition font-medium"
                >
                  Dashboard
                </Link>

                <Link
                  to="/browseinternship"
                  className="text-gray-300 hover:text-orange-400 transition font-medium"
                >
                  Browse
                </Link>

                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-orange-400 transition font-medium"
                >
                  Profile
                </Link>

                {/* ADMIN */}
                {user?.role ===
                  "admin" && (

                  <Link
                    to="/admin"
                    className="text-purple-400 font-semibold hover:text-purple-300 transition"
                  >
                    Admin
                  </Link>

                )}
              </>
            )}

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-4">

            {/* NOT LOGGED */}
            {!token && (
              <>
                <Link
                  to="/auth"
                  className="text-orange-400 font-semibold hover:text-orange-300 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition shadow-lg shadow-orange-500/20"
                >
                  Register
                </Link>
              </>
            )}

            {/* LOGGED IN */}
            {token && (
              <>

                {/* USER */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">

                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">

                    {user?.email
                      ?.charAt(0)
                      .toUpperCase()}

                  </div>

                  <div>

                    <p className="text-sm text-white font-semibold">

                      {user?.name ||
                        "User"}

                    </p>

                    <p className="text-xs text-gray-400">

                      {user?.role ||
                        "Student"}

                    </p>

                  </div>

                </div>

                {/* LOGOUT */}
                <button
                  onClick={logout}
                  className="bg-red-500/90 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl font-semibold transition"
                >

                  Logout

                </button>

              </>
            )}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
            className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl"
          >

            {mobileMenu
              ? "✕"
              : "☰"}

          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (

          <div className="lg:hidden mt-5 bg-[#121212] border border-white/10 rounded-3xl p-6 flex flex-col gap-5 shadow-2xl">

            <Link
              to="/"
              className="text-gray-300 hover:text-orange-400 transition font-medium"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              Home
            </Link>

            {token && (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-orange-400 transition font-medium"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Dashboard
                </Link>

                <Link
                  to="/browseinternship"
                  className="text-gray-300 hover:text-orange-400 transition font-medium"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Browse
                </Link>

                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-orange-400 transition font-medium"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Profile
                </Link>

                {user?.role ===
                  "admin" && (

                  <Link
                    to="/admin"
                    className="text-purple-400 font-semibold"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    Admin
                  </Link>

                )}

                {/* USER */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 mt-2">

                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">

                    {user?.email
                      ?.charAt(0)
                      .toUpperCase()}

                  </div>

                  <div>

                    <p className="text-sm text-white font-semibold">

                      {user?.name ||
                        "User"}

                    </p>

                    <p className="text-xs text-gray-400">

                      {user?.role ||
                        "Student"}

                    </p>

                  </div>

                </div>

                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition mt-2"
                >

                  Logout

                </button>
              </>
            )}

            {!token && (
              <>

                <Link
                  to="/auth"
                  className="text-orange-400 font-semibold"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-2xl font-semibold text-center shadow-lg shadow-orange-500/20"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >

                  Register

                </Link>

              </>
            )}

          </div>
        )}

      </div>

    </header>
  );
}