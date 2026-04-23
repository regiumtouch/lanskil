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
      { text: "I'm just starting — less than 6 months", score: 1 },
      { text: "6 months to 2 years", score: 2 },
      { text: "2 to 5 years", score: 3 },
      { text: "More than 5 years", score: 4 },
    ],
  },
  {
    id: 2,
    text: "You're writing a cold email to a VP of Sales at a mid-market SaaS. Which opener actually earns a reply?",
    options: [
      { text: "\"Hope this email finds you well. I wanted to reach out...\"", score: 1 },
      { text: "\"I'd love to schedule 15 minutes to share how we help companies like yours\"", score: 2 },
      { text: "\"Saw you hired 3 SDRs in Q1. Most teams hit a ramp-time wall at month 4. Here's the fix.\"", score: 4 },
      { text: "\"We're the #1 platform for revenue teams — can we chat?\"", score: 1 },
    ],
  },
  {
    id: 3,
    text: "After rapport on a discovery call, the strongest first real question is:",
    options: [
      { text: "\"Tell me about your company\"", score: 1 },
      { text: "\"What are your goals this year?\"", score: 2 },
      { text: "\"What made you take this call today?\"", score: 4 },
      { text: "\"Want me to walk you through our product?\"", score: 1 },
    ],
  },
  {
    id: 4,
    text: "Prospect says \"It's too expensive.\" Your strongest first response is:",
    options: [
      { text: "\"I can probably get you a discount.\"", score: 1 },
      { text: "\"Compared to what?\"", score: 4 },
      { text: "\"Let me walk you through the ROI again.\"", score: 2 },
      { text: "\"I understand — thank you for your time.\"", score: 1 },
    ],
  },
  {
    id: 5,
    text: "MEDDIC is:",
    options: [
      { text: "A cold-outreach email sequence", score: 1 },
      { text: "A closing technique for late-stage deals", score: 1 },
      { text: "A pipeline review cadence", score: 2 },
      { text: "A qualification framework: Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion", score: 4 },
    ],
  },
  {
    id: 6,
    text: "Your close rate is 20% and average deal size is $10k. To hit $50k in bookings this month, how many qualified opportunities do you need in pipeline?",
    options: [
      { text: "5", score: 1 },
      { text: "10", score: 2 },
      { text: "25", score: 4 },
      { text: "50", score: 2 },
    ],
  },
  {
    id: 7,
    text: "End of a strong demo — prospect says \"Let me think about it.\" Strongest next move:",
    options: [
      { text: "\"No problem — I'll follow up next week.\"", score: 2 },
      { text: "\"What specifically do you need to think through, and who else needs to see this before a decision?\"", score: 4 },
      { text: "Close the call politely and send a recap email later", score: 1 },
      { text: "Offer a 10% discount if they decide today", score: 1 },
    ],
  },
  {
    id: 8,
    text: "\"Multi-threading\" an enterprise deal means:",
    options: [
      { text: "Running multiple product demos with the same buyer", score: 1 },
      { text: "Selling multiple products inside one contract", score: 2 },
      { text: "Engaging 3–5+ stakeholders across roles so the deal doesn't die with one champion", score: 4 },
      { text: "A closing technique for creating urgency", score: 1 },
    ],
  },
  {
    id: 9,
    text: "Your champion has gone dark for two weeks after a strong demo. Best move:",
    options: [
      { text: "Send a \"did you die?\" guilt email", score: 2 },
      { text: "Call their mobile repeatedly until they pick up", score: 1 },
      { text: "Email with fresh value (benchmark, case study) and explicitly offer to deprioritise until their timing is right", score: 4 },
      { text: "Mark them closed-lost and move on", score: 1 },
    ],
  },
  {
    id: 10,
    text: "The highest-leverage move for a rep managing a $2M annual quota is:",
    options: [
      { text: "Cold-dial more hours every week", score: 2 },
      { text: "Take every lead that comes in", score: 1 },
      { text: "Discount aggressively to close faster", score: 1 },
      { text: "Build repeatable assets — discovery templates, champion letters, ROI calculators — so each deal takes less rep time", score: 4 },
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
