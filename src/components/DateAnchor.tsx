/**
 * DateAnchor.tsx
 *
 * Date anchor section — renders immediately below the fixed top bar.
 *
 * Structure (matches Stitch reference Exam-Tracker-Deadline-Machine.html):
 *   Left block  — System_Status label + OPERATIONAL value
 *   Right block — Current_Date label + today's date (dd-mm-yyyy, client-rendered)
 *
 * Visual source of truth:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

import { useEffect, useState } from 'react';

/** Format a Date object as dd-mm-yyyy. */
function formatDate(date: Date): string {
  const dd   = String(date.getDate()).padStart(2, '0');
  const mm   = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

/** Placeholder shown during SSR / before hydration. */
const DATE_PLACEHOLDER = '──-──-────';

export default function DateAnchor() {
  const [todayLabel, setTodayLabel] = useState<string>(DATE_PLACEHOLDER);

  useEffect(() => {
    setTodayLabel(formatDate(new Date()));
  }, []);

  return (
    <section
      className="flex justify-between items-end border-b-4 border-outline pb-2"
      aria-label="System status and current date"
    >
      {/* System_Status block */}
      <div>
        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-outline">
          System_Status
        </span>
        <span className="text-4xl font-black font-headline tracking-tighter text-on-surface">
          OPERATIONAL
        </span>
      </div>

      {/* Current_Date block */}
      <div className="text-right">
        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-outline">
          Current_Date
        </span>
        <span
          className="text-xl font-mono font-bold text-primary"
          aria-live="polite"
        >
          {todayLabel}
        </span>
      </div>
    </section>
  );
}
