import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { PersonalPhoto } from "@/assets/images"

const Landing = () => {
  return (
    <div className="bg-[#121212] h-[90vh] pb-[2rem] md:pb-[8rem] pt-[10vh] bg-cover bg-center" id="landing">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, IM <span className="text-yellow-400">VAGON!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff]">
            I am a Front End Web Developer working in a retail e-commerce company, where I have learned a lot about website development. While there, I gained valuable experience by participating in various projects using React JS and ASP.Net. In the future, I am looking opportunities for new experience and challenge that can enhance my knowledge in the position of Front-End Web Developer, especially in React JS or Next JS.
          </p>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src={PersonalPhoto}
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
