// Creative Direction — Module 6: Measuring Campaigns
export const cdMeasureModule = {
  id: "cd06",
  title: "Measuring Campaigns (Not Just Pieces)",
  type: "Rich Module",
  duration: "90 min",
  desc: "Campaign measurement is a different discipline from piece measurement. The metrics, the attribution, the post-mortems, and the honest reporting that compounds learning across quarters.",
  topics: ["Campaign Metrics", "Attribution Honesty", "Leading vs Lagging", "Post-Mortem Discipline", "Reporting Up", "Cross-Campaign Learning"],
  quiz: [
    { q: "Measuring a campaign differs from measuring a piece because:", opts: ["It doesn\u2019t", "Campaigns compound across pieces; per-piece metrics miss the compound effect \u2014 campaign-level metrics track aggregated reach, pipeline, and brand signals over the full campaign arc", "Only length differs", "Campaigns don\u2019t need measurement"], correct: 1 },
    { q: "The right lagging outcome metric for most B2B campaigns is:", opts: ["Page views", "Content-attributed pipeline or revenue \u2014 the metric leadership cares about and the one that defends budget", "Follower growth", "Post count"], correct: 1 },
    { q: "Leading indicators for campaign impact include:", opts: ["Lagging metrics only", "Qualified demo requests from campaign pages, email list growth, direct search for campaign-named concepts, inbound referrals mentioning campaign themes", "Vanity metrics only", "Nothing"], correct: 1 },
    { q: "A post-mortem after a campaign should:", opts: ["Blame writers", "Honestly assess what worked + what didn\u2019t + why + what we\u2019ll do differently next time \u2014 without blame, with attribution to specific decisions", "Celebrate only", "Skip"], correct: 1 },
    { q: "When a campaign under-performs, the most common real reason is:", opts: ["Team didn\u2019t work hard", "Misaligned frame (wrong audience, wrong stake) rather than execution failure \u2014 diagnose frame before blaming execution", "Too short", "Bad writing"], correct: 1 },
    { q: "The highest-leverage reporting move after a campaign is:", opts: ["A long deck", "One-page summary: the primary outcome + 2 leading indicators + one named story + one honest failure \u2014 sent to leadership + kept as next-campaign input", "Silence", "Multi-page analytics"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 6", title: "Measuring Campaigns", titleAccent: "Not Just Pieces", subtitle: "Campaign measurement is a different discipline. The metrics, the post-mortems, and the reporting that compound learning across quarters.", meta: "Creative Direction  |  Module 6  |  7 Slides" },
    { type: "stats", eyebrow: "WHY CAMPAIGN MEASUREMENT MATTERS", title: "Campaigns measured at piece-level miss the compound effect", intro: "A campaign is a compounding machine. Measuring it one piece at a time (likes, shares, views) misses the aggregated impact on pipeline, brand trust, and category perception. Campaign-level measurement is a different discipline.", stats: [
      { num: "2\u20134\u00D7", label: "larger measured impact of campaigns assessed at campaign-level vs summed piece-level" },
      { num: "40\u201360%", label: "of campaign value typically hits the business in the 30\u201390 days AFTER the campaign officially ends" },
      { num: "2 hrs", label: "typical time investment in a proper campaign post-mortem \u2014 which compounds into better next campaigns" },
    ], subheading: "What Campaign-Level Measurement Captures", bullets: [
      "Aggregated reach across all pieces + channels \u2014 not separate tallies",
      "Pipeline / revenue attributed to the campaign as a whole",
      "Brand lift: direct search for campaign-named concepts, inbound referrals, category conversation",
      "Compounding effects: how the flagship continues producing in months after launch",
      "Cross-campaign learning: what patterns worked vs what\u2019s the signature of a flop",
    ] },
    { type: "grid", eyebrow: "CAMPAIGN METRICS", title: "The 4 categories every campaign should track", subtitle: "Piece metrics roll up. But these campaign-level categories only make sense at the campaign level.", items: [
      { num: "01", title: "Primary Outcome", desc: "The one business outcome the campaign serves: pipeline, revenue, signups, retention. Named before campaign starts.", icon: "\u{1F3AF}" },
      { num: "02", title: "Leading Indicators", desc: "Early signals that predict the primary outcome: demo requests, email signups, direct searches for campaign concepts.", icon: "\u{1F4C8}" },
      { num: "03", title: "Brand / Category Lift", desc: "Harder to measure but real: category-named mentions in press, inbound conversations referencing themes, competitor responses.", icon: "\u{1F3C5}" },
      { num: "04", title: "Compounding Signal", desc: "How the flagship + supporting pieces continue producing in months 2\u20136 after official campaign end.", icon: "\u{1F4C8}" },
    ], footer: "Rule: report all 4 categories in every campaign post-mortem. Reporting only the primary outcome misses the real compound value." },
    { type: "principle", num: "01", title: "The Honest Post-Mortem", intro: "Most campaign post-mortems are performative. They celebrate wins + glide past losses. A real post-mortem is a honest excavation of what worked, what didn\u2019t, and why \u2014 and the output is next-campaign leverage.", sectionTitle: "The Post-Mortem Structure", sections: [
      { heading: "1. What happened (facts, not opinions)", example: "Outcomes: pipeline $412K, 847 email signups, 3.1M impressions, 12 inbound press mentions. Targets: $400K, 600, 2M, 8.", note: "Start with the numbers. No interpretation. Just what occurred." },
      { heading: "2. What worked (specifically)", example: "The flagship hit 142K pageviews (target 80K). The third supporting piece drove 60% of email signups \u2014 surprise outperformer.", note: "Name the specific wins. If the flagship worked, say specifically what made it work \u2014 POV? format? timing?" },
      { heading: "3. What didn\u2019t (specifically + honestly)", example: "Two channel adaptations under-performed. Support team wasn\u2019t briefed in time for launch week \u2014 customer questions went un-answered for 36 hours.", note: "Honesty is the value. Hiding losses denies the team next-campaign learning." },
      { heading: "4. What we\u2019ll do differently", example: "Next campaign: brief support 10 days early. Don\u2019t invest in channel adaptations unless flagship can generate the angles. Invest more in the 3rd supporting-piece format.", note: "Concrete changes to the playbook. Not \u201Cwe\u2019ll do better\u201D \u2014 specific behavioural changes, documented." },
    ], rule: "Write the post-mortem within 2 weeks of campaign end. Memory fades; honest assessment only works if it\u2019s done while the details are sharp." },
    { type: "comparison", eyebrow: "PERFORMATIVE vs HONEST", title: "Two post-mortems of the same campaign", subtitle: "Performative post-mortem: team looks good, nothing is learned. Honest post-mortem: team identifies specific improvements.", left: { title: "Performative Post-Mortem", color: "#EF4444", items: [
      { strong: "\u201CCampaign exceeded targets!\u201D (headline + celebration)", note: "Team feels good. Nothing specific to learn. Next campaign will repeat the same mistakes." },
      { strong: "Focus on the vanity wins (impressions, reach) without pipeline context", note: "Big numbers hide the pipeline reality. If pipeline was flat, the post-mortem misses it." },
      { strong: "No specific attribution \u2014 \u201Cthe team did great work\u201D", note: "Team-level praise denies individual contributors specific feedback. No one learns." },
      { strong: "No documented changes for next campaign", note: "Post-mortem doesn\u2019t change next campaign\u2019s playbook. Performative means \u201Cno learning.\u201D" },
    ] }, right: { title: "Honest Post-Mortem", color: "#10B981", items: [
      { strong: "\"Primary outcome: pipeline $412K vs target $400K. +3%. Hit. Leading indicators: mixed.\"", note: "Nuanced. Primary outcome made the target barely; leading indicators reveal weaknesses worth addressing." },
      { strong: "\"What worked: flagship\u2019s POV on [topic] drew press attention we hadn\u2019t anticipated. 3rd supporting piece was the sleeper hit.\"", note: "Specific attributions. Team knows WHAT worked so they can repeat it." },
      { strong: "\"What didn\u2019t: channel adaptations under-performed. Support team briefed late \u2014 36 hr response gap on launch day.\"", note: "Honest about failures. Team knows WHAT to fix for next time." },
      { strong: "\"Changes: (1) brief support 10 days early (2) invest less in channel adaptations (3) double down on surprise-winner format.\"", note: "Documented behavioural changes. Post-mortem becomes input to the next campaign\u2019s brief." },
    ] }, footer: "Rule: performative post-mortems are the enemy of craft progress. Honest ones are how senior teams compound." },
    { type: "table", title: "The One-Page Campaign Report", subtitle: "The report leadership sees. One page. Honest. Memorable. Specific.", columns: ["Section", "Content", "Example"], rows: [
      ["Headline", "Primary outcome vs target, in one line", "\"Campaign produced $412K content-attributed pipeline (+3% vs target). Hit.\""],
      ["The Number", "The one big number leadership remembers", "\"$412K pipeline / 3.1M impressions / 847 qualified email signups\""],
      ["The Named Story", "One specific customer or moment the campaign produced", "\"Zendesk\u2019s Priya saw our flagship on LinkedIn Wed morning, requested a demo Thursday. Now a $68K ACV.\""],
      ["What Worked", "2\u20133 specific things, named clearly", "\"1) Flagship\u2019s contrarian POV drew 12 unsolicited press mentions 2) 3rd supporting piece drove 60% of email signups\""],
      ["What Didn\u2019t", "1\u20132 specific failures, honest + blameless", "\"Channel adaptations under-performed (expected 40K reach, got 12K). Support team briefed 2 days late.\""],
      ["Next Steps", "1\u20133 concrete changes for next campaign", "\"1) Brief support 10 days early 2) Cut channel-adaptation investment in half 3) Study 3rd-supporting-piece format as template\""],
    ], footer: "Rule: this one page is the most-read campaign artifact leadership encounters. It shapes whether the budget renews. Write it well + honestly." },
    { type: "exercise", title: "Write the Post-Mortem for Your Most Recent Campaign", intro: "Pick a campaign you recently ran (or co-ran). Spend 90 minutes writing a real post-mortem using the template from Slide 6.", items: [
      { num: "1", copy: "Primary outcome: did it hit target? By how much? Write it as one honest sentence.", answer: "If you don\u2019t know the primary outcome, the campaign wasn\u2019t set up to be measured. That\u2019s itself a post-mortem finding." },
      { num: "2", copy: "What worked specifically? Name 2\u20133 things \u2014 not \u201Cthe team did great\u201D but \u201Cthis specific piece did this specific thing.\u201D", answer: "Attribution is the point. Specific attributions compound into the next campaign\u2019s playbook." },
      { num: "3", copy: "What didn\u2019t work honestly? 1\u20132 things that underperformed + WHY (frame failure? execution failure? timing?)", answer: "Distinguish frame failures from execution failures. The fixes are completely different." },
      { num: "4", copy: "3 concrete changes for your next campaign based on this post-mortem. Document them in your running campaign-learning doc.", answer: "If you don\u2019t have a running campaign-learning doc, start one. Over 4\u20138 campaigns, this doc becomes your team\u2019s highest-leverage internal asset." },
    ] },
  ],
};
