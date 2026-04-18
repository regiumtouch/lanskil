// Social Media Copywriting — Module 7: Content Calendar, Analytics & Optimization
export const socCalendarModule = {
  id: "soc07",
  title: "Content Calendar, Analytics & Optimization",
  type: "Rich Module",
  duration: "3 hours",
  desc: "Plan, measure, and improve your social copy systematically \u2014 the 40/30/20/10 content mix, metrics that actually matter, and weekly review rituals.",
  topics: ["30-Day Calendar", "Content Mix Formula", "Metrics That Matter", "A/B Testing", "Weekly Review", "AI as a Partner"],
  quiz: [
    { q: "Review this 10-post sample: 7 product/launch, 2 culture, 1 education, 0 engagement. Engagement is falling month-over-month. Using the 40/30/20/10 frame, what's the corrective?", opts: ["Post more often", "The mix is inverted \u2014 rebalance to ~4 value + 3 engagement + 2 promotion + 1 culture over the next 10 posts, prioritising value/engagement first", "Drop culture posts entirely", "Double promotion and add ads"], correct: 1 },
    { q: "You run 3 LinkedIn posts: (A) 2% save rate, 8% like rate; (B) 6% save rate, 2% like rate; (C) 1% save rate, 12% like rate. Which is the strongest signal of compounding value and why?", opts: ["A \u2014 balanced metrics", "B \u2014 high save rate means readers treat it as reference content; saves correlate with durable value and algorithmic boost more than likes", "C \u2014 high likes mean it resonated most", "All are equal"], correct: 1 },
    { q: "Your A/B test: same body copy, hook A vs hook B, 3 posts each over 2 weeks. Hook A averages 4.1% engagement; Hook B averages 4.3%. What\u2019s the honest conclusion?", opts: ["Hook B is the clear winner \u2014 scale it", "Sample is too small \u2014 0.2% gap across 6 posts is inside noise; keep testing or test a bolder variant", "Kill both hooks", "Run both forever without deciding"], correct: 1 },
    { q: "At your weekly review, a teammate says: \"We published 12 posts this week \u2014 up from 9.\" What's wrong with this framing?", opts: ["It\u2019s great news, nothing wrong", "Publishing volume is an input metric, not an outcome. The review should start with: which posts drove the primary outcome metric, and why?", "The number should be higher", "Publishing more always helps"], correct: 1 },
    { q: "You\u2019re using AI to help produce a week of LinkedIn content. Which workflow is healthiest?", opts: ["Let AI write the final posts and publish them directly", "Use AI to brainstorm hooks and outlines, then write the final body and voice yourself \u2014 AI as junior copywriter, not final voice", "Don\u2019t use AI at all", "Let AI write everything but change a few words"], correct: 1 },
    { q: "A monthly report to leadership shows: \"50K impressions, 200 likes, 12 posts, 3 comments.\" What\u2019s the biggest missing piece?", opts: ["More impressions data", "Connection to the primary business outcome \u2014 DMs, signups, pipeline, or revenue attributed to content", "More hashtag breakdowns", "Weekly charts"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 7", title: "Content Calendar,", titleAccent: "Analytics & Optimization", subtitle: "Plan, measure, and improve your social copy systematically. The 40/30/20/10 mix, the metrics that matter, and the weekly review ritual.", meta: "Social Media Copywriting  |  Module 7  |  8 Slides" },
    { type: "stats", eyebrow: "WHY A REAL SYSTEM WINS", title: "Consistency + measurement beats \u2018inspired\u2019 every time", intro: "The social copywriters who grow audiences and drive outcomes don\u2019t write from inspiration. They run a system: plan, publish, measure, adjust, repeat. Boring, effective, compounding.", stats: [
      { num: "3.1\u00D7", label: "more reach for programmes with a planned calendar + mix formula vs. ad-hoc posting" },
      { num: "67%", label: "of social posts are published without a single defined metric target" },
      { num: "15 min", label: "the typical weekly review time that separates top-performing creators from everyone else" },
    ], subheading: "What A Real System Delivers", bullets: [
      "A full content backlog before the week starts \u2014 no more 10pm scrambling.",
      "Clarity on what works and what doesn\u2019t \u2014 so you stop repeating invisible mistakes.",
      "The data to defend your time and budget when leadership or clients ask \u2018is this working?\u2019",
      "Calm, confident improvement over time \u2014 instead of panicked boost-and-hope.",
    ] },
    { type: "grid", eyebrow: "THE 30-DAY CALENDAR", title: "Four things every calendar must include", subtitle: "A calendar without these is just a spreadsheet. With them, it becomes a working production system.", items: [
      { num: "01", title: "Content pillars", desc: "3\u20135 themes your content will consistently own. Pillars give each post context \u2014 and the calendar rhythm.", icon: "\u{1F5FC}" },
      { num: "02", title: "Post-type mix", desc: "Hook-led, story, carousel, video, poll, UGC. Variety keeps the audience engaged and you from burning out.", icon: "\u{1F9E9}" },
      { num: "03", title: "Platform + format per post", desc: "One topic = 3\u20135 platform-native versions. The calendar pre-decides which versions will run where.", icon: "\u{1F310}" },
      { num: "04", title: "Target metric per post", desc: "Save rate, comment count, DM count, click-through. Pre-commit before publishing.", icon: "\u{1F3AF}" },
    ], footer: "Rule: every slot on your calendar must name the platform, the format, the pillar, and the target metric. No exceptions." },
    { type: "principle", num: "01", title: "The 40/30/20/10 Content Mix Formula", intro: "The most studied, simplest mix in social strategy. It balances education, community, conversion, and brand personality across the calendar. Apply it and your feed stops feeling like a sales catalogue.", sectionTitle: "The Four Buckets of a Healthy Feed", sections: [
      { heading: "40% \u2014 Value", example: "How-to, frameworks, tutorials, insights, breakdowns.", note: "This is what earns follows and saves. If this slips under 30%, audience growth stalls." },
      { heading: "30% \u2014 Engagement", example: "Questions, polls, opinion-baits, hot takes, community calls.", note: "This drives comments and relationships. Builds the reply habit." },
      { heading: "20% \u2014 Promotion", example: "Launches, offers, product posts, case studies, hard CTAs.", note: "Earn this with the 70% above. Never more \u2014 or engagement drops off a cliff." },
      { heading: "10% \u2014 Culture", example: "Behind-the-scenes, team, personal moments, brand personality.", note: "Humans buy from humans. This is the glue that makes the other 90% feel real." },
    ], rule: "Track your last 20 posts. If the mix is off by more than 10 points in any bucket, rebalance in the next 20." },
    { type: "comparison", eyebrow: "VANITY vs MEANINGFUL METRICS", title: "What to track \u2014 and what to ignore", subtitle: "Most social dashboards are dominated by numbers that feel good but predict nothing. Track the other side of this table.", left: { title: "Vanity Metrics (Feel Good, Predict Nothing)", color: "#EF4444", items: [
      { strong: "Total followers / impressions", note: "Grows with anything. Doesn\u2019t track quality or intent." },
      { strong: "Likes per post (in isolation)", note: "Easy but low-commitment. Don\u2019t confuse with real engagement." },
      { strong: "Posts published per week", note: "Output, not outcomes. AI can 10\u00D7 this \u2014 meaningless alone." },
      { strong: "Hashtag reach", note: "Often inflated, often misleading, rarely predictive." },
    ] }, right: { title: "Meaningful Metrics (Predict Outcomes)", color: "#10B981", items: [
      { strong: "Save rate (saves / reach)", note: "The strongest signal of \u2018useful content.\u2019 Top algorithmic driver." },
      { strong: "Share rate (shares / reach)", note: "Predicts social currency \u2014 the reason people amplify you." },
      { strong: "DM volume + quality", note: "Where real business happens. Count inbound DMs per week." },
      { strong: "Newsletter / list signups from social", note: "Your only owned-audience output. Every social strategy should drive this." },
    ] }, footer: "Rule: track 2\u20134 meaningful metrics obsessively. Ignore vanity metrics unless they\u2019re already moving upward." },
    { type: "table", title: "A/B Testing on Social \u2014 What To Test and Why", subtitle: "You don\u2019t need fancy tools. You need discipline \u2014 change one thing at a time and give each variant enough data.", columns: ["What to Test", "How to Test It", "Why It Matters"], rows: [
      ["Hook (first 7\u201312 words)", "Write 2\u20133 variants of the same post body, different hooks. Post across same/similar timeslots over 2 weeks.", "Highest-leverage variable. Hook = 80% of engagement outcomes."],
      ["Post length", "Short (under 200 chars) vs medium (500) vs long (1,500). Same topic, 3 weeks.", "Platform algorithms shift \u2014 knowing your audience\u2019s ideal length matters."],
      ["CTA type", "Soft (comment) vs medium (follow) vs hard (click). Same content, 3 posts.", "Matches CTA to audience stage \u2014 critical for conversion."],
      ["Format (text vs carousel vs video)", "Take one core idea, publish as text post, carousel, and short video across a month.", "Lets you see which format your audience prefers \u2014 not assumption, data."],
      ["Posting time", "Morning vs afternoon vs evening. Same post type, 6 posts each slot.", "Your audience\u2019s peak attention slots are rarely what you assume."],
    ], footer: "Rule: one test at a time, minimum 6 data points per variant. Anything else is folklore, not data." },
    { type: "principle", num: "02", title: "AI as a Brainstorming Partner \u2014 Not a Replacement", intro: "AI is the best social copy tool available \u2014 if used to assist thought, not replace it. Used lazily, it produces generic, flat, scroll-past copy. Used well, it 5\u00D7s a skilled copywriter\u2019s output without diluting the voice.", sectionTitle: "Four Smart Ways To Use AI In Your Workflow", sections: [
      { heading: "1. Brainstorming hooks", example: "Give AI your topic and your 3 best past hooks. Ask for 10 more in the same voice.", note: "Use AI\u2019s output as stimulus, not final copy. Rewrite every line in your voice." },
      { heading: "2. Rewriting + tightening", example: "\u201CHere\u2019s my 300-word draft. Cut to 180 words without losing the hook or CTA.\u201D", note: "AI is excellent at compression. Use it for editing, not origination." },
      { heading: "3. Platform adaptation", example: "\u201CHere\u2019s my LinkedIn post. Rewrite as an X thread and as an Instagram caption.\u201D", note: "Saves 80% of the adaptation time. Always hand-edit the final versions." },
      { heading: "4. Thread / script outlines", example: "\u201COutline an 8-tweet thread on this topic: [topic]. Include hook, 6 beats, and CTA.\u201D", note: "Fast way to see structure. Write the actual beats yourself \u2014 don\u2019t accept AI\u2019s first draft." },
    ], rule: "Treat AI like a sharp junior copywriter: great for first drafts, generic without direction, and never trusted with the final voice or angle." },
    { type: "exercise", title: "Build a Complete 2-Week Content Calendar", intro: "Build a 14-day content calendar for a real or fictional brand. Your deliverable: 14 posts across at least 3 platforms, with every required field filled in per post.", items: [
      { num: "1", copy: "Pick the brand and 3 content pillars. Write them at the top of the doc.", answer: "Example: FreshRoast. Pillars: 1) Remote work + coffee routine 2) Specialty coffee education 3) Customer stories." },
      { num: "2", copy: "For each of the 14 posts, fill in: Platform / Pillar / Format / Hook / Full copy / CTA / Target metric.", answer: "Not just the topic \u2014 the full copy. A calendar without full copy is a wish list, not a plan." },
      { num: "3", copy: "Ensure your 14 posts hit the 40/30/20/10 mix. Count each bucket. Adjust if off.", answer: "Value: 5 or 6 posts. Engagement: 4 posts. Promotion: 3 posts. Culture: 1\u20132 posts. Adjust to hit these ratios." },
      { num: "4", copy: "Schedule a 15-minute review at the end of Day 14. What will you measure? What will trigger a change in week 3?", answer: "Example: \u201CReview save rate and DM count. If save rate is under 3%, test more framework/checklist posts in week 3.\u201D" },
    ] },
  ],
};
