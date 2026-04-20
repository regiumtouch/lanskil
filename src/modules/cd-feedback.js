// Creative Direction — Module 4: Directing Writers (Giving Feedback That Works)
export const cdFeedbackModule = {
  id: "cd04",
  title: "Directing Writers (Feedback That Works)",
  type: "Rich Module",
  duration: "90 min",
  desc: "Feedback is where creative direction happens. Specific, teaching-embedded, taste-anchored feedback grows writers; vague 'make it better' notes create drift and resentment.",
  topics: ["The Feedback Anatomy", "Structural vs Line Notes", "Teaching Embedded", "The Rewrite Call", "Tone of Voice", "Growth Over Quality"],
  quiz: [
    { q: "The single worst feedback note a creative director can give is:", opts: ["Too much detail", "\u201CMake it better\u201D \u2014 vague, un-teaching, forces writer to guess at multiple possible interpretations; produces multiple revision rounds at best", "Too harsh", "Too direct"], correct: 1 },
    { q: "Structural feedback should come before line feedback because:", opts: ["It shouldn\u2019t", "Fixing a structural problem often changes the lines; line-editing a piece whose structure is broken wastes both people\u2019s time", "Surface issues are more important", "Order doesn\u2019t matter"], correct: 1 },
    { q: "Teaching-embedded feedback means:", opts: ["Adding tutorials", "Every note names the rule/principle behind the feedback \u2014 so the writer absorbs the pattern, not just the fix for this piece", "Long feedback", "Kind feedback"], correct: 1 },
    { q: "You should rewrite a writer\u2019s piece (vs give feedback) when:", opts: ["Always", "Rare: only under severe deadline pressure on a high-stakes piece, AND you debrief with the writer afterward about what you changed and why \u2014 if you rewrite without teaching, the writer doesn\u2019t grow", "Never", "The piece is weak"], correct: 1 },
    { q: "The tone a creative director uses in feedback shapes:", opts: ["Nothing", "The writer\u2019s willingness to take creative risks in future pieces \u2014 harsh tone breeds safe work; thoughtful tone breeds brave work", "Only feelings", "Legal exposure"], correct: 1 },
    { q: "Growth-over-quality thinking means:", opts: ["Lower the bar", "Sometimes shipping a piece at 85% quality because the lessons-learned will produce 110% quality on the next piece \u2014 long-term writer growth beats short-term piece polish", "Quality doesn\u2019t matter", "Never edit"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 4", title: "Directing Writers", titleAccent: "Feedback That Works", subtitle: "Feedback is where creative direction happens. Specific, teaching-embedded, taste-anchored feedback grows writers; vague notes create drift.", meta: "Creative Direction  |  Module 4  |  7 Slides" },
    { type: "stats", eyebrow: "WHY FEEDBACK COMPOUNDS", title: "Feedback quality is the single largest driver of writer growth over 12 months", intro: "Writers grow through feedback or they don\u2019t grow. The quality of the feedback they receive determines their trajectory. A CD who gives great feedback builds a great team; a CD who gives vague feedback builds a team that stalls.", stats: [
      { num: "3\u20135\u00D7", label: "writer growth trajectory delta between teams with skilled feedback vs teams with generic feedback" },
      { num: "80%", label: "of writer-growth happens through direct feedback on their own pieces, not from courses or external training" },
      { num: "2\u20135 min", label: "time difference between a vague \u201Cmake it better\u201D note and a specific teaching-embedded note \u2014 the ROI is enormous" },
    ], subheading: "What Great Feedback Does", bullets: [
      "Identifies the structural issue (if there is one) before touching line-level craft",
      "Names the rule or principle behind each note \u2014 so the writer absorbs patterns",
      "Distinguishes between \u201Cthis piece\u201D fixes and \u201Cgoing forward\u201D growth areas",
      "Praises what\u2019s working specifically, so the writer knows what to keep doing",
      "Calibrates tone to the writer\u2019s stage + situation, not the director\u2019s mood",
    ] },
    { type: "grid", eyebrow: "FEEDBACK STRUCTURE", title: "The 3 layers of every good feedback session", subtitle: "Apply all three, in this order. Skipping any layer produces weaker feedback and slower writer growth.", items: [
      { num: "01", title: "What\u2019s Working", desc: "Name specifically what the writer did well. Not just \"good hook\" \u2014 \u201Cthe contrarian claim in line 2 + the specific stat in line 4 make this pop.\u201D", icon: "\u2728" },
      { num: "02", title: "The Structural Call", desc: "Is there a structural issue? Address it first, before line edits. Line-editing a structurally-broken piece wastes both people\u2019s time.", icon: "\u{1F3D7}\uFE0F" },
      { num: "03", title: "Line + Teaching Embedded", desc: "Specific line notes, each naming the principle behind the change. Writer absorbs the rule, not just the fix.", icon: "\u{1F4DD}" },
    ], footer: "Rule: no structural call \u2192 don\u2019t give line feedback yet. Always resolve structure before craft." },
    { type: "principle", num: "01", title: "The Teaching-Embedded Note", intro: "Feedback that just fixes THIS piece helps the writer ship THIS piece. Feedback that embeds the teaching helps the writer ship every future piece. Same words, different mental model.", sectionTitle: "How To Embed Teaching In Every Note", sections: [
      { heading: "State the specific change", example: "\u201CLine 12: change \u2018helps teams\u2019 to \u2018cuts setup time from 4 hrs to 12 min.\u2019\u201D", note: "Every note should be specific enough that the writer knows exactly what to do." },
      { heading: "Name the principle behind it", example: "\u201C\u2014 the voice guide refuses vague verbs like \u2018helps\u2019; we commit to specific mechanisms + numbers.\u201D", note: "The \u2018why\u2019 is what the writer absorbs into their craft. Without it, they make the same mistake on the next piece." },
      { heading: "Give an example from an exemplar", example: "\u201CSee [exemplar piece], line 8, for a similar swap from vague to specific.\u201D", note: "Concrete examples lock the pattern in the writer\u2019s head. A rule without an exemplar is abstract; with one, it\u2019s actionable." },
      { heading: "Praise the adjacent thing they did right", example: "\u201CThe sentence right before this one is great \u2014 specific + punchy. Let\u2019s get line 12 to match.\u201D", note: "Directs the writer\u2019s attention to their own strength as the model for the fix. Self-referential teaching." },
    ], rule: "Every feedback note should leave the writer smarter, not just the piece better. If you\u2019re not teaching, you\u2019re just policing." },
    { type: "comparison", eyebrow: "VAGUE vs TAUGHT", title: "Same submission, two feedback styles", subtitle: "Vague feedback produces compliance. Taught feedback produces craft.", left: { title: "Vague Feedback (No Teaching)", color: "#EF4444", items: [
      { strong: "\u201CTighten this up.\u201D", note: "What does \u2018tighten\u2019 mean? Shorten? Remove filler? Sharpen the argument? Writer guesses." },
      { strong: "\u201CThis section isn\u2019t working for me.\u201D", note: "Taste proclamation. No principle. Writer can\u2019t replicate the fix next time." },
      { strong: "\u201CMake the CTA stronger.\u201D", note: "How? Writer will apply whatever \u2018stronger\u2019 means to them. 50% chance it\u2019s not what the director had in mind." },
      { strong: "\u201CGood job overall, just a few tweaks.\u201D", note: "What specifically was good? What specifically needs tweaks? Writer shipping better next time: zero chance." },
    ] }, right: { title: "Taught Feedback (Growth-Producing)", color: "#10B981", items: [
      { strong: "\u201CCut 30% of words in paragraph 3. Filler verbs (\u2018really\u2019, \u2018actually\u2019, \u2018kind of\u2019) are the easiest cuts. See voice guide pg 2.\u201D", note: "Specific + principle + reference. Writer knows what to do + why + where to check." },
      { strong: "\u201CSection 4 doesn\u2019t earn the claim in its first line. Either add proof (named customer + number) or cut the claim. Cardinal rule: no claim without proof within 2 sentences.\u201D", note: "Names the structural issue + the resolution options + the governing principle. Compounding teaching." },
      { strong: "\u201CCTA: \u2018Get Started\u2019 is generic. Apply the CTA rule: specific outcome + friction remover. E.g., \u2018See it work on your data \u2014 no signup, 90 sec.\u2019\u201D", note: "Rule named; template provided; writer can generate better CTAs going forward." },
      { strong: "\u201CThe hook in line 1 is strong \u2014 specific + contrarian. That\u2019s what we want every opener doing. Section 3 loses that energy; bring it back.\u201D", note: "Praises specifically; links to a pattern; sets the bar for the next pieces." },
    ] }, footer: "Rule: if you wouldn\u2019t want to receive the feedback you\u2019re giving, don\u2019t give it. Specific, principled, constructive \u2014 every time." },
    { type: "table", title: "Feedback Mode by Writer Stage", subtitle: "The same feedback style doesn\u2019t fit every writer. Calibrate to the writer\u2019s stage and growth goals.", columns: ["Writer Stage", "Feedback Emphasis", "Mode"], rows: [
      ["New to the team (month 1\u20133)", "Voice fluency + structural basics", "Heavy: line-level + teaching-embedded; frequent"],
      ["Solid but growing (month 4\u201312)", "Craft refinement + structural judgement", "Moderate: structural notes + one or two pattern teachings per piece"],
      ["Senior / independent (12+ months)", "Strategic calls + edge cases + mentoring others", "Light: directional notes + collaborative discussion"],
      ["Struggling / regressing", "Root-cause conversation: is it workload, misalignment, personal?", "Off-piece: 1:1 diagnosis before more piece-level feedback"],
      ["High-performing + ambitious", "Stretch assignments + high-stakes pieces + category-defining work", "Targeted: focus feedback on the 20% that will 10\u00D7 their impact"],
    ], footer: "Rule: calibrate feedback mode to stage. A new writer gets dense line edits; a senior writer gets strategic direction. Mismatched feedback frustrates both ends of the experience." },
    { type: "exercise", title: "Rewrite a Feedback Note", intro: "Take 3 notes you recently gave a writer. Apply the teaching-embedded framework.", items: [
      { num: "1", copy: "Paste 3 recent notes you gave. No edits yet.", answer: "Honest observation. Most notes are shorter + less teaching-embedded than directors think. Calibrating to reality is step 1." },
      { num: "2", copy: "For each, identify: is there a structural issue? A line issue? A voice issue? What\u2019s the principle behind the note?", answer: "If the note addresses a line issue while the real problem is structural, the feedback is mis-targeted. Re-order." },
      { num: "3", copy: "Rewrite each note: state the specific change + name the principle + reference an exemplar or rule.", answer: "Target: 2\u20134 sentences per note. Dense but specific. Teaching-embedded. Writer should leave smarter, not just corrected." },
      { num: "4", copy: "Give the rewritten notes to the writer + ask: which feedback mode teaches you more? Original or rewrite?", answer: "Your team\u2019s preferences will calibrate you. Senior writers often want less density; new writers often want more. Adjust by stage." },
    ] },
  ],
};
