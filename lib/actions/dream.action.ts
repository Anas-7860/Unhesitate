"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { connect } from "@/lib/mongodb";
import Dream from "@/lib/models/dream.model";

export async function createDream(input: {
  title: string;
  description: string;
  type: "dream" | "nightmare";
  location?: string;
  imageUrl?: string;
}) {
  try {
    // Try to get user from currentUser first
    let user = await currentUser();
    
    // If currentUser fails, fallback to auth()
    if (!user) {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized - User not authenticated");
    }

    // Get fresh user data
    user = await currentUser();
    if (!user) {
      throw new Error("Unauthorized - Cannot retrieve user information");
    }

    await connect();

    const dreamData = {
      clerkUserId: user.id,
      username:
        user.username ||
        (user.firstName && user.lastName 
          ? `${user.firstName} ${user.lastName}` 
          : user.primaryEmailAddress?.emailAddress) ||
        "Unknown User",
      userImage: user.imageUrl || "",
      ...input,
    };

    const dream = await Dream.create(dreamData);
    return JSON.parse(JSON.stringify(dream));
  } catch (error) {
    console.error("Error creating dream:", error);
    throw error;
  }
}

export async function getMyDreams() {
  await connect();

  return await Dream.find({ type: "dream" })
    .sort({ createdAt: -1 })
    .lean();
}

export async function getNightmares() {
  await connect();

  return await Dream.find({ type: "nightmare" })
    .sort({ createdAt: -1 }).lean()
}

export async function deleteDream(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  await connect();

  await Dream.deleteOne({ _id: id, clerkUserId: userId });
}
