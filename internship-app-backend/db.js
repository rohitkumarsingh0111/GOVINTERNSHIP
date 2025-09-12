const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file ka path
const dbPath = path.resolve(__dirname, "internships.db");

// DB connection open karo
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ DB connection error:", err.message);
  } else {
    console.log("✅ SQLite connected at", dbPath);
  }
});

// Jobs table create karo agar nahi hai
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    company TEXT,
    skills TEXT,
    location TEXT,
    remote TEXT,
    duration TEXT,
    description TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    skills TEXT
  )`);
});

module.exports = db;
