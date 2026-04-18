// Content Strategy — Module 8: Measurement & Continuous Improvement
export const csMeasurementModule = {
  id: "csm01",
  title: "Measurement & Continuous Improvement",
  type: "Rich Module",
  duration: "60 min",
  desc: "How to measure content honestly, kill what's not working, and double down on what is \u2014 without drowning in dashboards or vanity metrics.",
  topics: ["Leading vs Lagging Metrics", "One Goal, One Metric", "Honest Dashboards", "Quarterly Audits", "Killing Bad Pillars", "Reporting Up"],
  quiz: [
    { q: "Your dashboard: page views +40%, posts published +25%, content-attributed pipeline flat 4 quarters. How would a CMO fairly describe this programme?", opts: ["Strong growth \u2014 pivot would be risky", "Output is up, outcomes are flat \u2014 the programme is growing motion but not value; a rebalance is overdue", "Just needs more traffic", "Reports are working"], correct: 1 },
    { q: "Which pair is a leading + lagging indicator for a demand-gen content programme?", opts: ["Page views + likes", "Qualified demo requests from content (leading) + content-attributed pipeline $ (lagging)", "Posts published + followers", "Word count + bounce rate"], correct: 1 },
    { q: "Your quarterly audit shows Pillar A drove 60% of outcomes, Pillar B drove 3%. The correct response is:", opts: ["Invest more in Pillar B to save it", "Kill or fundamentally redesign Pillar B and reallocate its capacity to Pillar A or a new bet \u2014 failing pillars eat weekly capacity", "Leave both alone", "Blame the writer"], correct: 1 },
    { q: "Leadership asks: \"what did content do this quarter?\" Most effective reply:", opts: ["Share the full 20-chart dashboard", "One lagging outcome ($412K pipeline, +23% QoQ) + 2 leading indicators + one named customer story", "Total page views", "Posts published count"], correct: 1 },
    { q: "A team ships 18 pieces, 3 of which drove 70% of outcomes. How should they act on this?", opts: ["Produce more of everything equally", "Study what the 3 winners share (format, audience, pillar, hook) and explicitly plan more pieces with those attributes \u2014 doubling down on the winning pattern", "Kill all content and restart", "Ignore the pattern"], correct: 1 },
    { q: "Which of these is the clearest vanity metric?", opts: ["Qualified leads from content", "Content-attributed revenue", "Total impressions with no source breakdown or conversion linkage", "Newsletter subscriber quality score"], correct: 2 },
  ],
  slides: [
    { type: "cover", module: "MODULE 8", title: "Measurement", titleAccent: "& Continuous Improvement", subtitle: "How to measure content honestly, kill what's not working, and double down on what is \u2014 without drowning in dashboards or vanity metrics.", meta: "Content Strategy  |  Module 8  |  8 Slides" },
    { type: "stats", eyebrow: "WHY DASHBOARDS LIE", title: "Most content dashboards report motion, not outcomes", intro: "Page views go up. Shares go up. Posts published go up. Meanwhile, pipeline stays flat. This is the single most common pattern in content programmes \u2014 and the single most fixable one.", stats: [
      { num: "3 of 20", label: "the typical number of metrics on a content dashboard that actually predict revenue" },
      { num: "68%", label: "of CMOs report they cannot directly tie content output to business outcomes" },
      { num: "10\u00D7", label: "better decision-making from programmes with 3 honest metrics vs. teams tracking 20 vanity ones" },
    ], subheading: "What Good Measurement Does", bullets: [
      "Tells you what to stop making (usually 40\u201360% of current output) so you can double down on what works.",
      "Gives leadership a single, honest number you can point at in every quarterly review.",
      "Reveals which pillars, formats, and channels actually serve the business \u2014 and which are theatre.",
      "Builds the case for continued budget, hiring, and strategic trust.",
    ] },
    { type: "principle", num: "01", title: "Leading vs Lagging Metrics (and Vanity)", intro: "Every metric falls into one of three buckets. Mixing them up is how content teams end up optimising for the wrong thing. Understand which is which \u2014 and which to report \u2014 and measurement becomes trivial.", sectionTitle: "The Three Types of Metrics", sections: [
      { heading: "Lagging \u2014 the real outcome, measured after the fact", example: "Content-attributed revenue, pipeline $, retention rate, certified graduates.", note: "This is what the business actually cares about. Report 1 of these." },
      { heading: "Leading \u2014 predicts a future lagging metric", example: "Email signups, demo requests, branded search volume, qualified leads from content.", note: "These are your early signals. Track 2\u20133 of them weekly." },
      { heading: "Vanity \u2014 feels like a metric, isn\u2019t", example: "Total page views, likes, impressions, pieces published per month.", note: "Fine as health checks. Never report these as primary metrics." },
    ], rule: "Pick 1 lagging + 2\u20133 leading. Delete every vanity metric from the primary dashboard. Everything else is distraction." },
    { type: "comparison", eyebrow: "HONEST vs DISHONEST DASHBOARDS", title: "Two dashboards for the same content programme", subtitle: "The dishonest one makes the team look good. The honest one helps the team actually improve. Pick one.", left: { title: "Dishonest (Vanity-Driven)", color: "#EF4444", items: [
      { strong: "Primary metric: \u201C2.4M total page views, up 40%\u201D", note: "Sounds big. Can\u2019t be connected to a single dollar of pipeline." },
      { strong: "Secondary: \u201C147 pieces published this quarter\u201D", note: "Output, not outcomes. AI can boost this 10\u00D7 overnight \u2014 meaningless." },
      { strong: "Social: \u201C18K total likes, 4.2K shares\u201D", note: "Flattering. Predicts nothing. Can\u2019t be defended in a budget cut." },
      { strong: "Hidden: content-attributed pipeline flat for 4 quarters", note: "Real number exists, just not on this slide." },
    ] }, right: { title: "Honest (Outcome-Driven)", color: "#10B981", items: [
      { strong: "Primary: \u201C$412K content-attributed pipeline, +23% QoQ\u201D", note: "Real business outcome. Ties to the number that matters." },
      { strong: "Leading 1: \u201C1,847 new newsletter subscribers, quality score 7.8/10\u201D", note: "Predicts future pipeline. Quality > raw count." },
      { strong: "Leading 2: \u201C34 content-attributed demo requests\u201D", note: "Bottom-funnel leading indicator. Tightly correlated with pipeline." },
      { strong: "Context: \u201C18 pieces published; 4 killed mid-process; top 3 drove 70% of outcomes\u201D", note: "Honest about the distribution of wins and losses." },
    ] }, footer: "The dishonest dashboard wins this quarter. The honest one earns your budget for the next five." },
    { type: "table", title: "Common Metrics: Which Ones Actually Matter", subtitle: "For each metric, ask: does this predict revenue/retention/recruiting? If no, it doesn\u2019t belong on the primary dashboard.", columns: ["Metric", "Type", "Report Primary?"], rows: [
      ["Content-attributed pipeline ($)", "Lagging outcome", "Yes \u2014 this is the north star"],
      ["Qualified demo/meeting requests from content", "Leading (bottom-funnel)", "Yes \u2014 report weekly"],
      ["Newsletter subscribers (with engagement rate)", "Leading (mid-funnel)", "Yes \u2014 your owned audience"],
      ["Branded search volume", "Leading (brand)", "Yes if brand is a goal"],
      ["Total page views (no source breakdown)", "Vanity", "No \u2014 drop from primary"],
      ["Social likes and impressions", "Vanity", "No \u2014 keep in health dashboard only"],
      ["Content pieces published per month", "Input metric", "No \u2014 measure outcomes, not motion"],
      ["Time on page, bounce rate", "Secondary health metric", "No \u2014 useful for diagnosis, not reporting"],
    ], footer: "Rule: if you can't trace a metric to revenue, retention, recruiting, or brand \u2014 it does not belong in the primary report." },
    { type: "principle", num: "02", title: "The Quarterly Content Audit", intro: "Every 90 days, run a structured audit. This is the single highest-ROI content activity there is. You will kill 30\u201350% of what you\u2019re making \u2014 and double down on the 20% that\u2019s producing 80% of the results.", sectionTitle: "The 4 Questions to Answer Every Quarter", sections: [
      { heading: "1. Which pieces actually drove the primary metric?", example: "List your top 5 pieces by content-attributed pipeline. What do they share?", note: "Usually: specific audience, first-hand data, strong distribution. Copy the pattern." },
      { heading: "2. Which pillars are producing, and which are dead?", example: "Pillar A drove 60% of outcomes. Pillar B drove 3%. Kill B or reinvent it.", note: "Be ruthless. A failing pillar eats team capacity every week." },
      { heading: "3. Which formats are working, and which aren\u2019t?", example: "Long-form case studies converting at 8%. SEO posts at 0.3%. Shift resources accordingly.", note: "Formats matter. What works for B2B won\u2019t work for DTC, and vice versa." },
      { heading: "4. What should we start, stop, and continue?", example: "Start: a weekly podcast. Stop: daily social posts. Continue: the monthly flagship.", note: "Every quarter: one new thing tried, one thing cut, one thing doubled down on." },
    ], rule: "An audit is not a report. It\u2019s a decision-making meeting. End it with specific changes to the next quarter\u2019s plan \u2014 or don\u2019t call it an audit." },
    { type: "grid", eyebrow: "WHAT TO REPORT UP", title: "The 3 numbers that defend your content budget", subtitle: "When leadership asks \u201Cwhat did content do this quarter?\u201D \u2014 these are the 3 answers that protect your team. Everything else is context.", items: [
      { num: "01", title: "Primary outcome metric", desc: "\u201CContent-attributed pipeline: $412K, up 23% QoQ.\u201D The single number leadership cares about.", icon: "\u{1F3AF}" },
      { num: "02", title: "Owned audience growth + engagement", desc: "\u201CNewsletter: 12K subscribers (+18%), 42% open rate, 7.8/10 quality score.\u201D Shows compounding trust.", icon: "\u{1F4E7}" },
      { num: "03", title: "One named customer story", desc: "\u201CPriya at Zendesk cited our case study as the reason they shortlisted us.\u201D Beats a chart every time.", icon: "\u2B50" },
    ], footer: "Rule: leadership remembers 1 number and 1 story. Lead with the number; close with the story. Never present more than 3 data points at once." },
    { type: "exercise", title: "Your First Honest Dashboard", intro: "Open a new doc. Build the honest dashboard for your content work \u2014 right now, in 15 minutes. Don\u2019t worry if you can\u2019t fill every field; the gaps are your next projects.", items: [
      { num: "1", copy: "Pick your ONE primary outcome metric. Write it at the top of the doc.", answer: "Example: \u201CContent-attributed demo requests this quarter.\u201D If you can\u2019t measure it yet, set up the tracking this week." },
      { num: "2", copy: "Pick 2 leading indicators that predict your primary metric.", answer: "Example: \u201CNewsletter subscribers from content\u201D + \u201CFree trial signups from content CTAs.\u201D" },
      { num: "3", copy: "List up to 5 vanity metrics you are currently tracking \u2014 and commit to removing them from your primary dashboard.", answer: "Example: total page views, impressions, posts published. Keep them for health checks, not reporting." },
      { num: "4", copy: "Schedule a recurring 90-day audit on your calendar \u2014 right now. Block 2 hours.", answer: "Put it in. Invite the team. If you don't block it, it won't happen. And without it, this entire module was for nothing." },
    ] },
  ],
};
