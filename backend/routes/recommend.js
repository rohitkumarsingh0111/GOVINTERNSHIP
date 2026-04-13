const router = require("express").Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { skills } = req.body;

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/recommend",
      { skills }
    );

    res.json(response.data);
  } catch (err) {
    console.error("ML ERROR:", err.message);
    res.status(500).json({ error: "ML service failed" });
  }
});

module.exports = router;