"use server";

import { db } from "@/lib/db";
import { sendNotification, formatEmailTable, sendConfirmation, buildConfirmationEmail } from "@/lib/email";

/* ────────────────────────────────────────────
   TODO: Add rate limiting in production.
   Use Vercel Edge Middleware, Upstash @upstash/ratelimit,
   or similar to throttle form submissions per IP.
   ──────────────────────────────────────────── */

/* ────────────────────────────────────────────
   Helper: honeypot check — bots fill hidden
   fields that real users never see. If filled,
   silently return success to fool the bot.
   ──────────────────────────────────────────── */
function isBot(formData: FormData): boolean {
  const honeypot = formData.get("website") as string;
  return !!honeypot;
}

/* ────────────────────────────────────────────
   Helper: check if DB is available
   ──────────────────────────────────────────── */
type FormResult = { success: boolean; error?: string };

async function withDb(operation: () => Promise<FormResult>, fallbackData: Record<string, unknown>): Promise<FormResult> {
  const { db } = await import("@/lib/db");
  if (!db) {
    console.log("[Form Submission — no DB configured]", fallbackData);
    return { success: true };
  }
  return operation();
}

/* ────────────────────────────────────────────
   1. Registration (Tournament / Clinic)
   ──────────────────────────────────────────── */
