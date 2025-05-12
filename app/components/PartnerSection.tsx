'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/gusto.svg', alt: 'Gusto', width: 106, height: 52 },
  { src: '/stripe.svg', alt: 'Stripe', width: 86, height: 52 },
  { src: '/treehouse.svg', alt: 'Treehouse', width: 178, height: 52 },
  { src: '/upwork.svg', alt: 'Upwork', width: 123, height: 52 },
];

const PartnerSection = () => {
  return (
    <section className="bg-[#fcfafa] px-6 md:px-36 py-20 flex flex-col md:flex-row items-center gap-16">
      {/* Left: Stat */}
      <div className="flex flex-col items-start text-[#2f241f]">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight">25+</h2>
        <p className="text-xl md:text-2xl mt-2">PARTNERED BRANDS</p>
      </div>

      {/* Right: Logos */}
      <div className="flex flex-wrap justify-center md:justify-between gap-6 w-full max-w-3xl">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-[52px] w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
