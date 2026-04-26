"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { connect } from "@/lib/mongodb";
import Motivation from "@/lib/models/motivation.model";

export async function createMotivation(input: {
  quote: string;
  author?: string;
  category?: string;
}) {
  let user = await currentUser();

  if (!user) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized - User not authenticated");
    user = await currentUser();
  }

  if (!user) {
    throw new Error("Unauthorized - Cannot retrieve user information");
  }

  await connect();

  const motivation = await Motivation.create({
    clerkUserId: user.id,
    username:
      user.username ||
      (user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : user.primaryEmailAddress?.emailAddress) ||
      "Unknown User",
    userImage: user.imageUrl || "",
    quote: input.quote,
    author: input.author || "",
    category: input.category || "",
  });

  revalidatePath("/motivation");

  return JSON.parse(JSON.stringify(motivation));
}

export async function getMotivations() {
  await connect();

  return Motivation.find({}).sort({ createdAt: -1 }).lean();
}
