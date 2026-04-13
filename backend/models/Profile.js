import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  location: String,
  about: String,

  education: {
    degree: String,
    university: String,
    year: String,
    cgpa: String,
  },

  skills: [String],

  // ✅ FIXED HERE
  preferences: {
  sector: { type: String, default: "" },
  type: { type: String, default: "" },
  duration: { type: String, default: "" },
},

  socialLinks: {
    linkedin: String,
    github: String,
    portfolio: String,
  },

  resume: {
    name: String,
    size: Number,
    type: String,
    data: [Number],
  },

  profileImage: String,
});

export default mongoose.model("Profile", profileSchema);