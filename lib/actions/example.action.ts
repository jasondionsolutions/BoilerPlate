// lib/actions/example.action.ts
"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function submitName(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  if (!name) return;

  (await cookies()).set("visitor_name", name, { path: "/", maxAge: 60 * 60 * 24 });
  revalidatePath("/");
}
