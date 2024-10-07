'use client'

import { useRouter } from "next/router";
import About from "@/components/About";
import Works from "@/components/Works";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import useSmoothScroll from "@/components/libs/useSmoothScroll";
import Landing from "@/components/Landing";
import Contact from "@/components/Contact";

const Home = () => {
  const router = useRouter();
  const scrollToElement = useSmoothScroll();
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  //Animation AOS Setup
  useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });

    const urlPath = router.asPath

    if (urlPath) {
      const hash = urlPath.split("/")[1];

      if(hash) {
        scrollToElement(hash, 300);
        console.log("url => ", hash)
      }
    } else {
      // Jika hash kosong, scroll ke bagian atas halaman
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <div className="relative z-[30]">
          <Landing />
          <About />
          <Works />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Home;
