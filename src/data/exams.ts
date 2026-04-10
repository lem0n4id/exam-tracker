/**
 * exams.ts
 * Exam Data Contract — hardcoded exam data for the current deployment cycle.
 *
 * Contract fields:
 *   Required : id, subjectName, examDateISO, examDateDisplay, accentState
 *   Optional : optionalProgressRatio
 *
 * Update this file at the start of each deployment cycle.
 * Run the validateExam helper (or the validation checklist in DEVELOPMENT.md)
 * before every release to confirm all records are well-formed.
 *
 * Visual reference for state–UI mapping:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

// ─── Allowed urgency states ───────────────────────────────────────────────────

/**
 * AccentState encodes the urgency band of an exam at data-definition time.
 *
 * Threshold rules (whole-day delta from today's midnight to exam midnight):
 *   missed    : delta < 0
 *   today     : delta === 0
 *   last24    : delta > 0 && delta <= 1
 *   critical  : delta > 1 && delta <= 3
 *   approaching: delta > 3 && delta <= 7
 *   far       : delta > 7
 */
export type AccentState =
  | 'far'
  | 'approaching'
  | 'critical'
  | 'last24'
  | 'today'
  | 'missed';

/** All valid AccentState values — used by validateExam for exhaustive checks. */
export const ACCENT_STATES: readonly AccentState[] = [
  'far',
  'approaching',
  'critical',
  'last24',
  'today',
  'missed',
] as const;

// ─── Exam interface ───────────────────────────────────────────────────────────

/**
 * Exam describes one exam record in the hardcoded dataset.
 *
 * Required fields
 * ───────────────
 * id               Stable unique identifier; format "exam-N" (e.g. "exam-1").
 * subjectName      Human-readable subject label shown on the exam card.
 * examDateISO      ISO-8601 date string (YYYY-MM-DD) — used for date arithmetic.
 * examDateDisplay  Display-formatted date (DD-MM-YYYY) — rendered on the card.
 * accentState      Urgency band at the time of data definition. Consumed by the
 *                  state engine as a seed; runtime code may recompute from
 *                  examDateISO and override for live countdown accuracy.
 *
 * Optional fields
 * ───────────────
 * optionalProgressRatio  A number in [0, 1] representing study-progress
 *                        completion. Drives the optional progress bar UI. Omit
 *                        when not tracking progress for this cycle.
 */
export interface Exam {
  /** Stable card identifier; format "exam-N". */
  id: string;
  /** Subject label displayed on the exam card. */
  subjectName: string;
  /** ISO-8601 date (YYYY-MM-DD) for countdown arithmetic. */
  examDateISO: string;
  /** Display date (DD-MM-YYYY) rendered on the card. */
  examDateDisplay: string;
  /** Urgency band at data-definition time. */
  accentState: AccentState;
  /** Optional study-progress ratio in [0, 1]. */
  optionalProgressRatio?: number;
}

// ─── Reference dataset ───────────────────────────────────────────────────────

/**
 * EXAMS — hardcoded exam list for the current deployment cycle.
 *
 * All five exams fall in May 2026; the deployment date is 2026-04-10.
 * Day deltas at deployment: Calculus III 30 d, Linear Algebra 34 d,
 * Quantum Mechanics 35 d, Advanced Thermodynamics 36 d, Stochastic Processes 39 d.
 * Every exam exceeds the 7-day "far" threshold, so all five records are
 * initialised with `accentState: 'far'`.  No sub-banding within the far
 * category exists — the runtime urgency engine in Schedule.astro recomputes
 * the live AccentState from `examDateISO` on each page load, so the rendered
 * card always reflects the current band regardless of this seed value.
 * Stochastic Processes carries an `optionalProgressRatio` of 0.33, matching
 * the ~1/3 progress shown in the Stitch visual reference for the approaching state.
 */
export const EXAMS: readonly Exam[] = [
  {
    id: 'exam-1',
    subjectName: 'Advanced Thermodynamics',
    examDateISO: '2026-05-16',
    examDateDisplay: '16-05-2026',
    accentState: 'far',
  },
  {
    id: 'exam-2',
    subjectName: 'Quantum Mechanics',
    examDateISO: '2026-05-15',
    examDateDisplay: '15-05-2026',
    accentState: 'far',
  },
  {
    id: 'exam-3',
    subjectName: 'Linear Algebra',
    examDateISO: '2026-05-14',
    examDateDisplay: '14-05-2026',
    accentState: 'far',
  },
  {
    id: 'exam-4',
    subjectName: 'Stochastic Processes',
    examDateISO: '2026-05-19',
    examDateDisplay: '19-05-2026',
    accentState: 'far',
    optionalProgressRatio: 0.33,
  },
  {
    id: 'exam-5',
    subjectName: 'Calculus III',
    examDateISO: '2026-05-10',
    examDateDisplay: '10-05-2026',
    accentState: 'far',
  },
] as const;

// ─── Validation helper ────────────────────────────────────────────────────────

