import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between">
      <h1 className="font-bold text-xl text-orange-500">DISHAA</h1>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>

        {/* 👇 SHOW ONLY IF LOGGED IN */}
        {token && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/browseinternship">Browse</Link>
            <Link to="/profile">Profile</Link>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}

        {/* 👇 SHOW ONLY IF NOT LOGGED IN */}
        {!token && (
          <>
            <Link to="/auth" className="text-orange-500 font-semibold">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}