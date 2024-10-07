'use client'

import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        1500,
        "Front End Developer",
        1500
      ]}
      className="text-xl md:text-3xl text-yellow-400 font-bold"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextEffect