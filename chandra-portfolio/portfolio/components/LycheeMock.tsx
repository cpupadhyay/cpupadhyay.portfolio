/**
 * A stylised illustration of a Lychee AI debate, built in HTML so it stays crisp at any size.
 * It is decorative; the real product lives at getlychee-ai.online.
 */
const turns = [
  {
    model: "GPT",
    color: "#10A37F",
    text: "Start with SQL. Most PM data questions are funnel and cohort queries.",
  },
  {
    model: "Claude",
    color: "#D97757",
    text: "Agree on SQL first, but add basic Python early for messier analysis.",
  },
  {
    model: "Gemini",
    color: "#4F8BF9",
    text: "SQL first. Python only once SQL stops being enough.",
  },
];

export default function LycheeMock() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0C12] shadow-[0_40px_120px_-40px_rgba(255,79,123,0.35)]"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-muted">
          getlychee-ai.online
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-lychee-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-lychee-dim">
          Debate
        </span>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        {/* user question */}
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-surface-3 px-4 py-2.5 text-[13px] leading-relaxed text-ink">
          Should a new PM learn SQL or Python first?
        </div>

        {/* model turns */}
        {turns.map((t) => (
          <div key={t.model} className="flex gap-3">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ background: t.color }}
            >
              {t.model[0]}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-muted">{t.model}</p>
              <p className="text-[13px] leading-relaxed text-body">{t.text}</p>
            </div>
          </div>
        ))}

        {/* synthesis */}
        <div className="rounded-xl border border-lychee/30 bg-gradient-to-br from-lychee/10 to-accent/5 p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-lychee-dim">One answer</p>
            <p className="text-[11px] font-medium text-live">3 of 3 models agree</p>
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink">
            Learn SQL first. It answers most product questions; pick up Python once your analysis outgrows it.
          </p>
        </div>

        {/* input */}
        <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
          <span className="text-[13px] text-muted">Ask many minds…</span>
          <span className="ml-auto flex gap-1">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-muted" />
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-muted [animation-delay:0.2s]" />
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-muted [animation-delay:0.4s]" />
          </span>
        </div>
      </div>
    </div>
  );
}
