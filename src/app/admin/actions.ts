"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "fsl_admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

export async function loginAction(_prev: unknown, formData: FormData) {
  const password = formData.get("password") as string;
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return { error: "Admin password not configured on server." };
  }

  if (password !== expected) {
    return { error: "Invalid password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: COOKIE_MAX_AGE,
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin/login");
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === "authenticated";
}

/** Call at the top of every protected admin page. Redirects to login if not authed. */
export async function requireAuth() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
}
