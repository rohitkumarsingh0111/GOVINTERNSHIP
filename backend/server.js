import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import recommendRoutes from "./routes/recommend.js";
import adminRoutes from "./routes/admin.js";
import profileRoutes from "./routes/profile.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/admin", adminRoutes);


app.use("/api/profile", profileRoutes);

// Server
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});