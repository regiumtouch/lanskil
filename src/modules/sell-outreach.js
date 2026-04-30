// Sales Fundamentals — Module 3: Cold Outreach That Gets Replies
export const sellOutreachModule = {
  id: "sell03",
  title: "Cold Outreach That Gets Replies",
  type: "Rich Module",
  duration: "90 min",
  desc: "The art of first-message outreach. Subject lines, proven frameworks (PVC, 3Bs), personalisation that uses your research, and follow-up cadence that doesn't burn prospects.",
  topics: ["Subject Lines", "Message Frameworks", "Personalisation Density", "Follow-Up Cadence", "Reply-Rate Math", "Channel Selection"],
  quiz: [
    { q: "You\u2019ve sent 120 cold emails over 3 weeks. Reply rate 0.4%. You\u2019ve heard back from zero decision-makers. Audit order, strongest first:", opts: ["Target list \u2192 personalisation depth \u2192 offer-to-pain fit \u2192 subject/body craft \u2014 at this volume the issue is almost never send-time or formatting; it\u2019s WHO and WHY-NOW", "Send time \u2192 subject line \u2192 body copy \u2192 target list", "Subject line \u2192 send time \u2192 signature \u2192 list", "Switch email provider"], correct: 0 },
    { q: "Two subject lines for the same prospect: (A) \u201CQuick question about your SDR ramp\u201D (B) \u201CYour Tuesday post on rep ramp\u201D. Most likely winner on open rate and why:", opts: ["(A) \u2014 \u201Cquick\u201D reduces perceived cost", "(A) \u2014 shorter lines always win", "They\u2019ll tie", "(B) \u2014 names a specific public moment the prospect remembers; it signals \u201Cthis was written for me\u201D before the email opens, which is the single biggest opening-rate lever"], correct: 3 },
    { q: "You sent a 78-word cold email with a named recent trigger and a specific offer. No reply in 5 days. Best Day-5 follow-up:", opts: ["Identical message resent with \u201Cbumping this\u201D", "Call and email the same hour for density", "Short bump that adds a specific new value fragment (a relevant data point, a named peer case, or a 2-line insight) \u2014 changes the value on offer rather than repeating the original ask", "Wait 14 more days"], correct: 2 },
    { q: "A prospect replied \u201Cnot right now\u201D 11 months ago. You haven\u2019t touched them since. Current best move:", opts: ["Skip them \u2014 they said no", "Re-approach with a new, specific reason the timing has changed on their side (new hire, new funding, new product, a recent post) \u2014 \u201Cnot right now\u201D is a timing signal, not a permanent no; 11 months is usually a fresh window", "Send the exact same first email", "Put them on a daily drip for 30 days"], correct: 1 },
    { q: "Your 4-touch cadence ends Day 30 with a breakup email. A prospect replies to the breakup, not the earlier touches. This is:", opts: ["Common \u2014 the breakup removes pressure and signals self-respect; it often out-converts touches 1\u20133 because it changes the dynamic from \u201Cseller pursuing\u201D to \u201Cseller walking\u201D", "A fluke \u2014 ignore it", "A sign to extend the cadence to 8 touches", "A sign your first emails were bad"], correct: 0 },
    { q: "You\u2019re choosing between cold email and cold LinkedIn DM for a 42-year-old enterprise CIO. Reasonable default:", opts: ["LinkedIn \u2014 it\u2019s more personal", "Phone-first always", "LinkedIn only", "Email as primary, LinkedIn as Day-14 follow-up channel \u2014 enterprise execs at that seniority read email carefully but treat LinkedIn as noisy; email signals more intent and easier procurement forwarding"], correct: 3 },
  ],
  slides: [
    { type: "cover", module: "MODULE 3", title: "Cold Outreach", titleAccent: "That Gets Replies", subtitle: "Subject lines. Frameworks. Personalisation. Follow-up. The art of first-message outreach that actually produces conversations.", meta: "Sales Fundamentals  |  Module 3  |  7 Slides" },
    { type: "stats", eyebrow: "WHY REPLY RATES MATTER", title: "Reply rate is the single cleanest measure of outreach quality", intro: "Every other sales metric rolls up from reply rate. A 1% reply rate requires 100x the volume of a 10% rate to produce the same pipeline. The gap between average and excellent outreach is exponential.", stats: [
      { num: "0.5\u20131.5%", label: "reply rate on generic template cold email \u2014 the baseline" },
      { num: "6\u201315%", label: "reply rate on researched + personalised outreach with a specific, low-friction ask" },
      { num: "30 sec", label: "time the reader spends deciding whether to reply, archive, or delete" },
    ], subheading: "What Great Outreach Does", bullets: [
      "Earns the open with a subject line that isn\u2019t generic OR manipulative",
      "Proves research in the first 1\u20132 sentences (before asking for anything)",
      "Offers specific value (insight, resource, introduction) before asking for time",
      "Asks for a clear, low-friction next step \u2014 not \u201Ca 30-min call\u201D by default",
      "Follows up 3\u20134 times over 30 days with variety \u2014 then stops cleanly",
    ] },
    { type: "grid", eyebrow: "THREE MESSAGE FRAMEWORKS", title: "Each one fits a different situation", subtitle: "Don\u2019t use the same framework for every message. Match the framework to the relationship stage + context.", items: [
      { num: "01", title: "PVC (Personalisation \u2192 Value \u2192 Call-to-action)", desc: "Classic B2B cold. Line 1: researched personalisation. Line 2: specific value hint. Line 3: low-friction ask.", icon: "\u{1F4E7}" },
      { num: "02", title: "3Bs (Brief \u2192 Blunt \u2192 Basic)", desc: "Under 80 words. One bold claim. One clear ask. Works for busy executives who value efficiency over warmth.", icon: "\u26A1" },
      { num: "03", title: "Insight-First", desc: "Open with an observation or data point relevant to their role. Pitch comes later. Works when you have genuine industry insight.", icon: "\u{1F4A1}" },
    ], footer: "Rule: choose framework by context. PVC is the safe default. 3Bs for senior buyers. Insight-First when you have something genuinely worth saying." },
    { type: "principle", num: "01", title: "The Subject Line Craft", intro: "Subject lines decide whether your entire message gets read or discarded. Yet most sellers spend 30 seconds on a subject line and 30 minutes on the body. Reverse that weighting.", sectionTitle: "The 4 Rules of High-Opening Subject Lines", sections: [
      { heading: "1. Specific > Clever", example: "\u201CYour post on SDR churn\u201D > \u201CQuick thought for you\u201D", note: "Specificity signals research. Cleverness signals template." },
      { heading: "2. 5\u20139 words", example: "Mobile inbox truncates beyond ~50 chars. Front-load the information.", note: "Long subject lines get cropped mid-word. Short + specific wins the preview." },
      { heading: "3. Avoid clickbait patterns", example: "\u201CYou won\u2019t believe\u2026\u201D / \u201CLast chance\u2026\u201D / \u201CAct now!\u201D \u2014 filtered by enterprise gateways.", note: "Professional inboxes have pattern-matching for sales spam. Stay human." },
      { heading: "4. Match the body", example: "Don\u2019t bait-and-switch. Subject \u201CYour Q3 targets\u201D better deliver on that exact topic.", note: "Mismatch trains the prospect to distrust your future messages." },
    ], rule: "Write 5 subject line variants before sending the first cold email. Pick the one that wouldn\u2019t feel out of place in your own inbox." },
    { type: "comparison", eyebrow: "WEAK vs STRONG OUTREACH", title: "Same prospect, two first messages", subtitle: "Same offer, same timing, different craft. Results differ by ~10\u00D7.", left: { title: "Weak Outreach (Template-Heavy)", color: "#EF4444", items: [
      { strong: "Subject: \u201CQuick question\u201D", note: "Generic. Filtered immediately." },
      { strong: "\u201CHi [Name], hope you\u2019re well! I\u2019m reaching out because I think we could help your business.\u201D", note: "Zero research. Generic opener. Buyer deletes in 3 seconds." },
      { strong: "\u201COur platform helps teams like yours increase efficiency and grow revenue.\u201D", note: "Marketing-speak. No specificity. Sounds like every other cold email they\u2019ve gotten this month." },
      { strong: "\u201CCould we schedule a 30-minute call next week?\u201D", note: "Asking before earning. High-friction ask. Ignored." },
    ] }, right: { title: "Strong Outreach (Researched)", color: "#10B981", items: [
      { strong: "Subject: \u201CYour post on SDR reply rates\u201D", note: "Specific + researched. Opens in 30 seconds." },
      { strong: "\u201C[Name] \u2014 saw your Thursday post on SDR reply rates. The point about template fatigue is exactly what I\u2019ve been seeing too.\u201D", note: "Researched. Specific. Conversational. Signals real attention." },
      { strong: "\u201CWe worked with [named similar company] on this \u2014 went from 3.1% to 7.4% in 6 weeks. Happy to share the 3 changes if useful.\u201D", note: "Specific outcome + named case + low-friction offer (not a call; a doc)." },
      { strong: "\u201CWant me to send it? Or if not relevant, happy to leave you to it.\u201D", note: "Respectful. Opens a door without forcing it. Permission-based." },
    ] }, footer: "Rule: every researched message should feel like it could only have been sent to this one person. If it could\u2019ve been mass-sent, rewrite." },
    { type: "table", title: "The 4-Touch Follow-Up Cadence", subtitle: "After the first message, 3 more touches over 30 days. Each with variety. Then stop cleanly.", columns: ["Day", "Touch", "What To Send"], rows: [
      ["Day 1", "Initial email", "The researched PVC or 3Bs message"],
      ["Day 5", "Follow-up 1", "\"Bumping this in case it got buried. Still happy to share the [thing] if helpful.\""],
      ["Day 14", "Follow-up 2 (different channel)", "LinkedIn DM with the same offer, lighter tone; OR a relevant article share"],
      ["Day 30", "Breakup + permission email", "\"Going to close this loop. If the timing\u2019s ever right, I\u2019ll keep the door open \u2014 no hard feelings either way.\""],
      ["Day 30+", "Silence OR long-tail nurture", "Move prospect to a quarterly touch list; don\u2019t abandon; don\u2019t hound"],
    ], footer: "Rule: 4 touches over 30 days. After that, stop. Repeated outreach to a silent prospect signals desperation + kills future opportunities." },
    { type: "exercise", title: "Write + Send One Researched Cold Email", intro: "Use the research from Module 2. Apply the PVC framework. Send today.", items: [
      { num: "1", copy: "Pull your one-liner prospect summary from Module 2\u2019s research exercise.", answer: "You\u2019ve already done the work. The message should take 15 min max to draft \u2014 not the 60 min it would take from scratch." },
      { num: "2", copy: "Draft 5 subject line variants. Pick the most specific + least template-y.", answer: "Subject line is 50% of the open. Resist the urge to ship the first one. Always draft 5; pick the best." },
      { num: "3", copy: "Write the PVC body in 75\u2013150 words: line 1 personalisation, line 2\u20133 specific value, line 4 low-friction ask.", answer: "Cut ruthlessly. Every sentence must earn its place. If it could\u2019ve been written to anyone, delete it." },
      { num: "4", copy: "Send. Schedule the Day 5, Day 14, Day 30 follow-ups in your CRM or calendar NOW.", answer: "The follow-up cadence is what produces reply rate lift. Sellers who don\u2019t schedule follow-ups up front almost always skip them." },
    ] },
  ],
};
