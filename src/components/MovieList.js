import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative px-6">
      <h1 className="text-2xl py-4 text-white mt-2">{title}</h1>
      <div className="relative">
        {/* Gradient Overlay - Moves with Scrolling */}
        <div className="absolute top-0 left-0 w-12 h-[92.5%] bg-gradient-to-r from-gray-600 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 h-[92.5%] bg-gradient-to-l from-gray-600 to-transparent z-10 pointer-events-none"></div>

        {/* Scrollable Content */}
        <div className="flex overflow-x-scroll hide-scrollbar">
          <div className="flex space-x-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
