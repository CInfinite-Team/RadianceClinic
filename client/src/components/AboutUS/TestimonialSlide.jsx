import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import InvertedComa from "../../assets/SharedAssets/InvertedComa.svg";

const TestimonialSlide = ({ data }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col gap-10  justify-center mb-10 items-center">
      {" "}
      <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] relative aspect-square rounded-full">
        {" "}
        <div className="z-10 overflow-hidden rounded-full w-full h-full bg-black relative">
          {" "}
          <video
            ref={videoRef}
            src={data.video}
            className="w-full h-full"
            // muted
            playsInline
            onEnded={() => setIsPlaying(false)}
          />{" "}
          <button
            onClick={handleVideoClick}
            className="bg-[#ffffff86] p-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500 hover:scale-110"
          >
            {" "}
            <span className="bg-[#ffffff94] rounded-full w-12 h-12 flex items-center justify-center">
              {" "}
              {isPlaying ? (
                <Pause color="white" />
              ) : (
                <Play color="white" />
              )}{" "}
            </span>{" "}
          </button>{" "}
        </div>{" "}
        <div className="p-2 md:p-3 z-10 lg:p-4 rounded-full bg-white absolute right-0 bottom-0">
          {" "}
          <img loading='lazy' width="auto" height="auto" src={InvertedComa} alt="Inverted Coma" className="w-8" />{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col">
        <h3 className="text-4xl text-[#CDAE62] font-ElMessiri">{data.Name}</h3>
        <p className="text-[#554075] text-center">{data.Position}</p>
      </div>
      <p className="text-[#554075] z-10 text-center w-[90vw] lg:w-[76vw] xl:w-[54vw] 2xl:w-[51%]">
        ‘‘{data.Review}’’
      </p>
    </div>
  );
};

export default TestimonialSlide;