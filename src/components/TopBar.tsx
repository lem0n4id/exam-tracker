/**
 * TopBar.tsx
 *
 * Fixed top app bar for DEADLINE_PROTOCOL.
 *
 * Structure (matches Stitch reference Exam-Tracker-Deadline-Machine.html):
 *   LeftCluster  — terminal icon + DEADLINE_PROTOCOL heading
 *   RightCluster — desktop nav (GRID / ADD / STATS / META, md+) + history toggle
 *
 * Visual source of truth:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

/** Desktop nav link copy constants (PRD § Functional Requirements). */
const NAV_LINKS = [
  { label: 'GRID',  href: '#', active: true  },
  { label: 'ADD',   href: '#', active: false },
  { label: 'STATS', href: '#', active: false },
  { label: 'META',  href: '#', active: false },
] as const;

export default function TopBar() {
  return (
    <header
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-background border-b-4 border-white hard-shadow-white"
    >
      {/* ── Left cluster: icon + title ───────────────────────── */}
      <div className="flex items-center gap-3">
        <span
          className="material-symbols-outlined text-primary text-2xl"
          aria-hidden="true"
        >
          terminal
        </span>
        <h1 className="text-2xl font-black text-on-surface tracking-widest font-headline uppercase">
          DEADLINE_PROTOCOL
        </h1>
      </div>

      {/* ── Right cluster: desktop nav + history toggle ───────── */}
      <div className="flex items-center gap-4">
        {/* Desktop nav — hidden on mobile, visible at md+ */}
        <nav
          className="hidden md:flex gap-6 font-headline font-bold text-sm tracking-widest uppercase"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={active ? 'text-primary' : 'text-on-surface hover:text-primary'}
              aria-current={active ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* History toggle affordance */}
        <span
          className="material-symbols-outlined text-on-surface cursor-pointer hover:bg-primary hover:text-on-primary p-1"
          role="button"
          tabIndex={0}
          aria-label="Toggle history"
        >
          history_toggle_off
        </span>
      </div>
    </header>
  );
}
