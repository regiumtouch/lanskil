// Cinematography — Module 2: Camera Fundamentals & Exposure
export const cineExposureModule = {
  id: "cine02",
  title: "Camera Fundamentals & Exposure",
  type: "Rich Module",
  duration: "3.5 hours",
  desc: "Master your camera so you stop fighting it. The exposure triangle, the 180° shutter rule, aperture as storytelling, ISO + noise, and reading waveforms + false color.",
  topics: ["Exposure Triangle", "Aperture as Story", "180\u00B0 Shutter Rule", "ISO + Noise", "Waveforms + False Color", "White Balance"],
  quiz: [
    { q: "You\'re at 24fps, ISO 800, f/2.8, 1/50 shutter in bright noon sun. The waveform says you\'re 3 stops over. Story calls for shallow DOF. What\'s the correct move?", opts: ["Stop down to f/8 \u2014 brings exposure to key and keeps shutter cinematic", "Raise shutter to 1/400 to kill the light while holding f/2.8", "Add 3 stops of ND, hold f/2.8 and 1/50 \u2014 ND is the 4th control for exactly this case", "Drop ISO to 100 and accept slightly deeper DOF to compensate"], correct: 2 },
    { q: "A dual-native-ISO camera has clean points at 800 and 4000. You\'re shooting a dim interior at ISO 1600 and the image is noisier than expected. Why?", opts: ["1600 is between native points, so the sensor is gaining up from 800 + inheriting noise without reaching the second clean circuit", "1600 is always a \u2018half-step\u2019 ISO and dual-native cameras skip those entirely", "The camera is running in the wrong color space and adding chroma noise", "You need to drop to ISO 400 \u2014 the first native point is rarely the advertised one"], correct: 0 },
    { q: "Skin tones on your false-color monitor are reading pink/magenta (overexposed highlights zone) while the rest of the frame looks right. Shutter is locked at 1/50. What\'s the first adjustment?", opts: ["Raise shutter to 1/100 to darken only the face \u2014 other areas are fine", "Stop down aperture 1/2 to 1 stop, then recheck \u2014 faces should land in the skin-tone zone around 55\u201365 IRE", "Drop ISO two full stops \u2014 skin is the priority so protect it aggressively", "Add a minus-green gel to the key \u2014 the issue is color cast, not exposure"], correct: 1 },
    { q: "You want slow-motion chase footage at 96fps that still reads cinematic. Standard 180\u00B0 at 24fps is 1/50. What shutter should you set at 96fps, and why?", opts: ["1/50 \u2014 keep the cinematic shutter value you already know", "1/200 \u2014 quadruple the base to match the quadrupled frame rate and preserve 180\u00B0 equivalence", "1/500 \u2014 faster shutters at high frame rates make slow-mo sharper", "Whatever the auto setting picks \u2014 high frame rates auto-correct shutter"], correct: 1 },
    { q: "Exterior portrait at golden hour: you want shallow focus (f/2) + 180\u00B0 shutter (1/50) at 24fps on a camera with base ISO 800. You\'re still 2 stops over. You have no ND. What\'s the least-destructive workaround?", opts: ["Push shutter to 1/200 \u2014 losing 2 stops of light without touching aperture or ISO", "Use a variable ND or polariser if available; failing that, scout shade or wait until later in golden hour to reduce incident light", "Stop down to f/4 and live with slightly deeper focus than planned", "Crank ISO to the second native point (4000) \u2014 you\u2019ll overexpose 4 more stops but the highlights will roll off softly"], correct: 1 },
    { q: "Your waveform shows highlights pegging the 100 IRE line on a Log clip. You\'re shooting in S-Log3 and believe Log \u2018protects highlights.\u2019 What\'s actually happening?", opts: ["Log gives you infinite highlight latitude \u2014 the waveform just looks scary but data is preserved", "Log extends highlight roll-off but the sensor still clips \u2014 once you\u2019re pegged at the top, data is gone regardless of gamma", "Only RAW clips can truly clip; Log clips retain hidden information below the top line", "The waveform is showing the monitoring LUT, not the actual Log data \u2014 the file is safe"], correct: 1 },
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
