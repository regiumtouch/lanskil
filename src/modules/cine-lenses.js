// Cinematography — Module 4: Lenses & Focal Length
export const cineLensesModule = {
  id: "cine04",
  title: "Lenses & Focal Length",
  type: "Rich Module",
  duration: "2.5 hours",
  desc: "The lens you choose tells half the story. Focal length, prime vs zoom, anamorphic vs spherical, and how distortion shapes emotion \u2014 from 14mm unease to 85mm intimacy.",
  topics: ["Focal Length Basics", "Prime vs Zoom", "Anamorphic vs Spherical", "Distortion as Story", "ND + Diffusion Filters", "Lens Choice for Emotion"],
  quiz: [
    { q: "A wide-angle lens (14\u201324mm) on a close-up of a face:", opts: ["Flatters the subject", "Distorts the face \u2014 nose appears larger, face stretched; creates unease or menace (used in horror, Lighthouse, Hunger Games)", "Looks normal", "Reduces light"], correct: 1 },
    { q: "Anamorphic lenses are used in films like Dune + Blade Runner 2049 because:", opts: ["Cheapest option", "They produce horizontal oval bokeh + horizontal lens flares + distinctive wide aspect \u2014 readable as \u201Cfilm\u201D to audiences", "Smallest size", "Easiest to focus"], correct: 1 },
    { q: "An 85mm lens on a portrait tends to:", opts: ["Distort", "Compress features flatteringly, separate subject from background via shallow depth, and create intimate feel \u2014 often called a \u201Cportrait lens\u201D", "Distort background", "Look wide"], correct: 1 },
    { q: "Prime lenses are preferred over zooms by most narrative cinematographers because:", opts: ["They\u2019re cheaper", "Better image quality, wider max aperture (more light + shallow DOF), forces deliberate focal length choice, smaller + lighter", "They\u2019re easier to focus", "Status"], correct: 1 },
    { q: "ND filters (neutral density) do what for a cinematographer?", opts: ["Add colour", "Reduce light hitting the sensor without affecting colour \u2014 lets you shoot at wide aperture (f/2) in bright daylight while maintaining 180\u00B0 shutter", "Warm up skin tones", "Cheat for focus"], correct: 1 },
    { q: "The \u201Clens distortion = storytelling\u201D principle means:", opts: ["Buy expensive lenses", "Each focal length carries emotional meaning \u2014 wide for unease/intimacy, normal for neutrality, long for isolation + compression \u2014 choose by feel, not by convenience", "Avoid distortion", "Use all lenses equally"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 4", title: "Lenses &", titleAccent: "Focal Length", subtitle: "The lens you choose tells half the story. Wide for unease, normal for neutrality, long for isolation.", meta: "Cinematography \u00B7 Tier I \u00B7 Module 4  |  7 Slides" },
    { type: "stats", eyebrow: "WHY LENS CHOICE IS HALF THE STORY", title: "Two shots of the same subject with different lenses create opposite emotional impressions", intro: "Lens choice is rarely celebrated the way lighting is \u2014 but it carries equal emotional weight. A 24mm close-up and an 85mm close-up of the same face tell different stories.", stats: [
      { num: "24\u201335mm", label: "range used for intimate + uneasy close-ups \u2014 distorts features subtly, pulls audience in" },
      { num: "50mm", label: "most \u2018neutral\u2019 focal length on full-frame \u2014 closest to human eye perspective" },
      { num: "85\u2013135mm", label: "portrait range \u2014 compresses + flatters + separates subject from background" },
    ], subheading: "What a Cinematographer Evaluates When Picking a Lens", bullets: [
      "Story need: is this scene intimate, neutral, isolated, epic?",
      "Distortion: does the scene need subtle warping (wide) or smooth compression (long)?",
      "Depth of field capacity: how shallow does the scene need to go?",
      "Light sensitivity: max aperture matters for low-light + shallow DOF",
      "Character: every lens has a personality \u2014 vintage glass vs modern; anamorphic vs spherical",
    ] },
    { type: "grid", eyebrow: "FOCAL LENGTH \u2014 THE EMOTIONAL MAP", title: "Each focal length does specific emotional work", subtitle: "These are full-frame equivalents. On APS-C or Super 35, multiply by ~1.5 for equivalent field of view.", items: [
      { num: "01", title: "14\u201324mm \u2014 Wide + Uneasy", desc: "Distorts faces in close-up. Creates intimacy + discomfort. Horror + psychological thrillers.", icon: "\u{1F30A}" },
      { num: "02", title: "28\u201335mm \u2014 Environmental + Documentary", desc: "Subject + space both visible. Reads naturalistic. Documentary + vérité.", icon: "\u{1F3E2}" },
      { num: "03", title: "50mm \u2014 Neutral / Eye-Level", desc: "Closest to human vision. Honest + unfussy. The \u2018nifty fifty\u2019 default.", icon: "\u{1F441}\uFE0F" },
      { num: "04", title: "85mm \u2014 Portrait + Intimate", desc: "Flattering compression. Shallow DOF possible. Go-to for narrative close-ups.", icon: "\u{1F60A}" },
      { num: "05", title: "100\u2013135mm \u2014 Isolated + Voyeuristic", desc: "Compresses background. Subject isolated. Feels observed \u2014 often from distance.", icon: "\u{1F52D}" },
      { num: "06", title: "200mm+ \u2014 Compressed + Epic", desc: "Heavy compression, dramatic bokeh. Used for sports, nature, action compression.", icon: "\u{1F3AF}" },
    ], footer: "Rule: start from the emotion; choose the lens. Don\u2019t start from \u201Cwhich lens do I have\u201D and retrofit the emotion." },
    { type: "principle", num: "01", title: "Wide Lenses for Intimacy, Long Lenses for Isolation", intro: "Counterintuitive for beginners: wide lenses ENHANCE intimacy when close. Long lenses ISOLATE the subject. Understanding why unlocks a lot of creative choices.", sectionTitle: "Why Each Lens Works The Way It Does", sections: [
      { heading: "Wide lenses up close \u2014 intimate + uneasy", example: "Distort features (nose larger, corners stretched). Audience feels physically close. Often reads as unease \u2014 The Lighthouse, Joker.", note: "Close distance + wide FOV = we\u2019re IN their space. Sometimes uncomfortable; sometimes intimate." },
      { heading: "Long lenses from distance \u2014 observed + isolated", example: "Flattens subject against background. Narrow FOV = tight focus on subject. Often reads as surveillance or emotional distance.", note: "The audience is watching the character, not with them. Useful for isolation, paranoia, formal distance." },
      { heading: "Normal lenses (50mm) \u2014 honest + neutral", example: "No distortion, no compression. What you see is what the camera sees. Documentary, straight narrative.", note: "The lens that doesn\u2019t editorialize. Use when the scene\u2019s emotion should come from performance, not from lens effect." },
      { heading: "Mixed lens approach \u2014 narrative signal", example: "Many DPs vary focal length within a scene: wide to establish, long to close in emotionally.", note: "Changing focal length communicates emotional shift. Audiences feel the change subconsciously." },
    ], rule: "The lens choice is your second most important creative decision (after subject). Make it with the same intention you\u2019d give to lighting." },
    { type: "comparison", eyebrow: "WRONG LENS vs RIGHT LENS", title: "Two takes of the same close-up", subtitle: "Same face, same scene, different lens. Radically different emotional impact.", left: { title: "Wrong Lens Choice", color: "#EF4444", items: [
      { strong: "Scene is intimate confession; shooter uses 24mm", note: "Distorts face awkwardly. Actor looks cartoonish. Audience pulled out of emotion." },
      { strong: "Scene is group ensemble; shooter uses 85mm f/1.4", note: "Can\u2019t fit everyone. Selective focus means only one person sharp. Ensemble feeling lost." },
      { strong: "Scene is surveillance/stalking; shooter uses 35mm up close", note: "Too intimate. Audience feels present in the menace rather than witnessing from distance." },
    ] }, right: { title: "Right Lens Choice", color: "#10B981", items: [
      { strong: "Intimate confession: 85mm at close range, f/2.8", note: "Flattering compression. Shallow DOF. Actor\u2019s emotion unobstructed. Audience leans in." },
      { strong: "Group ensemble: 24\u201335mm at f/5.6", note: "Everyone in frame. Everyone in focus. Relationships visible. Group energy captured." },
      { strong: "Surveillance/stalking: 135mm from distance, f/2.8", note: "Compresses subject into background. Feels observed. Audience is outside looking in \u2014 the point." },
    ] }, footer: "Rule: the \u2018best lens\u2019 is the one that serves the scene\u2019s emotional intent. There is no universally correct focal length." },
    { type: "table", title: "Filter Decision Matrix", subtitle: "Filters modify the light before it hits the sensor. Each has a specific job.", columns: ["Filter", "What It Does", "When To Use"], rows: [
      ["ND (Neutral Density)", "Reduces light without affecting colour", "Outdoor shoots when you need to keep aperture wide + maintain 180\u00B0 shutter"],
      ["Variable ND", "Adjustable ND in one filter", "Run-and-gun work; quick light changes; budget alternative to a full ND set"],
      ["Polariser (CPL)", "Cuts reflections + deepens sky / foliage", "Exteriors with reflective surfaces (water, glass, painted metal)"],
      ["Diffusion (Pro-Mist / Black Pro-Mist)", "Softens highlights + skin tones; creates slight glow", "Portrait-heavy narrative work; skin tone refinement; vintage feel"],
      ["IRND", "ND filter that also blocks infrared contamination", "Digital cinema cameras at high ND levels \u2014 prevents IR colour shift"],
      ["Graduated ND", "Darker top, clear bottom \u2014 balances bright sky with darker foreground", "Landscape + exterior work where sky is much brighter than ground"],
    ], footer: "Rule: ND + diffusion + polariser are the 3 most-used filter types for narrative cinematography. Start with these before buying specialty filters." },
    { type: "exercise", title: "The Focal Length Experiment", intro: "Pick one subject + shoot them at 4 focal lengths. See the emotional difference with your own eyes.", items: [
      { num: "1", copy: "Pick a person or object as subject. Mark their exact position.", answer: "Position must stay constant. Only lens changes. This is a controlled test \u2014 variables locked except focal length." },
      { num: "2", copy: "Shoot at 24mm (or equivalent wide). Walk closer so subject fills similar frame area.", answer: "Note the distortion + how the background relates to subject. The subject is different from the prior shot in character, even if same emotion." },
      { num: "3", copy: "Shoot at 50mm. Match subject size by moving yourself.", answer: "Note how the image feels more \u2018normal.\u2019 This is your eye-level perspective. No editorializing from the lens." },
      { num: "4", copy: "Shoot at 85mm + 135mm (or as long as you have). Match subject size again.", answer: "The background compresses dramatically. Subject separates more. Feels intimate (85) or isolated (135). Notice the shift \u2014 and remember it for future scenes." },
    ] },
  ],
};
