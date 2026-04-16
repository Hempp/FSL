"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-barlow text-[24px] font-bold uppercase tracking-wide text-fsl-dark">Message Sent!</p>
        <p className="font-redhat text-[14px] text-[#888] mt-2">We&apos;ll get back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 font-redhat text-[13px]" role="alert" aria-live="assertive">
          {state.error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="contact-name" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell us what's on your mind..."
          rows={5}
          className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="group relative bg-fsl-dark text-white px-14 py-5 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.15)] disabled:opacity-60"
      >
        <span className="relative z-10 flex items-center gap-3">
          {pending ? "Sending..." : "Send Message"}
          {!pending && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          )}
          {pending && (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          )}
        </span>
        <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
      </button>
    </form>
  );
}
