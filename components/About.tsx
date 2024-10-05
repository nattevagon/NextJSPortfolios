import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121212] pb-[8rem] pt-[8rem]" id="about">
      <div className="w-4/5 mx-auto items-center">
        <p className="heading">
          about me
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-2">Education</h2>
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem] rounded backdrop-blur-sm border border-solid border-gray-600 p-4">
            <div>
              Aug 2017 - Jul 2021
            </div>
            <div>
              <div>
                <div className="font-bold text-lg">
                  Universitas Atma Jaya Yogyakarta
                </div>
                <div>Informatics</div>
                <div>Bachelor of Computer Science</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-white mb-2">Experiences</h2>
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem] rounded backdrop-blur-sm border border-solid border-gray-600 p-4 mb-4">
            <div>
              <div>
                <div className="font-bold text-lg">
                  PT. Indomarco Prismatama (Indomaret Group)
                </div>
                <div>Full Time</div>
                <div>Yogyakarta, Indonesia</div>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <div className="font-bold text-lg">
                  Front End Web Developer
                </div>
                <div>Jan 2021 - Present</div>
                <div>React JS & ASP. Net</div>
                <ul className="mt-2">
                  <li>Mentoring to interns who as Front End Developers.</li>
                  <li>Developing Microservices Web for Account (login & register user) and Payment Center (make payment for the order) that were migrated using the React JS library from ASP.Net.</li>
                  <li>Developing a Web Microservice Transaction List from all clients (Retail, Food, Virtual, Travel, Tiket) for Klik Indomaret Web using React JS.</li>
                  <li>Developing Microservices Web for Bank Coupon (select or enter a coupon code), Rating Reviews (give an assessment), and Phone Number OTP Verification for Klik Indomaret Web using React JS.</li>
                  <li>Developing Shopping Voucher Sales & Indomaret Franchise Portal Web using React JS.</li>
                  <li>Developing Food Klik Indomaret Web using React JS migrated from ASP.Net.</li>
                  <li>Implementation of Tracker for Klik Indomaret Web using React JS and ASP.Net.</li>
                  <li>Fixed bugs in projects on the Klik Indomaret Web that use React JS and ASP.Net.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem] rounded backdrop-blur-sm border border-solid border-gray-600 p-4 mb-4">
            <div>
              <div>
                <div className="font-bold text-lg">
                  Freelance
                </div>
                <div>Part Time</div>
                <div>Yogyakarta, Indonesia</div>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <div className="font-bold text-lg">
                  Front End Web Developer
                </div>
                <div>Aug 2023 - Present</div>
                <div>React JS & Next JS</div>
                <ul className="mt-2">
                  <li>
                    Developing my own Portfolio Web using Next JS & Tailwind.
                  </li>
                  <li>
                    Developing a School Profile Web from “SMA Muhammadiyah 4 Yogyakarta” using React JS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem] rounded backdrop-blur-sm border border-solid border-gray-600 p-4">
            <div>
              <div>
                <div className="font-bold text-lg">
                  Universitas Atma Jaya Yogyakarta
                </div>
                <div>Contract</div>
                <div>Yogyakarta, Indonesia</div>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <div className="font-bold text-lg">
                  Assistant Lecturer - Platform Based Programming
                </div>
                <div>Aug 2020 - Jan 2021</div>
                <div>Java dan Object-Oriented Programming (OOP)</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-lg">
                  Assistant Lecturer - Computer Network
                </div>
                <div>Feb 2020 - Jul 2020</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-lg">
                  Assistant Lecturer - Object Oriented Programming (Java)
                </div>
                <div>Aug 2019 - Jan 2020</div>
                <div>Java dan Object-Oriented Programming (OOP)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
