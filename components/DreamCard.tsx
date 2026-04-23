"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  type?: "dream" | "nightmare";
  location?: string;
  username: string;
  userImage: string;
  imageUrl?: string;
};

export default function DreamCard({
  title,
  description,
  type,
  location,
  username,
  userImage,
  imageUrl,
}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className="group relative w-full max-w-sm h-64 perspective cursor-pointer"
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
    >
      
      {/* Card Container */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "rotate-x-180" : "md:group-hover:rotate-x-180"
        }`}
      >

        {/* Front Side */}
        <div className="absolute inset-0 rounded-2xl bg-zinc-900 flex items-center justify-center backface-hidden border border-zinc-700 shadow-lg overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 fill-zinc-400"
              viewBox="0 0 24 24"
            >
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
            </svg>
          )}

          {/* Bottom Left Overlay Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center pointer-events-none">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 max-w-full overflow-hidden">
              <Image
                  src={userImage}
                  alt={username}
                  width={28}
                  height={28}
                  className="rounded-full border border-zinc-600 flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <p className="text-[11px] font-bold text-white truncate leading-tight">
                    {title}
                  </p>
                  {location && (
                    <p className="text-[9px] text-zinc-300 truncate leading-tight">
                      📍 {location}
                    </p>
                  )}
                </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 rounded-2xl bg-zinc-900 p-5 rotate-x-180 backface-hidden border border-zinc-700 shadow-lg flex flex-col justify-between">

          {/* Top Content */}
          <div>
            <p className="text-lg font-semibold text-white">{title}</p>

            <p className="mt-2 text-sm text-zinc-400 leading-snug line-clamp-3">
              {description}
            </p>

            {location && (
              <div className="mt-2 text-xs text-zinc-500">
                📍 {location}
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-4">

            {/* LEFT: Profile Info */}
            <div className="flex items-center gap-2">
              <Image
                src={userImage}
                alt={username}
                width={26}
                height={26}
                className="rounded-full border border-zinc-600"
              />
              <span className="text-xs text-zinc-300">
                {username}
              </span>
            </div>

            {/* RIGHT: Type Badge */}
            {type && (
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  type === "dream"
                    ? "bg-sky-500/20 text-sky-400 border border-sky-500/40"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                {type}
              </span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}