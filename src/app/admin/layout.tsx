import { isAuthenticated, logoutAction } from "./actions";
import Link from "next/link";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/registrations", label: "Registrations" },
  { href: "/admin/joins", label: "Join Requests" },
  { href: "/admin/contacts", label: "Contacts" },
  { href: "/admin/coaches", label: "Coach Apps" },
  { href: "/admin/equipment", label: "Equipment" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();

  // If not authenticated, render children without the nav shell.
  // The login page renders its own full-screen UI.
  // Protected pages redirect to login via requireAuth().
  if (!authed) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-fsl-dark">
      {/* Top navigation */}
      <nav className="border-b border-white/10 bg-fsl-dark/95 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-1 overflow-x-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-fsl-gray transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-md px-3 py-2 text-sm font-medium text-fsl-gray transition hover:bg-white/5 hover:text-fsl-coral"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
