// SEO Content Writing — Module 3: On-Page Structure & Optimisation
export const seoOnpageModule = {
  id: "seo03",
  title: "On-Page Structure & Optimisation",
  type: "Rich Module",
  duration: "90 min",
  desc: "Title tags, headings, URL slugs, internal linking, structured data \u2014 the on-page craft that signals relevance to search engines and scannability to humans.",
  topics: ["Title Tags", "Meta Descriptions", "H1 / H2 Hierarchy", "URL Slugs", "Internal Linking", "Schema Markup"],
  quiz: [
    { q: "Your title tag is 82 characters. What will Google do?", opts: ["Index it fully", "Truncate the SERP display at ~60 characters \u2014 anything past \u2018...\u2019 is invisible to searchers at the decision point", "Ignore the tag", "Penalise you"], correct: 1 },
    { q: "A 2,500-word page has a single H1 and NO H2s. Most likely consequence for SEO and readers:", opts: ["Perfect structure", "AI engines struggle to extract answers; human readers bounce because nothing scannable \u2014 engagement signals tank, ranking follows", "Improves ranking", "No effect"], correct: 1 },
    { q: "Good URL slug: \"best-crm-for-solopreneurs-2026\". Bad slug: \"/?p=42871&cat=software\". Why does the good one win?", opts: ["Shorter is always better", "Keyword-rich + readable = higher CTR in SERPs, easier to share, small but real ranking signal", "Google doesn\u2019t read URLs", "Query strings are banned"], correct: 1 },
    { q: "You add 20 internal links to a 1,500-word article. Result?", opts: ["Better SEO always", "Diluted link equity and reader fatigue; optimal is 3\u20138 relevant internal links per piece, each contextually placed", "No effect", "Google penalty"], correct: 1 },
    { q: "A meta description of \"Read our article to learn about CRM software.\" produces:", opts: ["Strong SERP CTR", "Low CTR \u2014 meta descriptions aren\u2019t a direct ranking factor but they drive click-through, which IS a signal; wasted opportunity", "Immediate ranking boost", "No effect on anything"], correct: 1 },
    { q: "Rank these anchor text types for internal linking by SEO value: (A) \"click here\" (B) \"learn more\" (C) \"the 4U headline formula\" (D) \"here\"", opts: ["A > B > C > D", "C >> A, B, D \u2014 descriptive keyword-rich anchors tell search engines what the linked page is about; generic anchors give zero context", "D > A > B > C", "All equal"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 3", title: "On-Page Structure", titleAccent: "& Optimisation", subtitle: "Title tags, headings, URL slugs, internal linking \u2014 the on-page craft that signals relevance to search and scannability to humans.", meta: "SEO Content Writing Masterclass  |  Module 3  |  8 Slides" },
    { type: "stats", eyebrow: "WHY STRUCTURE WINS", title: "Great content with bad structure still loses", intro: "On-page structure is where most writers lose SEO battles they should have won. Every element below is under your direct control \u2014 and each one compounds.", stats: [
      { num: "2.1\u00D7", label: "higher SERP CTR on titles that match the top-performing-title pattern for that intent (Moz)" },
      { num: "40%", label: "more AI Overview citations for pages with clear H2 question-answer structure" },
      { num: "3\u20138", label: "the optimal number of internal links per 1,500-word piece \u2014 more dilutes, fewer under-invests" },
    ], subheading: "What On-Page Optimisation Actually Does", bullets: [
      "Makes your content scannable for humans \u2014 which increases dwell time and reduces bounce",
      "Makes your content parseable for crawlers \u2014 which clarifies what you\u2019re ranking for",
      "Makes your content citable by AI engines \u2014 which gets you into Overviews and Perplexity",
      "Makes your content clickable in the SERP \u2014 which drives the traffic that drives everything",
    ] },
    { type: "principle", num: "01", title: "Title Tags \u2014 The Highest-Leverage 60 Characters You Write", intro: "The title tag is the single most scrutinised element on your page. It determines SERP click-through, informs ranking, and lives in the browser tab. Get it wrong and nothing else matters.", sectionTitle: "The 4 Rules of a High-CTR Title Tag", sections: [
      { heading: "1. Stay under 60 characters", example: "Google truncates the SERP display at ~60 chars on desktop. Anything past is invisible.", note: "Write the most important words first. The keyword near the front if natural." },
      { heading: "2. Include the primary keyword \u2014 naturally", example: "\"Best CRM for Solopreneurs in 2026: 9 Options Compared\" > \"The Ultimate Guide\"", note: "Keyword near the front. Not stuffed. Must read like a human wrote it." },
      { heading: "3. Promise a specific outcome or benefit", example: "\"How to Cut Your Email Invoicing Time by 74% (Free Template)\" > \"Email Tips\"", note: "Numbers, timeframes, or specifics always beat generic benefit language." },
      { heading: "4. Match the searcher\u2019s intent format", example: "Informational query \u2192 \"How to...\" / Commercial \u2192 \"Best X for Y\" / Comparison \u2192 \"X vs Y\"", note: "Title format should match what\u2019s already winning the SERP. Don\u2019t fight the pattern." },
    ], rule: "Write 10 title tag variants per piece. Pick the one you\u2019d click on in a SERP next to 9 competitors. This is the 60 characters that pay for everything else." },
    { type: "comparison", eyebrow: "WEAK vs STRONG TITLE TAGS", title: "Same article, two titles \u2014 drastically different CTR", subtitle: "Real-world examples of the difference a rewrite can make. Writers routinely leave 2\u20133\u00D7 CTR on the table here.", left: { title: "Weak Title Tags", color: "#EF4444", items: [
      { strong: "\"The Ultimate Guide to Email Marketing\" (45 chars)", note: "No keyword specificity, no outcome promise, competes with 10,000 identical titles." },
      { strong: "\"Welcome to our blog \u2014 here\u2019s what we wrote\" (41 chars)", note: "Blog post title used as title tag. Zero search value." },
      { strong: "\"Amazing Tips for Better Marketing (Must Read!)\" (47 chars)", note: "Clickbait language triggers search engines\u2019 \u201Clow quality\u201D signals." },
    ] }, right: { title: "Strong Title Tags", color: "#10B981", items: [
      { strong: "\"9 Email Templates That Doubled Our CTR (For B2B SaaS)\" (53 chars)", note: "Specific number + result + audience = keyword-rich + clickable." },
      { strong: "\"CRM Pricing Compared: HubSpot vs Pipedrive vs Close (2026)\" (57 chars)", note: "Commercial intent + fresh date + direct competitor names." },
      { strong: "\"How to Cut SEO Costs 40% Without Losing Rankings (Case Study)\" (60 chars)", note: "Counterintuitive promise + specific number + format signal." },
    ] }, footer: "Rule: every title tag is 60 characters competing with 9 other 60-character titles. Every character must earn its place." },
    { type: "table", title: "Heading Hierarchy \u2014 The Structure Both Humans and AI Parse", subtitle: "H1, H2, H3 structure isn\u2019t decorative. It\u2019s how both search engines AND AI engines extract the logical skeleton of your content.", columns: ["Heading", "Rule", "Example"], rows: [
      ["H1 (only ONE per page)", "Matches or closely mirrors the title tag; the main topic of the page", "\"How to Cut Invoicing Time by 74% for Freelancers\""],
      ["H2 (section headers)", "One every 200\u2013300 words; answers a specific sub-question", "\"Why Freelancers Lose 4 Hours/Week to Invoicing\""],
      ["H3 (sub-section)", "Under H2s when a section has multiple points; keep consistent depth", "\"The 3-Template Approach\""],
      ["H4\u2013H6", "Rarely needed; if you\u2019re using H4+ you probably should break into separate pages", "Used sparingly in long-form tutorials"],
    ], footer: "Rule: if an AI search engine were extracting your table of contents from your H2s alone, would it make sense? If no, rewrite." },
    { type: "principle", num: "02", title: "Internal Linking \u2014 The Underrated Ranking Signal", intro: "Internal links tell search engines how your content relates, which pages are important, and what each page is about. They\u2019re entirely under your control \u2014 and most writers underinvest.", sectionTitle: "The 4 Rules of Smart Internal Linking", sections: [
      { heading: "1. Link to your pillar pages from every supporting piece", example: "Pillar: \"Email Marketing for Nonprofits.\" Every sub-piece links back.", note: "This builds topical authority \u2014 the pillar ranks higher because its cluster reinforces it." },
      { heading: "2. Use descriptive anchor text, not \"click here\"", example: "\"Learn the 4U headline formula\" > \"click here\"", note: "Anchor text is a relevance signal. Use the target keyword of the linked page naturally." },
      { heading: "3. Link contextually \u2014 mid-paragraph, not in a footer list", example: "Links embedded in relevant prose perform better than \"related articles\" blocks at the bottom.", note: "Contextual placement drives both click-through AND ranking signal." },
      { heading: "4. Don\u2019t over-link", example: "3\u20138 internal links per 1,500-word piece. Each one should genuinely help the reader.", note: "20+ internal links = link-stuffing; dilutes signal and triggers spam patterns." },
    ], rule: "Every published piece gets an \"internal linking pass\" before publish: does it link out to 3\u20138 related pieces? Do 3\u20135 older pieces link into it? If no, fix before shipping." },
    { type: "grid", eyebrow: "ON-PAGE CHECKLIST", title: "Six boxes every piece should check before publish", subtitle: "This is the 10-minute pre-publish audit. Run it on every piece. Nothing ships until all six are green.", items: [
      { num: "01", title: "Title tag under 60 chars", desc: "With primary keyword + specific benefit; writes 10 variants and picks the best.", icon: "\u{1F4CC}" },
      { num: "02", title: "Meta description 140\u2013155 chars", desc: "With benefit + keyword; written for humans to click, not for density.", icon: "\u{1F5C2}\uFE0F" },
      { num: "03", title: "Clean URL slug", desc: "Short, keyword-aware, hyphenated, lowercase, no query strings.", icon: "\u{1F517}" },
      { num: "04", title: "One H1, clean H2 hierarchy", desc: "H2s answer sub-questions; logical skeleton reads as a usable table of contents.", icon: "\u{1F5C3}\uFE0F" },
      { num: "05", title: "3\u20138 internal links with descriptive anchors", desc: "Link to pillar + related pieces; use keyword-rich anchor text.", icon: "\u{1F310}" },
      { num: "06", title: "Alt text on images + author byline visible", desc: "Accessibility + E-E-A-T basics that take 2 minutes and add up.", icon: "\u{1F4DC}" },
    ], footer: "Rule: this 10-minute audit consistently out-performs 4-hour \"SEO tool\" optimisations. Ship nothing without it." },
    { type: "exercise", title: "The 10-Minute On-Page Audit", intro: "Pick one piece of content you already published. Run the 6-box checklist on it right now. Fix anything red.", items: [
      { num: "1", copy: "Is your title tag under 60 chars, with the primary keyword + a specific benefit?", answer: "If no \u2014 rewrite. 10 variants, pick the one you\u2019d click. This alone can 2\u00D7 your CTR." },
      { num: "2", copy: "Does your meta description (140\u2013155 chars) promise a benefit + include the keyword + drive click-through?", answer: "If no \u2014 rewrite. This is the ad copy for your organic listing. Don\u2019t leave it to Google to auto-generate." },
      { num: "3", copy: "Do you have exactly one H1 and clean H2 hierarchy every 200\u2013300 words?", answer: "If no \u2014 restructure. Use H2s that answer sub-questions. AI engines lift these directly into Overviews." },
      { num: "4", copy: "Does the piece link to 3\u20138 other relevant pieces on your site with descriptive anchor text?", answer: "If no \u2014 add them before close of day. 10 minutes of work, measurable lift in 30\u201360 days." },
    ] },
  ],
};
