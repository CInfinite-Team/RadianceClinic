import React, { useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import InvertedComa from '../../assets/SharedAssets/InvertedComa.svg';


const TestimonialCardNew = ({ 
  data, 
  index, 
  playingVideo, 
  setPlayingVideo, 
  hoveredIndex, 
  setHoveredIndex, 
  setShowPopup 
}) => {
  const videoRef = useRef();

  const handleVideoClick = () => {
    if (playingVideo === index) {
      videoRef.current.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        const prevVideo = document.querySelector(`#video-${playingVideo}`);
        if (prevVideo) prevVideo.pause();
      }
      videoRef.current.play();
      setPlayingVideo(index);
    }
  };

  return (
    <div 
      onMouseLeave={() => setHoveredIndex(null)}
      className="flex flex-col ml-3 sm:flex-row h-fit bg-white shadow-md my-4 rounded-lg overflow-hidden"
    >

        
      {/* Video section */}
      <div className="relative group w-fit h-fit">
        <video
          id={`video-${index}`}
          ref={videoRef}
          src={data.video}
          className="  object-cover"
          playsInline
          onEnded={() => setPlayingVideo(null)}
        >
           <source src={data.video} type="video/mp4" />
           <track src={data.VTTfile} kind="subtitles" srclang="Hindi" label="Hindi"></track>
          </video>
      <button 
                    onClick={handleVideoClick}
                    className={`bg-[#ffffff86] p-2 rounded-full ${playingVideo === index && 'opacity-0'} transition duration-500 group-hover:opacity-100 flex items-center justify-center top-1/2 z-30 left-1/2 cursor-pointer absolute -translate-x-1/2 -translate-y-1/2  hover:scale-110`}
                  >
                    <span className='bg-[#ffffff94] rounded-full w-12 h-12 flex items-center justify-center'>
                      {playingVideo === index ? <Pause color='white' /> : <Play color='white' />}
                    </span>
                  </button>
      </div>

      {/* Quote section */}
      <div className="flex flex-col justify-center p-6 pr-3 xl:p-8 xl:pr-3 relative ">
      <img src={InvertedComa} alt="" className='absolute top-0 xl:top-10 left-3 w-28 lg:w-[10vw] z-0 opacity-40 ' />
            <blockquote className="text-xl z-10 xl:text-2xl 2xl:text-[2.4vw] 2xl:leading-tight font-light text-[#52436A] mb-4 leading-relaxed">
            “{data.ReviewHalf}
              <span className="text-purple-900 font-normal">{data.bold}</span> {data.ReviewRest}”
            </blockquote>
            <p className=" z-10  text-zinc-400 italic 2xl:text-[1.4vw]">{data.conclusion}</p>
          </div>
    </div>
  );
};

export default TestimonialCardNew;
