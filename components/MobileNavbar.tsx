import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link href="/#hero" className="nav-link-mobile" onClick={closeNav}>HOME</Link>
        <Link href="/#about" className="nav-link-mobile" onClick={closeNav}>ABOUT</Link>
        <Link href="/#services" className="nav-link-mobile" onClick={closeNav}>SERVICES</Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNavbar;
