import Link from "next/link";
import MotivationCard from "@/components/MotivationCard";
import { getMotivations } from "@/lib/actions/motivation.action";

const page = async () => {
  const motivations = await getMotivations();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Motivation Wall</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Add independent motivation quotes and browse all shared cards.
          </p>
        </div>

        <Link
          href="/motivation/create"
          className="inline-flex w-fit items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-emerald-400"
        >
          Add Motivation
        </Link>
      </div>

      <section className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {motivations.length === 0 && (
          <p className="text-sm text-muted-foreground sm:text-base">
            No motivation cards yet. Click Add Motivation to create your first quote.
          </p>
        )}

        {motivations.map((item: any) => (
          <MotivationCard
            key={item._id}
            quote={item.quote}
            author={item.author}
            category={item.category}
            username={item.username}
            userImage={item.userImage}
          />
        ))}
      </section>
    </main>
  )
}

export default page