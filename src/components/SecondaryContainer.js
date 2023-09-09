import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieList title={"Up Coming"} movies={movies.addUpComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
