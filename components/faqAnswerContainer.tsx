import React from "react";
import { Faqs, icons } from "@/constants";
import { motion } from "framer-motion";

const FaqAnswerContainer = ({ answer }: { answer: string }) => {
  return (
    <>
      <h2 className="text-3xl font-extrabold pl-2 mb-2">Answers</h2>
      <div className="w-full h-full border bg-primary shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5 md:p-8 rounded-[2rem]">
        <p className="mb-6 text-lg sm:text-lg font-normal  leading-relaxed">
          {answer}
        </p>
      </div>
      <a href="https://rzp.io/rzp/YfK1Axui" className={"w-full h-fit"}>
        <button className="bg-secondary mt-5 md:mt-2 mb-5 w-full text-white hover:shadow-none shadow-[5px_5px_0px_0px_rgba(255,255,255)]  transition-all duration-200 font-bold py-4 px-6 rounded-full relative">
          <motion.img
            animate={{ rotateX: [0, 30, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src={icons.handOnVideo}
            alt="hand icon"
            width={70}
            height={50}
            className="absolute -bottom-10 right-8"
          />
          Become Champ 🏆
        </button>
      </a>
    </>
  );
};
export default FaqAnswerContainer;
