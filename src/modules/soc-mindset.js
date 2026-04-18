// Social Media Copywriting — Module 1: The Social Media Copy Mindset
export const socMindsetModule = {
  id: "soc01",
  title: "The Social Media Copy Mindset",
  type: "Rich Module",
  duration: "2.5 hours",
  desc: "How social copy differs from every other form of writing \u2014 speed, context, and scrolling behaviour.",
  topics: ["3-Second Rule", "Platform Psychology", "Content-to-Conversion Spectrum", "Buyer Personas for Social", "Real Post Teardowns"],
  quiz: [
    { q: "The \u201C3-second rule\u201D in social media copy refers to:", opts: ["The maximum length of a post", "The window you have for a reader to stop scrolling vs keep going", "The time to reply to a comment", "The caption character limit"], correct: 1 },
    { q: "User intent on LinkedIn vs TikTok is best described as:", opts: ["Both are identical \u2014 just post the same thing", "LinkedIn: professional learning/credibility. TikTok: entertainment and discovery", "Both are purely sales platforms", "LinkedIn is casual; TikTok is professional"], correct: 1 },
    { q: "The content-to-conversion spectrum moves in this order:", opts: ["Conversion \u2192 Advocacy \u2192 Awareness \u2192 Engagement", "Awareness \u2192 Engagement \u2192 Conversion \u2192 Advocacy", "Engagement \u2192 Awareness \u2192 Advocacy \u2192 Conversion", "Awareness \u2192 Conversion \u2192 Engagement \u2192 Advocacy"], correct: 1 },
    { q: "Social media copy is fundamentally different from long-form writing because:", opts: ["Readers scroll by default \u2014 attention is earned line by line, not assumed", "You must write in slang", "You can\u2019t use full sentences", "You have to use emojis"], correct: 0 },
    { q: "A buyer persona for social should include:", opts: ["Demographics only", "Specific job-to-be-done, platform habits, and the language they actually use", "Their favourite meme", "Only their age and income"], correct: 1 },
    { q: "The biggest mistake new social copywriters make is:", opts: ["Posting too often", "Writing for \u201Ceveryone\u201D \u2014 generic posts that match no specific scroll moment on any specific platform", "Using too many hashtags", "Not using enough emojis"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "The Social Media", titleAccent: "Copy Mindset", subtitle: "How social copy differs from every other form of writing \u2014 and the first principles you need before you write a single post.", meta: "Social Media Copywriting  |  Module 1  |  8 Slides" },
    { type: "stats", eyebrow: "WHY THE MINDSET MATTERS", title: "Social readers are not readers. They're scrollers.", intro: "Your copy is competing with every other post, ad, DM, and notification on their screen. The default action is scroll. You earn attention one line at a time, or you don't.", stats: [
      { num: "3 sec", label: "the window before the average user decides to stop or scroll past your post" },
      { num: "8 sec", label: "the average attention span on social feeds (down from 12 in 2000)" },
      { num: "54%", label: "of posts get read past the first line. Everything below is fighting for the other 46%." },
    ], subheading: "What This Means For You", bullets: [
      "The first 7\u201312 words do 80% of the work. Treat them as the most important sentence in the entire post.",
      "You are writing for a specific platform at a specific scroll moment \u2014 not for a generic reader.",
      "Context matters more than cleverness. A great LinkedIn post makes a terrible TikTok, and vice versa.",
      "Everything you learned about long-form copy still applies \u2014 you just have 3 seconds to prove it before they swipe.",
    ] },
    { type: "grid", eyebrow: "HOW SOCIAL COPY DIFFERS", title: "Three things that make social different from every other writing", subtitle: "Miss any of these and your copy defaults to \u201Cblog post squeezed into a caption\u201D \u2014 which is the fastest way to get ignored.", items: [
      { num: "01", title: "Speed", desc: "Readers make a stop-or-scroll decision in under 3 seconds. Your opening line is the entire first impression.", icon: "\u26A1" },
      { num: "02", title: "Context", desc: "They\u2019re on the bus, between meetings, half-watching TV. Not reading \u2014 scrolling. Copy has to work in that context.", icon: "\u{1F441}\uFE0F" },
      { num: "03", title: "Intent", desc: "Unlike Google, no one arrived at your post looking for it. You have to earn the entire moment of attention.", icon: "\u{1F3AF}" },
    ], footer: "Social copy is a different discipline. Respect it, and your writing improves overnight." },
    { type: "principle", num: "01", title: "The 3-Second Rule \u2014 and Platform Psychology", intro: "Every post has roughly 3 seconds to justify itself. What changes across platforms is the mindset of the reader in that moment. Match the mindset, stop the scroll. Mismatch it, get ignored.", sectionTitle: "What Each Platform\u2019s Reader Is Actually Looking For", sections: [
      { heading: "LinkedIn", example: "Mindset: \u201CCan this make me look smarter, or help me do my job better?\u201D", note: "Reward: credibility, specificity, a strong opinion on a work-relevant topic." },
      { heading: "Instagram", example: "Mindset: \u201CShow me something beautiful, relatable, or aspirational.\u201D", note: "Reward: strong visuals + an opening line that frames them." },
      { heading: "X (Twitter)", example: "Mindset: \u201CTell me something sharp, funny, or surprising in one breath.\u201D", note: "Reward: single-sentence bangers, contrarian takes, useful threads." },
      { heading: "TikTok", example: "Mindset: \u201CEntertain me in the first second, or I\u2019m gone.\u201D", note: "Reward: pattern-interrupt hooks, story structure, native editing." },
      { heading: "Facebook", example: "Mindset: \u201CShow me my community and my people.\u201D", note: "Reward: group-native posts, emotional storytelling, local context." },
    ], rule: "Write for the exact platform the reader is on. Repurposing is not copy-pasting. Adapt, or get ignored." },
    { type: "comparison", eyebrow: "GENERIC vs NATIVE", title: "Same message, two versions", subtitle: "One was written for \u201Csocial media.\u201D The other was written for a specific platform moment. Guess which one performs.", left: { title: "Generic (Cross-Posted Everywhere)", color: "#EF4444", items: [
      { strong: "LinkedIn version: \u201CWe just launched a new feature \u{1F389}\u201D", note: "No opinion, no specifics, no reason to stop." },
      { strong: "Instagram version: \u201CWe just launched a new feature \u{1F389}\u201D", note: "Same copy. Same photo. Feels corporate and forgettable." },
      { strong: "X version: \u201CWe just launched a new feature \u{1F389}\u201D", note: "On X, this is indistinguishable from spam." },
    ] }, right: { title: "Native (Written for the Platform)", color: "#10B981", items: [
      { strong: "LinkedIn: \u201CMost PM teams I talk to spend 4.2 hrs/wk updating Jira. We built something that does it in 12 sec. Here\u2019s how.\u201D", note: "Specific pain, numeric hook, promise of practical value." },
      { strong: "Instagram: Visual-first post + caption \u201CThe tool 1,200 PMs switched to last quarter. Link in bio for the full teardown.\u201D", note: "Visual-led, social-proof hook, clear CTA." },
      { strong: "X: \u201CPMs update Jira the way I tried to update my website in 2013. We\u2019re finally fixing it.\u201D (thread below)", note: "Sharp, opinionated, story-shaped." },
    ] }, footer: "Same launch. Three native versions. Three platforms won. That is what adapting \u2014 not copy-pasting \u2014 looks like." },
    { type: "table", title: "The Content-to-Conversion Spectrum", subtitle: "Every post has a role. Most teams default to promotional content; the best teams balance the four.", columns: ["Stage", "Purpose", "Example Post Type", "Typical Mix"], rows: [
      ["Awareness", "Be seen. Introduce yourself.", "Hot take, industry POV, topical commentary", "30%"],
      ["Engagement", "Spark conversation, build community.", "Questions, polls, fill-in-the-blank, hot takes", "30%"],
      ["Conversion", "Drive a specific action \u2014 click, signup, buy.", "Product posts, testimonials, case studies", "20%"],
      ["Advocacy", "Get existing customers to talk about you.", "UGC reposts, customer spotlights, insider invites", "20%"],
    ], footer: "If your calendar is 80% conversion content, you\u2019re not posting \u2014 you\u2019re advertising. Fix the mix." },
    { type: "grid", eyebrow: "AUDIENCE-FIRST WRITING", title: "Three things your social persona must capture", subtitle: "Generic demographics are useless on social. These three details are what separate copy that resonates from copy that gets scrolled.", items: [
      { num: "01", title: "The scroll moment", desc: "When and where do they open the app? Monday 7am coffee? Wednesday 10pm after kids are asleep? Write for THAT moment.", icon: "\u{1F4F1}" },
      { num: "02", title: "The real job-to-be-done", desc: "What are they trying to figure out, fix, or feel in that scroll moment? Solve that in one post.", icon: "\u{1F9ED}" },
      { num: "03", title: "The exact phrases they use", desc: "Pulled from their comments, DMs, and conversations \u2014 not from your marketing deck. Mirror their words.", icon: "\u{1F4AC}" },
    ], footer: "If you can describe the scroll moment in one sentence, you already write better social copy than 90% of brands." },
    { type: "exercise", title: "Audit 10 Posts From Accounts You Follow", intro: "In the next 15 minutes, scroll your main feed. Save 10 posts that made you stop. For each, note:", items: [
      { num: "1", copy: "What stage was it on the spectrum? (Awareness / Engagement / Conversion / Advocacy)", answer: "Try to classify each. Notice which stages appear most \u2014 this tells you what\u2019s working in your industry right now." },
      { num: "2", copy: "What was the first 7\u201312 words of the hook? Write them down.", answer: "These are the scroll-stoppers. Your next 10 posts should aim to match or beat them." },
      { num: "3", copy: "How did it match the platform? (tone, format, visual language)", answer: "If you put this post on a different platform, would it feel out of place? If yes \u2014 that\u2019s native writing." },
      { num: "4", copy: "What was the one sentence you remember an hour later?", answer: "That\u2019s the line that did the work. Save it to a swipe file for reference in Module 2." },
    ] },
  ],
};