/** Structured result returned by validateExam. */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * validateExam checks a single Exam record against the data contract.
 *
 * Happy path: returns { valid: true, errors: [] }.
 * On failure: returns { valid: false, errors: [...messages] }.
 *
 * Edge cases handled:
 *  - Missing or empty required fields
 *  - id must match /^[A-Za-z0-9_-]+$/ (safe identifier characters only)
 *  - examDateISO format (YYYY-MM-DD) and valid calendar date
 *  - examDateDisplay format (DD-MM-YYYY), valid calendar date, and
 *    cross-checked to match examDateISO
 *  - accentState not in allowed set
 *  - optionalProgressRatio outside [0, 1]
 *
 * @param exam - Candidate record (typed or partial/unknown for runtime use).
 */
export function validateExam(exam: Partial<Exam>): ValidationResult {
  const errors: string[] = [];

  // id — must be a non-empty safe-identifier string (letters, digits, _ or -)
  const idPattern = /^[A-Za-z0-9_-]+$/;
  if (!exam.id || typeof exam.id !== 'string' || !idPattern.test(exam.id)) {
    errors.push(
      'id: required, must be a non-empty string containing only letters, digits, underscores, or hyphens (e.g. "exam-1")',
    );
  }

  // subjectName
  if (
    !exam.subjectName ||
    typeof exam.subjectName !== 'string' ||
    exam.subjectName.trim() === ''
  ) {
    errors.push('subjectName: required, must be a non-empty string');
  }

  // examDateISO — expect YYYY-MM-DD
  const isoPattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!exam.examDateISO || !isoPattern.test(exam.examDateISO)) {
    errors.push('examDateISO: required, must match YYYY-MM-DD (e.g. "2026-05-16")');
  } else {
    const parsed = new Date(exam.examDateISO);
    if (isNaN(parsed.getTime())) {
      errors.push('examDateISO: value is not a valid calendar date');
    }
  }

  // examDateDisplay — expect DD-MM-YYYY, valid calendar date, consistent with examDateISO
  const displayPattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!exam.examDateDisplay || !displayPattern.test(exam.examDateDisplay)) {
    errors.push(
      'examDateDisplay: required, must match DD-MM-YYYY (e.g. "16-05-2026")',
    );
  } else {
    const [dd, mm, yyyy] = exam.examDateDisplay.split('-').map(Number);
    const parsedDisplay = new Date(yyyy, mm - 1, dd);
    const displayIsValid =
      !isNaN(parsedDisplay.getTime()) &&
      parsedDisplay.getFullYear() === yyyy &&
      parsedDisplay.getMonth() + 1 === mm &&
      parsedDisplay.getDate() === dd;

    if (!displayIsValid) {
      errors.push('examDateDisplay: value is not a valid calendar date');
    } else if (exam.examDateISO && isoPattern.test(exam.examDateISO)) {
      // Cross-check: both fields must refer to the same calendar date.
      const [isoYear, isoMonth, isoDay] = exam.examDateISO.split('-').map(Number);
      if (dd !== isoDay || mm !== isoMonth || yyyy !== isoYear) {
        errors.push(
          'examDateDisplay does not match examDateISO: both fields must represent the same calendar date',
        );
      }
    }
  }

  // accentState
  if (
    !exam.accentState ||
    !(ACCENT_STATES as readonly string[]).includes(exam.accentState)
  ) {
    errors.push(
      `accentState: required, must be one of: ${ACCENT_STATES.join(', ')}`,
    );
  }

  // optionalProgressRatio (when present)
  if (exam.optionalProgressRatio !== undefined) {
    if (
      typeof exam.optionalProgressRatio !== 'number' ||
      exam.optionalProgressRatio < 0 ||
      exam.optionalProgressRatio > 1
    ) {
      errors.push(
        'optionalProgressRatio: when present, must be a number in [0, 1]',
      );
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * validateAllExams runs validateExam over every record in an array, checks for
 * duplicate ids across the batch, and throws an Error listing all failures.
 * Call during development or pre-release checks.
 *
 * @param exams - Array of Exam records to validate.
 * @throws Error if any record is invalid or any id is duplicated.
 */
export function validateAllExams(exams: readonly Partial<Exam>[]): void {
  const allErrors: string[] = [];
  const seenIds = new Set<string>();

  exams.forEach((exam, index) => {
    const result = validateExam(exam);
    if (!result.valid) {
      allErrors.push(
        `Record ${index} (id: ${exam.id ?? '<missing>'}): ${result.errors.join('; ')}`,
      );
    }

    // Uniqueness check — runs even when the record is otherwise valid
    if (exam.id && typeof exam.id === 'string') {
      if (seenIds.has(exam.id)) {
        allErrors.push(
          `Record ${index} (id: ${exam.id}): id must be unique; this id is already used by an earlier record`,
        );
      } else {
        seenIds.add(exam.id);
      }
    }
  });

  if (allErrors.length > 0) {
    throw new Error(`Exam data contract violations:\n${allErrors.join('\n')}`);
  }
}
