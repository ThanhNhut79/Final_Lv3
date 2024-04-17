import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    time: { type: Number, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    introduce: String,
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
