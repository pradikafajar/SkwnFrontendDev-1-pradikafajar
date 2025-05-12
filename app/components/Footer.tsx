'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-12 py-10 border-t border-zinc-200">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
        {/* Company Info */}
        <div className="max-w-sm space-y-3">
           <Link href="/">
         <Image
          src="/logo.png"
          alt="Furniture Logo"
          width={120}
          height={40}
          priority
           />
          </Link>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Dekoor is a furniture company created to fulfill the needs of family
            with aesthetic feeling in their furniture. Always pay attention to details
            and give clear communication for the customers. Priority of our design is comfortability.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold mb-1">Support</h3>
            <ul className="space-y-1 text-zinc-600">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Care Guide</a></li>
              <li><a href="#">Redeem Warranty</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-1">Social Media</h3>
            <ul className="space-y-1 text-zinc-600">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-1">About Us</h3>
            <ul className="space-y-1 text-zinc-600">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Designer</a></li>
              <li><a href="#">Craftmanship</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-sm text-zinc-500 text-center md:text-left">
        &copy; Copyright 2022 Dekoor
      </p>
    </footer>
  );
}