import { db } from "@/lib/db";
import { requireAuth } from "../actions";

export const metadata = { title: "Join Requests | Admin" };

export default async function JoinsPage() {
  await requireAuth();

  const rows = db
    ? await db.joinRequest.findMany({ orderBy: { createdAt: "desc" } })
    : [];

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-6">
        Join Requests
        <span className="ml-2 text-fsl-gray text-lg">({rows.length})</span>
      </h1>

      {rows.length === 0 ? (
        <p className="text-fsl-gray">No join requests yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-fsl-gray">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Path</th>
                <th className="px-4 py-3">Sport Interest</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r) => (
                <tr key={r.id} className="text-white/80 hover:bg-white/5 transition">
                  <td className="px-4 py-3 whitespace-nowrap text-fsl-gray">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap font-medium text-white">
                    {r.firstName} {r.lastName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.path ?? "---"}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.sportInterest ?? "---"}</td>
                  <td className="px-4 py-3 max-w-xs truncate">{r.message ?? "---"}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <StatusBadge status={r.status} />
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

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: "bg-fsl-blue/20 text-fsl-blue",
    contacted: "bg-fsl-yellow/20 text-fsl-yellow",
    joined: "bg-fsl-green/20 text-fsl-green",
  };
  const cls = colors[status] ?? "bg-white/10 text-fsl-gray";
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase ${cls}`}>
      {status}
    </span>
  );
}
