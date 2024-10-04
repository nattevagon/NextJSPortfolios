import { Bars3Icon } from "@heroicons/react/20/solid"
import Link from "next/link";
import React from "react"
import useSmoothScroll from "./libs/useSmoothScroll"
import { useRouter } from "next/router";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  const router = useRouter();
  const scrollToElement = useSmoothScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToElement(href, 300);
    router.push(href);
    console.log(e)
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-black shadow-md">
      <div className="flex item-center justify-between w-[80%] mx-auto h-[100%] items-center">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          NATTE
          <span className="text-yellow-300">VAGON</span>
        </h1>
        <Link href="/#hero" className="nav-link" onClick={(e) => handleClick(e, '#hero')}>HOME</Link>
        <Link href="/#hero" className="nav-link" onClick={(e) => handleClick(e, '#about')}>ABOUT</Link>
        <Link href="/#hero" className="nav-link" onClick={(e) => handleClick(e, '#services')}>SERVICES</Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  )
}

export default Navbar