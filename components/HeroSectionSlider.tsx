import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { heroSectionHastags } from "@/constants";
import { Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
const HeroSectionSlider = ({ ...props }) => {
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    setSmallScreen(window.innerWidth < 640);
  }, [screen.width, screen.height, smallScreen]);
  return (
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
      {...props}
    >
      <CarouselContent>
        {heroSectionHastags.map((item, index) => (
          <CarouselItem
            key={index}
            className={`max-sm:basis-1/2 basis-1/4 flex flex-row gap-x-2 items-center text-2xl font-extrabold italic`}
          >
            {item}
            <Sparkle
              style={{
                transform: `max-sm:translate(15px,0) translate(130px,0)`,
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default HeroSectionSlider;
