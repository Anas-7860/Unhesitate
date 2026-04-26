import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Dream Journal, Reimagined",
    desc: "Capture moments that inspire you and revisit them whenever you need direction.",
  },
  {
    title: "Nightmare Release",
    desc: "Write down unsettling thoughts and turn fear into awareness and reflection.",
  },
  {
    title: "Open Source Spirit",
    desc: "Built in public so anyone can learn, contribute, and make the platform better.",
  },
];

const quoteIdeas = [
  "Daily quote cards that nudge you toward one meaningful action.",
  "Category-based colors to separate focus, discipline, healing, and growth.",
  "A personal wall where your strongest words stay visible when motivation drops.",
];

const About = () => {
  return (
    <main className="relative flex justify-center min-h-screen bg-background px-4 sm:px-6 py-8 sm:py-12 overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-8 h-44 w-44 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-7xl lg:w-5/6">
        <div className="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50/90 via-white to-indigo-50/70 dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:border-zinc-700 dark:bg-zinc-900/75 backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-[0_16px_40px_rgba(56,189,248,0.12)] dark:shadow-[0_0_40px_rgba(0,0,0,0.35)]">
          <p className="inline-block rounded-full border border-sky-400/35 bg-sky-400/12 dark:bg-sky-400/10 px-4 py-1 text-xs sm:text-sm tracking-[0.25em] uppercase text-sky-700 dark:text-sky-300">
            About Unhesitate
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-800 dark:text-white max-w-4xl">
            A space where <span className="text-sky-400">dreams</span> are stored,
            and <span className="text-red-400">nightmares</span> lose their power.
          </h1>

          <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Unhesitate is a futuristic journaling platform designed for expression and healing.
            You can save your aspirations, document your fears, and reflect on your inner world
            through a clean, cinematic experience inspired by neon glassmorphism.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/create"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm sm:text-base font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_24px_rgba(56,189,248,0.55)]"
            >
              <span className="relative z-10">Share Your Story</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>

            <Link
              href="/dreams"
              className="rounded-full border border-sky-200 bg-white/75 dark:border-white/25 dark:bg-black/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-zinc-100 transition hover:border-sky-300/60 hover:text-sky-300"
            >
              Explore Dreams
            </Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-white via-indigo-50/65 to-sky-50/60 dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:border-zinc-700 dark:bg-zinc-900/65 p-5 sm:p-6 backdrop-blur-md transition hover:border-sky-400/30 dark:hover:border-sky-500/40 hover:bg-white/10 dark:hover:bg-zinc-900/90"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">{item.title}</h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-sky-200/70 bg-gradient-to-r from-sky-50/90 to-fuchsia-50/70 dark:bg-none dark:from-transparent dark:to-transparent dark:border-zinc-700 dark:bg-zinc-900/70 p-5 sm:p-7 shadow-[0_0_35px_rgba(14,165,233,0.12)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text animate-gradient-neon">
            Why the name “Unhesitate”?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
            Because your thoughts deserve movement, not delay. Whether your memory is beautiful,
            confusing, or intense, this platform invites you to write first and judge later.
            The goal is simple: help people express, process, and grow.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/85 via-white to-sky-50/65 dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:border-zinc-700 dark:bg-zinc-900/70 p-5 sm:p-7 shadow-[0_12px_32px_rgba(16,185,129,0.12)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            Motivation Quotes That Stay With You
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
            The quote space in Unhesitate is made for short lines that are practical, personal,
            and repeatable. Instead of only collecting thoughts, you can pin words that help you
            reset your mind and keep momentum during difficult days.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {quoteIdeas.map((line) => (
              <article
                key={line}
                className="rounded-xl border border-emerald-200/70 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/80 p-4"
              >
                <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">{line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;