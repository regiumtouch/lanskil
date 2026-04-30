// Content Strategy — Module 3: Content Pillars & Positioning
export const csPillarsModule = {
  id: "csp01",
  title: "Content Pillars & Positioning",
  type: "Rich Module",
  duration: "60 min",
  desc: "Pick the 3\u20135 themes you will own, tie them to business outcomes, and commit to a point of view your competitors won't.",
  topics: ["What Makes a Pillar", "Pillar Tests", "Business Goal Mapping", "Point of View", "Pillar Examples", "Staying Disciplined"],
  quiz: [
    { q: "A team commits to 6 pillars in Q1. By Q3, engagement data: Pillars 1\u20132 average 4.1% engagement, Pillars 3\u20134 average 1.2%, Pillars 5\u20136 never got more than 2 pieces each. Correct Q4 move?", opts: ["Keep all 6 and distribute budget evenly \u2014 consistency wins", "Cut to 3: keep Pillars 1\u20132 and one rebuilt Pillar from the bottom group \u2014 thin coverage across 6 means none compound, and capacity is the real constraint", "Add 2 more pillars to hedge", "Rotate pillars quarterly based on trends"], correct: 1 },
    { q: "You're evaluating four candidate pillars. Which is genuinely strongest and why?", opts: ["\"Marketing operations\" \u2014 broad enough to never run out of topics", "\"How Series B to Series D heads of marketing defend content budget during an AI-era layoff cycle\" \u2014 specific role + stage + constraint + implied POV, and you can write 30+ pieces without repeating", "\"Future of work\" \u2014 always current", "\"B2B best practices\" \u2014 clear audience"], correct: 1 },
    { q: "The CEO wants to add a pillar on \"AI\" because competitors are publishing on it. Best pushback?", opts: ["\"AI is overdone\"", "\"A pillar needs audience + constraint + POV, not just a topic. What's the specific audience and what's our defensible take? If we can't answer in one sentence, it's a topic to occasionally cover \u2014 not a pillar to commit 12 months to\"", "\"Let legal review\"", "\"We already have enough pillars\""], correct: 1 },
    { q: "Two pillars with identical output quality: Pillar A generated 12 demos attributable in Q2; Pillar B generated 0 attributable demos but produced 3 podcast invites and 2 inbound press mentions. Correct interpretation?", opts: ["Kill Pillar B \u2014 demos are the only real metric", "They serve different business goals (A = pipeline, B = brand/authority); the mistake is judging both by the same metric \u2014 each pillar should be defended by the outcome it was designed to ladder up to", "Merge them", "Run both 6 more months and re-evaluate"], correct: 1 },
    { q: "You inherit a content program with 9 pillars and 2 writers. Before adding anything, the highest-leverage first move is:", opts: ["Hire a third writer", "Audit: map each pillar to the last 90 days of pieces and the business outcome it actually served \u2014 most 9-pillar programs are really 3 pillars producing and 6 pillars decorating; you'll find the cut list in the data", "Rename the pillars", "Publish a new manifesto"], correct: 1 },
    { q: "A pillar has passed the Ladder-Up and Opinion tests but fails Compounding: each piece is standalone, none link to or build on prior pieces. What's the actual fix?", opts: ["Drop the pillar \u2014 it failed a test", "Rework the editorial structure: map a 10-piece backbone where each piece extends the previous one's argument or case, then retroactively link existing pieces into that spine \u2014 compounding is an editorial habit, not a property of the topic", "Add more keywords", "Write longer pieces"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 3", title: "Content Pillars", titleAccent: "& Positioning", subtitle: "Stop publishing whatever is on your mind. Commit to the 3\u20135 themes you will own for a year \u2014 and build an audience that knows what you stand for.", meta: "Content Strategy  |  Module 3  |  8 Slides" },
    { type: "stats", eyebrow: "WHY PILLARS MATTER", title: "Without pillars, you're producing content. With pillars, you're building an asset.", intro: "Pillars are why some content programmes compound and others flatline. Each new piece on a pillar makes the last one more valuable. Off-pillar content is just noise.", stats: [
      { num: "3\u00D7", label: "higher content-attributed pipeline at programmes with 3\u20135 defined pillars vs. \u201Cwhatever\u2019s trending\u201D" },
      { num: "67%", label: "of content teams cannot name their pillars without checking a doc" },
      { num: "6 months", label: "the minimum time you must defend a pillar before it starts compounding" },
    ], subheading: "What Happens When You Commit", bullets: [
      "Readers start recognising you for something specific \u2014 which is the definition of a brand.",
      "Each new piece links to and builds on earlier pieces, creating an authority ecosystem.",
      "Your team stops arguing about topics every week. The pillars make the decision.",
      "Competitors who publish about everything look shallow next to your committed expertise.",
    ] },
    { type: "principle", num: "01", title: "What Makes a Pillar (Not Just a Topic)", intro: "A topic is something you write about once. A pillar is something you commit to for a year, with multiple angles and a specific point of view. The difference is massive. Most \u201Cpillars\u201D teams list are actually just topics in disguise.", sectionTitle: "Pillar vs Topic \u2014 The Key Differences", sections: [
      { heading: "Pillar: \"Outbound sales without a BDR budget\"", example: "You can produce 40 pieces on this in one year and still have more to say.", note: "Specific audience, specific constraint, specific point of view." },
      { heading: "Topic: \"Sales tips\"", example: "You could write this once. Everyone else already has.", note: "Too broad, no point of view, no audience commitment." },
      { heading: "Pillar: \"Content strategy in the AI era\"", example: "Covers slop, ROI, editorial standards, measurement \u2014 for years.", note: "Timely, opinionated, owns a specific vantage point." },
      { heading: "Topic: \"Content marketing\"", example: "So broad it describes 10 million articles.", note: "No commitment, no angle, no compounding." },
    ], rule: "If you can write 20+ distinct, opinionated pieces on it over 12 months, it's a pillar. If not, it's a topic \u2014 useful once, forgettable after." },
    { type: "grid", eyebrow: "THE THREE PILLAR TESTS", title: "Before you commit, run each pillar through these", subtitle: "A good pillar passes all three. If it fails any one, it won't compound \u2014 and you'll abandon it in 6 months.", items: [
      { num: "01", title: "The Ladder-Up Test", desc: "Does this pillar ladder up to a real business goal? Revenue, retention, recruiting, or brand \u2014 pick one explicitly.", icon: "\u{1F3AF}" },
      { num: "02", title: "The Opinion Test", desc: "Do you have a specific, defensible point of view on it? \u201COutbound is broken for teams under 50\u201D beats \u201COutbound tips.\u201D", icon: "\u{1F4AC}" },
      { num: "03", title: "The Compounding Test", desc: "Will each piece make the last one more valuable? Can they link to each other, build on each other, refer back?", icon: "\u{1F9F1}" },
    ], footer: "If a pillar passes all three, defend it for 12 months. If it fails even one, rewrite it before you begin." },
    { type: "comparison", eyebrow: "WEAK vs STRONG PILLARS", title: "Two pillar lists for the same company", subtitle: "The weak list could belong to any competitor. The strong list is a position nobody else can occupy.", left: { title: "Weak Pillars (Topics in Disguise)", color: "#EF4444", items: [
      { strong: "\"Marketing\"", note: "Too broad. Covers 10 million articles already." },
      { strong: "\"Sales tips\"", note: "Generic. No audience commitment." },
      { strong: "\"Business growth\"", note: "Applies to everyone. Helps nobody." },
      { strong: "\"Industry news\"", note: "No point of view. You are just a feed." },
    ] }, right: { title: "Strong Pillars (Positioned)", color: "#10B981", items: [
      { strong: "\"Outbound sales for teams without a BDR budget\"", note: "Specific audience, specific constraint, specific POV." },
      { strong: "\"Content strategy in the AI era\"", note: "Timely, opinionated, endlessly productive." },
      { strong: "\"How mid-market CMOs defend content budget\"", note: "Role + stage + pain = irresistible to the target reader." },
      { strong: "\"B2B copywriting that reads like a person, not a template\"", note: "Takes a stance. Invites debate. Earns trust." },
    ] }, footer: "The weak list is a calendar. The strong list is a position. The difference is 2 hours of sharper thinking, done once." },
    { type: "table", title: "Pillar Examples by Industry", subtitle: "These are real pillars we\u2019ve seen work in content programmes at different scales.", columns: ["Industry", "Example Pillar", "Why It Works"], rows: [
      ["B2B SaaS (Sales Tech)", "\u201COutbound sales for teams without a BDR\u201D", "Specific audience, specific constraint, 40+ angles available"],
      ["DTC Skincare", "\u201CSkincare for post-pregnancy skin\u201D", "Underserved audience, real physical changes to discuss, community-forming"],
      ["Creative Agency", "\u201CThe business side of creative work\u201D", "Creators need this; agencies rarely discuss it \u2014 easy to own"],
      ["Freelance Writer", "\u201CRaising rates without losing clients\u201D", "Common pain, specific outcome, builds a loyal subscriber base"],
      ["Developer Tool", "\u201CDeveloper experience for infrastructure teams\u201D", "Niche, opinionated, technical specificity wins trust in dev audience"],
    ], footer: "Notice: every example contains an audience + a constraint + an implied point of view. That is the formula." },
    { type: "principle", num: "02", title: "Mapping Pillars to Business Goals", intro: "A pillar nobody can connect to a business outcome gets cut the next time budgets tighten. Before you commit, write down the goal each pillar serves. Make it explicit. This is the single thing that keeps content strategy alive during hard quarters.", sectionTitle: "Map Each Pillar to One Outcome", sections: [
      { heading: "If the pillar serves revenue...", example: "\u201COutbound for teams without a BDR\u201D \u2192 leads \u2192 demos \u2192 pipeline", note: "Track content-attributed pipeline. Defend the pillar with that number." },
      { heading: "If the pillar serves retention...", example: "\u201CGetting the most out of [our product] in year 2\u201D \u2192 usage \u2192 renewal", note: "Track feature adoption, NPS, renewal rate of content-engaged users." },
      { heading: "If the pillar serves recruiting...", example: "\u201CHow our engineering team ships\u201D \u2192 applications \u2192 offer accepts", note: "Track applications citing content, referrals from engineers." },
      { heading: "If the pillar serves brand / authority...", example: "\u201CThe state of [our category]\u201D \u2192 category leadership \u2192 inbound opportunities", note: "Track press mentions, podcast invites, inbound speaking requests." },
    ], rule: "Every pillar needs a one-line \u201Cthis serves ___ by doing ___\u201D justification. Write it down. Revisit it quarterly." },
    { type: "exercise", title: "Define Your 3 Pillars in 30 Minutes", intro: "For each pillar you\u2019re considering, answer the three tests. If it fails any, rework until it passes \u2014 or drop it.", items: [
      { num: "1", copy: "Draft Pillar #1: In one sentence, what is the pillar? (audience + constraint + POV)", answer: "Example: \u201COutbound sales for 10\u201350 person B2B teams without a BDR budget \u2014 our POV: scripts > tools.\u201D" },
      { num: "2", copy: "Run Pillar #1 through the 3 tests. Ladder up to which business goal? Your specific opinion on it? Can 20+ pieces stack on it?", answer: "If any test fails, rewrite the pillar until all three pass." },
      { num: "3", copy: "Repeat for Pillar #2 and Pillar #3.", answer: "Aim for 3 pillars minimum, 5 maximum. Fewer = more depth; more = thin coverage." },
      { num: "4", copy: "Write each pillar and its business goal on a one-pager. Pin it where your team can see it.", answer: "This is your new filter: \u201CDoes this piece belong to one of our pillars?\u201D No? Don\u2019t make it." },
    ] },
  ],
};
