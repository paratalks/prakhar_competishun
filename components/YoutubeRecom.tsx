import Image from "next/image";
import { motion } from "framer-motion";
import { icons } from "@/constants";

const YoutubeRecom = () => {
  return (
    <div
      className={
        "stackedView-container w-full relative flex flex-col items-center justify-center"
      }
    >
      {/*<div*/}
      {/*  className={*/}
      {/*    " absolute stackedView-page -z-10 bg-primary h-[50vh] w-10/12 translate-y-2"*/}
      {/*  }*/}
      {/*/>*/}
      <div
        className={
          " absolute stackedView-page bg-background h-[50vh] -top-5 w-10/12 p-5 rounded-3xl translate-y-2"
        }
      />
      <div className={"h-fit rounded-3xl w-10/12 gradientBorder z-10"}>
        <motion.img
          animate={{
            rotateX: [0, 20],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src={icons.handOnVideo}
          alt={"hand svg"}
          className={"absolute -bottom-20 right-10"}
        />
        <iframe
          src="https://www.youtube.com/embed/QpeWhM0q0jw"
          frameBorder="0"
          width={"100%"}
          height={700}
          className={"rounded-3xl"}
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default YoutubeRecom;
