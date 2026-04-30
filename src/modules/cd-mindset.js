// Creative Direction — Module 1: The Creative Director Mindset
export const cdMindsetModule = {
  id: "cd01",
  title: "The Creative Director Mindset",
  type: "Rich Module",
  duration: "90 min",
  desc: "The shift from writer to creative director. How to think at campaign scale, evaluate work you didn't produce, and make the calls that shape teams' output.",
  topics: ["Writer vs Director", "Campaign-Scale Thinking", "Taste Judgement", "Creative Leadership", "The Director\u2019s Job", "Common Traps"],
  quiz: [
    { q: "A writer is promoted to CD. 6 months in, their calendar shows 60% personal writing, 20% reviewing, 10% 1:1s, 10% strategy. Team output is flat vs pre-promotion. Root cause:", opts: ["They need more writers", "They haven't made the mindset shift \u2014 they're still the team's top writer with a new title, and team output is capped at one person's velocity because the structural CD work (direction, review, writer growth) is under-invested", "Not enough hours in the week", "Wrong team composition"], correct: 1 },
    { q: "You receive a submission you could have written better yourself in 2 hours. Strongest CD move:", opts: ["Rewrite it yourself \u2014 ship the best version", "Give specific, teaching-embedded feedback and accept an 85% version this round \u2014 the short-term piece polish is less valuable than the writer's growth trajectory over 12 months, which is your real scorecard", "Reassign it to a better writer", "Ship as-is to avoid conflict"], correct: 1 },
    { q: "\"Taste judgement\" in creative direction is distinguished from personal preference by:", opts: ["It isn't \u2014 they're the same", "Calibration: taste is preference pressure-tested by repeated exposure to great work, brand context, and audience response \u2014 it's defensible to writers and translatable to briefs, where personal preference is arbitrary and erodes trust", "Confidence level", "Job title"], correct: 1 },
    { q: "You manage 4 writers. You notice the same structural mistake (buried lede, weak hook, claim-without-proof) across 3 of them this week. Highest-leverage response:", opts: ["Rewrite each piece individually", "Run a 30-minute team craft session that names the pattern, shows 2 exemplars, and documents the rule for the team wiki \u2014 one teaching moment fixes 3 pieces now and prevents the next 20", "Fire the weakest writer", "Send a Slack message with the fix"], correct: 1 },
    { q: "Campaign-scale thinking vs piece-level thinking differs most fundamentally in:", opts: ["Budget size", "You evaluate pieces by how they interlock and hand off to each other \u2014 the opening piece earning attention the flagship will monetise, the harvest piece closing the arc \u2014 which is invisible if you judge each piece in isolation", "Duration", "Team size"], correct: 1 },
    { q: "Single biggest trap for newly promoted CDs:", opts: ["Giving too much praise", "Continuing to personally write the majority of work while nominally directing \u2014 which denies writers reps, caps output at the CD's velocity, and signals to the team that direction is a cosmetic title rather than a role", "Delegating too fast", "Over-using AI tools"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "The Creative Director", titleAccent: "Mindset", subtitle: "The shift from writer to creative director. How to think at campaign scale and make the calls that shape a team\u2019s output.", meta: "Creative Direction  |  Module 1  |  7 Slides" },
    { type: "stats", eyebrow: "WHY THE SHIFT IS HARD", title: "Most newly-promoted writers fail as creative directors because the skill set is different", intro: "Writing well at the highest level is a craft. Directing others to write well is a completely different discipline. The skills don\u2019t transfer automatically, and the promotion ceremony doesn\u2019t teach the shift.", stats: [
      { num: "48%", label: "of writers promoted to CD roles return to writing within 18 months \u2014 because the skill shift wasn\u2019t made" },
      { num: "3\u20136 months", label: "typical time for a newly-promoted CD to internalise campaign-scale thinking vs piece-level thinking" },
      { num: "5\u201310x", label: "output multiplier a well-functioning CD brings vs a CD who\u2019s still effectively writing everything themselves" },
    ], subheading: "The Mindset Shifts", bullets: [
      "From craft-focus to judgement-focus \u2014 you evaluate more than you create",
      "From solo-output to team-output \u2014 your value is measured in the team\u2019s work",
      "From piece-thinking to campaign-thinking \u2014 how 10 pieces interlock, not how 1 reads",
      "From personal taste to calibrated taste \u2014 judgement based on audience + brand, not preference",
    ] },
    { type: "grid", eyebrow: "WRITER vs DIRECTOR", title: "The four dimensions the role shifts on", subtitle: "Each of these is a different skill. Transitioning requires conscious practice on each.", items: [
      { num: "01", title: "Output Unit", desc: "Writer: per-piece output. Director: per-team-quarter output. Different unit of measure; different planning horizons.", icon: "\u{1F4CF}" },
      { num: "02", title: "Judgement Type", desc: "Writer: \u201CWhat should I write?\u201D Director: \u201CIs this submission good enough? How do I make it great?\u201D", icon: "\u2696\uFE0F" },
      { num: "03", title: "Feedback Loop", desc: "Writer: reader reactions. Director: writer growth + reader reactions + team health + campaign outcomes.", icon: "\u{1F504}" },
      { num: "04", title: "Time Allocation", desc: "Writer: 80% writing, 20% reviewing. Director: 30% strategy, 40% reviewing work, 20% writer growth, 10% personal writing.", icon: "\u23F0" },
    ], footer: "Rule: if your time allocation still looks like a writer\u2019s after 6 months in the CD role, you haven\u2019t made the shift \u2014 and the team isn\u2019t getting the director they need." },
    { type: "principle", num: "01", title: "What Creative Direction Actually Is", intro: "Creative direction is not doing more writing. It\u2019s not quality control. It\u2019s the specific discipline of setting a frame within which writers do their best work \u2014 and calibrating that frame over time as campaigns + markets + team change.", sectionTitle: "The 4 Jobs of a Creative Director", sections: [
      { heading: "1. Set direction", example: "Translate business goals into creative strategy: what the campaign is about, for whom, with what angle, against what competitive frame.", note: "Writers need a frame. Without direction, they waste hours wandering toward generic defaults. The frame is the director\u2019s gift to them." },
      { heading: "2. Give great briefs", example: "A brief that delivers the frame + context + success criteria + inspiration + guardrails. Not a ticket.", note: "Brief quality predicts output quality. Directors who give thin briefs get thin work; they blame the writer. Brief better." },
      { heading: "3. Judge the work", example: "Evaluate submissions against brand voice + campaign strategy + taste calibration. Say yes, say no, say rewrite \u2014 specifically.", note: "Vague \u201Cmake it better\u201D notes waste writer time and produce drift. Specific, taste-anchored feedback compounds the writer\u2019s growth." },
      { heading: "4. Grow writers", example: "Each piece of feedback is a mini-teaching. Over months, the writer absorbs the director\u2019s judgement + becomes capable of first-pass alignment.", note: "Your team\u2019s 12-month trajectory is your real scorecard. Writers who grow under your direction become the evidence of good direction." },
    ], rule: "If you aren\u2019t doing at least 3 of these 4 jobs every week, you aren\u2019t creative directing \u2014 you\u2019re occupying the title." },
    { type: "comparison", eyebrow: "WRITER-BRAIN vs DIRECTOR-BRAIN", title: "Same submission, two responses", subtitle: "A writer submits a piece to the newly-promoted CD. The writer-brain CD and the director-brain CD respond very differently.", left: { title: "Writer-Brain Response (Bad Direction)", color: "#EF4444", items: [
      { strong: "\u201CI\u2019ll just rewrite it myself.\u201D", note: "Denies writer growth. Caps team output at director\u2019s personal velocity. Breeds resentment." },
      { strong: "\u201CMake it better\u201D (as a note)", note: "Vague. Writer has to guess. Multiple revision cycles. Low teaching yield." },
      { strong: "Focuses on surface language edits", note: "Missed the structural/strategic issue. Rearranged deck chairs on a piece that needed fundamental rethinking." },
      { strong: "No teaching embedded in feedback", note: "Writer doesn\u2019t learn why the change matters. Makes the same mistakes in the next piece." },
    ] }, right: { title: "Director-Brain Response (Good Direction)", color: "#10B981", items: [
      { strong: "\u201CThe first 200 words don\u2019t establish the specific audience. Our brief said Head of Content at mid-market SaaS; this reads for anyone. Let\u2019s narrow the open and commit to one reader.\u201D", note: "Specific, strategic, teaches the writer about audience-first framing." },
      { strong: "\u201CThis third section makes 4 claims without proof. Name a specific customer or cut the claims.\u201D", note: "Teaches the claims-need-proof rule. Writer internalises it for every future piece." },
      { strong: "\u201CThe hook is great. Use that energy to restructure the middle \u2014 it sags here.\u201D", note: "Praises what\u2019s working; locates the specific problem; gives a specific direction." },
      { strong: "\u201CLook at [exemplar piece] for how a similar structure lands the handoff between sections 2 and 3.\u201D", note: "Points to a concrete reference. Writer absorbs pattern from a real example, not abstract instruction." },
    ] }, footer: "Rule: every piece of feedback is an opportunity to teach. Teach or rewrite. Never \u201Cmake it better.\u201D" },
    { type: "table", title: "The CD's Weekly Time Allocation", subtitle: "A healthy CD\u2019s calendar looks nothing like a writer\u2019s. Here\u2019s the approximate split to aim for.", columns: ["Activity", "% of Week", "What It Looks Like"], rows: [
      ["Strategic planning + direction-setting", "30%", "Campaign planning, brief-writing, direction for upcoming work"],
      ["Reviewing + editing team work", "40%", "Submissions review, feedback rounds, quality calls on campaign-critical pieces"],
      ["Writer growth + 1:1s", "20%", "1:1 sessions, teaching moments, craft mentorship, onboarding"],
      ["Personal writing (high-leverage pieces only)", "10%", "Founder-voice pieces, keynote campaigns, the 3\u20135 pieces/quarter only you can do"],
    ], footer: "Rule: if you\u2019re personal-writing more than 20% of your week, you\u2019re under-directing. Shift time from writing into reviewing + growing writers \u2014 the team\u2019s output will multiply." },
    { type: "exercise", title: "Audit Your Current Week", intro: "Before you can shift mindset, you need to see the current pattern. Audit your last work week honestly.", items: [
      { num: "1", copy: "What % of your week went to personal writing vs direction + review + writer growth?", answer: "If you\u2019re a CD and personal writing is over 30%, you\u2019re acting as a writer-with-a-title. Make the structural shift \u2014 less personal writing, more direction." },
      { num: "2", copy: "How many pieces did you review this week with specific, teaching-embedded feedback?", answer: "Aim for 5\u201310/week. Each specific feedback session compounds the writer\u2019s growth. Vague feedback doesn\u2019t count; count only the specific ones." },
      { num: "3", copy: "Did you give any writer a frame (strategic direction) before they started, or only feedback after?", answer: "Pre-brief direction prevents 80% of the rework that post-hoc feedback tries to fix. Front-load the strategic work; back-end fewer rewrites." },
      { num: "4", copy: "When did you last have a craft mentorship conversation with each writer about their growth trajectory (not this-week\u2019s piece)?", answer: "If more than 30 days ago for any writer on your team, you\u2019re under-investing in the growth side of direction. Schedule a craft 1:1 this week with the one you\u2019ve talked to least recently." },
    ] },
  ],
};
