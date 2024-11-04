"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { aboutusImages, images, mentorImages } from "@/constants";

const carouselImages = [
  "/placeholder.svg?height=400&width=1200",
  "/placeholder.svg?height=400&width=1200",
  "/placeholder.svg?height=400&width=1200",
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="relative h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel className="w-full h-full">
          <CarouselContent>
            {aboutusImages.map((src, index) => (
              <CarouselItem key={index}>
                <Card className="border-0">
                  <CardContent className="p-0 aspect-[4/1]">
                    <Image
                      src={images.results}
                      alt={`Carousel image ${index + 1}`}
                      width={1080}
                      height={1080}
                      objectFit="cover"
                      className={"w-full h-full"}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </motion.div>

      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About{" "}
          <ScribledHighlightedText
            textInput={"Competishun"}
            path={
              "M265.977 13.5554C211.246 -4.94514 106.006 -1.81521 51.9851 14.3737C27.3828 21.7466 -17.9832 43.11 9.62223 63.2797C14.4911 66.8373 20.4095 69.7275 26.5327 72.2284C93.9218 99.7505 187.912 96.9476 260.236 80.4797C271.022 78.0237 281.636 75.108 291.401 71.1453C298.705 68.1816 305.765 64.5081 311.453 60.2212C328.102 47.6713 323.753 35.0414 305.84 24.4018C285.072 12.0659 256.671 8.24314 229.873 6.14955C206.44 4.31889 183.037 3.96736 159.493 4.7145C115.338 6.11552 64.4532 8.3448 27.4206 25.2101C11.2457 32.5767 -6.13211 48.3177 7.73266 61.0579C22.7569 74.8632 58.1825 79.3334 82.0099 82.2466C146.289 90.1057 247.997 86.2088 306.547 65.5852C312.861 63.3611 319.257 61.2885 324.905 58.3639C329.368 56.053 333.641 53.418 337.348 50.5664C363.618 30.357 304.999 17.6503 284.326 15.4681C219.291 8.60342 123.035 -1.30305 63.1411 16.9583"
            }
          />
        </motion.h1>

        <motion.div
          className="prose prose-lg mx-auto mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            {`Welcome to our company! We are a forward-thinking organization
              dedicated to innovation and excellence in everything we do. Our
              mission is to create products and services that make a positive
              impact on people's lives and contribute to a better world.`}
          </p>
          <p>
            {`Founded in 2010, we've grown from a small startup to a global leader
              in our industry. Our team of passionate professionals works
              tirelessly to push the boundaries of what's possible and deliver
              exceptional results for our clients and partners.`}
          </p>
          <p>
            {`At the heart of our success is our commitment to our core values:`}
          </p>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {["Innovation", "Integrity", "Collaboration", "Excellence"].map(
              (value, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  {value}
                </motion.li>
              ),
            )}
          </motion.ul>
          <p>
            {`As we look to the future, we remain committed to our vision of
              creating a more connected, efficient, and sustainable world through
              technology and innovation. Join us on this exciting journey as we
              continue to grow, learn, and make a difference.`}
          </p>
        </motion.div>
      </main>
    </div>
  );
}
