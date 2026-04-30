// SEO Content Writing — Module 2: Keyword Research & Search Intent
export const seoKeywordsModule = {
  id: "seo02",
  title: "Keyword Research & Search Intent",
  type: "Rich Module",
  duration: "90 min",
  desc: "Find the keywords worth ranking for \u2014 the ones with real intent, beatable competition, and business value. Skip the rest.",
  topics: ["Keyword Types", "Search Intent Deep Dive", "Volume vs Difficulty", "Keyword Gaps", "Long-Tail Strategy", "Commercial Value"],
  quiz: [
    { q: "Your site is DR 24. A keyword shows 40,000/mo volume at KD 82. You also found a cluster of 8 long-tails averaging 220/mo at KD 18-28 on the same theme. 6-month ROI forecast:", opts: ["Target the 40K term - even position 20 produces meaningful traffic", "Split attention 50/50 between the head term and the cluster", "Skip the head term entirely and build the 8-piece long-tail cluster; the head term will never rank and the cluster compounds topical authority that may support the head term in year 2", "Write the head term first to anchor topical authority, then the cluster"], correct: 2 },
    { q: "You run a B2B data-enrichment SaaS at $1,200 ACV. You rank #3 for \"what is data enrichment\" (18K/mo) and #6 for \"Clearbit alternatives under $500/mo\" (320/mo). Pipeline attribution after 90 days shows only one of them produces demos. Which, and why:", opts: ["\"What is data enrichment\" - the volume alone guarantees pipeline", "\"Clearbit alternatives under $500/mo\" - commercial-investigation intent with a budget qualifier pre-selects buyers ready to switch; raw informational traffic at the top of funnel rarely books demos", "Both equally - intent is irrelevant at scale", "Neither - SaaS SEO never produces demos"], correct: 1 },
    { q: "You find a keyword: 140/mo volume, KD 22, but the top 3 results are all product pages from Salesforce, HubSpot, and Zoho. Your site is an agency, not a product. Verdict:", opts: ["Write it - low KD means you rank easily", "Skip - the SERP is owned by transactional product pages; a blog post from an agency is format-mismatched and Google will not reshuffle the SERP type for you", "Write it as a product-page clone", "Add more backlinks to force it in"], correct: 1 },
    { q: "Search Console shows 14 queries where you rank positions 8-14 with 400+ monthly impressions each. You also have a draft calendar of 12 new pieces. Highest-ROI next 30 days:", opts: ["Publish all 12 new pieces on schedule; fresh content always beats editing", "Refresh the 14 near-miss pages first - positions 8-14 are the cheapest rank gains available and the traffic lift lands within 60 days; new content starts from zero", "Split evenly; 7 refreshes + 6 new", "Delete the 14 and write replacements"], correct: 1 },
    { q: "A keyword tool reports \"KD 14\" on a term. Before writing, you check the live SERP: the top 10 include Forbes, Wikipedia, and two DR-85 publications. Correct interpretation:", opts: ["Write immediately - the tool says it is easy", "KD scores are statistical approximations; a manual SERP check always overrides the tool when brand authority sites occupy the top 10 - realistic KD is closer to 55", "KD is always perfectly accurate", "Ignore the SERP and trust the number"], correct: 1 },
    { q: "A \"keyword gap\" analysis vs 3 competitors surfaces 240 keywords they rank for that you do not. Most actionable prioritisation:", opts: ["Write on all 240 to cover the gap quickly", "Filter to: KD <= your DR + 10, AND commercial or transactional intent, AND at least one competitor ranks below position 10 (signals a beatable SERP); the surviving 15-25 are the real list", "Pick by highest volume regardless of difficulty", "Pick by lowest difficulty regardless of intent"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 2", title: "Keyword Research", titleAccent: "& Search Intent", subtitle: "Find the keywords worth ranking for \u2014 real intent, beatable competition, business value. Skip everything else.", meta: "SEO Content Writing Masterclass  |  Module 2  |  8 Slides" },
    { type: "stats", eyebrow: "WHY KEYWORD CHOICE MATTERS", title: "The wrong keyword is why most content never ranks", intro: "Writers obsess over writing quality and ignore keyword selection \u2014 then wonder why their work gets zero traffic. Selection is 60% of the game.", stats: [
      { num: "91%", label: "of content gets zero search traffic \u2014 mostly because of bad keyword choice, not bad writing (Ahrefs)" },
      { num: "3\u00D7", label: "higher ROI from low-volume high-intent keywords vs high-volume low-intent keywords" },
      { num: "30 min", label: "the research time that prevents months of invisible writing" },
    ], subheading: "What Good Keyword Research Produces", bullets: [
      "Keywords you can realistically rank for given your site\u2019s authority",
      "Keywords that match the stage of buyer you actually sell to",
      "Keywords your competitors rank for but you don\u2019t \u2014 fast wins",
      "A cluster of related long-tails that compound as you publish more on the topic",
    ] },
    { type: "grid", eyebrow: "THE 4 KEYWORD TYPES", title: "Match the type to your business goal", subtitle: "Each type serves a different funnel stage. Know which one you\u2019re writing before you type.", items: [
      { num: "01", title: "Informational", desc: "\"What is X / How does X work.\" Top-funnel traffic. Good for brand awareness; poor direct conversion.", icon: "\u{1F4D6}" },
      { num: "02", title: "Commercial", desc: "\"Best X / X alternatives / X pricing.\" Mid-funnel comparison. Converts better; fewer searches.", icon: "\u2696\uFE0F" },
      { num: "03", title: "Transactional", desc: "\"Buy X / Download X / Signup.\" Bottom-funnel. Low volume, high intent, fastest revenue.", icon: "\u{1F4B3}" },
      { num: "04", title: "Navigational", desc: "\"[Brand] login / [Brand] pricing.\" Users looking for YOU. Capture, don\u2019t hijack.", icon: "\u{1F9ED}" },
    ], footer: "Rule: commercial + transactional beat informational for immediate revenue. Informational builds audience over time. Do both, with a bias toward commercial for budget-defence." },
    { type: "principle", num: "01", title: "Volume vs Difficulty \u2014 The Honest Math", intro: "Keyword tools show volume and difficulty scores. Writers get seduced by volume and ignore difficulty. The math matters \u2014 here\u2019s how to read it honestly.", sectionTitle: "The Rule-of-Thumb for Keyword Selection", sections: [
      { heading: "If your Domain Rating (DR) is 0\u201320:", example: "Target KD 0\u201325. Focus on long-tail, low-competition, question-based keywords.", note: "You will not rank for KD 70+ keywords. Don\u2019t try." },
      { heading: "If your DR is 20\u201340:", example: "Target KD 20\u201345. Mix of long-tail and medium-competition head terms.", note: "This is where most indie brands live. Cluster strategy works best." },
      { heading: "If your DR is 40\u201360:", example: "Target KD 40\u201365. You can realistically win medium-head terms within 3\u20136 months.", note: "Still avoid the top 1% most competitive terms unless you\u2019re all-in on them." },
      { heading: "If your DR is 60+:", example: "You can play at the top. But writing quality matters more than ever at this level.", note: "At DR 60+, you\u2019re competing with the best. Specificity and E-E-A-T are the moat." },
    ], rule: "Match keyword difficulty to your site\u2019s authority. Writing for keywords 20+ points above your DR is the fastest way to waste quarters of content budget." },
    { type: "comparison", eyebrow: "HIGH VOLUME vs HIGH INTENT", title: "Two keyword strategies \u2014 which pays rent?", subtitle: "Same industry, same team. One strategy built a traffic graph. The other built revenue. Only one is worth the work.", left: { title: "Volume Chasing (Flat Pipeline)", color: "#EF4444", items: [
      { strong: "\"email marketing\" \u2014 100K/mo, KD 79", note: "Month 6: still on page 7. Zero pipeline from content." },
      { strong: "\"content marketing\" \u2014 80K/mo, KD 81", note: "Same story. Generic intent, crushing competition." },
      { strong: "\"SEO tips\" \u2014 60K/mo, KD 72", note: "If it ranked, traffic would be zero-intent browsers. It doesn\u2019t rank." },
      { strong: "Total articles: 8. Total pipeline: $0.", note: "Volume chasing on a small site is a 12-month write-off." },
    ] }, right: { title: "Intent Targeting (Compounding Revenue)", color: "#10B981", items: [
      { strong: "\"email marketing software for nonprofits under $50/mo\" \u2014 140/mo, KD 22", note: "Ranked in 6 weeks. 45% of visitors request demo." },
      { strong: "\"Mailchimp alternatives for small nonprofits\" \u2014 90/mo, KD 18", note: "Ranked in 4 weeks. Mid-funnel comparison = high intent." },
      { strong: "\"nonprofit email CTR benchmarks\" \u2014 210/mo, KD 25", note: "Pillar piece. Links from 12 nonprofit blogs within 90 days." },
      { strong: "Total articles: 8. Total pipeline: $84K over 6 months.", note: "Low volume + high intent + low competition = compounding revenue." },
    ] }, footer: "Volume looks good in reports. Intent looks good in invoices." },
    { type: "table", title: "The Keyword Gap \u2014 Your Fastest Wins", subtitle: "Keywords your competitors rank for but you don\u2019t. Usually already-proven topics, already-proven intent. Easy wins.", columns: ["How to Find Them", "Tool", "Why It Works"], rows: [
      ["Competitor site analysis", "Ahrefs \"Content Gap\" / SEMrush \"Keyword Gap\"", "Shows keywords your 3\u20135 competitors rank for and you don\u2019t"],
      ["SERP analysis for similar intent", "Google SERP manually", "Read the top 10 \u2014 what shared keywords do they all use you haven\u2019t?"],
      ["Autocomplete / People Also Ask", "Google directly", "Free; reveals intent patterns competitors haven\u2019t captured yet"],
      ["Reddit + niche forums", "r/[niche], forum searches", "Real questions = real search intent; often unmined"],
      ["Your own search console data", "Google Search Console \"Queries\" report", "Keywords you\u2019re ALMOST ranking for but not \u2014 a 15-min rewrite often breaks through"],
    ], footer: "Every month: spend 30 min in Search Console. Your \"position 8\u201315\" queries are the easiest wins you have." },
    { type: "principle", num: "02", title: "The Long-Tail Compounding Strategy", intro: "Writers underrate long-tail because the volume numbers look small. The math changes when you cluster: ten 150-volume keywords with 30% conversion beat one 15,000-volume keyword with 0.1% conversion. Every time.", sectionTitle: "How to Build a Long-Tail Cluster", sections: [
      { heading: "1. Pick the pillar topic", example: "Broad topic at the centre, e.g. \"email marketing for nonprofits.\"", note: "This is your flagship \u2014 the piece everything links back to." },
      { heading: "2. Map 15\u201320 long-tail subtopics", example: "\"Email subject lines for year-end giving\", \"Donor segmentation for small orgs\", etc.", note: "Each addresses a specific sub-question in the reader\u2019s mind." },
      { heading: "3. Write supporting pieces, each linking back to the pillar", example: "3\u20135 supporting pieces before you add more; each reinforces topical authority.", note: "Internal link anchor text matters. Use the target keyword naturally." },
      { heading: "4. Let the cluster compound", example: "Each ranking piece lifts the pillar\u2019s authority; the pillar lifts each supporting piece.", note: "6\u201312 month horizon. The compounding is real but it is not instant." },
    ], rule: "One flagship + 10 long-tails will out-rank one \"ultimate guide\" targeting the head term \u2014 almost every time, for smaller sites." },
    { type: "exercise", title: "Build Your First Keyword Cluster", intro: "Pick one topic you genuinely care about. Spend 25 minutes building the cluster \u2014 pillar + 5 long-tails \u2014 following the framework from Slide 7.", items: [
      { num: "1", copy: "Pillar keyword: the broad topic + audience + constraint.", answer: "Example: \"email marketing for nonprofits under $50/mo software.\" Specific enough to own; broad enough for a flagship." },
      { num: "2", copy: "List 5 long-tail sub-queries a nonprofit marketer might type.", answer: "Examples: \"end-of-year appeal email templates\", \"donor re-engagement subject lines\", \"monthly giving email sequences\", etc." },
      { num: "3", copy: "For each, check volume + KD in any tool (free tiers of Ahrefs, SEMrush, or Ubersuggest).", answer: "Drop any with KD > DR+15. Keep the 3\u20135 most realistic + most intent-matched." },
      { num: "4", copy: "Sketch the internal link map: pillar \u2194 each supporting piece.", answer: "Pillar links out to supporting pieces; each supporting piece links back to pillar. Compounds authority over time." },
    ] },
  ],
};
