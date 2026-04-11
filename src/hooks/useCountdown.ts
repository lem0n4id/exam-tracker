/**
 * useCountdown.ts
 * React hook — per-second countdown engine for a single exam.
 *
 * Calls computeCountdown on mount and every second via setInterval,
 * returning the latest CountdownResult. The interval is cleared on unmount
 * or when examDateISO changes.
 *
 * Usage:
 *   const { state, segments, daysUntil } = useCountdown(exam.examDateISO);
 */

import { useEffect, useState } from 'react';
import { computeCountdown, type CountdownResult } from '../lib/countdown';

/**
 * useCountdown — per-second countdown hook.
 *
 * For active states (far / approaching / critical / last24) the hook ticks
 * every second so the displayed countdown stays live.
 *
 * For static override states (today / missed) no interval is registered:
 *   - today  — renders COMMENCING_NOW; no numeric countdown is shown.
 *   - missed — renders a muted historical card; the state never changes and
 *              no animation should occur (PRD non-functional requirement).
 *
 * @param examDateISO  ISO-8601 date string (YYYY-MM-DD) for the target exam.
 * @returns            Latest CountdownResult, updated every second for active states.
 */
export function useCountdown(examDateISO: string): CountdownResult {
  const [result, setResult] = useState<CountdownResult>(() =>
    computeCountdown(examDateISO),
  );

  useEffect(() => {
    // Compute immediately so the displayed value is correct on first render
    const initial = computeCountdown(examDateISO);
    setResult(initial);

    // Static override states need no live ticking — skip the interval entirely
    // to avoid unnecessary re-renders and any unintended animation side-effects.
    if (initial.state === 'missed' || initial.state === 'today') return;

    const id = setInterval(() => {
      setResult(computeCountdown(examDateISO));
    }, 1000);

    return () => clearInterval(id);
  }, [examDateISO]);

  return result;
}
