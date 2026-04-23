// Sales Fundamentals — Module 9: Negotiation Tactics
export const sellNegotiationModule = {
  id: "sell09",
  title: "Negotiation Tactics",
  type: "Rich Module",
  duration: "90 min",
  desc: "Holding price, trading concessions, the win-win close. The negotiation craft that protects margin without losing deals — anchoring, concession pairing, silence, and the conditional yes.",
  topics: ["Holding Price", "Concession Trading", "Anchoring", "The Conditional Yes", "Using Silence", "Procurement Moves"],
  quiz: [
    { q: "You've decided to give a 10% discount. Two framings for the paired ask: (A) \"I can do 10% off if you commit to a 3-year term.\" (B) \"If we were able to find 10% flexibility, what could you do on your end — 3-year term, annual upfront, reference rights?\" Which typically produces better outcomes?", opts: ["A — clearer and more direct", "B — the conditional, open framing invites the buyer to propose their own trade, which often turns out to be larger than the one you'd have asked for. Also preserves ambiguity on the discount until the trade is defined", "Neither — discounts always train bad negotiating behavior", "Both roughly equal"], correct: 1 },
    { q: "Buyer: \"Your competitor is offering 30% less. Match or we walk.\" A 30% discount puts you below margin. Best response:", opts: ["Match the 30% — a margin hit beats a lost deal", "\"Let me understand — is this ultimately a sticker-price decision, or is [outcome X] still the driver? We can't match 30% on this scope; at that price we can't deliver [specific value]. I can rethink scope to get you to a lower number, but the same scope at 30% off will hurt your outcome more than it helps\" — reframes and offers scope-for-price as the path", "Walk immediately", "Match but demand a 5-year term"], correct: 1 },
    { q: "You've been negotiating for 3 weeks. Buyer is pushing for a fifth concession. Strongest internal move:", opts: ["Give the fifth concession to save the deal", "Test first: \"Each additional ask is eroding the business case. Is there still alignment on the original criteria, or has something changed internally?\" — a fifth concession ask often means the underlying deal has shifted (new stakeholder, new priority). Diagnose before conceding", "Escalate to their CEO", "Walk away immediately"], correct: 1 },
    { q: "Buyer asks for a 6-month \"trial\" at full price. Your standard is 12-month annual. The hidden risk:", opts: ["Short contracts are operationally awkward", "It's a de-facto discount in disguise. At renewal in 6 months, the buyer has maximum leverage and your CS team hasn't had time to prove value. The apparent price-hold is actually a worse deal than a 10% discount on a 12-month", "Legal complexity", "Revenue recognition timing"], correct: 1 },
    { q: "Procurement says \"20% off or we can't get this through approval.\" Your Champion privately tells you \"they'll sign at 5%.\" Best move:", opts: ["Trust the Champion — hold at 5%", "Give the 20% — procurement has institutional power", "Direct conversation with procurement: \"Help me understand what's driving the 20% — if we worked on scope or terms rather than sticker, is there a path?\" — treats procurement as a partner, doesn't expose or contradict the Champion, and often reveals genuine flexibility", "Go around procurement to the EB"], correct: 2 },
    { q: "You close at 4% off after the buyer requested 15%. Six months later the buyer tells you: \"Honestly, we'd have paid full price.\" The lesson:", opts: ["Next time, anchor higher", "Before moving sticker next time, test what non-price concessions would satisfy procurement. Most discount asks from procurement are negotiable at near-zero if non-price value (implementation speed, reference rights, scope expansion) is offered skillfully. Sticker holds far more often than sellers believe", "Always hold at 100%", "Procurement was lying — disregard"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 9", title: "Negotiation", titleAccent: "Tactics", subtitle: "Holding price. Trading concessions. The win-win close. Protect margin without losing deals.", meta: "Sales Fundamentals  |  Module 9  |  7 Slides" },
    { type: "stats", eyebrow: "WHY NEGOTIATION IS THE HIGHEST-PAID SKILL", title: "A 5% margin lift compounds more than a 20% close-rate lift", intro: "Every concession you give permanently lowers your deal economics. Sellers who negotiate well don’t win more deals — they win the same deals at dramatically better terms. Over a career, this is where top sellers separate.", stats: [
      { num: "22%", label: "average discount given by reps who haven’t been trained in negotiation — vs 7% for trained reps on the same deals" },
      { num: "5×", label: "the career earnings delta between a 10-yr rep who holds price and one who discounts reflexively" },
      { num: "87%", label: "of procurement discount requests are policy, not position — they expect to hear “no” once and will proceed anyway" },
    ], subheading: "What Disciplined Negotiators Do Differently", bullets: [
      "Never give a concession without a paired ask",
      "Use silence as a lever — after stating position, stop talking",
      "Separate “can’t” from “won’t” — understand buyer constraints before conceding",
      "Treat procurement games as theatre, not threat",
      "Anchor high and move in small, decreasing increments",
    ] },
    { type: "grid", eyebrow: "THE 4 LEVERS YOU CAN TRADE", title: "Don’t just negotiate on price", subtitle: "Most reps only negotiate on one dimension — the headline price. Great negotiators move across 4 levers and find trades that cost little but earn buyer commitment.", items: [
      { num: "01", title: "Price", desc: "The obvious lever. Use last, not first. Every % given here is permanent.", icon: "\u{1F4B0}" },
      { num: "02", title: "Terms", desc: "Payment timing, annual vs monthly, deposit, upfront commit. Worth 5–15% margin equivalent — and easier to give than headline price.", icon: "\u{1F4C4}" },
      { num: "03", title: "Scope", desc: "Number of seats, modules included, support tier, onboarding hours. Move on scope before you move on price.", icon: "⚙️" },
      { num: "04", title: "Timing", desc: "Start date, ramp-up period, implementation schedule. Buyers often value faster start; sellers can give this cheaply.", icon: "⏱️" },
    ], footer: "Rule: exhaust Terms + Scope + Timing before you touch Price. Most deals close with a creative mix — not with a sticker discount." },
    { type: "principle", num: "01", title: "The Concession-for-Concession Doctrine", intro: "The single most important negotiation discipline: every concession you give is paired with a buyer-side commitment. This trains the buyer that your terms are not free to move, and it protects your margin without losing the deal.", sectionTitle: "The 4 Rules of Paired Concessions", sections: [
      { heading: "1. Never give a unilateral concession", example: "Wrong: “OK, I can do 10% off.” Right: “I can do 10% off if we sign a 3-year term instead of annual.”", note: "Every yes is paired with an ask. Trains the buyer that price has weight." },
      { heading: "2. Ask for the trade before giving the concession", example: "“If I were able to get to that number, could you commit to a 3-year term + case study rights?” (conditional, not committed)", note: "The conditional yes lets you test buyer willingness without actually conceding." },
      { heading: "3. Trade small things for big things", example: "Give: implementation kickoff in 2 weeks instead of 4 (cheap to you). Get: quarterly reference call (worth $40K+ in referred pipeline).", note: "Look for asymmetries where what you give costs you little and what you get is high-value." },
      { heading: "4. Slow the pace on each concession", example: "Don’t concede quickly. Pause. “Let me check.” Come back with the conditional. Fast concessions signal room for more.", note: "Speed of concession correlates with buyer’s belief that there’s more to come. Move slowly." },
    ], rule: "A concession given freely trains the buyer that your next position is also negotiable. A concession traded reinforces that every number on the table has weight." },
    { type: "comparison", eyebrow: "NOVICE vs PRO NEGOTIATOR", title: "Same procurement ask, two different postures", subtitle: "Procurement asks for 15%. One seller gives 15%. The other ends up at 4% + gets a 3-year lock.", left: { title: "Novice Seller (Reactive)", color: "#EF4444", items: [
      { strong: "Responds to 15% ask in <60 seconds with “let me see what I can do”", note: "Speed signals flexibility. Procurement now knows there’s more room." },
      { strong: "Returns 24hrs later with 10% as a “best I can do”", note: "Sellers who come back with lower numbers train the buyer that their numbers are arbitrary." },
      { strong: "When pushed, gives the full 15% unilaterally — no paired ask", note: "Now the buyer has paid training in how to get concessions from this seller. Forever." },
      { strong: "Announces the discount as a win: “I got approval for the full 15%”", note: "Positions the concession as generous rather than reluctant. Undervalues what was given." },
    ] }, right: { title: "Pro Seller (Structured)", color: "#10B981", items: [
      { strong: "Pauses 5 full seconds after the 15% ask, then: “Help me understand — what’s driving that specific number?”", note: "Silence + probe reframes the conversation from “how low” to “what problem are we solving.”" },
      { strong: "Comes back with: “4% off is possible if we move to a 3-year term. Otherwise price holds.”", note: "Trade is clear. Buyer now has to choose between 15% off at 1 year vs 4% off at 3 years — both real options for the vendor." },
      { strong: "Treats procurement friction as theatre: calm, patient, unbothered", note: "Procurement reads emotional stability as strength. Creates respect; often gets the full ask approved." },
      { strong: "If the 4% is accepted, closes with a small ask: “And if we can add a reference call in Q3, we can start implementation next week” — free upside.", note: "Every negotiation has room for small asks that cost nothing and compound over time." },
    ] }, footer: "Rule: procurement respects structure, not generosity. A seller who trades gets better final terms than one who concedes." },
    { type: "table", title: "The Concession Ladder", subtitle: "When concessions are necessary, move in small, decreasing increments — not in one large step.", columns: ["Round", "Max Move", "Paired Ask"], rows: [
      ["Round 1 (opening price push)", "Hold price; offer non-price value (extra onboarding, case study rights)", "Verbal commit to close this week"],
      ["Round 2 (real buyer pressure)", "3–5% — if matched with term extension (2–3 yr) or upfront annual", "Signed term extension in writing"],
      ["Round 3 (procurement escalation)", "Additional 1–2% — if matched with multi-year, reference rights, logo usage", "Written reference + logo rights"],
      ["Round 4 (exec-level escalation)", "No further price move. Offer one-time value instead (pro services, upgrade credit)", "Exec-level sponsorship / joint press"],
      ["Round 5+ (walk point)", "Stop. Walk if buyer keeps pushing — deals closed at maximum discount erode team margin + create precedent", "The walk itself is the ask"],
    ], footer: "Rule: each step is smaller than the last. Accelerating concessions signal panic; decelerating concessions signal discipline." },
    { type: "exercise", title: "Run a Negotiation Drill on Your Top Deal", intro: "Take your highest-revenue live deal. Write out the likely procurement / buyer asks. Pre-plan your paired-ask responses so you’re not negotiating reactively in the moment.", items: [
      { num: "1", copy: "List the 3 concession asks you’re most likely to face on this deal (price cut, term shortening, custom scope).", answer: "If you can’t predict them, you’re not close enough to the deal. Ask your Champion: “When procurement gets involved, what will they push on?”" },
      { num: "2", copy: "For each concession, write the paired ask you will require — the buyer-side commitment you’d trade for.", answer: "Examples: 3-year term for 5% off. Written reference for implementation acceleration. Upfront annual payment for net-30 → net-15." },
      { num: "3", copy: "Draft the exact words of your first response to each ask — including a 5-second pause built in.", answer: "Pre-scripting the response removes in-moment pressure. You won’t give a reactive concession because you already know the next line." },
      { num: "4", copy: "Rehearse the drill out loud — ideally with a peer playing the procurement role.", answer: "Reps who rehearse hold price 3× more often than reps who plan only mentally. The body remembers rehearsed language; it improvises under pressure." },
    ] },
  ],
};
