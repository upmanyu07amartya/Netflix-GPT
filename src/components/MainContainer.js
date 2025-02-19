import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const randomIndex = Math.floor(Math.random() * movies?.length);
  const randomMovie = movies[randomIndex];

  const { id, original_title, overview } = randomMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />

      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
