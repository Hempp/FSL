"use client";

import { useActionState } from "react";
import { submitRegistration } from "@/app/actions";
import Link from "next/link";

const allEvents = [
  { label: "Fall Classic Basketball Tournament", type: "tournament" },
  { label: "Winter Football Skills Combine", type: "tournament" },
  { label: "Spring Soccer Showdown", type: "tournament" },
  { label: "Track & Field Invitational", type: "tournament" },
  { label: "Spring Baseball Classic", type: "tournament" },
  { label: "Golf Fundamentals Clinic", type: "clinic" },
  { label: "Basketball Skills Lab", type: "clinic" },
  { label: "Speed & Agility Camp", type: "clinic" },
  { label: "Multi-Sport Introduction", type: "clinic" },
];

const sportInterests = ["Basketball", "Football", "Soccer", "Golf", "Track & Field", "Baseball"];

export function RegistrationForm() {
  const [state, formAction, pending] = useActionState(submitRegistration, null);

  if (state?.success) {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-barlow text-[24px] font-bold uppercase tracking-wide text-white">Registration Complete!</p>
        <p className="font-redhat text-[14px] text-white/40 mt-2">We&apos;ll send confirmation to your parent/guardian email.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-14">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 mb-6 font-redhat text-[13px]" role="alert" aria-live="assertive">
          {state.error}
        </div>
      )}

      {/* Section 1: Program */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-barlow text-[14px] font-bold text-white bg-fsl-coral">1</span>
          <h3 className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase tracking-[0.05em]">Program Selection</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="programType" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Program Type</label>
            <select id="programType" name="programType" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 appearance-none">
              <option value="" className="bg-[#202020]">Select program type</option>
              <option value="tournament" className="bg-[#202020]">Tournament</option>
              <option value="clinic" className="bg-[#202020]">Clinic</option>
              <option value="both" className="bg-[#202020]">Both</option>
            </select>
          </div>
          <div>
            <label htmlFor="eventSelection" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Event</label>
            <select id="eventSelection" name="eventSelection" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 appearance-none">
              <option value="" className="bg-[#202020]">Select an event</option>
              {allEvents.map((e) => (
                <option key={e.label} value={e.label} className="bg-[#202020]">
                  {e.label} ({e.type})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-3">Sport Interests</label>
          <div className="flex flex-wrap gap-4">
            {sportInterests.map((sport) => (
              <label key={sport} className="flex items-center gap-2 cursor-pointer group/check">
                <input type="checkbox" name="sports" value={sport} className="w-4 h-4 accent-fsl-coral bg-white/[0.05] border border-white/[0.15]" />
                <span className="font-redhat text-[12px] text-white/50 group-hover/check:text-white/70 transition-colors">{sport}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Athlete */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-barlow text-[14px] font-bold text-white bg-fsl-coral">2</span>
          <h3 className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase tracking-[0.05em]">Athlete Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="athleteFirst" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">First Name</label>
            <input id="athleteFirst" name="athleteFirst" type="text" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Athlete first name" />
          </div>
          <div>
            <label htmlFor="athleteLast" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Last Name</label>
            <input id="athleteLast" name="athleteLast" type="text" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Athlete last name" />
          </div>
          <div>
            <label htmlFor="dob" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Date of Birth</label>
            <input id="dob" name="dob" type="date" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300" />
          </div>
          <div>
            <label htmlFor="gender" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Gender</label>
            <select id="gender" name="gender" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 appearance-none">
              <option value="" className="bg-[#202020]">Select</option>
              <option value="male" className="bg-[#202020]">Male</option>
              <option value="female" className="bg-[#202020]">Female</option>
              <option value="nonbinary" className="bg-[#202020]">Non-binary</option>
              <option value="prefer-not" className="bg-[#202020]">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="tshirtSize" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">T-Shirt Size</label>
            <select id="tshirtSize" name="tshirtSize" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 appearance-none">
              <option value="" className="bg-[#202020]">Select size</option>
              <option value="ys" className="bg-[#202020]">Youth S</option>
              <option value="ym" className="bg-[#202020]">Youth M</option>
              <option value="yl" className="bg-[#202020]">Youth L</option>
              <option value="as" className="bg-[#202020]">Adult S</option>
              <option value="am" className="bg-[#202020]">Adult M</option>
              <option value="al" className="bg-[#202020]">Adult L</option>
              <option value="axl" className="bg-[#202020]">Adult XL</option>
            </select>
          </div>
          <div>
            <label htmlFor="grade" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Grade</label>
            <input id="grade" name="grade" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="e.g. 8th" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="school" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">School Name</label>
            <input id="school" name="school" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="School name" />
          </div>
        </div>
      </div>

      {/* Section 3: Parent / Guardian */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-barlow text-[14px] font-bold text-white bg-fsl-coral">3</span>
          <h3 className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase tracking-[0.05em]">Parent / Guardian</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="parentFirst" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">First Name</label>
            <input id="parentFirst" name="parentFirst" type="text" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Parent first name" />
          </div>
          <div>
            <label htmlFor="parentLast" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Last Name</label>
            <input id="parentLast" name="parentLast" type="text" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Parent last name" />
          </div>
          <div>
            <label htmlFor="parentPhone" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Phone</label>
            <input id="parentPhone" name="parentPhone" type="tel" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label htmlFor="parentEmail" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Email</label>
            <input id="parentEmail" name="parentEmail" type="email" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="parent@email.com" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Street Address</label>
            <input id="address" name="address" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="123 Main Street" />
          </div>
          <div>
            <label htmlFor="city" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">City</label>
            <input id="city" name="city" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Los Angeles" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="state" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">State</label>
              <input id="state" name="state" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="CA" />
            </div>
            <div>
              <label htmlFor="zip" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Zip</label>
              <input id="zip" name="zip" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="90001" />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 pt-8 border-t border-white/[0.06]">
          <p className="font-redhat text-[11px] text-white/30 uppercase tracking-[0.15em] mb-5">Emergency Contact</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label htmlFor="emergName" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Name</label>
              <input id="emergName" name="emergName" type="text" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Emergency contact name" />
            </div>
            <div>
              <label htmlFor="emergPhone" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Phone</label>
              <input id="emergPhone" name="emergPhone" type="tel" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="(555) 987-6543" />
            </div>
            <div>
              <label htmlFor="emergRelation" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Relationship</label>
              <input id="emergRelation" name="emergRelation" type="text" required className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="e.g. Grandmother" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Medical */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-barlow text-[14px] font-bold text-white bg-fsl-coral">4</span>
          <h3 className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase tracking-[0.05em]">Medical Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label htmlFor="allergies" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Allergies / Medical Conditions</label>
            <textarea id="allergies" name="allergies" rows={3} className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15 resize-none" placeholder="List any allergies, medical conditions, or special needs" />
          </div>
          <div>
            <label htmlFor="insurance" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Insurance Provider</label>
            <input id="insurance" name="insurance" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Insurance company name" />
          </div>
          <div>
            <label htmlFor="policyNumber" className="block font-redhat text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">Policy Number</label>
            <input id="policyNumber" name="policyNumber" type="text" className="w-full bg-white/[0.05] border border-white/[0.1] text-white font-redhat text-[14px] px-4 py-3.5 focus:outline-none focus:border-fsl-coral/50 transition-colors duration-300 placeholder:text-white/15" placeholder="Policy #" />
          </div>
        </div>
      </div>

      {/* Section 5: Waiver */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-barlow text-[14px] font-bold text-white bg-fsl-coral">5</span>
          <h3 className="font-barlow text-[20px] md:text-[24px] font-bold text-white uppercase tracking-[0.05em]">Waiver &amp; Consent</h3>
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] p-5 mb-6">
          <p className="font-redhat text-[11px] text-white/30 uppercase tracking-[0.15em] mb-2">Estimated Fee</p>
          <p className="font-barlow text-[28px] font-bold text-fsl-coral">Based on event selection</p>
          <p className="font-redhat text-[11px] text-white/20 mt-1">Payment processed via secure checkout after submission</p>
        </div>

        <label className="flex items-start gap-3 cursor-pointer group/waiver">
          <input type="checkbox" name="waiver" required className="mt-1 w-4 h-4 accent-fsl-coral bg-white/[0.05] border border-white/[0.15]" />
          <span className="font-redhat text-[13px] text-white/40 leading-[1.7] group-hover/waiver:text-white/60 transition-colors">
            I agree to the{" "}
            <Link href="/about" className="text-fsl-coral underline underline-offset-2 hover:text-fsl-coral/80 transition-colors">
              liability waiver and media release
            </Link>
            . I understand that participation involves inherent risks and I consent to emergency medical treatment if necessary.
          </span>
        </label>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={pending}
          className="group w-full md:w-auto relative bg-fsl-coral text-white px-14 py-5 font-barlow text-[15px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(244,118,124,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {pending ? "Submitting..." : "Complete Registration"}
            {!pending && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            )}
            {pending && (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms]" />
        </button>
      </div>
    </form>
  );
}
