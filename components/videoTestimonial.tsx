import React from "react";
import Image from "next/image";
import { icons, illustrations } from "@/constants";

const VideoTestimonial = ({
  name = "Yash",
  videoLink = "https://manwith.codes",
  image = illustrations.illustration1,
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[60vw] lg:w-[30vw] h-[30vh] sm:h-[40vh] lg:h-[50vh]  relative flex justify-center rounded-3xl gradientBorder">
        <Image
          unoptimized
          src={image || illustrations.illustration1}
          alt={name}
          width={200}
          height={200}
          className="object-fill bg-black h-full w-full rounded-3xl"
        />
        <div className="absolute bg-blue-900 bottom-2 z-10 p-2 w-11/12 rounded-2xl h-[6vh] flex items-center">
          <a href={videoLink} target="_blank" rel="noopener noreferrer">
            <button
              aria-label="Play Video Testimonial"
              className="bg-white/[0.2] p-3 flex items-center w-fit rounded-xl"
            >
              <Image
                unoptimized
                src={icons.playButton}
                alt="Play"
                width={50}
                height={50}
                className="w-4 object-contain"
              />
            </button>
          </a>
          <div className="flex-1 flex flex-col pl-2 text-white">
            <p className="text-xs lg:text-sm text-nowrap">
              Hear from our Champions!
            </p>
            <p className="text-sm">1:45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
