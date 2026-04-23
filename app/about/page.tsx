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

const About = () => {
  return (
    <main className="relative flex justify-center min-h-screen bg-black px-4 sm:px-6 py-8 sm:py-12 overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-8 h-44 w-44 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-7xl lg:w-5/6">
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.09)]">
          <p className="inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs sm:text-sm tracking-[0.25em] uppercase text-sky-300">
            About Unhesitate
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white max-w-4xl">
            A space where <span className="text-sky-400">dreams</span> are stored,
            and <span className="text-red-400">nightmares</span> lose their power.
          </h1>

          <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
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
              className="rounded-full border border-white/25 bg-black/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-zinc-100 transition hover:border-sky-300/60 hover:text-sky-300"
            >
              Explore Dreams
            </Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md transition hover:border-sky-400/30 hover:bg-white/10"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/45 p-5 sm:p-7 shadow-[0_0_35px_rgba(14,165,233,0.12)]">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text animate-gradient-neon">
            Why the name “Unhesitate”?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl">
            Because your thoughts deserve movement, not delay. Whether your memory is beautiful,
            confusing, or intense, this platform invites you to write first and judge later.
            The goal is simple: help people express, process, and grow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;