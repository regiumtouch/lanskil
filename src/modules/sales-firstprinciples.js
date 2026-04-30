// Sales Pages & Direct Response — Module 1: Direct Response First Principles
export const salesFirstPrinciplesModule = {
  id: "sales01",
  title: "Direct Response First Principles",
  type: "Rich Module",
  duration: "90 min",
  desc: "The 120-year-old craft behind every sales page that actually sells. Ogilvy, Halbert, Schwartz \u2014 and why their principles still out-convert modern marketing theory.",
  topics: ["What Direct Response Is", "Brand vs Response", "The Ogilvy/Halbert Canon", "Proof Hierarchy", "The Measurable Sale", "Why DR Still Wins"],
  quiz: [
    { q: "Your team ships a beautifully designed one-page $3,000 course landing. Traffic is cold. Conversion 0.4%. The brand team argues: \u201Cmore copy would cheapen us.\u201D Diagnose using DR first principles:", opts: ["Brand team is right \u2014 length hurts premium positioning", "Conversion is fine, don\u2019t change", "At that price + cold traffic, the reader needs proof, story, and objection handling to commit; short-form is leaving conversion on the table regardless of aesthetics \u2014 length should be a function of what the reader needs to say yes, not of taste", "Lower the price"], correct: 2 },
    { q: "You\u2019re writing a lead for an audience who has tried 3 competing products already. Schwartz-level they\u2019re at:", opts: ["Unaware", "Most-aware", "Problem-aware", "Solution-aware \u2014 they know the category and know competitors; your copy\u2019s job is to differentiate within the category, not to teach the problem or the solution type"], correct: 3 },
    { q: "Halbert\u2019s \u201Cmarket > message > media\u201D means that if you had to choose between a brilliant offer to a cold audience or a mediocre offer to a desperately hungry one:", opts: ["Take the hungry market \u2014 pre-existing demand compensates for offer weakness far more than craft compensates for audience coldness; Halbert\u2019s rule is that starvation beats seasoning", "Take the brilliant offer \u2014 craft always wins", "Don\u2019t take either \u2014 both will fail", "Flip a coin"], correct: 0 },
    { q: "Your sales page has 14 testimonials \u2014 all of the form \u201CGreat product!\u201D \u2014 S.K. Conversion hasn\u2019t moved. DR diagnosis:", opts: ["Add 10 more testimonials", "Generic testimonials without named person + named outcome + timeframe are decoration, not proof; one named case study with numbers would outperform all 14 combined \u2014 volume of weak proof can\u2019t substitute for a single piece of specific proof", "Testimonials don\u2019t work here", "Replace with video only"], correct: 1 },
    { q: "You write a headline that gets 12% higher open rate than the control. A colleague says: \u201Cbut it\u2019s too sales-y, it hurts the brand.\u201D DR-correct reply:", opts: ["They\u2019re right \u2014 pull it", "Stop A/B testing", "Split the difference and tone it down 50%", "DR optimises against measurable response; if opens lift without misleading the reader, the headline earns its place \u2014 brand-taste arguments without measurable cost are usually the expensive-looking-elegant kind of wrong"], correct: 3 },
    { q: "Ogilvy spent 80\u00A2 of every ad dollar on the headline. The underlying principle applied to a modern sales page is:", opts: ["Headlines need to be expensive", "Spend equally everywhere", "Effort per element should match its persuasive load; headline, first 150 words, and close each deserve 5\u201310\u00D7 the revision effort of the body \u2014 most writers invert this and over-polish the body while under-editing the opening", "Hire a headline specialist"], correct: 2 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "Direct Response", titleAccent: "First Principles", subtitle: "The 120-year-old craft behind every sales page that actually sells. Ogilvy, Halbert, Schwartz \u2014 and why their principles still out-convert modern marketing theory.", meta: "Sales Pages & Direct Response  |  Module 1  |  7 Slides" },
    { type: "stats", eyebrow: "WHY DIRECT RESPONSE STILL WINS", title: "A 120-year-old craft out-converts modern marketing theory because the human brain hasn\u2019t changed", intro: "Direct response was born in the catalogues of the late 1800s, refined by Ogilvy in the 1960s, Halbert in the 80s, and is alive and paying rent in every successful sales page today. The principles haven\u2019t changed because the reader\u2019s brain hasn\u2019t changed.", stats: [
      { num: "80\u00A2", label: "of every ad dollar is spent on the headline alone, per Ogilvy \u2014 the first line carries the majority of the work" },
      { num: "5\u00D7", label: "more readers scan the headline than read the body copy" },
      { num: "100+", label: "variants a discipline writer writes before picking the final headline (Ogilvy famously wrote 104 for a Rolls-Royce ad)" },
    ], subheading: "What Direct Response Actually Is", bullets: [
      "Writing designed to produce a specific, measurable action right now \u2014 not brand perception over time",
      "Optimised against response rates (conversion, order, signup) \u2014 not against awards or aesthetics",
      "Honest about commercial intent \u2014 the page is selling, and pretending otherwise loses the sale",
      "Long enough to earn the ask, short enough not to waste the reader\u2019s time \u2014 length serves purpose",
    ] },
    { type: "grid", eyebrow: "THE THREE ICONS", title: "The writers whose principles still decide whether your sales page converts", subtitle: "If you haven\u2019t read Ogilvy, Halbert, and Schwartz, you\u2019re writing sales pages with one hand tied behind your back.", items: [
      { num: "01", title: "David Ogilvy", desc: "Ad man of the 1960s. Wrote \"On Advertising\" and \"Confessions of an Advertising Man.\" Champion of specific, truthful, evidence-based copy.", icon: "\u{1F3A9}" },
      { num: "02", title: "Gary Halbert", desc: "The \"Prince of Print.\" Master of the long-form sales letter. Taught that market > message > media \u2014 a hungry market matters more than any offer.", icon: "\u{1F9E0}" },
      { num: "03", title: "Eugene Schwartz", desc: "Author of \"Breakthrough Advertising.\" Introduced the 5 Levels of Awareness. Still the canonical framework for matching copy to audience readiness.", icon: "\u{1F4DA}" },
    ], footer: "Rule: these three writers compound. A month spent reading them will outperform a year of generic \u201Cmarketing trends.\u201D" },
    { type: "principle", num: "01", title: "Schwartz\u2019s 5 Levels of Awareness \u2014 The Most Important Framework in Direct Response", intro: "Eugene Schwartz defined 5 levels of buyer awareness. Each level requires different copy. Mismatching level to copy is why most direct response fails \u2014 not bad writing, but wrong framing for the audience\u2019s state.", sectionTitle: "The 5 Levels \u2014 And What Each Requires", sections: [
      { heading: "1. Unaware", example: "Doesn\u2019t know they have the problem. Copy must dramatise the problem first.", note: "Lead with pain or unexpected insight. \u201CMost founders under-charge by 40% in year 2 \u2014 and here\u2019s why you might be doing it right now.\u201D" },
      { heading: "2. Problem Aware", example: "Knows they have a problem; doesn\u2019t know solutions exist. Copy must teach the solution category.", note: "\u201CIf you\u2019re tired of invoicing eating your Fridays, there\u2019s a whole category of tools designed for exactly that problem.\u201D" },
      { heading: "3. Solution Aware", example: "Knows solutions exist; doesn\u2019t know your specific product. Copy differentiates within the category.", note: "\u201CThere are a dozen invoicing tools. Here\u2019s why freelancers keep switching from [competitor] to us.\u201D" },
      { heading: "4. Product Aware", example: "Knows your product; hasn\u2019t decided to buy. Copy must handle remaining objections.", note: "\u201CYou know we cut invoicing time by 74%. You\u2019re probably worried about migrating from [current tool]. Here\u2019s the 4-minute migration path.\u201D" },
      { heading: "5. Most Aware", example: "Ready to buy; needs only the offer. Short copy + compelling terms closes.", note: "\u201C50% off for the next 48 hours. One click, no sales call.\u201D" },
    ], rule: "Diagnose the awareness level of your audience BEFORE writing. Copy that matches level is persuasive; mismatched copy is annoying." },
    { type: "comparison", eyebrow: "BRAND vs DIRECT RESPONSE", title: "Two ways to sell the same thing", subtitle: "Brand marketing plays a longer game. DR plays the measurable game. The best teams know which one they\u2019re playing \u2014 and write accordingly.", left: { title: "Brand Marketing Instincts", color: "#EF4444", items: [
      { strong: "Short, elegant copy with a single poetic line", note: "Beautiful for a billboard; wastes the close on a sales page." },
      { strong: "Aspirational imagery, lifestyle framing", note: "Builds perception over time; doesn\u2019t move a specific click today." },
      { strong: "Hard to measure a specific conversion", note: "Optimises for recall, brand lift, awareness \u2014 different metrics than DR." },
      { strong: "Testimonials vague and generic", note: "\"We love Acme Corp!\" \u2014 works in a brand ad; never closes in DR copy." },
    ] }, right: { title: "Direct Response Instincts", color: "#10B981", items: [
      { strong: "Long-form, proof-dense, objection-answering copy", note: "Earns the right to ask for the commitment by handling every reason to say no." },
      { strong: "Product screenshots, dashboards, specific outcomes \u2014 not aspiration", note: "Shows the thing working. Shows what the reader will get." },
      { strong: "Every element tied to a testable conversion metric", note: "Measurable. If it doesn\u2019t move the CTR or sale rate, it\u2019s cut." },
      { strong: "Testimonials named, dated, specific, numeric", note: "\"Priya at Zendesk: 14\u21922 min, 3 weeks.\" \u2014 is the proof." },
    ] }, footer: "Brand marketing costs in the short run, pays in the long run. Direct response pays today. Know which job you\u2019re doing on this specific page." },
    { type: "table", title: "The Direct Response Canon \u2014 What to Read", subtitle: "If you write sales pages for money, these books aren\u2019t optional. Each one compounds into every page you write for the rest of your career.", columns: ["Book", "Author", "Why It Matters"], rows: [
      ["Ogilvy on Advertising", "David Ogilvy", "The gold-standard on evidence-based, truthful, specific copy. Every chapter is a hit."],
      ["Breakthrough Advertising", "Eugene Schwartz", "The 5 Levels of Awareness + \"mass desire\" frameworks. Out of print, expensive, worth every dollar."],
      ["The Boron Letters", "Gary Halbert", "Letters written by Halbert to his son from prison. Teaches sales page structure with blunt voice."],
      ["Scientific Advertising", "Claude Hopkins (1923)", "The original A/B testing manifesto. Still shockingly relevant 100+ years later."],
      ["Cashvertising", "Drew Eric Whitman", "Modern translation of classical principles into today\u2019s marketing contexts."],
      ["The Adweek Copywriting Handbook", "Joe Sugarman", "The man who sold sunglasses by the thousands through mail-order copy. Craftsmanship master."],
    ], footer: "Rule: read one per quarter. The compounding over 2 years makes you a substantively better copywriter than any online course can." },
    { type: "exercise", title: "Diagnose Your Audience's Awareness Level", intro: "Pick one product you sell (or would sell). Write a sentence describing your audience at each of Schwartz\u2019s 5 levels.", items: [
      { num: "1", copy: "Unaware: what problem does your audience not yet know they have?", answer: "Example: \"Freelancers losing 4 hrs/week to manual invoicing \u2014 they\u2019ve normalised it.\" They don\u2019t think of this as a problem yet." },
      { num: "2", copy: "Problem Aware: what would they say if you asked what\u2019s hard about this part of their work?", answer: "Example: \"Invoicing takes forever and I hate doing it on Fridays.\" They feel the pain; they haven\u2019t mapped solutions yet." },
      { num: "3", copy: "Solution Aware: what category of product are they comparing? Who are your competitors in their mind?", answer: "Example: \"I\u2019ve seen invoicing tools \u2014 QuickBooks, Wave, FreshBooks.\" Now you need to differentiate." },
      { num: "4", copy: "Product Aware: what do they know about YOU specifically? What\u2019s their objection?", answer: "Example: \"I\u2019ve seen the landing page. I\u2019m worried about migrating from QuickBooks.\" Handle migration fear explicitly." },
      { num: "5", copy: "Most Aware: what offer would they accept right now to convert?", answer: "Example: \"50% off for 48 hours with 1-click migration from QuickBooks \u2014 done-for-you.\" Short, direct, concrete." },
    ] },
  ],
};
