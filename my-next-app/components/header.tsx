"use client";
import Image from "next/image";
import HeaderImage from "@/public/images/headerlogo.png";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full border-b border-[#575757] relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Image src={HeaderImage} alt="Logo" width={150} height={50} />
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link href="#">Classes</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">224 Nostrand Ave, Brooklyn, NY</Link></li>
        </ul>
        {!menuOpen && (
          <div
            className="md:hidden cursor-pointer flex flex-col gap-[4px]"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-[25px] h-[3px] bg-white"></span>
            <span className="w-[25px] h-[3px] bg-white"></span>
            <span className="w-[25px] h-[3px] bg-white"></span>
          </div>
        )}
      </div>
<div
  className={`md:hidden absolute left-0 top-[0px] w-full h-[100vh] bg-black shadow-lg 
    transition-all duration-600 ease-out
    ${menuOpen ? "opacity-100 translate-y-0 [transition-timing-function:cubic-bezier(0.25,1.15,0.35,1)]" 
    : "opacity-0 -translate-y-10 pointer-events-none"}
  `}>
  <div className="w-full h-full">
    {menuOpen && (
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-[20px] right-5 z-50"
      >
        <Image
          src="/images/close.png"
          alt="Close Icon"
          width={25}
          height={25}
        />
      </button>
    )}
    <ul className="flex flex-col text-center font-medium mt-[40px]">
      <li className="border-b border-gray-300 p-4"><Link href="#">Classes</Link></li>
      <li className="border-b border-gray-300 p-4"><Link href="#">About</Link></li>
      <li className="border-b border-gray-300 p-4"><Link href="#">224 Nostrand Ave, Brooklyn, NY</Link></li>
    </ul>
  </div>
</div>
    </header>
  );
}
