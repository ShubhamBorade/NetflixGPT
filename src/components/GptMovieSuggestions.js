import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;

  return (
    <div className="bg-black opacity-90 mt-5">
      {movieNames.map((movie, index) => (
        <MovieList title={movie} key={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
