'use client'

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pb-[2rem] md:pb-[8rem] pt-[8rem]" id="about">
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
                <ul className="mt-2 list-disc pl-4">
                  <li>Developing Shopping Voucher Sales & Indomaret Franchise Portal Web using React JS.</li>
                  <li>Developing an Indomaret Franchise Portal Web using React JS.</li>
                  <li>Developing Micro Web for Bank Coupon (select or enter a coupon code), Rating Reviews (give an assessment), and Phone Number OTP Verification for Klik Indomaret Web using React JS.</li>
                  <li>Developed micro web applications for Account Management (Login & Registration) and Payment Center, migrated from ASP.NET to React.js to improve maintainability and user experience.</li>
                  <li>Developing a Micro Web for Transaction List from all clients (Retail, Food, Virtual, Travel, Ticket) for Klik Indomaret Web using React JS.</li>
                  <li>Developing Food Klik Indomaret Web using React JS migrated from ASP.Net.</li>
                  <li>Implementation of Tracker for Klik Indomaret Web using React JS and ASP.Net.</li>
                  <li>Mentoring to interns who as Front End Developers.</li>
                  <li>Built a Transaction List micro web for multiple business lines (Retail, Food, Virtual, Travel, and Ticket) on Klik Indomaret Web using React.js.</li>
                  <li>Implemented and integrated tracking systems across Klik Indomaret Web applications using React.js and ASP.NET.</li>
                  <li>Fixed and optimized bugs across multiple projects built with React.js, Next.js, Vite.js, and ASP.NET.</li>
                  <li>Migrated several existing web applications to Next.js to enhance performance and scalability.</li>
                  <li>Developed multiple web applications using Next.js for various business needs.</li>
                  <li>Created and maintained company profile websites using WordPress.</li>
                  <li>Added and enhanced Ecommerce Front Office features using Next.js.</li>
                  <li>Added and enhanced Ecommerce Back Office features using Vite.js.</li>
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
                <ul className="mt-2 list-disc pl-4">
                  <li>
                    Developing my own Portfolio Web using Next JS & Tailwind.
                  </li>
                  <li>
                    Developing a School Profile Web from “SMA Muhammadiyah 4 Yogyakarta” using React JS.
                  </li>
                  <li>
                    Developing some fantasy web using Wordpress.
                  </li>
                  <li>
                    Developing some fantasy web using Next JS.
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
