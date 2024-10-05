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
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] backdrop-blur-sm shadow-md border-b-[0.8px] border-solid border-gray-600">
      <div className="flex item-center justify-between w-[80%] mx-auto h-[100%] items-center">
        <Link href="/" className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          nattevagon
        </Link>
        <Link href="/#landing" className="nav-link" onClick={(e) => handleClick(e, '#landing')}>landing</Link>
        <Link href="/#about" className="nav-link" onClick={(e) => handleClick(e, '#about')}>about</Link>
        <Link href="/#works" className="nav-link" onClick={(e) => handleClick(e, '#works')}>works</Link>
        <Link href="/#contact" className="nav-link" onClick={(e) => handleClick(e, '#contact')}>contact</Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  )
}

export default Navbar