// SEO Content Writing — Module 7: SEO Measurement, Refresh & Iteration
export const seoMeasurementModule = {
  id: "seo07",
  title: "Measurement, Refresh & Iteration",
  type: "Rich Module",
  duration: "90 min",
  desc: "How to read SEO data honestly, kill pieces that aren't working, refresh pieces that almost are, and compound the wins over quarters.",
  topics: ["Search Console Basics", "Rank Tracking", "Traffic Quality", "Refresh Strategy", "Content Pruning", "Quarterly Audits"],
  quiz: [
    { q: "Your traffic grew 62% YoY but content-attributed signups fell 8% over the same period. Search Console shows you gained ranks on informational terms and lost ranks on commercial terms. Honest diagnosis:", opts: ["Top-line traffic growth is the metric that matters - keep doing it", "You are winning top-of-funnel vanity traffic while losing the commercial SERPs that actually produce pipeline; the content mix has drifted away from revenue terms and needs rebalancing", "The signup funnel is broken unrelated to SEO", "Celebrate the traffic and ignore signups"], correct: 1 },
    { q: "Search Console shows 34 queries where you rank positions 11-15, each with 300-1,500 monthly impressions. You refresh 10 pieces but only change the publish date and bold a few phrases. Ranking barely moves. Most likely explanation:", opts: ["Refreshes take 6+ months to land", "Google detects meaningful content change via diff-analysis; date tweaks + trivial edits do not cross the threshold to trigger a fresh-content re-evaluation; a real refresh needs ~30%+ content change plus new substantive additions", "Position 11-15 is unwinnable", "Search Console data is lagged"], correct: 1 },
    { q: "You rank #3 for a commercial keyword but CTR is 2.1% while similar keywords at #3 in your niche average 11%. Highest-ROI single fix:", opts: ["Build more backlinks to push to #1", "Rewrite the title tag + meta description - your click-through gap at the same rank signals the SERP snippet is underperforming; a benefit-led + specific title often doubles CTR inside 30 days without any ranking change", "Add more keywords to the body", "Add schema markup"], correct: 1 },
    { q: "Your site has 300 pieces; 12 drive 80% of traffic; 120 get zero organic clicks in 90 days. An SEO suggests deleting or redirecting the 120. Best reasoning:", opts: ["Never delete content - it always has some value", "Zero-click pages dilute site-wide topical authority, consume crawl budget, and signal \"thin content\" to Google\'s quality system; consolidating into the top 12 (or deleting if no relevant target) concentrates authority where it earns", "Delete everything below the top 50", "Only delete pages older than 5 years"], correct: 1 },
    { q: "A page that ranked #4 for 18 months has slowly drifted to #12 over 6 months. Traffic halved. Your instinct is to write a new piece. Better first move:", opts: ["Write the new piece and leave the old one", "Audit the drifted piece against current top-3 results: what do they have that yours no longer does (freshness, new sub-topics, updated data)? Substantive refresh of a proven ranker usually outperforms a new piece starting from zero", "Delete the drifted piece immediately", "Add 20 internal links to force ranking up"], correct: 1 },
    { q: "You run a quarterly audit. Which of these observed patterns most strongly justifies a refresh-over-create budget shift:", opts: ["You have fewer than 50 published pieces", "80% of your traffic comes from <15% of your pages, and at least 20+ pages sit in position 8-20 for proven-intent keywords - refresh ROI is multiples higher than net-new content ROI until that queue is worked", "Your competitors publish more frequently", "Every page ranks top 10 already"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 7", title: "Measurement, Refresh", titleAccent: "& Iteration", subtitle: "How to read SEO data honestly, kill what isn\u2019t working, refresh what almost is, and compound the wins over quarters.", meta: "SEO Content Writing Masterclass  |  Module 7  |  8 Slides" },
    { type: "stats", eyebrow: "WHY ITERATION BEATS CREATION", title: "Your refresh queue is more valuable than your publish queue", intro: "Most writers keep publishing new pieces while their existing pieces decay. The teams that win reverse this: refresh, refresh, prune \u2014 then write new. The compounding is enormous.", stats: [
      { num: "2\u20134\u00D7", label: "ranking lift from substantive refreshes on pages already ranking at positions 8\u201315" },
      { num: "106%", label: "traffic lift reported by HubSpot after their 'historical optimisation' refresh strategy" },
      { num: "25%", label: "of most sites' content gets 80% of its traffic \u2014 the other 75% under-performs or is dead weight" },
    ], subheading: "The Three Iteration Moves", bullets: [
      "**Refresh** pieces ranking 8\u201315 for their target keyword \u2014 the easiest ranking window to improve",
      "**Refresh** or **prune** pieces older than 18 months with declining or zero traffic",
      "**Delete or merge** pieces that duplicate topics without adding new value",
      "**Plan** your next content cluster based on what worked in the last audit",
    ] },
    { type: "principle", num: "01", title: "Search Console \u2014 The Writer's Most Underrated Tool", intro: "Most writers ignore Search Console. The writers who use it find ranking opportunities nobody else is seeing. 15 minutes per week in GSC beats 15 hours per week in Ahrefs for practical, actionable insight.", sectionTitle: "The 4 Views in Search Console Every Writer Should Check Weekly", sections: [
      { heading: "1. Queries in Positions 8\u201320", example: "Filter performance data by avg position 8\u201320. These are pages/queries close to ranking \u2014 where refresh work has highest ROI.", note: "Sort by impressions. The high-impression / position-8\u201320 combo is refresh gold." },
      { heading: "2. Pages with Declining CTR", example: "Pages where CTR has dropped 20%+ over 90 days even if ranking held steady.", note: "Usually title tag or meta description has stopped working. Quick rewrite fix." },
      { heading: "3. Queries You Rank For That You Didn't Target", example: "\"Accidental rankings\" \u2014 the page ranks for a keyword you didn\u2019t intend. Sometimes a gift.", note: "If the query has volume and matches your ICP, double-down on it in a rewrite." },
      { heading: "4. Pages with Zero Clicks Over 90 Days", example: "Refresh candidates or deletion candidates. Either make them work or remove.", note: "Dead weight pages dilute topical authority. Audit them quarterly." },
    ], rule: "Block 15 min every Friday to sit in Search Console. You\u2019ll find more actionable wins than any SEO audit tool will surface in a week." },
    { type: "comparison", eyebrow: "CREATE MORE vs ITERATE MORE", title: "Two approaches to a 12-month content program", subtitle: "Team A writes 52 new pieces. Team B writes 26 new pieces and refreshes 26 old ones. Which compounds better?", left: { title: "Team A \u2014 Create Only", color: "#EF4444", items: [
      { strong: "52 new pieces in 12 months, no refresh programme", note: "Each new piece has to win rankings from scratch." },
      { strong: "Old pieces decay; dates go stale; rankings slip monthly", note: "You lose as much ground as you gain. Net growth stalls by month 8." },
      { strong: "Average ranking: position 24 across the site", note: "The site looks busy but performs badly. Most pieces get zero traffic." },
      { strong: "12-month outcome: ~18% traffic growth, lots of work, no compounding", note: "The treadmill: running hard, going nowhere." },
    ] }, right: { title: "Team B \u2014 Create + Iterate", color: "#10B981", items: [
      { strong: "26 new pieces + 26 substantive refreshes of existing pieces", note: "Refreshes target positions 8\u201320 \u2014 the easiest winnable ranking moves." },
      { strong: "Old pieces stay current: updated dates, new data, extended depth", note: "Rankings hold and compound; existing traffic grows alongside new." },
      { strong: "Average ranking: position 11 across the site", note: "Fewer pieces, but they rank. Traffic per piece is 3\u20135\u00D7 higher." },
      { strong: "12-month outcome: ~85% traffic growth, same team effort", note: "The compounding: each quarter builds on the last one instead of replacing it." },
    ] }, footer: "Rule: after your first 50 pieces, half your content hours should go to refresh/iteration. The math is that asymmetric." },
    { type: "table", title: "The Refresh Decision Matrix", subtitle: "Not every piece deserves a refresh. Use this matrix to triage your audit candidates and focus effort where it pays.", columns: ["Current State", "Recent Traffic", "Refresh Verdict"], rows: [
      ["Ranking position 8\u201315 for target keyword", "Any", "Refresh \u2014 highest ROI window"],
      ["Ranking position 1\u20137 for target keyword", "Growing or steady", "Leave alone / minor refresh with new data"],
      ["Ranking position 1\u20137 but CTR declining", "Declining", "Rewrite title tag + meta description only"],
      ["Ranking position 16\u2013100", "Any", "Evaluate: refresh if the topic still matters; else delete"],
      ["Not ranking, 0 clicks in 90 days", "0", "Delete or redirect \u2014 it\u2019s dead weight"],
      ["Evergreen topic, 12+ months old", "Declining", "Substantive refresh \u2014 new data, new examples, updated date"],
      ["Topic is stale / outdated", "Any", "Delete, 301 redirect to newer piece if relevant"],
    ], footer: "Rule: every quarter, triage every piece older than 6 months against this matrix. 30% will refresh; 10% will delete; 60% will stay as-is." },
    { type: "principle", num: "02", title: "The Substantive Refresh \u2014 What Actually Moves Rankings", intro: "Most \"refreshes\" are just date tweaks. Those don\u2019t work. A substantive refresh is one where Google genuinely re-evaluates the page because the content materially changed. Here\u2019s the bar.", sectionTitle: "What Counts as a Real Refresh", sections: [
      { heading: "1. Add at least 30% new content or replace 30%", example: "New sections, new examples, new data, new screenshots, deleted outdated parts.", note: "Edits under 20% of content barely register with Google\u2019s fresh-content detection." },
      { heading: "2. Update examples + case studies with fresh ones", example: "Replace 2022 customer examples with 2025\u20132026 examples.", note: "Stale examples signal un-maintained content. Fresh examples signal care." },
      { heading: "3. Rewrite the title tag + meta description", example: "Often the title tag is the weakest link on older pieces. Refresh = chance to test a new one.", note: "A title tag rewrite alone can 2\u00D7 CTR. Never skip this step in a refresh." },
      { heading: "4. Update the publish/last-updated dates visibly", example: "Show BOTH. \"Published March 2024. Last updated April 2026.\"", note: "Date updates are a weak signal alone, but combined with content change they strengthen it." },
    ], rule: "A refresh that takes under 30 minutes is usually not substantive enough. Plan 60\u201390 minutes per refresh \u2014 and compound results for quarters." },
    { type: "exercise", title: "Run Your First Quarterly Content Audit", intro: "Export your Google Search Console data for the last 90 days. Spend 45 minutes running the audit playbook below.", items: [
      { num: "1", copy: "Filter pages by 'Position 8\u201315' for target keywords. This is your refresh priority list.", answer: "These are your easiest wins. Sort by impressions; top 10 by impressions are your next refresh candidates." },
      { num: "2", copy: "Identify pages with 0 clicks over 90 days. These are your delete/redirect candidates.", answer: "If the topic is still relevant: rewrite or merge into a better page. If not: delete and 301 to the closest relevant piece." },
      { num: "3", copy: "Identify pages where CTR dropped 20%+ even though ranking held. These need title + meta rewrites.", answer: "10-minute fix, 30\u201360 day payoff. Often one of the highest-ROI single actions you can take on a site." },
      { num: "4", copy: "Plan the next 90 days: refresh 5 pieces + write 3 new pieces + delete 5 dead pieces. Block the time now.", answer: "Refresh + create + prune in parallel. If you only create, your old pieces decay. If you only refresh, you plateau. You need all three." },
    ] },
  ],
};
