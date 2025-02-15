import React, { useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import InvertedComa from '../../assets/SharedAssets/InvertedComa.svg';
import testimonial from '../../assets/SharedAssets/testimonial.svg';

const TestimonialCard = ({ 
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
      className="flex flex-col relative rounded-[5px] group overflow-hidden z-20 border border-[#A287CF] bg-white max-w-[350px] lg:min-h-[600px] max-h-[600px] p-4 justify-start sm:ml-36 md:ml-20 mb-10 items-center transform transition-all duration-300 hover:scale-[1] hover:shadow-xl"
    >
      <div className={`${hoveredIndex === index ? 'opacity-100 z-50' : ''} opacity-0 bg-[#fdf2ff39] justify-center flex transition-all duration-500 w-full left-0 top-0 h-full backdrop-blur-lg items-center absolute`}>
        <button
          onClick={() => setShowPopup(true)}
          className="underline font-ElMessiri font-bold text-xl text-[#554075] hover:scale-110 transition-transform"
        >
          Register Interest
        </button>
      </div>
    
      <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] mb-3 relative aspect-square mx-auto rounded-full transition-transform duration-300 hover:scale-105">
        {data.video === '' ? (
          <img src={testimonial} alt="" className="object-cover" />
        ) : (
          <div className='rounded-full relative group overflow-hidden w-full h-full bg-black'>
            <button 
              onClick={handleVideoClick}
              className={`bg-[#ffffff86] p-2 rounded-full ${playingVideo && 'opacity-0'} transition duration-500 group-hover:opacity-100 flex items-center justify-center top-1/2 z-30 left-1/2 cursor-pointer absolute -translate-x-1/2 -translate-y-1/2  hover:scale-110`}
            >
              <span className='bg-[#ffffff94] rounded-full w-12 h-12 flex items-center justify-center'>
                {playingVideo === index ? <Pause color='white' /> : <Play color='white' />}
              </span>
            </button>

            <video 
              id={`video-${index}`}
              ref={videoRef}
              src={data.video} 
              className="w-full h-full" 
              playsInline
              onEnded={() => setPlayingVideo(null)}
            />
          </div>
        )}

        <div className="p-2 md:p-3 lg:p-4 rounded-full bg-white shadow-md absolute right-0 bottom-0 animate-bounce">
          <img src={InvertedComa} alt="" className="w-8" />
        </div>
      </div>

      <div className="flex flex-col mb-3" onMouseEnter={() => setHoveredIndex(index)}>
        <h3 className="text-2xl font-bold md:text-4xl text-[#4d3c69] text-center font-ElMessiri z-10 hover:scale-105 transition-transform">{data.Treatment}</h3>
        <p className="text-[#41335A] text-center text-xl font-ElMessiri font-bold z-10">{data.Name}</p>
        <p className="text-[#554075] text-center z-10">{data.Position}</p>
        <p className="text-[#554075] text-center mt-3 z-10">''{data.Review}''</p>
      </div>
    </div>
  );
};

export default TestimonialCard;