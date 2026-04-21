import { useState, useMemo } from "react";

const PURPLE = "#7C3AED";
const ORANGE = "#F4A261";
const FUCHSIA = "#D946EF";
const GRADIENT = "linear-gradient(135deg," + PURPLE + " 0%," + ORANGE + " 100%)";

const QUESTIONS = [
  {
    id: 1,
    text: "How long have you been writing copy (professionally or for your own projects)?",
    options: [
      { text: "I'm just starting — less than 6 months", score: 1 },
      { text: "6 months to 2 years", score: 2 },
      { text: "2 to 5 years", score: 3 },
      { text: "More than 5 years", score: 4 },
    ],
  },
  {
    id: 2,
    text: "You're writing a landing page hero for a B2B SaaS product. Which opener do you lead with?",
    options: [
      { text: "\"Welcome to our platform — empowering modern teams\"", score: 1 },
      { text: "\"Save time and boost productivity with our tools\"", score: 2 },
      { text: "\"Your team spends 4.2 hrs/wk in status meetings. We cut that to 12 min.\"", score: 3 },
      { text: "\"Most PM tools have 47 tabs. We built one. Here's why.\" (contrarian positioning)", score: 4 },
    ],
  },
  {
    id: 3,
    text: "Which of these is the clearest tell of AI-default writing?",
    options: [
      { text: "Short sentences", score: 1 },
      { text: "Bullet points", score: 1 },
      { text: "Active voice", score: 2 },
      { text: "Adjective stacks like \"innovative, cutting-edge, seamless\"", score: 4 },
    ],
  },
  {
    id: 4,
    text: "Where on a pricing page should ROI math (e.g., \"payback in 8 days\") appear?",
    options: [
      { text: "At the bottom of the page, in a separate FAQ", score: 1 },
      { text: "In a sales-follow-up email", score: 2 },
      { text: "Within 150px of the price itself — at the commitment moment", score: 4 },
      { text: "Only during live sales calls", score: 1 },
    ],
  },
  {
    id: 5,
    text: "What does \"category design\" mean in positioning?",
    options: [
      { text: "Choosing which industry to work in", score: 1 },
      { text: "Naming the problem your product solves", score: 2 },
      { text: "Creating a new market category (with name, POV, and public stakes) that competitors have to react to", score: 4 },
      { text: "Selecting the right visual brand style", score: 1 },
    ],
  },
  {
    id: 6,
    text: "As a freelance copywriter, which pricing model typically preserves the most earning upside?",
    options: [
      { text: "Hourly rate — caps income at typing speed", score: 1 },
      { text: "Project/fixed price — decouples earnings from hours", score: 3 },
      { text: "Monthly retainer with defined scope — compounds relationships", score: 3 },
      { text: "Value-based pricing tied to business outcomes", score: 4 },
    ],
  },
  {
    id: 7,
    text: "Who wrote \"Breakthrough Advertising\" and introduced the 5 Levels of Awareness (Unaware → Problem Aware → Solution Aware → Product Aware → Most Aware)?",
    options: [
      { text: "David Ogilvy", score: 2 },
      { text: "Eugene Schwartz", score: 4 },
      { text: "Gary Halbert", score: 3 },
      { text: "Don Draper", score: 1 },
    ],
  },
  {
    id: 8,
    text: "How much of a creative director's week should typically go toward personal writing (vs directing, reviewing, and growing writers)?",
    options: [
      { text: "80% or more — a CD should still write most of the work", score: 1 },
      { text: "About 50% — balance directing and writing", score: 2 },
      { text: "Around 10–20% — mostly high-leverage pieces only they can do", score: 4 },
      { text: "100% — that's what writing managers do", score: 1 },
    ],
  },
  {
    id: 9,
    text: "A launch-week email sequence for a $1,997 course with a 5-day cart window typically has:",
    options: [
      { text: "1 announcement email", score: 1 },
      { text: "2–3 emails total", score: 2 },
      { text: "6–10 emails with escalating urgency, final-day doubles up, 3-hour-warning email", score: 4 },
      { text: "30+ emails — email daily", score: 2 },
    ],
  },
  {
    id: 10,
    text: "Best way to use AI in a professional copywriting workflow:",
    options: [
      { text: "Don't use it at all — AI dilutes voice", score: 2 },
      { text: "Accept AI's first draft as final output", score: 1 },
      { text: "Use AI for the commodity 80% (structure, variants, compression); keep voice, specifics, and proof human", score: 4 },
      { text: "Only for grammar and spell check", score: 1 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.reduce((a, q) => a + Math.max(...q.options.map(o => o.score)), 0);

function recommendTier(score) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct < 42) return {
    tier: "Tier I",
    tierKey: "foundational",
    accent: PURPLE,
    heading: "Start with the Foundations",
    sub: "You're at the beginning of the journey. Start here to build the core foundations of modern copy — the psychology of persuasion, headline mastery, frameworks, and storytelling that everything else builds on.",
    firstCourseId: "copywriting",
    firstCourseName: "Copywriting",
  };
  if (pct < 70) return {
    tier: "Tier II",
    tierKey: "intermediate",
    accent: ORANGE,
    heading: "You're Ready for Specialisations",
    sub: "You have the foundations down. Now deepen into a specialisation — SEO content writing, conversion copy & landing pages, sales pages & direct response, or AI-powered copywriting. Pick the specialty that matches where you want to grow.",
    firstCourseId: "seo-content-writing",
    firstCourseName: "SEO Content Writing Masterclass",
  };
  return {
    tier: "Tier III",
    tierKey: "advanced",
    accent: FUCHSIA,
    heading: "You're Ready for Mastery & Leadership",
    sub: "Your experience puts you at the top of the skill arc. Tier III focuses on the senior-level moves — brand voice systems at org scale, creative direction and campaign strategy, and building a copywriting business that compounds over 10 years.",
    firstCourseId: "copywriting-business",
    firstCourseName: "The Copywriting Business",
  };
}

export default function PlacementTest({ T, onBack, onStartTier }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const totalScore = useMemo(() => Object.values(answers).reduce((a, v) => a + v, 0), [answers]);
  const recommendation = useMemo(() => recommendTier(totalScore), [totalScore]);
  const progress = Math.round(((step - 1) / QUESTIONS.length) * 100);

  function select(q, option) {
    setAnswers((prev) => ({ ...prev, [q.id]: option.score }));
    setTimeout(() => setStep((s) => Math.min(s + 1, QUESTIONS.length + 1)), 300);
  }

  // Intro
  if (step === 0) {
    return (
      <div className="fi" style={{ maxWidth: 760, margin: "0 auto" }}>
        <button onClick={onBack} className="bt" style={{ marginBottom: 20, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"\u2190"} Back</button>
        <div style={{ background: "linear-gradient(135deg,#0F0B1E 0%,#1A0F2E 60%,#3B1E4A 100%)", padding: "48px 44px", borderRadius: 6, color: "white", position: "relative", overflow: "hidden", marginBottom: 24 }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "#7C3AED", opacity: 0.28, filter: "blur(70px)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "#F4A261", opacity: 0.24, filter: "blur(80px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10.5, fontWeight: 700, color: ORANGE, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>Copywriting Placement Test</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -.5, marginBottom: 14 }}>Find Your Starting Tier in 5 Minutes</h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.65, maxWidth: 560, fontFamily: "'DM Sans',sans-serif", marginBottom: 26 }}>10 questions. Scenario-based. We'll recommend whether to start at Tier I (foundational), Tier II (intermediate specialisations), or Tier III (mastery & leadership) — based on what you already know.</p>
            <button onClick={() => setStep(1)} className="bt" style={{ padding: "14px 30px", borderRadius: 3, background: GRADIENT, color: "white", border: "none", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 22px rgba(124,58,237,.3)" }}>Start the Test {"\u2192"}</button>
          </div>
        </div>
        <div style={{ padding: "20px 24px", background: T.subtle, border: "1px solid " + T.border, borderRadius: 3, fontSize: 13, color: T.text2, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>
          <strong style={{ color: T.text, fontWeight: 700 }}>How it works:</strong> Each question has multiple valid-sounding options, but only one reflects the level of thinking at each tier. Your score maps to a recommendation — you can always override and start at a different tier.
        </div>
      </div>
    );
  }

  // Results
  if (step > QUESTIONS.length) {
    const rec = recommendation;
    return (
      <div className="fi" style={{ maxWidth: 760, margin: "0 auto" }}>
        <button onClick={onBack} className="bt" style={{ marginBottom: 20, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"\u2190"} Back to Track</button>

        <div style={{ background: T.card, border: "1px solid " + rec.accent + "55", borderTop: "4px solid " + rec.accent, borderRadius: 6, padding: "44px 42px", marginBottom: 22 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: rec.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>Your Placement {"\u2014"} {rec.tier}</div>
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
            <button onClick={() => onStartTier(rec.firstCourseId)} className="bt" style={{ padding: "13px 24px", borderRadius: 3, background: GRADIENT, color: "white", border: "none", fontSize: 12.5, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 22px rgba(124,58,237,.25)" }}>Start {rec.firstCourseName} {"\u2192"}</button>
            <button onClick={onBack} className="bt" style={{ padding: "13px 24px", borderRadius: 3, background: T.subtle, color: T.text, border: "1px solid " + T.border, fontSize: 12.5, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", letterSpacing: .8, textTransform: "uppercase", cursor: "pointer" }}>Browse All Tiers</button>
            <button onClick={() => { setStep(0); setAnswers({}); }} className="bt" style={{ padding: "13px 20px", borderRadius: 3, background: "transparent", color: T.text3, border: "1px solid " + T.border, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", letterSpacing: .5, cursor: "pointer" }}>Retake Test</button>
          </div>
        </div>

        <div style={{ padding: "18px 22px", background: T.subtle, border: "1px solid " + T.border, borderRadius: 3, fontSize: 12.5, color: T.text2, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>
          <strong style={{ color: T.text, fontWeight: 700 }}>Note:</strong> this is a guide, not a gate. You can start at any tier regardless of your score — the recommendation is based on where the return on your time is highest given what you already know.
        </div>
      </div>
    );
  }

  // Question (step = 1..N)
  const q = QUESTIONS[step - 1];
  const questionProgress = Math.round((step / QUESTIONS.length) * 100);
  return (
    <div className="fi" style={{ maxWidth: 760, margin: "0 auto" }}>
      <button onClick={onBack} className="bt" style={{ marginBottom: 16, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"\u2190"} Exit Test</button>

      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, fontSize: 11, fontFamily: "'DM Sans',sans-serif", color: T.text3, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
          <span>Question {step} of {QUESTIONS.length}</span>
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
              <button key={i} onClick={() => select(q, opt)} className="bt quiz-opt" style={{ textAlign: "left", padding: "16px 20px", borderRadius: 3, background: selected ? PURPLE + "12" : T.subtle, border: "1.5px solid " + (selected ? PURPLE : T.border), color: T.text, fontSize: 14, fontFamily: "'DM Sans',sans-serif", fontWeight: selected ? 600 : 500, cursor: "pointer", transition: "all .2s", lineHeight: 1.5, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", border: "1.5px solid " + (selected ? PURPLE : T.border), background: selected ? PURPLE : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{selected ? "\u2713" : String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
