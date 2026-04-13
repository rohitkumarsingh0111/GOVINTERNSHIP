import { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

export default function Admin() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", company: "", skills: "" });

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:4000/api/admin/jobs");
    setJobs(res.data);
  };

  const addJob = async () => {
    await axios.post("http://localhost:4000/api/admin/jobs", newJob);
    setNewJob({ title: "", company: "", skills: "" });
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:4000/api/admin/jobs/${id}`);
    fetchJobs();
  };

  useEffect(() => { fetchJobs(); }, []);

  return (
    <div className="admin-dashboard">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul className="admin-nav">
          <li><a href="#" className="active">📋 Jobs</a></li>
          <li><a href="#">👥 Users</a></li>
          <li><a href="#">📊 Reports</a></li>
          <li><a href="#">⚙️ Settings</a></li>
        </ul>
      </aside>

      {/* Main content */}
      <div className="admin-main">
        <header className="admin-navbar">Internship Dashboard</header>

        <div className="admin-content">
          <h1 className="admin-title">Manage Jobs</h1>

          {/* Add Job Form */}
          <div className="admin-form">
            <input
              placeholder="Job Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              className="admin-input"
            />
            <input
              placeholder="Company"
              value={newJob.company}
              onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
              className="admin-input"
            />
            <input
              placeholder="Skills (comma-separated)"
              value={newJob.skills}
              onChange={(e) => setNewJob({ ...newJob, skills: e.target.value })}
              className="admin-input"
            />
            <button onClick={addJob} className="admin-btn admin-btn-add">
              ➕ Add Job
            </button>
          </div>

          {/* Jobs Table */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Skills</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.skills}</td>
                  <td>
                    <button
                      onClick={() => deleteJob(job.id)}
                      className="admin-btn admin-btn-delete"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
