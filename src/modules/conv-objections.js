// Conversion Copy — Module 4: Objection Handling on Landing Pages
export const convObjectionsModule = {
  id: "conv04",
  title: "Objection Handling on Landing Pages",
  type: "Rich Module",
  duration: "90 min",
  desc: "Visitors silently argue with your page all the way down. Learn where objections live, how to surface them in copy, and how to dissolve them at the exact moment they arise.",
  topics: ["Surfacing Objections", "Inline FAQ", "Proof Placement", "Pricing Objections", "Implementation Fear", "Risk Reversal at the CTA"],
  quiz: [
    { q: "Where should the answer to a pricing objection live on a landing page?", opts: ["In the footer FAQ", "Directly next to the price \u2014 within 150px at the commitment moment", "On a separate page", "Hidden in fine print"], correct: 1 },
    { q: "You add a FAQ section at the bottom of a long landing page. 80% of visitors never reach it. What's the better move?", opts: ["Keep the FAQ there", "Inline the top 3 objection answers adjacent to where each objection naturally arises (price, implementation, trust)", "Make FAQ longer", "Delete all FAQs"], correct: 1 },
    { q: "\"Contact sales for pricing\" typically creates what objection?", opts: ["None", "\"It must be expensive\" + \"I have to run a gauntlet before I can even know\" \u2014 hiding price often creates a bigger objection than any specific number would have", "\"It's too simple\"", "\"Not enterprise enough\""], correct: 1 },
    { q: "A B2B buyer sees your price and thinks \"too expensive.\" Your copy says \"affordable for all budgets.\" Effect on conversion:", opts: ["Positive", "Negative or neutral \u2014 \"affordable\" is unfalsifiable and addresses nothing specific; replace with ROI math or payback-period proof", "Strong positive", "No effect"], correct: 1 },
    { q: "Implementation fear is the objection that:", opts: ["Doesn\u2019t matter for SaaS", "Often kills more deals than pricing \u2014 buyers don\u2019t fear the sticker price; they fear the 6-month implementation they imagine", "Only exists in hardware", "Is solved with testimonials"], correct: 1 },
    { q: "Risk reversal at the CTA should be:", opts: ["A paragraph in Terms of Service", "Specific, explicit, and within visible proximity of the CTA button \u2014 \"30-day refund, 1-click cancel, no sales call\"", "Generic \"satisfaction guarantee\"", "Removed entirely"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 4", title: "Objection Handling", titleAccent: "on Landing Pages", subtitle: "Every visitor silently argues with your page. The pages that convert are the ones where objections surface in copy \u2014 and dissolve at the moment they arise.", meta: "Conversion Copy & Landing Pages  |  Module 4  |  7 Slides" },
    { type: "stats", eyebrow: "THE ARGUMENT IN THEIR HEAD", title: "Visitors don\u2019t leave because of what you said \u2014 they leave because of what you DIDN\u2019T say", intro: "Every unaddressed objection is a sale you lose. The best-converting landing pages look like they were written by someone who sat in on a week of sales calls \u2014 because they name the objection in the buyer\u2019s own words, then dissolve it.", stats: [
      { num: "4.3", label: "average number of silent objections a B2B visitor raises before deciding" },
      { num: "27%", label: "conversion lift from addressing the top objection directly in hero/value-prop area" },
      { num: "63%", label: "of lost deals cite an objection the seller never saw surface" },
    ], subheading: "What Good Objection Copy Does", bullets: [
      "Names the objection in the visitor\u2019s own language \u2014 so they feel understood, not sold to",
      "Places the answer at the exact moment the objection arises \u2014 not in a bottom-of-page FAQ",
      "Backs the answer with specific proof \u2014 number, named case, verifiable claim",
      "Matches the commitment cost to the risk reversal \u2014 bigger ask = more explicit risk removal",
    ] },
    { type: "grid", eyebrow: "THE 4 CLASSIC LANDING-PAGE OBJECTIONS", title: "Where each lives and what dissolves it", subtitle: "Almost every B2B landing-page loss falls into one of these four objection categories. Address them inline.", items: [
      { num: "01", title: "Price / Cost Concern", desc: "\"This looks expensive.\" Dissolve with ROI math, payback period, or cost-of-inaction framing \u2014 placed next to the price.", icon: "\u{1F4B0}" },
      { num: "02", title: "Trust / Unknown Brand", desc: "\"I\u2019ve never heard of you.\" Dissolve with named customers + specific outcomes + third-party signals above-the-fold.", icon: "\u{1F91D}" },
      { num: "03", title: "Fit / \"Will this work for ME?\"", desc: "\"Will it fit MY stage/role/stack?\" Dissolve with role-specific testimonials, use-case tabs, or explicit disqualification.", icon: "\u{1F9ED}" },
      { num: "04", title: "Implementation / Time Cost", desc: "\"I\u2019ll have to reboot my stack.\" Dissolve with specific setup times, named integrations, and done-for-you options at the CTA.", icon: "\u23F3" },
    ], footer: "Rule: before writing a page, interview your sales team for the top 3 objections they hear \u2014 and write the page around dissolving them." },
    { type: "principle", num: "01", title: "Proximity Placement \u2014 Answer Where the Question Arises", intro: "A FAQ at the bottom of the page is a FAQ that 80% of visitors never see. The fix is placement: answer each objection at the exact point on the page where it naturally surfaces.", sectionTitle: "Where to Place Each Objection Answer", sections: [
      { heading: "Price objection \u2192 next to the price", example: "Price: $1,200/mo. Below: \"Teams recover this in the first 8 days via reclaimed AE time. Past that, pure margin.\"", note: "The ROI math at the price point, not in a separate \"Why Us\" page. Friction dissolved on contact." },
      { heading: "Trust objection \u2192 above-the-fold", example: "Named customer quote + specific outcome visible in hero area.", note: "Trust is earned before the first scroll or not at all; don\u2019t save the best proof for the bottom of the page." },
      { heading: "Fit objection \u2192 next to the value prop", example: "\"Built for 50\u2013500 seat B2B SaaS. If you\u2019re under 10 people, don\u2019t buy this \u2014 here\u2019s our recommendation instead.\"", note: "Explicit disqualification is the strongest fit signal there is. Telling the wrong-fit visitor to leave paradoxically converts the right-fit visitor." },
      { heading: "Implementation objection \u2192 next to the CTA", example: "Under the \"Start Free\" button: \"Setup in 4 min. Live integrations with HubSpot, Salesforce, Pipedrive. No engineering.\"", note: "The CTA is the commitment moment \u2014 dissolve the biggest last-mile fear right there." },
    ], rule: "Never write a landing page FAQ-first. Write the page with objection answers INLINE \u2014 FAQ becomes vestigial." },
    { type: "comparison", eyebrow: "FAQ-BURIED vs INLINE", title: "Two versions of the same page \u2014 7x conversion gap", subtitle: "Same product, same audience, same price. The only difference is WHERE objection answers live.", left: { title: "Objections Buried in Footer FAQ", color: "#EF4444", items: [
      { strong: "Pricing shown with no ROI context", note: "Visitor thinks \"expensive\" and scrolls off." },
      { strong: "Generic \"trusted by leading companies\" logos", note: "No named customer, no outcome; objection persists." },
      { strong: "\"See FAQ for setup details\" link in the footer", note: "Implementation fear not addressed at the CTA \u2014 most visitors never click through." },
      { strong: "Generic \"money-back guarantee\" in the footer", note: "Guarantees mentioned that far from the CTA don\u2019t reduce perceived risk." },
    ] }, right: { title: "Objections Answered Inline", color: "#10B981", items: [
      { strong: "Next to price: \"Teams recover this in 8 days via reclaimed AE time\"", note: "Price objection dissolved on contact. Visitor now sees ROI, not sticker." },
      { strong: "Above-the-fold: \"Priya Sharma, VP Sales at [named company], cut close cycle 34% in 90 days\"", note: "Trust established before the first scroll. Named, dated, specific." },
      { strong: "At the CTA: \"Start free. 4-min setup. Live integrations. No engineering.\"", note: "Implementation fear \u2014 the biggest last-mile killer \u2014 dissolved at the commitment moment." },
      { strong: "Under the CTA: \"30-day refund, 1-click cancel, no sales call.\"", note: "Risk reversal at the exact point where commitment is calculated." },
    ] }, footer: "Buried FAQ pages convert ~half as well as inline-objection pages in most A/B tests. The fix is placement, not content." },
    { type: "table", title: "Price Objection Playbook", subtitle: "Price is the most common objection and the one most often bungled. Use one of these patterns matched to your pricing strategy.", columns: ["Strategy", "Copy Pattern", "Best For"], rows: [
      ["ROI math framing", "\"$1,200/mo \u2014 teams recover this in 8 days of reclaimed AE time. Payback: 8 days.\"", "High-ACV SaaS, clear ROI story"],
      ["Cost-of-inaction framing", "\"Your team is losing $4,300/mo to this problem right now. $1,200/mo solves it.\"", "Pain-driven B2B; strong when buyers already feel the pain"],
      ["Comparative pricing", "\"Salesforce would quote $180K/yr for this. We do it for $28K/yr with every seat included.\"", "Direct competitor-displacement plays"],
      ["Tier breakdown + \u201Cstart small\u201D", "\"Start at $79/mo (solo). Grow to $499/mo when you\u2019re ready. No surprise upgrades.\"", "Self-serve SaaS; trial-to-paid conversion focus"],
      ["Outcome-guarantee pricing", "\"$2,400/mo. If you don\u2019t hit 20% efficiency gain in 90 days, we refund 100%.\"", "Consulting-adjacent; strong for services / coaching"],
    ], footer: "Rule: name the price. Hiding price (\"contact sales\") typically creates a bigger objection than any specific number would \u2014 for any company under enterprise ACVs." },
    { type: "exercise", title: "The Objection Placement Audit", intro: "Pick one live landing page. List the top 3 objections visitors silently raise on it. Then map where each is currently addressed \u2014 or isn\u2019t.", items: [
      { num: "1", copy: "Objection #1 (usually price): where is it currently answered on your page?", answer: "If it\u2019s in a footer FAQ, move it within 150px of the price itself. This alone typically lifts conversions 10\u201320%." },
      { num: "2", copy: "Objection #2 (usually trust / unknown brand): is your strongest proof point above-the-fold?", answer: "If your best case study is buried halfway down the page, move it above the fold. Visitors who don\u2019t trust you in the first 10 seconds leave." },
      { num: "3", copy: "Objection #3 (usually implementation fear): is it resolved at the CTA?", answer: "If setup time / integrations aren\u2019t named right at the \"Get Started\" button, add them. Implementation fear kills more CTAs than price." },
      { num: "4", copy: "List one more objection specific to your audience/product. Write the inline answer.", answer: "Draft 2\u20133 sentences maximum. Place it at the exact point where the objection would naturally arise as the visitor reads down the page." },
    ] },
  ],
};
