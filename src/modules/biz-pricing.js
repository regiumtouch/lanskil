// The Copywriting Business — Module 2: Pricing Strategy
export const bizPricingModule = {
  id: "biz02",
  title: "Pricing Strategy for Copy",
  type: "Rich Module",
  duration: "90 min",
  desc: "Hourly caps your income at your typing speed. Project rates scale. Retainers compound. Value-based pricing is another league entirely. Learn the right model for each stage.",
  topics: ["Pricing Models", "Hourly Trap", "Project Pricing", "Retainer Structure", "Value-Based Pricing", "Raising Rates"],
  quiz: [
    { q: "The single biggest pricing mistake freelance copywriters make is:", opts: ["Charging too much", "Pricing by the hour \u2014 caps income at typing speed; makes every efficiency gain a pay cut; prevents valuation on the outcome you produce", "Project pricing", "Retainers"], correct: 1 },
    { q: "Project pricing is typically:", opts: ["Same as hourly", "A fixed fee based on scope + value, independent of hours \u2014 efficiency gains flow to you, and buyer gets certainty on total cost", "More confusing", "Always worse"], correct: 1 },
    { q: "A retainer is best for:", opts: ["One-off projects", "Ongoing work with defined deliverables \u2014 3\u201312 month agreements at a fixed monthly fee; provides income stability + lets you invest in deeper client relationship", "Only enterprise", "Hourly clients"], correct: 1 },
    { q: "Value-based pricing means:", opts: ["Charging more arbitrarily", "Pricing a piece based on the business value it produces for the client \u2014 e.g., a sales page that generates $500K/yr in pipeline warrants $50K, not $5K by-the-piece", "Hourly with multiplier", "Undercutting competitors"], correct: 1 },
    { q: "You should raise your rates when:", opts: ["Never", "You\u2019re at capacity (3+ week backlog) AND your positioning has strengthened AND you\u2019re delivering results clients acknowledge \u2014 not when you feel like it, but when the market supports it", "After each project", "Every year"], correct: 1 },
    { q: "A copywriter charging $50/hr who efficiency-gains to 2\u00D7 their typing speed:", opts: ["Earns 2x", "Earns the same absolute rate \u2014 hourly punishes efficiency; the skill gain doesn\u2019t translate to earning gain without a pricing model change", "Earns more", "Earns less"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 2", title: "Pricing Strategy", titleAccent: "for Copy", subtitle: "Hourly caps your income at your typing speed. Project rates scale. Retainers compound. Value-based pricing is another league.", meta: "The Copywriting Business  |  Module 2  |  7 Slides" },
    { type: "stats", eyebrow: "WHY PRICING MODEL DETERMINES EARNING CEILING", title: "Two copywriters with identical skill can have 10x different earning ceilings \u2014 based purely on pricing model", intro: "Pricing isn\u2019t about what you think your work is worth. It\u2019s about what the market will pay for the value you deliver. The model you choose determines whether efficiency + expertise + skill gains translate into actual income.", stats: [
      { num: "10\u00D7", label: "earning ceiling difference between hourly vs value-based pricing for identical skill levels" },
      { num: "40%", label: "typical income uplift within 12 months of migrating from hourly to project-based pricing, without changing skill" },
      { num: "3\u201318 mo", label: "typical time for a copywriter to justify + sustain 2\u00D7 rate increases after switching pricing models" },
    ], subheading: "The Pricing Models, Ranked By Earning Ceiling", bullets: [
      "Hourly \u2014 lowest ceiling; every efficiency gain = pay cut; buyer-friendly but freelancer-unfavourable",
      "Project rate \u2014 higher ceiling; efficiency = yours to keep; requires scope discipline",
      "Retainer \u2014 compounding ceiling; income stability; deeper relationships + higher hourly-equivalent rates",
      "Value-based \u2014 highest ceiling; priced to the outcome produced; requires proven outcomes + strong positioning",
    ] },
    { type: "grid", eyebrow: "THE 4 PRICING MODELS", title: "When each model is appropriate", subtitle: "Different stages + different work types call for different models. No single model fits everyone.", items: [
      { num: "01", title: "Hourly Rate", desc: "Bill per hour worked. Appropriate for: ambiguous scope, first client engagements, research-heavy projects where output is unclear upfront.", icon: "\u23F1\uFE0F" },
      { num: "02", title: "Project / Fixed Rate", desc: "Bill per piece or defined scope. Appropriate for: clear deliverables (landing page, email sequence, sales page) where scope is definable.", icon: "\u{1F4E6}" },
      { num: "03", title: "Monthly Retainer", desc: "Bill per month for defined ongoing work. Appropriate for: content programmes, ongoing advisory, multi-month relationships with clear deliverables.", icon: "\u{1F4C5}" },
      { num: "04", title: "Value-Based", desc: "Bill based on business outcome. Appropriate for: high-stakes campaigns, proven-outcome specialists, engagements where you can attribute revenue.", icon: "\u{1F3AF}" },
    ], footer: "Rule: most careers progress through these models in order \u2014 hourly (start), project (established), retainer (scaling), value-based (senior specialist). Skipping stages occasionally works; collapsing them is rare." },
    { type: "principle", num: "01", title: "The Hourly Trap \u2014 Why It Caps You", intro: "Hourly feels safe. You charge for time spent; client pays for time worked. The trap: you punish yourself for efficiency. The faster you become, the less you earn per piece. This is a structural problem no amount of skill fixes.", sectionTitle: "Why The Hourly Model Doesn\u2019t Scale", sections: [
      { heading: "1. Efficiency is a pay cut", example: "Junior writer: 20 hrs on a sales page at $80/hr = $1,600. Senior writer: 6 hrs on the same page at $80/hr = $480. Same deliverable, senior earns 1/3.", note: "Experience should grow earnings. Hourly inverts it." },
      { heading: "2. Buyers negotiate hours, not value", example: "\u201CThis should only take 8 hours, not 15\u201D \u2014 negotiating hours rather than outcome. Buyer anchors to time, not value.", note: "Shifts the conversation away from outcome. Wrong anchor for pricing conversations." },
      { heading: "3. Buyers perceive hourly workers as interchangeable", example: "Hourly workers are typically treated as commodity-line-items; project workers + retainers are treated as strategic partners.", note: "The pricing model shapes how buyers perceive the relationship. Hourly = task-doer; project = specialist; retainer = partner." },
      { heading: "4. You can\u2019t scale beyond one person\u2019s hours", example: "Max income = available hours \u00D7 hourly rate. The ceiling is mathematical.", note: "Project + retainer models decouple income from personal hours. You can raise rates + maintain income while working less." },
    ], rule: "Use hourly only for genuinely ambiguous-scope work (research, consulting, custom one-offs). Migrate everything else to project or retainer pricing within your first 12 months." },
    { type: "comparison", eyebrow: "HOURLY vs PROJECT", title: "Same writer, same deliverable, different pricing", subtitle: "A sales page that takes 8 hours to write. Hourly writer earns $640. Project writer earns $5,000. Same skill, same time \u2014 different earning.", left: { title: "Hourly Pricing", color: "#EF4444", items: [
      { strong: "Rate: $80/hour. Writer estimates 8 hours. Quotes $640.", note: "Estimate anchors buyer\u2019s expectation. Writer must defend each hour." },
      { strong: "Buyer negotiates: \u201CShouldn\u2019t take 8 hours \u2014 let\u2019s say 6 @ $80 = $480.\u201D", note: "Negotiation happens on hours, not value. Writer\u2019s expertise is penalised." },
      { strong: "Writer delivers in 7 hours (efficient). Bills 7. Earns $560.", note: "Honesty punishes the writer. Efficiency = pay cut." },
      { strong: "Outcome: $560 for a sales page that might generate $500K/yr in client pipeline", note: "Massive undercharging. Writer underpaid; buyer got premium result at commodity price." },
    ] }, right: { title: "Project Pricing", color: "#10B981", items: [
      { strong: "Quote: \u201C$5,000 for the sales page + 2 revision rounds. Delivered in 10 business days.\u201D", note: "Priced to the value + deliverable. Time is writer\u2019s problem." },
      { strong: "Buyer evaluates: \u201CFor a sales page that could bring $500K/yr in pipeline, $5K is reasonable.\u201D", note: "Negotiation happens on value, not time. Writer\u2019s expertise is rewarded." },
      { strong: "Writer delivers in 7 hours. Still earns $5,000.", note: "Efficiency flows to writer. Faster writer = higher effective hourly rate." },
      { strong: "Outcome: $5K for a sales page \u2248 $714/hour effective rate on the 7 hours worked", note: "Fair value exchange. Both parties won: client got result; writer got paid on output, not input." },
    ] }, footer: "Rule: same work, radically different pay. The pricing model is the difference. Migrate to project pricing as fast as you can." },
    { type: "table", title: "Rate Benchmarks by Model + Experience (2026)", subtitle: "Approximate ranges for B2B SaaS copywriting in North America / UK / EU. Adjust for local market + specialty.", columns: ["Model", "Junior (0\u20132 yrs)", "Mid (2\u20135 yrs)", "Senior (5+ yrs)"], rows: [
      ["Hourly", "$40\u2013$80", "$80\u2013$150", "$150\u2013$300"],
      ["Project \u2014 Landing Page", "$1,500\u2013$3,000", "$3,000\u2013$8,000", "$8,000\u2013$25,000"],
      ["Project \u2014 Sales Page", "$2,500\u2013$5,000", "$5,000\u2013$15,000", "$15,000\u2013$50,000"],
      ["Project \u2014 Email Sequence (6\u201310 emails)", "$1,500\u2013$3,500", "$3,500\u2013$8,000", "$8,000\u2013$20,000"],
      ["Retainer (monthly, defined scope)", "$2,000\u2013$5,000", "$5,000\u2013$12,000", "$12,000\u2013$30,000+"],
      ["Value-Based (% of outcome or fixed-high)", "Rare", "Starting", "Common for specialists"],
    ], footer: "Rule: these are ranges, not prescriptions. Your specific rate should be set by your positioning, portfolio, and local market \u2014 not by fear of asking." },
    { type: "exercise", title: "Audit + Upgrade Your Current Pricing", intro: "Where are you on the pricing model progression? Map your current work. Plan the next migration.", items: [
      { num: "1", copy: "List your last 5 engagements + how you priced each (hourly, project, retainer, value). Calculate average hourly-equivalent rate.", answer: "Most copywriters are shocked to find their \u201Cpremium\u201D project rate equals a modest hourly equivalent. Honest measurement is step 1." },
      { num: "2", copy: "If any engagement was hourly, identify whether it\u2019s eligible for project pricing (scope is definable). Migrate before the next one.", answer: "Migration is as simple as saying: \u201CGoing forward for pieces like this, I price by project, not hour. Rate is X.\u201D Clients rarely resist." },
      { num: "3", copy: "Identify your current retainer clients (if any) + whether they\u2019re priced at the current market rate for your positioning.", answer: "Retainers drift below market over time \u2014 you started at rate X, 18 months later the market is 1.5X. Plan rate increases annually." },
      { num: "4", copy: "Pick ONE piece of work where you could plausibly test value-based pricing. Draft the pitch.", answer: "Start with a client where you\u2019ve already produced measurable outcomes. \u201CGiven this page drove $500K, my next one prices at $50K, which is 10% of the expected outcome.\u201D" },
    ] },
  ],
};
