import Movie from "../models/movieModel.js";

// Lấy danh sách tất cả phim
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm phim mới
export const addMovie = async (req, res) => {
  try {
    const { name, time, year, introduce } = req.body;
    const image = req.file.filename;

    if (!name || !time || !year || !image || !introduce) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newMovie = new Movie({ name, time, year, image, introduce });
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

// Sửa thông tin phim
export const updateMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa phim
export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tìm kiếm phim theo tên
export const searchMoviesByName = async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword || typeof keyword !== "string") {
    return res.status(400).json({ message: "Invalid keyword" });
  }
  try {
    const movies = await Movie.find({
      name: { $regex: keyword, $options: "i" },
    });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy danh sách phim được sắp xếp theo năm
export const getMoviesSortedByYear = async (req, res) => {
  try {
    let order = req.query.order; // Lấy giá trị của tham số order từ query string
    let sortOrder = 1; // Mặc định là sắp xếp tăng dần

    // Kiểm tra xem tham số order là 'desc' hay không
    if (order && order.toLowerCase() === "desc") {
      sortOrder = -1; // Nếu là 'desc' thì sắp xếp giảm dần
    }

    // Sử dụng sortOrder để sắp xếp danh sách phim theo năm
    const movies = await Movie.find().sort({ year: sortOrder });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// export const uploadImage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const movie = await Movie.findById(id);
//     if (!movie) {
//       return res.status(404).json({ message: "Movie not found" });
//     }

//     // Lưu đường dẫn của hình ảnh vào cơ sở dữ liệu
//     movie.image = req.file.filename;
//     await movie.save();
//     res.json({ message: "Image uploaded successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
