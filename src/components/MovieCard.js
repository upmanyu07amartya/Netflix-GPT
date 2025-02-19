import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4 pb-6 transition-transform transform hover:scale-105 hover:opacity-80">
      <img alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard