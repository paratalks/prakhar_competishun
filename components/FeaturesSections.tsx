import React from "react";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";

import { icons, illustrations } from "@/constants";
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
          <h1 className={"feature-section-title "}>
            Get All the <ScribledHighlightedText textInput={"benefit"} /> of our
            iconic <br /> revision course, Enroll Now!
          </h1>
          <div className={"flex flex-row justify-between gap-x-14"}>
            <div className={"flex flex-col flex-wrap gap-y-10 w-1/2"}>
              {...Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={
                    "bg-primary flex hover:scale-110 transition-all duration-300 flex-row gap-x-8 rounded-3xl p-2 border border-white items-start justify-start"
                  }
                >
                  <div
                    className={
                      "h-full overflow-hidden w-fit rounded-3xl p-2 bg-[#FFDCC7]"
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
                  <div className={"flex flex-col h-full py-5 w-1/2"}>
                    <h3 className={"text-2xl font-extrabold h-1/2"}>
                      150 Recorded Lecture
                    </h3>
                    <p className={""}>
                      Thorougly, covers all important topics across Physics,
                      Chemistry, Mathematics with expertly designed theory
                      classes.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={"flex flex-col gap-y-10 w-1/2"}>
              {...Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={
                    "bg-primary flex hover:scale-110 transition-all duration-300 flex-row gap-x-8 rounded-3xl p-2 border border-white items-start justify-start"
                  }
                >
                  <div
                    className={
                      "h-full overflow-hidden w-fit p-2 rounded-3xl bg-[#FFDCC7]"
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
                  <div className={"flex flex-col h-full py-5 w-1/2"}>
                    <h3 className={"text-2xl font-extrabold h-1/2"}>
                      150 Recorded Lecture
                    </h3>
                    <p className={""}>
                      Thorougly, covers all important topics across Physics,
                      Chemistry, Mathematics with expertly designed theory
                      classes.
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
