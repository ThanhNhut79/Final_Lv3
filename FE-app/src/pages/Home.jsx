import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import Header from "../Components/Header/Header";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="home-page">
        <h1>Danh sách phim</h1>
        <MovieList onMovieClick={handleMovieClick} />
        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
}

export default Home;
