const express = require("express");
const router = express.Router();

// Example route to get all users
router.get("/admin/users", (req, res) => {
  // Example: returning dummy users
  const users = [
    { id: 1, name: "Rohit", role: "student" },
    { id: 2, name: "Priya", role: "admin" },
  ];
  res.json(users);
});

module.exports = router;
