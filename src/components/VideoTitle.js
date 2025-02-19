import React from "react";
import { PlayIcon,Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-lg">
        {overview.length > 200 ? overview.slice(0, 200) + "..." : overview}
      </p>
      <div className="flex">
        <button className="bg-white text-black py-4 px-12 text-xl rounded-md flex items-center hover:bg-opacity-80 transition-all">
          <PlayIcon size={24} className="mb-0.5 stroke-black" /> Play
        </button>
        <button className="bg-gray-500 mx-4 text-white p-4 px-12 text-xl bg-opacity-50 flex items-center rounded-md">
          <Info size={24} className="mr-1" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
