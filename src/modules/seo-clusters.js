// SEO Content Writing — Module 6: Topical Authority & Content Clusters
export const seoClustersModule = {
  id: "seo06",
  title: "Topical Authority & Content Clusters",
  type: "Rich Module",
  duration: "90 min",
  desc: "Build topical authority the way modern search rewards: pillar pages + supporting clusters + ruthless internal linking. The pattern behind every small site that out-ranks bigger ones.",
  topics: ["Pillar Pages", "Hub-and-Spoke", "Topic Clusters", "Content Silos", "Internal Link Architecture", "Compounding Authority"],
  quiz: [
    { q: "A small site (DR 22) publishes 1 piece/week on 30 different topics for a year. After 12 months, results:", opts: ["Strong authority built", "Thin coverage everywhere, topical authority nowhere; most pieces get zero traffic because the site lacks depth on any single theme", "Random success", "Automatically ranks well"], correct: 1 },
    { q: "The same site shifts to 1 pillar + 10 supporting pieces per topic, covering 3 topics total over a year. What\u2019s the likely outcome?", opts: ["Less traffic because less content", "Topical authority on 3 areas; the pillars rank for head terms and the supporting pieces rank for long-tails; clusters compound while random topics don\u2019t", "Same as before", "Worse results"], correct: 1 },
    { q: "A pillar page is:", opts: ["Any long blog post", "A comprehensive page on a broad topic, designed to rank for a head term and to be the hub that supporting pieces link back to", "A landing page", "An ebook"], correct: 1 },
    { q: "Internal linking inside a topic cluster should:", opts: ["Link every page to every other page", "Link supporting pieces \u2192 back to pillar, and pillar \u2192 out to the key supporting pieces; creates a hub-and-spoke", "Link randomly", "Only link externally"], correct: 1 },
    { q: "Why does topical authority out-rank brute backlink building in 2026?", opts: ["It doesn\u2019t", "Google\u2019s modern ranking models weight topical depth (lots of high-quality content on the same topic) heavily; a site with 20 deep pieces on one topic signals expertise that raw backlinks alone can\u2019t replicate", "Backlinks are better", "Neither matters"], correct: 1 },
    { q: "You\u2019ve built a pillar page but only 2 supporting pieces. What does the cluster need?", opts: ["Fewer pieces", "More supporting pieces (target 8\u201315 per pillar) \u2014 the cluster compounds with density; 2 supporting pieces is under-invested", "Delete the pillar", "Switch topics"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 6", title: "Topical Authority", titleAccent: "& Content Clusters", subtitle: "Pillar pages + supporting clusters + ruthless internal linking \u2014 the pattern behind every small site that out-ranks bigger ones.", meta: "SEO Content Writing Masterclass  |  Module 6  |  8 Slides" },
    { type: "stats", eyebrow: "WHY CLUSTERS WIN", title: "Topical depth beats topical breadth every time", intro: "Google\u2019s modern ranking models weigh topical authority heavily. A small site with deep expertise on 2 topics out-ranks a bigger site with shallow coverage of 20.", stats: [
      { num: "3.5\u00D7", label: "higher average ranking for pillar pages in a cluster vs standalone articles on the same topic" },
      { num: "48%", label: "more organic traffic to sites that migrated to a cluster strategy vs continued random publishing" },
      { num: "10\u201315", label: "the recommended number of supporting pieces per pillar \u2014 below this, the cluster under-compounds" },
    ], subheading: "Why Writers Win With Clusters", bullets: [
      "Each supporting piece strengthens the pillar; each pillar strengthens the supporting pieces \u2014 compounding authority",
      "Internal linking creates \"crawl paths\" that concentrate Google\u2019s attention on your best pages",
      "Long-tail traffic from supporting pieces funnels readers to the pillar \u2014 your highest-converting page",
      "Builds durable topical authority that\u2019s hard for competitors to dislodge even with more content",
    ] },
    { type: "grid", eyebrow: "THE HUB-AND-SPOKE MODEL", title: "How a content cluster actually works", subtitle: "A pillar page at the centre + 8\u201315 supporting pieces radiating out. Every supporting piece links back to the pillar. The pillar links out to a selected set of key supporting pieces.", items: [
      { num: "01", title: "Pillar Page", desc: "Comprehensive, long-form (2,500\u20134,000 words) on the broad topic. Targets a head term with medium difficulty. The hub.", icon: "\u{1F5FC}" },
      { num: "02", title: "Supporting Pieces", desc: "8\u201315 focused pieces, each answering a specific sub-question. Target long-tail keywords. The spokes.", icon: "\u{1F4D6}" },
      { num: "03", title: "Internal Linking", desc: "Supporting pieces \u2192 pillar (always). Pillar \u2192 supporting pieces (selectively). Sibling links between closely related supporting pieces.", icon: "\u{1F517}" },
    ], footer: "Rule: 1 pillar + 8\u201315 supporting pieces is the minimum for a cluster to start compounding. Below this, you have a pillar + scattered articles, not a cluster." },
    { type: "principle", num: "01", title: "The Anatomy of a Pillar Page", intro: "A pillar page is not just a long blog post. It\u2019s architected to rank for a head term and to be the hub every supporting piece links back to. Getting this right takes deliberate planning \u2014 not just writing more.", sectionTitle: "What Every Pillar Page Must Have", sections: [
      { heading: "1. Target a medium-difficulty head term", example: "\"Email marketing for nonprofits\" \u2014 broad, ownable, with clear sub-questions beneath it", note: "Don\u2019t aim for hyper-competitive head terms if you\u2019re under DR 40. Pick battles you can win in 6\u201312 months." },
      { heading: "2. Answer the search intent directly in the first 150 words", example: "\"This is a comprehensive guide to email marketing for nonprofits. You\u2019ll learn [3 specifics].\"", note: "Don\u2019t bury the value. The first 150 words sell the reader on reading the next 2,500." },
      { heading: "3. Structure around 8\u201315 major sub-topics, each as an H2", example: "H2: \"How to build your nonprofit email list\" / H2: \"Subject lines for year-end appeals\" / etc.", note: "Each H2 should map to a supporting piece (which you\u2019ll write) \u2014 the pillar becomes your TOC for the cluster." },
      { heading: "4. Link out to supporting pieces in-context, not in a footer list", example: "Inside the H2 section, link contextually: \"Read our deep dive on subject lines for year-end appeals\u2192\"", note: "Contextual internal linking performs 3\u20134\u00D7 better than bottom-of-page \"related articles\" blocks." },
    ], rule: "The pillar page is the single most important page in your cluster. Invest 2\u20133\u00D7 the effort you\u2019d spend on any supporting piece \u2014 it\u2019s where most of your long-term ranking equity lives." },
    { type: "comparison", eyebrow: "SCATTERED vs CLUSTERED", title: "Two 12-month content strategies, same team, same budget", subtitle: "Team A publishes randomly across topics. Team B builds 3 clusters. The 12-month outcome gap is 5\u00D7 or more.", left: { title: "Team A \u2014 Scattered Publishing", color: "#EF4444", items: [
      { strong: "52 articles across 30 different topics over 12 months", note: "Never more than 2 articles on the same theme; no topical depth anywhere." },
      { strong: "No pillar pages, no internal linking strategy", note: "Every article fights for rankings alone, with no cluster-level support." },
      { strong: "Average ranking: position 28 across the site", note: "Most articles get zero traffic; a handful get modest numbers randomly." },
      { strong: "Month 12: flat traffic growth, writer burnout, no clear wins", note: "Generic result: a sprawling content archive nobody reads or ranks." },
    ] }, right: { title: "Team B \u2014 Cluster Strategy", color: "#10B981", items: [
      { strong: "3 pillars + 36 supporting pieces (12 per pillar)", note: "Deep coverage on 3 specific themes; topical authority builds on each." },
      { strong: "Every supporting piece links back to its pillar + 2\u20133 related supporting pieces", note: "Hub-and-spoke internal linking concentrates authority where it matters." },
      { strong: "Pillars rank in top 10 by month 6; supporting pieces rank for long-tails within weeks", note: "Compounding rankings; traffic grows monotonically; reader journey guided to flagship pages." },
      { strong: "Month 12: 3\u20135\u00D7 more organic traffic + 4\u20137\u00D7 more pipeline from content than Team A", note: "Same budget, same writers, same platform. The only difference is strategy." },
    ] }, footer: "Scattered publishing is the most common pattern in small-brand SEO \u2014 and the most reliable way to waste 12 months of content budget." },
    { type: "table", title: "Planning a 12-Month Cluster Strategy", subtitle: "Most writers plan one piece at a time. Cluster thinkers plan a year at a time \u2014 then execute piece by piece. Here\u2019s the template.", columns: ["Quarter", "Pillar", "Supporting Pieces Per Pillar", "Output"], rows: [
      ["Q1", "Pillar 1: broad topic A", "Write pillar + 4 supporting pieces", "Pillar ranked (ideally) by end-Q2"],
      ["Q2", "Pillar 1 (continue) + Pillar 2", "4 more for Pillar 1 + pillar + 3 for Pillar 2", "Pillar 1 cluster at 8 pieces; Pillar 2 starting"],
      ["Q3", "Pillar 2 (continue) + Pillar 3", "5 more for Pillar 2 + pillar + 3 for Pillar 3", "Pillar 2 cluster at 8 pieces; Pillar 3 starting"],
      ["Q4", "Pillar 3 (continue) + refresh Pillar 1", "5 more for Pillar 3 + quarterly refresh of Pillar 1 flagship", "All 3 clusters at 8\u201310 pieces; Pillar 1 refreshed"],
    ], footer: "Output: 3 pillars + ~30 supporting pieces in a year. That\u2019s a real cluster strategy. You\u2019ll out-rank sites publishing 3\u00D7 more articles scattered across topics." },
    { type: "principle", num: "02", title: "Internal Linking \u2014 The Architecture of Authority", intro: "Internal linking inside a cluster isn\u2019t just about navigation. It\u2019s how you tell Google which pages are important, what they relate to, and where your expertise lives. Most writers under-invest here \u2014 which is why most clusters never compound.", sectionTitle: "The 4 Rules of Cluster Internal Linking", sections: [
      { heading: "1. Every supporting piece links back to the pillar", example: "Anchor: \"Read our complete guide to email marketing for nonprofits\u2192\"", note: "Use the pillar\u2019s target keyword in the anchor. This is NOT over-optimisation \u2014 it\u2019s strong-signalling." },
      { heading: "2. The pillar links out to 5\u20138 key supporting pieces", example: "In the relevant H2 section, link to the supporting piece that deep-dives on that sub-topic.", note: "Don\u2019t link to all supporting pieces from the pillar \u2014 pick the best 5\u20138 for user flow + SEO equity." },
      { heading: "3. Sibling links between closely related supporting pieces", example: "\"Subject lines for year-end appeals\" links to \"Donor segmentation for small orgs\" naturally where relevant.", note: "Creates multiple paths for crawlers; surfaces related content for readers; boosts dwell time." },
      { heading: "4. Use descriptive anchor text with the target keyword of the linked page", example: "\"The 4U headline formula\" > \"click here\" or \"learn more\"", note: "Anchor text is one of the strongest on-page signals. Generic anchors waste the signal." },
    ], rule: "A cluster without deliberate internal linking is just a set of related articles. The linking is what turns articles into a compounding system." },
    { type: "exercise", title: "Design Your First Content Cluster", intro: "Spend 30 minutes designing one cluster. Output: a 1-page plan with pillar + 10 supporting piece titles + the internal linking map.", items: [
      { num: "1", copy: "Pick the pillar topic. Specific enough to own; broad enough to spawn 10+ sub-questions.", answer: "Example: \"Email marketing for nonprofits under 50 staff\" \u2014 specific audience, broad enough topic." },
      { num: "2", copy: "Draft the pillar\u2019s 8\u201315 H2 sub-topics \u2014 each becomes a supporting piece title later.", answer: "Examples: \"Building your nonprofit email list\", \"Year-end appeal subject lines\", \"Donor segmentation for small orgs\", etc." },
      { num: "3", copy: "Pick the 10 most important supporting pieces (those with real search intent + volume)", answer: "Check each with a keyword tool. Kill any with KD > DR+15. Prioritise intent + specificity + search demand." },
      { num: "4", copy: "Sketch the internal linking map: which supporting pieces link to pillar, and which sibling links matter", answer: "All 10 supporting \u2192 pillar. Pillar \u2192 5\u20138 supporting. 2\u20133 sibling links per supporting piece. Now you have a cluster." },
    ] },
  ],
};
