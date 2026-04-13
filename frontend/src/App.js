import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/users";
import Dashboard from "./components/Dashboard";
import BrowseInternships from "./components/BrowseInternship";
import Profile from "./components/Profile";
import AuthPage from "./components/AuthPage";
import Register from "./components/Register";
import Admin from "./pages/admin";

import { getRecommendations } from "./services/api";

function App() {

  // ✅ ADD THESE STATES
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ ADD THIS FUNCTION
  const handleRecommend = async (skills) => {
    setLoading(true);
    try {
      const data = await getRecommendations(skills);
      setJobs(data);
    } catch (err) {
      console.error("Recommendation error:", err);
    }
    setLoading(false);
  };

  return (
    <UserProvider>
      <Router>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Layout>
                <Home
                  onRecommend={handleRecommend}
                  jobs={jobs}
                  loading={loading}
                />
              </Layout>
            }
          />

          {/* PUBLIC */}
          <Route
            path="/browseinternship"
            element={
              <Layout>
                <BrowseInternships />
              </Layout>
            }
          />

          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />

          {/* PROTECTED */}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </Layout>
            }
          />

          {/* AUTH */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<Register />} />

          {/* ADMIN */}
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;