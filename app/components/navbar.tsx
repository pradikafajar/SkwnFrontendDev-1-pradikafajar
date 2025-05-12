'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm relative bg-white z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Furniture Logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      {/* Menu */}
      <ul className="flex space-x-6 text-sm font-medium text-gray-700 relative">
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li className="group relative cursor-pointer">
          <span className="hover:text-[#FF6A28]">Furnitur</span>
          <ul className="absolute hidden group-hover:block top-6 left-0 bg-white border rounded shadow-md py-2 px-4 w-40 space-y-2 z-50">
            <li><Link href="#" className="hover:text-[#FF6A28]">Chairs</Link></li>
            <li><Link href="#" className="hover:text-[#FF6A28]">Tables</Link></li>
            <li><Link href="#" className="hover:text-[#FF6A28]">Lamps</Link></li>
            <li><Link href="#" className="hover:text-[#FF6A28]">Shelves</Link></li>
          </ul>
        </li>

        <li>
          <Link href="#">Partnership</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
      <Link href="/signup">
          <button className="bg-[#FF6A28] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#e75a1f] transition">
            Sign Up
          </button>
        </Link>

        <Link href="/cart">
          <Image
            src="/cart.svg"
            alt="Cart"
            width={24}
            height={24}
            className="hover:opacity-70 transition"
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
