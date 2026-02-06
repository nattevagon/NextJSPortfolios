'use client'

import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { PersonalPhoto } from "@/assets/images"
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <div className="min-h-screen pt-[14vh] lg:pt-[20vh] bg-cover bg-center" id="landing">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, Im <span className="text-yellow-400">Natte Vagon!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[14px] md:text-[18px] text-[#ffffff] text-justify">
            I am a front-end web development and currently, I work in the IT E-commerce field at a retail company as a Front-End Web Developer. In this role, I have been involved in various website development projects using React JS, Next JS, ASP.NET, and WordPress, allowing me to sharpen my technical skills and gain real-world project experience.
            <br /><br />
            I am trenthusiastic about building modern, scalable, and user-friendly web applications, especially projects that utilize React JS, Next JS, and WordPress.
            <br /><br />
            Always eager to learn new technologies, improve best practices, and take on new challenges that can further enhance my growth as a Front-End Web Developer.
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
