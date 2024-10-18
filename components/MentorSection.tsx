import React, { useState } from "react";
import Image from "next/image";
import { blurs, icons, images, mentorImages, mentors } from "@/constants";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { motion, useAnimate } from "framer-motion";

const MentorSection = () => {
  const sequence = [["ul", { opacity: 1 }, { duration: 1 }]];
  const [scope, animate] = useAnimate();
  const [animatingMentorIndex, setAnimatingMentorIndex] = useState(-1);

  return (
    <section className={"w-full h-full flex flex-col items-center"}>
      <div className={"absolute w-screen h-[150dvh]"}>
        <Image
          unoptimized
          src={blurs.mentorSectionBlur}
          className={
            "absolute w-screen blur-md opacity-50 h-screen scale-125 -z-40"
          }
          alt={"bg-blur"}
          fill
          objectFit={"cover"}
        />
      </div>
      <div className={"absolute w-screen h-full"}>
        <Image
          unoptimized
          src={icons.wave}
          className={"absolute w-screen bottom-0 -z-40"}
          alt={"bg-blur"}
          width={1920}
          height={1080}
        />
      </div>
      <div
        className={
          "section-content w-full h-full pt-40 z-40 flex flex-col items-center"
        }
      >
        <motion.img
          src={images.logo}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ rotateZ: "30deg" }}
          className={"absolute top-32 left-40 opacity-50 z-10"}
          alt={"bg-blur"}
          width={150}
          height={150}
        />
        <motion.img
          animate={{ y: [0, 10, 0], rotateZ: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          src={images.logo}
          className={"absolute top-48 right-40 -rotate-6 opacity-50 z-10"}
          alt={"bg-blur"}
          width={80}
          height={150}
        />
        <div className={"w-1/2 flex flex-col items-center justify-center"}>
          <h1 className={"section-title w-full text-5xl font-bold text-center"}>
            Your Journey <ScribledHighlightedText textInput={"Mentors"} />
          </h1>
          <p className={"mt-2 text-gray-400 text-center"}>
            {`learn from the one's who've already helped Thousands of Students
              achieve their dream`}
          </p>
        </div>
        <motion.div
          whileInView={
            animatingMentorIndex != -1 ? { scaleX: [0.01, 1], y: [200, 0] } : {}
          }
          transition={{
            scaleX: { duration: 0.6, delay: 0.5, ease: "easeIn" },
            y: { duration: 0.5 },
          }}
          className={`h-[30dvh] mt-10 gradientBorder w-[80%] rounded-3xl  ${animatingMentorIndex != -1 ? "flex" : "hidden"}`}
        >
          <div
            className={
              "w-full h-full bg-[#220D00] rounded-3xl flex flex-col p-5"
            }
          >
            <motion.div
              whileInView={
                animatingMentorIndex != -1 ? { opacity: [0, 1] } : {}
              }
              transition={{ duration: 1, delay: 1 }}
              className={"flex flex-row items-center opacity-0"}
            >
              <h1 className={"text-5xl font-bold p-5 border-r"}>
                {animatingMentorIndex != -1 &&
                  mentors[animatingMentorIndex].title}
              </h1>
              <p className={"p-5"}>
                {animatingMentorIndex != -1 &&
                  mentors[animatingMentorIndex].desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className={"absolute w-full h-screen bottom-0"}>
          <div className={" w-full absolute overflow-hidden bottom-0 z-20"}>
            <div className={"h-[90dvh] flex items-center list justify-center "}>
              {mentors.map((item, index) => (
                <motion.img
                  onHoverStart={() => {
                    setAnimatingMentorIndex(index);
                  }}
                  onHoverEnd={() => {
                    setAnimatingMentorIndex(-1);
                  }}
                  key={index}
                  whileInView={{ x: [0, item.movement] }}
                  transition={{
                    duration: item.animationDuration,
                    ease: "easeOut",
                  }}
                  className={`absolute z-[5] bottom-0 transition-all duration-300`}
                  src={item.image}
                  alt={"mohitsir"}
                  width={
                    animatingMentorIndex != -1 && animatingMentorIndex == index
                      ? item.dimension * 1.2
                      : item.dimension
                  }
                  height={item.dimension}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MentorSection;
