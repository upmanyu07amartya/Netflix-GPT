import React,{useState} from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { VolumeX, Volume2 } from "lucide-react"

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    const [isMuted, setIsMuted] = useState(true);
    const handleToggleMute = () => {
      setIsMuted(!isMuted);
    };

  return (
    <div className="w-screen">
      {trailerVideo && trailerVideo.key && (
        <>
          <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${
              trailerVideo.key
            }?&autoplay=1&mute=${isMuted ? 1 : 0}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <button
            className="absolute bottom-14 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
            onClick={handleToggleMute}
          >
            {/* {isMuted ? "🔇" : "🔊"} */}
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </>
      )}
    </div>
  );
};

export default VideoBackground;
