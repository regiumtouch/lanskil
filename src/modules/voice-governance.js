// Brand Voice & Positioning — Module 5: Voice Governance for Teams
export const voiceGovernanceModule = {
  id: "voice05",
  title: "Voice Governance for Teams",
  type: "Rich Module",
  duration: "90 min",
  desc: "Voice doesn't sustain itself. The systems \u2014 onboarding, review cadence, drift detection, and accountability \u2014 that keep voice alive across writers, teams, and years.",
  topics: ["Voice Onboarding", "Review Cadence", "Drift Detection", "Voice Owner Role", "Quarterly Audits", "Voice Debt"],
  quiz: [
    { q: "A team scales from 2 writers to 8 over 6 months with no voice governance in place. Voice is visibly drifting. Compared to establishing governance BEFORE the hiring wave, retrofitting now typically costs:", opts: ["About the same", "3\u20135\u00d7 more \u2014 each new writer shipped off-voice pieces that now count as precedent; new hires reference drifted recent work instead of the guide; fixing requires both retraining AND content audit/rewrite", "Half as much", "Nothing extra"], correct: 1 },
    { q: "A brand has a beautifully written voice guide and no named voice owner. 12 months in, voice has drifted noticeably. The structural issue:", opts: ["Guide was too short", "Ownership without a name falls between functions; voice governance requires a single accountable person with authority to enforce onboarding, run audits, and update the guide \u2014 without that role, every other system decays within 2 quarters", "Writers were bad", "Guide needed a logo"], correct: 1 },
    { q: "Writer A gets ad-hoc onboarding (\"read the guide, ship something\"). Writer B gets: guide read + 15 exemplars + 3 mock writes with line-level feedback + first-piece line-edit. At 30 days in, the difference in on-brand rate is usually:", opts: ["Negligible", "Large \u2014 structured onboarding (roughly 2\u20134 weeks to fluency) vs. ad-hoc (6\u201312 months) produces dramatically different on-brand rates early; the delta is paid forever in drift debt if you skip structured onboarding", "Structured is slower", "Ad-hoc writers are more creative"], correct: 1 },
    { q: "Voice audits should run at what cadence for a 10-writer team?", opts: ["Once, at the start", "Quarterly mini-audits (10\u201315 pieces) + annual deep audit (30\u201350 pieces) \u2014 90 days catches drift before it becomes cultural; yearly-only lets drift calcify", "Every 2 years", "Only when problems surface"], correct: 1 },
    { q: "\"Voice debt\" describes:", opts: ["Money owed to writers", "The accumulated cost of each off-voice piece shipped under your brand \u2014 each adds noise to the exemplar pool, confuses new writers, and erodes reader trust; unpaid, it compounds until the voice is unrecognisable", "Software licensing", "Legal liability"], correct: 1 },
    { q: "A head of content argues voice governance is \"too expensive\" at 40 hours of owner time per year across a 15-writer org. The counter:", opts: ["They're right; cut it", "That's roughly 2\u20133% of a head of content's capacity protecting the brand's most leveraged asset; without it, 15 writers will drift and the cost to retrofit is 3\u20135\u00d7 higher than the annual governance investment", "Double the hours", "Outsource governance"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "Voice Governance", titleAccent: "for Teams", subtitle: "Voice doesn\u2019t sustain itself. The systems that keep voice alive across writers, teams, and years.", meta: "Brand Voice & Positioning  |  Module 5  |  7 Slides" },
    { type: "stats", eyebrow: "WHY GOVERNANCE IS THE REAL WORK", title: "Building voice is a quarter of effort; sustaining voice is three quarters", intro: "Most brands invest heavily in building a voice guide once, then let it drift for 2\u20133 years. Voice governance is what separates brands with persistent recognisable voices from brands that had voice briefly.", stats: [
      { num: "2\u20133 yrs", label: "typical time for unmaintained voice to drift into genericity" },
      { num: "3\u20135x", label: "cost of retrofitting voice on a scaled team vs establishing governance before growth" },
      { num: "30 min/wk", label: "typical voice-owner time investment to maintain governance at a 10\u201315 writer organisation" },
    ], subheading: "What Voice Governance Systems Do", bullets: [
      "Onboard new writers to voice in 2\u20134 weeks, not 6\u201312 months",
      "Detect drift via quarterly audits before it becomes cultural",
      "Assign clear accountability \u2014 the voice owner role \u2014 so voice doesn\u2019t fall between functions",
      "Maintain exemplar libraries as the brand produces new exemplary work",
      "Budget \u201Cvoice time\u201D into quarterly planning so it doesn\u2019t get crowded out by urgency",
    ] },
    { type: "grid", eyebrow: "THE 4 GOVERNANCE SYSTEMS", title: "What every mature voice programme has", subtitle: "Missing any of these, voice drifts. Present all four, voice compounds.", items: [
      { num: "01", title: "The Voice Owner Role", desc: "One named person accountable. Usually Head of Content, Head of Brand, or Senior Editor. Not a committee.", icon: "\u{1F464}" },
      { num: "02", title: "Writer Onboarding System", desc: "New writers get: the guide, 15 exemplars to read, a mock-write exercise, feedback loop. 2\u20134 weeks to fluency.", icon: "\u{1F39F}\uFE0F" },
      { num: "03", title: "Quarterly Voice Audit", desc: "90-day mini-audits sampling cross-channel copy; drift detected early; voice guide updated accordingly.", icon: "\u{1F50D}" },
      { num: "04", title: "Exemplar Library Maintenance", desc: "As new exemplary work ships, it gets added to the library; stale exemplars get retired.", icon: "\u{1F4DA}" },
    ], footer: "Rule: invest in all 4 systems before you hire your 6th writer. Retrofitting these systems after a team scales is 3\u20135\u00D7 more expensive." },
    { type: "principle", num: "01", title: "The Writer Onboarding System", intro: "Most onboarding is ad-hoc: read the guide, ship something, get notes. This produces inconsistent voice fluency across writers. A structured onboarding gets new writers to voice fluency in weeks, not months.", sectionTitle: "The 4-Step Structured Onboarding", sections: [
      { heading: "Step 1: Read the voice guide (30 min)", example: "The one-pager + side-by-side examples. Absorb, not memorise.", note: "Guide establishes the framework. Exemplars do the absorption work \u2014 but the guide frames what to look for." },
      { heading: "Step 2: Read 15 exemplar pieces (2\u20133 hrs)", example: "The best pieces from the last year across channels. Make notes on patterns noticed.", note: "Reading exemplars IS the voice training. Writers absorb rhythm, vocabulary, and rhetorical moves from exposure to real-voice work." },
      { heading: "Step 3: Mock-write 3 pieces (4\u20136 hrs)", example: "3 pieces on briefs similar to real work. Each returned to the voice owner for feedback within 24 hrs.", note: "Mock writes with rapid feedback compress months of learning into days. Don\u2019t skip this." },
      { heading: "Step 4: First real piece reviewed line-by-line", example: "First production piece gets a full-line edit with voice-specific feedback.", note: "One piece of detailed feedback teaches more than five high-level notes. Invest in this first edit." },
    ], rule: "Writers without structured onboarding take 6\u201312 months to reach voice fluency. Writers with structured onboarding reach fluency in 2\u20134 weeks. The delta is one senior editor\u2019s week of setup." },
    { type: "comparison", eyebrow: "AD-HOC vs STRUCTURED", title: "Two writer onboardings on the same day", subtitle: "Writer A gets ad-hoc \u201Cread the guide\u201D onboarding. Writer B gets the structured 4-step programme. 30 days later, their outputs look very different.", left: { title: "Ad-Hoc Onboarding (Drift Factory)", color: "#EF4444", items: [
      { strong: "\u201CHere\u2019s the voice guide. Go write.\u201D", note: "Writer reads guide once, interprets adjectives their way, ships." },
      { strong: "First piece has 4 voice violations; edits bounce back with terse notes", note: "Writer doesn\u2019t know which of the 4 was the worst; corrects all surface-level; misses the structural pattern." },
      { strong: "After 30 days: 8 pieces shipped, 4 on-brand, 4 drifted", note: "50% drift rate. Each off-voice piece adds to the brand\u2019s voice debt. Compounds negatively over quarters." },
      { strong: "After 12 months: voice fluency barely achieved; readers notice inconsistency", note: "The ad-hoc cost is paid in slow fluency, drift debt, and reader trust erosion." },
    ] }, right: { title: "Structured Onboarding (Fluency in Weeks)", color: "#10B981", items: [
      { strong: "Step 1+2: Guide + 15 exemplars on day 1, 3 hrs", note: "Writer sees the voice in ACTION, not in theory. Internalises patterns from reading real work." },
      { strong: "Step 3: 3 mock writes in week 1, each with line-level feedback", note: "Rapid feedback loop. Writer absorbs what \"on-brand\" means SPECIFICALLY for THIS brand." },
      { strong: "After 30 days: 6 pieces shipped, 5 on-brand, 1 drift (corrected immediately)", note: "83% on-brand rate. Drift debt minimal. Writer already integrated." },
      { strong: "After 12 months: writer is a voice exemplar themselves; work goes into the library", note: "The 2-4 week onboarding investment pays compound dividends across every piece the writer ships for years." },
    ] }, footer: "Rule: the cost of structured onboarding is front-loaded and one-time. The cost of ad-hoc onboarding is paid forever, in drift + trust erosion + senior-editor time fixing piecework." },
    { type: "table", title: "Voice Governance Calendar \u2014 Quarterly Cadence", subtitle: "The minimum viable governance rhythm. Apply every quarter. Each box is an explicit task on the voice owner\u2019s calendar.", columns: ["Cadence", "Activity", "Time Investment"], rows: [
      ["Weekly", "Voice owner reviews 3\u20135 pieces shipped that week; flags drift; gives feedback to writers", "30 min/week"],
      ["Monthly", "Add 1\u20133 new exemplars to the library; retire stale ones", "1 hr/month"],
      ["Quarterly", "Run mini-audit (10\u201315 pieces across channels); quantify consistency score", "4\u20138 hrs/quarter"],
      ["Quarterly", "Update voice guide based on audit findings; socialise updates to team", "2\u20134 hrs/quarter"],
      ["Quarterly", "Onboarding refresh: review onboarding materials based on what\u2019s evolved", "1 hr/quarter"],
      ["Annually", "Major audit (30\u201350 pieces); reconsider POV, vocabulary, signature moves", "2\u20133 days"],
      ["Annually", "Voice retrospective: what worked, what drifted, what the brand has learned", "1 day"],
    ], footer: "Rule: this is ~40 hours of voice-owner time per year. At most orgs this is 2\u20133% of a head-of-content\u2019s capacity. It\u2019s the most leveraged 2\u20133% they\u2019ll spend." },
    { type: "exercise", title: "Draft Your Voice Governance Plan", intro: "Fill out the governance plan for your brand. Be specific \u2014 you\u2019ll actually implement this.", items: [
      { num: "1", copy: "Who is your Voice Owner? Name a specific person + backup. If there is no current owner, this is your highest-priority hire or appointment.", answer: "One named person, with budget + authority to enforce + protect the voice. Without this role, every other governance step fails." },
      { num: "2", copy: "What does your 2\u20134 week writer onboarding look like? Write the 4-step plan (guide, exemplars, mock writes, first-piece review).", answer: "Document it. Put it in Notion or the voice guide. Reference it on every writer hire going forward." },
      { num: "3", copy: "When will you run your next quarterly voice audit? Block 4\u20138 hours on the voice owner\u2019s calendar right now for 90 days from today.", answer: "Governance that isn\u2019t calendared doesn\u2019t happen. Book the time before closing this doc." },
      { num: "4", copy: "Where does your exemplar library live? Commit to adding at least 1 new exemplar per month for the next quarter.", answer: "Living library > frozen library. The compounding of adding exemplars monthly over 3 years is what separates mature voice programmes from one-time voice projects." },
    ] },
  ],
};
