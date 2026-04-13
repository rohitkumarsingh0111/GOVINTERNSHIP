const API = "http://localhost:5002";

// AUTH
export const registerUser = async (data) => {
  const res = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// RECOMMENDATION
export const getRecommendations = async (skills) => {
  const res = await fetch(`${API}/api/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ skills }),
  });
  return res.json();
};

// JOBS
export const getJobs = async () => {
  const res = await fetch(`${API}/api/jobs`);
  return res.json();
};