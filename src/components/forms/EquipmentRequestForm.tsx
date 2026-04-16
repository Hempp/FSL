"use client";

import { useActionState } from "react";
import { submitEquipmentRequest } from "@/app/actions";

export function EquipmentRequestForm() {
  const [state, formAction, pending] = useActionState(submitEquipmentRequest, null);

  if (state?.success) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-barlow text-[24px] font-bold uppercase tracking-wide text-fsl-dark">Request Submitted!</p>
        <p className="font-redhat text-[14px] text-[#888] mt-2">Our equipment team will review and respond within 5 business days.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 font-redhat text-[13px]" role="alert" aria-live="assertive">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label htmlFor="eq-org" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Organization Name</label>
          <input id="eq-org" name="organizationName" type="text" required placeholder="School or organization name" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div>
          <label htmlFor="eq-contact" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Contact Name</label>
          <input id="eq-contact" name="contactName" type="text" required placeholder="Your name" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div>
          <label htmlFor="eq-email" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Email</label>
          <input id="eq-email" name="email" type="email" required placeholder="you@email.com" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div>
          <label htmlFor="eq-phone" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Phone</label>
          <input id="eq-phone" name="phone" type="tel" placeholder="(555) 123-4567" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div>
          <label htmlFor="eq-type" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Request Type</label>
          <select id="eq-type" name="type" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark outline-none focus:border-fsl-coral transition-colors duration-500 appearance-none">
            <option value="">Select type</option>
            <option value="jerseys">Jerseys</option>
            <option value="equipment">Equipment</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div>
          <label htmlFor="eq-sport" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Sport Needs</label>
          <input id="eq-sport" name="sportNeeds" type="text" placeholder="e.g. Basketball, Football" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div>
          <label htmlFor="eq-athletes" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Number of Athletes</label>
          <input id="eq-athletes" name="numberOfAthletes" type="text" placeholder="e.g. 25" className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="eq-message" className="block font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-fsl-dark mb-3">Additional Details</label>
          <textarea id="eq-message" name="message" rows={3} placeholder="Tell us about your needs..." className="w-full bg-white border-0 border-b-[3px] border-black/[0.06] px-4 py-4 font-redhat text-[15px] text-fsl-dark placeholder:text-[#ccc] outline-none focus:border-fsl-coral transition-colors duration-500 resize-none" />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center gap-3 font-redhat text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-fsl-dark px-8 py-4 hover:bg-fsl-coral transition-all duration-500 disabled:opacity-60"
      >
        {pending ? "Submitting..." : "Submit Request"}
        {!pending && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        )}
        {pending && (
          <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
        )}
      </button>
    </form>
  );
}
