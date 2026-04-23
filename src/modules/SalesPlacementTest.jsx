import { useState, useMemo, useEffect } from "react";

const GREEN = "#059669";
const ORANGE = "#F4A261";
const FUCHSIA = "#D946EF";
const GRADIENT = "linear-gradient(135deg," + GREEN + " 0%," + ORANGE + " 100%)";

const QUESTIONS = [
  {
    id: 1,
    text: "How long have you been selling professionally (quota-carrying, founder-selling, or consistently closing deals)?",
    options: [
      { text: "Less than 6 months", score: 1 },
      { text: "6 months to 2 years", score: 2 },
      { text: "2 to 5 years", score: 3 },
      { text: "More than 5 years", score: 4 },
    ],
  },
  {
    id: 2,
    text: "Cold email to a VP of Engineering at a 200-person SaaS. Four openers. Which reflects Tier III thinking?",
    options: [
      { text: "\"Hope this finds you well. I'd love to introduce our platform…\"", score: 1 },
      { text: "\"We're the leading platform for engineering teams like yours\"", score: 1 },
      { text: "\"Want to schedule a 30-min demo this week?\"", score: 2 },
      { text: "\"Saw you hired 3 SDRs this quarter. Teams that scale SDR hires without revising the playbook usually hit a ramp-time wall at month 4 — the problem isn't the hires, it's the operating system. Here's the fix.\"", score: 4 },
    ],
  },
  {
    id: 3,
    text: "Three minutes into discovery, prospect says: \"Actually, we've mostly solved this internally.\" The disciplined Tier III response:",
    options: [
      { text: "Disqualify politely and move on", score: 1 },
      { text: "Pivot to your competitive differentiator", score: 2 },
      { text: "Thank them and ask to book a follow-up call later", score: 1 },
      { text: "\"In the process of solving it, what did you learn that surprised you — and what part of your current approach don't you love?\" — keeps the door open by surfacing residual dissatisfaction that exists in almost every \"solved\" problem", score: 4 },
    ],
  },
  {
    id: 4,
    text: "Buyer states their budget is $40K. Your list price for the scope needed is $65K. Tier III move:",
    options: [
      { text: "Discount to $40K to match", score: 1 },
      { text: "Walk away — out of budget", score: 1 },
      { text: "Drop scope unilaterally to fit $40K", score: 2 },
      { text: "\"Help me understand the $40K — is that an approved annual line item, or a ceiling number you were given before scope was defined? Different constraints, very different paths.\" — diagnose the budget type before reshaping the deal", score: 4 },
    ],
  },
  {
    id: 5,
    text: "MEDDIC review with your manager. You've scored Champion, Economic Buyer, Metrics, and Decision Criteria. Which letter most often blows up deals late when missing?",
    options: [
      { text: "Identify Pain — missing pain means no urgency", score: 2 },
      { text: "Another Champion — you always need two", score: 2 },
      { text: "Economic Buyer (already scored)", score: 1 },
      { text: "Decision Process. Knowing who signs and on what criteria doesn't tell you the actual path — procurement, legal, security, approval order, estimated duration. This is where end-of-quarter signature surprises live", score: 4 },
    ],
  },
  {
    id: 6,
    text: "Quarterly quota = $500K. Your personal close rate on Stage 3+ deals = 22%. Current pipeline = $1.2M. 7 weeks left in the quarter. The math implies:",
    options: [
      { text: "Coverage at 2.4× is fine — push current deals", score: 1 },
      { text: "Close rate is the problem — focus on conversion coaching", score: 2 },
      { text: "Discount aggressively to accelerate closes", score: 1 },
      { text: "Coverage is below the ~4.5× safety target implied by your close rate. Primary action THIS week: top-of-funnel prospecting. Deal-working on existing pipeline alone will not close the gap", score: 4 },
    ],
  },
  {
    id: 7,
    text: "Champion: \"We're going to sign with you — just walking it through our CFO Friday.\" You've never met the CFO. Strongest Tier III move:",
    options: [
      { text: "Trust Champion and wait", score: 2 },
      { text: "Send a thank-you email and celebrate", score: 1 },
      { text: "Ask procurement for a status update", score: 1 },
      { text: "\"Before Friday, can I spend 10 minutes with your CFO to make sure they have what they need directly? Decisions hitting an exec cold usually create small delays we could resolve now.\" — low-friction proactive access that prevents the most common late-stage stall", score: 4 },
    ],
  },
  {
    id: 8,
    text: "Buyer asked for 20% off. You held at 5%. Deal signed. Your honest Tier III audit:",
    options: [
      { text: "Celebrate — held price well", score: 1 },
      { text: "Document the tactic for the team", score: 3 },
      { text: "Share it internally as a win", score: 2 },
      { text: "Ask: what non-price concessions did you offer along the way? If none, the deal may have closed at 0% off by trading implementation speed, reference rights, or scope expansion instead. A good outcome doesn't prove the best outcome — assume the next deal can hold tighter still", score: 4 },
    ],
  },
  {
    id: 9,
    text: "Enterprise deal. You've named Champion (Sarah), Coach (Chris), Economic Buyer (Mark). No Blocker identified yet. Most disciplined move this week:",
    options: [
      { text: "Leave Blocker alone; maybe there isn't one", score: 1 },
      { text: "Wait for them to surface organically during review", score: 1 },
      { text: "Ask your own manager who it might be", score: 2 },
      { text: "Ask each stakeholder individually: \"Beyond yourself, who would be most sceptical of us being chosen — and what would they need to see resolved to support this?\" — names the Blocker before they name themselves in the final procurement review", score: 4 },
    ],
  },
  {
    id: 10,
    text: "Year 5 AE. Offered: (A) Enterprise AE at current company with 20% territory expansion, or (B) Senior AE at a new SaaS for 40% more base salary. The Tier III decision criterion:",
    options: [
      { text: "B — take the money, it's meaningful", score: 2 },
      { text: "A — stay where you know the playbook", score: 1 },
      { text: "Need more information to decide", score: 2 },
      { text: "Neither answer is comp-first. The real criteria: who is my new manager (mentorship quality), who are my peers (network compound), and what will I know how to do in year 10 in each scenario. Comp is a floor; skill acquisition + network are the compounding variables", score: 4 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.reduce((a, q) => a + Math.max(...q.options.map(o => o.score)), 0);

function recommendTier(score) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct < 42) return {
    tier: "Tier I",
    tierKey: "foundational",
    accent: GREEN,
    heading: "Start with the Foundations",
    sub: "You're at the beginning of the sales arc. Start here to build the pre-conversation work — psychological preparation, pre-call research, and cold outreach that actually earns replies. Everything else in sales stands on this.",
    firstCourseId: "sales-foundations",
    firstCourseName: "Sales Foundations",
  };
  if (pct < 70) return {
    tier: "Tier II",
    tierKey: "intermediate",
    accent: ORANGE,
    heading: "You're Ready for the Sales Conversation",
    sub: "You've got the fundamentals. Now sharpen the live-deal skill — discovery that uncovers real pain, a tailored pitch that lands, and objection handling that turns pushback into momentum.",
    firstCourseId: "sales-conversation",
    firstCourseName: "The Sales Conversation",
  };
  return {
    tier: "Tier III",
    tierKey: "advanced",
    accent: FUCHSIA,
    heading: "You're Ready for Mastery & Leadership",
    sub: "Your experience puts you at the senior end of the skill arc. Tier III is the long game — closing complex deals, multi-threading enterprise committees, pipeline and forecast discipline, and the habits that compound a sales career over a decade.",
    firstCourseId: "sales-mastery",
    firstCourseName: "Mastery & Leadership",
  };
}

const PLACEMENT_TIME = QUESTIONS.length * 60;

export default function SalesPlacementTest({ T, onBack, onStartTier, saveScore }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(PLACEMENT_TIME);

  const totalScore = useMemo(() => Object.values(answers).reduce((a, v) => a + v, 0), [answers]);
  const recommendation = useMemo(() => recommendTier(totalScore), [totalScore]);

  useEffect(() => {
    if (step > QUESTIONS.length && saveScore) {
      saveScore({ correct: totalScore, total: MAX_SCORE, pct: Math.round((totalScore / MAX_SCORE) * 100), tier: recommendation.tier });
    }
  }, [step]);

  useEffect(() => {
    if (step < 1 || step > QUESTIONS.length) return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(id); setStep(QUESTIONS.length + 1); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  const tMin = Math.floor(timeLeft / 60);
  const tSec = timeLeft % 60;
  const tFmt = tMin + ":" + (tSec < 10 ? "0" : "") + tSec;
  const tPctRem = (timeLeft / PLACEMENT_TIME) * 100;
  const tColor = tPctRem > 50 ? "#10B981" : tPctRem > 20 ? "#F59E0B" : "#EF4444";

  function select(q, option) {
    setAnswers((prev) => ({ ...prev, [q.id]: option.score }));
    setTimeout(() => setStep((s) => Math.min(s + 1, QUESTIONS.length + 1)), 300);
  }

  if (step === 0) {
    return (
      <div className="fi" style={{ maxWidth: 760, margin: "0 auto" }}>
        <button onClick={onBack} className="bt" style={{ marginBottom: 20, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>Skip {"—"} Browse the Track {"→"}</button>
        <div style={{ background: "linear-gradient(135deg,#03291E 0%,#064E3B 60%,#0E5E3E 100%)", padding: "48px 44px", borderRadius: 6, color: "white", position: "relative", overflow: "hidden", marginBottom: 24 }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: GREEN, opacity: 0.28, filter: "blur(70px)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: ORANGE, opacity: 0.24, filter: "blur(80px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10.5, fontWeight: 700, color: ORANGE, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>Sales Placement Test</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -.5, marginBottom: 14 }}>Find Your Starting Tier in 5 Minutes</h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.65, maxWidth: 560, fontFamily: "'DM Sans',sans-serif", marginBottom: 26 }}>10 questions. Scenario-based. We'll recommend whether to start at Tier I (pre-conversation foundations), Tier II (the live sales conversation), or Tier III (closing & mastery) — based on what you already know.</p>
            <button onClick={() => setStep(1)} className="bt" style={{ padding: "14px 30px", borderRadius: 3, background: GRADIENT, color: "white", border: "none", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 22px rgba(5,150,105,.3)" }}>Start the Test {"→"}</button>
          </div>
        </div>
        <div style={{ padding: "20px 24px", background: T.subtle, border: "1px solid " + T.border, borderRadius: 3, fontSize: 13, color: T.text2, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>
          <strong style={{ color: T.text, fontWeight: 700 }}>How it works:</strong> Each question has multiple valid-sounding options, but only one reflects the level of thinking at each tier. Your score maps to a recommendation — you can always override and start at a different tier.
        </div>
      </div>
    );
  }

  if (step > QUESTIONS.length) {
    const rec = recommendation;
    return (
      <div className="fi" style={{ maxWidth: 760, margin: "0 auto" }}>
        <button onClick={onBack} className="bt" style={{ marginBottom: 20, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"←"} Back to Track</button>

        <div style={{ background: T.card, border: "1px solid " + rec.accent + "55", borderTop: "4px solid " + rec.accent, borderRadius: 6, padding: "44px 42px", marginBottom: 22 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: rec.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>Your Placement {"—"} {rec.tier}</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 700, lineHeight: 1.1, letterSpacing: -.4, color: T.text, marginBottom: 14 }}>{rec.heading}</h1>
          <p style={{ fontSize: 14.5, color: T.text2, lineHeight: 1.65, marginBottom: 24, fontFamily: "'DM Sans',sans-serif" }}>{rec.sub}</p>

          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 22 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 700, color: rec.accent, lineHeight: 1 }}>{totalScore}<span style={{ fontSize: 20, color: T.text3 }}>/{MAX_SCORE}</span></div>
            <div style={{ fontSize: 12, color: T.text3, fontFamily: "'DM Sans',sans-serif" }}>Placement score</div>
          </div>

          <div style={{ padding: "18px 22px", background: rec.accent + "0E", borderLeft: "3px solid " + rec.accent, borderRadius: 2, marginBottom: 26 }}>
            <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, color: rec.accent, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Recommended First Course</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: T.text, marginBottom: 4 }}>{rec.firstCourseName}</div>
            <div style={{ fontSize: 12.5, color: T.text3, fontFamily: "'DM Sans',sans-serif" }}>The best starting point in {rec.tier} given your responses.</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={() => onStartTier(rec.firstCourseId)} className="bt" style={{ padding: "13px 24px", borderRadius: 3, background: GRADIENT, color: "white", border: "none", fontSize: 12.5, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 22px rgba(5,150,105,.25)" }}>Start {rec.firstCourseName} {"→"}</button>
            <button onClick={onBack} className="bt" style={{ padding: "13px 24px", borderRadius: 3, background: T.subtle, color: T.text, border: "1px solid " + T.border, fontSize: 12.5, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", letterSpacing: .8, textTransform: "uppercase", cursor: "pointer" }}>Browse All Tiers</button>
            <button onClick={() => { setStep(0); setAnswers({}); setTimeLeft(PLACEMENT_TIME); }} className="bt" style={{ padding: "13px 20px", borderRadius: 3, background: "transparent", color: T.text3, border: "1px solid " + T.border, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", letterSpacing: .5, cursor: "pointer" }}>Retake Test</button>
          </div>
        </div>

        <div style={{ padding: "18px 22px", background: T.subtle, border: "1px solid " + T.border, borderRadius: 3, fontSize: 12.5, color: T.text2, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>
          <strong style={{ color: T.text, fontWeight: 700 }}>Note:</strong> this is a guide, not a gate. You can start at any tier regardless of your score — the recommendation is based on where the return on your time is highest given what you already know.
        </div>
      </div>
    );
  }

  const q = QUESTIONS[step - 1];
  const questionProgress = Math.round((step / QUESTIONS.length) * 100);
  return (
    <div className="fi" style={{ maxWidth: 760, margin: "0 auto" }}>
      <button onClick={onBack} className="bt" style={{ marginBottom: 16, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"←"} Exit Test</button>

      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, fontSize: 11, fontFamily: "'DM Sans',sans-serif", color: T.text3, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", gap: 10, flexWrap: "wrap" }}>
          <span>Question {step} of {QUESTIONS.length}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 50, background: tColor + "18", color: tColor, border: "1px solid " + tColor + "40", letterSpacing: .5 }}>
            <span aria-hidden="true">{"⏱"}</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{tFmt}</span>
          </span>
          <span>{questionProgress}%</span>
        </div>
        <div style={{ height: 3, background: T.border, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", background: GRADIENT, width: questionProgress + "%", transition: "width .3s" }} />
        </div>
      </div>

      <div style={{ background: T.card, border: "1px solid " + T.border, borderRadius: 4, padding: "32px 34px" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, lineHeight: 1.25, color: T.text, marginBottom: 22, letterSpacing: -.2 }}>{q.text}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.options.map((opt, i) => {
            const selected = answers[q.id] === opt.score;
            return (
              <button key={i} onClick={() => select(q, opt)} className="bt quiz-opt" style={{ textAlign: "left", padding: "16px 20px", borderRadius: 3, background: selected ? GREEN + "12" : T.subtle, border: "1.5px solid " + (selected ? GREEN : T.border), color: T.text, fontSize: 14, fontFamily: "'DM Sans',sans-serif", fontWeight: selected ? 600 : 500, cursor: "pointer", transition: "all .2s", lineHeight: 1.5, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", border: "1.5px solid " + (selected ? GREEN : T.border), background: selected ? GREEN : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{selected ? "✓" : String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
