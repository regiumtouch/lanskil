// AI-Powered Copywriting — Module 3: Editing AI Drafts Like a Pro
export const aiEditingModule = {
  id: "ai03",
  title: "Editing AI Drafts Like a Pro",
  type: "Rich Module",
  duration: "90 min",
  desc: "The craft of turning AI's commodity first draft into shippable copy. What to keep, what to cut, what to rewrite \u2014 and the tells that give AI copy away.",
  topics: ["AI Tells", "The 3-Pass Edit", "Cutting Adjective Soup", "Adding Specificity", "Voice Restoration", "Final Human Touches"],
  quiz: [
    { q: "The fastest way to identify AI-written copy is:", opts: ["Word count", "Adjective stacks (\"innovative, cutting-edge, seamless\"), hedging language (\"can help\", \"may improve\"), perfect parallel sentence structure, cliché openings, and zero named specifics", "Font size", "Emoji usage"], correct: 1 },
    { q: "The first pass of editing an AI draft should be:", opts: ["Polish the grammar", "Kill every vague adjective and replace with a specific number, name, or mechanism \u2014 specificity pass first, everything else after", "Add more words", "Change the tone"], correct: 1 },
    { q: "An AI draft reads as \"slightly robotic\" even after edits. The most likely cause:", opts: ["Wrong model", "The sentence rhythm is perfectly parallel \u2014 AI defaults to 15\u201320 word sentences. Breaking rhythm with short fragments + varied sentence lengths is the fix", "Grammar issues", "Font"], correct: 1 },
    { q: "The \"brand name removal test\" applied to edited AI copy means:", opts: ["Delete the brand", "Check: if you remove the brand name, could the copy still describe your competitor? If yes, you haven\u2019t added enough specificity \u2014 the copy is still generic", "Test with different brands", "Copy fails always"], correct: 1 },
    { q: "Rank these edits by impact on AI-default output: (A) fix typos, (B) add one named customer + outcome, (C) change font weight, (D) delete 3 adjectives", opts: ["A > B > C > D", "B > D >> A > C \u2014 named specifics + adjective cuts are the two high-leverage moves; typos and font don\u2019t change the copy\u2019s fundamental quality", "C > A > B > D", "All equal"], correct: 1 },
    { q: "The final editing move before shipping AI-drafted copy should always be:", opts: ["Another AI pass", "Read it aloud \u2014 AI copy has a tell-tale cadence that\u2019s audible when spoken; if it sounds like a brochure, rewrite until it sounds like a human", "Check word count", "Run it through a grammar checker"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 3", title: "Editing AI Drafts", titleAccent: "Like a Pro", subtitle: "The craft of turning AI\u2019s commodity first draft into shippable copy. What to keep, what to cut, what to rewrite.", meta: "AI-Powered Copywriting  |  Module 3  |  7 Slides" },
    { type: "stats", eyebrow: "WHY EDITING IS THE REAL SKILL", title: "The copywriter of 2026 spends more time editing than generating", intro: "AI produces competent first drafts fast. Turning those drafts into shippable, voice-consistent, specific copy is the actual work. Editing is where the human advantage compounds.", stats: [
      { num: "30\u201360 min", label: "typical editing time per 1,000-word AI draft to reach shippable quality" },
      { num: "6\u20138x", label: "output volume difference between writers who edit AI well vs those who edit badly" },
      { num: "3x", label: "engagement lift on AI drafts that have been aggressively edited for specificity vs those shipped nearly-raw" },
    ], subheading: "What Good Editing of AI Output Does", bullets: [
      "Removes the tell-tale AI cadence and vocabulary",
      "Replaces generic claims with specific proof points only you have",
      "Restores your voice by varying sentence length, breaking parallel structure, adding your vocabulary",
      "Verifies every claim \u2014 AI fabricates plausible-sounding facts constantly",
    ] },
    { type: "grid", eyebrow: "THE AI TELLS", title: "6 fingerprints that give AI-written copy away", subtitle: "Your readers might not name them, but they feel them. Every one of these compounds into \u201Cthis feels like an ad\u201D.", items: [
      { num: "01", title: "Adjective Stacks", desc: "\"Innovative, cutting-edge, seamless, powerful\u2026\" 3+ adjectives in a row = AI signature.", icon: "\u{1F3F7}\uFE0F" },
      { num: "02", title: "Hedging Language", desc: "\"Can help\", \"may improve\", \"often results in\". AI hedges to avoid being wrong; humans commit.", icon: "\u2797" },
      { num: "03", title: "Perfect Parallel Structure", desc: "3 sentences of near-identical length and structure. AI\u2019s rhythm is too regular; humans vary.", icon: "\u25FE" },
      { num: "04", title: "Cliché Openers", desc: "\"In today\u2019s fast-paced world\", \"Let\u2019s face it\", \"We\u2019ve all been there.\" Opening tells.", icon: "\u{1F4DD}" },
      { num: "05", title: "Zero Named Specifics", desc: "No named customers, no real numbers, no specific dates. Vague proof = AI proof.", icon: "\u2753" },
      { num: "06", title: "\"Unlock\" and \"Empower\" Verbs", desc: "\"Unlock your potential\", \"empower your team\". AI\u2019s verb vocabulary is distinct and banned.", icon: "\u{1F511}" },
    ], footer: "Rule: if any 3 of these appear in your AI draft, start over with the edit pass. Surface-level polish won\u2019t rescue it." },
    { type: "principle", num: "01", title: "The 3-Pass Edit", intro: "Trying to edit everything at once produces bad edits. Separate passes for separate goals. Each pass has a specific job \u2014 and compounds into output that reads as human-written.", sectionTitle: "The 3 Passes", sections: [
      { heading: "Pass 1: Specificity Pass", example: "Delete every vague adjective. Replace \"innovative\" with a specific mechanism. Replace \"many customers\" with a named customer + number. Every claim gets a proof point.", note: "This is the highest-leverage pass. Most of the \"AI feel\" dissolves here." },
      { heading: "Pass 2: Voice Pass", example: "Break parallel sentence rhythm. Add fragments. Rewrite 2\u20133 sentences in your distinctive voice. Remove words from your personal blacklist.", note: "Voice is the sum of small choices. No amount of AI output will have your voice until you add it." },
      { heading: "Pass 3: Fact-Check Pass", example: "Verify every claim, every stat, every quote, every named source. AI fabricates plausible specifics constantly \u2014 trust nothing without verification.", note: "Shipping AI-fabricated facts destroys credibility. This pass is non-negotiable." },
    ], rule: "Never collapse the 3 passes into one. Run them sequentially. Output quality jumps dramatically." },
    { type: "comparison", eyebrow: "AI DRAFT vs EDITED", title: "Before and after the 3-pass edit", subtitle: "Same AI draft, same brief. One ships \"as-is\" (generic commodity). One runs through the 3-pass edit (specific, voice-consistent, shippable).", left: { title: "AI Draft (Shipped Raw)", color: "#EF4444", items: [
      { strong: "\"Innovative SaaS solutions empower modern businesses to unlock unprecedented growth and productivity.\"", note: "4 adjective-stacked AI words. Zero specifics. Could describe any SaaS." },
      { strong: "\"Our platform helps teams achieve better results through cutting-edge technology.\"", note: "Hedging (\"helps\"). Vague (\"teams\", \"better\", \"cutting-edge\"). Empty." },
      { strong: "\"Join thousands of satisfied customers who have transformed their workflow.\"", note: "Unfalsifiable social proof. No named customer. No outcome." },
      { strong: "\"Get started today and take your business to the next level.\"", note: "Cliché close. Generic benefit. No friction removal. No specifics." },
    ] }, right: { title: "AI Draft (After 3-Pass Edit)", color: "#10B981", items: [
      { strong: "\"B2B sales teams without a BDR double reply rate in 30 days using 9 pre-tested sequences.\"", note: "Audience + outcome + timeframe + mechanism. Every adjective was cut." },
      { strong: "\"847 Series-A SaaS teams switched to us in 2025. Median close cycle: -34% in 90 days.\"", note: "Named cohort + specific number + specific timeframe. Falsifiable. Citable." },
      { strong: "\"Priya at Zendesk: 14\u21922 min triage time in 3 weeks. Screenshot + the 3 changes she made.\"", note: "Named person + specific outcome + proof artefact promised. Zero hedging." },
      { strong: "\"Start free \u2014 import sequences in 4 min, no engineering. First meeting booked this week.\"", note: "Benefit CTA + friction remover + specific time-to-value. Close that converts." },
    ] }, footer: "Same AI draft, same length. One converts 3\u20135\u00D7 better than the other. The edit is what earns the output." },
    { type: "table", title: "The Banned Words List", subtitle: "These words and phrases signal AI-default writing. Cut them during Pass 1. Your copy improves instantly.", columns: ["Banned Word/Phrase", "Why", "Replacement Strategy"], rows: [
      ["Unlock / Empower / Leverage / Unleash", "Verb vocabulary AI defaults to", "Use specific action verbs: cut, build, reduce, ship, double, replace"],
      ["Innovative / Cutting-edge / Revolutionary", "Adjective soup", "Replace with a specific mechanism or outcome"],
      ["Seamless / Effortless / Smooth", "Empty benefit descriptors", "Name the specific friction you remove (e.g., \"no engineering required\")"],
      ["\"In today\u2019s fast-paced world\"", "Cliché opener", "Lead with a specific moment, number, or contrarian claim"],
      ["\"Can help / may / often / typically\"", "Hedging = uncertainty", "Commit: \"cuts by X%\" > \"can help reduce\""],
      ["\"Thousands of satisfied customers\"", "Unfalsifiable + vague", "Name a specific customer + specific outcome, or give a specific number"],
      ["\"Take your business to the next level\"", "Cliché close", "Specific benefit + friction removal + next step"],
    ], footer: "Rule: keep this list open in a tab while editing. Every hit is an opportunity to upgrade the copy." },
    { type: "exercise", title: "Run the 3-Pass Edit on a Recent AI Draft", intro: "Take a recent piece of AI-generated copy. Run it through the 3 passes. Time the whole thing.", items: [
      { num: "1", copy: "Pass 1 (Specificity): find every adjective stack + hedge + vague claim. Replace with specific number/name/mechanism. Time yourself.", answer: "Most drafts have 5\u201310 instances of adjective soup per 500 words. Each replacement takes 30 seconds with good materials ready. Total: 5\u201315 min." },
      { num: "2", copy: "Pass 2 (Voice): find the sentences that sound parallel/robotic. Rewrite 2\u20133 with fragments, variable length, your vocabulary.", answer: "This is the pass where your copy becomes RECOGNISABLY YOURS. Skipping this pass is why AI drafts feel flat even when specifics are added." },
      { num: "3", copy: "Pass 3 (Fact-check): verify every claim, stat, quote, and name. Google or check your source material.", answer: "AI fabricates plausible specifics. A claim that can\u2019t be verified must be cut or replaced with a verifiable equivalent \u2014 non-negotiable." },
      { num: "4", copy: "Read aloud. Does it sound like a person \u2014 specifically, like YOU \u2014 or does it sound like a brochure?", answer: "If it sounds like a brochure, run Pass 2 again. Reading aloud is the final test AI output must pass before shipping." },
    ] },
  ],
};
