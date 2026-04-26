"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createMotivation } from "@/lib/actions/motivation.action";

export default function MotivationForm() {
  const router = useRouter();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      await createMotivation({ quote, author, category });
      setQuote("");
      setAuthor("");
      setCategory("");
      setMessage("Motivation added successfully.");
      router.push("/motivation");
      router.refresh();
    } catch (err: any) {
      setMessage(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-xl space-y-3 rounded-2xl border border-border bg-card/90 p-5"
    >
      <p className="text-xl font-semibold text-emerald-300">Add Motivation</p>
      <p className="text-sm text-muted-foreground">
        Create a quote card that appears on the motivation page.
      </p>

      <label className="block">
        <span className="mb-1 block text-sm text-foreground">Quote</span>
        <textarea
          required
          rows={4}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write a motivational quote"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-emerald-400 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm text-foreground">Author (optional)</span>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="e.g., You"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-emerald-400 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm text-foreground">Category (optional)</span>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., Discipline"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-emerald-400 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-emerald-500 px-4 py-2 font-medium text-zinc-900 transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {submitting ? "Saving..." : "Save Motivation"}
      </button>

      {message && <p className="text-sm text-foreground">{message}</p>}
    </form>
  );
}
