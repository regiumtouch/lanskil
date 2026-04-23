// Sales Fundamentals — Module 8: Qualification Frameworks (BANT, MEDDIC, SPIN)
export const sellQualificationModule = {
  id: "sell08",
  title: "Qualification Frameworks (BANT, MEDDIC, SPIN)",
  type: "Rich Module",
  duration: "90 min",
  desc: "The frameworks that separate qualified pipeline from wishful thinking. BANT for speed, MEDDIC for complex deals, SPIN for consultative discovery — when to use each, how to score, and what to do with the score.",
  topics: ["BANT Framework", "MEDDIC Framework", "SPIN Selling", "CHAMP Qualification", "Deal Scoring", "Disqualification"],
  quiz: [
    { q: "Your deal scores: M=3, E=3, D=3, D=0 (Decision Process unknown), I=3, C=3. Total 15/18. What should this forecast as?", opts: ["Commit — 15/18 is well above a reasonable threshold", "Best Case. A single letter at 0 is a material risk regardless of total. Decision Process unknown is where end-of-quarter surprises come from", "Pipeline — total isn't high enough", "Closed — already there effectively"], correct: 1 },
    { q: "Two deals, same revenue. Deal A: MEDDIC 14/18 with Champion=3, EB=2. Deal B: MEDDIC 14/18 with Champion=1, EB=3. Which closes more reliably?", opts: ["Deal A — strong Champion carries more weight than a slightly weak EB", "Deal B — EB alignment matters more than Champion strength late-stage. Champion=1 is often a friendly Coach who can't actually sell internally, which is a warning sign", "Same — they tie on total", "Neither — both need 16+"], correct: 1 },
    { q: "BANT on a deal: Budget=unknown, Authority=confirmed (CTO), Need=strong + quantified, Timeline=confirmed Q3. The hidden risk most likely to surface:", opts: ["Authority — CTOs often delegate", "Budget. 'Unknown' late-stage almost always means no budget line has been allocated. Budget isn't 'are they a rich company' — it's 'is this specific line item carved out of the current year's plan'", "Need", "Timeline"], correct: 1 },
    { q: "SPIN practitioners say \"Implication is where deals are made.\" The specific reason:", opts: ["It's the longest question type and buyers engage more with longer questions", "It converts an abstract problem into the quantified cost of inaction — moving the buyer from 'nice to fix' to 'must fix' and collapsing the path to decision urgency", "It comes after Situation, so the buyer is already warmed up", "It's the most tactical of the four types"], correct: 1 },
    { q: "A deal scores BANT 12/12. Your gut still says something is off. The disciplined move:", opts: ["Trust the framework and push to close", "Ask directly: \"If you had to pick one thing that would keep this from closing, what would it be?\" BANT doesn't capture hidden stakeholders, political dynamics, or competing initiatives — a direct diagnostic surfaces what the rubric missed", "Run MEDDIC on top of BANT and ship anyway", "Ignore the gut feeling — it's not data"], correct: 1 },
    { q: "A new SDR asks: \"When do I use BANT vs MEDDIC?\" The clearest teaching answer:", opts: ["MEDDIC for deals over $10K, BANT for smaller", "Neither is about deal size directly. Use BANT when speed of qualification matters more than risk of a bad forecast. Use MEDDIC when the cost of a false Commit (blown forecast, burned cycles) outweighs the cost of slower qualification. Larger committees and longer cycles push that calculus toward MEDDIC; that's why deal size correlates, but it's not the cause", "Always MEDDIC — it's more rigorous", "Always BANT — it's faster"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 8", title: "Qualification", titleAccent: "Frameworks", subtitle: "BANT, MEDDIC, SPIN, CHAMP. The frameworks that separate qualified pipeline from wishful thinking.", meta: "Sales Fundamentals  |  Module 8  |  7 Slides" },
    { type: "stats", eyebrow: "WHY QUALIFICATION MATTERS", title: "Unqualified pipeline wastes more seller time than any other single mistake", intro: "Sellers without qualification discipline spend 40–60% of their week on deals that were never going to close. The teams that win don’t work more hours — they work qualified hours.", stats: [
      { num: "3.5×", label: "higher win rate on deals that pass full MEDDIC qualification vs unqualified pipeline" },
      { num: "38%", label: "of seller hours spent on deals that disqualify later — recovered time when qualification is tight" },
      { num: "<15%", label: "close rate on deals without an identified Champion — yet most reps still push these forward" },
    ], subheading: "What Qualified Sellers Do Differently", bullets: [
      "Disqualify early and cleanly — a fast “no” beats a slow “maybe”",
      "Score deals against a framework, not against seller optimism",
      "Surface missing qualification data through questions, not assumptions",
      "Walk away from deals that fail qualification even when pipeline is thin",
    ] },
    { type: "grid", eyebrow: "THE 4 FRAMEWORKS", title: "Each one fits a different deal context", subtitle: "There is no single “best” framework. Match the framework to the deal size, complexity, and sales motion.", items: [
      { num: "01", title: "BANT — Budget, Authority, Need, Timeline", desc: "Fast, lightweight. Best for SMB / mid-market transactional deals where speed matters more than depth.", icon: "⚡" },
      { num: "02", title: "MEDDIC — Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion", desc: "The gold standard for enterprise. Designed for 6-figure+ deals with complex buying committees.", icon: "\u{1F3F0}" },
      { num: "03", title: "SPIN — Situation, Problem, Implication, Need-payoff", desc: "Question-flow framework. Best for consultative discovery where the buyer hasn’t yet articulated the problem.", icon: "\u{1F4AC}" },
      { num: "04", title: "CHAMP — Challenges, Authority, Money, Prioritisation", desc: "BANT-flavoured but problem-led. Opens with pain before probing budget — more modern, buyer-friendly posture.", icon: "\u{1F3AF}" },
    ], footer: "Rule: pick one primary framework for your sales motion and score every deal against it the same way. Consistency > sophistication." },
    { type: "principle", num: "01", title: "MEDDIC — The Deep Cut", intro: "MEDDIC is the most-used qualification framework in enterprise B2B for a reason: it forces you to surface the specific information that determines whether a deal is real. Miss any one letter and the deal is at risk.", sectionTitle: "The 6 Letters and What Each One Actually Means", sections: [
      { heading: "M — Metrics", example: "“If we solve this, what numerical outcome improves — and by how much?” (e.g., cut ramp time from 4 mo to 6 wks = $180K saved per hire)", note: "Without a quantified metric, ROI is hand-wavy. Executive buyers disengage." },
      { heading: "E — Economic Buyer", example: "“Who signs the PO? Who can say yes when everyone else says no?” — almost never your day-to-day contact.", note: "If you haven’t met the EB by late-stage, the deal is at risk." },
      { heading: "D — Decision Criteria", example: "“What criteria will this decision be evaluated on?” — written or verbal, formal or informal.", note: "Surface criteria early so you can influence them before the shortlist." },
      { heading: "D — Decision Process", example: "“Who approves? In what order? What internal reviews (legal, security, IT) does this pass through?”", note: "The single most common source of end-of-quarter surprises. Map it out on paper." },
      { heading: "I — Identify Pain", example: "“What happens if you don’t solve this in the next 6 months?” Quantified pain of inaction.", note: "Without explicit pain, buyers default to “no decision” — the most common ‘competitor’ in B2B." },
      { heading: "C — Champion", example: "An internal person who has (a) influence, (b) a personal stake in the outcome, (c) willingness to sell for you when you’re not there.", note: "No champion = no deal. Develop one by month 1 or walk away." },
    ], rule: "Score every deal against all 6 letters monthly. Any letter at zero or unknown = the deal is at risk and needs specific action to un-stall." },
    { type: "comparison", eyebrow: "UNQUALIFIED vs QUALIFIED", title: "Same prospect, two rep postures", subtitle: "One is working the deal on hope. The other knows exactly where it stands.", left: { title: "Unqualified Rep (Hope-Driven)", color: "#EF4444", items: [
      { strong: "“They love the product — this is going to close”", note: "No Metrics defined. No EB met. No Decision Process mapped. “Loves it” has never paid a commission." },
      { strong: "Submits the deal to forecast as Commit", note: "Submits a Commit with 0 champion + unclear process. Forecast miss incoming." },
      { strong: "When asked “who’s the Economic Buyer?”, says “The person I’m talking to, I assume”", note: "Classic sign of an unqualified deal. The rep is guessing." },
      { strong: "Pushes for close at end of quarter without surfacing the procurement / legal layer", note: "End-of-quarter blow-up. Procurement asks for 6 weeks of review the rep didn’t know about." },
    ] }, right: { title: "Qualified Rep (Framework-Driven)", color: "#10B981", items: [
      { strong: "“Champion is Sarah (Head of Ops). Metric is 4mo → 6wk ramp. EB is Mark (CFO) — he joins Thursday’s call. Process goes Legal → Security → PO, 3–4 weeks.”", note: "Specific. Surfaces risks in the open. Can take action on gaps." },
      { strong: "Submits deal as Best Case (not Commit) because Legal review hasn’t started", note: "Forecast is calibrated. Managers trust this rep. Quota attainment is predictable." },
      { strong: "Asks explicitly: “Beyond yourself, who else will be part of this decision?”", note: "Surfaces the buying committee. Maps power. Builds multi-thread plan." },
      { strong: "Has pre-aligned Legal + Security before close week", note: "No surprises. Deal signs within forecasted window." },
    ] }, footer: "Rule: a deal without a named Champion, named Economic Buyer, quantified Metric, and documented Decision Process is not a deal — it’s a hope." },
    { type: "table", title: "Scoring a Deal with MEDDIC", subtitle: "Score each letter 0–3. Total score + gap analysis tells you exactly what to work on next.", columns: ["Letter", "Score 0–3", "What Each Score Means"], rows: [
      ["Metrics", "0 = none / 1 = vague / 2 = verbal / 3 = written + quantified", "Score 3 means the metric is in an email or doc the buyer sent"],
      ["Economic Buyer", "0 = unknown / 1 = named / 2 = met / 3 = personally aligned", "Score 3 means EB has said (to you) that they want this done"],
      ["Decision Criteria", "0 = unknown / 1 = guessed / 2 = verbal / 3 = written", "Score 3 means you’ve seen the actual criteria doc"],
      ["Decision Process", "0 = unknown / 1 = partial / 2 = mapped / 3 = mapped + timed", "Score 3 means you have dates for each step through signature"],
      ["Identify Pain", "0 = no pain / 1 = nice-to-have / 2 = real pain / 3 = quantified cost of inaction", "Score 3 means buyer can say “doing nothing costs us $X per month”"],
      ["Champion", "0 = none / 1 = supporter / 2 = active seller / 3 = willing to put skin in the game", "Score 3 means Champion has written an internal email advocating for you"],
    ], footer: "Score of 12+ / 18 is minimum threshold for Commit forecast. Below that: the deal is not ready. Work the gap." },
    { type: "exercise", title: "Score Your Top 3 Deals Against MEDDIC", intro: "Pick your top 3 deals by expected revenue. Score each letter honestly 0–3 using the rubric from Slide 6. Identify the lowest-scoring letter on each deal — that’s your next action.", items: [
      { num: "1", copy: "Deal #1: Write out M, E, D, D, I, C scores. Be brutally honest — if you don’t have the data, score it 0.", answer: "The hardest part is not cheating. “I think Mark is the EB” = score 0 (unknown). “Mark said to me on April 3 that he owns the budget” = score 2." },
      { num: "2", copy: "For the lowest-scoring letter on Deal #1, write the specific next action that would move it up one notch.", answer: "Example: if Decision Process = 1 (partial), next action = “Email Champion asking to walk through the full sign-off path, including names and dates.”" },
      { num: "3", copy: "Repeat for Deal #2 and Deal #3.", answer: "Patterns will emerge. If Champion is your weakest letter across all 3 deals, you have a systematic problem — not a deal problem." },
      { num: "4", copy: "Recalibrate forecast: any deal with total score below 12 / 18 moves out of Commit.", answer: "Your forecast accuracy will improve immediately. Your manager will notice. The deals you do commit will close more reliably." },
    ] },
  ],
};
