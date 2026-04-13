import express from "express";
import Profile from "../models/Profile.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: "No token" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};

router.post("/", auth, async (req, res) => {
  try {
    const body = req.body;

    const updateData = {
      ...body,
      userId: req.user.id,

      // 🔥 FORCE correct structure
      preferences: {
        sector: body.preferences?.sector || "",
        type: body.preferences?.type || "",
        duration: body.preferences?.duration || "",
      },
    };

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.id },
      updateData,
      { returnDocument: "after", upsert: true }
    );

    res.json(profile);
  } catch (err) {
    console.error("PROFILE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const profile = await Profile.findOne({ userId: req.user.id });
  res.json(profile);
});

export default router;