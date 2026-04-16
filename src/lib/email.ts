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

export async function sendConfirmation(to: string, subject: string, body: string) {
  if (!RESEND_API_KEY) {
    console.log('[Confirmation email skipped — no RESEND_API_KEY]', { to, subject });
    return;
  }

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Fundamental Sports Labs <hello@fundamentalsportslabs.org>',
        to: [to],
        subject,
        html: body,
      }),
    });
  } catch (error) {
    console.error('[Confirmation email failed]', error);
  }
}

export function buildConfirmationEmail(heading: string, content: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: #202020; padding: 32px; text-align: center;">
        <h1 style="color: #F4767C; font-size: 24px; margin: 0;">FUNDAMENTAL SPORTS LABS</h1>
        <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 8px;">Free Youth Sports & Life Skills · Los Angeles</p>
      </div>
      <div style="padding: 32px;">
        <h2 style="color: #202020; font-size: 20px;">${heading}</h2>
        ${content}
      </div>
      <div style="background: #f8f8f8; padding: 24px; text-align: center; font-size: 12px; color: #888;">
        <p>Fundamental Sports Labs · 501(c)(3) Nonprofit · EIN: 39-4190687</p>
        <p>Los Angeles, California · Info@fundamentalsportslabs.org</p>
      </div>
    </div>
  `;
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
