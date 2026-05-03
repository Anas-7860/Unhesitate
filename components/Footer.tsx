"use client";

import { FiMail, FiGithub, FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-6 px-4 py-3">
      <div className="mx-auto max-w-7xl border-t border-sky-200/80 dark:border-white/10 pt-4">
        {/* Row 1: centered logo */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center rounded-full border border-sky-200/80 dark:border-white/10 px-3 py-1">
            <span className="font-semibold text-slate-100 text-sm bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300">
              UNHESITATE
            </span>
          </div>
        </div>

        {/* Row 2: left copyright, right contacts + top button */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <div className="text-slate-500">© {year} — Anas Khan</div>

          <div className="flex items-center gap-4">
            <a href="mailto:anaskhan.cse4@gmail.com" className="inline-flex items-center gap-2 hover:text-emerald-300">
              <FiMail className="text-emerald-300 w-4 h-4" />
              <span className="hidden sm:inline">anaskhan.cse4@gmail.com</span>
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-1 rounded hover:text-cyan-300">
              <FiGithub className="text-cyan-300 w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="rounded-md border border-slate-200/30 dark:border-white/8 bg-transparent dark:bg-white/2 px-2 py-1 text-slate-700 dark:text-slate-200 hover:bg-white/4"
            >
              <FiChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;