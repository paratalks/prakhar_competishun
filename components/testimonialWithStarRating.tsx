import React, { useEffect } from "react";
import { icons, illustrations, images } from "@/constants";
import Image from "next/image";
import { useAnimate, useInView } from "framer-motion";
import { stagger } from "framer-motion/dom";
import testimonials from "@/components/Testimonials";

const TestimonialWithStarRating = ({
  name = "Yash Rajan",
  achievement = "IIT Madras",
  image = illustrations.illustration1,
  testimonial = "If you're coaching individuals or teams in specific areas like sports, business, or fitness, you may receive feedback in the form of improved performance metrics, such as increased revenue or athletic performance.",
  rating = 4.5,
}) => {
  const startSize = 25;
  const [starScope, starAnimation] = useAnimate();
  const isInView = useInView(starScope);

  const starAnimationHandler = () => {
    starAnimation(
      ".star",
      {
        y: [-15, 0],
        opacity: [0, 1],
      },
      {
        duration: 2,
        repeat: Infinity,
        delay: stagger(0.2, { from: "first" }),
      },
    );
  };

  useEffect(() => {
    if (isInView) {
      starAnimationHandler();
    }
  }, [isInView]);

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full md:w-[60vw] lg:w-[30vw]  rounded-3xl">
        <div className="absolute flex flex-col h-[500px]  w-full gap-y-4">
          <div className="rounded-3xl h-full gradientBorder p-2">
            <div className="top-0 h-full w-full bg-[#220D00] rounded-3xl p-5">
              <div className="flex flex-col h-full w-full gap-y-4">
                <div className="flex flex-row gap-x-4">
                  <Image
                    unoptimized
                    src={image || illustrations.illustration1}
                    alt="Testimonial user"
                    width={80}
                    height={80}
                    className="rounded-full w-10 h-10 object-fill"
                  />
                  <div className="flex flex-col gap-y-0 justify-center h-full align-middle">
                    <p className="text-primary">{name}</p>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                </div>
                <p className="text-gray-300  leading-normal sm:leading-relaxed lg:leading-loose max-sm:text-gray-500 overflow-hidden">
                  {testimonial}
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit rounded-2xl gradientBorder p-2">
            <div className=" w-full h-fit bg-[#220D00] rounded-2xl">
              <div className="flex flex-row gap-x-4 w-full h-full items-center justify-center p-2">
                <div
                  ref={starScope}
                  className="flex flex-row flex-1 px-2 justify-between gap-x-5 align-middle"
                >
                  {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                    <Image
                      key={i}
                      unoptimized
                      className="star lg:w-6 sm:w-5 w-4"
                      src={icons.star}
                      alt={`Star ${i + 1}`}
                      width={startSize}
                      height={startSize}
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm bg-blue-900 p-2 rounded-xl">
                  {`${rating}/5`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWithStarRating;
