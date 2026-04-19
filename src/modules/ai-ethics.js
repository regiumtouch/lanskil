// AI-Powered Copywriting — Module 5: Ethics & Disclosure
export const aiEthicsModule = {
  id: "ai05",
  title: "AI Ethics & Disclosure in Copy",
  type: "Rich Module",
  duration: "90 min",
  desc: "When to disclose AI usage, what to never fake with AI, and how to build an ethical AI-copywriting practice your clients and readers can trust.",
  topics: ["Disclosure Norms", "What Never To AI-Generate", "Fabricated Testimonials", "AI Detection Reality", "Client Contracts", "Reader Trust"],
  quiz: [
    { q: "When using AI to help draft copy, the ethical disclosure baseline is:", opts: ["Always explicit AI-disclosure on every piece", "Depends on the context and stakeholder norms; explicit disclosure when readers/clients expect it; tool-use transparency when asked; never deceptive framing like \"100% human-written\" when AI was used substantially", "Never disclose", "Only for legal documents"], correct: 1 },
    { q: "Fabricating a customer testimonial via AI is:", opts: ["Fine", "An outright ethics violation \u2014 deceptive, potentially illegal in many jurisdictions (FTC endorsement guidelines, EU consumer protection), and it destroys trust when discovered", "Industry standard", "Recommended for SEO"], correct: 1 },
    { q: "\"AI detection tools\" claiming to spot AI-written content:", opts: ["Are highly accurate", "Are unreliable \u2014 high false-positive rates, easily defeated by minor edits; treat them as guidance at best, not authoritative evidence", "100% accurate", "Banned"], correct: 1 },
    { q: "A copywriter hired by a client who says \"100% human writing only\" should:", opts: ["Use AI anyway", "Honor the agreement explicitly; if AI use is part of workflow, negotiate that into the contract upfront rather than hide it", "Charge more", "Refuse the work"], correct: 1 },
    { q: "Using AI to generate fake data or fabricated case studies is:", opts: ["Effective marketing", "Fraud \u2014 fabricated claims are deceptive regardless of whether AI or a human invented them; consequences include FTC action, damaged brand, client lawsuits", "Best practice", "Legal if AI did it"], correct: 1 },
    { q: "The professional baseline for AI disclosure in 2026 copywriting is:", opts: ["No standards exist", "Transparency when asked; don\u2019t falsely claim \u201C100% human\u201D when AI contributed substantially; disclose AI in academic/journalistic contexts; use professional judgement elsewhere", "Always disclose", "Never disclose"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "AI Ethics &", titleAccent: "Disclosure", subtitle: "When to disclose AI usage, what to never fake with AI, and how to build an ethical AI-copywriting practice.", meta: "AI-Powered Copywriting  |  Module 5  |  7 Slides" },
    { type: "stats", eyebrow: "WHY ETHICS COMPOUND", title: "Ethics in AI copy isn\u2019t abstract \u2014 it\u2019s commercial leverage", intro: "Writers who build trustworthy AI practices outlast writers who don\u2019t. Clients who hire you once for being honest hire you repeatedly. Readers who trust your copy come back. Ethics are long-term commercial math.", stats: [
      { num: "67%", label: "of buyers report they lose trust in brands/creators when AI use is discovered undisclosed (2025 consumer survey)" },
      { num: "FTC", label: "guidelines explicitly require disclosure of material connections in endorsements \u2014 fabricated AI testimonials are already regulated" },
      { num: "3\u00D7", label: "client retention rate for copywriters with explicit AI policies vs those with ambiguous practices" },
    ], subheading: "The Three Ethical Tensions in AI Copy", bullets: [
      "Disclosure: when to tell readers AI was involved",
      "Fabrication: what should NEVER be AI-generated (testimonials, data, case studies)",
      "Representation: what you claim to clients about your process",
      "All three compound into reputation over time. One violation can undo years of trust.",
    ] },
    { type: "grid", eyebrow: "DISCLOSURE NORMS", title: "When to disclose AI use \u2014 4 contexts", subtitle: "Disclosure isn\u2019t binary. Different contexts have different norms. Apply professional judgement.", items: [
      { num: "01", title: "Always Disclose", desc: "Academic writing, journalism, regulated industries (legal, medical, financial), sworn statements. AI use must be explicit and documented.", icon: "\u2757" },
      { num: "02", title: "Disclose When Asked", desc: "Client work where contracts or conversations raised the question. Never lie; use professional judgement on volunteering.", icon: "\u2753" },
      { num: "03", title: "Norms-Based", desc: "Marketing copy, blog posts, social media. Industry practice varies; consider reader expectations + platform norms.", icon: "\u{1F310}" },
      { num: "04", title: "No Disclosure Expected", desc: "Internal team comms, drafts, brainstorming, process tools. AI is just software; disclosing every spellcheck would be absurd.", icon: "\u{1F527}" },
    ], footer: "Rule: never falsely claim \"100% human-written\" when AI contributed substantially. The specific claim \"100% human\" creates a factual representation that can be a breach of contract or regulation if false." },
    { type: "principle", num: "01", title: "What Never To Generate With AI", intro: "Some copy should never be AI-generated regardless of workflow or disclosure. These are the ethical absolutes. Breaking them isn\u2019t a gray area \u2014 it\u2019s deception.", sectionTitle: "The 5 Absolute No-Go Zones", sections: [
      { heading: "1. Fabricated Testimonials / Customer Quotes", example: "Never use AI to invent a customer quote attributed to a named (or unnamed) person. Use real quotes only.", note: "This is fraud. Full stop. FTC guidelines + consumer protection laws in most jurisdictions prohibit fabricated endorsements." },
      { heading: "2. Fake Data, Statistics, or Research", example: "Never cite \"a 2025 Harvard study shows\u2026\" if AI invented it. Never use AI-generated survey data as real.", note: "AI hallucinates plausible-sounding citations constantly. Every stat must trace back to a real, verifiable source." },
      { heading: "3. Fabricated Personal Stories", example: "\"When I was 22, I started my first business in Brooklyn\u2026\" \u2014 if this didn\u2019t happen, it\u2019s a lie regardless of voice.", note: "AI can write compelling personal stories. If they\u2019re not YOUR stories and you\u2019re publishing under your name, you\u2019re lying." },
      { heading: "4. False Credentials or Expertise Claims", example: "\"As a certified [profession] with 15 years of experience\u2026\" when you\u2019re neither certified nor experienced.", note: "This crosses into potentially illegal misrepresentation in regulated fields. Always use real credentials only." },
      { heading: "5. Impersonation of Real People", example: "AI-generating content \"from\" a specific named competitor, journalist, or public figure without their consent.", note: "Legal risks include defamation, right-of-publicity violations, and platform-level account termination." },
    ], rule: "These are bright lines. Crossing any one costs your career, your client relationships, and potentially legal standing. No amount of \u201CAI did it\u201D defence saves you." },
    { type: "comparison", eyebrow: "ETHICAL vs UNETHICAL", title: "Same AI tool, two uses", subtitle: "The same LLM can be used ethically or unethically. Writer judgement is the dividing line.", left: { title: "Unethical AI Use", color: "#EF4444", items: [
      { strong: "Prompting AI to \"write a testimonial from a fictional fintech CEO\"", note: "Fabricated endorsement. FTC violation. Career-ending if discovered." },
      { strong: "Using AI to \"generate a case study with realistic numbers\"", note: "Fabricated data. Clients will eventually ask for verification \u2014 when you can\u2019t provide it, trust dies." },
      { strong: "Claiming \"100% human-written\" to clients while using AI for 80% of drafting", note: "Contract breach + misrepresentation. If discovered, refunds + reputation damage + loss of future work." },
      { strong: "Publishing AI-generated opinion pieces under a bylined author\u2019s name without disclosure", note: "Platform policies (Medium, LinkedIn, Substack) all have specific rules on this. Violations lead to bans." },
    ] }, right: { title: "Ethical AI Use", color: "#10B981", items: [
      { strong: "Using AI to draft structure, then adding real customer quotes from real interviews", note: "AI as scaffolding. All claims verifiable. Voice + specifics from the human." },
      { strong: "Using AI to compress or rewrite tone, with all claims and facts verified by the writer", note: "AI as editor/adapter. Content remains accurate; workflow is faster; no deception." },
      { strong: "Disclosing to clients: \"I use AI for brainstorming and first drafts; final copy is my work\"", note: "Honest contract. Client knows what they\u2019re paying for. Long-term trust maintained." },
      { strong: "Labelling posts \"AI-assisted draft, author edited\" when platform norms expect it", note: "Transparency where it\u2019s expected. Builds reputation as an ethical operator." },
    ] }, footer: "Rule: the tool is neutral. The judgement is everything. Build the judgement and your AI practice outlasts the AI hype cycle." },
    { type: "table", title: "Handling Client Conversations About AI", subtitle: "These are the conversations that happen now and will happen more. Handle each honestly, upfront, in contract.", columns: ["Scenario", "Unethical Response", "Ethical Response"], rows: [
      ["Client asks \"Do you use AI?\"", "\"No, all my work is 100% human.\"", "\"Yes \u2014 I use AI for brainstorming, variant generation, and first drafts. All final copy is hand-crafted and reviewed. Here\u2019s my specific workflow.\""],
      ["Client says \"We want 100% human content only.\"", "Agree and secretly use AI anyway", "Honour it explicitly. If that\u2019s impossible given your workflow, negotiate upfront or decline the project."],
      ["Client asks for AI-generated testimonials", "Generate them", "Decline. Offer instead to help them source real customer quotes via interviews or surveys."],
      ["Client wants fake case study data \"just for the landing page\"", "Generate plausible numbers", "Decline. Explain FTC/consumer risk. Offer to help them produce real data or clearly-labelled hypothetical examples."],
      ["Client doesn\u2019t ask about AI; you\u2019re using it substantially", "Assume they don\u2019t care", "Volunteer the info in the scope doc: \"My process includes AI-assisted drafting with human editing. Happy to adjust if you prefer.\""],
      ["Platform (LinkedIn, Medium) starts requiring AI disclosure", "Lie", "Comply. Platforms increasingly label AI-involved content; better to disclose than to get flagged/banned."],
    ], footer: "Rule: assume everything you write will eventually be traced. Write (and contract) as though every decision is public." },
    { type: "exercise", title: "Draft Your AI Ethics Policy", intro: "Spend 30 minutes drafting your personal AI ethics policy. Write it so a potential client reading it would trust you more, not less.", items: [
      { num: "1", copy: "What AI tools do you use and for what tasks? Be specific.", answer: "Example: \"I use Claude and ChatGPT for brainstorming, first drafts, and variant generation. I hand-edit every piece. I verify every statistic and quote.\"" },
      { num: "2", copy: "What will you NEVER use AI for? List your absolute no-go zones.", answer: "Reference Slide 4: fabricated testimonials, fake data, false credentials, impersonation. State your lines clearly." },
      { num: "3", copy: "How do you handle client disclosure? What\u2019s in your standard contract or scope doc?", answer: "Example: \"My process includes AI-assisted drafting with comprehensive human editing. I disclose AI assistance in client agreements. I comply with platform-specific disclosure requirements.\"" },
      { num: "4", copy: "Publish the policy on your website / profile. Make it easy for clients to find.", answer: "This becomes a commercial advantage over writers who are ambiguous. Trustworthy practices compound into client retention, referrals, premium rates." },
    ] },
  ],
};
