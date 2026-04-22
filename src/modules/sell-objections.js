// Sales Fundamentals — Module 6: Handling Objections
export const sellObjectionsModule = {
  id: "sell06",
  title: "Handling Objections",
  type: "Rich Module",
  duration: "90 min",
  desc: "Objections aren't rejections \u2014 they're requests for more information. Learn the LAER framework, the top 5 objections, and when to walk away.",
  topics: ["LAER Framework", "Top 5 Objections", "Reframing Techniques", "The Real Objection Behind the Stated Objection", "Price vs Value", "When to Walk Away"],
  quiz: [
    { q: "An objection during a sales call typically means:", opts: ["The deal is dead", "The buyer is engaged + considering \u2014 objections are data about their concerns, not rejections; no objections often signals no interest", "You failed", "Price is too high"], correct: 1 },
    { q: "The LAER framework for handling objections stands for:", opts: ["Listen, Ask, Empathise, React", "Listen, Acknowledge, Explore, Respond \u2014 in that order; responding before exploring is the classic mistake", "Look, Ask, Explain, Recover", "Learn, Adapt, Engage, Retain"], correct: 1 },
    { q: "A buyer says \u201CIt\u2019s too expensive.\u201D The weakest response is:", opts: ["\u201CWhat\u2019s driving the price question?\u201D", "\u201CI understand \u2014 let me offer you a discount.\u201D (jumping to concession before exploring what \u201Ctoo expensive\u201D actually means)", "\u201CCompared to what?\u201D", "Pausing to think"], correct: 1 },
    { q: "The real objection behind \u201CI need to think about it\u201D is usually:", opts: ["They actually need time", "One of: (a) an unresolved concern they haven\u2019t voiced; (b) lack of internal authority; (c) no urgency; (d) politely declining \u2014 the job is to surface which", "They forgot to take notes", "They\u2019re busy"], correct: 1 },
    { q: "When a buyer raises a price objection AFTER agreeing on value, the strongest move is:", opts: ["Immediate discount", "Re-anchor to the value already agreed on: \u201CEarlier you said solving X would be worth Y. Given that, the pricing is a small fraction of the upside \u2014 what specifically about the number feels high?\u201D", "Walk away", "Change topic"], correct: 1 },
    { q: "You should walk away from a deal when:", opts: ["Any objection appears", "Core criteria aren\u2019t met (wrong ICP, no budget, no authority, no timeline) \u2014 walking then preserves bandwidth for qualified deals AND maintains your discipline", "Buyer hesitates once", "Three weeks in"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 6", title: "Handling", titleAccent: "Objections", subtitle: "Objections aren\u2019t rejections \u2014 they\u2019re requests for more information. The LAER framework, the top 5 objections, and when to walk.", meta: "Sales Fundamentals  |  Module 6  |  7 Slides" },
    { type: "stats", eyebrow: "WHY OBJECTIONS ARE SIGNALS", title: "No objections usually means no interest", intro: "Objections during a sales cycle are signs of engagement. A buyer who raises concerns is evaluating seriously. A buyer who nods politely through the whole pitch is usually already gone.", stats: [
      { num: "4.3", label: "average number of objections a B2B buyer voices in a typical deal cycle" },
      { num: "60%+", label: "of lost deals cite an objection the seller never fully addressed \u2014 often because the seller jumped to a response before exploring" },
      { num: "3\u00D7", label: "higher close rate on deals where sellers rated objection-handling a strength vs those who didn\u2019t" },
    ], subheading: "What Objection-Handling Actually Is", bullets: [
      "A conversation where the buyer voices concerns + the seller surfaces the real worry behind them",
      "NOT a battle to \u201Covercome\u201D objections \u2014 buyers feel the adversarial energy and withdraw",
      "An opportunity to provide specific proof or reframing that resolves the buyer\u2019s internal hesitation",
      "Sometimes: the honest signal that this isn\u2019t a fit, and the deal should be gracefully de-escalated",
    ] },
    { type: "grid", eyebrow: "THE 5 MOST COMMON B2B OBJECTIONS", title: "What you'll hear + what's typically underneath", subtitle: "Each of these has a stated version + a real version. Your job is to surface the real one.", items: [
      { num: "01", title: "\"It\u2019s too expensive\"", desc: "Stated: price. Real: ROI unclear, budget already allocated, or champion can\u2019t defend internally.", icon: "\u{1F4B0}" },
      { num: "02", title: "\"I need to think about it\"", desc: "Stated: time to deliberate. Real: unvoiced concern, lack of authority, no urgency, or polite decline.", icon: "\u{1F914}" },
      { num: "03", title: "\"We need to compare with competitors\"", desc: "Stated: due diligence. Real: champion uncertain which criteria actually matter; seller can help them shape them.", icon: "\u2696\uFE0F" },
      { num: "04", title: "\"Timing isn\u2019t right\"", desc: "Stated: bad time. Real: competing priorities, unvoiced risk, or champion protecting themselves.", icon: "\u23F3" },
      { num: "05", title: "\"We\u2019re going to build it in-house\"", desc: "Stated: DIY preference. Real: champion doesn\u2019t have internal approval to spend, or doesn\u2019t believe the problem is that expensive.", icon: "\u{1F527}" },
    ], footer: "Rule: address the stated objection respectfully; surface the real one patiently. The real objection is almost always more actionable." },
    { type: "principle", num: "01", title: "The LAER Framework", intro: "When an objection hits, most sellers respond before they\u2019ve actually understood it. LAER enforces the discipline of hearing first, responding last. The sequence matters.", sectionTitle: "The 4 Steps \u2014 In Strict Order", sections: [
      { heading: "L \u2014 Listen", example: "Buyer: \u201CIt\u2019s too expensive.\u201D Your response: silence. Actually hear them. Don\u2019t interrupt. Don\u2019t start formulating your reply while they\u2019re still speaking.", note: "Most sellers fail at L. They start the response in their head while the buyer is still talking. The buyer senses it." },
      { heading: "A \u2014 Acknowledge", example: "\u201CI hear you \u2014 price is always worth taking seriously, especially given what you told me about the budget situation.\u201D", note: "Acknowledgement signals you\u2019re not going to fight the objection. Lowers buyer\u2019s defensiveness. Creates space for exploration." },
      { heading: "E \u2014 Explore", example: "\u201CCan you help me understand what\u2019s driving the price question? Is it the absolute number, the comparison to something else, or the ROI timeline?\u201D", note: "This is the power step. Surfaces the REAL objection behind the stated one. Most objections transform here." },
      { heading: "R \u2014 Respond", example: "\u201CGiven that the real concern is payback timing, let me show you the math of when this typically pays off for teams at your stage\u2026\u201D", note: "Now respond \u2014 but to the real objection, not the stated one. Response is 10\u00D7 more effective because you\u2019re addressing actual concern." },
    ], rule: "Skipping any step \u2014 especially Explore \u2014 is the #1 objection-handling failure. Most sellers go straight from Listen to Respond, missing the real objection entirely." },
    { type: "comparison", eyebrow: "REACTIVE vs LAER", title: "Same objection, two responses", subtitle: "Buyer says: \u201CIt\u2019s too expensive.\u201D Reactive response closes the deal quickly \u2014 at a loss. LAER surfaces the real concern and usually keeps the deal at full price.", left: { title: "Reactive (Jumps to Respond)", color: "#EF4444", items: [
      { strong: "Buyer: \u201CIt\u2019s too expensive.\u201D Seller (immediate): \u201CI can offer 20% off.\u201D", note: "Seller trained the buyer: any push-back = discount. Now the buyer will push back on EVERY future call." },
      { strong: "\u201CIt\u2019s too expensive\u201D might have meant: \u201Cmy boss won\u2019t approve spend above $X.\u201D", note: "Real issue unaddressed. Deal closes at lower price but the trust damage persists." },
      { strong: "Deal closes at 20% discount + reduced perceived value", note: "Both parties lose. Seller makes less; buyer feels they got a deal but doesn\u2019t trust future pricing." },
      { strong: "Next objection from same buyer: \u201CCan you do 30% off?\u201D", note: "The pattern is set. Future negotiations become concession-chains." },
    ] }, right: { title: "LAER (Surfaces Real Concern)", color: "#10B981", items: [
      { strong: "Buyer: \u201CIt\u2019s too expensive.\u201D Seller (3-second pause): \u201CI hear that. Can I ask \u2014 what specifically about the number feels high?\u201D", note: "Listen + acknowledge + explore. No jump to discount. Buyer pauses to actually think about their answer." },
      { strong: "Buyer: \u201CHonestly \u2014 my boss wouldn\u2019t approve spend over $25K without a longer approval process.\u201D", note: "Real objection: approval process, not absolute price. Completely different problem to solve." },
      { strong: "Seller: \u201CMakes sense. What if we structured this as a 3-month pilot at $7K, then full deployment at the renewal? Same total, different approval path.\u201D", note: "Specific structure matching the real constraint. Price held; only sequencing changed." },
      { strong: "Deal closes at full value; buyer feels understood; relationship set up for renewal", note: "Both win. Price intact. Trust deeper. Real issue resolved." },
    ] }, footer: "Rule: never respond to an objection in the first 5 seconds. Pause. Ask the E question. Then respond. This discipline alone lifts close rates 15\u201330%." },
    { type: "table", title: "Quick-Reference Objection Responses", subtitle: "For the most common objections \u2014 after you\u2019ve run Explore. Not scripts; frames.", columns: ["Stated Objection", "Typical Real Objection", "Strong Response Frame"], rows: [
      ["It\u2019s too expensive", "ROI unclear or approval constrained", "\"Help me understand what\u2019s driving the number question?\" \u2192 address real constraint"],
      ["I need to think about it", "Unvoiced concern", "\"Totally fair. Before you do \u2014 is there a specific concern I haven\u2019t addressed?\""],
      ["We need to compare to X", "Evaluation criteria unclear", "\"What criteria matter most to you? I can help you evaluate fairly \u2014 even if it\u2019s not us.\""],
      ["Timing isn\u2019t right", "Competing priorities or unvoiced risk", "\"What\u2019s the bigger priority right now?\" \u2192 understand + possibly wait vs push"],
      ["We\u2019ll build it in-house", "Budget/political constraint", "\"How long is that build? What does opportunity cost look like?\" \u2192 reveal true cost"],
      ["Send me pricing + I\u2019ll get back", "Avoiding another call / no urgency", "\"Happy to. Before I do \u2014 can we walk through what success looks like so I tailor the quote?\""],
    ], footer: "Rule: these frames invite the real conversation. They\u2019re not rebuttals. The goal is alignment, not winning arguments." },
    { type: "exercise", title: "Role-Play the 5 Objections", intro: "With a colleague or solo, rehearse your LAER response to each of the 5 most common objections in your specific context.", items: [
      { num: "1", copy: "Objection 1: \u201CIt\u2019s too expensive.\u201D Write your Listen \u2192 Acknowledge \u2192 Explore question verbatim.", answer: "Example: \"I hear you \u2014 price is worth taking seriously. Can I ask what specifically about the number feels high? Is it absolute, comparative, or timing?\" Drill until it rolls off the tongue." },
      { num: "2", copy: "Objection 2: \u201CI need to think about it.\u201D Write your explicit explore question.", answer: "Example: \"Totally fair. Before you do \u2014 is there a specific concern I haven\u2019t addressed? I\u2019d rather hear it now than wonder for a week.\" Direct + permission-based." },
      { num: "3", copy: "Objection 3: \u201CWe need to compare.\u201D What\u2019s your frame?", answer: "Example: \"Of course. What criteria matter most to you? I can actually help you build the evaluation matrix \u2014 even if we don\u2019t win.\" Buyer-centric. Becomes the trusted advisor." },
      { num: "4", copy: "Objections 4 & 5 (timing + build-in-house): write your response frames, same structure.", answer: "Pattern: Listen \u2192 Acknowledge \u2192 Explore the real concern \u2192 Respond to that, not the surface objection. Drill the specific language until it\u2019s automatic." },
    ] },
  ],
};
