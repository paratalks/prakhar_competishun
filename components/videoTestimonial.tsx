import React from "react";
import Image from "next/image";
import { icons, illustrations } from "@/constants";
import { redirect, RedirectType } from "next/navigation";

const VideoTestimonial = () => {
  return (
    <div className={"w-full"}>
      <div
        className={
          "w-[20vw] h-[50vh] relative flex justify-center rounded-3xl gradientBorder"
        }
      >
        <Image
          src={illustrations.illustration1}
          alt={"testimonial"}
          width={200}
          height={200}
          className={"object-fill bg-black h-full w-full rounded-3xl"}
        />
        <div
          className={
            "absolute bg-blue-900 bottom-2 z-10 p-2 w-11/12 rounded-2xl h-[6vh]"
          }
        >
          <div className={"w-full h-full flex flex-row items-center"}>
            <a href="https://youtube.com/" target={"_blank"}>
              <button
                className={
                  "bg-white/[0.2] p-3 items-center flex w-fit rounded-xl"
                }
              >
                <Image
                  src={icons.playButton}
                  alt={"Play"}
                  width={50}
                  height={50}
                  className={"w-4 object-contain"}
                />
              </button>
            </a>
            <div className={"flex flex-1 flex-col pl-2"}>
              <p className={"text-white text-sm"}>Hear from our Champions!</p>
              <p className={"text-white text-sm"}>1:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoTestimonial;
