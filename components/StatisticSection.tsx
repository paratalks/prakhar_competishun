import React, { useEffect, useRef, useState } from "react";
import { blurs, images } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { getStatsData } from "@/lib/fetchData";
import { Models } from "appwrite";
const StatisticSection = () => {
  const [statsData, setStatsData] =
    useState<Models.DocumentList<Models.Document>>();
  const fetchData = async () => {
    await getStatsData().then((res) => setStatsData(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section
      className={"w-full h-full relative flex flex-col items-center mt-32"}
    >
      <div className={"absolute w-screen h-full"}>
        <Image
          unoptimized
          src={blurs.statisticsBlur}
          className={"absolute w-screen -z-40"}
          alt={"bg-blur"}
          fill
          objectFit={"cover"}
        />
      </div>
      <div
        className={
          "section-content w-full h-full p-20 z-40 flex flex-col items-center gap-20 sm:gap-32"
        }
      >
        <h1
          className={
            "section-title text-3xl sm:text-3xl lg:text-5xl font-bold text-center"
          }
        >
          Join <span className={"text-primary"}>Competishun</span> <br />{" "}
          Community, Your way to IIT
        </h1>
        <div
          className={
            "h-full w-screen flex flex-col  items-center justify-center"
          }
        >
          <div className={"flex flex-row justify-between w-full px-5  z-10"}>
            <motion.div
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={
                " md:absolute popAnimation bg-purple-800 rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 top-[30%] lg:left-[15%] left-0 scale-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-purple-500"
              }
            >
              <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
                <span
                  className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
                >
                  {statsData
                    ? statsData.documents[0].statsDesc1
                    : `12k+ \n Aspiring IITians`}{" "}
                  <br /> Selection
                </span>{" "}
              </h2>
            </motion.div>
            <motion.div
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={
                " md:absolute popAnimation bg-primary rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 top-[35%] lg:right-[10%] right-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-primary"
              }
            >
              <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
                <span
                  className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
                >
                  {statsData
                    ? statsData.documents[0].statsDesc2
                    : `12k+ \n Aspiring IITians`}{" "}
                  <br /> Selection
                </span>{" "}
              </h2>
            </motion.div>
          </div>
          <Carousel
            plugins={[
              AutoPlay({
                delay: 3000,
              }),
            ]}
            opts={{
              loop: true,
            }}
            className={"md:w-1/3  gap-0 flex justify-center"}
          >
            <CarouselContent className={"w-full"}>
              {/*{...Array.from({ length: 3 }).map((_, index) => (*/}
              <CarouselItem
                className={"flex flex-row gap-x-5 p-0 w-fit justify-center "}
              >
                <div
                  className={
                    "gradientBorder relative rounded-3xl w-fit flex flex-col items-center"
                  }
                  style={{ padding: 2 }}
                >
                  <div
                    className={
                      "absolute z-10 w-full h-full flex flex-col items-center rounded-3xl bg-gradient-to-t from-black to-transparent"
                    }
                  />
                  <h2
                    className={
                      "absolute bottom-10 z-10 text-2xl sm:text-3xl px-3 sm:px-5 font-extrabold text-gray-300"
                    }
                  >
                    🎊 <span className={"text-primary"}>1000+</span> Selection
                    in JEE Mains 🎊
                  </h2>
                  <Image
                    unoptimized
                    src={
                      statsData && statsData.documents[0].carouselLink1 != null
                        ? statsData.documents[0].carouselLink1
                        : images.statsBoy
                    }
                    alt={"Competishun Stats"}
                    width={500}
                    height={500}
                    objectFit={"cover"}
                    className={"rounded-3xl"}
                  />
                </div>
              </CarouselItem>
              <CarouselItem
                className={"flex flex-row gap-x-0 p-0 w-fit justify-center "}
              >
                <div
                  className={
                    "gradientBorder relative rounded-3xl w-fit flex flex-col items-center"
                  }
                  style={{ padding: 2 }}
                >
                  <div
                    className={
                      "absolute z-10 w-full h-full flex flex-col items-center rounded-3xl bg-gradient-to-t from-black to-transparent"
                    }
                  />
                  <h2
                    className={
                      "absolute bottom-10 z-10 text-2xl sm:text-3xl px-3 sm:px-5 font-extrabold text-gray-300"
                    }
                  >
                    🎊 <span className={"text-primary"}>1000+</span> Selection
                    in JEE Mains 🎊
                  </h2>
                  <Image
                    unoptimized
                    src={
                      statsData && statsData.documents[0].carouselLink2 != null
                        ? statsData.documents[0].carouselLink2
                        : images.statsBoy
                    }
                    alt={"Competishun Stats"}
                    width={500}
                    height={500}
                    objectFit={"cover"}
                    className={"rounded-3xl"}
                  />
                </div>
              </CarouselItem>
              <CarouselItem
                className={"flex flex-row gap-x-0 p-0 w-fit justify-center "}
              >
                <div
                  className={
                    "gradientBorder relative rounded-3xl w-fit flex flex-col items-center"
                  }
                  style={{ padding: 2 }}
                >
                  <div
                    className={
                      "absolute z-10 w-full h-full flex flex-col items-center rounded-3xl bg-gradient-to-t from-black to-transparent"
                    }
                  />
                  <h2
                    className={
                      "absolute bottom-10 z-10 text-2xl sm:text-3xl px-3 sm:px-5 font-extrabold text-gray-300"
                    }
                  >
                    🎊 <span className={"text-primary"}>1000+</span> Selection
                    in JEE Mains 🎊
                  </h2>
                  <Image
                    unoptimized
                    src={
                      statsData && statsData.documents[0].carouselLink3 != null
                        ? statsData.documents[0].carouselLink3
                        : images.statsBoy
                    }
                    alt={"Competishun Stats"}
                    width={500}
                    height={500}
                    objectFit={"cover"}
                    className={"rounded-3xl"}
                  />
                </div>
              </CarouselItem>
              {/*))}*/}
            </CarouselContent>
          </Carousel>
          <div
            className={
              "flex flex-row justify-between w-full px-5 relative z-10"
            }
          >
            <motion.div
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={
                "md:absolute popAnimation bg-green-700 rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 bottom-[30%] lg:right-[20%] right-0 scale-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-green-500"
              }
            >
              <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
                <span
                  className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
                >
                  {statsData
                    ? statsData.documents[0].statsDesc3
                    : `12k+ \n Aspiring IITians`}
                  <br /> Selection
                </span>{" "}
              </h2>
            </motion.div>
            <motion.div
              whileInView={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={
                "md:absolute popAnimation bg-blue-900 rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 bottom-[60%] left-[20%] scale-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-blue-500"
              }
            >
              <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
                <span
                  className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
                >
                  {statsData
                    ? statsData.documents[0].statsDesc4
                    : `12k+ \n
                     Aspiring IITians`}
                  <br /> Selection
                </span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-row w-full justify-between px-10 gap-10 m-5 mb-14"
        }
      >
        <button className={"text-primary text-lg sm:text-2xl lg:text-3xl"}>
          2024
        </button>

        <button className={" text-lg sm:text-2xl lg:text-3xl"}>2023</button>
        <button className={" text-lg sm:text-2xl lg:text-3xl"}>2022</button>
        <button className={" text-lg sm:text-2xl lg:text-3xl"}>2021</button>
      </div>
    </section>
  );
};
export default StatisticSection;
