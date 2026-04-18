// Social Media Copywriting — Module 1: The Social Media Copy Mindset
export const socMindsetModule = {
  id: "soc01",
  title: "The Social Media Copy Mindset",
  type: "Rich Module",
  duration: "2.5 hours",
  desc: "How social copy differs from every other form of writing \u2014 speed, context, and scrolling behaviour.",
  topics: ["3-Second Rule", "Platform Psychology", "Content-to-Conversion Spectrum", "Buyer Personas for Social", "Real Post Teardowns"],
  quiz: [
    { q: "Your LinkedIn post hit 6,200 impressions but only 18 engagements. Based on the 3-second rule, the most likely root cause is:", opts: ["The post is too long \u2014 trim body by 40%", "The hook in the first 7\u201312 words isn\u2019t earning the stop \u2014 readers see it but keep scrolling", "Wrong posting time", "Not enough hashtags"], correct: 1 },
    { q: "You\u2019re a B2B SaaS brand selling compliance software. Which platform mindset should shape your primary content voice?", opts: ["TikTok \u2014 entertainment + discovery; lean into humour and trend-jacking", "LinkedIn \u2014 buyers are there in a credibility/learning mindset; lean into specific data, POV, and role-relevant insight", "Instagram \u2014 lifestyle framing works for any category", "Facebook Groups \u2014 all B2B buying happens in communities"], correct: 1 },
    { q: "You audit a brand calendar: 68% product/launch posts, 20% company culture, 8% education, 4% community. What's the single biggest problem?", opts: ["Not enough product posts \u2014 increase to 80%", "The mix is inverted \u2014 value + engagement should carry 60\u201370%; heavy promotion kills reach on most platforms", "They need more variety of hashtags", "They should post more often"], correct: 1 },
    { q: "Which of these posts is best classified as \"advocacy\" on the content spectrum?", opts: ["\"Here\u2019s our new product launch \u2014 20% off this week\"", "\"5 reasons to care about content strategy\"", "\"We repost Priya\u2019s case study \u2014 her team cut triage time 14\u21922 min using us\"", "\"Hot take: outbound is broken\""], correct: 2 },
    { q: "You\u2019re given two personas: (A) \"Marketing Mary, 34, enjoys yoga and dogs\" and (B) \"Head of CS at a 50\u2013200 seat SaaS, end of month, just lost her Head of Support.\" For writing actual social posts, which is more useful and why?", opts: ["A \u2014 personality traits drive copy decisions", "B \u2014 specific role + stage + timing pressure gives you something concrete to write toward", "Both are equally useful", "Neither \u2014 demographics are all that matters"], correct: 1 },
    { q: "A brand copy-pastes the same caption across LinkedIn, Instagram, and X. On which platform will this hurt performance LEAST, and why?", opts: ["X \u2014 because short copy works everywhere", "It hurts equally on all three \u2014 audiences, formats, and mindsets differ enough that native adaptation always wins", "LinkedIn \u2014 longer context tolerates generic copy", "Instagram \u2014 the visual carries the copy"], correct: 1 },
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
