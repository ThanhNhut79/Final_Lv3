import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieList.css"; // Import CSS file
import MovieDetail from "./MovieDetail"; // Import MovieDetail component
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };
  return (
    <div className="movie-list">
      <div className="movies-container">
        {movies.slice(currentIndex, currentIndex + 4).map((movie) => (
          <div
            key={movie._id}
            className="movie"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`http://localhost:5000/uploads/${movie.image}`}
              alt={movie.name}
            />
            <h3>{movie.name}</h3>
            <div className="time">
              <p>{movie.time} min </p>
              <p style={{ paddingLeft: "15px" }}>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button className="prev-button" onClick={handlePrevClick}>
          <LeftOutlined />
        </button>
      )}
      {currentIndex + 4 < movies.length && (
        <button className="next-button" onClick={handleNextClick}>
          <RightOutlined />
        </button>
      )}
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default MovieList;
