// Brand Voice & Positioning — Module 2: The Voice Audit
export const voiceAuditModule = {
  id: "voice02",
  title: "The Voice Audit",
  type: "Rich Module",
  duration: "90 min",
  desc: "Before you build a voice guide, diagnose what's already there. A real audit reveals the voice hidden in your existing copy \u2014 and the drift pulling it apart.",
  topics: ["Audit Methodology", "Corpus Selection", "Pattern Extraction", "Voice Drift Detection", "Consistency Scoring", "The Audit Report"],
  quiz: [
    { q: "A proper brand voice audit starts with:", opts: ["A workshop with leadership", "A corpus \u2014 20\u201350 real published pieces from the last 12 months across channels \u2014 analysed for actual patterns, not aspirational ones", "A logo review", "A competitor comparison"], correct: 1 },
    { q: "\u201CVoice drift\u201D in a corpus means:", opts: ["Content loss", "Different pieces from the same brand exhibit different voices \u2014 usually because multiple writers shipped without alignment; audit surfaces drift so you can fix it", "Improved flexibility", "Typos"], correct: 1 },
    { q: "When sampling for audit, you should include:", opts: ["Only the best-performing pieces", "A representative mix: top performers + average performers + some losers, across channels (blog, social, email, ads, support) \u2014 the losers reveal drift", "Only blog posts", "Only internal documents"], correct: 1 },
    { q: "A voice consistency score below 40% across a corpus indicates:", opts: ["Healthy diversity", "Severe drift \u2014 multiple writers without a shared voice; the brand is effectively voiceless to readers who encounter multiple pieces", "Normal operations", "Above-average writing"], correct: 1 },
    { q: "The audit report should include:", opts: ["Just numbers", "The recurring patterns found + specific example phrases + consistency score across dimensions + concrete recommendations for the voice guide that follows", "A 5-star rating", "Logos only"], correct: 1 },
    { q: "A voice audit for a brand with 3 years of content typically takes:", opts: ["30 minutes", "8\u201320 hours of focused work \u2014 longer for bigger corpora; this is not a delegation task, it\u2019s close reading by someone skilled in voice analysis", "5 days", "Cannot be done"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 2", title: "The Voice", titleAccent: "Audit", subtitle: "Before you build a voice guide, diagnose what\u2019s already there. A proper audit reveals the voice hidden in existing copy \u2014 and the drift pulling it apart.", meta: "Brand Voice & Positioning  |  Module 2  |  7 Slides" },
    { type: "stats", eyebrow: "WHY AUDIT FIRST", title: "Most teams build voice guides without auditing current voice \u2014 and end up with aspirational fiction", intro: "The voice guide you build is only as useful as it is connected to reality. Auditing first reveals what\u2019s actually there, what\u2019s drifted, and what\u2019s been working. From there you can preserve, amplify, or reform.", stats: [
      { num: "79%", label: "of brands exhibit measurable voice drift across their corpus when audited" },
      { num: "4\u00D7", label: "faster for new writers to absorb voice when trained on auditing existing corpus vs reading an abstract guide" },
      { num: "20\u201340 hrs", label: "typical time for a thorough audit of a 3\u2013year-old content corpus" },
    ], subheading: "What a Good Audit Produces", bullets: [
      "A map of what voice actually exists across different channels, writers, and time periods",
      "Specific example phrases that represent the voice at its strongest",
      "Quantified drift metrics so the team sees the cost of inconsistency",
      "A foundation document for the voice guide that follows \u2014 grounded in reality, not aspiration",
    ] },
    { type: "grid", eyebrow: "THE 5 AUDIT STEPS", title: "The sequence for a rigorous voice audit", subtitle: "Each step builds on the previous. Shortcuts here produce audits that miss the voice they were meant to find.", items: [
      { num: "01", title: "Corpus Selection", desc: "Choose 20\u201350 representative pieces across channels, authors, and performance tiers. Sample broadly.", icon: "\u{1F4DA}" },
      { num: "02", title: "Close Reading", desc: "Read everything carefully. Annotate recurring patterns. Note deviations. Slow work; high leverage.", icon: "\u{1F50D}" },
      { num: "03", title: "Pattern Extraction", desc: "Catalogue recurring vocabulary, rhythm choices, rhetorical moves, POV statements. Quantify frequency.", icon: "\u{1F522}" },
      { num: "04", title: "Drift Detection", desc: "Identify pieces or sections that violate the patterns. Group by drift type (channel, author, time period).", icon: "\u26A0\uFE0F" },
      { num: "05", title: "Audit Report", desc: "Write up patterns + drift + consistency score + specific recommendations. Deliverable feeds the voice guide.", icon: "\u{1F4CB}" },
    ], footer: "Rule: a rigorous audit takes days, not hours. Teams that compress this step end up with voice guides disconnected from reality." },
    { type: "principle", num: "01", title: "Corpus Selection \u2014 The Audit Starts With What You Choose to Read", intro: "An audit is only as good as the corpus it\u2019s built on. Bias the corpus toward one channel or one author and you\u2019ll describe a voice that doesn\u2019t exist in the wild. Sample for breadth.", sectionTitle: "The 4 Dimensions to Sample Across", sections: [
      { heading: "1. Channels", example: "Blog posts (long-form), email (mid-form), social (short), product copy, support replies, ad copy. All represented.", note: "Voice drifts badly across channels. Auditing only blog or only social produces a partial picture." },
      { heading: "2. Authors", example: "If 5 writers produce content, include pieces from each. If only 1 writer, include pieces across time.", note: "Multi-writer teams drift per-author. Single-writer teams drift per time-period. Both produce different voices \u2014 sample for both." },
      { heading: "3. Performance tiers", example: "Top-10% performers + average + bottom-10%. Include the losers \u2014 they reveal drift.", note: "Top performers show voice working. Losers show voice drifting. Both are audit signal." },
      { heading: "4. Time periods", example: "If the corpus spans 3 years, sample across quarters. Don\u2019t weight only recent work.", note: "Voice drifts with team changes, strategy pivots, and hiring cycles. Time-period sampling catches these." },
    ], rule: "A 20-piece corpus that samples across all 4 dimensions is stronger than a 100-piece corpus that sampled only one channel or author." },
    { type: "comparison", eyebrow: "SHALLOW vs RIGOROUS AUDIT", title: "Same brand, two audit approaches", subtitle: "One delivers a useless document. One delivers the foundation for real voice work.", left: { title: "Shallow Audit (Fast but Hollow)", color: "#EF4444", items: [
      { strong: "Read 5 blog posts + write an impression", note: "Sample bias: single channel, recent only. Misses drift entirely." },
      { strong: "Describe voice with adjectives: \u201Chelpful, smart, approachable\u201D", note: "Audit output matches the adjectival voice-guide problem the audit was meant to fix." },
      { strong: "No drift detection, no consistency score", note: "Team has no idea whether the described voice is actually being used \u2014 and no baseline to measure future improvement." },
      { strong: "Deliverable: a 2-page document nobody references again", note: "Voice guide that follows is built on fiction. Downstream copy continues drifting." },
    ] }, right: { title: "Rigorous Audit (Foundation for Real Work)", color: "#10B981", items: [
      { strong: "30 pieces sampled across 4 dimensions (channel, author, performance, time)", note: "Representative. Reveals both what\u2019s consistent AND where the drift lives." },
      { strong: "Patterns catalogued specifically: vocabulary (use + refuse lists), rhythm (measured), rhetorical moves, POV statements", note: "Voice described in terms writers can ACT on, not just feel." },
      { strong: "Consistency score + drift map: 58% consistency, with two clear author-specific drifts + one channel-specific drift (social)", note: "Quantified. Specific. Actionable." },
      { strong: "Deliverable: 15\u201325 page report that becomes the basis for the voice guide and writer onboarding", note: "Real foundation. Downstream work builds on reality, not aspiration." },
    ] }, footer: "Rule: the audit report is the most important document you write in brand voice work. If it\u2019s shallow, everything downstream is hollow." },
    { type: "table", title: "Pattern Extraction \u2014 What to Look For", subtitle: "Your close reading should extract specific patterns in each of these categories. These become the raw material for the voice guide.", columns: ["Pattern Type", "What to Catalogue", "Example"], rows: [
      ["Vocabulary \u2014 used repeatedly", "Specific words/phrases that appear across multiple pieces", "\"Reps,\" \"pipeline,\" \"we shipped,\" \"this year\""],
      ["Vocabulary \u2014 refused", "Words that never appear despite category-standard usage", "\"Solutions,\" \"empower,\" \"leverage\" \u2014 by absence"],
      ["POV statements", "Specific beliefs about the market or category", "\"Most CRMs are overbuilt\" \u2014 stated in 4 of 30 pieces"],
      ["Rhythm", "Avg sentence length, fragment frequency, paragraph length", "Avg 14 words; 8 fragments per 1,000 words; paragraphs 2\u20134 sentences"],
      ["Signature moves", "Recurring rhetorical patterns", "Opening with contrarian claim + specific number \u2014 found in 12 of 30 pieces"],
      ["Opening patterns", "How pieces tend to start", "Hook-first, story-led, not listicle-style"],
      ["Closing patterns", "How pieces tend to end", "Often with a specific question + implicit next step, not a summary"],
    ], footer: "Rule: if a pattern appears in fewer than 3 pieces, it\u2019s not a pattern \u2014 it\u2019s an instance. 3+ occurrences make it a voice element worth cataloguing." },
    { type: "exercise", title: "Audit 10 Pieces \u2014 A Mini Audit", intro: "Before you build a voice guide, run a mini audit. Pick 10 representative pieces from your brand. Spend 3 hours.", items: [
      { num: "1", copy: "Select 10 pieces across at least 2 channels and 2 performance tiers (if available).", answer: "Aim for diversity over quantity. 10 carefully-chosen pieces reveal more than 50 of the same type." },
      { num: "2", copy: "Close-read each piece with a note pad. Catalogue: recurring vocabulary, recurring openers, recurring rhetorical moves.", answer: "Patterns emerge around piece 6\u20137. If they don\u2019t, it means drift is high \u2014 which is itself a finding worth reporting." },
      { num: "3", copy: "Write the \u201Cuse\u201D list: 10 words/phrases that recur across pieces. Write the \u201Crefuse\u201D list: 5 category-standard words never used.", answer: "These two lists are the skeleton of your voice guide\u2019s vocabulary section. They\u2019re more useful than any adjective list." },
      { num: "4", copy: "Score overall consistency on a 1\u201310 scale. Write one paragraph summarising what the audit reveals.", answer: "This is your baseline. The work that follows \u2014 the voice guide, the writer onboarding \u2014 should measurably improve this score within 6 months." },
    ] },
  ],
};
