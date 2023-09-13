import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  //if there is no posterpath available then dont show that movies
  if (!posterpath) return null;

  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterpath} alt="poster" />
    </div>
  );
};

export default MovieCard;
