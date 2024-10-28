import React, { useEffect, useState } from "react";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import TestimonialWithStarRating from "@/components/testimonialWithStarRating";
import Image from "next/image";
import { blurs, testimonialData } from "@/constants";
import VideoTestimonial from "@/components/videoTestimonial";
import TextTesimonialWithImage from "@/components/textTesimonialWithImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { getTestimonialData } from "@/lib/fetchData";
import { Models } from "appwrite";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState<any>([]);

  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    setSmallScreen(window.innerWidth < 640);
  }, [screen.width, screen.height, smallScreen]);

  const fetchData = async () => {
    setTestimonial(await getTestimonialData().then((res) => res));
  };
  useEffect(() => {
    fetchData();
  }, [testimonial]);
  return (
    <section className={" sm:mt-10 md:mt-12 relative"}>
      <div className={"w-full flex justify-center items-center relative"}>
        <div
          className={
            "testimonial-section-content z-10 relative flex flex-col gap-y-24 items-center justify-center w-full"
          }
        >
          <h1 className={"text-3xl sm:text-3xl lg:text-5xl"}>
            {`Hear from our `}
            <ScribledHighlightedText
              textInput={"Champions!"}
              path={
                "M265.977 13.5554C211.246 -4.94514 106.006 -1.81521 51.9851 14.3737C27.3828 21.7466 -17.9832 43.11 9.62223 63.2797C14.4911 66.8373 20.4095 69.7275 26.5327 72.2284C93.9218 99.7505 187.912 96.9476 260.236 80.4797C271.022 78.0237 281.636 75.108 291.401 71.1453C298.705 68.1816 305.765 64.5081 311.453 60.2212C328.102 47.6713 323.753 35.0414 305.84 24.4018C285.072 12.0659 256.671 8.24314 229.873 6.14955C206.44 4.31889 183.037 3.96736 159.493 4.7145C115.338 6.11552 64.4532 8.3448 27.4206 25.2101C11.2457 32.5767 -6.13211 48.3177 7.73266 61.0579C22.7569 74.8632 58.1825 79.3334 82.0099 82.2466C146.289 90.1057 247.997 86.2088 306.547 65.5852C312.861 63.3611 319.257 61.2885 324.905 58.3639C329.368 56.053 333.641 53.418 337.348 50.5664C363.618 30.357 304.999 17.6503 284.326 15.4681C219.291 8.60342 123.035 -1.30305 63.1411 16.9583"
              }
            />
          </h1>
          <div className={"w-screen items-center relative"}>
            <Carousel
              plugins={[
                AutoScroll({
                  speed: 3,
                  stopOnInteraction: false,
                  stopOnFocusIn: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className={"  w-screen flex justify-center"}
            >
              <CarouselContent className={" gap-x-4 sm:gap-x-5 lg:gap-x-7"}>
                {(testimonial.length > 0
                  ? testimonial.documents
                  : testimonialData
                ).map((item: any, index: any) => {
                  return (
                    <CarouselItem
                      key={index}
                      className={` sm:basis-1/2 md:basis-1/2 px-10 sm:px-5 lg:px-0 lg:basis-1/5 first:pl-5`}
                    >
                      {/*  0 for text testimonial with rating, 1 for Video testimonial, 2 for image testimonial
                       */}
                      {item.testimonialType == 0 ? (
                        <TestimonialWithStarRating
                          name={item.name}
                          achievement={item.achievement}
                          testimonial={item.testimonialDescription}
                          rating={item.testimonialRating}
                        />
                      ) : item.testimonialType == 1 ? (
                        <VideoTestimonial
                          name={item.name}
                          videoLink={
                            item.testimonialLink || "https://manwith.codes"
                          }
                        />
                      ) : (
                        <TextTesimonialWithImage
                          achievement={item.achievement}
                          testimonial={item.testimonialDescription}
                          name={item.name}
                        />
                      )}
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
