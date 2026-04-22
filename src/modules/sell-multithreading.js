// Sales Fundamentals — Module 10: Multi-threading & Stakeholder Management
export const sellMultithreadingModule = {
  id: "sell10",
  title: "Multi-threading & Stakeholder Management",
  type: "Rich Module",
  duration: "90 min",
  desc: "The enterprise survival skill. Power mapping, building champions, getting past your single point of contact, and keeping the deal alive when your champion leaves — the moves that keep complex deals from dying in committee.",
  topics: ["Power Mapping", "Champion Development", "Stakeholder Archetypes", "Access Strategies", "Single-Thread Risk", "Champion Departures"],
  quiz: [
    { q: "“Multi-threading” a deal means:", opts: ["Running multiple product demos", "Selling multiple products in one contract", "Engaging 3–5+ stakeholders across different roles and levels so the deal doesn’t die with one champion", "Closing multiple deals at the same company"], correct: 2 },
    { q: "Single-threaded enterprise deals close at what rate vs multi-threaded:", opts: ["Same rate", "Slightly lower — about 10% less", "Dramatically lower — roughly 3× less likely to close, and 5× more likely to slip a quarter", "Slightly higher — champions move fast"], correct: 2 },
    { q: "Your champion just got promoted into a different division. The correct move is:", opts: ["Panic — the deal is dead", "Treat this as a wake-up call — if you’re only now realising you need a second thread, you were single-threaded. Reach out to the replacement immediately AND re-engage anyone else you met", "Wait for them to reach out to you", "Close the deal quickly before they forget"], correct: 1 },
    { q: "The Economic Buyer typically:", opts: ["Is your day-to-day contact", "Is almost never your day-to-day contact — they appear late, have signing authority, and can kill the deal regardless of how much your contact loves the product", "Sends the first cold email reply", "Manages procurement"], correct: 1 },
    { q: "The best first question to ask a contact to start multi-threading is:", opts: ["“Who else needs to approve this?”", "“Beyond yourself, who else will be part of this decision — and how do they typically weigh in?” — open-ended, invites introductions, surfaces the full committee", "“Can I have your CEO’s email?”", "“Do you have authority?”"], correct: 1 },
    { q: "A “Blocker” stakeholder in an enterprise deal is typically:", opts: ["Someone who says “no” early", "Often a quiet mid-level stakeholder whose status, workload, or legacy is threatened by the change — they rarely block loudly; they stall, delay, and request infinite diligence", "The CEO", "Procurement"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 10", title: "Multi-threading &", titleAccent: "Stakeholder Management", subtitle: "The enterprise survival skill. Power mapping, building champions, keeping deals alive when your champion leaves.", meta: "Sales Fundamentals  |  Module 10  |  7 Slides" },
    { type: "stats", eyebrow: "WHY SINGLE-THREADED DEALS DIE", title: "Every unilaterally-championed deal is one re-org away from death", intro: "Enterprise buying happens in committee. Sellers who engage one person and stop are building on a single point of failure. Multi-threading is not optional at enterprise scale — it is the craft that determines whether you hit quota or miss it.", stats: [
      { num: "34%", label: "close rate on single-threaded enterprise deals (one seller contact, one buyer contact)" },
      { num: "76%", label: "close rate on deals with 3+ engaged buyer stakeholders across levels" },
      { num: "28%", label: "of enterprise deals lose their champion mid-cycle — through promotion, departure, re-org, or role change" },
    ], subheading: "What Multi-thread Discipline Looks Like", bullets: [
      "Map the power structure on paper by Week 2 of discovery",
      "Develop at least 2 active champions across different functions or levels",
      "Engage the Economic Buyer directly by mid-cycle — not only at close",
      "Build relationships with potential Blockers before they block",
      "Treat champion meetings as one part of an ongoing multi-stakeholder orchestration",
    ] },
    { type: "grid", eyebrow: "THE 4 STAKEHOLDER ARCHETYPES", title: "Every enterprise deal has these 4 roles — you’ll recognise them once you look", subtitle: "The same archetypes show up in deal after deal. Identifying them tells you exactly how to engage each one.", items: [
      { num: "01", title: "Champion", desc: "Has influence, has personal stake, will sell for you when you’re not in the room. You need at least one — ideally two.", icon: "\u{1F6E1}" },
      { num: "02", title: "Economic Buyer", desc: "Signs the PO. Has discretionary budget. Rarely your day-to-day contact. Must be engaged directly before close.", icon: "\u{1F46E}" },
      { num: "03", title: "Coach", desc: "Friendly but not decision-making. Shares internal info, reads the room for you. Valuable for intel — not sufficient as your only thread.", icon: "\u{1F393}" },
      { num: "04", title: "Blocker", desc: "Has status, workload, or legacy threatened by the change. Rarely blocks loudly — instead: stalls, delays, requests infinite diligence. Engage early with respect.", icon: "\u{1F6A7}" },
    ], footer: "Rule: for every deal, name one real person in each archetype. If you can’t name a Blocker, you haven’t looked hard enough — they exist in every committee." },
    { type: "principle", num: "01", title: "Power Mapping — On Paper, Week 2", intro: "Power mapping is the discipline of drawing the buyer’s organisation on paper and marking every stakeholder’s influence, posture toward you, and relationship to one another. Done once, updated monthly, it prevents nearly every late-stage enterprise surprise.", sectionTitle: "The 5 Questions a Power Map Must Answer", sections: [
      { heading: "1. Who are the stakeholders — by name, not title", example: "“Sarah (VP Ops), Mark (CFO), Priya (Head of IT), Dan (Legal), Chris (Champion’s peer)”", note: "Title alone is insufficient — names tie accountability to real people." },
      { heading: "2. What’s each person’s influence on the decision (high / med / low)", example: "Mark (CFO): high — writes the cheque. Dan (Legal): medium — can delay 6 weeks. Chris (peer): low — informs Sarah informally.", note: "Not all stakeholders are equal. Allocate your time in proportion to influence." },
      { heading: "3. What’s each person’s posture toward our solution (advocate / neutral / sceptic / blocker)", example: "Sarah: advocate. Mark: neutral. Priya: sceptic (prefers incumbent). Dan: neutral.", note: "Neutrals are convertible. Sceptics need different engagement than Advocates — map before acting." },
      { heading: "4. What’s the relationship between stakeholders", example: "Mark trusts Sarah’s judgment; Priya and Sarah have territorial friction; Dan defers to whoever talks to him last.", note: "Internal dynamics often decide deals. If Priya and Sarah are rivals, Sarah pushing our solution activates Priya to resist it." },
      { heading: "5. Which stakeholders have we engaged directly, vs through intermediaries", example: "Engaged directly: Sarah (8×), Chris (2×). Via Sarah only: Mark, Priya, Dan. Risk: all our exposure to the committee is filtered through one person.", note: "This is the single most important question — it surfaces single-thread risk." },
    ], rule: "Draw the map in Week 2. Update monthly. Share with your manager on every deal review. Any stakeholder not directly engaged by mid-cycle is a known risk." },
    { type: "comparison", eyebrow: "SINGLE-THREADED vs MULTI-THREADED", title: "Same account, two rep strategies", subtitle: "Single-threaded rep builds a strong relationship and crosses fingers. Multi-threaded rep builds a web.", left: { title: "Single-Threaded Rep (Fragile)", color: "#EF4444", items: [
      { strong: "Engages only with Sarah (the VP Ops) — 8 meetings, 20 emails, warm relationship", note: "Deep single relationship. Feels productive. Catastrophically fragile." },
      { strong: "Meets Mark (CFO) once at the kickoff, never again", note: "Economic Buyer has no direct relationship with the seller. Any real pushback from Mark goes unanswered." },
      { strong: "Never meets Priya (IT) — Sarah says she’ll ‘handle internal alignment’", note: "The sceptic is being handled by a non-seller. Her objections never get surfaced to the vendor to address." },
      { strong: "When Sarah gets promoted in month 4, deal silently dies", note: "Replacement contact has no relationship with the seller. No warm handoff. Deal disqualifies 3 months later." },
    ] }, right: { title: "Multi-Threaded Rep (Resilient)", color: "#10B981", items: [
      { strong: "Engages Sarah weekly, Mark monthly, Priya every 2 weeks, Chris on an ad-hoc basis", note: "Web of relationships. Each stakeholder has direct rep exposure. No single point of failure." },
      { strong: "Runs 1:1 with Mark (CFO) by Week 4 to align on the business case directly", note: "Economic Buyer is bought in directly — not through a filter. When price questions come, Mark already has context." },
      { strong: "Engages Priya (IT) early with a security brief + migration plan — converts sceptic to neutral", note: "Scepticism surfaced and addressed in the open. Risk visible; mitigated." },
      { strong: "When Sarah gets promoted, deal doesn’t skip a beat — Mark sponsors, Priya’s team executes", note: "Multi-threading has created deal resilience. Champion change is a bump, not a death." },
    ] }, footer: "Rule: your deal resilience = the number of stakeholders who would fight for it if your champion left tomorrow. Count them." },
    { type: "table", title: "Stakeholder Access Scripts", subtitle: "How to move from single-threaded to multi-threaded without tripping over your champion.", columns: ["Stakeholder", "Best Access Path", "Opening Script"], rows: [
      ["Economic Buyer (CFO-level)", "Through your Champion, explicitly framed as business-case alignment", "“Sarah, for the business case review, Mark will want to see the ROI math directly. Could we invite him to a 20-min working session so I can walk him through it?”"],
      ["Peer advocates (lateral to Champion)", "Direct introduction; Champion signs off", "“Chris — Sarah mentioned your team ran into the same ramp-time problem last year. Could we swap 15 minutes? I’d love to understand how you solved it.”"],
      ["Sceptic / potential Blocker (IT, Security, Legal)", "Early, respectful, with content prepared — not to sell, but to address their criteria up front", "“Priya — I know Security/IT often becomes the gating function at this stage. Could we do a 30-min walkthrough of our SOC 2 + migration approach before that review starts?”"],
      ["Champion’s manager (one level up)", "Through Champion; positioning = alignment, not end-run", "“Sarah, for exec sponsorship clarity, would it be useful for me to spend 15 min with your manager as part of your normal check-in? I’d want you in the room.”"],
      ["Procurement", "Treat as a structured negotiation partner, not an adversary", "“Hi, I want to make this as smooth as possible on your side. Could we align early on your vendor process so there are no surprises in the final two weeks?”"],
    ], footer: "Rule: every access move runs through the Champion first. Going around your Champion destroys trust. Expanding with them builds it." },
    { type: "exercise", title: "Power-Map Your Top Deal", intro: "Draw the power map for your most important live deal. Identify the gaps. Plan the next 3 multi-threading moves.", items: [
      { num: "1", copy: "List every stakeholder you know of by name + title + role (Champion / EB / Coach / Blocker / unknown).", answer: "If you can’t name at least 4 people, you are single-threaded. Your first exercise is to get to 4 named humans." },
      { num: "2", copy: "For each stakeholder, mark: influence (H/M/L), posture (advocate/neutral/sceptic/blocker), direct-engagement status (met directly / via Champion / not met).", answer: "The pattern you’ll see: almost all your exposure runs through 1–2 people. That’s the problem to solve." },
      { num: "3", copy: "Identify the single highest-risk stakeholder you haven’t engaged directly. Write the access script (Slide 6 template) to reach them in the next 2 weeks.", answer: "Usually: the Economic Buyer or a potential Blocker. Get them on a call in the next 14 days — with your Champion’s blessing." },
      { num: "4", copy: "Put “power map review” on your weekly calendar. Update the map each Friday.", answer: "Most reps draw the map once and forget. Reps who review weekly catch stakeholder shifts in time to respond. This habit compounds." },
    ] },
  ],
};
