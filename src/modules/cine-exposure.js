// Cinematography — Module 2: Camera Fundamentals & Exposure
export const cineExposureModule = {
  id: "cine02",
  title: "Camera Fundamentals & Exposure",
  type: "Rich Module",
  duration: "3.5 hours",
  desc: "Master your camera so you stop fighting it. The exposure triangle, the 180° shutter rule, aperture as storytelling, ISO + noise, and reading waveforms + false color.",
  topics: ["Exposure Triangle", "Aperture as Story", "180\u00B0 Shutter Rule", "ISO + Noise", "Waveforms + False Color", "White Balance"],
  quiz: [
    { q: "The three sides of the exposure triangle are:", opts: ["Aperture, focal length, ISO", "Aperture, shutter, ISO \u2014 each controls a specific aspect of the image (depth of field, motion blur, noise)", "Shutter, focal length, white balance", "ISO, sensor size, aperture"], correct: 1 },
    { q: "The 180\u00B0 shutter rule says that at 24fps, your shutter should be around 1/48 (typically 1/50). What\u2019s the purpose?", opts: ["Saves battery", "Produces natural motion blur that feels cinematic \u2014 shorter shutters (1/250, 1/500) produce the \u201Csoap opera\u201D look audiences unconsciously reject", "Matches display refresh rate", "Cheapest shutter setting"], correct: 1 },
    { q: "f/1.4 vs f/8 on a portrait: what changes most?", opts: ["Colour accuracy", "Depth of field \u2014 f/1.4 isolates the subject with shallow focus; f/8 keeps more of the background in focus. Each choice carries a different story meaning.", "Shutter speed", "White balance"], correct: 1 },
    { q: "\u201CFalse color\u201D displays in modern cameras show you:", opts: ["The white balance", "Which parts of the frame are at which exposure levels \u2014 specifically flags when skin tones are where you want them + highlights are near clipping", "The colour temperature", "A colour grading preview"], correct: 1 },
    { q: "A dual-native ISO camera gives you:", opts: ["Two separate cameras", "Two \u201Cclean\u201D ISO points where noise is minimised \u2014 typically 800 + 4000 \u2014 giving you a low-light option without dramatic noise cost", "Twice the pixels", "Two aperture modes"], correct: 1 },
    { q: "Your waveform shows highlights pegged at the top edge. This means:", opts: ["Perfect exposure", "Blown highlights \u2014 information is clipped + unrecoverable; stop down aperture, reduce ISO, or add ND filtration", "Underexposed", "Ready to shoot"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 2", title: "Camera Fundamentals", titleAccent: "& Exposure", subtitle: "Master your camera so you stop fighting it. The exposure triangle, 180\u00B0 shutter, aperture as story, and waveform monitoring.", meta: "Cinematography \u00B7 Tier I \u00B7 Module 2  |  7 Slides" },
    { type: "stats", eyebrow: "WHY TECHNICAL FLUENCY MATTERS", title: "The camera should be invisible to you \u2014 otherwise creative decisions die in the weeds", intro: "On set, you have seconds to react. If you\u2019re still doing math on exposure, you\u2019re missing the creative choices. Technical fluency is the prerequisite to creative freedom.", stats: [
      { num: "180\u00B0", label: "the cinematic shutter angle standard \u2014 1/50th at 24fps \u2014 produces the motion blur audiences expect" },
      { num: "2 stops", label: "typical headroom above key exposure you should leave for highlights to avoid clipping" },
      { num: "800 + 4000", label: "most common dual-native ISO points on modern cinema cameras \u2014 two clean exposure sweet spots" },
    ], subheading: "What Fluency With the Exposure Triangle Unlocks", bullets: [
      "Shallow depth of field for intimate portraits (f/1.4\u2013f/2.8)",
      "Deep focus for ensemble scenes (f/5.6\u2013f/11)",
      "Slow-motion that still feels cinematic via shutter management",
      "Low-light work without destroying the image with noise",
      "Reliable exposure on every shot without squinting at a monitor",
    ] },
    { type: "grid", eyebrow: "THE EXPOSURE TRIANGLE", title: "Three controls, one image", subtitle: "Every exposure decision trades across these three. Understanding the trades is the whole craft.", items: [
      { num: "01", title: "Aperture (f-stop)", desc: "Controls depth of field + light. f/1.4 = shallow + bright. f/16 = deep + dim.", icon: "\u{1F441}\uFE0F" },
      { num: "02", title: "Shutter (angle or 1/x sec)", desc: "Controls motion blur + light. 180\u00B0 = natural. Higher = crunchy. Lower = dreamy.", icon: "\u23F1\uFE0F" },
      { num: "03", title: "ISO / Gain", desc: "Controls sensitivity + noise. Native ISO = cleanest. Pushing = noisier image.", icon: "\u{1F39B}\uFE0F" },
      { num: "04", title: "ND Filters (the 4th control)", desc: "Not part of the triangle, but the outdoor cinematographer\u2019s best friend \u2014 lets you keep wide aperture in bright light.", icon: "\u{1F576}\uFE0F" },
    ], footer: "Rule: aperture first (for story). Shutter at 180\u00B0. Then ISO or ND to reach proper exposure. This order protects the creative intent." },
    { type: "principle", num: "01", title: "Aperture as Storytelling, Not Just Exposure", intro: "Most beginners see aperture as a way to get the shot exposed correctly. Cinematographers see it as a story choice first. The f-stop carries meaning before it carries light.", sectionTitle: "What Different Apertures Say to the Audience", sections: [
      { heading: "f/1.4 \u2013 f/2 \u2014 Intimate, subjective, isolated", example: "Shallow focus. Subject isolated from the world. Face becomes the entire point. Often used in emotional close-ups.", note: "Great for: intimacy, isolation, interior emotional moments. Avoid for: group scenes, ensemble, wide context needed." },
      { heading: "f/2.8 \u2013 f/4 \u2014 Narrative default, portrait-friendly", example: "Most flattering for close-ups. Enough separation to feel cinematic; enough depth to keep key action sharp.", note: "Industry default for narrative portrait work. Safe + strong. Where most of your work will live." },
      { heading: "f/5.6 \u2013 f/8 \u2014 Group, ensemble, context-forward", example: "Characters + environment both sharp. Works when the space is part of the story.", note: "Great for: ensemble scenes, establishing shots, scenes where setting matters. Avoid for: intimate close-ups where isolation matters." },
      { heading: "f/11 \u2013 f/16 \u2014 Epic, documentary, depth-max", example: "Deep focus. Everything crisp. Used in sweeping landscapes or documentary contexts.", note: "Watch for diffraction softening above f/11 on most lenses. Also light-hungry \u2014 plan accordingly." },
    ], rule: "Pick aperture for the scene\u2019s emotional need first. Adjust ISO or ND to reach proper exposure. Never compromise your chosen aperture because it\u2019s convenient." },
    { type: "comparison", eyebrow: "BEGINNER vs CINEMATIC EXPOSURE", title: "Two ways to shoot the same scene", subtitle: "Same camera, same subject. The beginner fights for correct exposure. The cinematographer makes deliberate creative choices.", left: { title: "Beginner Approach", color: "#EF4444", items: [
      { strong: "Auto-exposure on \u2014 camera chooses settings", note: "Camera optimises for \u2018normal.\u2019 Creative intent impossible." },
      { strong: "Shutter set to 1/125 or 1/250 without thinking", note: "Produces unnatural motion. The \u2018video\u2019 look, not cinema." },
      { strong: "Aperture chosen based on whatever gets correct exposure", note: "Story-emotional choice not made. Aperture is accidental." },
      { strong: "Eyeballs exposure on LCD \u2014 no waveform / false color", note: "Exposure drift + surprise problems in post. Recoverable only to a point." },
    ] }, right: { title: "Cinematic Approach", color: "#10B981", items: [
      { strong: "Manual exposure, chosen per shot with story in mind", note: "Each choice carries intent. Camera serves the vision, not vice versa." },
      { strong: "Shutter locked at 180\u00B0 (1/48 or 1/50) for 24fps; adjusted only for creative effect", note: "Baseline cinematic motion. Any deviation is deliberate." },
      { strong: "Aperture chosen for depth of field first (story), exposure balanced via ND or ISO", note: "Story-first aperture. f/1.8 because this moment is intimate, not because it was bright enough." },
      { strong: "False color + waveform checked on every setup", note: "Exposure is known, not guessed. Skin tones land at 55\u201365 IRE consistently; highlights protected." },
    ] }, footer: "Rule: the \u2018cinematic look\u2019 is not a filter or an app. It\u2019s the accumulated result of intentional exposure decisions, shot by shot." },
    { type: "table", title: "Monitoring Tools \u2014 What Each Tells You", subtitle: "Modern cameras give you technical exposure tools beyond eyeballing the LCD. Use them on every setup.", columns: ["Tool", "What It Shows", "When To Use"], rows: [
      ["Waveform", "Luminance of image mapped across horizontal axis; exact exposure zones", "Every setup \u2014 protects highlights from clipping + ensures consistent mid-tones"],
      ["False Color", "Colour-codes image by exposure zone (green = mid; pink = skin; orange = highlights)", "Nailing skin tones \u2014 the #1 priority in most narrative work"],
      ["Zebras", "Diagonal stripes over pixels above a chosen threshold (often 95\u201399%)", "Last-line defence against clipped highlights \u2014 on-camera, simple"],
      ["Histogram", "Distribution of brightness values across frame", "Photo-world carryover; useful but waveform is more precise for motion"],
      ["Vectorscope", "Chroma (colour) values; useful for skin tone check via \"I-line\"", "Ensuring skin tones align on the I-line \u2014 industry-standard check"],
      ["Focus peaking", "Highlights in-focus edges with colour outline", "Manual focus work \u2014 every shoot"],
    ], footer: "Rule: configure your monitor to show these tools by default. Learning to read them fluently takes weeks; ignoring them costs years." },
    { type: "exercise", title: "The Aperture Study", intro: "Shoot the same subject 6 times at 6 different apertures. Compare how depth of field + exposure shifted. Build your intuition.", items: [
      { num: "1", copy: "Pick one subject (face, object) + one location. Set shutter at 1/50 + ISO at 800. Lock both.", answer: "Only aperture changes. This is a controlled experiment \u2014 everything else constant." },
      { num: "2", copy: "Shoot at f/1.8, f/2.8, f/4, f/5.6, f/8, f/11. Adjust ISO or ND each time to keep exposure matched.", answer: "If you don\u2019t have ND filters, shoot in even indoor light where ISO adjustments are easy. The point is isolating aperture\u2019s effect." },
      { num: "3", copy: "Compare the 6 frames side by side. Note: depth of field, bokeh quality, subject-background separation.", answer: "Your eye will now learn what each aperture looks + feels like. This is muscle memory formation \u2014 critical for later creative decisions." },
      { num: "4", copy: "Write 200 words: which aperture feels most \u2018intimate\u2019? Which feels most \u2018documentary\u2019? Which do you reach for instinctively now?", answer: "The written reflection locks in the lesson. You\u2019ve developed preferences \u2014 now you can apply them deliberately on your next shoot." },
    ] },
  ],
};
