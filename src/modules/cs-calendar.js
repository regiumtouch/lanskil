// Content Strategy — Module 5: Editorial Calendar & Workflow
export const csCalendarModule = {
  id: "csc01",
  title: "Editorial Calendar & Workflow",
  type: "Rich Module",
  duration: "60 min",
  desc: "Build a simple, sustainable content rhythm. Plan what you'll publish, who does what, and how to avoid burnout or bottlenecks.",
  topics: ["Publishing Cadence", "Calendar Basics", "Production Stages", "Roles & Workflows", "Batching & Recycling", "Keeping the Rhythm"],
  quiz: [
    { q: "A team commits at kick-off to 3 pieces/week across 4 platforms. By month 3 they're shipping 1 piece/month, inconsistently. Root cause is most likely:", opts: ["Team members left", "Cadence was planned without scoping workflow capacity at each production stage \u2014 the gap isn't ambition, it's that plan/draft/edit/publish/distribute have no named owner per piece and no realistic hour budget", "Budget was cut", "Audience changed"], correct: 1 },
    { q: "Tuesday publish deadline. The piece is 60% ready \u2014 hook is strong but the middle sags. Which move best preserves the 12-month program?", opts: ["Ship Tuesday to hold the deadline", "Move to Thursday with a one-line note in the newsletter; the publish date is internal, the quality bar is your promise to readers \u2014 missed dates are recoverable, eroded trust isn't", "Skip the week silently", "Pull the piece and scrap it"], correct: 1 },
    { q: "Team A drafts in bursts of inspiration and batches nothing. Team B batches by stage: planning Monday, drafting Tues\u2013Wed, editing Thursday. Same total hours. Predict the 90-day output gap and why:", opts: ["Team A wins on quality from creative freedom", "Team B typically ships 30\u201350% more consistent work at comparable quality because the hidden cost of Team A's approach is the context-switching tax, not the writing itself", "Both equal", "Team A scales better"], correct: 1 },
    { q: "A solo creator builds a 50-topic annual calendar on January 1. What's actually wrong with this structure?", opts: ["Not enough topics", "Over-planned volume with no supporting workflow \u2014 solo creators ship more with a rolling 12-week plan holding 4\u20135 active pieces in different stages + a backlog, because annual plans don't survive quarterly context changes", "Solo creators shouldn't use calendars", "Wrong tool"], correct: 1 },
    { q: "Which is the WEAKEST signal of editorial health?", opts: ["% of pieces shipped on their committed date", "Median time from idea to publish", "Ratio of pieces drafted to pieces shipped (your kill rate)", "Total pieces published per month with no outcome, quality, or subscriber context"], correct: 3 },
    { q: "A team batches distribution: publish weekly, but promote pieces in one quarterly push. What typically goes wrong?", opts: ["Distribution should be daily", "Distribution has a 30-day decay window \u2014 freshness, audience recency, algorithm favour, and news relevance all collapse after that; quarterly batching means every piece gets promoted when it's already stale", "Quarterly is correct", "Distribution doesn't move outcomes"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "Editorial Calendar", titleAccent: "& Workflow", subtitle: "The simple system behind programmes that keep shipping for years \u2014 without burnout, missed deadlines, or quality drops.", meta: "Content Strategy  |  Module 5  |  8 Slides" },
    { type: "stats", eyebrow: "WHY CALENDARS FAIL", title: "Most content calendars die in month three", intro: "Not because the plan was bad \u2014 because the workflow under it was unrealistic. The goal is not an ambitious calendar. It is a calendar that will still be running in 12 months.", stats: [
      { num: "80%", label: "of content calendars are abandoned within 90 days of being created" },
      { num: "2.4\u00D7", label: "more output from teams with a 6-stage workflow vs. ad-hoc teams" },
      { num: "#1", label: "reason calendars fail: over-planning volume without scoping workflow capacity" },
    ], subheading: "What Sustainable Calendars Have In Common", bullets: [
      "Realistic cadence tied to actual team capacity \u2014 not aspirational output.",
      "A clear definition of done at each production stage.",
      "One named owner per piece at every stage \u2014 no \u201Cteam will handle it.\u201D",
      "Room to skip a week without collapsing the whole system.",
    ] },
    { type: "grid", eyebrow: "THE FIVE STAGES OF PRODUCTION", title: "Every piece of content moves through these stages", subtitle: "If a stage is missing, the piece breaks at the next step. If a stage has no owner, the piece stalls.", items: [
      { num: "01", title: "Plan", desc: "Brief: who it's for, what pillar, what angle, what metric. Never write without this.", icon: "\u{1F5D2}\uFE0F" },
      { num: "02", title: "Draft", desc: "Get the full idea down. Don\u2019t edit while drafting \u2014 speed and completeness first.", icon: "\u270F\uFE0F" },
      { num: "03", title: "Edit", desc: "Sharpen, cut, add specifics. This is where most pieces get their final quality.", icon: "\u2702\uFE0F" },
      { num: "04", title: "Publish", desc: "Format, design, tag, and release. Don\u2019t hit publish without the distribution step planned.", icon: "\u{1F4E4}" },
      { num: "05", title: "Distribute", desc: "Share across channels, amplify with ads/email/social. Without this, great content still gets 0 readers.", icon: "\u{1F4E1}" },
    ], footer: "Rule: every piece must pass all 5 stages, and each stage must have a named owner \u2014 even if it\u2019s just you." },
    { type: "principle", num: "01", title: "Picking a Sustainable Cadence", intro: "Most teams over-commit at day one and burn out by month three. A good cadence is boring on purpose: small enough to protect the quality bar, big enough to compound reader attention.", sectionTitle: "Rules for a Cadence You'll Actually Keep", sections: [
      { heading: "Start with half the cadence you think you need", example: "Plan for 1 piece/week if you think 2 is right. Scale up only if the first is easy.", note: "Ambition is not the bottleneck. Sustained output is." },
      { heading: "Pick one fixed publish day per channel", example: "Every Tuesday 10am for the newsletter. Friday 3pm for LinkedIn.", note: "Your audience learns the rhythm. Consistency is a promise you keep." },
      { heading: "Build in skip weeks", example: "Plan for 45 publish weeks per year, not 52. Holidays, launches, and life exist.", note: "Calendars without buffer are the ones that break." },
      { heading: "Match cadence to content quality", example: "One great post per week beats five mediocre ones.", note: "In the AI era, volume is free \u2014 judgement is scarce." },
    ], rule: "The best cadence is the smallest one you can maintain for 12 months. Earn the right to scale up by hitting the small one first." },
    { type: "comparison", eyebrow: "RIGID vs FLEXIBLE CALENDAR", title: "Two calendar approaches for the same team", subtitle: "The rigid calendar looks organised. The flexible one actually ships.", left: { title: "Rigid (Dies in Month 3)", color: "#EF4444", items: [
      { strong: "52 pieces planned for the year, slot-by-slot", note: "Collapses if one person is sick or one topic stalls." },
      { strong: "No buffer, no skip weeks, no backlog", note: "Any delay becomes a visible failure." },
      { strong: "Topics locked in Q1 \u2014 can\u2019t adapt to customer feedback in Q3", note: "Misses real-time insights; feels stale by mid-year." },
      { strong: "Quality drops to hit dates", note: "Burnout + quality drop = audience attrition." },
    ] }, right: { title: "Flexible (Ships for Years)", color: "#10B981", items: [
      { strong: "12-week rolling plan with a 5-piece active pipeline", note: "Always something in draft, edit, and distribute stages simultaneously." },
      { strong: "45 planned publish weeks, 7 skip weeks built in", note: "Space for launches, holidays, and strategic pauses." },
      { strong: "Topics adjusted monthly based on conversations and signals", note: "Stays fresh, relevant, and responsive." },
      { strong: "Quality bar protected \u2014 dates move, not standards", note: "Readers get better content, reliably." },
    ] }, footer: "Rigid calendars look nice on a page. Flexible ones keep running. Choose the one that still exists in 12 months." },
    { type: "table", title: "Roles & Responsibilities (Even If It's Just You)", subtitle: "Every role has to happen. If you're a solo creator, you wear every hat \u2014 but naming the hats helps you block time.", columns: ["Role", "Responsibility", "Time % per Piece"], rows: [
      ["Strategist", "Picks the topic, audience, pillar, angle. Approves the brief.", "10%"],
      ["Writer / Creator", "Drafts the piece. Writes, films, designs, or records.", "40%"],
      ["Editor", "Sharpens, cuts, checks facts. Signs off on publish-readiness.", "15%"],
      ["Designer / Producer", "Formats, adds visuals, polishes layout for the chosen channel.", "15%"],
      ["Publisher", "Uploads, schedules, tags, and formats for SEO/metadata.", "5%"],
      ["Distributor", "Promotes across email, social, paid, and partner channels.", "15%"],
    ], footer: "Rule: every piece needs every role to happen. If nobody owns a role, that\u2019s where the piece will break." },
    { type: "principle", num: "02", title: "Batching and Recycling \u2014 Your Productivity Cheats", intro: "The two highest-leverage habits for any content team, solo or otherwise. Batching saves hours per week. Recycling multiplies the reach of every piece you make. Both are free.", sectionTitle: "Two Productivity Rules That Compound", sections: [
      { heading: "Batch by stage, not by piece", example: "One afternoon: 5 briefs. Another afternoon: 2 drafts. A third: edit day.", note: "Context-switching between stages is the hidden tax on content teams." },
      { heading: "Plan 3 months of topics at once", example: "One 2-hour topic-brainstorm quarterly > weekly scrambling.", note: "Reduces decision fatigue; keeps the backlog full." },
      { heading: "Every piece = 5 assets", example: "Blog post \u2192 newsletter \u2192 3 LinkedIn posts \u2192 1 video \u2192 1 email.", note: "Ship the piece once; distribute it 5\u201310 different ways over 30 days." },
      { heading: "Repost your evergreen wins every 90 days", example: "Your top pieces this quarter will work again next quarter with fresh audiences.", note: "90% of your audience didn\u2019t see it the first time. Recycling is a service, not a shortcut." },
    ], rule: "You don\u2019t need to make more content. You need to make better use of the content you\u2019re already making." },
    { type: "exercise", title: "Plan Your First 30 Days", intro: "Draft a 30-day calendar right now. Keep it small. Keep it sustainable. Don\u2019t aim for ambition \u2014 aim for reliability.", items: [
      { num: "1", copy: "Pick ONE channel + ONE cadence. Example: LinkedIn, every Tuesday.", answer: "Not three channels. Not daily. Start small. You can always scale up." },
      { num: "2", copy: "List 4 topics for the next 4 weeks (one per publish day). Use the 10-in-10 exercise from Module 4.", answer: "Each topic must have: audience, angle, POV, and the metric you\u2019ll track." },
      { num: "3", copy: "Assign the 5 production stages for each piece. (If solo: block time for each stage on your calendar.)", answer: "Plan Mondays, Draft Tuesdays\u2013Wednesdays, Edit Thursdays, Publish Friday morning, Distribute all weekend." },
      { num: "4", copy: "Write down one measurable outcome you\u2019ll review at day 30.", answer: "Example: \u201C4 posts published on time, 50 newsletter signups, 3 replies from target-role readers.\u201D" },
    ] },
  ],
};
