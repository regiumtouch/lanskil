// Content Strategy — Module 2: Audience Research & Personas
export const csAudienceModule = {
  id: "csa01",
  title: "Audience Research & Personas",
  type: "Rich Module",
  duration: "60 min",
  desc: "How to find out who your audience actually is, in their own words \u2014 and turn that research into a persona you will actually use.",
  topics: ["Research Methods", "Customer Interviews", "Listening Channels", "Real Personas", "Language Capture", "Audience Validation"],
  quiz: [
    { q: "In a customer interview, the prospect says: \"I'd probably be interested in a tool like that if it was affordable.\" What should you do with this answer?", opts: ["Treat it as a strong buying signal", "Discount it heavily \u2014 hypothetical future behaviour is the least predictive interview data; ask instead about what they did last week", "Immediately quote pricing", "End the interview"], correct: 1 },
    { q: "A team has a 4-page persona doc with demographics, a stock photo, and hobbies listed. They haven't made a content decision using it in 6 months. The problem is:", opts: ["The document needs better formatting", "The persona doesn't contain the three things that actually drive content decisions: job-to-be-done, blocking obstacles, and exact language", "It needs a video version", "Not enough pages"], correct: 1 },
    { q: "You want to learn your audience's real language with zero research budget. The highest-ROI source is:", opts: ["A generic demographic report", "G2 reviews + Reddit threads + your own sales call recordings + support tickets \u2014 all free, all already exist, all full of exact phrasing", "Your competitor's marketing site", "Guesswork"], correct: 1 },
    { q: "You have 5 customer interviews scheduled. The single most important thing to do DURING each call is:", opts: ["Take detailed notes while they talk", "Record it (with consent) and listen back \u2014 live notes miss the exact phrasing that becomes your future headlines", "Ask rating questions 1\u20135", "Pitch the product at the end"], correct: 1 },
    { q: "You need to validate a persona for a new market segment quickly. Which approach is most honest?", opts: ["Survey 1,000 people with a 20-question form", "Talk to 5 real humans who match the profile \u2014 saturation usually hits by interview 5, and the signal is qualitative not statistical", "Post a poll on Twitter", "Ask your team what they think"], correct: 1 },
    { q: "Two persona docs: (A) 4 pages with demographics, a name, and hobbies; (B) 1 page with named role, current job-to-be-done, 3 blockers, 3 exact phrases from interviews, and one thing that would make them forward your content. Which is more useful and why?", opts: ["A \u2014 it\u2019s thorough", "B \u2014 length is a vanity signal; usefulness comes from whether it helps you decide what to write next", "They\u2019re equal", "A \u2014 more demographics always helps"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 2", title: "Audience Research", titleAccent: "& Personas", subtitle: "How to find out who your audience really is, in their own words \u2014 and turn that into a persona you will actually use.", meta: "Content Strategy  |  Module 2  |  8 Slides" },
    { type: "stats", eyebrow: "WHY RESEARCH MATTERS", title: "You cannot write for people you have never listened to", intro: "The biggest reason content misses is not tone, structure, or format. It is writing for a made-up audience instead of a real one. Twenty minutes of real research can rescue months of guessing.", stats: [
      { num: "5\u00D7", label: "higher engagement on content informed by direct customer research vs. assumed personas" },
      { num: "42%", label: "of marketers admit their personas are \u201Cnever actually used\u201D in day-to-day decisions" },
      { num: "20 min", label: "the amount of research time that changes most content briefs" },
    ], subheading: "What Real Research Replaces", bullets: [
      "Guessing about what your audience cares about \u2014 with quotes you could read back to them.",
      "Fictional demographics \u2014 with the exact problem a real person is trying to solve this week.",
      "Copy-pasted personas from last year \u2014 with language captured from conversations that happened this month.",
    ] },
    { type: "grid", eyebrow: "THREE WAYS TO RESEARCH", title: "How to learn about your audience without a budget", subtitle: "Each method answers a different question. Use at least two of the three before you write anything strategic.", items: [
      { num: "01", title: "Conversations", desc: "5\u201310 customer interviews beat any report. Ask about what they did, not what they would do. Record the exact words they use.", icon: "\u{1F5E3}\uFE0F" },
      { num: "02", title: "Listening", desc: "Forums, Reddit, reviews, support tickets, sales call recordings, LinkedIn comments. Language is already written down \u2014 go find it.", icon: "\u{1F442}" },
      { num: "03", title: "Behaviour", desc: "Search queries, page analytics, email reply patterns. What they clicked reveals what they actually wanted.", icon: "\u{1F50D}" },
    ], footer: "Stack these three and you will know more about your audience than 90% of marketing teams." },
    { type: "principle", num: "01", title: "The 5-Question Customer Interview", intro: "You don't need a research background. You need five good questions and a recorder. Keep the call to 30 minutes. Listen 80% of the time. The goal is not answers \u2014 it is language.", sectionTitle: "The 5 Questions That Always Produce Gold", sections: [
      { heading: "1. \"Walk me through the last time you tried to [achieve this outcome].\"", example: "Not: \u201CWould you be interested in X?\u201D \u2014 hypotheticals lie.", note: "Past behaviour is the only reliable signal of future behaviour." },
      { heading: "2. \"What was hardest about that?\"", example: "The answer is almost always specific, emotional, and usable as a headline.", note: "This is the pain you should be solving \u2014 in their words." },
      { heading: "3. \"What did you try before [your product / the obvious solution]?\"", example: "Names competitors, substitutes, and the workaround they\u2019re currently using.", note: "Teaches you what you\u2019re actually competing with in their mind." },
      { heading: "4. \"What would have to be true for this to be a clear win for you?\"", example: "Surfaces the outcome metric that matters to them \u2014 your content should speak to it.", note: "You just found their success criteria. Write to it." },
      { heading: "5. \"Who else should I talk to who has gone through this?\"", example: "Referrals are gold \u2014 and a signal they found the conversation valuable.", note: "Ends the interview productively and builds your pipeline of research." },
    ], rule: "Do five of these. Listen for the exact phrases that repeat. Those phrases become your headlines, your hooks, and your entire voice." },
    { type: "comparison", eyebrow: "SHALLOW vs DEEP PERSONA", title: "Two personas for the same product", subtitle: "The shallow one produces content that works for nobody. The deep one produces content that a specific person forwards to a colleague.", left: { title: "Shallow Persona", color: "#EF4444", items: [
      { strong: "Name: Marketing Mary, 34", note: "A fictional person with a photo." },
      { strong: "Demographics: \"B2B marketers in tech\"", note: "Describes 400,000 people. Helps nobody." },
      { strong: "Goals: \"Grow brand, increase leads\"", note: "Goals that are true for every marketer." },
      { strong: "Pain points: \"Content is hard\"", note: "Exists in a vacuum. Zero actionable insight." },
    ] }, right: { title: "Deep Persona (Winner \u2605)", color: "#10B981", items: [
      { strong: "Maya, Head of Content at a 50-person B2B fintech.", note: "Specific role, specific company size, specific industry." },
      { strong: "Right now: trying to cut CAC after her CEO saw a board deck from Q1.", note: "Real situation, right now, with stakes." },
      { strong: "Her words: \u201COur content team is the first line on the P&L when things get tight.\u201D", note: "Direct quote captured in interview \u2014 usable as a headline." },
      { strong: "She already tried: hiring a freelancer, automating with AI, and cutting back to one post/week.", note: "Tells you exactly what she\u2019s ready to hear next." },
    ] }, footer: "The difference between these two is 5 real conversations. That is the entire gap." },
    { type: "table", title: "Where to Find Your Audience (For Free)", subtitle: "If you are writing for B2B, DTC, creators, or developers \u2014 the language you need is already out there. Go mine it.", columns: ["Audience Type", "Best Free Listening Spots", "What to Look For"], rows: [
      ["B2B / SaaS", "LinkedIn comments, G2 reviews, r/sales, r/marketing, YC Hacker News", "Job titles, objections, pricing complaints, workflow pain"],
      ["Consumer / DTC", "Instagram comments, Amazon reviews, TikTok, r/fashion, r/BuyItForLife", "Product disappointments, emotional language, lifestyle context"],
      ["Developers", "GitHub issues, Stack Overflow, Hacker News, Dev.to, r/programming", "Error messages, workarounds, \u201CI wish X existed\u201D statements"],
      ["Creators / Freelancers", "Twitter/X, r/freelance, Indie Hackers, newsletter replies", "Pricing struggles, client horror stories, income milestones"],
      ["Enterprise Buyers", "Gartner review language, LinkedIn posts, analyst reports, earnings calls", "Compliance terms, risk language, procurement objections"],
    ], footer: "Pick two of these for your audience. Spend 30 minutes in each. Copy the exact phrases into a doc. You now have a voice guide." },
    { type: "principle", num: "02", title: "The \"One Real Person\" Profile", intro: "You do not need a 4-page persona document. You need a 1-page profile you would actually open before writing. It has five fields. Each field is based on real research, not guesses.", sectionTitle: "The 5 Fields of a Useful Persona", sections: [
      { heading: "1. One named person (or composite)", example: "\u201CMaya, Head of Content at a 50-person fintech.\u201D", note: "Specific. Real. You could recognise her if she walked into a room." },
      { heading: "2. The job she is trying to do", example: "\u201CCut CAC 30% before next board meeting without losing content volume.\u201D", note: "Measurable. Time-bound. Real." },
      { heading: "3. Three things standing in her way", example: "Budget, AI quality, team burnout.", note: "Each obstacle is a content angle." },
      { heading: "4. Three exact phrases she uses", example: "\u201CContent is the first line on the P&L.\u201D  \u201CAI slop.\u201D  \u201COne piece per week, done well.\u201D", note: "These are captured from interviews. They become your voice." },
      { heading: "5. One thing that would make her forward your content", example: "\u201CA named customer showing CAC cuts without volume cuts.\u201D", note: "Write toward this. Everything else is optional." },
    ], rule: "If your persona can't be summarised on one page \u2014 and if you can't imagine writing \u201Cfor Maya\u201D tomorrow \u2014 it's a document, not a tool." },
    { type: "exercise", title: "Draft Your Audience in 20 Minutes", intro: "Pick one person you have spoken to recently who is roughly your ideal customer. Answer each question below from memory. If you can\u2019t, that is the part to research next.", items: [
      { num: "1", copy: "Name them. What is their role, company size, industry?", answer: "Example: \u201CPriya, VP of Sales at a 40-person Series B SaaS, sells to mid-market.\u201D" },
      { num: "2", copy: "What specific job are they trying to do in the next 90 days?", answer: "Example: \u201CHit Q2 pipeline number after their top AE quit.\u201D" },
      { num: "3", copy: "What are the three things standing in their way?", answer: "Example: \u201CHiring freeze, dry inbound, and an under-trained SDR team.\u201D" },
      { num: "4", copy: "What three phrases did you actually hear them say?", answer: "Capture from memory. If none come to mind, book a 30-min call and ask them the 5 questions from slide 4." },
    ] },
  ],
};
