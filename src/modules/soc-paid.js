// Social Media Copywriting — Module 6: Paid Social Copy & Ad Writing
export const socPaidModule = {
  id: "soc06",
  title: "Paid Social Copy & Ad Writing",
  type: "Rich Module",
  duration: "3.5 hours",
  desc: "Paid copy plays by different rules. Learn the 3 ad-copy frameworks, platform-specific ad structures, and a clean testing protocol that doesn\u2019t waste budget.",
  topics: ["Organic vs Paid", "3 Ad Frameworks", "Meta Ad Structure", "LinkedIn Ads", "TikTok Spark/UGC", "Testing Protocol"],
  quiz: [
    { q: "The biggest difference between organic and paid social copy is:", opts: ["Paid is always shorter", "Paid has zero built-in context \u2014 the reader didn\u2019t follow you, so the copy has to earn the moment fully on its own", "Paid is always longer", "There is no real difference"], correct: 1 },
    { q: "The three classic ad copy frameworks are:", opts: ["Short, medium, and long", "Problem-Solution, Testimonial-Led, Benefit-Stack", "Funny, serious, professional", "Story, fact, question"], correct: 1 },
    { q: "In a Meta (Facebook/Instagram) ad, the primary text is:", opts: ["The button label", "The main body copy above the image \u2014 the reader sees this first", "The URL", "The hashtags"], correct: 1 },
    { q: "LinkedIn Sponsored Content copy should differ from Meta ads by:", opts: ["Being shorter and funnier", "Being more professional, specific to the role/industry, and using B2B language and numbers", "Using more emojis", "Avoiding any data"], correct: 1 },
    { q: "A TikTok Spark Ad tends to perform best when:", opts: ["It looks exactly like a polished commercial", "It feels native \u2014 UGC-style, first-person, unpolished but structured around a clear hook and payoff", "It\u2019s 2 minutes long", "It opens with the brand logo"], correct: 1 },
    { q: "Given a set of ad variant performance data, the first move is usually to:", opts: ["Pause all variants and start fresh", "Scale the variants with clearly better CPA/ROAS and kill the clear underperformers \u2014 keep the middle for now to test further", "Increase budget on all variants equally", "Rewrite everything"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 6", title: "Paid Social Copy", titleAccent: "& Ad Writing", subtitle: "Different game, different rules. Learn how to write ads that convert \u2014 Meta, LinkedIn, TikTok \u2014 and a testing protocol that doesn\u2019t burn budget.", meta: "Social Media Copywriting  |  Module 6  |  8 Slides" },
    { type: "stats", eyebrow: "WHY PAID COPY IS DIFFERENT", title: "Paid readers are cold. Your copy has to do all the work.", intro: "Organic social builds on context: the reader follows you, the algorithm favours warm audiences. Paid is the opposite. The reader didn\u2019t ask for you \u2014 your copy has to earn the click from zero.", stats: [
      { num: "0 sec", label: "the amount of prior relationship the cold paid reader has with you" },
      { num: "2.4\u00D7", label: "higher ROAS on ads with testimonial-led copy vs. feature-led copy (B2B 2025 benchmark)" },
      { num: "5:1", label: "the variant-to-winner ratio \u2014 for every ad that scales, 4 others typically underperform" },
    ], subheading: "What Paid Copy Has To Do That Organic Doesn\u2019t", bullets: [
      "Establish context in the first 5 words \u2014 who it\u2019s for, what the promise is, why they should care.",
      "Beat the reader\u2019s reflexive \u2018this is an ad\u2019 filter with specificity, proof, or genuine usefulness.",
      "Work without the credibility of your feed \u2014 the reader never saw your 20 great posts. This one ad has to do the work.",
      "Survive algorithmic testing \u2014 the winning variants are often the ones you least expect. Humility + data > gut.",
    ] },
    { type: "grid", eyebrow: "THE THREE AD FRAMEWORKS", title: "Three copy structures behind most winning ads", subtitle: "Every great social ad uses one of these (or a blend). Memorise them and you have 80% of ad copy solved.", items: [
      { num: "01", title: "Problem-Solution (PAS)", desc: "Name the pain. Agitate with specifics. Offer the solution. Classic B2B structure.", icon: "\u{1F6E0}\uFE0F" },
      { num: "02", title: "Testimonial-Led", desc: "Open with a real customer\u2019s words + outcome. Social proof first, product second.", icon: "\u{1F4AC}" },
      { num: "03", title: "Benefit-Stack", desc: "Lead with the biggest benefit. Stack 3\u20135 specific promises. Close with the offer.", icon: "\u{1F4E6}" },
    ], footer: "Write 1 ad in each framework for any campaign. Let the platform test them. The winner is rarely the one you'd bet on." },
    { type: "principle", num: "01", title: "The Meta (Facebook / Instagram) Ad Structure", intro: "A Meta ad has four text fields: primary text, headline, description, and CTA button. Each has a specific job. Treating them as \u2018write whatever\u2019 is the most common reason ads underperform.", sectionTitle: "The 4 Text Fields \u2014 And Their Jobs", sections: [
      { heading: "Primary text (the body above the creative)", example: "3\u20134 lines. Hook + pain/promise + specific detail + soft CTA.", note: "This is where 80% of the persuasion happens. Get this right." },
      { heading: "Headline (below the image, bold)", example: "5\u20137 words. Restate the core promise with maximum punch.", note: "Backup persuasion for readers who only skim the creative." },
      { heading: "Description (small text under headline)", example: "Optional \u2014 often used for a risk-reversal or urgency line.", note: "Mobile often hides this. Don\u2019t put critical info here." },
      { heading: "CTA button", example: "Match the actual landing page action: \u2018Sign Up\u2019, \u2018Learn More\u2019, \u2018Shop Now\u2019.", note: "Friction-minimised, honest. Don\u2019t say \u2018Learn More\u2019 if they\u2019re going to a checkout." },
    ], rule: "Every ad should be readable + persuasive using primary text + headline alone. Description and button are backup, not primary." },
    { type: "comparison", eyebrow: "B2B vs B2C PAID COPY", title: "LinkedIn ads vs. Meta ads \u2014 they sound completely different", subtitle: "Same company, same audience doesn\u2019t exist \u2014 but the copy voice should. Study the differences.", left: { title: "LinkedIn Sponsored Content (B2B)", color: "#EF4444", items: [
      { strong: "Opens with a specific role or company-stage pain", note: "\u201CMost PE-backed CFOs we talk to are stuck in Excel.\u201D" },
      { strong: "Uses specific numbers and named outcomes", note: "\u201C1,847 finance teams use us. Median close time: 3 days.\u201D" },
      { strong: "Professional, no emojis, confident tone", note: "LinkedIn audiences punish informality in paid content." },
      { strong: "CTA tends toward long-form: case study, demo, report", note: "B2B buyers need depth before they click \u2018Buy Now\u2019." },
    ] }, right: { title: "Meta Ads (Consumer / DTC)", color: "#10B981", items: [
      { strong: "Opens with an emotional or visual hook", note: "\u201CThe coffee subscription 12,000 remote workers swapped for.\u201D" },
      { strong: "Uses lifestyle framing, outcomes, and story", note: "\u201CFreshRoast lands on your doorstep every Tuesday. Yours, customised.\u201D" },
      { strong: "Casual tone, 1\u20132 emojis okay, warm voice", note: "Consumers respond to friendly brand voices on Meta." },
      { strong: "CTA often direct: \u2018Shop Now\u2019, \u2018Claim Offer\u2019, \u2018Try Free\u2019", note: "Lower consideration cycles = harder CTAs work faster." },
    ] }, footer: "Never run the same ad creative on LinkedIn and Meta. You\u2019ll underperform on both. Rewrite for each." },
    { type: "table", title: "TikTok Spark Ads and UGC Scripts", subtitle: "TikTok is not a Meta ad with music. Scripts for Spark Ads / UGC-style need their own structure. This is it.", columns: ["Script Section", "Duration", "Copy Goal"], rows: [
      ["Hook (visual + spoken)", "0\u20132 sec", "Pattern interrupt. \u201CWait \u2014\u201d / \u201CI was today years old when\u2026\u201D / Strong contrast."],
      ["Problem / context", "2\u201310 sec", "Name the pain or curiosity. Specific, short, relatable."],
      ["Solution / reveal", "10\u201330 sec", "Introduce the product naturally \u2014 not as a hard sell. Show it solving the pain."],
      ["Proof", "30\u201345 sec", "Specific outcome, quick demo, before/after shot."],
      ["CTA", "45\u201360 sec", "\u201CLink in bio\u201D + single-word action word. \u201CTry it.\u201D \u201CSwipe.\u201D \u201CGet yours.\u201D"],
    ], footer: "Rule: every second must earn its place. If the viewer isn\u2019t thinking \u2018huh\u2019 in the first 2 seconds, your ad is dying." },
    { type: "principle", num: "02", title: "The Ad Testing Protocol", intro: "Great ad copy is a feedback loop, not a writing exercise. You write variants, you watch data, you iterate. The teams that win spend less time debating copy and more time launching, learning, and scaling.", sectionTitle: "The 5-Step Test Protocol", sections: [
      { heading: "1. Launch 5 variants minimum per campaign", example: "Different framework (PAS, Testimonial, Benefit-Stack) \u00D7 different hooks \u00D7 different creatives.", note: "Less than 5 variants = you\u2019re guessing, not testing." },
      { heading: "2. Give each variant 48\u201372 hours and meaningful spend", example: "At least $50\u2013100 per variant before you judge anything.", note: "Pulling early wastes your data. The algorithm needs time to learn." },
      { heading: "3. Read CTR first, then CPA / ROAS", example: "CTR tells you if the hook works. CPA tells you if the full funnel works.", note: "A high CTR but bad CPA = the hook overpromises relative to the landing page." },
      { heading: "4. Scale the clear winners, kill the clear losers, test the middle", example: "Top 20% get more budget. Bottom 20% get killed. Middle 60% gets another week.", note: "Don\u2019t add budget too fast \u2014 doubling budget often halves performance short-term." },
      { heading: "5. Study the winner and make 3 new variants of it", example: "Same framework, new hook angles. Keep pressing the winning vein.", note: "Testing is never done. The winner today becomes the control tomorrow." },
    ], rule: "The best ad copywriters are not the best writers \u2014 they\u2019re the fastest testers. Launch, learn, scale, repeat." },
    { type: "exercise", title: "Write a Complete Ad Campaign", intro: "For a fictional product of your choice, write a full ad campaign: 3 primary text variants (one per framework), 2 headline variants, and 1 TikTok Spark Ad script. Include a testing plan.", items: [
      { num: "1", copy: "Define the product in 1 sentence: what is it, who is it for, and what is the offer?", answer: "Example: \u201CFreshRoast \u2014 specialty coffee subscription for remote workers. First box free.\u201D" },
      { num: "2", copy: "Write primary text variant #1 using Problem-Solution framework.", answer: "Example: \u201CThe WFH coffee setup has officially peaked. FreshRoast lands fresh roasts at your door every Tuesday \u2014 no grocery run, no bad batches.\u201D" },
      { num: "3", copy: "Write variants #2 (Testimonial-Led) and #3 (Benefit-Stack). Add 2 headline variations.", answer: "Variant 2: \u201CI\u2019ve been a FreshRoast subscriber for 8 months. I will never go back to grocery-store coffee.\u201D Variant 3: \u201CFresh beans. Custom roast. Doorstep delivery. First box free.\u201D" },
      { num: "4", copy: "Write a 45-second TikTok script with hook, problem, solution, proof, CTA. Add your testing plan \u2014 which elements you\u2019d A/B first.", answer: "Hook: \u201CI just realised my $28 bag of coffee is actually bad.\u201D Test hypothesis: hook + primary text combinations. First test: all 3 frameworks on same creative, 72 hours, $80 each." },
    ] },
  ],
};
