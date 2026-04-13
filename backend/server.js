require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 THIS LINE IS CRITICAL
app.use("/api/auth", require("./routes/auth"));
app.use("/api/recommend", require("./routes/recommend"));
app.listen(5002, () => {
  console.log("Server running on port 5002");
});