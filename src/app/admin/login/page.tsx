"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-fsl-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-heading font-bold text-white tracking-wide uppercase">
            FSL Admin
          </h1>
          <p className="text-fsl-gray mt-1 text-sm">
            Enter your password to continue
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              placeholder="Password"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-fsl-gray focus:outline-none focus:ring-2 focus:ring-fsl-coral"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-fsl-coral">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-fsl-coral px-4 py-3 font-heading font-bold uppercase tracking-wider text-white transition hover:bg-fsl-coral/90 disabled:opacity-50"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
