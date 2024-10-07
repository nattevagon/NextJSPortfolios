'use client'

import { GithubLogo, IGLogo, LinkedinLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#121212] pb-[2rem] md:pb-[8rem] pt-[8rem]" id="contact">
      <div className="w-4/5 mx-auto items-center">
        <p className="heading">
          contact
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[1rem] md:gap-[3rem] mt-[4rem] text-white">
          <Link href="https://www.linkedin.com/in/nattevagon/" data-aos="fade-right" data-aos-delay="200">
            <div className="relative hover:scale-110 transform transition-all duration-300 hover:-rotate-6 p-[2rem]">
              <Image
                className="w-[140px] lg:w-[300px] mx-auto"
                src={LinkedinLogo}
                alt="user"
              />
            </div>
          </Link>
          <Link href="https://github.com/nattevagon/" data-aos="zoom-in" data-aos-delay="300">
            <div className="relative hover:scale-110 transform transition-all duration-300 hover:-rotate-6 p-[2rem]">
              <Image
                className="w-[140px] lg:w-[300px] mx-auto text-[#d3fae8]"
                src={GithubLogo}
                alt="user"
              />
            </div>
          </Link>
          <Link href="https://www.instagram.com/nattevagon/" data-aos="fade-left" data-aos-delay="400">
            <div className="relative hover:scale-110 transform transition-all duration-300 hover:-rotate-6 p-[2rem]">
              <Image
                className="w-[140px] lg:w-[300px] mx-auto text-[#d3fae8]"
                src={IGLogo}
                alt="user"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
