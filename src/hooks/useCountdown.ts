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
 * @param examDateISO  ISO-8601 date string (YYYY-MM-DD) for the target exam.
 * @returns            Latest CountdownResult, updated every second.
 */
export function useCountdown(examDateISO: string): CountdownResult {
  const [result, setResult] = useState<CountdownResult>(() =>
    computeCountdown(examDateISO),
  );

  useEffect(() => {
    // Compute immediately so the displayed value is correct on first render
    setResult(computeCountdown(examDateISO));

    const id = setInterval(() => {
      setResult(computeCountdown(examDateISO));
    }, 1000);

    return () => clearInterval(id);
  }, [examDateISO]);

  return result;
}
