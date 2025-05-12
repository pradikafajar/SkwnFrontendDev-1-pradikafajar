'use client'

import React from 'react'
import { SearchIcon, PlayIcon, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-16 bg-white px-6 md:px-0 py-16">
      {/* Left Section */}
      <div className="flex flex-col items-start gap-12 w-full max-w-3xl md:pl-36">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-inter text-[#2f241f]">
          The kind of <span className="text-[#817253]">furniture</span>{" "}
          you have been looking for
        </h1>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <button className="flex items-center justify-center gap-4 px-6 py-4 bg-[#e5f0b6] text-[#553b33] text-xl rounded-xl w-full md:w-auto">
            <SearchIcon className="w-6 h-6" />
            SEARCH CATALOG
          </button>

          <button className="flex items-center justify-center gap-4 px-6 py-4 border border-[#553b33] text-[#553b33] text-xl rounded-xl w-full md:w-auto">
            <PlayIcon className="w-6 h-6" />
            WATCH VIDEOS
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-[522px] h-[709px] bg-[url('/hero-chair.png')] bg-cover bg-center rounded-xl ml-auto">
        {/* Price Tag */}
        <div className="absolute top-[58%] left-6 bg-white/80 text-[#2f241f] text-xl px-4 py-2 rounded-xl">
          $329
        </div>

        {/* Sofa Name */}
        <div className="absolute top-[66%] left-6 text-white text-[40px] md:text-[64px] font-normal leading-tight">
          Pösht Sofa
        </div>

        {/* View Details Button */}
        <button className="absolute bottom-12 left-6 flex items-center gap-4 px-6 py-4 bg-[#2f241f] text-white text-base rounded-xl">
          VIEW DETAILS
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
