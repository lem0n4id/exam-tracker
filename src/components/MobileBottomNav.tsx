/**
 * MobileBottomNav.tsx
 *
 * Fixed mobile-only bottom navigation for DEADLINE_PROTOCOL.
 *
 * Structure (matches Stitch reference Exam-Tracker-Deadline-Machine.html):
 *   Four nav items: GRID, ADD, STATS, META
 *   Active tile — pink background, black icon/text
 *   Inactive tiles — white text at 50% opacity, hover inversion to pink/black
 *   Fixed at bottom, 4px white top border, pink upper shadow accent
 *   Hidden at md breakpoint and above (md:hidden)
 *
 * Visual source of truth:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

import { useState } from 'react';

/** Nav item descriptor (PRD § Functional Requirements). */
interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'grid',  label: 'GRID',  icon: 'grid_view' },
  { id: 'add',   label: 'ADD',   icon: 'add_box'   },
  { id: 'stats', label: 'STATS', icon: 'analytics' },
  { id: 'meta',  label: 'META',  icon: 'settings'  },
];

/** Default active nav item id. */
const DEFAULT_ACTIVE = 'grid';

export default function MobileBottomNav() {
  const [activeId, setActiveId] = useState<string>(DEFAULT_ACTIVE);

  return (
    <nav
      className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-4
                 bg-background border-t-4 border-on-surface
                 shadow-[0px_-4px_0px_0px_var(--color-primary)] md:hidden"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(({ id, label, icon }) => {
        const isActive = id === activeId;
        return (
          <button
            key={id}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => setActiveId(id)}
            className={`flex flex-col items-center justify-center w-16 h-16 border-0 bg-transparent cursor-pointer transition-none ${
              isActive
                ? 'bg-primary text-on-primary'
                : 'text-on-surface opacity-50 hover:bg-primary hover:text-on-primary hover:opacity-100 active:translate-y-1'
            }`}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {icon}
            </span>
            <span className="text-[10px] font-bold font-label uppercase tracking-widest">
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
