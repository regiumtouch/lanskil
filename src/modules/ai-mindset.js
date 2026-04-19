// AI-Powered Copywriting — Module 1: AI as Scaffolding, Not Ceiling
export const aiMindsetModule = {
  id: "ai01",
  title: "AI as Scaffolding, Not Ceiling",
  type: "Rich Module",
  duration: "90 min",
  desc: "The correct posture toward AI in 2026. Use it for the commodity 80% of copy work; keep the irreplaceable 20% \u2014 voice, insight, and specifics \u2014 human.",
  topics: ["The Scaffolding Mindset", "What AI Does Well", "What AI Cannot Do", "The 80/20 Allocation", "Ethical Disclosure", "Voice Preservation"],
  quiz: [
    { q: "The best mental model for AI in a copywriting workflow is:", opts: ["Replace the writer entirely", "A sharp junior copywriter \u2014 great for first drafts, generic without direction, never trusted with the final voice or angle", "Only for grammar checks", "Avoid entirely"], correct: 1 },
    { q: "AI-generated copy most reliably fails at:", opts: ["Grammar", "Specificity, opinion, first-hand experience, and voice \u2014 these require access to real human experience AI doesn\u2019t have", "Word count", "Length"], correct: 1 },
    { q: "A copywriter who accepts AI\u2019s first draft as final typically produces:", opts: ["Excellent copy", "Copy that\u2019s technically correct but indistinguishable from the statistical average of the internet \u2014 bland, unmemorable, low-conversion", "The best copy possible", "Short enough copy"], correct: 1 },
    { q: "The 80/20 allocation for AI-powered copy is:", opts: ["80% AI, 20% human means human just reviews", "AI does the commodity 80% (structure, first drafts, variant generation); human does the irreplaceable 20% (voice, specificity, insight, opinion)", "80% human, 20% AI means AI just edits", "Split is meaningless"], correct: 1 },
    { q: "When should a piece of copy include AI disclosure?", opts: ["Never", "Depends on the context and the norms of the publication/audience; full disclosure when audience expects it, minimal when AI is just one of many tools used in craft", "Always, in every sentence", "Only for images"], correct: 1 },
    { q: "The risk of over-using AI for copy is:", opts: ["No risk", "Voice drift \u2014 every piece subtly averages toward AI-default patterns, and within a year the brand voice becomes indistinguishable from competitors", "Too much content", "Too few words"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "AI as Scaffolding,", titleAccent: "Not Ceiling", subtitle: "The correct posture toward AI in 2026. Use it for the commodity 80%. Keep the irreplaceable 20% \u2014 voice, insight, and specifics \u2014 human.", meta: "AI-Powered Copywriting  |  Module 1  |  7 Slides" },
    { type: "stats", eyebrow: "WHY THE MINDSET MATTERS", title: "AI is a tool. The posture you take toward it decides whether it 5x's your output or flattens your voice", intro: "The copywriters who will thrive in the AI era don\u2019t treat AI as a replacement OR as an enemy. They treat it as scaffolding \u2014 something that supports the writing process so the writer can focus on what only a writer can do.", stats: [
      { num: "5\u00D7", label: "typical productivity gain for copywriters using AI well; 1\u00D7 or negative for those using it badly" },
      { num: "64%", label: "of CMOs in 2025 report AI-generated content is diluting their brand authority" },
      { num: "3\u00D7", label: "engagement lift on content with named specifics + first-hand stories vs AI-default generic content" },
    ], subheading: "The Three Postures \u2014 And Which One Wins", bullets: [
      "\"AI is my replacement\" \u2014 results in mass-produced, bland, low-conversion copy; commodity outputs",
      "\"AI is my enemy\" \u2014 results in 5\u00D7 the writing time of competitors; unsustainable long-term",
      "\"AI is my scaffolding\" \u2014 results in 3\u20135\u00D7 output velocity without voice degradation; the winning posture",
    ] },
    { type: "grid", eyebrow: "WHAT AI DOES WELL", title: "The commodity 80% of copy work AI handles fast and accurately", subtitle: "These are the tasks where using AI saves hours per week with no quality downside.", items: [
      { num: "01", title: "Structural First Drafts", desc: "Given a clear brief, AI produces a serviceable first draft faster than you can stare at a blank page.", icon: "\u{1F4C4}" },
      { num: "02", title: "Variant Generation", desc: "\"Give me 10 versions of this hook\" \u2014 AI is excellent at variation within a voice you\u2019ve already established.", icon: "\u267B\uFE0F" },
      { num: "03", title: "Compression + Editing", desc: "\"Cut this from 300 words to 150 without losing the core claim.\" AI handles this task well and fast.", icon: "\u2702\uFE0F" },
      { num: "04", title: "Format Adaptation", desc: "\"Rewrite this blog post as an email / social thread / ad copy.\" Good for first-pass cross-channel adaptation.", icon: "\u{1F504}" },
    ], footer: "Rule: tasks that are commodity + structural + time-consuming are AI\u2019s strongest use cases. Apply there first." },
    { type: "principle", num: "01", title: "What AI Cannot Do (And Why That Matters)", intro: "The failures of AI copy aren\u2019t technical \u2014 they\u2019re structural. AI optimises for the statistical average of the internet. Anything that requires access to YOUR specific first-hand experience, YOUR specific opinion, or YOUR specific customer data remains irreplaceably human.", sectionTitle: "The 4 Things AI Cannot Replace", sections: [
      { heading: "1. First-hand specifics", example: "\"Priya at Zendesk cut triage from 14\u21922 min in 3 weeks.\" AI can\u2019t generate this without you feeding it the data.", note: "The named customer + exact numbers + specific timeframe is what makes copy citable and trustworthy. AI doesn\u2019t know your customers." },
      { heading: "2. Genuine opinions / POV", example: "\"Most PM tools have 47 tabs. We built one. Here\u2019s why.\" AI averages toward consensus; opinions require taking a side.", note: "AI trained on millions of websites defaults to the middle. Your POV is the differentiator; AI cannot originate it." },
      { heading: "3. Voice that recognisably is yours", example: "Your rhythm, vocabulary blacklist, rhetorical tics \u2014 the sum of what makes your copy recognisable.", note: "AI can mimic a voice AFTER you\u2019ve given it examples; it cannot originate a voice. And over-using AI flattens the voice you had." },
      { heading: "4. Weird, surprising, specific details", example: "\"At 11:47pm on a Thursday, the CTO finally Slacked the 3,400-word message.\" The detail that could only come from you being there.", note: "AI generates plausible detail. Plausible is the enemy of memorable. The WEIRD detail is what makes writing land." },
    ], rule: "If a piece of copy could have been written by any competitor using AI, you haven\u2019t done the human part of the work. Add what only you could add." },
    { type: "comparison", eyebrow: "AI-DEFAULT vs HUMAN-CRAFTED", title: "Same brief, two outputs", subtitle: "Same brief fed to AI vs brief executed with AI as scaffold. The difference is the 20% where a human added what AI can\u2019t.", left: { title: "AI-Default Output (Commodity)", color: "#EF4444", items: [
      { strong: "\"Empower your team with our innovative platform.\"", note: "Adjective soup. Describes any competitor equally." },
      { strong: "\"Join thousands of satisfied customers.\"", note: "Unfalsifiable. No name, no number, no specific outcome." },
      { strong: "\"Cutting-edge features designed for modern teams.\"", note: "Describes the product abstractly. Reader can\u2019t picture anything." },
      { strong: "\"Get started today and transform your workflow.\"", note: "Generic CTA with no benefit, no friction removal, no specificity." },
    ] }, right: { title: "Human-Crafted With AI Scaffolding", color: "#10B981", items: [
      { strong: "\"B2B sales teams without a BDR double reply rate in 30 days \u2014 with 9 templates we\u2019ve tested on 847 teams.\"", note: "Specific audience + specific outcome + specific proof + specific mechanism." },
      { strong: "\"Priya Sharma at Zendesk went from 3.1% reply rate to 7.4% in 6 weeks using these sequences.\"", note: "Named customer + specific number + specific timeframe. AI can\u2019t fake this." },
      { strong: "\"Most outbound tools generate 47 templates. We ship 9. The ones that actually worked in 2026.\"", note: "Contrarian opinion + specific number + specific time. AI wouldn\u2019t take this stance without a human's direction." },
      { strong: "\"Start free \u2014 import your first sequence in 4 min. First meeting booked within the week.\"", note: "Benefit-led CTA + friction remover + specific time-to-value." },
    ] }, footer: "Same product. Same AI. Completely different outputs. The gap is 20% of the writer\u2019s time \u2014 adding the irreplaceable specifics." },
    { type: "table", title: "The AI-or-Human Decision Matrix", subtitle: "For each copy task, is this an AI job, a human job, or a hybrid? The right allocation saves hours and preserves voice.", columns: ["Task", "AI / Human / Hybrid", "Why"], rows: [
      ["First-draft structure of a blog post", "AI", "Commodity. Fast. Low quality stakes at draft stage."],
      ["Hook / headline for conversion-critical pieces", "Hybrid", "AI generates variants; human picks + refines."],
      ["Named customer story / case study", "Human", "Requires access to the customer. AI can\u2019t fabricate real specifics."],
      ["Email subject line variants for A/B test", "AI", "Variation within established voice is AI\u2019s strength."],
      ["Opinion piece / brand POV", "Human", "POV requires committing to a stance \u2014 AI defaults to consensus."],
      ["Compression / rewriting long \u2192 short", "AI", "Task-specific transformation; low voice risk."],
      ["Final close / CTA of a sales page", "Human", "The 10% of the page doing 40% of the work; voice and conviction matter."],
      ["Translating tone from formal to casual", "Hybrid", "AI handles the transformation; human preserves the voice."],
    ], footer: "Rule: use this matrix to allocate. You\u2019ll save 40\u201360% of your writing time AND preserve quality where it matters." },
    { type: "exercise", title: "Audit Your Current AI Usage", intro: "List the last 10 pieces of copy you produced. For each, categorise what % was AI-generated vs human-generated.", items: [
      { num: "1", copy: "For each piece, note: AI % / Human %. Be honest.", answer: "If AI % > 70%, the piece likely reads as commodity. Check: does it have named specifics, genuine opinions, and your voice?" },
      { num: "2", copy: "Identify 1 piece where you used AI for something in the human column of the matrix (named customer story, brand POV, final close).", answer: "That\u2019s the piece most likely underperforming. Rewrite the AI-generated parts with your own voice + specifics." },
      { num: "3", copy: "Identify 1 piece where you used 100% human on something AI handles well (structural first draft, variant generation, compression).", answer: "That\u2019s the piece where you\u2019re leaving productivity on the table. Next time, let AI do the scaffolding." },
      { num: "4", copy: "Write your personal AI usage rules \u2014 when you\u2019ll use AI, when you won\u2019t. Pin them where you write.", answer: "Example: \"AI for: first drafts, variants, compression. NEVER AI for: named customer stories, brand POV pieces, final close copy.\"" },
    ] },
  ],
};
