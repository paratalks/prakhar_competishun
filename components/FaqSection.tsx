import React from "react";
import Image from "next/image";
import { blurs, Faqs, icons } from "@/constants";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { motion } from "framer-motion";

const FaqSection = () => {
  const [currentlyChoosenQuestion, setCurrentlyChoosenQuestion] =
    React.useState<number>(0);
  return (
    <section className={"w-full relative"}>
      <div className={"w-full flex flex-col items-center gap-y-16"}>
        <div
          className={
            "absolute rounded-full right-28 -top-12 -z-10 bg-secondary blur-[300px] w-96 h-[50dvh] object-cover"
          }
        />
        <h1 className={"text-5xl font-bold"}>
          Having <ScribledHighlightedText textInput={"Doubt?"} /> We are here to
          help
        </h1>
        <div className={"gradientBorder w-full rounded-[2rem] overflow-hidden"}>
          <div className="flex flex-col md:flex-row gap-5 justify-between bg-[#220D00] rounded-[2rem] text-white p-6">
            {/* FAQ Questions */}
            <div className="w-full md:w-1/2 flex flex-col gap-y-2">
              <h2 className={"text-3xl font-extrabold pl-2 mb-2"}>{`FAQ's`}</h2>
              <ul className={"w-full h-full flex flex-col gap-y-2"}>
                {Faqs.map((faq, index) => (
                  <li key={index} className="mb-4 text-2xl font-extrabold">
                    <button
                      className={`${index == currentlyChoosenQuestion ? "bg-primary" : "bg-white text-black"} rounded-xl  w-full py-3 px-4 text-left flex justify-between items-center`}
                      onClick={() => {
                        setCurrentlyChoosenQuestion(index);
                      }}
                    >
                      {faq.question}
                      <motion.span
                        className={"font-normal"}
                        animate={
                          index == currentlyChoosenQuestion
                            ? { rotate: "-90deg" }
                            : {}
                        }
                        transition={{ duration: 0.4 }}
                      >
                        👇
                      </motion.span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Answers Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-y-2">
              <h2 className={"text-3xl font-extrabold pl-2 mb-2"}> Answers </h2>
              <div
                className={
                  "w-full h-full border bg-primary shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-8 rounded-[2rem]"
                }
              >
                <p className="mb-6 text-xl leading-relaxed">
                  {Faqs[currentlyChoosenQuestion].answer}
                </p>
              </div>

              <button className="bg-secondary mt-2 mb-5 text-white hover:shadow-none shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition-all duration-200 font-bold py-4 px-6 rounded-full">
                <motion.img
                  animate={{ rotateX: [0, 30, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  src={icons.handOnVideo}
                  alt={"hand"}
                  width={70}
                  height={50}
                  className={"absolute bottom-0 right-40"}
                />
                Become Champ 🏆
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
