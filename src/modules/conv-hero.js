// Conversion Copy — Module 2: Above-the-Fold Copy (Hero + Value Prop)
export const convHeroModule = {
  id: "conv02",
  title: "Above-the-Fold: Hero & Value Prop",
  type: "Rich Module",
  duration: "90 min",
  desc: "The first 600 pixels decide whether visitors stay or leave. Learn the anatomy of a hero that converts \u2014 value prop, visual support, primary CTA, and trust.",
  topics: ["Hero Anatomy", "Value Proposition Formula", "Subheadline Craft", "Visual Support", "Primary CTA Design", "Above-the-Fold Trust"],
  quiz: [
    { q: "Your hero headline is \"Innovative Solutions for Modern Teams.\" Diagnose:", opts: ["Strong positioning", "Generic adjectives + no specific outcome + no named audience = invisible to any specific buyer; rewrite with role + constraint + result", "Wrong font", "Too short"], correct: 1 },
    { q: "The highest-converting value-prop formula in 2026 B2B is typically:", opts: ['"[Vague outcome] with our innovative platform"', '"[Named Role] get [Specific Outcome] in [Specific Time] without [Common Pain]"', '"The best platform for modern businesses"', '"Unleash your potential"'], correct: 1 },
    { q: "Your hero has a beautiful stock-photo illustration and vague copy. Conversion is low. The diagnostic rule:", opts: ["Add animation", "The visual should prove or demonstrate the outcome promised by the copy \u2014 illustrations that don\u2019t prove anything add no conversion value; replace with a product screenshot or a real customer photo", "Make the image bigger", "Switch to a video"], correct: 1 },
    { q: "Your primary CTA says \u201CGet Started.\u201D Rank these rewrites by expected lift: (A) \"Sign Up\" (B) \"Start free \u2014 no card, 90-sec setup\" (C) \"Submit\" (D) \"Try for Free\"", opts: ["A > B > C > D", "B >> A, C, D \u2014 B names benefit + removes friction + gives a concrete time; the rest are generic or ambiguous", "D > B > A > C", "All equal"], correct: 1 },
    { q: "Ranked by conversion impact on above-the-fold: (A) hero headline (B) subheadline (C) CTA copy (D) background image", opts: ["A > B > C > D", "A \u2248 C > B > D \u2014 headline matches intent; CTA seals the action; subhead is important but secondary; background image adds least", "D > A > B > C", "All equal"], correct: 1 },
    { q: "A visitor lands on your hero. Inside 3 seconds, what must they be able to answer?", opts: ["How old is your company", "\"Who is this for?\", \"What do I get?\", and \"What\u2019s the next step?\" \u2014 if any of these isn\u2019t clear in 3 seconds, you lose the visit", "What\u2019s your founder\u2019s story", "Where\u2019s your office"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 2", title: "Above-the-Fold", titleAccent: "Hero & Value Prop", subtitle: "The first 600 pixels decide everything. The hero + value prop + primary CTA is the highest-leverage 10% of your entire landing page.", meta: "Conversion Copy & Landing Pages  |  Module 2  |  7 Slides" },
    { type: "stats", eyebrow: "WHY THE FOLD WINS OR LOSES", title: "Most visitors never scroll", intro: "The above-the-fold area receives 100% of visitor attention; below-the-fold, it drops fast. If the fold doesn\u2019t earn the rest of the page, the rest of the page might as well not exist.", stats: [
      { num: "80%", label: "of visitor attention time is spent above-the-fold" },
      { num: "57%", label: "of landing page visitors never scroll past the hero" },
      { num: "3\u00D7", label: "conversion lift from hero/value-prop rewrites vs comparable lift from below-the-fold changes" },
    ], subheading: "What Above-the-Fold Must Accomplish", bullets: [
      "Confirm the visitor landed in the right place (intent match with their search/ad/referrer)",
      "Promise a specific outcome they can picture in their own situation",
      "Establish enough trust to earn the 10 seconds of continued attention",
      "Make the next step (the primary CTA) obvious, low-friction, and risk-reduced",
    ] },
    { type: "grid", eyebrow: "HERO ANATOMY", title: "The 5 elements every high-converting hero has", subtitle: "Miss any of these and the hero under-performs. Nail all 5 and you out-convert 90% of pages in your category.", items: [
      { num: "01", title: "Headline (value prop)", desc: "Who it\u2019s for + what they get + what pain is removed. 8\u201315 words. Specificity beats cleverness.", icon: "\u{1F3AF}" },
      { num: "02", title: "Subheadline (amplifier)", desc: "1 sentence that deepens the promise or adds the mechanism. Answers \u201Chow?\u201D or \u201Cwhy you?\u201D", icon: "\u{1F4AC}" },
      { num: "03", title: "Visual support", desc: "Screenshot, demo video, or named customer photo \u2014 proof the thing exists and works.", icon: "\u{1F5BC}\uFE0F" },
      { num: "04", title: "Primary CTA", desc: "Specific action, benefit-led, friction-killed. \u201CStart free \u2014 no card\u201D > \u201CGet Started.\u201D", icon: "\u27A1\uFE0F" },
      { num: "05", title: "Trust signal", desc: "Named customer / logo with outcome / usage number / compliance badge \u2014 something verifiable.", icon: "\u{1F6E1}\uFE0F" },
    ], footer: "Rule: all 5 visible without scrolling on a 1440\u00D7900 desktop. If any requires scroll, your hero is under-packed." },
    { type: "principle", num: "01", title: "The Value Proposition Formula", intro: "Most value propositions are adjective soup. The formula below produces specific, testable value props that immediately communicate who-what-why-how. Fill in the blanks; resist the urge to \u201Cpolish\u201D the specifics away.", sectionTitle: "The 4-Slot Value Prop Formula", sections: [
      { heading: "[Named Role / Named Audience]", example: "\"B2B sales teams without a BDR\" / \"Freelance designers in year 2\" / \"Head of CS at 50\u2013200 seat SaaS\"", note: "Not \"businesses.\" Not \"professionals.\" A real role + stage + situation." },
      { heading: "[Get / Achieve / Save] [Specific Outcome]", example: "\"Double your outbound reply rate\" / \"Raise rates 40% without losing clients\"", note: "Measurable. Concrete. If you can\u2019t quantify it, you haven\u2019t got the value prop yet." },
      { heading: "[In Time Frame or Using Mechanism]", example: "\"In 30 days\" / \"Using pre-tested email templates\" / \"Without hiring or new tools\"", note: "How the outcome will be achieved. Adds credibility; answers the skeptical \u201Creally?\u201D reaction." },
      { heading: "[Without Common Pain]", example: "\"Without cold-calling\" / \"Without rebuilding your tech stack\" / \"Without losing your best clients\"", note: "The objection-killer. Addresses the loudest \"but what about...\" in the visitor\u2019s head." },
    ], rule: "Combine the 4 slots into one sentence: \"[Audience] [get outcome] [in time/mechanism] [without pain].\" Test 3 variants before publishing." },
    { type: "comparison", eyebrow: "WEAK vs STRONG HERO", title: "Two value props for the same product", subtitle: "Same product. Same audience. Same truth. One converts 4\u00D7 better. The difference is specificity and the formula.", left: { title: "Weak Hero (Adjective Soup)", color: "#EF4444", items: [
      { strong: '"Innovative Solutions for Modern Teams"', note: "Zero specificity. No role. No outcome. No proof. Invisible." },
      { strong: '"Empowering businesses with cutting-edge technology"', note: "Self-referential. Describes the company, not the visitor\u2019s outcome." },
      { strong: '"Get Started" (CTA)', note: "Generic. No benefit promise. No friction removal." },
      { strong: 'Stock illustration of "teamwork"', note: "No proof. No product in view. Reader has no image of what they\u2019d get." },
    ] }, right: { title: "Strong Hero (Formula Applied)", color: "#10B981", items: [
      { strong: '"B2B sales teams double outbound reply rate in 30 days \u2014 without hiring a BDR"', note: "Role + outcome + timeframe + objection-killer, all 15 words." },
      { strong: '"The pre-tested email sequences 847 Series-A SaaS SDR teams used in 2025"', note: "Social proof + mechanism + specific year, all in the subhead." },
      { strong: '"Start free \u2014 no credit card, sequences imported in 4 minutes" (CTA + micro-copy)', note: "Benefit + friction removal + specific setup time. Fear of commitment gone." },
      { strong: 'Product screenshot showing a real email sequence with real metrics', note: "Proof the thing exists; proof it works. Visual proves what copy claims." },
    ] }, footer: "Weak hero = invisible. Strong hero = 4\u00D7 conversion. Time cost to rewrite: about 2 hours. Impact: lasts as long as the page exists." },
    { type: "table", title: "CTA Copy Cheat Sheet", subtitle: "Generic CTAs leave conversions on the table. These patterns have been A/B-tested and consistently outperform the defaults.", columns: ["Weak CTA", "Strong Rewrite Pattern", "Why It Wins"], rows: [
      ["Get Started", "Start free \u2014 no card, [specific setup time]", "Benefit + 2 friction removers; reader can\u2019t claim risk"],
      ["Learn More", "See a 30-second demo \u2014 no signup required", "Removes the signup gate; promises a specific artefact"],
      ["Sign Up", "Create your first [X] in 90 seconds", "Outcome-first; specific time; visitor can picture the result"],
      ["Request a Demo", "Book a 15-min live call \u2014 with an engineer, not a BDR", "Removes the BDR-filter objection; names the specific value"],
      ["Submit", "Send me the playbook \u2192 (arrives in your inbox in 60 sec)", "Outcome-led; specific delivery window"],
      ["Contact Sales", "See pricing for my team size (no call required)", "Removes the sales-call objection; keeps them in self-serve mode"],
    ], footer: "Rule: test at least 3 CTA variants per major page. CTA rewrites are the single fastest 10-minute conversion lift you can deploy." },
    { type: "exercise", title: "Rewrite Your Hero in 30 Minutes", intro: "Take your most-trafficked landing page\u2019s current hero. Apply the formula and the CTA patterns. Produce 3 variants ready to A/B test.", items: [
      { num: "1", copy: "Fill the 4 slots: [audience] [outcome] [timeframe/mechanism] [without-pain]. Write it as one sentence.", answer: "If you can\u2019t fill all 4 slots, your positioning is unclear. Pause the rewrite and sharpen the positioning first." },
      { num: "2", copy: "Write a subhead that either adds the mechanism (\"how\") or the differentiator (\"why you\") in one sentence.", answer: "Subhead should answer the visitor\u2019s first follow-up question. Not a poetic restatement of the headline." },
      { num: "3", copy: "Rewrite the CTA: outcome-led + 1\u20132 friction removers + specific next-step artefact.", answer: "CTA should pass the \"copy-paste to competitor\" test: if it fits any competitor, it\u2019s generic. Customise." },
      { num: "4", copy: "Pair with a visual that proves the promise: screenshot, demo, or named customer photo \u2014 not stock illustration.", answer: "The visual should show the thing working or the result visibly. If your visual is abstract, replace it." },
    ] },
  ],
};
