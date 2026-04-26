"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const nextTheme: Theme = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    setMounted(true);
  }, []);

  function onToggle() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/85 text-foreground shadow-sm transition hover:scale-105"
    >
      {mounted && theme === "dark" ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
    </button>
  );
}
