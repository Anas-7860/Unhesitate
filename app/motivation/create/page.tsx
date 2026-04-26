import Link from "next/link";
import MotivationForm from "@/components/MotivationForm";

export default function CreateMotivationPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-4 w-full max-w-xl">
        <Link href="/motivation" className="text-sm text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-300 dark:hover:text-emerald-200">
          Back to Motivation Wall
        </Link>
      </div>

      <MotivationForm />
    </main>
  );
}
