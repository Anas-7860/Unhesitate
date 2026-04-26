"use client";
import Navlist from "./Navlist";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import {SignedIn, SignInButton, SignedOut, UserButton} from "@clerk/nextjs";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <main className="relative z-50 flex justify-center items-center p-2 sm:p-4 bg-background overflow-x-hidden">
     <nav
  className="flex justify-between items-center w-full max-w-7xl lg:w-5/6 
  bg-gradient-to-r from-sky-100/85 via-indigo-100/80 to-emerald-100/85 dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-white/10 backdrop-blur-lg border border-sky-200/80 dark:border-white/7 rounded-[50px] p-2 sm:p-3 shadow-[0_10px_30px_rgba(56,189,248,0.16)] dark:shadow-lg 
  relative z-50 before:absolute before:inset-0 before:rounded-[50px] before:border before:border-white/65 dark:before:border-white/20 
  before:blur-xl before:opacity-30 before:content-[''] before:pointer-events-none"
>


        {/* Logo */}
        <Link href="/">
          <div className="flex items-center justify-center p-2 px-3 sm:px-4 rounded-[50px] bg-gradient-to-r from-sky-50 to-indigo-50 dark:bg-none dark:from-transparent dark:to-transparent dark:bg-black border border-sky-200/80 dark:border-transparent overflow-hidden">
            <h1 className="font-extrabold text-transparent bg-clip-text animate-gradient-neon text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider cursor-pointer whitespace-nowrap">
              UNHESITATE
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex gap-3 lg:gap-6 p-2 sm:p-3 px-3 sm:px-4 rounded-[50px] bg-gradient-to-r from-sky-50/95 to-indigo-50/90 dark:bg-none dark:from-transparent dark:to-transparent dark:bg-black border border-sky-200/80 dark:border-black hidden md:flex items-center">
          <Navlist />
          <ThemeToggle />
          <SignedOut>
      <SignInButton>
          <button className="rounded-lg font-bold shadow bg-blue-700 text-white hover:bg-blue-900 transition h-7 w-16 text-sm">
                Login
            </button>
      </SignInButton>
    </SignedOut>
     
     <SignedIn>
     <UserButton/>
      </SignedIn>
        </div>
       

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-700 dark:text-white md:hidden text-xl sm:text-2xl z-[70] p-2 rounded-full bg-gradient-to-r from-sky-50 to-indigo-50 dark:bg-none dark:from-transparent dark:to-transparent dark:bg-black/60 border border-sky-200 dark:border-white/20"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Dropdown Menu */}
{menuOpen && mounted && createPortal(
  <>
    <div
      className="fixed inset-0 z-[9998] bg-black/55 md:hidden"
      onClick={() => setMenuOpen(false)}
      aria-hidden="true"
    />
    <div
      className="fixed top-[84px] right-4 left-4 sm:left-auto sm:w-72 max-w-[92vw]
      bg-gradient-to-b from-sky-50/95 via-indigo-50/95 to-emerald-50/95 dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-zinc-950/95 backdrop-blur-md border border-sky-200 dark:border-white/20 rounded-xl shadow-2xl
      flex flex-col items-start p-4 md:hidden animate-fadeIn z-[9999]"
    >
      <Navlist mobile onClickLink={() => setMenuOpen(false)} />
      <div className="mt-4">
        <ThemeToggle />
      </div>
      <SignedOut>
        <SignInButton>
           <button className="mt-4 rounded-lg font-bold shadow bg-blue-700 text-white hover:bg-blue-900 transition h-7 w-16 text-sm">
                  Login
              </button>
        </SignInButton>
      </SignedOut>
       
      <SignedIn>
      <div className="mt-4 pt-2 border-t border-slate-200 dark:border-white/15 w-full flex justify-start">
      <UserButton/>
      </div>
       </SignedIn>

    </div>
  </>,
  document.body
)}

      </nav>
    </main>
  );
};

export default Navbar;
