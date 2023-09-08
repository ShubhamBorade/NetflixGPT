import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-opacity-90">
          ▶ Play
        </button>
        <button className="mx-2 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
