// app.js
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import cors from "cors";

const app = express();
dotenv.config();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

// Routes
app.use("/api/user", userRoutes);
app.use("/api/movies", movieRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("app is running on port " + process.env.PORT);
});
