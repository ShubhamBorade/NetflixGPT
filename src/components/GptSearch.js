import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
     <div className="fixed -z-10">
        <img className="max-[786px]:h-screen max-[786px]:object-cover" src={BG_URL} alt="bgimage" />
      </div>
    <div className="max-[640px]:pt-[20%]"> 
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearch;
