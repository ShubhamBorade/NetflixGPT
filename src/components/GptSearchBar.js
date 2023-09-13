import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movies in TMDB once we get the movie names from GPT

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //once we get the i/p from user providing this to GPT API and that API will returns us movie results

    const getQuery =
      "Act as movies recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated, like the example give ahead.Example result:Gadar,Sholay,Don,Golmaa,koi mil gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //when we dont get the result do the error handling here
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    //before:-Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Golmaal
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    //after:- ['Andaz Apna Apna', 'Hera Pheri', 'Chupke Chupke', 'Jaane Bhi Do Yaaro', 'Golmaal']

    //now for each movie we will call TMDB search API to get the movie details using map method and it will returns us an array of promises

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[promise,promise,promise,promise,promise]

    const tmdbResults = await Promise.all(promiseArray);
    //tmdbResults will wait till all the promiese gets resolved, once resolved it will provide us the actuall data.
    console.log(tmdbResults);

    //storing the movies into redux store
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()} // this will not allow our page to refresh when we click on submit button
      >
        <input
          ref={searchText}
          className="p-3 m-4 col-span-9 outline-none"
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
