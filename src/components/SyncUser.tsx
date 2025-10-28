"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export default function SyncUser() {
  const { user } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  useEffect(() => {
    if (!user) return;

    syncUser({
      name: user.fullName || "",
      email: user.primaryEmailAddress?.emailAddress || "",
      clerkId: user.id,
      image: user.imageUrl || "",
    });
  }, [user, syncUser]);

  return null; // nothing visual here
}
