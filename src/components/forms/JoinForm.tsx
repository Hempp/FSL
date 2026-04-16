"use client";

import { useActionState } from "react";
import { submitJoin } from "@/app/actions";

export function JoinForm() {
  const [state, formAction, pending] = useActionState(submitJoin, null);

  if (state?.success) {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-barlow text-[24px] font-bold uppercase tracking-wide text-white">Application Submitted!</p>
        <p className="font-redhat text-[14px] text-white/40 mt-2">Our team will reach out within 48 hours.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-7">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 font-redhat text-[13px]" role="alert" aria-live="assertive">
          {state.error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="join-fname" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">First Name</label>
          <input type="text" id="join-fname" name="firstName" required placeholder="John" className="w-full bg-white/[0.04] border border-white/[0.08] px-5 py-4 font-redhat text-[15px] text-white placeholder:text-white/15 outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div>
          <label htmlFor="join-lname" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Last Name</label>
          <input type="text" id="join-lname" name="lastName" placeholder="Doe" className="w-full bg-white/[0.04] border border-white/[0.08] px-5 py-4 font-redhat text-[15px] text-white placeholder:text-white/15 outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
      </div>
      <div>
        <label htmlFor="join-email" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Email</label>
        <input type="email" id="join-email" name="email" required placeholder="john@example.com" className="w-full bg-white/[0.04] border border-white/[0.08] px-5 py-4 font-redhat text-[15px] text-white placeholder:text-white/15 outline-none focus:border-fsl-coral transition-colors duration-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="join-path" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Your Path</label>
          <select id="join-path" name="path" className="w-full bg-white/[0.04] border border-white/[0.08] px-5 py-4 font-redhat text-[15px] text-white/30 outline-none focus:border-fsl-coral transition-colors duration-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]">
            <option value="">Select</option>
            <option value="volunteer">Volunteer</option>
            <option value="partner">Partner</option>
            <option value="donor">Donor</option>
            <option value="participant">Participant</option>
          </select>
        </div>
        <div>
          <label htmlFor="join-sport" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Sport Interest</label>
          <select id="join-sport" name="sportInterest" className="w-full bg-white/[0.04] border border-white/[0.08] px-5 py-4 font-redhat text-[15px] text-white/30 outline-none focus:border-fsl-coral transition-colors duration-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]">
            <option value="">Select a sport</option>
            <option value="golf">Golf</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="soccer">Soccer</option>
            <option value="track">Track &amp; Field</option>
            <option value="multiple">Multiple Sports</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="join-msg" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Message <span className="text-white/15">(Optional)</span></label>
        <textarea id="join-msg" name="message" placeholder="Tell us about your interest..." rows={4} className="w-full bg-white/[0.04] border border-white/[0.08] px-5 py-4 font-redhat text-[15px] text-white placeholder:text-white/15 outline-none focus:border-fsl-coral transition-colors duration-500 resize-none" />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="group relative w-full md:w-auto bg-fsl-coral text-white px-14 py-5 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(244,118,124,0.25)] disabled:opacity-60"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {pending ? "Submitting..." : "Submit Application"}
          {!pending && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          )}
          {pending && (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          )}
        </span>
        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
        <span className="absolute inset-0 flex items-center justify-center gap-3 font-redhat text-[13px] font-bold uppercase tracking-[0.2em] text-fsl-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20">
          {pending ? "Submitting..." : "Submit Application"}
          {!pending && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          )}
        </span>
      </button>
    </form>
  );
}
