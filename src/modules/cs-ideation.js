// Content Strategy — Module 4: Topic Research & Ideation
export const csIdeationModule = {
  id: "csi01",
  title: "Topic Research & Ideation",
  type: "Rich Module",
  duration: "60 min",
  desc: "How to find topics worth making \u2014 from conversations, data, and your own unfair advantages \u2014 instead of copying what everyone else is publishing.",
  topics: ["Sources of Ideas", "The Conversation Method", "Trends vs Evergreen", "Topic Tools", "From Topic to Angle", "Idea Testing"],
  quiz: [
    { q: "The best topics almost always come from:", opts: ["Keyword tools alone", "Conversations with real customers and prospects", "What your competitors are publishing", "What's trending on Twitter this week"], correct: 1 },
    { q: "The \"conversation method\" for topic research means:", opts: ["Posting polls on social", "Listening to sales calls, support tickets, and customer interviews for repeated questions", "Chatting with your team", "Reading industry reports"], correct: 1 },
    { q: "Evergreen content is:", opts: ["Written during spring", "Topics that remain valuable for months or years \u2014 not tied to a news cycle", "Boring and safe", "SEO-only content"], correct: 1 },
    { q: "A good way to turn a topic into a strong angle is:", opts: ["Add more keywords", "Apply your specific point of view and an audience constraint", "Make it longer", "Copy a competitor's headline"], correct: 1 },
    { q: "Before writing a piece, the fastest way to test an idea is:", opts: ["Spend 3 days researching", "Post it as a tweet, LinkedIn comment, or one-line newsletter \u2014 see what resonates", "Ask your team to vote", "Run a focus group"], correct: 1 },
    { q: "A weak topic often sounds like:", opts: ["\u201CHow Priya cut her triage time from 14 min to 2 min\u201D", "\u201CThe 7 biggest pricing mistakes fintech founders make in Year 2\u201D", "\u201C5 Tips for Better Marketing\u201D", "\u201CWhy AI-generated outbound stopped working in Q4\u201D"], correct: 2 },
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
