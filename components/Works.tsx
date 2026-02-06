'use client'

import {
  ArrowUpRightIcon
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const Works = () => {
  return (
    <div className="min-h-screen pb-[2rem] md:pb-[8rem] pt-[8rem]" id="works">
      <div className="w-4/5 mx-auto items-center">
        <p className="heading">
          works
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem] mt-8">
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Tiketly Fantasy</div>
            <p className="text-sm">A fantasy website for event ticket booking</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Next JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Tailwind CSS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Daisy UI</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://tiketly.netlify.app/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Kompenikit Fantasy Portal</div>
            <p className="text-sm">Fantasy Sports Portal for Custom Jersey Forum</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Wordpress</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Elementor</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="http://kompenikit.infinityfree.me/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Indonesian League Fantasy Sports Portal</div>
            <p className="text-sm">Fantasy Sports Portal for Indonesian League</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Next JS SSS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Tailwind CSS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Daisy UI</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://indonesianleague.netlify.app/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Mountana</div>
            <p className="text-sm">My own e-commerce web for hiking mountain</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Tailwind CSS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Material Tailwind</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://mountana.netlify.app/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">SMA Muhammadiyah 4 Yogyakarta School Profile</div>
            <p className="text-sm">A school profile for SMA Muhammadiyah 4 Yogyakarta</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React Bootstraps</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://smamuhammadiyah4yogyakarta.netlify.app/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">My Own Profile</div>
            <p className="text-sm">My own profile web for portfolios</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Next JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">Tailwind CSS</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://nattevagon.netlify.app/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Payment Center E-commerce Micro Service</div>
            <p className="text-sm">A micro service for Payment Center in e-commerce retail web</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React Bootstraps</div>
            </div>
            {/* <Link
              className="absolute top-4 right-4"
              href="https://paymentcenter2.netlify.app/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link> */}
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Account E-commerce Micro Service</div>
            <p className="text-sm">A micro service for account activities in e-commerce retail web</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React Bootstraps</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://www.klikindomaret.com/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Rating Review E-commerce Micro Service</div>
            <p className="text-sm">A micro service for rating review & complaint order in e-commerce retail web</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React Bootstraps</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://www.klikindomaret.com/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Transaction List E-commerce Micro Service</div>
            <p className="text-sm">A micro service for list transaction order in e-commerce retail web</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React Bootstraps</div>
            </div>
            <Link
              className="absolute top-4 right-4"
              href="https://daftartransaksi.klikindomaret.com/"
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="text-white rounded backdrop-blur-sm border border-solid border-gray-600 p-4 relative">
            <div className="text-lg">Portal Waralaba</div>
            <p className="text-sm">A company profile for E-commerce</p>
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React JS</div>
              <div className="text-xs p-2 rounded-xl border border-solid border-gray-600 w-fit">React Bootstraps</div>
            </div>
            {/* <Link
              className="absolute top-4 right-4"
              href=""
            >
              <ArrowUpRightIcon
                width={28}
                height={28}
              />
            </Link> */}
          </div>
        </div>
        {/* <div className="rounded backdrop-blur-sm border border-solid border-gray-600 p-4 mt-8 h-[60vh] flex items-center justify-center">
          On Process Development
        </div> */}
      </div>
    </div>
  );
};

export default Works;
