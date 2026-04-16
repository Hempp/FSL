"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  if (submitted) {
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white/[0.06] border border-white/10 px-4 py-3 font-redhat text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-fsl-coral/50 transition-colors"
      />
      <button
        type="submit"
        className="bg-fsl-coral hover:bg-fsl-coral/90 text-white font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-3 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
