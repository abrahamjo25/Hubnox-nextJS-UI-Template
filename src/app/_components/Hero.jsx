import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Image src="/images/hero.png" width={1950} height={200} alt="HERO" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-lg lg:text-5xl md:text-4xl text-white md:font-bold">
          Embrace the beauty
        </h2>
        <h2 className="text-lg lg:text-5xl md:text-4xl text-white md:font-bold">
          of collaboration and inspiring events
        </h2>
        <p className="hidden md:flex text-sm md:text-base lg:text-lg text-white mt-10 text-center">
          Join our community, visit events and shine as a beauty industry
          creator
        </p>
        <Button className="mt-10 md:mt-20">Get the app</Button>
      </div>
    </div>
  );
};

export default Hero;
