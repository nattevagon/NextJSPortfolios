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
    const urlPath = router.asPath

    if (urlPath) {
      const hash = urlPath.split("/")[1];

      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({
          behavior: 'smooth'
        });

        setTimeout(() => {
          scrollToElement(hash, 300);
        }, 100)
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
        <div className="relative z-[30] bg-gradient-to-t from-gray-900 to-zinc-800">
          <Landing />
          <About />
          <Works />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
