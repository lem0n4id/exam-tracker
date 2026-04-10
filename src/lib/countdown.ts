/**
 * countdown.ts
 * Core countdown engine — pure, deterministic, framework-agnostic.
 *
 * Exports:
 *   CountdownSegments  — days/hours/minutes/seconds display values
 *   CountdownResult    — full engine output (state + segments + metadata)
 *   evaluateState      — maps day-delta + seconds-remaining → AccentState
 *   formatSegments     — decomposes total seconds into display segments
 *   computeCountdown   — top-level function; accepts optional `now` for testing
 *
 * State threshold rules (PRD § 10.2):
 *   missed    : day delta < 0
 *   today     : day delta === 0
 *   last24    : actual seconds remaining > 0 and < 86 400
 *   critical  : day delta > 1 and ≤ 3
 *   approaching: day delta > 3 and ≤ 7
 *   far       : day delta > 7
 *
 * Visual reference:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

import type { AccentState } from '../data/exams';

// ─── Types ────────────────────────────────────────────────────────────────────

/** Decomposed display segments for the countdown timer. */
export interface CountdownSegments {
  /** Whole days remaining (≥ 0). */
  days: number;
  /** Remaining hours after full days are removed (0–23). */
  hours: number;
  /** Remaining minutes after full hours are removed (0–59). */
  minutes: number;
  /** Remaining seconds after full minutes are removed (0–59). */
  seconds: number;
}

/** Full output produced by computeCountdown on each tick. */
export interface CountdownResult {
  /** Evaluated urgency state. */
  state: AccentState;
  /** Decomposed time segments for display. */
  segments: CountdownSegments;
  /**
   * Whole-day difference between exam midnight and today's midnight.
   * Positive = future, 0 = today, negative = past.
   */
  daysUntil: number;
  /**
   * Actual seconds remaining from `now` until exam midnight.
   * Positive = future, negative = past.
   */
  totalSecondsRemaining: number;
}

// ─── State evaluator ──────────────────────────────────────────────────────────

/**
 * evaluateState — deterministic urgency state lookup.
 *
 * Accepts pre-computed values so this function stays pure and unit-testable.
 *
 * @param daysUntil              Whole-day delta (exam_midnight − today_midnight).
 * @param totalSecondsRemaining  Actual seconds from now until exam midnight.
 */
export function evaluateState(
  daysUntil: number,
  totalSecondsRemaining: number,
): AccentState {
  if (daysUntil === 0) return 'today';
  if (daysUntil < 0) return 'missed';
  if (totalSecondsRemaining > 0 && totalSecondsRemaining < 86400) return 'last24';
  if (daysUntil <= 3) return 'critical';
  if (daysUntil <= 7) return 'approaching';
  return 'far';
}

// ─── Segment formatter ────────────────────────────────────────────────────────

/**
 * formatSegments — decomposes a total-seconds value into display segments.
 *
 * Clamps to 0 so callers never see negative display values.
 *
 * @param totalSecondsRemaining  Raw seconds (may be negative for missed exams).
 */
export function formatSegments(totalSecondsRemaining: number): CountdownSegments {
  const total = Math.max(0, Math.floor(totalSecondsRemaining));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

// ─── Main engine entry point ──────────────────────────────────────────────────

/**
 * computeCountdown — top-level countdown computation for one exam.
 *
 * All time arithmetic is in local wall-clock time; the exam deadline is treated
 * as midnight (00:00:00) on the exam date in the user's local timezone.
 *
 * @param examDateISO  ISO-8601 date string (YYYY-MM-DD).
 * @param now          Override for current time — enables deterministic tests.
 *                     Defaults to `new Date()` (current local time).
 */
export function computeCountdown(
  examDateISO: string,
  now: Date = new Date(),
): CountdownResult {
  const [year, month, day] = examDateISO.split('-').map(Number);

  // Exam deadline: local midnight at the start of the exam day
  const examMidnight = new Date(year, month - 1, day, 0, 0, 0, 0);

  // Today's local midnight (for whole-day delta)
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0, 0, 0, 0,
  );

  // Whole-day difference (positive = future, 0 = today, negative = past)
  const daysUntil = Math.round(
    (examMidnight.getTime() - todayMidnight.getTime()) / 86_400_000,
  );

  // Actual seconds from now until exam midnight
  const totalSecondsRemaining =
    (examMidnight.getTime() - now.getTime()) / 1000;

  const state = evaluateState(daysUntil, totalSecondsRemaining);
  const segments = formatSegments(totalSecondsRemaining);

  return { state, segments, daysUntil, totalSecondsRemaining };
}
