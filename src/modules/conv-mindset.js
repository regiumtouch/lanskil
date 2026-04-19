// Conversion Copy — Module 1: The Conversion Mindset
export const convMindsetModule = {
  id: "conv01",
  title: "The Conversion Mindset",
  type: "Rich Module",
  duration: "90 min",
  desc: "Conversion copy plays by different rules. Learn the psychology of a visitor at the decision moment \u2014 and why \u2018good copy\u2019 from awareness stages often loses here.",
  topics: ["Visitor Intent Stages", "Awareness vs Decision", "Friction Anatomy", "The Conversion Moment", "Trust Architecture", "Mistakes That Kill Conversions"],
  quiz: [
    { q: "A visitor arrives at a pricing page from a Google search for \"[your competitor] alternative.\" Their mindset is best described as:", opts: ["Early awareness, needs education", "Late-stage commercial investigation \u2014 already decided the category, now choosing a vendor", "Transactional, ready to buy", "Random browsing"], correct: 1 },
    { q: "Same content: one version leads with brand story, the other with outcome + specific number. Which performs better on a commercial-intent landing page?", opts: ["Brand story \u2014 builds trust first", "Outcome + number \u2014 commercial-intent visitors want the verdict fast; brand story buries the answer", "They perform equally", "Neither works"], correct: 1 },
    { q: "Friction on a landing page is best measured by:", opts: ["Page load time alone", "The sum of cognitive + emotional + operational steps between landing and converting \u2014 unanswered objections, extra form fields, and missing proof each add friction", "Word count", "Number of images"], correct: 1 },
    { q: "A landing page has a strong hero but 60% of visitors never scroll past it. Most likely cause:", opts: ["Page is too long", "The hero either doesn\u2019t resolve the visitor\u2019s intent OR is strong but offers no reason to keep reading \u2014 both usually an above-the-fold problem", "Too many images", "Wrong font"], correct: 1 },
    { q: "Awareness-stage copy (blog posts, top-of-funnel) and conversion-stage copy (landing pages) differ because:", opts: ["They\u2019re basically the same", "Awareness visitors are learning; conversion visitors are deciding. Deciding visitors need proof, specificity, and friction removal \u2014 not education", "Only length differs", "Conversion copy must always be shorter"], correct: 1 },
    { q: "The single biggest conversion copy mistake is:", opts: ["Using too many colors", "Writing copy that describes the product instead of what the visitor gets \u2014 feature-first copy loses to outcome-first copy every time", "Not enough animations", "Wrong font size"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "The Conversion", titleAccent: "Mindset", subtitle: "Conversion copy plays by different rules. Visitor intent at the decision moment decides everything \u2014 not your eloquence.", meta: "Conversion Copy & Landing Pages  |  Module 1  |  7 Slides" },
    { type: "stats", eyebrow: "WHY CONVERSION IS DIFFERENT", title: "Your visitor is not reading. They're deciding.", intro: "Conversion copy sits at the most commercial moment in the funnel. The visitor arrived with an intent; your page either resolves it in seconds or they leave. This is not about persuasion; it\u2019s about clarity under pressure.", stats: [
      { num: "8 sec", label: "average time a visitor spends deciding whether to engage with a landing page" },
      { num: "60\u201380%", label: "of landing page visitors never scroll past the fold" },
      { num: "2\u20134\u00D7", label: "conversion lift from matching copy to visitor intent vs generic value prop" },
    ], subheading: "The Three Things Visitors Need", bullets: [
      "A clear confirmation they landed in the right place \u2014 in the first 3 seconds",
      "A specific outcome promise they believe \u2014 in the first 10 seconds",
      "A frictionless path to the next step \u2014 in the first 30 seconds",
      "Everything else on the page is either supporting one of the above, or it's noise",
    ] },
    { type: "grid", eyebrow: "WHO IS ON YOUR PAGE", title: "Three visitor stages, three different conversion copy approaches", subtitle: "Same company can serve all three with different pages. Mismatched stage = misfired copy.", items: [
      { num: "01", title: "Awareness", desc: "\"Is this even relevant to me?\" Needs education, framing, problem recognition. Blog posts and top-of-funnel content live here.", icon: "\u{1F441}\uFE0F" },
      { num: "02", title: "Consideration", desc: "\"Is this better than alternatives?\" Comparison-driven. Wants feature clarity, pricing context, and differentiation.", icon: "\u2696\uFE0F" },
      { num: "03", title: "Decision", desc: "\"Should I take this action now?\" Needs proof, risk reversal, and friction-minimised next step. This is conversion copy territory.", icon: "\u{1F3AF}" },
    ], footer: "Rule: conversion copy serves Decision-stage visitors. Visitors in Awareness or Consideration need a different page \u2014 route them there, don\u2019t force them down a funnel stage early." },
    { type: "principle", num: "01", title: "The Conversion Moment \u2014 What Actually Happens", intro: "When a visitor hits your page at decision stage, a high-stakes psychological moment unfolds in under 10 seconds. Understanding this moment is the prerequisite to writing copy that wins it.", sectionTitle: "The 4 Questions Every Visitor Asks (Silently)", sections: [
      { heading: "1. Am I in the right place?", example: "Your hero answers this \u2014 or they leave. Must confirm the specific intent that brought them.", note: "If they searched \u201Cemail marketing for nonprofits\u201D your hero must mirror that exact framing." },
      { heading: "2. Do they understand MY situation?", example: "Language, role, and stage must match what they\u2019d say about their own problem.", note: "Generic \u201Cgrow your business\u201D copy fails here. Role-specific pain = instant recognition." },
      { heading: "3. Can I trust this?", example: "Social proof, specific numbers, named customers visible on first scroll.", note: "Trust is earned fast or not at all. Logos alone don\u2019t do it \u2014 named people and specific outcomes do." },
      { heading: "4. What\u2019s the risk if I take the next step?", example: "Risk reversal (free trial, no card, money-back) sits next to the CTA, not buried in fine print.", note: "Visitors calculate commitment cost continuously. Remove cost, conversion lifts." },
    ], rule: "Every element on your landing page should answer at least one of these four questions. If it answers none, cut it." },
    { type: "comparison", eyebrow: "AWARENESS vs DECISION COPY", title: "Same product, two pages \u2014 and why one converts", subtitle: "The awareness-stage copy works for blog traffic. The decision-stage copy works for ad / warm traffic. Mismatched, both fail.", left: { title: "Awareness-Stage Copy (on a Landing Page)", color: "#EF4444", items: [
      { strong: "\"What is CRM software and why does your team need it?\"", note: "Education-led. Wastes the decision visitor\u2019s time." },
      { strong: "\"Our story began in 2014...\"", note: "Founder narrative. Relevant on About page; fatal on conversion page." },
      { strong: "3 paragraphs explaining what a CRM does", note: "Decision-stage visitors already know. They want the verdict." },
      { strong: "Soft CTA: \"Learn more about CRMs\"", note: "Re-enters the funnel without converting. Loses the warm traffic." },
    ] }, right: { title: "Decision-Stage Copy (Conversion Page)", color: "#10B981", items: [
      { strong: "\"The CRM 847 B2B teams switched to after Salesforce quoted $180K/yr.\"", note: "Specific outcome + specific comparison + specific audience = instant intent match." },
      { strong: "Social proof visible above-the-fold: named customer + result", note: "Trust earned in seconds. Not founder story \u2014 customer story." },
      { strong: "Clear next step with risk reversal: \"Start free \u2014 no card, 90-second setup\"", note: "Commitment cost removed. Friction at the CTA step = zero." },
      { strong: "Pricing transparent, compared to alternatives", note: "Commercial-investigation visitors know the competitor\u2019s price. Being upfront builds trust." },
    ] }, footer: "The awareness page teaches. The decision page converts. You need both; you need them on different URLs." },
    { type: "table", title: "The 6 Friction Sources That Kill Conversions", subtitle: "Every one of these adds a reason to leave. Audit your page against each one.", columns: ["Friction Source", "Why It Hurts", "Fix"], rows: [
      ["Unanswered objections", "Visitors calculate risk; unaddressed doubt = no conversion", "Address top 3 objections inline, next to the CTA"],
      ["Extra form fields", "Each additional field drops conversion rates", "Collect only what you need for the FIRST step; enrich later"],
      ["Pricing hidden behind \u2018contact sales\u2019", "Signals \u2018expensive\u2019 + adds commitment before information", "Show prices publicly; hide-the-price is a last-resort move"],
      ["Vague social proof (\"Trusted by many\")", "Cannot be verified; adds no signal", "Name specific customers with specific outcomes"],
      ["Long form above-the-fold before value prop", "Visitor can\u2019t find the answer to \"am I in the right place?\"", "Hero in first 600px; outcome + specific in 10 words"],
      ["Risk hidden, not removed", "\"Try risk-free\" without specific guarantee = empty promise", "Explicit: \"30-day refund, 1-click cancel, no sales call\""],
    ], footer: "Audit your top landing page right now against this table. Most pages have 3+ sources; fixing them typically 20\u201360%s conversion." },
    { type: "exercise", title: "The 10-Minute Landing Page Intent Audit", intro: "Pick one of your landing pages. Answer each question honestly. Where you answer \u201Cunclear\u201D or \u201Cno\u201D, that\u2019s your priority fix.", items: [
      { num: "1", copy: "In 5 seconds, can a first-time visitor tell what specifically they\u2019ll get by taking the primary CTA? If not \u2014 your hero/value prop is failing.", answer: "If the answer isn\u2019t crystal in the hero + subhead, rewrite them. Outcome + specificity + audience \u2014 in that order." },
      { num: "2", copy: "In 10 seconds, can they tell why THEY specifically (their role, stage, situation) should trust this?", answer: "If trust signals are generic logos or vague \u201Ctrusted by leaders,\u201D replace with named customer + specific outcome." },
      { num: "3", copy: "At the CTA, what\u2019s the visitor\u2019s perceived risk? Is there explicit, specific risk reversal within 150px?", answer: "If risk isn\u2019t addressed at the commitment moment, add a line: \"30-day refund, 1-click cancel, no sales call.\"" },
      { num: "4", copy: "List the top 3 objections you know visitors have. Are any of them addressed inline on the page?", answer: "Price, implementation time, and \"will it work for me\" are the universal B2B three. Address them next to the price, CTA, and primary benefit respectively." },
    ] },
  ],
};
