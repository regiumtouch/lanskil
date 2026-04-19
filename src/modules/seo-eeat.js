// SEO Content Writing — Module 4: E-E-A-T & Authority Building
export const seoEeatModule = {
  id: "seo04",
  title: "E-E-A-T & Authority Building",
  type: "Rich Module",
  duration: "90 min",
  desc: "Experience, Expertise, Authoritativeness, Trust \u2014 the four signals Google and AI search now weigh above almost everything else, and what writers can do about each.",
  topics: ["The Four E-E-A-T Signals", "Named Authors", "First-Hand Experience", "Citing Sources", "Author Pages", "Trust Architecture"],
  quiz: [
    { q: "A 2,000-word guide is posted anonymously with no author byline, no publish date, and no sources. Predict its ranking fate in 2026:", opts: ["Will rank fine if the content is good", "Will struggle against equivalent content with named author + date + sources; E-E-A-T failures compound against the Helpful Content System", "Ranking depends on word count", "Anonymous content always ranks higher for privacy"], correct: 1 },
    { q: "Rank these E-E-A-T components by what a writer can most directly influence: (A) domain authority (B) named author with credentials (C) backlinks from press (D) citing primary sources in-text", opts: ["A > B > C > D", "B \u2248 D > C > A \u2014 writers directly control byline, credentials, and citations; authority and backlinks are downstream consequences", "A > C > D > B", "All equal"], correct: 1 },
    { q: "Which single sentence below adds the most E-E-A-T weight to a technical piece?", opts: ['"This is an important topic that affects many businesses."', '"In our 40 customer interviews with B2B CMOs last quarter, 34 mentioned this problem unprompted."', '"Experts agree this is crucial."', '"Many sources confirm this is true."'], correct: 1 },
    { q: "Your site is YMYL (Your Money Your Life \u2014 finance, medical, legal). What's different about E-E-A-T requirements?", opts: ["No difference", "YMYL topics require substantially stronger credentials, author disclosure, and source citation \u2014 Google applies stricter quality standards", "Less strict", "Only applies to medical topics"], correct: 1 },
    { q: "A small site without famous authors wants to build Experience credibility. The strongest move is:", opts: ["Pay for a famous guest writer", "Show first-hand, original examples in every piece \u2014 screenshots, quotes from real customers, original data; Experience is the \"E\" that unknown writers can out-earn", "Skip E-E-A-T entirely", "Use AI to write more content"], correct: 1 },
    { q: "AI search engines (Perplexity, AI Overviews) cite a piece when it contains:", opts: ["Lots of keywords", "Specific, verifiable facts the AI can attribute confidently \u2014 named person, real number, dated publication, cited source", "Long word counts", "Emojis and images"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 4", title: "E-E-A-T", titleAccent: "& Authority Building", subtitle: "The four signals Google and AI search now weigh above almost everything else \u2014 and exactly what writers can do about each.", meta: "SEO Content Writing Masterclass  |  Module 4  |  8 Slides" },
    { type: "stats", eyebrow: "WHY E-E-A-T DOMINATES NOW", title: "Quality signals replaced keyword signals as the primary ranking driver", intro: "Google\u2019s Helpful Content System, AI Overviews, and Perplexity-style search all weight E-E-A-T above almost any other on-page factor. Writers who signal experience and expertise win \u2014 and writers who don\u2019t, lose.", stats: [
      { num: "56%", label: "drop in traffic for sites flagged as 'not helpful content' by Google updates (2024\u20132025)" },
      { num: "3.4\u00D7", label: "more AI Overview citations for content with named authors + first-hand data vs anonymous content" },
      { num: "10 min", label: "the time it takes to add the E-E-A-T signals Google and AI engines reward on any piece" },
    ], subheading: "Why Writers Win on E-E-A-T Specifically", bullets: [
      "Experience (first-hand evidence) is the one signal AI content cannot fake without access to your real work",
      "Expertise comes from what you\u2019ve done, not what you claim \u2014 and writers can show their work",
      "Authority builds slowly but compounds; every cited piece makes the next piece more citable",
      "Trust comes from boring basics: accurate facts, dated publishes, transparent sources. All writer-controlled.",
    ] },
    { type: "grid", eyebrow: "THE FOUR SIGNALS", title: "What each letter actually means", subtitle: "E-E-A-T is one of the most misused acronyms in SEO. Here\u2019s what each component really signals to search engines and AI engines.", items: [
      { num: "01", title: "Experience", desc: "Have you actually DONE the thing you\u2019re writing about? First-hand usage, first-hand results, personal stories with specifics.", icon: "\u{1F477}" },
      { num: "02", title: "Expertise", desc: "Do you have the knowledge and credentials to write on the topic? Visible on page \u2014 bio, links to prior work, professional background.", icon: "\u{1F393}" },
      { num: "03", title: "Authoritativeness", desc: "Do others in your industry recognise you? Citations, press mentions, invitations to speak, backlinks from peers.", icon: "\u{1F3C6}" },
      { num: "04", title: "Trustworthiness", desc: "Is the content accurate, transparent, and maintained? Sources cited, publish + update dates visible, author bio linked.", icon: "\u{1F6E1}\uFE0F" },
    ], footer: "Rule: Experience and Trust are the two most writer-controllable. Expertise is earned over time. Authority is the downstream consequence of all three." },
    { type: "principle", num: "01", title: "The Byline Upgrade \u2014 The Fastest E-E-A-T Win", intro: "Most content is published with no byline at all or a nameless \"Team\" credit. Adding a real named author with a credentials bio is the single highest-ROI E-E-A-T upgrade available \u2014 and it takes less than 10 minutes per site.", sectionTitle: "What a Proper Byline Looks Like", sections: [
      { heading: "1. A real person\u2019s name", example: "\"By Priya Sharma\" \u2014 not \"By The Marketing Team\"", note: "Real names convert. \"Team\" bylines signal low-effort content." },
      { heading: "2. A 2\u20133 line credentials bio", example: "\"Priya has led content at two B2B SaaS companies; previously SEO lead at [company].\"", note: "Relevant to the topic. Three sentences max. Link to their full bio or LinkedIn." },
      { heading: "3. A clickable author page", example: "The author name links to an author page listing their other pieces + full bio.", note: "Author pages are cited by Google\u2019s own quality rater guidelines \u2014 build them." },
      { heading: "4. Publish + last-updated dates", example: "\"Published March 2025. Last updated April 2026.\"", note: "Freshness + transparency. AI engines favour dated content over undated." },
    ], rule: "If your content has no named author, no bio, and no dates \u2014 you are competing without E-E-A-T. Fix it before you write another article." },
    { type: "comparison", eyebrow: "ANONYMOUS vs AUTHORED", title: "Two versions of the same article in the SERP", subtitle: "Real example: same topic, same depth, same keyword coverage. Only the byline + credentials + dates differ. Predict the ranking gap.", left: { title: "Anonymous (Old Default)", color: "#EF4444", items: [
      { strong: "No byline \u2014 just the site name in the SERP", note: "Reads as low-effort to both search engines and humans." },
      { strong: "No publish date", note: "Readers can\u2019t tell if it\u2019s 2018 or 2026; bounce rate climbs." },
      { strong: "No sources cited", note: "Claims have no verification; AI engines can\u2019t confidently cite." },
      { strong: "Over 6 months: rankings slip; Helpful Content System penalties accumulate", note: "The slow bleed is worse than a sudden drop because writers don\u2019t notice." },
    ] }, right: { title: "Authored (2026 Baseline)", color: "#10B981", items: [
      { strong: "\"By Priya Sharma, Head of SEO \u2014 10 years at 3 B2B SaaS companies\"", note: "Expertise visible in one line; trust conferred before reader hits the first paragraph." },
      { strong: "\"Published March 14, 2025. Last updated April 2, 2026.\"", note: "Freshness + maintenance signals; AI engines strongly prefer dated content." },
      { strong: "Every claim links to a source (study, blog, primary document)", note: "Citable by AI, trusted by humans, durable against fact-check challenges." },
      { strong: "Over 6 months: rankings rise; citations in AI Overviews accumulate", note: "The compounding works in your favour. Once you\u2019re a citeable source, more citations follow." },
    ] }, footer: "The difference is 10 minutes of site template work and a 3-sentence author bio. That\u2019s the whole cost." },
    { type: "table", title: "The 5 E-E-A-T Moves Every Writer Can Make This Week", subtitle: "These aren\u2019t aspirational. Each is a concrete, same-day action with measurable ranking impact within 60\u201390 days.", columns: ["Move", "Time to Implement", "Impact"], rows: [
      ["Add named author + 2-line bio to every published piece", "30 min site-wide", "High \u2014 baseline E-E-A-T signal"],
      ["Add publish + last-updated dates + refresh stale content", "1 hr", "High \u2014 freshness is a direct ranking factor"],
      ["Cite 3\u20135 external sources per piece with dofollow outbound links", "10 min per piece", "Medium\u2013High \u2014 trust signal + reader credibility"],
      ["Add first-hand data or screenshot to every piece you write", "20 min per piece", "Very high \u2014 Experience is the \"E\" AI can\u2019t fake"],
      ["Build an author page per writer, linked from every byline", "1 hr per author", "Medium-High \u2014 Expertise + Authority compound from here"],
    ], footer: "Rule: implement all 5 this month. The compounding hits your SERP ranking within a quarter." },
    { type: "principle", num: "02", title: "Experience \u2014 The E the Underdog Wins On", intro: "Authority takes years to build. Expertise takes a career. But Experience \u2014 first-hand evidence in the content itself \u2014 is available to any writer willing to put in the reporting. It\u2019s the E-E-A-T signal most worth investing in.", sectionTitle: "How to Signal Experience in Every Piece", sections: [
      { heading: "1. Use a real screenshot instead of a stock image", example: "Your actual dashboard, email, or product screen \u2014 with real data visible.", note: "AI can\u2019t generate your specific screenshot. First-hand proof converts." },
      { heading: "2. Quote a real customer conversation", example: "\"Last week, Priya at Zendesk told me: 'We tried this for 6 weeks and...'\"", note: "Direct quotes with named individuals = highest-form Experience signal." },
      { heading: "3. Cite original data or analysis", example: "\"We ran 40 customer interviews in Q1. 34 mentioned this problem unprompted.\"", note: "Even small-sample original research out-ranks rehashed secondary reporting." },
      { heading: "4. Describe a specific time you did the thing", example: "\"In March 2026, we ran this A/B test over 14 days. Variant B won by 23%.\"", note: "Specific date, specific scale, specific result = the Experience marker AI engines love." },
    ], rule: "Every piece of content you publish should contain at least one first-hand artefact. Rule of thumb: if a competitor could have written it identically, you haven\u2019t added Experience yet." },
    { type: "exercise", title: "Upgrade One Piece to E-E-A-T Standard", intro: "Pick one piece you\u2019ve already published. Run it through the 5 upgrades from Slide 6 right now \u2014 most take under 10 minutes.", items: [
      { num: "1", copy: "Does it have a named author with a 2\u20133 line credentials bio? If not \u2014 add it now. (Template: \"[Name] has [relevant experience]; previously [relevant role].\")", answer: "Most writers under-use their own bio. Your bio is the highest-conversion 50 words on your entire site." },
      { num: "2", copy: "Does it show both publish + last-updated dates prominently? If not \u2014 add. Refresh the content if it\u2019s more than a year old.", answer: "A 12-month-old piece with no dates looks stale. A 12-month-old piece with 'Updated April 2026' looks maintained." },
      { num: "3", copy: "Can you cite 3\u20135 external sources with dofollow outbound links? Quote them or link them in-text.", answer: "Outbound links to authoritative sources signal trust \u2014 both to readers and to Google. They are not SEO leaks." },
      { num: "4", copy: "Can you add ONE first-hand artefact \u2014 a real screenshot, a customer quote, or original data \u2014 that wasn\u2019t there before?", answer: "This is the Experience layer AI can\u2019t replicate. One artefact per piece, over 20 pieces, compounds into a citation moat." },
    ] },
  ],
};
