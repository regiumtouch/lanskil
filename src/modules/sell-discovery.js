// Sales Fundamentals — Module 4: Discovery — Asking the Right Questions
export const sellDiscoveryModule = {
  id: "sell04",
  title: "Discovery \u2014 Asking the Right Questions",
  type: "Rich Module",
  duration: "90 min",
  desc: "The conversation that decides the deal. SPIN, BANT, MEDDIC, active listening \u2014 and the discovery discipline that separates consultants from pitch-people.",
  topics: ["SPIN Questioning", "BANT Qualification", "MEDDIC Framework", "Active Listening", "Pain Discovery", "When to Stop Asking"],
  quiz: [
    { q: "You're 15 minutes into a 45-minute discovery call. The prospect has spoken 180 words total across your first three questions; you've spoken 740 words (follow-ups + context). For the next 30 minutes, the correct adjustment is:", opts: ["Tighten your follow-ups to ~15 words max per turn and build in 2-3 deliberate pauses after open questions — the ratio you're hearing is you training them to stay quiet", "Ask fewer but harder questions; the prospect needs your framing more than more questions", "Keep current balance — they're clearly not a talkative buyer, this is just their style", "Cut the call short — the fit is unclear"], correct: 0 },
    { q: "A prospect says: \"We've tried two other tools like yours, and neither one worked.\" The strongest single follow-up is:", opts: ["\"This one's different because of [our differentiation]\"", "\"What specifically happened? What was working before it broke down, and what was missing by the end?\" — surfaces both positive signal and the gap simultaneously", "\"Who owned those implementations internally?\"", "\"What made each of them ultimately fail?\""], correct: 1 },
    { q: "In SPIN, a prospect confirms current state (Situation), names a real problem (Problem), but shrugs when asked about Implication. The disciplined next move:", opts: ["Skip Implication — some buyers aren't articulate; move to Need-payoff and the pitch", "Restate the problem, then re-ask Implication with stakeholder-specificity: \"when [problem] happens, who else on the team feels it — and how?\" — narrows the abstraction so the buyer can actually answer", "Book a second call; they're not ready", "Offer a demo to make the problem concrete"], correct: 1 },
    { q: "10 minutes into discovery, the prospect interrupts: \"Honestly, can you just show me the product?\" Strongest response:", opts: ["Pivot to the demo to preserve rapport", "\"Happy to — and 10 more minutes of questions lets me show you the 2-3 things that actually move your problem, instead of the generic tour. Worth it?\" — conditional agree; reframes discovery as an investment in their time", "Refuse and push through your script", "Reschedule to a proper demo call"], correct: 1 },
    { q: "After 40 minutes of discovery your MEDDIC scores are: M=1, E=0, D=0, D=0, I=2, C=0 (total 3/18). You have 5 minutes left. The single highest-leverage question to ask now is:", opts: ["\"Can you quantify what this is costing you per month?\" — upgrades M toward 3 and Identify-Pain toward 3", "\"Can we schedule a demo?\" — moves the deal forward", "\"Beyond yourself, who else is involved in decisions like this, and how do they typically weigh in?\" — one question that simultaneously upgrades Economic Buyer, Decision Process, and Champion visibility", "\"What's your budget range?\""], correct: 2 },
    { q: "Late in a discovery call you realize the prospect is clearly not an ICP fit (too small, wrong industry). The disciplined move:", opts: ["Disqualify gracefully in the call: \"Honest read — I don't think we're the best fit here, but [competitor/resource] probably is. Want me to make an intro?\" — preserves reputation, often generates referral goodwill", "Try to close anyway — every deal is a deal", "Finish the call politely without saying anything about fit — preserve the future relationship", "End the call abruptly"], correct: 0 },
  ],
  slides: [
    { type: "cover", module: "MODULE 4", title: "Discovery \u2014", titleAccent: "Asking the Right Questions", subtitle: "The conversation that decides the deal. SPIN, BANT, MEDDIC, active listening \u2014 and the discipline that separates consultants from pitch-people.", meta: "Sales Fundamentals  |  Module 4  |  7 Slides" },
    { type: "stats", eyebrow: "WHY DISCOVERY DECIDES EVERYTHING", title: "Deals are won or lost in the discovery call, not the demo", intro: "Most deals are won before the pitch ever happens. A strong discovery call surfaces real pain, quantifies cost, identifies the decision-makers, and builds the consultant-relationship that makes closing natural. Weak discovery forces you to sell harder.", stats: [
      { num: "30 / 70", label: "the ideal seller-talk to buyer-talk ratio in a discovery call" },
      { num: "3\u20135\u00D7", label: "higher close rate on deals preceded by 60+ min of deep discovery vs 20-min qualification" },
      { num: "80%", label: "of B2B discovery calls leave major MEDDIC criteria unanswered \u2014 most sellers think they know more than they do" },
    ], subheading: "What Strong Discovery Uncovers", bullets: [
      "The specific pain + its real business cost (quantified, not qualified)",
      "Who\u2019s really buying (the Economic Buyer, not just the daily contact)",
      "The decision process + timeline + criteria",
      "What the prospect has tried (competitors, in-house attempts) and why those failed",
      "The prospect\u2019s vocabulary \u2014 used later in the pitch to mirror them back",
    ] },
    { type: "grid", eyebrow: "THE FOUR QUESTION FRAMEWORKS", title: "Each framework serves a different discovery job", subtitle: "Great sellers blend frameworks \u2014 they don\u2019t religiously follow one. Know each; apply what fits.", items: [
      { num: "01", title: "SPIN", desc: "Situation \u2192 Problem \u2192 Implication \u2192 Need-Payoff. The foundational questioning progression. Surfaces pain + quantifies it.", icon: "\u{1F4DA}" },
      { num: "02", title: "BANT", desc: "Budget, Authority, Need, Timeline. Qualification filter. Cheap, old, sometimes crude \u2014 but still a fast check.", icon: "\u2705" },
      { num: "03", title: "MEDDIC", desc: "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion. Deeper enterprise qualification.", icon: "\u{1F3AF}" },
      { num: "04", title: "Command-of-the-Message", desc: "Tie every discovery answer to specific business outcomes the buyer cares about. Forces you to connect product to value.", icon: "\u{1F5E3}\uFE0F" },
    ], footer: "Rule: use SPIN for the question structure. Use MEDDIC (or BANT) for the qualification check. Run them simultaneously during the call." },
    { type: "principle", num: "01", title: "The SPIN Progression \u2014 Questions That Uncover Real Pain", intro: "SPIN (Neil Rackham, 1988) is still the cleanest question framework 35+ years later. It moves the buyer from stating facts to feeling the cost of their problem \u2014 without you pushing.", sectionTitle: "The 4 Question Types, In Order", sections: [
      { heading: "S \u2014 Situation Questions", example: "\u201CHow is your team currently handling [process]?\u201D / \u201CHow many reps do you have on outbound?\u201D", note: "Fact-gathering. Keep minimal (3\u20135 max); don\u2019t waste the call on research you should have done beforehand." },
      { heading: "P \u2014 Problem Questions", example: "\u201CWhat\u2019s hardest about running outbound at that scale?\u201D / \u201CWhere are you seeing breakdowns?\u201D", note: "Surfaces pain. Buyer starts describing problems in their own words. Note the exact language they use." },
      { heading: "I \u2014 Implication Questions", example: "\u201CIf that pattern continues through Q2, what\u2019s the revenue impact?\u201D / \u201CWhat happens if [problem] doesn\u2019t get solved in the next 6 months?\u201D", note: "The power question. Quantifies cost. Buyer starts feeling the pain, not just describing it." },
      { heading: "N \u2014 Need-Payoff Questions", example: "\u201CIf we could help you [solve the problem], what would that mean for the team?\u201D", note: "Gets the buyer to articulate the value of solving it. They sell themselves on the solution." },
    ], rule: "Spend most of discovery in the P + I questions. That\u2019s where the pain gets surfaced AND quantified \u2014 which is what makes the solution feel necessary, not optional." },
    { type: "comparison", eyebrow: "PITCH-MODE vs DISCOVERY-MODE", title: "Two discovery calls on the same prospect", subtitle: "One seller runs a demo disguised as discovery. One runs real discovery. Both submit quotes; only one gets signed.", left: { title: "Pitch-Mode Discovery (Loses Deals)", color: "#EF4444", items: [
      { strong: "Spends 40 of 50 minutes showing the product", note: "Seller talks 80%. Buyer doesn\u2019t get to describe their own pain." },
      { strong: "Asks Situation questions but skips Problem + Implication", note: "Never quantifies cost of inaction. Buyer has no urgency." },
      { strong: "Doesn\u2019t identify the Economic Buyer", note: "Pitches to the wrong audience. Champion can\u2019t sell internally." },
      { strong: "Result: quote sent, \u201Cwe\u2019ll think about it,\u201D deal dies", note: "Classic pattern. Seller wonders what went wrong; the answer was the discovery call 4 weeks earlier." },
    ] }, right: { title: "Real Discovery (Closes Deals)", color: "#10B981", items: [
      { strong: "Spends 35 of 50 min listening; 10 min asking follow-ups; 5 min on product only if explicitly requested", note: "Seller talks 30%. Buyer articulates pain in their own words." },
      { strong: "Runs full SPIN \u2014 especially Implication. Buyer quantifies pain: \u201Cthis is costing us ~$180K/quarter\u201D", note: "Pain quantified. Urgency manufactured by the buyer, not the seller." },
      { strong: "Names the Economic Buyer (\u201CWho would sign off?\u201D); requests their involvement in next step", note: "Champion equipped. Right audience at right time." },
      { strong: "Result: follow-up includes Economic Buyer; deal closes 3 weeks later", note: "Discovery did the work. Closing becomes natural because the buyer already sold themselves." },
    ] }, footer: "Rule: good discovery feels like a consultation, not a sales call. When buyers feel understood, they stop being buyers and start being collaborators." },
    { type: "table", title: "The MEDDIC Scorecard", subtitle: "After every discovery call, rate yourself 1\u20135 on each MEDDIC dimension. Anything under 3 = you haven\u2019t finished discovery.", columns: ["Letter", "What It Means", "Key Question to Answer"], rows: [
      ["M \u2014 Metrics", "The quantifiable business outcome the buyer cares about", "\"What specifically will this save or grow, measured how?\""],
      ["E \u2014 Economic Buyer", "The person who can sign / approve the spend (often not daily contact)", "\"Who needs to approve spend of this size?\""],
      ["D \u2014 Decision Criteria", "The official evaluation criteria this deal will be judged on", "\"How will you decide between options?\""],
      ["D \u2014 Decision Process", "The actual steps + timeline the decision moves through", "\"Walk me through how you\u2019d actually buy this.\""],
      ["I \u2014 Identify Pain", "The specific pain that drives this buy (not generic benefit)", "\"What\u2019s the business problem we\u2019re solving here?\""],
      ["C \u2014 Champion", "An internal advocate with influence, who sells the deal internally for you", "\"Who believes this is worth doing + can help move it forward?\""],
    ], footer: "Rule: anything scored under 3/5 is a gap. If M is a 2, you haven\u2019t quantified value. If E is a 1, you\u2019re pitching to the wrong person. Fix gaps before the next meeting." },
    { type: "exercise", title: "Draft Your Discovery Question Set", intro: "Before your next real discovery call, write out your specific SPIN questions. Don\u2019t wing it; prep the question sequence.", items: [
      { num: "1", copy: "Write 3 Situation questions specific to the prospect\u2019s industry + role. (Max 3 \u2014 resist the urge to ask more.)", answer: "Example: \"How many reps on the outbound team?\" / \"What CRM are you running?\" / \"How are you currently measuring reply rates?\"" },
      { num: "2", copy: "Write 5 Problem questions \u2014 open-ended, specific to likely pain areas in their role.", answer: "Example: \"What\u2019s been hardest about outbound reply rates at your stage?\" / \"Where do most reps get stuck?\" Problem questions surface pain they\u2019ll later feel." },
      { num: "3", copy: "Write 4 Implication questions \u2014 quantifying the cost of the problem persisting.", answer: "Example: \"If reply rates stay at 2%, what\u2019s the Q3 pipeline impact?\" / \"What would one more lost quarter mean for hiring?\" The pain gets real." },
      { num: "4", copy: "Write 2 Need-Payoff questions \u2014 letting the buyer articulate the value of solving it.", answer: "Example: \"If we could get you to 7% reply rates, what would that mean for Q3?\" \"How would solving this change the team\u2019s quarterly rhythm?\" Buyer sells themselves." },
    ] },
  ],
};
