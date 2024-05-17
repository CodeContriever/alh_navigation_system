// @refresh
// use client

import React from "react";
import Image from "next/image";
import { FaCloudSun } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { BsCloudSleet } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg  overflow-hidden w-full ">
        {/* Header */}
        <header className="relative text-white flex items-stretch bg-gray-900">
          {/* First child of the header container */}
          <div className="relative w-3/5 md:w-2/3 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-full bg-gray-900 -translate-x-6 transform -skew-x-12 md:border-4 border-gray-900  border-r-[#F9AD55]  z-0" />
            {/* Brand ID, weather details and navigation text container */}
            <div className="relative flex flex-col space-y-4 p-4 z-10">
              {/* Brand ID, weather details container */}
              <div className=" flex flex-col md:flex-row md:items-center lg:gap-64 w-full">
                {/* Brand ID */}
                <div className="flex items-center space-x-2">
                  <Image
                    src="/logo11.png" // Update with the correct path to your logo image
                    alt="Lincoln University Logo"
                    width={100}
                    height={50}
                  />
                  <h1 className="text-xl font-bold">
                    AL-HIKMAH UNIVERSITY, ILORIN
                  </h1>
                </div>

                {/* Weather Details */}
                <div className="flex items-center space-x-8">
                  <div className="flex flex-col items-center space-x-1 text-yellow-400">
                    <FaCloudSun className="text-2xl" />
                    <span className="text-xl">19°C</span>
                  </div>
                  <div className="flex flex-col items-center space-x-1 text-gray-400">
                    <BsCloudSleet className="text-2xl" />
                    <span className="text-xl">23°C</span>
                  </div>
                </div>
              </div>

              <p className="text-white text-xs">Al-Hikmah Navigation system</p>
            </div>
          </div>

          {/* Second child of the header container */}
          <div className="relative w-2/5 md:w-1/3 overflow-hidden ~-">
            <div className="absolute inset-y-0 right-0 w-full bg-[#F9AD55] transform origin-bottom-left translate-x-6 -skew-x-12 border-4 border-[#F9AD55]   border-l-white z-0" />
            <div className="relative flex flex-col items-end justify-center  w-full p-4 z-10 text-right">
              <div className="text-white">
                <p className="text-lg">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>

                <p className="text-sm">
                  {new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }).format(new Date())}
                </p>
              </div>
              <div className="text-white mt-2">
                <p className="text-sm">
                  UNDERGRADUATE <br />
                  FULL-TIME ADMISSION{" "}
                </p>
                <p>DEADLINE: Ongoing</p>
              </div>
            </div>
          </div>
        </header>

        {/* Upcoming Events */}
        <main className="flex justify-center items-stretch border-4 border-t-gray-900">
          {/* event list and image section */}
          <div className="flex flex-col md:flex-row flex-grow">
            {/* event list */}
            <div className="w-full md:w-1/2 flex flex-col bg-[#2E4553] text-white">
              {/* heading */}
              <h2 className="text-3xl text-center text-white font-semibold bg-[#F9AD55] p-4  ">
                Upcoming EVENTS
              </h2>
              <div className="flex-grow overflow-y-auto ">
                {events.map((event, index) => (
                  <article
                    key={index}
                    className={`flex flex-col justify-between mb-8 ${
                      index % 2 === 0 ? "bg-[#2E4553]" : "bg-[#324E5E]"
                    }`}
                  >
                    {/* event details */}
                    <div className="flex flex-row items-center gap-20  md:gap-12 p-4">
                      {/* date */}
                      <div className="flex flex-col">
                        <time className="font-semibold text-3xl text-white">
                          {event.date}
                        </time>
                        <p className="font-semibold text-3xl text-white">
                          {event.month}
                        </p>
                      </div>

                      {/* event name and time */}
                      <div className="flex flex-col gap-8">
                        <p className="text-white">{event.name}</p>
                        <div className="flex flex-row items-center gap-2">
                          <IoTimeOutline />
                          <p className="text-white">{event.time}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Images Section */}
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col">
              {/* first image container */}
              <div className="hidden md:flex flex-grow  items-stretch">
                <Image
                  src="/benefits.jpeg"
                  alt="benefits"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* second image and text container */}
              <div className="bg-gray-900 p-4 text-white flex flex-col">
                <p className="mb-2">Scan this QR-code to apply</p>

                <div className="flex flex-row flex-grow">
                  <div className="w-1/2 flex-grow">
                    <Image
                      src="/qr-code.jpeg"
                      alt="block-of-offices"
                      width={200}
                      height={200}
                      // layout="responsive"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Apply Now */}
                  <div className="w-1/2 text-center flex flex-col items-center justify-center">
                    <p className="font-bold text-clip overflow-hidden">
                      APPLY NOW
                    </p>
                    <a
                      href="https://ecampus.alhikmahuniversity.edu.ng/admissions"
                      target="_blank"
                    >
                      ecampus.alhikmahuniversity.edu.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const events = [
  {
    date: "30",
    month: "APR",
    name: "NUC APPROVES ADDITIONAL POSTGRADUATE PROGRAMMES FOR Al-HIKMAH UNIVERSITY",
    time: "5:00 PM",
  },
  {
    date: "18",
    month: "APR",
    name: "COMMENCEMENT OF RAIN SEMESTER, 2023/2024 ACADEMIC SESSION",
    time: "5:00 PM",
  },
  {
    date: "06",
    month: "APR",
    name: "SENATOR SALIU MUSTAPHA FOUNDATION ANNOUNCES SCHOLARSHIPS FOR DESERVING STUDENTS TO PURSUE THEIR UNIVERSITY EDUCATION IN AL-HIKMAH UNIVERSITY",
    time: "9:00 AM",
  },
  {
    date: "20",
    month: "MAR",
    name: "Al-Hikmah University to host 2nd Edition of KU8 International Conference",
    time: "3:00 PM",
  },
];
