import React, { useEffect } from "react";
import { icons, images } from "@/constants";
import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
// Universal
import { animate, stagger } from "framer-motion/dom";
const TestimonialWithStarRating = () => {
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
    <div className={"w-full"}>
      <div className={"w-[20vw] rounded-3xl"}>
        <div className={"flex flex-col h-[50vh] w-full relative gap-y-4"}>
          <div className={" rounded-3xl h-full gradientBorder p-2 "}>
            <div className={"top-0 h-full w-full bg-[#220D00] rounded-3xl p-5"}>
              <div className={"flex flex-col h-full w-full gap-y-4"}>
                <div className={"flex flex-row gap-x-4"}>
                  <Image
                    unoptimized
                    src={images.testimonial}
                    alt={"testimonial"}
                    width={80}
                    height={80}
                    className={"rounded-full w-10 h-10 object-fill"}
                  />
                  <div
                    className={
                      "flex flex-col gap-y-0  justify-center h-full align-middle"
                    }
                  >
                    <p className={"text-primary"}>John Doe</p>
                    <p className={"text-gray-500"}>Student at IIT</p>
                  </div>
                </div>
                <p className={"text-gray-300 leading-loose"}>
                  {`If you're coaching individuals or teams in specific areas like
                    sports, business, 😎 or fitness, you may receive feedback in
                    the form of improved performance metrics, such as increased
                    revenue, improved athletic performance.`}
                </p>
              </div>
            </div>
          </div>
          <div className={" rounded-2xl gradientBorder p-2"}>
            <div className={"h-[7vh] bottom-1 w-full bg-[#220D00] rounded-2xl"}>
              <div
                className={
                  "flex flex-row gap-x-4 w-full h-full items-center justify-center p-2"
                }
              >
                <div
                  ref={starScope}
                  className={
                    "flex flex-row justify-between gap-x-5 align-middle"
                  }
                >
                  <Image
                    unoptimized
                    className={"star w-6"}
                    src={icons.star}
                    alt={"star"}
                    width={startSize}
                    height={startSize}
                  />
                  <Image
                    unoptimized
                    className={"star  w-6"}
                    src={icons.star}
                    alt={"star"}
                    width={startSize}
                    height={startSize}
                  />
                  <Image
                    unoptimized
                    className={"star  w-6"}
                    src={icons.star}
                    alt={"star"}
                    width={startSize}
                    height={startSize}
                  />
                  <Image
                    unoptimized
                    className={"star  w-6"}
                    src={icons.star}
                    alt={"star"}
                    width={startSize}
                    height={startSize}
                  />
                  <Image
                    unoptimized
                    className={"star  w-6"}
                    src={icons.star}
                    alt={"star"}
                    width={startSize}
                    height={startSize}
                  />
                </div>
                <p className={"text-gray-300 bg-blue-900 p-2 rounded-xl"}>
                  4.5/5
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
