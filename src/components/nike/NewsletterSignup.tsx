"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/app/actions";

export function NewsletterSignup() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, null);

  if (state?.success) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-redhat text-[14px] text-white/70">
          Thanks for subscribing!
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col sm:flex-row gap-3">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state?.error && (
        <div className="text-red-400 font-redhat text-[13px] mb-1" role="alert" aria-live="assertive">
          {state.error}
        </div>
      )}
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="flex-1 bg-white/[0.06] border border-white/10 px-4 py-3 font-redhat text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-fsl-coral/50 transition-colors"
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-fsl-coral hover:bg-fsl-coral/90 text-white font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-3 transition-colors disabled:opacity-50"
      >
        {pending ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
