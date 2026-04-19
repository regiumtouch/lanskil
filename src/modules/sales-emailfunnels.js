// Sales Pages & Direct Response — Module 5: Email Funnels for Direct Response
export const salesEmailFunnelsModule = {
  id: "sales05",
  title: "Email Funnels for Direct Response",
  type: "Rich Module",
  duration: "90 min",
  desc: "Pre-launch, launch, and post-launch email sequences that move cold readers through to committed buyers \u2014 without burning the list.",
  topics: ["Pre-Launch Sequence", "Launch Week Cadence", "Cart Close Emails", "Post-Launch Recovery", "List Health", "Evergreen Funnels"],
  quiz: [
    { q: "A typical pre-launch email sequence for a course launch lasts:", opts: ["1 day", "7\u201321 days, warming cold readers through education \u2192 story \u2192 anticipation \u2192 doors opening; cold lists need longer warm-ups", "60 days", "5 minutes"], correct: 1 },
    { q: "Launch-week email cadence for an aggressive 5-day cart is typically:", opts: ["One email total", "6\u201310 emails across 5 days with increasing urgency \u2014 2 emails on final day, one at launch, one 3 hours before cart closes", "None \u2014 trust the page", "One per month"], correct: 1 },
    { q: "The highest-converting email of a typical launch week is:", opts: ["The first announcement", "The \"3 hours left\" email sent 3 hours before cart closes \u2014 urgency + scarcity + final opportunity combine peak intent", "A random mid-week check-in", "The thank-you email"], correct: 1 },
    { q: "Post-launch, you should email buyers AND non-buyers because:", opts: ["Just buyers", "Buyers need onboarding; non-buyers need to hear why they chose not to buy \u2014 which is the market research that informs your NEXT launch", "Only non-buyers", "Skip both"], correct: 1 },
    { q: "An email list that gets pounded during launch week with no value-add content:", opts: ["Is standard", "Burns out \u2014 open rates drop, unsubscribes rise, and next launch will convert 30\u201360% worse; balance aggressive launch weeks with high-value non-launch content", "Is the best strategy", "Recovers instantly"], correct: 1 },
    { q: "Evergreen funnels (always-on email sequences to new subscribers) differ from launch funnels in:", opts: ["They\u2019re identical", "Pacing (spread over weeks, not days), structure (each email stands alone), and urgency (deadline-based urgency replaced by bonus-based or capacity-based)", "Length only", "No real difference"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "Email Funnels", titleAccent: "for Direct Response", subtitle: "Pre-launch, launch, and post-launch email sequences that move cold readers through to committed buyers \u2014 without burning the list.", meta: "Sales Pages & Direct Response  |  Module 5  |  7 Slides" },
    { type: "stats", eyebrow: "WHY EMAIL STILL DOMINATES DR", title: "Email is the single most profitable channel in direct response", intro: "Ads bring the traffic; pages convert a small %. The rest of your revenue comes from email \u2014 nurturing, launching, recovering, and re-engaging. A well-built email funnel typically converts 3\u20135\u00D7 the cold traffic rate of the sales page alone.", stats: [
      { num: "40\u201360%", label: "of launch revenue typically comes from email in well-run DR launches" },
      { num: "4\u00D7", label: "lifetime value of a subscriber vs a cold page visitor who didn\u2019t subscribe" },
      { num: "15\u201325%", label: "of launch sales often close in the final 24 hours \u2014 the \"cart close\" email is the single highest-converting email" },
    ], subheading: "What Great DR Email Funnels Do", bullets: [
      "Move readers through Schwartz\u2019s 5 awareness levels in a specific sequence",
      "Balance launch-period aggression with non-launch value to prevent list burnout",
      "Segment buyers from non-buyers to send appropriate follow-up",
      "Build durable infrastructure (evergreen sequences) alongside campaign launches",
    ] },
    { type: "grid", eyebrow: "THE LAUNCH CYCLE", title: "Pre-launch / Launch / Post-launch \u2014 each phase has a different job", subtitle: "Running one phase like another is the most common launch mistake.", items: [
      { num: "01", title: "Pre-Launch (7\u201321 days)", desc: "Warm cold readers through problem-aware \u2192 solution-aware with stories, teaching, case studies. No hard selling yet.", icon: "\u{1F525}" },
      { num: "02", title: "Launch Week (3\u20137 days)", desc: "Open cart, escalate urgency, close hard. 6\u201310 emails. Each with specific job: announcement, social proof, objections, urgency, close.", icon: "\u{1F680}" },
      { num: "03", title: "Post-Launch (3\u201314 days)", desc: "Buyers get onboarding; non-buyers get a \"why didn\u2019t you buy?\" sequence. Post-launch research informs the NEXT launch.", icon: "\u{1F4CA}" },
    ], footer: "Rule: every launch ends. Post-launch is often where the highest-ROI learning happens \u2014 and almost no one does it properly." },
    { type: "principle", num: "01", title: "The Pre-Launch Sequence \u2014 Warming Cold Readers", intro: "Pre-launch is where the work gets done. Most launch failures trace back to insufficient warming \u2014 the list wasn\u2019t primed to buy when the cart opened. A good pre-launch sequence covers 3 bases: teach, prove, tease.", sectionTitle: "The 5-Email Pre-Launch Pattern", sections: [
      { heading: "Email 1: The \"Realisation\" Story (Day 1)", example: "A personal story that dramatises the problem. Reader should recognise themselves. No mention of product yet.", note: "Goal: earn opens on future emails by delivering value / entertainment / recognition right now." },
      { heading: "Email 2: The Teaching Piece (Day 4)", example: "Teach the core mechanism or framework. Pure value. Reader starts to see you as authority on the topic.", note: "This email converts fence-sitters into engaged subscribers. Pour value in; no selling yet." },
      { heading: "Email 3: The Case Study (Day 8)", example: "A named client\u2019s transformation using the method you teach. Specific numbers, specific timeframe.", note: "Proof that the teaching actually produces results. Social proof without hard sell." },
      { heading: "Email 4: The Tease (Day 12)", example: "Hint at what\u2019s coming. \"Next Tuesday, I\u2019m opening something I\u2019ve been building for 14 months.\"", note: "Reader commits to showing up. Anticipation peaks before doors open." },
      { heading: "Email 5: The Doors-Opening Email (Launch Day)", example: "Direct announcement + link to sales page + brief recap of why this matters.", note: "The cart is open. Everything in pre-launch pays off here. Expect 40\u201360% of total launch sales in the first 24 hours." },
    ], rule: "Every pre-launch email should make a non-buyer glad they opened. If they\u2019re not reading, pre-launch failed \u2014 and no amount of launch-week aggression fixes it." },
    { type: "comparison", eyebrow: "AGGRESSIVE vs SURGICAL", title: "Two 5-day launch sequences for the same $1,997 course", subtitle: "Launch A burns the list with 20 emails and gets short-term sales. Launch B sends 8 surgical emails and out-converts long-term AND next-launch.", left: { title: "Aggressive List-Burner", color: "#EF4444", items: [
      { strong: "20 emails in 5 days \u2014 some days with 5 emails", note: "Unsubscribes spike; open rates collapse; engagement plummets in the final 36 hrs." },
      { strong: "Copy-paste urgency in every email", note: "\"Last chance!\" sent 6 times loses meaning instantly." },
      { strong: "No value-add; 100% sell", note: "List burns; next launch typically converts 30\u201360% worse because engagement metrics tanked." },
      { strong: "Win rate: spikes short-term, decays long-term", note: "Each launch is diminishing returns. List lifetime value drops per cycle." },
    ] }, right: { title: "Surgical 8-Email Launch", color: "#10B981", items: [
      { strong: "8 emails in 5 days, each with a specific job", note: "Announcement (day 1), social proof (day 2), objection (day 3), case study (day 4), 48hr warning (day 4), 24hr urgency (day 5), 3hr close (day 5), cart-closed confirmation (day 5+1)." },
      { strong: "Urgency escalates naturally with real deadline pressure", note: "Each email has a reason to exist \u2014 not just \"send another one.\"" },
      { strong: "Value + selling blended \u2014 each email teaches + sells", note: "Non-buyers still get value; buyers see the product; nobody feels spam\u2019d." },
      { strong: "Win rate: strong short-term, compounding long-term", note: "List stays warm; engagement metrics stay healthy; next launch delivers 20\u201340% more than this one." },
    ] }, footer: "Rule: 8 surgical emails beat 20 aggressive ones on every measure that matters long-term. Every email must earn its place in the sequence." },
    { type: "table", title: "The Launch Week Email Beat Sheet (5-Day Cart)", subtitle: "Specific emails for a specific 5-day launch window. Adapt the timings for longer/shorter launches.", columns: ["Email", "Timing", "Content"], rows: [
      ["Doors Open", "Day 1, 9am", "Announcement + product recap + main benefit + link"],
      ["Social Proof", "Day 2, 10am", "Named case studies; specific results; 2\u20133 testimonials in context"],
      ["The Mechanism", "Day 3, 11am", "How the product actually works; handle the top objection inline"],
      ["FAQ + Extended Case Study", "Day 4, 10am", "Answer top 3\u20135 pre-purchase questions; feature one deep case"],
      ["48-Hour Warning", "Day 4, 3pm", "\"Cart closes in 48 hours\" + specific price/bonus that expires"],
      ["24-Hour Warning", "Day 5, 9am", "Re-state offer + urgency + final objection handling"],
      ["3-Hour Final Call", "Day 5, 9pm", "Short, direct, specific close \u2014 \"link closes at midnight ET\""],
      ["Cart Closed (post-sequence)", "Day 5+1, 10am", "Thank-you + what\u2019s next for non-buyers (waiting list, next cohort)"],
    ], footer: "Rule: write every email with a specific reason-to-exist. If an email doesn\u2019t do a distinct job, cut it \u2014 don\u2019t add filler." },
    { type: "exercise", title: "Draft Your Launch Email Sequence", intro: "Pick an offer you\u2019ll launch in the next 90 days. Use the beat sheet from Slide 6 to outline the 8 launch-week emails.", items: [
      { num: "1", copy: "Day 1 Doors Open: write the subject line + first 3 lines of body copy.", answer: "Subject should name the offer + benefit. First 3 lines must earn the click and set up what\u2019s coming. Example: \"[Product] is live \u2014 and here\u2019s why it matters for you if [specific situation].\"" },
      { num: "2", copy: "Day 2 Social Proof: pick 2\u20133 named case studies you\u2019ll feature. Draft the email lead.", answer: "Example: \"Three of our first 40 students \u2014 Priya, Marcus, and Sarah \u2014 each did something different. Here\u2019s what I learned from all three.\"" },
      { num: "3", copy: "Day 4 48-Hour Warning: draft the urgency + value reminder.", answer: "Example: \"In 48 hours, the $497 bonus disappears. Here\u2019s why you should care about that bonus specifically...\" Make the urgency genuinely about value, not just panic." },
      { num: "4", copy: "Day 5, 9pm 3-Hour Final Call: draft a 100-word email that will be the MOST important email of the launch.", answer: "Short. Direct. Specific close. Example: \"3 hours left. [Offer] closes at midnight ET. If you\u2019ve been thinking about it, now is the decision window. [Link] \u2014 [Name].\"" },
    ] },
  ],
};
