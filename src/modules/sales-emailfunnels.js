// Sales Pages & Direct Response — Module 5: Email Funnels for Direct Response
export const salesEmailFunnelsModule = {
  id: "sales05",
  title: "Email Funnels for Direct Response",
  type: "Rich Module",
  duration: "90 min",
  desc: "Pre-launch, launch, and post-launch email sequences that move cold readers through to committed buyers \u2014 without burning the list.",
  topics: ["Pre-Launch Sequence", "Launch Week Cadence", "Cart Close Emails", "Post-Launch Recovery", "List Health", "Evergreen Funnels"],
  quiz: [
    { q: "You launched to a 12,000-person list with 8 emails in 5 days. 62% of revenue came in the final 18 hours. Next launch: your boss wants 14 emails across 5 days to \u201Ccapture more revenue.\u201D Prediction:", opts: ["Revenue will scale linearly with email count", "Revenue will double", "Diminishing returns + list damage \u2014 incremental emails 9\u201314 mostly serve already-converted buyers and annoy the rest; next launch converts worse because engagement decay compounds across cycles", "No change"], correct: 2 },
    { q: "Your pre-launch sequence is 3 emails over 4 days to a largely cold list. Launch flops at 0.8% conversion. Most likely primary cause:", opts: ["Pre-launch was too short + too shallow for a cold list \u2014 you need 7\u201321 days of teaching, story, and proof to warm cold subscribers through Schwartz\u2019s awareness levels before cart open; the launch week can\u2019t recover from insufficient warming", "The offer is bad", "Launch week emails weren\u2019t aggressive enough", "Price was too high"], correct: 0 },
    { q: "Your 24-hour-warning email pulls 18% of launch revenue. The 3-hour email pulls 9%. A peer suggests: \u201Ccut the 3-hour email \u2014 it\u2019s weaker.\u201D Correct call:", opts: ["Cut it \u2014 lower performer", "Replace 3-hour with a discount", "Move the 3-hour email to 24hr timing", "Keep it \u2014 those two emails serve different psychographic cohorts (24hr = planners, 3hr = last-minute deciders); cutting the 3-hour email loses ~9% of total launch revenue because those buyers wouldn\u2019t have bought on the 24-hour email"], correct: 3 },
    { q: "After a launch, your boss says \u201Conly email the buyers \u2014 the non-buyers said no, leave them alone.\u201D Correct counter:", opts: ["Agree \u2014 non-buyers don\u2019t want more email", "Non-buyers are the cheapest market research you\u2019ll ever get; a 1-email \u201Cwhat stopped you?\u201D sequence typically returns 5\u201315% reply rate with specific objections that inform the NEXT launch\u2019s offer, page, and sequence", "Email them daily to recover", "Unsubscribe them all"], correct: 1 },
    { q: "You run a $997 course launch. Pre-launch engagement: 42% open rates, lots of replies. Launch week: cart opens, conversion is 0.6%. Likeliest gap:", opts: ["List size too small", "Price too low", "Engagement \u2260 intent \u2014 pre-launch that teaches without creating buying readiness produces an \u201Caudience\u201D, not a \u201Cmarket\u201D; the warming content didn\u2019t escalate toward the specific decision of buying this product", "Emails sent at wrong hour"], correct: 2 },
    { q: "Evergreen funnel vs campaign launch for a new $1,500 course. Your list is 800 people. Which first and why?", opts: ["Campaign launch first \u2014 at 800 subscribers you need concentrated urgency and live feedback to prove product-market fit; evergreen works better once you have scale + conversion data from at least one live launch to model against", "Evergreen first \u2014 always-on is better", "Both simultaneously", "Neither \u2014 just run paid ads"], correct: 0 },
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
