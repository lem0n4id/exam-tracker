/**
 * FooterBlock.tsx
 *
 * Urgency footer block for DEADLINE_PROTOCOL.
 *
 * Structure (matches Stitch reference Exam-Tracker-Deadline-Machine.html):
 *   Thick white top divider
 *   Large italic uppercase headline: NO_EXCUSES
 *   Supporting microcopy in small uppercase mono text
 *
 * Visual source of truth:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

/** Supporting microcopy copy constant (PRD § Functional Requirements). */
const FOOTER_MICROCOPY =
  'Time is a finite physical resource. Every second spent in hesitation is a secondary loss of intellectual potential.';

export default function FooterBlock() {
  return (
    <section className="border-t-8 border-on-surface pt-6 pb-12">
      <h3 className="text-6xl font-black font-headline italic tracking-tighter uppercase leading-none">
        NO_EXCUSES
      </h3>
      <p className="font-mono text-outline mt-4 text-xs max-w-xs uppercase leading-relaxed">
        {FOOTER_MICROCOPY}
      </p>
    </section>
  );
}
