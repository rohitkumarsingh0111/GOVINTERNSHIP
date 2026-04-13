import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Get all jobs
router.get("/jobs", (req, res) => {
  db.all("SELECT * FROM jobs", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add job
router.post("/jobs", (req, res) => {
  const { title, company, skills, location, remote, duration, description } = req.body;

  db.run(
    `INSERT INTO jobs (title, company, skills, location, remote, duration, description) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, company, skills, location, remote, duration, description],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Delete job
router.delete("/jobs/:id", (req, res) => {
  db.run("DELETE FROM jobs WHERE id = ?", req.params.id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

export default router;