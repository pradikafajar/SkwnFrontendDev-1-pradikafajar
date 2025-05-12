"use client";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function FurnitureRecommendation() {
  return (
    <section className="flex flex-col md:flex-row gap-6 p-6 md:p-12 bg-white">
      {/* Kiri - Gambar */}
      <div className="flex flex-1 gap-4">
        <div className="w-1/6 relative aspect-[3/4]">
          <Image src="/recom1.svg" alt="img1" fill className="rounded-lg object-cover" />
        </div>
        <div className="w-1/6 relative aspect-[3/4]">
          <Image src="/recom2.svg" alt="img2" fill className="rounded-lg object-cover" />
        </div>
        <div className="w-1/2 relative aspect-[3/4]">
          <Image src="/recom3.svg" alt="img3" fill className="rounded-lg object-cover" />
        </div>
      </div>

      {/* Kanan - Tabs vertical */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight font-inter text-[#2f241f]">
          Furniture Sets
          <br />
          <span className="text-[#817253]">Recommendations</span>
        </h2>

        <div className="flex flex-col w-full rounded-xl overflow-hidden shadow-sm">
          <div className="px-4 py-5 bg-[#fcfafa]">
            <p className="text-lg font-bold text-black">Bedroom</p>
          </div>

          <div className="px-6 py-5 bg-[#e5f0b6] flex flex-col gap-3">
            <p className="text-lg font-bold text-black">Living Room</p>
            <p className="text-sm text-black leading-5">
              Enjoy a great living room aesthetics with your family. Designs created for increased comfortability.
            </p>
          </div>

          <div className="px-4 py-5 bg-[#fcfafa]">
            <p className="text-lg font-bold text-black">Home Office</p>
          </div>

          <div className="px-4 py-5 bg-[#fcfafa]">
            <p className="text-lg font-bold text-black">Gaming Room</p>
          </div>
        </div>
      </div>
    </section>
  );
}
