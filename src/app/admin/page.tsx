import Link from "next/link";
import { db } from "@/lib/db";
import { requireAuth } from "./actions";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboard() {
  await requireAuth();

  const [registrations, joins, contacts, coaches, equipment] = db
    ? await Promise.all([
        db.registration.count(),
        db.joinRequest.count(),
        db.contactMessage.count(),
        db.coachApplication.count(),
        db.equipmentRequest.count(),
      ])
    : [0, 0, 0, 0, 0];

  const cards = [
    { label: "Registrations", count: registrations, href: "/admin/registrations", color: "bg-fsl-coral" },
    { label: "Join Requests", count: joins, href: "/admin/joins", color: "bg-fsl-blue" },
    { label: "Contact Messages", count: contacts, href: "/admin/contacts", color: "bg-fsl-orange" },
    { label: "Coach Applications", count: coaches, href: "/admin/coaches", color: "bg-fsl-green" },
    { label: "Equipment Requests", count: equipment, href: "/admin/equipment", color: "bg-fsl-gold" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-white uppercase tracking-wide mb-8">
        Dashboard
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
          >
            <div className={`inline-block rounded-lg ${card.color} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-4`}>
              {card.label}
            </div>
            <p className="text-4xl font-heading font-bold text-white">
              {card.count}
            </p>
            <p className="mt-1 text-sm text-fsl-gray group-hover:text-white/70 transition">
              View all &rarr;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
