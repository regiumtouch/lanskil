// Conversion Copy — Module 5: A/B Testing & CRO Fundamentals
export const convTestingModule = {
  id: "conv05",
  title: "A/B Testing & CRO Fundamentals",
  type: "Rich Module",
  duration: "90 min",
  desc: "Data-driven conversion optimisation. Design tests that actually answer questions, read results honestly, and compound wins over quarters.",
  topics: ["Hypothesis Design", "Sample Size Math", "Statistical Significance", "Testing Priorities", "Reading Results", "Iteration Velocity"],
  quiz: [
    { q: "You run an A/B test for 3 days, see Variant B up 8%, and call it a winner. What\u2019s likely wrong?", opts: ["Nothing", "Sample size and duration are almost certainly too small for statistical confidence; early-test noise often flips once you reach significance", "Should wait longer only if traffic is high", "Results are never trustworthy"], correct: 1 },
    { q: "A good test hypothesis looks like:", opts: ['"Let\'s try a new CTA"', '"If we add ROI math next to the price, conversion will increase because the top-objection pattern in interviews is \'looks expensive,\' and ROI context reframes price into value"', '"Red converts better than blue"', '"Make it shorter"'], correct: 1 },
    { q: "Ranked by expected lift: (A) hero value prop rewrite, (B) CTA button color, (C) adding named-customer proof above the fold, (D) font size", opts: ["A > C >> B > D", "A \u2248 C >> B \u2248 D \u2014 value prop + social proof are high-leverage; button color and font changes are near-noise except on edge cases", "D > A > B > C", "All equal"], correct: 1 },
    { q: "Your page has 400 visitors/day and a 2% baseline conversion. For a meaningful A/B test, minimum sample size is roughly:", opts: ["20 visitors", "Thousands per variant \u2014 low base rates + small effect sizes mean you need weeks of traffic for statistically valid detection", "50 visitors", "100 visitors"], correct: 1 },
    { q: "You ran 7 tests this quarter. 6 showed no winner. Honest interpretation:", opts: ["Testing doesn\u2019t work", "The tested elements were low-leverage, OR your sample sizes were too small to detect real lifts, OR your hypotheses weren\u2019t sharp enough \u2014 iterate on hypothesis quality, not test quantity", "Stop testing", "Google broke things"], correct: 1 },
    { q: "The single biggest CRO mistake is:", opts: ["Testing too much", "Testing button colors and font tweaks while the value prop, social proof, and CTA copy go un-audited \u2014 low-leverage A/B tests on a broken page waste months", "Testing too little", "Not using AI"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "A/B Testing &", titleAccent: "CRO Fundamentals", subtitle: "Data-driven conversion optimisation \u2014 design tests that answer real questions, read results honestly, and compound wins over quarters.", meta: "Conversion Copy & Landing Pages  |  Module 5  |  7 Slides" },
    { type: "stats", eyebrow: "WHY MOST A/B TESTS FAIL", title: "Most teams test the wrong things, badly, and call noise a winner", intro: "A/B testing is a surgical tool. Used well, it compounds conversion rate quarter over quarter. Used badly, it produces false confidence, wasted effort, and calendar theatre.", stats: [
      { num: "80%", label: "of A/B tests show no statistically significant winner" },
      { num: "3\u00D7", label: "higher testing ROI from value prop / headline tests vs button-color / font tests" },
      { num: "4\u20136 weeks", label: "typical time for a statistically sound test on a page with modest traffic" },
    ], subheading: "What Good CRO Programmes Do Differently", bullets: [
      "Test high-leverage elements first (value prop, CTA copy, social proof) \u2014 not colors and fonts",
      "Design hypotheses that explain WHY a change should work, based on user research",
      "Run tests to statistical significance before calling winners, even if it takes weeks",
      "Treat most tests as learning exercises, not victories \u2014 compounding understanding is the real win",
    ] },
    { type: "principle", num: "01", title: "The Hypothesis-Driven Test", intro: "A test without a hypothesis is vanity metrics theatre. A proper hypothesis states: what you\u2019ll change, what you expect to happen, and why \u2014 based on evidence from user research, analytics, or qualitative data.", sectionTitle: "The Hypothesis Template", sections: [
      { heading: "1. Observation (what you see now)", example: "\"Heatmap shows 60% of visitors don\u2019t scroll past the hero; session recordings show exits on hero section.\"", note: "Observation is grounded in data, not guesswork. If you can\u2019t cite evidence, pause." },
      { heading: "2. Hypothesis (what you believe is true)", example: "\"Visitors don\u2019t scroll because the value prop doesn\u2019t confirm their intent quickly enough.\"", note: "A belief about user psychology, backed by interviews or behaviour data \u2014 not a random guess." },
      { heading: "3. Change (what you\u2019ll test)", example: "\"Replace current hero with a value prop that names the audience + outcome + specific timeframe.\"", note: "One change, testable, reversible. Don\u2019t bundle 5 changes into one variant \u2014 you won\u2019t know which did the work." },
      { heading: "4. Expected outcome + why", example: "\"Scroll depth > 40% should increase by 15\u201325% because intent-match in the first 3 seconds reduces bounce.\"", note: "Predict both the magnitude AND the mechanism. If it fails, the mechanism teaches you what to test next." },
    ], rule: "A test without all 4 components isn\u2019t a test \u2014 it\u2019s a coin flip with extra steps. Rewrite the hypothesis until each box is filled." },
    { type: "comparison", eyebrow: "LOW-LEVERAGE vs HIGH-LEVERAGE TESTS", title: "Two test programs, same team, vastly different outcomes", subtitle: "Team A runs 20 tests on buttons/fonts in a year. Team B runs 6 tests on value props, CTA copy, and social proof. Results compound 5\u201310\u00D7.", left: { title: "Low-Leverage Test Program", color: "#EF4444", items: [
      { strong: "Tests button color (red vs blue vs green)", note: "In most contexts, measurable lift is inside statistical noise." },
      { strong: "Tests font size (14px vs 16px)", note: "Rarely moves the needle unless readability was genuinely broken." },
      { strong: "Tests header capitalisation", note: "Title Case vs Sentence case \u2014 effect size is tiny in almost all studies." },
      { strong: "20 tests / year, 1 meaningful win, ~4% total conversion lift", note: "The team is \"running tests\" but compounding almost nothing." },
    ] }, right: { title: "High-Leverage Test Program", color: "#10B981", items: [
      { strong: "Tests value prop rewrite (generic \u2192 audience-specific)", note: "Typical lift: 15\u201340%. Single highest-leverage test you can run." },
      { strong: "Tests CTA copy (generic \u2192 outcome-led + friction removal)", note: "Typical lift: 10\u201325%. Low effort, high return." },
      { strong: "Tests social proof placement + specificity", note: "Moving named customers above-the-fold typically lifts trust metrics 10\u201320%." },
      { strong: "6 tests / year, 4 meaningful wins, ~35\u201360% compounded lift", note: "The team is running fewer tests but each test is hypothesis-grounded and high-leverage." },
    ] }, footer: "Rule: never run a button-color test while your value prop is still generic. Work your way down the leverage hierarchy." },
    { type: "table", title: "The CRO Priority Order", subtitle: "Most conversion pages have one of these in broken state. Fix them in priority order; don\u2019t test button colours while your value prop is invisible.", columns: ["Priority", "Element", "Expected Lift Range"], rows: [
      ["1 (highest)", "Hero value prop / headline", "10\u201340% typical"],
      ["2", "Primary CTA copy + friction removers", "5\u201325%"],
      ["3", "Social proof placement + specificity", "5\u201320%"],
      ["4", "Inline objection answers (especially pricing)", "5\u201315%"],
      ["5", "Form field count on primary CTA flow", "5\u201315%"],
      ["6", "Above-the-fold visual (stock illustration \u2192 screenshot / demo)", "3\u201312%"],
      ["7 (lowest)", "Button color, font, spacing, micro-copy polish", "<5% typically"],
    ], footer: "Rule: every priority-1 and priority-2 element should be audited + tested BEFORE any priority-6+ test. Work top-down." },
    { type: "principle", num: "02", title: "Reading A/B Results Honestly", intro: "Most test results are misread. Teams call winners on 3-day data. They stop tests early. They ignore base-rate effects. Reading results honestly is what separates a compounding CRO programme from a theatre one.", sectionTitle: "The 4 Rules of Honest Reading", sections: [
      { heading: "1. Reach statistical significance OR admit the test is inconclusive", example: "Don\u2019t declare a winner at 82% confidence. The standard threshold is 95%, and even that occasionally flips with more data.", note: "If you can\u2019t wait to significance, use longer test cycles or cluster smaller pages together." },
      { heading: "2. Account for base-rate changes", example: "If a public holiday or a major launch happened mid-test, the test is compromised. Rerun it.", note: "External events distort tests more than most teams realise. Calendar-check every test window." },
      { heading: "3. Look at leading metrics, not just primary", example: "CTR on the new hero might be up while final conversion is flat \u2014 suggests hero works but something below is broken.", note: "Segment the funnel. Each step\u2019s lift (or drop) tells you where the actual effect lives." },
      { heading: "4. Document losers as carefully as winners", example: "A losing test still teaches you something about your audience\u2019s mental model.", note: "The compounding in CRO comes from accumulated understanding \u2014 not just accumulated wins." },
    ], rule: "If you can\u2019t explain why the winning variant won (mechanism, not just outcome), you haven\u2019t finished reading the result. Dig deeper before you lock it in." },
    { type: "exercise", title: "Design Your Next Real Test", intro: "Write a hypothesis-driven test for your highest-traffic landing page right now. Use the 4-part template from Slide 3.", items: [
      { num: "1", copy: "Observation: what specific data or qualitative evidence suggests a problem? (Heatmap, session recording, interview quote, analytics anomaly.)", answer: "If you can\u2019t point to one specific piece of evidence, pause. Run user research before designing the test." },
      { num: "2", copy: "Hypothesis: what do you believe is causing the problem? State it as a cause + effect sentence.", answer: "Example: \"Visitors don\u2019t scroll because the value prop doesn\u2019t confirm their intent fast enough.\" Belief + mechanism." },
      { num: "3", copy: "Change: what single change will you make? Make sure it\u2019s one testable variable, not a bundle.", answer: "If you\u2019re tempted to bundle 3 changes \"to save time,\" split them into sequential tests. You\u2019ll actually learn more." },
      { num: "4", copy: "Expected outcome: predict the direction + rough magnitude + the metric you\u2019ll measure. Define your significance threshold BEFORE running the test.", answer: "Example: \"We expect scroll-depth > 40% to lift 15\u201325% at 95% confidence.\" Pre-commit to not stopping early." },
    ] },
  ],
};
