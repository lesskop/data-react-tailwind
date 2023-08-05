import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TextButton from "./TextButton";

const Hero = () => {
  return (
    <div className="top-0 mx-auto mt-[-96px] flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-white">
      <p className="p-2 font-bold uppercase text-emerald-400">
        Growing with data analytics
      </p>
      <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
        Grow with data.
      </h1>
      <div className="mt-4 flex text-xl font-bold sm:text-3xl md:text-4xl">
        <p className="mr-2 md:mr-3">Fast, flexible, financing for</p>
        <Typewriter
          words={["BTB", "BTC", "SAAS"]}
          loop={0}
          cursor={1}
          typeSpeed={120}
        />
      </div>
      <p className=" mt-4 w-[90vw] text-xl font-bold text-gray-400 md:text-2xl">
        Monitor your data analytics to increase revenue for BTB, BTC & SASS
        platforms.
      </p>
      <TextButton text="Get started" type="secondary" />
    </div>
  );
};

export default Hero;
