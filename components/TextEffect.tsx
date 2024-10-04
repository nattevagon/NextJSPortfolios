import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Front End Developer",
        1500,
        "Designer",
        1500,
        "Programmer",
        1500
      ]}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextEffect