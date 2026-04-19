// Sales Pages & Direct Response — Module 6: Close, Guarantees & Risk Reversal
export const salesCloseModule = {
  id: "sales06",
  title: "Close, Guarantees & Risk Reversal",
  type: "Rich Module",
  duration: "90 min",
  desc: "The final 10% of the sales page does 40% of the conversion work. Masterful closes, specific guarantees, and risk reversal that converts fence-sitters.",
  topics: ["The Close Structure", "Specific Guarantees", "Risk Reversal Types", "The Offer Summary", "The P.S. Strategy", "When To Walk Away"],
  quiz: [
    { q: "A generic \"100% satisfaction guarantee\" does what to conversion?", opts: ["Lifts it significantly", "Very little \u2014 buyers discount vague guarantees; specific, falsifiable risk reversal converts, generic feel-good language doesn\u2019t", "Lowers it", "Depends on font"], correct: 1 },
    { q: "The P.S. of a sales letter gets read by:", opts: ["Nobody", "60\u201380% of readers \u2014 many scan to the P.S. first; it\u2019s the second-most-read element after the headline", "Only the author", "30%"], correct: 1 },
    { q: "A stronger guarantee: (A) \"30-day money-back guarantee\" (B) \"Try it for 30 days. If it doesn\u2019t work for you, email 'refund' and we\u2019ll return every cent within 48 hours \u2014 no questions, no sales call, no unsubscribe from emails.\" Which and why?", opts: ["A", "B \u2014 specific mechanism, specific timeline, specific friction removal; B survives the \u201Cis this real?\u201D test", "Same", "Neither matters"], correct: 1 },
    { q: "Risk reversal works because:", opts: ["Buyers love guarantees", "It shifts the decision\u2019s risk from buyer to seller at the commitment moment; the buyer\u2019s internal calculation changes from \"what if this doesn\u2019t work?\" to \"what could it hurt to try?\"", "Everyone offers refunds", "Required by law"], correct: 1 },
    { q: "The close of a sales page should ideally:", opts: ["Summarise the argument once more", "Restate the offer + main benefit + specific risk reversal + explicit next step \u2014 all in the last 200\u2013400 words", "Be a single sentence", "Skip the summary"], correct: 1 },
    { q: "The single biggest close mistake is:", opts: ["Too long", "Asking for the sale without removing the final perceived risk \u2014 buyers who\u2019ve read 3,000 words and believe you still need the risk reduced to act", "Too many testimonials", "Using the word \"buy\""], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 6", title: "Close, Guarantees", titleAccent: "& Risk Reversal", subtitle: "The final 10% of the sales page does 40% of the conversion work. Masterful closes, specific guarantees, and risk reversal that converts fence-sitters.", meta: "Sales Pages & Direct Response  |  Module 6  |  7 Slides" },
    { type: "stats", eyebrow: "WHY THE CLOSE MATTERS", title: "The final 10% of the page does disproportionate conversion work", intro: "Readers who reach the close section are your highest-intent readers. They\u2019ve invested time; they\u2019re near commitment. The close is where their final objection gets dissolved \u2014 or where they stall forever.", stats: [
      { num: "40%", label: "of conversion decisions happen in the last 10% of a sales page \u2014 the close, guarantee, and P.S." },
      { num: "3\u00D7", label: "conversion lift from specific risk reversal vs generic satisfaction guarantees" },
      { num: "60\u201380%", label: "of readers skim to the P.S. before reading the body \u2014 making it the second most-read element" },
    ], subheading: "What a Great Close Does", bullets: [
      "Restates the offer in summary form so the buyer sees the full value in one glance",
      "Dissolves the final objection with specific, believable risk reversal",
      "Makes the next step obvious, singular, and low-friction",
      "Uses the P.S. to reinforce the strongest proof point or add a final urgency layer",
    ] },
    { type: "grid", eyebrow: "THE CLOSE STRUCTURE", title: "The 5 components of a high-converting close", subtitle: "Every strong sales page close has these. Miss any, and the close under-performs.", items: [
      { num: "01", title: "Offer Summary", desc: "Everything they\u2019ll get, stacked: core product + bonuses + guarantee. One scroll, the whole value visible.", icon: "\u{1F4E6}" },
      { num: "02", title: "Risk Reversal", desc: "Specific, falsifiable guarantee. Shifts risk from buyer to seller at the commitment moment.", icon: "\u{1F6E1}\uFE0F" },
      { num: "03", title: "Clear Next Step", desc: "One CTA. Specific action. No ambiguity about what happens when they click.", icon: "\u27A1\uFE0F" },
      { num: "04", title: "Urgency Reinforcement", desc: "Restate the deadline, capacity, or bonus decay. Not fake \u2014 real constraints you\u2019ll honour.", icon: "\u23F3" },
      { num: "05", title: "The P.S.", desc: "One or two P.S. lines. Restate the strongest proof, or add a final permission-giving sentence.", icon: "\u270D\uFE0F" },
    ], footer: "Rule: the close should read as confidently as a confident friend giving a recommendation. Hedging, hesitation, or over-explaining in the close kills conversion." },
    { type: "principle", num: "01", title: "Specific Guarantees \u2014 The \"Is This Real?\" Test", intro: "Most guarantees fail the \u201Cis this real?\u201D test. \u201C100% satisfaction guaranteed!\u201D means nothing. A specific, falsifiable, friction-minimised guarantee dissolves the last objection. Buyers convert to buyers when the risk calculus changes.", sectionTitle: "The 4 Elements of a Converting Guarantee", sections: [
      { heading: "1. Specific Timeline", example: "\"30 days\" not \"some period.\" \"48 hours\" not \"soon.\"", note: "Specificity signals confidence. Vague timelines signal the guarantee is window dressing." },
      { heading: "2. Specific Trigger / Mechanism", example: "\"Email the word \u2018refund\u2019 and we\u2019ll return your money within 48 hours.\"", note: "Remove friction from the refund path. If a buyer has to jump through hoops, the guarantee is fake." },
      { heading: "3. Specific Outcome If Triggered", example: "\"Full refund + you keep the bonus materials + no sales call, no unsubscribe pressure.\"", note: "Exactly what happens if they trigger it. No surprises. No \"by the way.\"" },
      { heading: "4. Specific Reason It Won\u2019t Be Needed", example: "\"We\u2019ve run this with 847 clients. Our refund rate: 2.3%. We\u2019re confident you\u2019ll be in the 97.7%.\"", note: "Prove your confidence with data. Turns the guarantee into both risk reversal AND social proof." },
    ], rule: "Every guarantee should pass the test: \u201Cif I emailed the seller right now asking to verify this exact term, would they confirm it in writing?\u201D If no, rewrite." },
    { type: "comparison", eyebrow: "GENERIC vs SPECIFIC GUARANTEES", title: "Same product, two guarantees", subtitle: "Generic guarantee produces no conversion lift. Specific guarantee lifts conversion 2\u20133\u00D7 at the exact commitment moment.", left: { title: "Generic Guarantee (Ignored)", color: "#EF4444", items: [
      { strong: "\"100% satisfaction guaranteed!\"", note: "Unfalsifiable marketing phrase. Buyers mentally discount it." },
      { strong: "\"Money-back guarantee\"", note: "No timeline, no trigger. Buyer doesn\u2019t know what they\u2019d do to claim it." },
      { strong: "\"We stand behind our product\"", note: "Says nothing. Every company says this. Zero signal." },
      { strong: "\"Risk-free trial\"", note: "Requires \"risk-free\" to be defined \u2014 and it isn\u2019t. Hollow phrase." },
    ] }, right: { title: "Specific Guarantee (Converts)", color: "#10B981", items: [
      { strong: "\"30-day full refund, no sales call\"", note: "Timeline + friction removal. Specific. Believable." },
      { strong: "\"Email \u2018refund\u2019 to hello@ and receive 100% refund within 48 hours\"", note: "Exact trigger, exact timeline, exact outcome. Falsifiable." },
      { strong: "\"Keep the bonus materials even if you refund\"", note: "Extra goodwill. Signals confidence. Reduces buyer\u2019s risk further." },
      { strong: "\"Last 847 buyers: 2.3% refund rate. We\u2019re confident you\u2019ll be in the 97.7%.\"", note: "Data-backed confidence. Transforms guarantee into proof." },
    ] }, footer: "Rule: a guarantee is as believable as its specificity. Vague guarantees get ignored; specific ones close sales." },
    { type: "table", title: "Risk Reversal Types \u2014 Pick What Fits Your Offer", subtitle: "Each risk reversal serves a different objection. Choose the one that dissolves your audience\u2019s specific fear at the commitment moment.", columns: ["Type", "When It Works Best", "Example"], rows: [
      ["Money-back guarantee", "For digital products, courses, SaaS \u2014 low delivery cost", "\"30-day money-back, email \u2018refund\u2019 to claim\""],
      ["Performance guarantee", "Services / coaching / B2B \u2014 where outcomes are specific + measurable", "\"If you don\u2019t hit 20% efficiency gain in 90 days, we refund + work free until you do\""],
      ["Free trial / sample", "SaaS / SaaS-adjacent \u2014 when experiencing the product sells it", "\"Try 14 days free \u2014 no card required. Keep your data if you cancel.\""],
      ["Done-for-you guarantee", "Services \u2014 where the buyer fears the work", "\"We\u2019ll set everything up for you. If you hate it, we remove it all + refund 100%.\""],
      ["Double-or-nothing", "Coaching / education \u2014 when the outcome is the main pitch", "\"Hit the target or we refund 2\u00D7 what you paid. Every client, every cohort.\""],
      ["No-questions refund", "Any offer under $1K \u2014 where the cost of refund is small", "\"Email. We refund. No survey, no call, no form.\""],
    ], footer: "Rule: pick the one risk reversal that addresses YOUR audience\u2019s primary fear. Stacking 4 guarantees looks desperate; one strong one looks confident." },
    { type: "exercise", title: "Design a Close for Your Offer", intro: "Pick an offer. Write the last 400 words of the sales page \u2014 summary + risk reversal + CTA + P.S.", items: [
      { num: "1", copy: "Write the offer summary in 80\u2013120 words. Stack the components: core product + bonuses + support + guarantee.", answer: "Example: \u201CYou get: the full 8-module course ($1,497) + 6 months of weekly group Q&A ($497 value) + the private community + the 1:1 kickoff call + a 30-day no-questions refund. Total value: $2,494. Your price today: $1,497.\"" },
      { num: "2", copy: "Write the risk reversal \u2014 specific timeline + specific trigger + specific outcome + confidence proof.", answer: "Example: \u201CTry the course for 30 days. If it doesn\u2019t fit, email \u2018refund\u2019 to hello@ and your card will be refunded within 48 hours. Last 400 students: 2.1% refund rate.\"" },
      { num: "3", copy: "Write the explicit CTA. One line + micro-copy below it.", answer: "Example: \u201CBecome a student today \u2192 [button]. Under the button: \u2018$1,497 one-time. 30-day refund. Access within 5 minutes of payment.\u2019\"" },
      { num: "4", copy: "Write the P.S. \u2014 restate the strongest proof point OR the most important urgency fact.", answer: "Example: \u201CP.S. This cohort is capped at 50 students to keep the Q&A calls actually useful. 37 spots remain. When those 13 fill, enrolment closes until Q3. \u2014 [Your Name]\"" },
    ] },
  ],
};
