import React from "react";
import Image from "next/image";
import { images } from "@/constants";

const TextTesimonialWithImage = () => {
  return (
    <div className={"w-full"}>
      <div className={"w-[20vw] h-[50vh] gradientBorder rounded-3xl"}>
        <div
          className={"bg-[#220D00] overflow-hidden w-full h-full rounded-3xl"}
        >
          <Image
            unoptimized
            src={images.testimonial2}
            alt={"sample Image"}
            width={500}
            height={500}
            className={"w-full h-1/2 object-cover"}
          />
          <div className={"w-full h-1/2 p-5"}>
            <p className={"font-extrabold text-lg"}>Yash Rajan, IITM</p>
            <p className={"text-gray-400 leading-loose"}>
              {/*    generate a sample text for 1 paragraph */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed malesuada,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextTesimonialWithImage;
