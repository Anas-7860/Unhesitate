"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createDream } from "@/lib/actions/dream.action";

const DreamForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageError, setImageError] = useState(false);
  const [type, setType] = useState<'dream' | 'nightmare'>("dream");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

 async function onSubmit(e: React.FormEvent) {
  e.preventDefault();
  setSubmitting(true);
  setMessage(null);

  try {
    await createDream({
      title,
      location,
      description,
      type,
      imageUrl,
    });

    setTitle("");
    setLocation("");
    setDescription("");
    setImageUrl("");
    setImageError(false);
    setType("dream");
    setMessage("Dream saved ✨");
  } catch (err: any) {
    setMessage(err?.message || "Something went wrong");
  } finally {
    setSubmitting(false);
  }
}

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm h-auto space-y-2 sm:space-y-3 rounded-2xl border border-gray-700 bg-white/10 p-3 sm:p-5 shadow-md overflow-hidden">
      {/* Title */}
      <p className="relative flex items-center text-lg sm:text-xl font-semibold tracking-tight text-sky-400 pl-5 break-words">
        Create Your Dream :)
        <span className="absolute left-0 h-2.5 w-2.5 rounded-full bg-sky-400 animate-ping" />
        <span className="absolute left-0 h-2.5 w-2.5 rounded-full bg-sky-400" />
      </p>

      <p className="text-xs sm:text-sm text-gray-400">
        Fill in the details and let us know about your dream.
      </p>

      {/* Title */}
      <label className="relative block">
        <input
          type="text"
          required
          className="peer w-full rounded-lg border border-gray-600 bg-gray-700 px-3 pt-5 pb-2 text-sm sm:text-base text-white placeholder-transparent focus:border-sky-400 focus:outline-none"
          placeholder="Dream Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className="absolute left-3 top-2 text-xs sm:text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-sky-400">
          Dream Title
        </span>
      </label>

      {/* Location (optional) */}
      <label className="relative block">
        <input
          type="text"
          className="peer w-full rounded-lg border border-gray-600 bg-gray-700 px-3 pt-5 pb-2 text-sm sm:text-base text-white placeholder-transparent focus:border-sky-400 focus:outline-none"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <span className="absolute left-3 top-2 text-xs sm:text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-sky-400">
          Location
        </span>
      </label>

      {/* Image URL */}
      <label className="relative block">
        <input
          type="url"
          className="peer w-full rounded-lg border border-gray-600 bg-gray-700 px-3 pt-5 pb-2 text-sm sm:text-base text-white placeholder-transparent focus:border-sky-400 focus:outline-none"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
            setImageError(false);
          }}
        />
        <span className="absolute left-3 top-2 text-xs sm:text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-sky-400">
          Image URL
        </span>
      </label>

      {/* Image Preview */}
      {imageUrl && (
        <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-600 bg-gray-800">
          {imageError ? (
            <div className="flex items-center justify-center h-full text-red-400 text-xs text-center p-2">
              Invalid image URL or failed to load
            </div>
          ) : (
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      )}

      {/* Type */}
      <label className="relative block">
        <select
          className="peer w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-3 text-sm sm:text-base text-white focus:border-sky-400 focus:outline-none"
          value={type}
          onChange={(e) => setType(e.target.value as 'dream' | 'nightmare')}
        >
          <option value="dream">Dream</option>
          <option value="nightmare">Nightmare</option>
        </select>
      </label>

      {/* Description */}
      <label className="block flex-1">
        <textarea
          required
          rows={3}
          className="w-full min-h-[80px] rounded-lg border border-gray-600 bg-gray-700 px-3 py-3 text-sm sm:text-base text-white placeholder:text-gray-400 focus:border-sky-400 focus:outline-none resize-none"
          placeholder="Dream Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-sky-400 px-4 py-2 font-medium text-sm sm:text-base text-white transition hover:bg-sky-500 mt-4 sm:mt-6 disabled:opacity-60 cursor-pointer"
      >
        {submitting ? 'Saving...' : 'Submit'}
      </button>
      {message && <p className="text-xs sm:text-sm text-gray-300">{message}</p>}
    </form>
  );
};

export default DreamForm;
