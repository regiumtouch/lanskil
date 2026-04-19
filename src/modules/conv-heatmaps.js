// Conversion Copy — Module 6: Heatmaps & Behavioural Analysis
export const convHeatmapsModule = {
  id: "conv06",
  title: "Heatmaps & Behavioural Analysis",
  type: "Rich Module",
  duration: "90 min",
  desc: "Stop guessing why visitors don't convert. Read heatmaps, scroll maps, click maps, and session recordings like a detective \u2014 and let the data tell you what to rewrite.",
  topics: ["Click Maps", "Scroll Depth", "Session Recordings", "Rage Clicks", "Form Analytics", "The Research-Driven Rewrite"],
  quiz: [
    { q: "A click map shows 40% of clicks hitting a heading (not a link). Diagnose:", opts: ["Nothing unusual", "Visitors expect the heading to be clickable \u2014 either it looks like a link/button (fix the styling) or they\u2019re trying to skip ahead (consider adding a link/CTA there)", "Must be a bug", "Ignore it"], correct: 1 },
    { q: "Scroll depth shows 70% of visitors leave within the first viewport. Most productive investigation is:", opts: ["Add more images below the fold", "Watch 10 session recordings of visitors who bounced from the fold \u2014 behaviour tells you whether it\u2019s intent-mismatch, slow load, or value-prop failure", "Add a pop-up", "Redesign the footer"], correct: 1 },
    { q: "\"Rage clicks\" on your page typically indicate:", opts: ["Excited users", "Visitors clicking repeatedly on something they expected to work but didn\u2019t \u2014 a dead button, an unclickable element, or a failed form submit. These are clear UX bugs in disguise.", "Random behaviour", "Nothing important"], correct: 1 },
    { q: "You see visitors scrolling fast past your testimonial section. Most likely cause:", opts: ["Testimonials are too good", "They look like standard stock-quote testimonials (headshot + generic phrase) and don\u2019t pattern-break the scroll \u2014 replace with specific named outcomes or unique visual formats", "Page is too long", "Visitors don\u2019t like success stories"], correct: 1 },
    { q: "Form analytics reveal 60% of visitors abandon at the 3rd field (phone number). The diagnostic call is:", opts: ["Demand phone anyway", "Either remove the phone field (reduce friction) OR make it optional OR ask for it only at the end, after the high-intent step \u2014 form friction compounds per field", "Require it earlier", "Ignore the data"], correct: 1 },
    { q: "The highest-ROI use of session recordings is to:", opts: ["Watch every session", "Watch 10\u201315 recordings of visitors who BOUNCED or ABANDONED \u2014 behaviour on failure paths teaches more than behaviour on success paths", "Only watch converting visitors", "Never watch them"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 6", title: "Heatmaps", titleAccent: "& Behavioural Analysis", subtitle: "Stop guessing why visitors don\u2019t convert. Read heatmaps, scroll maps, click maps, and session recordings like a detective.", meta: "Conversion Copy & Landing Pages  |  Module 6  |  7 Slides" },
    { type: "stats", eyebrow: "WHY BEHAVIOURAL DATA BEATS OPINION", title: "Your team\u2019s opinion of your page isn\u2019t the user\u2019s experience of your page", intro: "Behavioural data \u2014 heatmaps, scroll depth, session recordings, form analytics \u2014 reveals what users actually do, not what the team hopes they do. 30 minutes of honest behavioural analysis often reveals more than weeks of opinion-based redesign.", stats: [
      { num: "4\u00D7", label: "faster to find a conversion-killing issue through session recordings vs opinion-driven audits" },
      { num: "70%", label: "of rage-click instances indicate a UX issue the product team wasn\u2019t aware of" },
      { num: "15 min", label: "typical time to uncover a major friction source by watching 10 session recordings of bounced visitors" },
    ], subheading: "What Behavioural Analysis Reveals", bullets: [
      "Where visitors actually pay attention vs where you hoped they would",
      "Which copy they skip and which they read carefully (scroll speed tells you)",
      "What they try to interact with that isn\u2019t actually interactive (dead-click patterns)",
      "Where they hesitate, scroll back, or leave entirely \u2014 the silent objection signals",
    ] },
    { type: "grid", eyebrow: "THE 5 BEHAVIOURAL DATA SOURCES", title: "Each tells you something different", subtitle: "Stack all five and you understand your page the way your users actually experience it.", items: [
      { num: "01", title: "Click Maps", desc: "Where visitors click. Dead clicks on non-interactive elements reveal where users EXPECT interactivity.", icon: "\u{1F446}" },
      { num: "02", title: "Scroll Depth Maps", desc: "Where visitors stop scrolling. Sharp drops = problem points in copy or layout.", icon: "\u2B07\uFE0F" },
      { num: "03", title: "Mouse Movement Maps", desc: "Where attention went. Correlates reasonably with gaze tracking; free and easy to deploy.", icon: "\u{1F5B1}\uFE0F" },
      { num: "04", title: "Session Recordings", desc: "Full visitor journey. Reveals hesitation, rage clicks, abandonment points invisible in aggregate data.", icon: "\u{1F3AC}" },
      { num: "05", title: "Form Analytics", desc: "Per-field interaction data. Reveals which fields cause friction, abandonment, or re-fills.", icon: "\u{1F4DD}" },
    ], footer: "Rule: aggregate data (click maps, scroll maps) tells you WHAT is happening. Session recordings tell you WHY. Use both." },
    { type: "principle", num: "01", title: "The Session Recording Protocol", intro: "Watching recordings is the highest-ROI behavioural analysis activity. 10 well-chosen recordings typically reveal 2\u20134 concrete issues. The key is choosing the RIGHT recordings to watch.", sectionTitle: "How to Select Recordings That Teach", sections: [
      { heading: "1. Filter for bounced visitors", example: "Sessions under 30 seconds that exited on the primary landing page.", note: "Your bounced visitors reveal why the page is failing. Converted visitors reveal what\u2019s working \u2014 useful but secondary." },
      { heading: "2. Filter for CTA-approach-and-leave sessions", example: "Visitors who hovered or clicked near the CTA but didn\u2019t convert.", note: "These are visitors who almost said yes. The hesitation is the gold. Watch their behaviour just before they leave." },
      { heading: "3. Filter for rage-click sessions", example: "Sessions where a user clicked repeatedly on the same element.", note: "Rage clicks = expectation gap. Always watch these; they\u2019re usually easy fixes with outsized impact." },
      { heading: "4. Filter for long-dwell-but-no-conversion sessions", example: "Visitors who stayed 2\u20135+ minutes, scrolled extensively, but did not convert.", note: "These visitors were interested but unconvinced. Watching them reveals which objections you failed to address." },
    ], rule: "Watch 10 recordings from each of the 4 categories once a month. You\u2019ll accumulate more conversion insight in an hour than any analytics tool provides." },
    { type: "comparison", eyebrow: "AGGREGATE vs RECORDING", title: "Two ways to diagnose a conversion problem", subtitle: "Aggregate data tells you the problem exists. Session recordings tell you what the problem actually is.", left: { title: "Aggregate-Only Analysis", color: "#EF4444", items: [
      { strong: '"Scroll depth is low on this page."', note: "You know where visitors stop. You don\u2019t know why." },
      { strong: '"Form completion rate is 40%."', note: "You know visitors abandon. You don\u2019t know which field or what they were confused by." },
      { strong: '"CTA click-through is 3%."', note: "You know the CTA doesn\u2019t convert. You don\u2019t know whether it\u2019s copy, placement, or perceived risk." },
      { strong: 'Recommended fix: \"improve the page\"', note: "Generic recommendation because the diagnosis is surface-level." },
    ] }, right: { title: "Aggregate + Recording Analysis", color: "#10B981", items: [
      { strong: '"Scroll depth low because 70% of visitors read the hero slowly then leave \u2014 intent-match failure."', note: "Specific mechanism identified. The fix is a hero rewrite, not \"improve the page.\"" },
      { strong: '"Form completion drops at field 3 (phone). 30% of session recordings show hovering, typing a digit, then deleting + bouncing."', note: "Diagnosed: the phone field is the friction. Make it optional or remove it." },
      { strong: '"CTA low click-through because visitors hover \u2014 then scroll down looking for pricing that isn\u2019t visible."', note: "Fix: show pricing before the CTA, or make pricing a cliff-note element near the CTA." },
      { strong: 'Recommended fixes: specific, testable, grounded in observed behaviour', note: "Three concrete tests designed from observed behaviour \u2014 each with a clear hypothesis." },
    ] }, footer: "Rule: never design a test from aggregate data alone. Validate with session recordings before assuming you know the cause." },
    { type: "table", title: "The Friction Detection Checklist", subtitle: "Watch 10 session recordings of bounced visitors with this checklist in hand. Count how many of these behaviours appear.", columns: ["Behaviour", "Likely Cause", "Typical Fix"], rows: [
      ["Visitor scrolls fast past the hero without reading", "Hero value prop doesn\u2019t resolve their intent", "Rewrite value prop to match the exact query/intent that brought them"],
      ["Visitor hovers on a non-interactive element", "Expected it to be clickable", "Make it a link/button, OR add the link elsewhere to capture the intent"],
      ["Visitor scrolls up and down repeatedly", "Looking for specific information not where expected", "Identify what they\u2019re looking for (pricing? features?) and surface it earlier"],
      ["Visitor opens the pricing section then exits", "Sticker shock or missing ROI context", "Add ROI math / payback period next to the price"],
      ["Visitor lingers on testimonials without scrolling", "Trying to verify social proof", "Make proof more specific \u2014 named company, named person, specific outcome"],
      ["Visitor clicks CTA, lands on form, abandons", "Form friction \u2014 too many fields or unexpected request", "Reduce form fields; move sensitive requests (phone) to later steps"],
      ["Visitor returns to the page 2+ times in recordings", "Interested but undecided", "Strengthen risk reversal and objection handling; add an exit-intent prompt"],
    ], footer: "Rule: each checklist hit = a testable hypothesis. Prioritise fixes by frequency of occurrence across your 10-recording sample." },
    { type: "exercise", title: "Run Your First Behavioural Audit", intro: "If you don\u2019t have Hotjar or Microsoft Clarity installed, install one today (Clarity is free). Then run this 45-minute protocol.", items: [
      { num: "1", copy: "Check the scroll-depth map of your top landing page. Where\u2019s the biggest drop? Note it.", answer: "The biggest drop-off point is almost always a content or intent problem \u2014 investigate it first." },
      { num: "2", copy: "Watch 10 session recordings of visitors who bounced from the first viewport. Note the recurring behaviour pattern.", answer: "Usually: fast scroll past hero, or hover on one specific element then leave. That element is your priority-1 fix." },
      { num: "3", copy: "Check your click map. Are visitors clicking on non-interactive elements?", answer: "If yes, either add the expected interactivity OR move that content elsewhere \u2014 dead clicks are a UX/expectation signal." },
      { num: "4", copy: "Watch 5 recordings of visitors who got close to converting but didn\u2019t. Identify the single moment they hesitated.", answer: "That moment is where your copy failed to dissolve an objection. Design your next A/B test to address it directly." },
    ] },
  ],
};
