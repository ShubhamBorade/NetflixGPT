import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-3 m-4 col-span-9 outline-none"
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
