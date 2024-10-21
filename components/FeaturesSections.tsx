import React from "react";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";

import { feature_Row1, feature_Row2, icons, illustrations } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesSections = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <section className={"featuresSection mt-12 relative"}>
      <div className={"w-full flex mt-56 justify-center"}>
        <div
          className={
            "feature-section-content z-10 pb-36 relative flex flex-col gap-y-24 items-center justify-center w-full"
          }
        >
          <motion.img
            src={icons.flower}
            alt={"flowers"}
            className={"absolute top-20 left-0 opacity-50"}
          />
          <motion.img
            src={icons.flower}
            alt={"flowers"}
            width={40}
            className={"absolute bottom-0 right-10 opacity-50"}
          />
          <h1
            className={
              "feature-section-title text-center text-2xl sm:text-3xl lg:text-5xl px-4"
            }
          >
            Get All the <ScribledHighlightedText textInput={"benefit"} /> of our
            iconic <br className="hidden sm:block" /> revision course, Enroll
            Now!
          </h1>
          <div
            className={
              "flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-y-0 lg:gap-x-14 w-full  px-4"
            }
          >
            <div className={"flex flex-col gap-y-10 w-full lg:w-1/2"}>
              {feature_Row1.map((item, index) => (
                <div
                  key={index}
                  className={
                    "bg-primary flex hover:scale-110 transition-all duration-300 flex-row max-sm:flex-col  gap-x-8 rounded-3xl p-2 border border-white items-start justify-start"
                  }
                >
                  <div
                    className={
                      "h-full max-sm:h-fit overflow-hidden w-fit  max-sm:w-full rounded-3xl p-2 bg-[#FFDCC7]"
                    }
                  >
                    <Image
                      unoptimized
                      src={illustrations.illustration1}
                      alt={"Animation"}
                      width={150}
                      height={100}
                      objectFit={"contain"}
                    />
                  </div>
                  <div className={"flex flex-col py-5 w-full lg:w-1/2 h-full"}>
                    <h3 className={"text-xl lg:text-2xl font-extrabold"}>
                      {item.title}
                    </h3>
                    <p className={"overflow-hidden h-1/2 text-sm lg:text-base"}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={"flex flex-col gap-y-10 w-full lg:w-1/2"}>
              {feature_Row2.map((item, index) => (
                <div
                  key={index}
                  className={
                    "bg-primary flex hover:scale-110 transition-all duration-300 flex-row max-sm:flex-col  gap-x-8 rounded-3xl p-2 border border-white items-start justify-start"
                  }
                >
                  <div
                    className={
                      "h-full max-sm:h-fit overflow-hidden w-fit  max-sm:w-full rounded-3xl p-2 bg-[#FFDCC7]"
                    }
                  >
                    <Image
                      unoptimized
                      src={illustrations.illustration1}
                      alt={"Animation"}
                      width={150}
                      height={100}
                      objectFit={"contain"}
                    />
                  </div>
                  <div className={"flex flex-col py-5 w-full lg:w-1/2 h-full"}>
                    <h3 className={"text-xl lg:text-2xl font-extrabold"}>
                      {item.title}
                    </h3>
                    <p className={"overflow-hidden h-1/2 text-sm lg:text-base"}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSections;
