import { db } from "@/lib/db";
import { requireAuth } from "../actions";

export const metadata = { title: "Contact Messages | Admin" };

export default async function ContactsPage() {
  await requireAuth();

  const rows = db
    ? await db.contactMessage.findMany({ orderBy: { createdAt: "desc" } })
    : [];

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-6">
        Contact Messages
        <span className="ml-2 text-fsl-gray text-lg">({rows.length})</span>
      </h1>

      {rows.length === 0 ? (
        <p className="text-fsl-gray">No contact messages yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-fsl-gray">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Read</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r) => (
                <tr key={r.id} className="text-white/80 hover:bg-white/5 transition">
                  <td className="px-4 py-3 whitespace-nowrap text-fsl-gray">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap font-medium text-white">
                    {r.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.subject ?? "---"}</td>
                  <td className="px-4 py-3 max-w-md truncate">{r.message}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {r.read ? (
                      <span className="inline-block rounded-full bg-fsl-green/20 px-2.5 py-0.5 text-xs font-semibold uppercase text-fsl-green">
                        Read
                      </span>
                    ) : (
                      <span className="inline-block rounded-full bg-fsl-coral/20 px-2.5 py-0.5 text-xs font-semibold uppercase text-fsl-coral">
                        Unread
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
