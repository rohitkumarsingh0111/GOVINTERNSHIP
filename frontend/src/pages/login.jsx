import { useState } from "react";
import { login } from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const data = await login(form);
    localStorage.setItem("token", data.token);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow w-80">
        <input
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({...form, email:e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({...form, password:e.target.value})}
        />
        <button className="bg-orange-500 text-white p-2 w-full" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}