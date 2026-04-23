// Sales Fundamentals — Module 11: Pipeline Management & Forecasting
export const sellPipelineModule = {
  id: "sell11",
  title: "Pipeline Management & Forecasting",
  type: "Rich Module",
  duration: "90 min",
  desc: "The rep-to-manager bridge skill. Pipeline coverage math, forecast categories, stage discipline, and the weekly hygiene that separates reps who make quota predictably from reps who discover gaps at month-end.",
  topics: ["Pipeline Coverage", "Forecast Categories", "Stage Definitions", "Weighted Pipeline", "Pipeline Hygiene", "Forecast Accuracy"],
  quiz: [
    { q: "Halfway through the quarter you have 2.1× coverage against remaining quota. Your personal close rate on Stage 3+ deals is 28%. The math implies:", opts: ["Coverage is below safety margin (target should be ~3.6×). Even if you close everything currently qualified, you miss quota. Primary action this week: top-of-funnel prospecting, not deal-working on existing opportunities", "Fine — 2× is reasonable", "Push harder on current deals", "Discount to accelerate closes"], correct: 0 },
    { q: "You have 14 deals in pipeline. 9 haven't had activity in 21+ days. You groom weekly but don't cull dead deals. The real cost:", opts: ["A bloated pipeline looks productive to management", "Your coverage math is false. You think you have X coverage; you actually have X minus 9. Forecast accuracy collapses because the base rate is wrong. Clean pipeline beats large pipeline every time", "Manager confusion", "No cost — the numbers still represent opportunity"], correct: 1 },
    { q: "Manager: \"You need 4× coverage.\" You're at 3.2×. Your personal close rate (not the team's) is 35%. Honest response:", opts: ["\"Yes — will add pipeline\"", "\"My personal close rate is 35%, which implies 3× is my real target. I'm at 3.2×. I can add pipeline for safety buffer, but I'd rather have 3.2× qualified than 4× half-qualified — want to walk through which deals you'd want me to add, and at what qualification bar?\" — use personal data + surface the trade-off", "Argue the 4× standard is wrong", "Ignore and keep working"], correct: 1 },
    { q: "Forecast: Closed=$120K, Commit=$240K, Best Case=$380K, Pipeline=$1.4M. Quota=$500K. Manager asks \"will you hit?\" Strongest answer:", opts: ["\"Yes — Commit + Best Case = $620K\"", "\"Yes — $2.1M of pipeline is 4× coverage\"", "\"Committed at $360K (Closed + Commit). Probability-weighted landing ≈ $360K + 65% of Best Case = $607K. Best Case assumes all current risks resolve; I'd land the number but there's real variance in Best Case this quarter\" — separates Commit honesty from Best Case optimism", "\"No\""], correct: 2 },
    { q: "A deal has been at Stage 4 for 45 days. Standard Stage 4 velocity for your team is 21 days. The most likely cause:", opts: ["The deal is slow-closing", "The deal probably shouldn't have been moved into Stage 4 — a stage exit criterion wasn't actually met at the move. Go back: was EB genuinely aligned? Was the proposal actually invited? You'll likely find a missing criterion that's now the blocker", "The buyer is busy", "Competitive pressure"], correct: 1 },
    { q: "Three of your peers deliver 85-100% of their Commit forecast. You deliver 60-75% of yours. Honest self-diagnosis:", opts: ["Unlucky quarter, unlucky territory", "Calibration issue. Deals that aren't actually at ~90% confidence are entering your Commit bucket. Apply the peer bar: would you personally stake your credibility on this one deal? If not, it's Best Case, not Commit", "Your deals are harder", "The methodology is flawed"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 11", title: "Pipeline &", titleAccent: "Forecasting", subtitle: "The rep-to-manager bridge skill. Coverage math, forecast categories, stage discipline, weekly hygiene.", meta: "Sales Fundamentals  |  Module 11  |  7 Slides" },
    { type: "stats", eyebrow: "WHY FORECAST ACCURACY COMPOUNDS", title: "Reps with accurate forecasts earn more — and get promoted first", intro: "Pipeline discipline isn’t paperwork. It’s how you convert effort into predictable income, how your manager decides whether to trust you with bigger deals, and how you graduate from rep to manager. Sloppy pipeline = sloppy career.", stats: [
      { num: "3×", label: "promotion rate of reps whose forecast accuracy is within ±5% of plan vs reps who swing ±30%+" },
      { num: "22%", label: "of committed-category deals that slip to the next quarter for the average rep — primarily due to qualification gaps not surfaced at commit time" },
      { num: "$1.3M", label: "median quota of a senior AE role — impossible to hit without disciplined pipeline math, not just effort" },
    ], subheading: "What High-Accuracy Reps Do Differently", bullets: [
      "Maintain 3–4× pipeline coverage at all times, not just at start of quarter",
      "Groom pipeline weekly — 30 min, every Friday, non-negotiable",
      "Use explicit stage exit criteria — never move a deal forward on feel",
      "Downgrade forecast categories proactively when qualification slips",
      "Treat forecast accuracy as a professional reputation, not a chore",
    ] },
    { type: "grid", eyebrow: "THE 4 FORECAST CATEGORIES", title: "Standard enterprise forecast taxonomy", subtitle: "Every rep should be able to sort their pipeline into these four buckets cleanly. Ambiguity here is the root cause of most forecast misses.", items: [
      { num: "01", title: "Closed / Won", desc: "Contract signed, PO received. Revenue recognised for the period. 100% certainty — it’s already in.", icon: "✅" },
      { num: "02", title: "Commit", desc: "Staking your credibility. ~90% certainty. All MEDDIC letters scored 2+, Economic Buyer aligned, signature path known.", icon: "\u{1F91D}" },
      { num: "03", title: "Best Case", desc: "~60–70% likely. Known risks — a review pending, a champion on leave — but path to yes is real.", icon: "\u{1F3AF}" },
      { num: "04", title: "Pipeline (Upside)", desc: "Qualified but too early or too risky for Best Case. Real opportunities; not counted toward this period’s forecast.", icon: "\u{1F331}" },
    ], footer: "Rule: when in doubt, downgrade the category. A rep who over-commits once is forgiven. Over-committing twice destroys manager trust permanently." },
    { type: "principle", num: "01", title: "The Math of Pipeline Coverage", intro: "Pipeline coverage is the ratio of open pipeline value to quota. It is not optional math — it’s the load-bearing assumption under whether you’ll hit target. Reps who understand it manage their week around it; reps who don’t, discover gaps at month-end.", sectionTitle: "The 4 Rules of Coverage Math", sections: [
      { heading: "1. Know your own close rate — not the team average", example: "Your close rate on Stage 3+ deals: 28%. Team average: 33%. Your math must use YOUR rate, not the team’s.", note: "Using team averages inflates your own forecast. Use your personal number, updated quarterly." },
      { heading: "2. Coverage target = 1 / close rate × safety margin", example: "28% close rate → 1 / 0.28 = 3.57 × 1.15 safety = ~4.1× coverage minimum.", note: "The weaker your close rate, the higher your coverage target. Don’t shave the safety margin." },
      { heading: "3. Measure coverage at the start of the period, not the end", example: "To hit a $500K Q3 quota at 4× coverage, you need $2M of qualified pipeline BEFORE Q3 starts — not built during Q3.", note: "Late coverage is late revenue. What you close this quarter comes from last quarter’s pipeline-building." },
      { heading: "4. Replace closed and lost pipeline weekly, not monthly", example: "Close $80K → you now need $320K (at 4×) of new qualified pipeline to replace it. Add it this week, not next month.", note: "Top-of-funnel effort is the feeder for end-of-funnel revenue. Miss a week of prospecting, pay for it 2 quarters later." },
    ], rule: "Write this on a note stuck to your monitor: pipeline coverage is the single best leading indicator of quota attainment. If it’s below target, work that before anything else." },
    { type: "comparison", eyebrow: "MESSY vs CLEAN PIPELINE", title: "Same rep, same deals, two pipeline postures", subtitle: "Messy pipeline = overcommit, underdeliver, disappoint manager. Clean pipeline = predictable quota attainment + promotion pathway.", left: { title: "Messy Pipeline Rep", color: "#EF4444", items: [
      { strong: "25 deals in pipeline, most with stale ‘next step’ > 30 days old", note: "The pipeline is a graveyard dressed up as activity. Most of those deals are dead — just not marked dead yet." },
      { strong: "Forecast: $480K Commit. Actual: $240K. Deals ‘slipped’ (weren’t real Commits)", note: "Over-commits to please the manager. Under-delivers. Trust erodes monthly." },
      { strong: "Pipeline grooming happens at quarter-end in a panic", note: "Last-minute stage changes, last-minute disqualifications. Shipping garbage to the forecast." },
      { strong: "Stage 4 (“Proposal Sent”) contains deals where proposal was sent 5 months ago and prospect has gone silent", note: "Stage definitions meaningless. Pipeline value inflated by dead weight." },
    ] }, right: { title: "Clean Pipeline Rep", color: "#10B981", items: [
      { strong: "12 deals in pipeline. Each with a ‘next step’ dated within 7 days + a named stakeholder", note: "Fewer deals, real deals. Every deal in the pipeline is actively working." },
      { strong: "Forecast: $320K Commit. Actual: $340K. Slight under-promise, slight over-deliver", note: "Credibility compounds quarter after quarter. Manager starts pushing bigger deals toward this rep." },
      { strong: "Weekly Friday grooming: 30 min, every deal gets an update or gets culled", note: "Pipeline stays clean. Stale deals exit quickly. New deals enter cleanly qualified." },
      { strong: "Stage 4 contains only deals with EB alignment + signature path — deals without those downgrade to Stage 3", note: "Stage definitions are enforced. The pipeline is a signal, not a collection." },
    ] }, footer: "Rule: a clean 12-deal pipeline outperforms a messy 25-deal pipeline. Remove the noise to see what’s actually working." },
    { type: "table", title: "Stage Definitions + Exit Criteria", subtitle: "Standard enterprise B2B pipeline stages with the objective criteria required to move forward.", columns: ["Stage", "Meaning", "Exit Criterion (specific + observable)"], rows: [
      ["1 — Prospecting", "First outbound or inbound touch", "Exit: Prospect books discovery call"],
      ["2 — Discovery", "Discovery call run; initial pain + fit established", "Exit: Champion identified; quantified pain documented"],
      ["3 — Qualification", "MEDDIC scoring in progress; fit validated", "Exit: MEDDIC score 12+ / 18; EB meeting booked"],
      ["4 — Proposal / Evaluation", "Formal proposal out; buyer evaluating", "Exit: Verbal go-ahead; buying committee aligned"],
      ["5 — Negotiation", "Terms / pricing being worked", "Exit: Redline complete; procurement aligned on commercials"],
      ["6 — Closed / Won or Lost", "Contract executed or deal disqualified", "Exit: Signed PO OR documented loss reason + account nurture plan"],
    ], footer: "Rule: never move a deal forward on hope. Meet the exit criterion in writing or don’t move the stage. This alone will double your forecast accuracy in 90 days." },
    { type: "exercise", title: "Run Your First Clean Pipeline Review", intro: "Block 45 minutes this Friday. Bring a printed list of every deal in your pipeline. Score them honestly against this rubric.", items: [
      { num: "1", copy: "For each deal, write: current stage, next step (with date), days since last activity.", answer: "Any deal with > 14 days since last activity and no scheduled next step is dead. Move it to a “nurture” list or Closed / Lost. Pipeline is signal — remove the noise." },
      { num: "2", copy: "For each remaining deal, verify it meets the exit criterion for its current stage. If not, downgrade.", answer: "This is the uncomfortable step. Most reps have 2–3 deals sitting in the wrong stage. Downgrading them feels like a forecast hit — it’s actually forecast accuracy." },
      { num: "3", copy: "Calculate your coverage: (total pipeline value remaining) ÷ (quota remaining in the period). Target: 3–4×.", answer: "If below 3×, your prospecting is your weekend job and next Monday morning. If above 6×, you may be sandbagging — investigate." },
      { num: "4", copy: "Put a recurring 30-min Friday hold on your calendar: “Pipeline Grooming — Non-Negotiable.” Don’t move it.", answer: "The habit is the whole game. Reps who review pipeline weekly hit forecast within ±10% four quarters in a row. Reps who don’t, swing wildly. Discipline compounds." },
    ] },
  ],
};
