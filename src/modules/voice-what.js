// Brand Voice & Positioning — Module 1: What Brand Voice Actually Is
export const voiceWhatModule = {
  id: "voice01",
  title: "What Brand Voice Actually Is",
  type: "Rich Module",
  duration: "90 min",
  desc: "Voice is not adjectives on a style guide. It's the sum of specific choices that make the brand recognisable in a blind taste test. Diagnose it properly before you try to build one.",
  topics: ["Voice vs Tone", "The Blind-Test Definition", "Voice Sources", "POV as Voice", "Vocabulary Signatures", "Why Most Voice Guides Fail"],
  quiz: [
    { q: "Most brand voice guides fail because they:", opts: ["Are too short", "Describe voice with adjectives (\"warm, helpful, smart\") rather than specific choices (sentence length, vocabulary, POV, refusals) \u2014 adjectives don\u2019t tell writers what to do", "Use too many colors", "Are too long"], correct: 1 },
    { q: "A brand voice that survives the \u201Cblind test\u201D is one where:", opts: ["It wins awards", "You can remove the brand name and readers familiar with the category can still identify the brand from the copy alone \u2014 voice is a fingerprint, not a style", "It\u2019s popular", "It uses correct grammar"], correct: 1 },
    { q: "Voice vs tone is best described as:", opts: ["Same thing", "Voice is the constant \u2014 what makes the brand recognisable across any piece. Tone is the variable \u2014 what shifts between a funeral post and a launch post within the same voice.", "Voice is spoken; tone is written", "Tone is optional"], correct: 1 },
    { q: "The strongest source of authentic brand voice is:", opts: ["Competitor research", "The founder/CEO\u2019s actual speech patterns + the company\u2019s genuine beliefs about the market \u2014 voice has to have a point of origin in a real human perspective", "AI generation", "Focus groups"], correct: 1 },
    { q: "A voice with no point of view is:", opts: ["Professional and safe", "Indistinguishable from competitors \u2014 voice requires taking positions and making enemies; neutral voice has no voice", "Best for B2B", "Required for enterprise"], correct: 1 },
    { q: "The \u201Cvocabulary signature\u201D of a brand voice is:", opts: ["Random", "The specific words the brand uses repeatedly + the specific words the brand refuses to use \u2014 both ends of the list matter equally", "All capital letters", "Grammar rules"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "What Brand Voice", titleAccent: "Actually Is", subtitle: "Voice is not adjectives on a style guide. It\u2019s the sum of specific choices that make a brand recognisable in a blind taste test.", meta: "Brand Voice & Positioning  |  Module 1  |  7 Slides" },
    { type: "stats", eyebrow: "WHY MOST VOICE WORK FAILS", title: "Most brand voice guides produce no voice at all", intro: "Companies spend $30K\u2013$150K on brand voice guides and end up with 40 pages of adjectives nobody uses. The problem isn\u2019t effort \u2014 it\u2019s the category-error of thinking voice is a vocabulary of feelings.", stats: [
      { num: "68%", label: "of marketing teams report their brand voice guide doesn\u2019t meaningfully influence day-to-day copy decisions" },
      { num: "3 words", label: "the average \"distinctive\" adjective count on most voice guides \u2014 before all three get used by competitors too" },
      { num: "1 in 12", label: "brands whose copy is identifiable in a blind-test against 3 category competitors" },
    ], subheading: "Voice Guide Failure Symptoms", bullets: [
      "Guide describes voice with adjectives (\"warm, authoritative, bold\") \u2014 which tell writers nothing specific to do",
      "No specific vocabulary list \u2014 neither what to use nor what to refuse",
      "No example pieces representing the voice in action at different tones",
      "No decision rules \u2014 writers face real choices (long vs short sentences, formal vs casual) with no guidance",
    ] },
    { type: "grid", eyebrow: "THE 4 DIMENSIONS OF VOICE", title: "What actually makes voice detectable", subtitle: "Every one of these is a specific choice, not an adjective. Each contributes to whether the brand survives a blind test.", items: [
      { num: "01", title: "Point of View", desc: "The brand\u2019s stated beliefs about its market. Opinions held. Positions taken. Adversaries named.", icon: "\u{1F4AC}" },
      { num: "02", title: "Vocabulary", desc: "Words the brand uses repeatedly + words it refuses. Both ends of the list are distinctive.", icon: "\u{1F4D6}" },
      { num: "03", title: "Rhythm", desc: "Sentence length variance. Fragment frequency. Paragraph length. The cadence on the page.", icon: "\u{1F3B5}" },
      { num: "04", title: "Rhetorical Tics", desc: "Signature moves: contrarian openers, specific number hooks, direct questions, em-dashes used a certain way.", icon: "\u2728" },
    ], footer: "Rule: a voice that doesn\u2019t score specifically on all four dimensions is a mood, not a voice. Moods are indistinguishable; voices are fingerprints." },
    { type: "principle", num: "01", title: "Voice vs Tone \u2014 The Distinction Nobody Gets Right", intro: "These terms are used interchangeably. They\u2019re not. Voice is the constant; tone is the variable. Understanding the difference is the prerequisite to building either.", sectionTitle: "The Difference In Practice", sections: [
      { heading: "Voice is what doesn\u2019t change", example: "The brand\u2019s POV, vocabulary, rhythm, rhetorical tics. These stay constant across all copy, all channels, all situations.", note: "If your voice changes between an announcement post and a support reply, you don\u2019t have a voice \u2014 you have situational improvisation." },
      { heading: "Tone is what does change", example: "The emotional register. Celebratory on a launch. Somber on an outage. Matter-of-fact in a legal notice.", note: "Tone shifts within the voice. The voice is still recognisable underneath." },
      { heading: "Both must be true simultaneously", example: "A user can tell (a) this is Brand X, not Brand Y, and (b) this is the celebratory tone, not the apology tone \u2014 both signals in the same copy.", note: "The brand voice survives changes in tone. Tone shifts without violating voice." },
    ], rule: "Test: write three pieces from one brand \u2014 a product launch, a postmortem, and a customer reply. Voice should be recognisable in all three. Tone should shift appropriately." },
    { type: "comparison", eyebrow: "VOICE ADJECTIVES vs VOICE SPECIFICS", title: "Two voice guide sections for the same brand", subtitle: "Both claim the same voice. Only one gives writers something to actually do.", left: { title: "The Useless Version (Adjective Soup)", color: "#EF4444", items: [
      { strong: "\"Our voice is warm, smart, and helpful.\"", note: "Used by every brand in every category. Zero distinguishing information." },
      { strong: "\"We speak like a trusted friend.\"", note: "Tells writers nothing about specific choices. What friend? How casual? Which words?" },
      { strong: "\"We avoid being boring or corporate.\"", note: "Everyone claims this. No one\u2019s voice guide says \u201Cbe boring.\u201D The \u201Cdo\u201D is missing." },
      { strong: "\"We use active voice and keep it concise.\"", note: "Generic copywriting advice \u2014 not voice. Every good writer does this. Not distinctive." },
    ] }, right: { title: "The Useful Version (Specific Choices)", color: "#10B981", items: [
      { strong: "POV: \"Most CRMs are overbuilt. Our stance: sales tools should work like Gmail, not like Salesforce.\"", note: "A specific belief, stated. Creates a frame for every subsequent piece of copy." },
      { strong: "Vocabulary \u2014 use: \"reps,\" \"deals,\" \"pipeline,\" \"closing.\" NEVER: \"empower,\" \"leverage,\" \"unlock,\" \"solutions.\"", note: "Specific words to use AND refuse. Writers can check their draft against the list in 30 seconds." },
      { strong: "Rhythm: sentences average 12\u201318 words. Use fragments. Often. Like this.", note: "A specific cadence rule writers can apply. Measurable. Testable." },
      { strong: "Signature move: open posts with a short contrarian claim, then a specific number that proves it.", note: "A specific rhetorical pattern that readers will learn to recognise as \"this brand\" across pieces." },
    ] }, footer: "Rule: a voice guide that doesn\u2019t change what a writer types when they\u2019re drafting isn\u2019t a voice guide \u2014 it\u2019s brand therapy." },
    { type: "table", title: "Voice Sources \u2014 Where Authentic Voice Actually Comes From", subtitle: "The strongest brand voices trace back to real sources. Without these, any voice guide is synthetic.", columns: ["Source", "What It Contributes", "How to Capture It"], rows: [
      ["Founder / CEO speech", "Point of view, vocabulary, rhetorical tics from real human communication", "Transcribe 5\u201310 podcasts, interviews, all-hands talks. Extract recurring phrases + POV statements."],
      ["Customer interviews", "Authentic audience language; questions they actually ask; the vocabulary they use", "Conduct 10\u201315 interviews. Transcribe. Pull language the customer uses \u2014 use that language in copy."],
      ["Sales call recordings", "Real objections, real pitches that work, real language at the buying moment", "Listen to 20+ Gong/Chorus recordings. Note: what phrases close deals? What objections repeat?"],
      ["Earliest product decisions", "Company DNA: why it was built, who it was built for, what was explicitly refused", "Interview founders about the first 6 months. Look for: what did we refuse? Those refusals become voice rules."],
      ["Public work that wins", "What has historically resonated with THIS audience from THIS brand", "Audit the top 10 performing pieces in the last year. Extract structural + vocabulary patterns."],
    ], footer: "Rule: if the voice guide can\u2019t trace every rule back to a real source, it\u2019s synthetic \u2014 and synthetic voices don\u2019t survive blind tests." },
    { type: "exercise", title: "Diagnose Your Current Brand Voice", intro: "Pick your brand (or a brand you write for). Run the 4-dimension diagnostic \u2014 specific, not adjectival.", items: [
      { num: "1", copy: "POV: what does your brand believe about the market that its competitors don\u2019t say aloud? Write it as a one-sentence belief.", answer: "If you can\u2019t state a specific, defensible belief, the voice has no spine. Go interview the founder; extract their actual POV." },
      { num: "2", copy: "Vocabulary \u2014 Use: list 5 words/phrases the brand uses repeatedly. Refuse: list 5 words the brand should NEVER use.", answer: "If the lists are empty, your voice is indistinguishable. Mine customer calls + founder speeches for the \u201Cuse\u201D list; competitor pages for the \u201Crefuse\u201D list." },
      { num: "3", copy: "Rhythm: measure average sentence length in your 3 best-performing recent posts. Note fragment frequency.", answer: "Writers rarely measure their own rhythm. You\u2019ll discover patterns you didn\u2019t know existed. Those patterns ARE your voice." },
      { num: "4", copy: "Signature move: is there a recurring rhetorical pattern in your brand\u2019s best pieces? (Contrarian opener, data-led hook, direct reader address, etc.)", answer: "If the pattern exists, name it \u2014 and use it deliberately going forward. If it doesn\u2019t, design one and commit to it for 6 months." },
    ] },
  ],
};
