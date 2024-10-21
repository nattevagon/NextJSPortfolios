'use client'

import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { PersonalPhoto } from "@/assets/images"
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <div className="h-[100%] pt-[14vh] bg-cover bg-center" id="landing">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, Im <span className="text-yellow-400">Natte Vagon!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff] text-justify">
            I am a Front End Web Developer working in a retail e-commerce company, where I have learned a lot about website development. While there, I gained valuable experience by participating in various projects using React JS and ASP.Net. In the future, I am looking opportunities for new experience and challenge that can enhance my knowledge in the position of Front-End Web Developer, especially in React JS or Next JS.
          </p>
        </div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <div className="relative order-first lg:order-last mt-4 lg:mt-0 mx-auto w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#55e6a5] relative lg:flex items-center rounded-full">
            <Image
              src={PersonalPhoto}
              alt="user"
              layout="fill"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
