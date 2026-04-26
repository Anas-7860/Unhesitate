import Image from "next/image";

type AccentPalette = {
  label: string;
  cardBorder: string;
  cardShadow: string;
  orb: string;
  header: string;
  badge: string;
  dotStrong: string;
  dotMedium: string;
  dotSoft: string;
};

const ACCENT_PALETTES: AccentPalette[] = [
  {
    label: "emerald",
    cardBorder: "hover:border-emerald-400/40 dark:hover:border-emerald-400/60",
    cardShadow: "hover:shadow-[0_12px_28px_rgba(16,185,129,0.18)] dark:hover:shadow-[0_14px_30px_rgba(16,185,129,0.32)]",
    orb: "bg-emerald-500/14 dark:bg-emerald-500/10",
    header: "text-emerald-700 dark:text-emerald-300",
    badge: "border-emerald-300/70 bg-emerald-100/70 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/20 dark:text-emerald-300",
    dotStrong: "bg-emerald-500/80",
    dotMedium: "bg-emerald-500/55",
    dotSoft: "bg-emerald-500/35",
  },
  {
    label: "sky",
    cardBorder: "hover:border-sky-400/40 dark:hover:border-sky-400/60",
    cardShadow: "hover:shadow-[0_12px_28px_rgba(56,189,248,0.2)] dark:hover:shadow-[0_14px_30px_rgba(56,189,248,0.34)]",
    orb: "bg-sky-500/14 dark:bg-sky-500/10",
    header: "text-sky-700 dark:text-sky-300",
    badge: "border-sky-300/70 bg-sky-100/70 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/20 dark:text-sky-300",
    dotStrong: "bg-sky-500/80",
    dotMedium: "bg-sky-500/55",
    dotSoft: "bg-sky-500/35",
  },
  {
    label: "amber",
    cardBorder: "hover:border-amber-400/40 dark:hover:border-amber-400/60",
    cardShadow: "hover:shadow-[0_12px_28px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_14px_30px_rgba(245,158,11,0.34)]",
    orb: "bg-amber-500/14 dark:bg-amber-500/10",
    header: "text-amber-700 dark:text-amber-300",
    badge: "border-amber-300/70 bg-amber-100/70 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/20 dark:text-amber-300",
    dotStrong: "bg-amber-500/80",
    dotMedium: "bg-amber-500/55",
    dotSoft: "bg-amber-500/35",
  },
  {
    label: "rose",
    cardBorder: "hover:border-rose-400/40 dark:hover:border-rose-400/60",
    cardShadow: "hover:shadow-[0_12px_28px_rgba(244,63,94,0.2)] dark:hover:shadow-[0_14px_30px_rgba(244,63,94,0.34)]",
    orb: "bg-rose-500/14 dark:bg-rose-500/10",
    header: "text-rose-700 dark:text-rose-300",
    badge: "border-rose-300/70 bg-rose-100/70 text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/20 dark:text-rose-300",
    dotStrong: "bg-rose-500/80",
    dotMedium: "bg-rose-500/55",
    dotSoft: "bg-rose-500/35",
  },
  {
    label: "violet",
    cardBorder: "hover:border-violet-400/40 dark:hover:border-violet-400/60",
    cardShadow: "hover:shadow-[0_12px_28px_rgba(167,139,250,0.2)] dark:hover:shadow-[0_14px_30px_rgba(167,139,250,0.34)]",
    orb: "bg-violet-500/14 dark:bg-violet-500/10",
    header: "text-violet-700 dark:text-violet-300",
    badge: "border-violet-300/70 bg-violet-100/70 text-violet-700 dark:border-violet-500/40 dark:bg-violet-500/20 dark:text-violet-300",
    dotStrong: "bg-violet-500/80",
    dotMedium: "bg-violet-500/55",
    dotSoft: "bg-violet-500/35",
  },
];

function pickAccent(seed: string) {
  let hash = 7;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  return ACCENT_PALETTES[hash % ACCENT_PALETTES.length];
}

type MotivationCardProps = {
  quote: string;
  author?: string;
  category?: string;
  username: string;
  userImage: string;
};

export default function MotivationCard({
  quote,
  author,
  category,
  username,
  userImage,
}: MotivationCardProps) {
  const accent = pickAccent((category || quote).toLowerCase());

  return (
    <article
      className={`group relative w-full max-w-sm overflow-hidden rounded-2xl border border-indigo-200/75 dark:border-zinc-700/80 bg-gradient-to-br from-indigo-50/95 via-white to-sky-50/95 dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-zinc-900/95 p-5 shadow-[0_10px_28px_rgba(99,102,241,0.14)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-0.5 ${accent.cardBorder} ${accent.cardShadow}`}
      data-accent={accent.label}
    >
      <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.orb} blur-2xl`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${accent.header}`}>
            Motivation
          </p>

          {category && (
            <p className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${accent.badge}`}>
              {category}
            </p>
          )}
        </div>

        <blockquote className="mt-4 text-lg font-medium leading-relaxed text-slate-800 dark:text-zinc-100">
          "{quote}"
        </blockquote>

        {author && <p className="mt-3 text-sm font-medium text-slate-500 dark:text-zinc-400">- {author}</p>}

        <div className="my-4 flex items-center justify-center" aria-hidden>
          <div className="h-px w-24 bg-indigo-200/70 dark:bg-zinc-700" />
          <div className="mx-2 flex gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dotStrong}`} />
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dotMedium}`} />
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dotSoft}`} />
          </div>
          <div className="h-px w-24 bg-indigo-200/70 dark:bg-zinc-700" />
        </div>

        <div className="flex items-center gap-2 border-t border-indigo-200/70 dark:border-zinc-800 pt-3">
          <Image
            src={userImage}
            alt={username}
            width={28}
            height={28}
            className="rounded-full border border-indigo-200/70 dark:border-zinc-600"
          />
          <p className="text-xs text-slate-500 dark:text-zinc-300">{username}</p>
        </div>
      </div>
    </article>
  );
}
