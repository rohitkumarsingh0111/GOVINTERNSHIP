import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerUser(formData);

    if (res.error) return alert(res.error);

    alert("Registered!");
    navigate("/auth");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow rounded w-80">
        <h2 className="text-xl mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            className="border p-2 w-full mb-2"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            className="border p-2 w-full mb-2"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-2"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button className="bg-orange-500 text-white w-full p-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;