export async function submitRegistration(_prev: unknown, formData: FormData) {
  if (isBot(formData)) return { success: true };

  const data = {
    programType: formData.get("programType") as string,
    eventName: formData.get("eventSelection") as string,
    firstName: formData.get("athleteFirst") as string,
    lastName: formData.get("athleteLast") as string,
    dob: formData.get("dob") as string,
    gender: formData.get("gender") as string,
    tshirtSize: formData.get("tshirtSize") as string,
    grade: formData.get("grade") as string,
    school: formData.get("school") as string,
    sports: formData.getAll("sports") as string[],
    parentFirstName: formData.get("parentFirst") as string,
    parentLastName: formData.get("parentLast") as string,
    parentPhone: formData.get("parentPhone") as string,
    parentEmail: formData.get("parentEmail") as string,
    address: formData.get("address") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zip: formData.get("zip") as string,
    emergencyName: formData.get("emergName") as string,
    emergencyPhone: formData.get("emergPhone") as string,
    emergencyRelationship: formData.get("emergRelation") as string,
    allergies: formData.get("allergies") as string,
    insuranceProvider: formData.get("insurance") as string,
    policyNumber: formData.get("policyNumber") as string,
    waiverConsent: formData.get("waiver") === "on",
  };

  if (!data.firstName || !data.lastName || !data.parentEmail) {
    return { success: false, error: "Athlete name and parent email are required." };
  }
  if (!data.waiverConsent) {
    return { success: false, error: "You must accept the waiver to register." };
  }

  try {
    return await withDb(
      async () => {
        await db.registration.create({ data });
        sendNotification(
          `New Registration: ${data.firstName} ${data.lastName} for ${data.eventName || data.programType}`,
          formatEmailTable("New Registration", data),
        ).catch(() => {});
        sendConfirmation(
          data.parentEmail,
          `Registration Confirmed — ${data.eventName || data.programType}`,
          buildConfirmationEmail(
            "Registration Confirmed!",
            `<p>Thank you for registering <strong>${data.firstName}</strong> for <strong>${data.eventName || data.programType}</strong>!</p>
             <p>We'll send program details as the date approaches. All programs are free — no payment needed.</p>
             <p style="margin-top: 24px; color: #888;">If you have questions, reply to this email or contact us at Info@fundamentalsportslabs.org.</p>`,
          ),
        ).catch(() => {});
        return { success: true };
      },
      data
    );
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* ────────────────────────────────────────────
   2. Join / Volunteer
   ──────────────────────────────────────────── */
export async function submitJoin(_prev: unknown, formData: FormData) {
  if (isBot(formData)) return { success: true };

  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    path: formData.get("path") as string,
    sportInterest: formData.get("sportInterest") as string,
    message: formData.get("message") as string,
  };

  if (!data.firstName || !data.email) {
    return { success: false, error: "First name and email are required." };
  }

  try {
    return await withDb(
      async () => {
        await db.joinRequest.create({ data });
        sendNotification(
          `New ${data.path || "Join"} Application: ${data.firstName} ${data.lastName}`,
          formatEmailTable("New Join / Volunteer Application", data),
        ).catch(() => {});
        sendConfirmation(
          data.email,
          "Application Received — Fundamental Sports Labs",
          buildConfirmationEmail(
            "Application Received!",
            `<p>Thanks for your interest in <strong>${data.path || "joining"}</strong> with FSL!</p>
             <p>Our team will reach out within 48 hours.</p>
             <p style="margin-top: 24px; color: #888;">If you have questions, reply to this email or contact us at Info@fundamentalsportslabs.org.</p>`,
          ),
        ).catch(() => {});
        return { success: true };
      },
      data
    );
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* ────────────────────────────────────────────
   3. Contact
   ──────────────────────────────────────────── */
export async function submitContact(_prev: unknown, formData: FormData) {
  if (isBot(formData)) return { success: true };

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  if (!data.name || !data.email) {
    return { success: false, error: "Name and email are required." };
  }

  try {
    return await withDb(
      async () => {
        await db.contactMessage.create({ data });
        sendNotification(
          `New Contact Message from ${data.name}: ${data.subject || "(no subject)"}`,
          formatEmailTable("New Contact Message", data),
        ).catch(() => {});
        sendConfirmation(
          data.email,
          "We Got Your Message — FSL",
          buildConfirmationEmail(
            "We Got Your Message!",
            `<p>Thanks for reaching out, <strong>${data.name}</strong>. We'll respond within 48 hours.</p>
             <p style="margin-top: 24px; color: #888;">If you have questions, reply to this email or contact us at Info@fundamentalsportslabs.org.</p>`,
          ),
        ).catch(() => {});
        return { success: true };
      },
      data
    );
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* ────────────────────────────────────────────
   4. Coach Application
   ──────────────────────────────────────────── */
export async function submitCoachApplication(_prev: unknown, formData: FormData) {
  if (isBot(formData)) return { success: true };

  const data = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    sports: formData.getAll("sports") as string[],
    experience: formData.get("experience") as string,
    availability: formData.getAll("availability") as string[],
    motivation: formData.get("motivation") as string,
    backgroundCheckConsent: formData.get("bgCheckConsent") === "on",
  };

  if (!data.fullName || !data.email) {
    return { success: false, error: "Full name and email are required." };
  }
  if (!data.backgroundCheckConsent) {
    return { success: false, error: "Background check consent is required." };
  }

  try {
    return await withDb(
      async () => {
        await db.coachApplication.create({ data });
        sendNotification(
          `New Coach Application: ${data.fullName}`,
          formatEmailTable("New Coach Application", data),
        ).catch(() => {});
        sendConfirmation(
          data.email,
          "Coach Application Received — FSL",
          buildConfirmationEmail(
            "Coach Application Received!",
            `<p>Thank you for applying, <strong>${data.fullName}</strong>.</p>
             <p>We'll review your application and follow up within a week.</p>
             <p style="margin-top: 24px; color: #888;">If you have questions, reply to this email or contact us at Info@fundamentalsportslabs.org.</p>`,
          ),
        ).catch(() => {});
        return { success: true };
      },
      data
    );
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* ────────────────────────────────────────────
   5. Equipment / Jersey Request
   ──────────────────────────────────────────── */
export async function submitEquipmentRequest(_prev: unknown, formData: FormData) {
  if (isBot(formData)) return { success: true };

  const data = {
    organizationName: formData.get("organizationName") as string,
    contactName: formData.get("contactName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    type: formData.get("type") as string,
    sportNeeds: formData.get("sportNeeds") as string,
    numberOfAthletes: formData.get("numberOfAthletes") as string,
    message: formData.get("message") as string,
  };

  if (!data.contactName || !data.email || !data.organizationName) {
    return { success: false, error: "Organization name, contact name, and email are required." };
  }

  try {
    return await withDb(
      async () => {
        await db.equipmentRequest.create({ data });
        sendNotification(
          `Equipment Request from ${data.organizationName}`,
          formatEmailTable("New Equipment / Jersey Request", data),
        ).catch(() => {});
        sendConfirmation(
          data.email,
          "Equipment Request Received — FSL",
          buildConfirmationEmail(
            "Equipment Request Received!",
            `<p>We received your request, <strong>${data.contactName}</strong>.</p>
             <p>Our equipment team will respond within 5 business days.</p>
             <p style="margin-top: 24px; color: #888;">If you have questions, reply to this email or contact us at Info@fundamentalsportslabs.org.</p>`,
          ),
        ).catch(() => {});
        return { success: true };
      },
      data
    );
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* ────────────────────────────────────────────
   6. Newsletter Signup
   ──────────────────────────────────────────── */
export async function subscribeNewsletter(_prev: unknown, formData: FormData) {
  if (isBot(formData)) return { success: true };

  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email." };
  }

  try {
    return await withDb(
      async () => {
        await db.newsletterSubscriber.upsert({
          where: { email },
          update: {},
          create: { email },
        });
        return { success: true };
      },
      { email },
    );
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
