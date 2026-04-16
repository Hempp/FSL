const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "Info@fundamentalsportslabs.org";

export async function sendNotification(subject: string, body: string) {
  if (!RESEND_API_KEY) {
    console.log("[Email notification skipped — no RESEND_API_KEY]", {
      subject,
    });
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FSL Notifications <notifications@fundamentalsportslabs.org>",
        to: [NOTIFICATION_EMAIL],
        subject,
        html: body,
      }),
    });

    if (!res.ok) {
      console.error("[Email notification failed]", res.status, await res.text());
    }
  } catch (error) {
    console.error("[Email notification failed]", error);
    // Don't throw — email failure shouldn't block form submission
  }
}

/** Wrap form data as a simple HTML table for email body */
export function formatEmailTable(
  heading: string,
  fields: Record<string, unknown>,
): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
      const display = Array.isArray(value) ? value.join(", ") : String(value);
      return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 12px">${display}</td></tr>`;
    })
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a1a1a;border-bottom:2px solid #e5e5e5;padding-bottom:8px">${heading}</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <p style="color:#888;font-size:12px;margin-top:24px">Sent by FSL Notifications</p>
    </div>
  `;
}
