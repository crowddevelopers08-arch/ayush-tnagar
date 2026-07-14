import React from "react";

const videos = [
  { src: "https://www.youtube.com/embed/foj1EjAh930" },
  { src: "https://www.youtube.com/embed/QsYk3oy4614" },
  { src: "https://www.youtube.com/embed/cITuCjkaJGA" },
  { src: "https://www.youtube.com/embed/G_cnj3I13pY" },
  { src: "https://www.youtube.com/embed/TolZhRhH_2s" },
];

const VideoTestimonials: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
      {/* Heading */}
      <h2 className="text-black max-[470px]:text-[22px] max-[470px]:mb-4 text-[40px] sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center">
        Hear How Lives Changed Without Surgery
      </h2>

      {/* Video Grid — 3 per row, last row centered */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1"
          >
            <div className="relative w-full aspect-video bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.src}
                title={`Patient testimonial video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 px-4">
        <a
          href="#book"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-transparent bg-[#e13e20] px-9 py-4 text-[0.95rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#c1341a]"
        >
          Start Your Healing Journey
        </a>
      </div>
    </div>
  );
};

export default VideoTestimonials;
