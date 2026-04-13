import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md 
    bg-white/70 backdrop-blur-md sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="font-bold text-2xl text-orange-500 tracking-wide">
        DISHAA
      </h1>

      {/* NAV LINKS */}
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-orange-500 transition">
          Home
        </Link>

        {/* ✅ LOGGED IN */}
        {token && (
          <>
            <Link to="/dashboard" className="hover:text-orange-500 transition">
              Dashboard
            </Link>

            <Link to="/browseinternship" className="hover:text-orange-500 transition">
              Browse
            </Link>

            <Link to="/profile" className="hover:text-orange-500 transition">
              Profile
            </Link>

            {/* 👑 ADMIN */}
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="text-purple-600 font-semibold hover:underline"
              >
                Admin
              </Link>
            )}

            {/* LOGOUT */}
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
            >
              Logout
            </button>
          </>
        )}

        {/* ❌ NOT LOGGED IN */}
        {!token && (
          <>
            <Link
              to="/auth"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white transition"
            >
              Register
            </Link>
            <div className="flex items-center gap-2">
  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
    {user?.email?.charAt(0).toUpperCase()}
  </div>
</div>
          </>
        )}
      </div>
    </div>
  );
}