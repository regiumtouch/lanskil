// Content Strategy — Module 3: Content Pillars & Positioning
export const csPillarsModule = {
  id: "csp01",
  title: "Content Pillars & Positioning",
  type: "Rich Module",
  duration: "60 min",
  desc: "Pick the 3\u20135 themes you will own, tie them to business outcomes, and commit to a point of view your competitors won't.",
  topics: ["What Makes a Pillar", "Pillar Tests", "Business Goal Mapping", "Point of View", "Pillar Examples", "Staying Disciplined"],
  quiz: [
    { q: "A content pillar is:", opts: ["A long blog post over 3,000 words", "A theme you commit to owning over time, tied to a specific business goal", "A trending hashtag", "A content calendar template"], correct: 1 },
    { q: "The right number of pillars for most programmes is:", opts: ["1", "3 to 5", "10 to 12", "As many as possible"], correct: 1 },
    { q: "A pillar without a specific opinion is:", opts: ["A stronger pillar because it appeals to everyone", "Just a topic \u2014 crowded, generic, and unmemorable", "Good for SEO", "The industry standard"], correct: 1 },
    { q: "Pillars should be revisited:", opts: ["Weekly, based on trending topics", "Annually or semi-annually \u2014 they compound by staying consistent", "Every time a team member changes", "Whenever a competitor changes theirs"], correct: 1 },
    { q: "Which of these is a STRONG pillar?", opts: ["\"Marketing\"", "\"Digital transformation\"", "\"Outbound sales for teams without a BDR budget\"", "\"Business strategy\""], correct: 2 },
    { q: "The compounding test for a pillar asks:", opts: ["Will this rank for keywords?", "Will each new piece make the last one more valuable?", "Will this go viral?", "Will this match what competitors post?"], correct: 1 },
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
