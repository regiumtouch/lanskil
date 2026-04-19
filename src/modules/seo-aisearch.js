// SEO Content Writing — Module 5: Writing for AI Search
export const seoAisearchModule = {
  id: "seo05",
  title: "Writing for AI Search",
  type: "Rich Module",
  duration: "90 min",
  desc: "AI Overviews, Perplexity, ChatGPT Search, and Claude rewrote the search game. Learn to write content these engines reliably cite \u2014 because citation is the new traffic.",
  topics: ["The Citation Economy", "AI Overview Mechanics", "Q&A Structure", "Citable Facts", "Schema Markup", "Perplexity & ChatGPT"],
  quiz: [
    { q: "You rank #3 for a query but the AI Overview cites 4 OTHER sources instead. Most likely reason:", opts: ["Your ranking is wrong", "Your content has the right topic but not the right FORMAT or CITABLE FACTS \u2014 AI engines pick sources with clear Q&A structure + verifiable specifics, not just good rankings", "The AI hates your site", "Random chance"], correct: 1 },
    { q: "Rank these content elements by how likely AI search engines are to cite them: (A) a generic 500-word intro (B) a table with 6 rows of specific data (C) a \"what is X\" definition in Q&A format (D) brand storytelling", opts: ["A > B > C > D", "B \u2248 C >> A > D \u2014 structured, specific, citable chunks win; prose intros and storytelling get skipped", "D > A > B > C", "All equal"], correct: 1 },
    { q: "A writer wants to increase their Perplexity citations. The most effective tactical move is:", opts: ["Add more keywords", "Rewrite content so each major section starts with a direct answer + a cite-worthy fact or number \u2014 AI engines lift these cleanly", "Make everything longer", "Remove external links"], correct: 1 },
    { q: "\"AI Overviews\" differ from traditional SERPs in what critical way?", opts: ["They\u2019re just links", "They synthesise answers from 3\u20135 cited sources and display them above traditional results \u2014 citation becomes the visibility primitive, not ranking", "They show only ads", "They don\u2019t affect traffic"], correct: 1 },
    { q: "Schema markup (JSON-LD structured data) helps AI search because:", opts: ["It\u2019s just for Google rich results", "It explicitly labels content types (Article, FAQ, HowTo, Product) \u2014 AI engines parse schema faster and more confidently than prose, boosting citation odds", "It\u2019s deprecated", "It only affects mobile"], correct: 1 },
    { q: "Your content has all the right facts but buried in long flowing prose. An AI engine parses it. What likely happens?", opts: ["Full citation", "AI struggles to extract discrete, confident answer units \u2014 often skips in favour of content that presents the same facts in clearly delineated Q&A, table, or list format", "Perfect performance", "It gets penalised"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "Writing for", titleAccent: "AI Search", subtitle: "AI Overviews, Perplexity, ChatGPT Search, and Claude rewrote the game. Learn to write content these engines reliably cite.", meta: "SEO Content Writing Masterclass  |  Module 5  |  8 Slides" },
    { type: "stats", eyebrow: "THE CITATION ECONOMY", title: "Ranking isn't enough anymore \u2014 you need to be cited", intro: "AI search engines don\u2019t just list links. They synthesise answers from 3\u20135 cited sources and display those answers above the traditional SERP. If you\u2019re not in the citation set, you\u2019re invisible.", stats: [
      { num: "40%", label: "of Google searches trigger an AI Overview in 2026" },
      { num: "78%", label: "of AI Overview clicks go to the 3\u20135 cited sources, not organic results below" },
      { num: "2.8\u00D7", label: "more organic clicks for citable content vs same-content-without-citable-structure (internal study)" },
    ], subheading: "Why \"Citable\" Is the New \"Rankable\"", bullets: [
      "AI engines use content that can be attributed confidently \u2014 named sources, specific facts, verifiable claims",
      "Prose-heavy content loses to structured content \u2014 tables, Q&As, and lists are easier for AI to lift",
      "Unattributed claims get skipped even when factually correct \u2014 AI engines prefer to cite what they can verify",
      "Your dated, author-bylined, source-cited content is 3\u00D7 more likely to be cited than your anonymous equivalent",
    ] },
    { type: "grid", eyebrow: "HOW AI SEARCH PICKS SOURCES", title: "The five criteria AI engines use", subtitle: "Reverse-engineered from citations patterns across Google AI Overviews, Perplexity, and ChatGPT Search in 2025\u20132026.", items: [
      { num: "01", title: "Topical relevance", desc: "Same as traditional SEO \u2014 the content must actually be about the query.", icon: "\u{1F3AF}" },
      { num: "02", title: "Answer specificity", desc: "A discrete, extractable answer in the first 150 words \u2014 not buried in prose or backstory.", icon: "\u{1F4AC}" },
      { num: "03", title: "Citable facts", desc: "Named people, real numbers, specific dates \u2014 things AI can confidently attribute to YOUR page.", icon: "\u{1F4CA}" },
      { num: "04", title: "Clear structure", desc: "Q&A blocks, tables, bulleted lists, H2s that answer specific questions \u2014 AI parses structure faster than prose.", icon: "\u{1F5C2}\uFE0F" },
      { num: "05", title: "Trust signals", desc: "Named author, date, sources \u2014 so the AI can confidently represent the source without hallucination risk.", icon: "\u{1F6E1}\uFE0F" },
    ], footer: "All 5 are under your direct control. Writers who structure for AI search get cited; writers who don\u2019t, watch their traffic get skimmed by zero-click AI answers." },
    { type: "principle", num: "01", title: "Q&A Structure \u2014 The Format AI Loves", intro: "The highest-citation-rate format in 2026 is explicit Q&A blocks. Not because questions are magic, but because they create clearly delineated \"answer units\" an AI can extract cleanly and attribute confidently.", sectionTitle: "How To Write Q&A Blocks AI Will Cite", sections: [
      { heading: "1. Use the exact question as an H2", example: "H2: \"What is the 4U headline formula?\" (not \"Understanding the 4U Approach\")", note: "AI engines match question H2s to search queries and lift the answer directly." },
      { heading: "2. Answer in the first sentence below", example: "\"The 4U formula scores headlines on 4 criteria: Useful, Urgent, Ultra-Specific, Unique.\"", note: "Don\u2019t bury the answer. First sentence = the answer. Everything after is elaboration." },
      { heading: "3. Include ONE specific fact in the answer", example: "\"Headlines scoring 12/16 or higher consistently out-perform by 2.3\u00D7 in CTR tests.\"", note: "The fact is what makes the answer citable. Without it, AI has nothing specific to attribute." },
      { heading: "4. Use FAQ schema where applicable", example: "Mark up FAQ sections with JSON-LD \"FAQPage\" schema.", note: "Schema helps AI engines confidently parse structure. Yoast / Rank Math handles this automatically." },
    ], rule: "If your content doesn\u2019t have at least 3 explicit H2 questions with direct answers below, you\u2019re leaving AI Overview citations on the table." },
    { type: "comparison", eyebrow: "PROSE vs CITABLE", title: "Two versions of the same content \u2014 only one gets cited", subtitle: "Same facts, same topic. One is prose. One is structured for AI extraction. The second one dominates AI Overview citations.", left: { title: "Prose-Heavy (Gets Skipped)", color: "#EF4444", items: [
      { strong: "Opens with 3 paragraphs of context before the answer", note: "AI engines give up. Moves on to the next candidate source." },
      { strong: "Facts embedded mid-sentence, without clear delineation", note: "\"...and in some cases our research showed around 30% improvement...\" \u2014 too soft to cite." },
      { strong: "No H2 questions. No tables. No Q&A blocks.", note: "No discrete answer units for AI to lift. Entire page becomes one long blob." },
      { strong: "Anonymous byline. No date. No linked sources.", note: "AI won\u2019t cite what it can\u2019t confidently attribute. Trust signals missing." },
    ] }, right: { title: "Citable Structure (Gets Cited)", color: "#10B981", items: [
      { strong: "H2: \"What is the 4U headline formula?\" \u2192 direct answer in next sentence", note: "AI engine matches question to query, lifts answer + cites your page." },
      { strong: "Specific numbers attributed: \"Our 2026 study of 1,847 headlines showed a 2.3\u00D7 CTR lift\"", note: "Citable fact. AI can attribute confidently. Your URL gets the citation click." },
      { strong: "Tables comparing 6 options with specific data", note: "Tables are a top-cited format \u2014 AI can lift rows wholesale." },
      { strong: "Named author + dated publish + 5 dofollow source citations", note: "All trust signals present. AI treats you as a confident attribution target." },
    ] }, footer: "Same facts, two ways. The structured version gets the citations; the prose version gets ignored. This is the entire game now." },
    { type: "table", title: "The Citable-Fact Menu \u2014 What to Include In Every Piece", subtitle: "These are the types of specifics AI engines most reliably cite. Aim for at least 2\u20133 in every piece you publish.", columns: ["Fact Type", "Example", "Why AI Loves It"], rows: [
      ["Named person + role + outcome", "\"Priya Sharma, VP Ops at Zendesk, cut triage time 14\u21922 min\"", "Confident attribution; verifiable; unique to your piece"],
      ["Specific number with context", "\"Our 40-interview study found 34/40 CMOs cited AI slop as a brand risk\"", "Citable as a stat; attribution is specific to your research"],
      ["Dated case / timeframe", "\"In Q1 2026, we ran 5 variants over 14 days. Winner: +23% CTR\"", "Fresh, specific, bounded \u2014 AI engines prefer over vague claims"],
      ["Named tool / product / source", "\"Using Ahrefs Site Explorer, we pulled 1,200 queries from Q4 2025\"", "Methodology transparency; tool names add citability"],
      ["Direct quote from a named source", "\"As Rand Fishkin noted in Sparktoro\u2019s 2025 report: \u2018Google is no longer the only search...\u2019\"", "Quote + source = citable; AI engines chain-cite original + your page"],
    ], footer: "Rule: every 500 words of published content should contain at least one citable-fact entry from this menu. No citable facts = low citation odds, regardless of quality." },
    { type: "principle", num: "02", title: "Beyond Google \u2014 Writing for Perplexity, ChatGPT, Claude", intro: "Google AI Overviews is the largest AI search surface but not the only one. Perplexity, ChatGPT Search, and Claude each have quirks. Here\u2019s what works across all four in 2026.", sectionTitle: "Cross-AI Optimisation Tactics", sections: [
      { heading: "1. Optimise for reasoning, not keywords", example: "Answer the \"why\" behind the query, not just the \"what.\" AI engines evaluate explanation quality.", note: "Perplexity and Claude especially reward pieces that explain reasoning with logical structure." },
      { heading: "2. Include contrarian or counterintuitive angles", example: "\"Most people think X. The data suggests Y. Here\u2019s why.\"", note: "AI engines cite unique perspectives over echo-chamber content. Consensus gets compressed; difference gets cited." },
      { heading: "3. Be explicit about what makes your piece different", example: "\"Unlike most guides, this one is based on 40 interviews with working CMOs in 2026.\"", note: "Helps AI place your content in its mental map of the topic landscape." },
      { heading: "4. Publish consistently in a focused topic area", example: "10 pieces on content strategy > 50 pieces on random topics, from an AI-cite perspective", note: "Topical authority compounds across AI engines; fragmented topic coverage dilutes your citability." },
    ], rule: "AI engines cite sources they recognise as authoritative on a specific topic. Focus + consistency + specificity \u2014 in that order \u2014 is how you become the source." },
    { type: "exercise", title: "The AI-Search Audit: Make One Piece Citable", intro: "Pick one piece of content you\u2019d like to show up in AI Overviews for. Run it through the 5 moves from this module.", items: [
      { num: "1", copy: "Does the first 150 words contain a direct, extractable answer to the main query? Or does it open with context/backstory?", answer: "If context-first \u2014 rewrite. Move the answer to sentence 1\u20132. Everything else is elaboration below." },
      { num: "2", copy: "Add at least 3 H2s formatted as explicit questions (matching likely query variants)", answer: "Example: \"What is X?\" \"How does X work?\" \"Why is X better than Y?\" \u2014 these are the questions AI engines match to queries." },
      { num: "3", copy: "Insert at least 2 citable facts from the menu (Slide 6)", answer: "Named person + outcome / specific number with methodology / dated case / named source. Without these, citation odds drop." },
      { num: "4", copy: "Ensure named author byline + visible dates + 3\u20135 cited outbound sources are present", answer: "All three must be on the page. Missing any of them drops citation confidence. 10 minutes of work, 60\u201390 day payoff." },
    ] },
  ],
};
