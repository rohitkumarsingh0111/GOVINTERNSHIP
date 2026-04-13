// routes/jobs.js
const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.all("SELECT * FROM jobs", [], (err, rows) => {
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  const { title, company, skills, location } = req.body;

  db.run(
    "INSERT INTO jobs (title, company, skills, location) VALUES (?, ?, ?, ?)",
    [title, company, skills, location],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;