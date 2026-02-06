'use client'

import { GithubLogo, IGLogo, LinkedinLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen pb-[2rem] md:pb-[8rem] pt-[8rem]" id="contact">
      <div className="w-4/5 mx-auto items-center">
        <p className="heading">
          contact
        </p>
        <div className="flex align-center justify-center mx-auto items-center gap-[1rem] md:gap-[3rem] mt-[4rem] text-white">
          <Link href="https://www.linkedin.com/in/nattevagon/">
            <div className="relative hover:scale-110 transform transition-all duration-300 hover:-rotate-6 p-4">
              <Image
                className="w-[60px] mx-auto"
                src={LinkedinLogo}
                alt="user"
              />
            </div>
          </Link>
          <Link href="https://github.com/nattevagon/">
            <div className="relative hover:scale-110 transform transition-all duration-300 hover:-rotate-6 p-4">
              <Image
                className="w-[60px] mx-auto text-[#d3fae8]"
                src={GithubLogo}
                alt="user"
              />
            </div>
          </Link>
          <Link href="https://www.instagram.com/nattevagon/" >
            <div className="relative hover:scale-110 transform transition-all duration-300 hover:-rotate-6 p-4">
              <Image
                className="w-[60px] mx-auto text-[#d3fae8]"
                src={IGLogo}
                alt="user"
              />
            </div>
          </Link>
        </div>
        <div className="text-center py-[32px]">
          <div className="text-md text-white">Feel free to reach out to me via email:</div>
          <a className="text-lg text-white" href="mailto:nattevagon@gmail.com">nattevagon@gmail.com</a>
        </div>
      </div>
    </div >
  );
};

export default Contact;
