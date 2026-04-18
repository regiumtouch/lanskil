// Content Strategy — Module 4: Topic Research & Ideation
export const csIdeationModule = {
  id: "csi01",
  title: "Topic Research & Ideation",
  type: "Rich Module",
  duration: "60 min",
  desc: "How to find topics worth making \u2014 from conversations, data, and your own unfair advantages \u2014 instead of copying what everyone else is publishing.",
  topics: ["Sources of Ideas", "The Conversation Method", "Trends vs Evergreen", "Topic Tools", "From Topic to Angle", "Idea Testing"],
  quiz: [
    { q: "You have access to: (A) 6 months of customer support tickets, (B) a paid SEMrush keyword report, (C) competitor blogs, (D) a $500 trend-report subscription. Which yields the highest-ROI topic research and why?", opts: ["B \u2014 keyword volume predicts everything", "A \u2014 support tickets are the real audience voice, already in text, completely unmined by competitors", "C \u2014 copy the leaders", "D \u2014 paid reports = insider information"], correct: 1 },
    { q: "Your team is brainstorming topics in a conference room with no customer data open. Predict the output:", opts: ["Excellent topics", "Topics that reflect what the team thinks the audience cares about \u2014 not what the audience actually cares about; the gap is why brainstormed topics underperform", "Better than research-driven topics", "Same as research-driven topics"], correct: 1 },
    { q: "Apply the sharpening move to \"content marketing.\" Which is the strongest result?", opts: ["\"Content marketing tips\"", "\"Content marketing for 10\u201350 person B2B SaaS teams \u2014 our POV: stop publishing weekly if you can\u2019t write monthly\"", "\"The complete guide to content marketing\"", "\"Content marketing 2026\""], correct: 1 },
    { q: "A 12-month calendar of only trend-chasing topics produces what outcome?", opts: ["Maximum long-term compounding", "Short-term spikes with zero durability \u2014 topics are stale in 90 days, SEO doesn't compound, audience doesn't know what you stand for", "Steady growth", "Category leadership"], correct: 1 },
    { q: "You have a new topic idea. The fastest/cheapest way to validate before investing writing time is:", opts: ["Write the full 2,000-word piece first and measure", "Post the core claim as a tweet, LinkedIn comment, or 1-line newsletter PS; see if it resonates", "Run 3 days of research", "Ask your boss"], correct: 1 },
    { q: "Rank these topics by expected engagement for a specific-role audience: (A) \"5 Tips for Better Marketing\" (B) \"How Priya cut triage from 14 to 2 min in 3 weeks\" (C) \"The 7 pricing mistakes fintech founders make in Year 2\"", opts: ["A > B > C", "B \u2248 C > A \u2014 named/role-specific/numbered content outperforms generic tips almost universally", "All equal", "A > C > B"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 4", title: "Topic Research", titleAccent: "& Ideation", subtitle: "The best topics come from real conversations and your own unfair advantages \u2014 not keyword tools or what your competitors are posting.", meta: "Content Strategy  |  Module 4  |  8 Slides" },
    { type: "stats", eyebrow: "WHY MOST TOPICS FAIL", title: "Most content dies at the topic stage", intro: "By the time a weak topic reaches a writer, the piece is already dead. The fix is not harder writing \u2014 it is better topic choice. Good topics have tension, an audience, and something only you can say.", stats: [
      { num: "73%", label: "of published content is indistinguishable from 10 pieces already on the same topic" },
      { num: "6\u00D7", label: "higher engagement on content from conversation-based topics vs. keyword-tool topics" },
      { num: "90%", label: "of viral pieces can trace their origin to a real customer quote, complaint, or question" },
    ], subheading: "What Great Topics Have In Common", bullets: [
      "A specific audience who recognises themselves in the first sentence.",
      "A tension or an unmet need the reader is already thinking about.",
      "A point of view only you can provide \u2014 data, experience, or opinion that is not available elsewhere.",
    ] },
    { type: "grid", eyebrow: "FOUR PLACES IDEAS COME FROM", title: "Where to look for topics worth making", subtitle: "Mix all four and you'll never run out of ideas \u2014 or run out of ideas your audience actually wants.", items: [
      { num: "01", title: "Conversations", desc: "Sales calls, support tickets, customer interviews. Every repeated question is a piece waiting to happen.", icon: "\u{1F5E3}\uFE0F" },
      { num: "02", title: "Your Data", desc: "Internal dashboards, product usage, email replies. Numbers only you have = angles only you can write.", icon: "\u{1F4CA}" },
      { num: "03", title: "Listening", desc: "Reddit threads, LinkedIn comments, G2 reviews, Twitter replies. Real language, searchable, free.", icon: "\u{1F442}" },
      { num: "04", title: "Your Own Experience", desc: "The thing you learned last quarter, the mistake you made, the bet that paid off. First-hand > anything Googleable.", icon: "\u{1F464}" },
    ], footer: "The worst source of topics is \u201Cwhat my competitor is publishing.\u201D You will always be late and always be second." },
    { type: "principle", num: "01", title: "The Conversation Method", intro: "The single highest-ROI topic research technique: listen to the recurring questions and complaints your customers voice, and turn each one into a piece. You already have this source. Most teams just don\u2019t mine it.", sectionTitle: "Where to Mine, and What to Listen For", sections: [
      { heading: "Sales calls (or their recordings)", example: "The top 5 objections reps hear = your top 5 pieces.", note: "Use Gong, Chorus, or even Zoom recordings. Patterns emerge after 10 calls." },
      { heading: "Support tickets and Slack threads", example: "Every \u201Chow do I...\u201D question is an article waiting to be written.", note: "If your product team keeps answering it privately, publish the answer once." },
      { heading: "Customer interviews", example: "The pain points that recur across 5 interviews are pieces worth making.", note: "Reference module 2's 5-question framework \u2014 each recurring phrase is a headline." },
      { heading: "Public forums and review sites", example: "What are people complaining about on Reddit, G2, or in LinkedIn comments?", note: "Mirror the exact phrasing \u2014 search engines will reward you for it." },
    ], rule: "Your best topic list for next quarter is hiding in conversations that already happened. Spend 2 hours listening before you spend 20 hours writing." },
    { type: "comparison", eyebrow: "TREND-CHASING vs EVERGREEN", title: "Two ways to pick topics for the next year", subtitle: "Both can work. Most programmes over-invest in one and ignore the other. The 80/20 split matters.", left: { title: "Trend-Chasing (Too Much = Dead)", color: "#EF4444", items: [
      { strong: "\"AI is changing everything\" \u2014 week 12 of the year", note: "By piece 12, you sound like every other feed." },
      { strong: "News reaction posts, 24 hours after a launch", note: "Fast-moving ground. Piece outdated in a month." },
      { strong: "Hot-take Threads threads \u2014 lots of likes, zero compounding", note: "Burns team energy, produces zero SEO traffic in 6 months." },
    ] }, right: { title: "Evergreen (The Compounding 80%)", color: "#10B981", items: [
      { strong: "\"How to hire your first Head of Content\"", note: "People have been asking this for 10 years and will for 10 more." },
      { strong: "\"The 5 pricing mistakes DTC founders make\"", note: "Evergreen pain, still searched in 2030, compounds over time." },
      { strong: "\"How we rebuilt our outbound in 90 days\"", note: "Your data + your POV = not replicable by anyone else." },
    ] }, footer: "Recommended mix: 80% evergreen, 20% topical. Evergreen compounds. Trends keep you relevant. Over-indexing on trends kills the long game." },
    { type: "table", title: "Topic Research Tools & When To Use Them", subtitle: "Free or cheap tools that get you 90% of the research signal you need.", columns: ["Tool", "Best For", "Free or Paid?", "When to Use"], rows: [
      ["Google \"People Also Ask\"", "Finding real questions audiences ask around a seed topic", "Free", "When brainstorming angles for a pillar"],
      ["AnswerThePublic", "Visualising all the question-shaped searches around a term", "Free tier", "Weekly topic ideation"],
      ["Reddit subreddits (niche)", "Raw language, real complaints, unmet needs", "Free", "Voice research + angle mining"],
      ["Exploding Topics / Google Trends", "Spotting rising vs. declining topics", "Free tier / Free", "Deciding whether a trend is worth chasing"],
      ["Your CRM / support system", "What prospects and customers actually ask", "Free (you already own it)", "Every topic research cycle"],
      ["Ahrefs / SEMRush / ProfoundAI", "Keyword volume + competitor gaps", "Paid", "Once you\u2019re optimising for search traffic specifically"],
    ], footer: "Rule: start with conversations, validate with search tools \u2014 not the other way around." },
    { type: "principle", num: "02", title: "From Topic to Angle \u2014 The Sharpening Move", intro: "A topic is a subject. An angle is a specific claim. Publishing the topic makes you generic; publishing the angle makes you memorable. The sharpening move takes 10 minutes and changes everything.", sectionTitle: "How to Turn a Topic into a Strong Angle", sections: [
      { heading: "Start with the topic", example: "Topic: \u201Coutbound sales\u201D", note: "Broad. Thousands of pieces already exist." },
      { heading: "Add the audience", example: "\u201COutbound sales for 10\u201350 person B2B teams\u201D", note: "Now you\u2019ve eliminated 80% of the noise." },
      { heading: "Add the constraint", example: "\u201COutbound sales for 10\u201350 person B2B teams without a BDR budget\u201D", note: "Specificity = magnetism for the right reader." },
      { heading: "Add your POV", example: "\u201C...and why your $240/mo outbound stack is the problem, not the solution\u201D", note: "Now it\u2019s a piece nobody else is writing." },
    ], rule: "Topic \u2192 Audience \u2192 Constraint \u2192 POV. Every great piece of content lives at the end of that arrow." },
    { type: "exercise", title: "10 Topics in 10 Minutes", intro: "Open a doc. Use the four sources from slide 3. Spend exactly 10 minutes listing 10 topic ideas, one per source where possible.", items: [
      { num: "1", copy: "Conversations: List 3 questions you\u2019ve heard a customer ask in the last month.", answer: "Each one is a topic. Draft the headline by adding your audience + POV." },
      { num: "2", copy: "Data: Name 2 surprising numbers you have access to that your competitor doesn\u2019t.", answer: "Example: \u201COur SDRs send 42 emails for every meeting booked \u2014 here\u2019s the 7 tweaks that got us there.\u201D" },
      { num: "3", copy: "Listening: Spend 5 minutes in one Reddit or LinkedIn thread relevant to your audience. List 3 real complaints or questions you see.", answer: "Copy the exact phrasing. Audiences reward recognition." },
      { num: "4", copy: "Experience: What did you learn, do, or change in the last quarter that\u2019s worth sharing?", answer: "Your own story beats any competitor research piece. Write it once \u2014 it will compound." },
    ] },
  ],
};
