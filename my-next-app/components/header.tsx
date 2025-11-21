"use client";
import Image from "next/image";
import HeaderImage from "@/public/images/headerlogo.png";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#575757]">
      <div className="container mx-auto flex items-center justify-between flex-row-reverse md:flex float-right md:float-none">
        <div className="w-[50%] flex justify-end p-4 ">
            <Image src={HeaderImage}
              alt="Logo"
              width={150}
              height={50}
            />
        </div>
        <div className="text-sm w-[50%] flex justify-start hidden md:block {`${menuOpen ? 'block' : 'hidden'}absolute left-0 top-14 w-full bg-white shadow-md py-4 md:hidden`}">
                <ul className="flex min-h-[30px] items-center font-medium">
                    <li className="border-[#575757] border-r p-[20px]"><Link href="#">Classes</Link></li>
                    <li className="border-[#575757] border-r p-[20px]"><Link href="#">About</Link></li>
                    <li className="border-[#575757] border-r p-[20px]"><Link href="#">224 Nostrand Ave, Brooklyn, NY</Link></li>
                </ul>
        </div>
      </div>
      <div className="md:hidden py-[20px] cursor-pointer px-[20px]"onClick={()=>setMenuOpen(!menuOpen)}>

        <div className="w-[20px] h-[3px] bg-white my-[2px]"></div>
        <div className="w-[20px] h-[3px] bg-white my-[2px]"></div>
        <div className="w-[20px] h-[3px] bg-white my-[2px]"></div>
      </div>
    </header>
  );
}