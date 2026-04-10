/**
 * ExamCard.tsx
 * Client-side React component — renders a single exam card with live countdown.
 *
 * Uses the useCountdown hook to update every second and selects the correct
 * visual variant based on the evaluated urgency state:
 *   - today      Inverted black card, COMMENCING_NOW status
 *   - missed     Muted grayscale card, no countdown
 *   - last24     Error-red card, segmented countdown with animate-pulse colons + urgency rail
 *   - critical   Primary-pink card, countdown with smaller seconds + REVIEW_DATA action
 *   - approaching Secondary-cyan card, countdown with smaller seconds + progress rail
 *   - far        Muted outline card, countdown with smaller seconds
 *
 * Visual source of truth:
 *   stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html
 */

import { useCountdown } from '../hooks/useCountdown';
import type { Exam } from '../data/exams';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExamCardProps {
  exam: Exam;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Zero-pad a number to at least 2 digits. */
function pad(n: number): string {
  return String(n).padStart(2, '0');
}

// ─── State-specific style config ──────────────────────────────────────────────

/**
 * Visual tokens for each active-countdown urgency state.
 * All strings map directly to Tailwind utility classes from the design system.
 */
const STATE_CONFIG = {
  last24: {
    cardClasses: 'bg-surface-container border-4 border-error hard-shadow-error',
    badgeBg: 'bg-error',
    badgeText: 'text-on-error',
    badgeBorder: 'border-error',
    urgencyLabel: 'Urgency: Critical',
    urgencyColor: 'text-error',
    subjectSize: 'text-4xl',
  },
  critical: {
    cardClasses: 'bg-surface-container border-4 border-primary hard-shadow-primary',
    badgeBg: 'bg-primary',
    badgeText: 'text-on-primary-fixed',
    badgeBorder: 'border-primary',
    urgencyLabel: 'Urgency: High',
    urgencyColor: 'text-primary',
    subjectSize: 'text-3xl',
  },
  approaching: {
    cardClasses: 'bg-surface-container border-4 border-secondary hard-shadow-secondary',
    badgeBg: 'bg-secondary',
    badgeText: 'text-on-secondary',
    badgeBorder: 'border-secondary',
    urgencyLabel: 'Urgency: Stable',
    urgencyColor: 'text-secondary',
    subjectSize: 'text-3xl',
  },
  far: {
    cardClasses: 'bg-surface-container border-4 border-outline-variant',
    badgeBg: 'bg-surface-variant',
    badgeText: 'text-on-surface-variant',
    badgeBorder: 'border-outline-variant',
    urgencyLabel: 'Urgency: Low',
    urgencyColor: 'text-outline',
    subjectSize: 'text-3xl',
  },
} as const;

// ─── Countdown display sub-components ────────────────────────────────────────

interface CountdownDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Last24Countdown — segmented display with animate-pulse colons.
 * Matches the Stitch reference treatment for the LAST 24 HOURS state.
 */
function Last24Countdown({ days, hours, minutes, seconds }: CountdownDisplayProps) {
  return (
    <div className="bg-error-container p-4 border-4 border-black">
      <div className="font-mono text-4xl md:text-5xl font-black text-white flex justify-between items-center">
        <span>{pad(days)}</span>
        <span className="animate-pulse">:</span>
        <span>{pad(hours)}</span>
        <span className="animate-pulse">:</span>
        <span>{pad(minutes)}</span>
        {/* Intentionally smaller: matches Stitch reference where the colon
            before seconds visually bridges the larger timer to the smaller
            seconds unit (text-2xl vs text-4xl). */}
        <span className="animate-pulse text-xs">:</span>
        <span className="text-2xl">{pad(seconds)}</span>
      </div>
    </div>
  );
}

/**
 * InlineCountdown — compact DD:HH:MM with smaller :SS suffix.
 * Used by critical, approaching, and far states.
 */
function InlineCountdown({
  days,
  hours,
  minutes,
  seconds,
  colorClass,
  sizeClass,
  secondsSizeClass,
  weightClass = 'font-black',
}: CountdownDisplayProps & {
  colorClass: string;
  sizeClass: string;
  secondsSizeClass: string;
  weightClass?: string;
}) {
  return (
    <div className={`font-mono ${sizeClass} ${weightClass} ${colorClass} tracking-tighter`}>
      {pad(days)}:{pad(hours)}:{pad(minutes)}
      <span className={secondsSizeClass}>:{pad(seconds)}</span>
    </div>
  );
}

// ─── State-specific card renders ──────────────────────────────────────────────

/** TODAY card — inverted, COMMENCING_NOW status label. */
function TodayCard({ exam }: { exam: Exam }) {
  return (
    <div className="relative bg-on-surface text-surface p-6 border-4 border-on-surface">
      {/* Badge — positioned above the card top edge */}
      <div className="absolute -top-6 left-4 bg-error text-on-error px-4 py-1 font-black text-xl border-4 border-on-surface">
        TODAY
      </div>

      <div className="mt-4">
        <h2 className="text-3xl font-black font-headline leading-none mb-2 uppercase">
          {exam.subjectName}
        </h2>
        <div className="flex justify-between items-center">
          <span className="font-mono text-lg font-bold">{exam.examDateDisplay}</span>
          <span
            className="material-symbols-outlined text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            warning
          </span>
        </div>
      </div>

      <div className="mt-6 bg-surface text-on-surface p-4 border-4 border-on-surface">
        <div className="text-center font-mono text-4xl font-black tracking-tighter">
          COMMENCING_NOW
        </div>
      </div>
    </div>
  );
}

/** MISSED card — muted grayscale, no countdown. */
function MissedCard({ exam }: { exam: Exam }) {
  return (
    <div className="bg-surface-container-low border-4 border-outline p-6 opacity-60 grayscale">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-black font-headline leading-tight text-outline uppercase">
          {exam.subjectName}
        </h2>
        <span className="bg-outline text-surface px-2 py-1 font-black text-xs">
          MISSED
        </span>
      </div>
      <div className="flex justify-between items-end">
        <p className="font-mono text-sm text-outline">DATE: {exam.examDateDisplay}</p>
        <span className="material-symbols-outlined text-outline" aria-hidden="true">
          event_busy
        </span>
      </div>
    </div>
  );
}

/** Active countdown card (last24 / critical / approaching / far). */
function ActiveCard({
  exam,
  state,
  daysUntil,
  days,
  hours,
  minutes,
  seconds,
}: {
  exam: Exam;
  state: 'last24' | 'critical' | 'approaching' | 'far';
  daysUntil: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const cfg = STATE_CONFIG[state];

  return (
    <div className={`${cfg.cardClasses} p-6 relative overflow-hidden`}>
      {/* Urgency badge — top-right corner */}
      <div
        className={`absolute top-0 right-0 ${cfg.badgeBg} ${cfg.badgeText} px-4 py-2 font-black font-headline border-l-4 border-b-4 ${cfg.badgeBorder}`}
      >
        D-{daysUntil}
      </div>

      {/* Subject info */}
      <div className={state === 'last24' ? 'mb-8' : ''}>
        <span
          className={`text-[10px] font-bold tracking-[0.3em] ${cfg.urgencyColor} uppercase`}
        >
          {cfg.urgencyLabel}
        </span>
        <h2
          className={`${cfg.subjectSize} font-black font-headline leading-tight mt-1 uppercase`}
        >
          {exam.subjectName}
        </h2>
        <p className="font-mono text-sm text-outline">
          TARGET: {exam.examDateDisplay}
        </p>
      </div>

      {/* Countdown display */}
      {state === 'last24' ? (
        <>
          <Last24Countdown days={days} hours={hours} minutes={minutes} seconds={seconds} />
          {/* Segmented urgency indicator — 5 blocks, first 3 filled with error */}
          <div className="mt-4 flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-4 flex-1 border-2 border-black ${i < 3 ? 'bg-error' : 'bg-surface'}`}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={state === 'critical' ? 'mt-8 border-t-4 border-outline pt-4' : 'mt-8'}>
            <InlineCountdown
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              colorClass={
                state === 'critical'
                  ? 'text-primary'
                  : state === 'approaching'
                    ? 'text-secondary'
                    : 'text-on-surface-variant'
              }
              sizeClass={state === 'critical' ? 'text-5xl' : 'text-4xl'}
              secondsSizeClass={state === 'critical' ? 'text-xl' : 'text-lg'}
              weightClass={state === 'approaching' ? 'font-bold' : 'font-black'}
            />
          </div>
          {/* CRITICAL: REVIEW_DATA label — decorative affordance, no action in static app */}
          {state === 'critical' && (
            <div className="mt-6 flex justify-end">
              <div
                aria-hidden="true"
                className="bg-primary text-on-primary-fixed px-6 py-2 font-black uppercase text-sm border-4 border-black"
              >
                REVIEW_DATA
              </div>
            </div>
          )}
          {/* APPROACHING: progress rail */}
          {state === 'approaching' && (
            <div
              role="progressbar"
              aria-label="Study progress"
              aria-valuenow={exam.optionalProgressRatio ?? 0}
              aria-valuemin={0}
              aria-valuemax={1}
              className="mt-4 w-full bg-surface-container-highest h-2 border-2 border-black overflow-hidden"
            >
              <div
                className="bg-secondary h-full"
                style={{ width: `${(exam.optionalProgressRatio ?? 0) * 100}%` }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * ExamCard — live countdown card for a single exam.
 *
 * Renders as a React island (client:load) so the countdown updates every
 * second in the browser. Selects the appropriate visual variant based on
 * the current urgency state evaluated by useCountdown.
 */
export default function ExamCard({ exam }: ExamCardProps) {
  const { state, segments, daysUntil } = useCountdown(exam.examDateISO);
  const { days, hours, minutes, seconds } = segments;

  if (state === 'today') return <TodayCard exam={exam} />;
  if (state === 'missed') return <MissedCard exam={exam} />;

  return (
    <ActiveCard
      exam={exam}
      state={state}
      daysUntil={daysUntil}
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}
