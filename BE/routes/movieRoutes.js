import express from "express";
import multer from "multer";
import path from "path";

import {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  searchMoviesByName,
  getMoviesSortedByYear,
} from "../controllers/movieController.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Sử dụng tên tệp được chuyển từ client nếu có, nếu không sử dụng tên tệp gốc
    const filename = req.body.image || file.originalname;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

// Routes
router.get("/", getAllMovies);
router.post("/", upload.single("image"), addMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.get("/search", searchMoviesByName);
router.get("/sorted", getMoviesSortedByYear);
export default router;
