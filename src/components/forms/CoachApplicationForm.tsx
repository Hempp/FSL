"use client";

import { useActionState } from "react";
import { submitCoachApplication } from "@/app/actions";

const sports = ["Basketball", "Football", "Soccer", "Golf", "Track & Field", "Baseball"];
const availability = ["Weekday mornings", "Weekday evenings", "Weekends"];
const experienceOptions = ["2-5 years", "5-10 years", "10+ years"];

export function CoachApplicationForm() {
  const [state, formAction, pending] = useActionState(submitCoachApplication, null);

  if (state?.success) {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-barlow text-[24px] font-bold uppercase tracking-wide text-white">Application Received!</p>
        <p className="font-redhat text-[14px] text-white/40 mt-2">We&apos;ll review your application and follow up within a week.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 font-redhat text-[13px]" role="alert" aria-live="assertive">
          {state.error}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          required
          className="w-full bg-white/[0.05] border border-white/[0.08] px-4 py-3 font-redhat text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300"
          placeholder="Your full name"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white/[0.05] border border-white/[0.08] px-4 py-3 font-redhat text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full bg-white/[0.05] border border-white/[0.08] px-4 py-3 font-redhat text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Sport Expertise */}
      <div>
        <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-3">
          Sport Expertise
        </label>
        <div className="flex flex-wrap gap-3">
          {sports.map((sport) => (
            <label key={sport} className="flex items-center gap-2 cursor-pointer group/check">
              <input type="checkbox" name="sports" value={sport} className="w-4 h-4 accent-[#F4767C] bg-white/5 border-white/10" />
              <span className="font-redhat text-[13px] text-white/50 group-hover/check:text-white/70 transition-colors">{sport}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">
          Years of Experience
        </label>
        <select
          name="experience"
          required
          className="w-full bg-white/[0.05] border border-white/[0.08] px-4 py-3 font-redhat text-[14px] text-white/60 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
          defaultValue=""
        >
          <option value="" disabled className="text-black">Select experience level</option>
          {experienceOptions.map((opt) => (
            <option key={opt} value={opt} className="text-black">{opt}</option>
          ))}
        </select>
      </div>

      {/* Availability */}
      <div>
        <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-3">
          Availability
        </label>
        <div className="flex flex-wrap gap-3">
          {availability.map((a) => (
            <label key={a} className="flex items-center gap-2 cursor-pointer group/check">
              <input type="checkbox" name="availability" value={a} className="w-4 h-4 accent-[#F4767C] bg-white/5 border-white/10" />
              <span className="font-redhat text-[13px] text-white/50 group-hover/check:text-white/70 transition-colors">{a}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Why coach */}
      <div>
        <label className="block font-redhat text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">
          Why do you want to coach?
        </label>
        <textarea
          name="motivation"
          rows={4}
          required
          className="w-full bg-white/[0.05] border border-white/[0.08] px-4 py-3 font-redhat text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 resize-none"
          placeholder="Tell us what drives you to mentor young athletes..."
        />
      </div>

      {/* Background check consent */}
      <div className="border-t border-white/[0.06] pt-5">
        <label className="flex items-start gap-3 cursor-pointer group/check">
          <input type="checkbox" name="bgCheckConsent" required className="w-4 h-4 mt-0.5 accent-[#F4767C] bg-white/5 border-white/10" />
          <span className="font-redhat text-[12px] text-white/40 leading-[1.7] group-hover/check:text-white/55 transition-colors">
            I consent to a background check as required by FSL&apos;s youth safety policy. I understand this is mandatory for all coaching positions.
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="group/btn relative w-full bg-fsl-coral text-white py-4 font-barlow text-[14px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,118,124,0.25)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
      >
        <span className="relative z-10">
          {pending ? "Submitting..." : "Apply to Coach"}
          {pending && (
            <svg className="animate-spin h-4 w-4 inline ml-2" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[800ms]" />
      </button>
    </form>
  );
}
