// Content Strategy — Module 7: Distribution & Promotion
export const csDistributionModule = {
  id: "csd01",
  title: "Distribution & Promotion",
  type: "Rich Module",
  duration: "60 min",
  desc: "Great content without distribution is a silent speech. Learn how to get every piece in front of the right people \u2014 and squeeze 5\u201310\u00D7 the reach out of every piece you already make.",
  topics: ["Why Distribution > Production", "Owned / Earned / Paid", "The 40/40/20 Rule", "Promotion Tactics", "Repurposing", "Cross-Channel Strategy"],
  quiz: [
    { q: "Team A spends 80% of hours on creation, 20% on distribution. Team B runs 40/40/20 (create/distribute/iterate) with identical content quality. Predict the 90-day reach gap:", opts: ["A reaches more because they produce more pieces", "B typically sees 3\u20135x reach on fewer pieces \u2014 distribution is a multiplier on creation, and every hour reallocated from making to distributing compounds across every piece in the backlog, not just the new one", "No meaningful gap", "A is more efficient per hour"], correct: 1 },
    { q: "You publish a long-form piece, share the link once on LinkedIn and X on day 1, move on. Day 14: 180 views. Root-cause diagnosis:", opts: ["The piece wasn't interesting enough", "Distribution was treated as an event, not a 30-day process; the same piece with 5 angle-pulls, an email, a short video, and 3 community shares would typically hit 5\u201310x that reach", "Wrong publish day", "Piece was too long"], correct: 1 },
    { q: "Rank these audiences by platform risk (highest risk = most to lose if the platform changes algorithm or rules): 12K email subscribers, 40K LinkedIn followers, 80K TikTok followers, 3K monthly blog visitors.", opts: ["Email > Blog > LinkedIn > TikTok", "TikTok > LinkedIn > Email \u2248 Blog \u2014 third-party platforms can deprioritise you or change reach rules overnight; owned channels (email list, blog, RSS) are the only durable audience", "Blog > Email > TikTok > LinkedIn", "All equivalent"], correct: 1 },
    { q: "\"Repurposing\" as practiced by top teams means:", opts: ["Copy-pasting the same link to 5 platforms with the same caption", "Taking one core idea and producing 5 platform-native adaptations \u2014 different hook, length, format, and voice for each surface, because what wins on LinkedIn loses on TikTok and vice versa", "Republishing archived content verbatim annually", "Auto-generating variations with AI"], correct: 1 },
    { q: "Which 30-day sequence produces the most compounding reach on a single flagship piece?", opts: ["Day 1 link-share everywhere, then move on", "Day 1 publish + email + native versions per channel / Days 2\u20137 three angle-pulls as separate posts / Days 8\u201330 newsletter reference, podcast mention, community shares, repost with new intro", "Daily reshares of the same link", "Wait 90 days and repost"], correct: 1 },
    { q: "A creator has 40K LinkedIn followers but only 600 email subscribers. Biggest strategic weakness?", opts: ["Needs more followers across more platforms", "The owned audience is massively under-invested relative to the rented audience \u2014 a single algorithm change or account suspension could wipe the 40K overnight; email list is the insurance policy for every other channel", "Nothing is wrong", "Needs to post more often"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 7", title: "Distribution", titleAccent: "& Promotion", subtitle: "The hardest lesson in content: making it is the easy part. Getting the right people to see it is the actual job.", meta: "Content Strategy  |  Module 7  |  8 Slides" },
    { type: "stats", eyebrow: "WHY DISTRIBUTION WINS", title: "A good piece badly distributed loses to a decent piece well distributed", intro: "Most content teams spend 80% of their time on production and 20% on distribution. The teams that win flip it. Same content \u2014 10\u00D7 the impact.", stats: [
      { num: "94%", label: "of published content gets fewer than 100 views in its first week" },
      { num: "5\u201310\u00D7", label: "the reach uplift from simply repurposing each piece into 5 channel-native formats" },
      { num: "3:1", label: "the distribution-to-production time ratio used by top-performing content teams" },
    ], subheading: "What Distribution Is (and Isn't)", bullets: [
      "Distribution is NOT \u201Cposting a link on social once.\u201D That is a press release, not a strategy.",
      "Distribution IS getting the core idea in front of the same audience 5\u201310 different ways, across 30 days.",
      "Distribution plans are made BEFORE the piece ships \u2014 not as an afterthought the next morning.",
      "Distribution lets you publish less content and still grow faster than teams publishing 3\u00D7 more.",
    ] },
    { type: "grid", eyebrow: "THREE DISTRIBUTION APPROACHES", title: "Owned, earned, paid \u2014 and how to use each", subtitle: "Most great distribution strategies blend all three. Over-indexing on any one is the classic mistake.", items: [
      { num: "01", title: "Owned", desc: "Your email list, blog, podcast, YouTube channel, app, community. You control it. Platform risk = zero.", icon: "\u{1F3E0}" },
      { num: "02", title: "Earned", desc: "Shares, mentions, citations, PR, guest appearances, word-of-mouth. Costs nothing but takes time to earn.", icon: "\u{1F3C6}" },
      { num: "03", title: "Paid", desc: "Ads, sponsorships, paid newsletter placements, boosted social. Fastest scale, highest cost, ends when you stop paying.", icon: "\u{1F4B3}" },
    ], footer: "Rule: build owned first (nobody can take it), earn second (compounds reputation), pay third (accelerates what already works)." },
    { type: "principle", num: "01", title: "The 40/40/20 Rule \u2014 The Time Split That Actually Works", intro: "Most teams split 80/20 (making/sharing). Top teams split 40/40/20. The shift is painful at first \u2014 you feel like you\u2019re producing less. You are. But your reach will 3\u00D7 within a quarter.", sectionTitle: "Where to Spend Your Content Hours", sections: [
      { heading: "40% \u2014 Creating", example: "Research, drafting, editing, producing.", note: "The core piece \u2014 blog, video, podcast, newsletter. Do this well, do it once." },
      { heading: "40% \u2014 Distributing", example: "Repurposing, cross-posting, email, social, outreach, DMing relevant people.", note: "This is where most teams underspend. Multiply your reach by doing this well." },
      { heading: "20% \u2014 Iterating", example: "Tracking performance, analysing what worked, refining briefs, killing what failed.", note: "Without this, you repeat mistakes. With it, every quarter gets better." },
    ], rule: "If your team spends 80% of hours creating, you are leaving 3\u20135\u00D7 of reach on the table. Rebalance." },
    { type: "comparison", eyebrow: "ONE-AND-DONE vs EXTENDED", title: "Two ways to distribute the same piece", subtitle: "Most teams distribute like this on the left. The teams with growing audiences distribute like the right. Same piece \u2014 10\u00D7 the reach.", left: { title: "One-and-Done (Most Teams)", color: "#EF4444", items: [
      { strong: "Tuesday: publish blog post. Share link on Twitter and LinkedIn.", note: "Day 1 = 100% of distribution effort." },
      { strong: "Wednesday onwards: nothing.", note: "The piece dies. Reach peaks at 200 views." },
      { strong: "Next week: publish the next piece. Repeat.", note: "Treadmill. Production burnout with flat growth." },
    ] }, right: { title: "Extended 30-Day Distribution (Top Teams)", color: "#10B981", items: [
      { strong: "Day 1: publish blog, send to email list, share on 3 social channels in native format.", note: "Piece hits multiple audiences in parallel." },
      { strong: "Days 2\u20137: 3 LinkedIn posts pulling separate angles from the piece, 1 short video, 5 reply-worthy comments on relevant threads.", note: "Same idea, 5 different entry points." },
      { strong: "Days 8\u201330: newsletter reference, podcast mention, repost on community, repurpose one stat into a graphic, DM to 10 aligned people.", note: "Long tail = multiplied reach." },
      { strong: "Day 30: analyse what worked. Update the original piece. Repurpose top snippet as a viral-style hook.", note: "One piece = a month of content ammunition." },
    ] }, footer: "Both teams made the same piece. One got 200 views; one got 6,000 \u2014 from the same content. Distribution is the multiplier." },
    { type: "table", title: "Promotion Tactics By Channel", subtitle: "Each channel has a native format. Copy-pasting a blog link to every channel is the fastest way to get ignored.", columns: ["Channel", "Native Format", "Time Investment", "Best For"], rows: [
      ["Email newsletter", "Personal-voiced summary + 1 link + reply prompt", "30 min per piece", "Loyal audience; reliable clicks"],
      ["LinkedIn", "3\u20135 post variations pulling different angles, each 150\u2013300 words", "45 min per piece", "B2B audiences; professional credibility"],
      ["Twitter/X", "Thread or single bold-claim post with hook + example", "20 min per piece", "Rapid feedback; viral potential"],
      ["YouTube Shorts / Reels / TikTok", "1-minute video pulling the single best insight", "60\u201390 min per piece", "Visual audiences; discoverability"],
      ["Podcast mention", "Reference the piece as a resource in your next episode", "0 min (if you already have a podcast)", "Depth and trust with listeners"],
      ["Direct outreach / DMs", "Send to 5\u201310 specific people who would value this", "30 min per piece", "Building 1:1 relationships + signal boosts"],
    ], footer: "Rule: the same idea, 5 native formats > the same link, 5 copy-pastes. Adapt, don\u2019t duplicate." },
    { type: "principle", num: "02", title: "Repurposing \u2014 One Piece, Ten Assets", intro: "The most underrated productivity move in content. Every substantial piece you make contains 5\u201310 smaller pieces waiting to be pulled out. Ship the big one once, then mine it for 30 days.", sectionTitle: "The Standard Repurposing Stack", sections: [
      { heading: "One long-form piece (blog, video, podcast)", example: "2,000-word blog post \u2192 your anchor asset.", note: "All other content refers back to and cites this piece." },
      { heading: "One email summary", example: "5-min newsletter version with a personal angle + 1 CTA.", note: "Your email list won\u2019t hunt for the post. Bring it to them." },
      { heading: "Three\u2013five social posts", example: "1 main post, 2\u20133 variations pulling different angles, 1 visual graphic.", note: "Each angle hits a slightly different reader. Cross-channel amplification." },
      { heading: "One short video", example: "60-second talking-head or screen-recording pulling the single best insight.", note: "Different audiences. Same idea. Compounds reach." },
      { heading: "One community share", example: "Reddit thread, Discord, Slack community \u2014 formatted native to the space.", note: "High-trust environments. One great post = 50 quality reads." },
    ], rule: "You are not publishing \u201Ca blog post.\u201D You are publishing an anchor that generates 10 pieces of distribution over 30 days." },
    { type: "exercise", title: "Build a 30-Day Distribution Plan", intro: "Pick one substantial piece of content you published recently. Build its 30-day distribution plan right now, in 20 minutes.", items: [
      { num: "1", copy: "Write down 3 distinct angles from the piece. Not the whole piece \u2014 one sharp insight each.", answer: "Example: key stat, customer quote, counterintuitive lesson. Each becomes its own post." },
      { num: "2", copy: "Map each angle to 2 native formats across your channels.", answer: "Angle 1 \u2192 LinkedIn thread + 60-sec video. Angle 2 \u2192 Twitter post + newsletter P.S. Angle 3 \u2192 reply-guy move in 5 relevant comment threads." },
      { num: "3", copy: "Schedule 3 reshares of the main piece over the 30 days \u2014 different intro angle each time.", answer: "Day 1, Day 10, Day 21. 90% of your audience missed it the first time." },
      { num: "4", copy: "Identify 5 specific humans to DM the piece to personally, with a reason they specifically would value it.", answer: "Direct outreach beats broadcast every time. This is how content spreads beyond your existing audience." },
    ] },
  ],
};
