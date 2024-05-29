"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import CustomButton from "@/components/ui/CustomButton";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [navHeight, setNavHeight] = useState(0);
  const headerRef = useRef(null);

  // storing scroll Y value to conditionally show nav button & animate element
  useEffect(() => {
    function handleScroll() {
      if (headerRef.current) {
        setNavHeight(window.scrollY);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={` top-0 left-0 w-full z-50 py-3 lg:py-4 2xl:py-6 ${
        navHeight > 100
          ? "fixed bg-csDarkBlue animate-fade-in border-b border-gray-800"
          : "absolute"
      }`}
    >
      <nav className="main-container flex-center gap-10">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="Kainu logo"
            width={150}
            height={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-[72px] sm:w-[80px] md:w-[90px] lg:w-[100px] 2xl:w-[120px]"
          />
        </Link>

        <div className="hidden sm:flex items-center justify-between gap-3">
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <div className="hidden sm:block">
            <CustomButton
              textLabel="Get started"
              btnBgColor="primary-gradient"
              borderColor="border-none"
              hoverColor1="bg-csDarkBlue"
              hoverColor2="bg-[#FFC947]"
              hoverColor3="secondary-gradient"
            />
          </div>
          <div className="hidden sm:block md:hidden">
            <MobileNav />
          </div>
        </div>

        {/* mobile nav */}
        <div className="block sm:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
