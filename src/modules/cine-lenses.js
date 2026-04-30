// Cinematography — Module 4: Lenses & Focal Length
export const cineLensesModule = {
  id: "cine04",
  title: "Lenses & Focal Length",
  type: "Rich Module",
  duration: "2.5 hours",
  desc: "The lens you choose tells half the story. Focal length, prime vs zoom, anamorphic vs spherical, and how distortion shapes emotion \u2014 from 14mm unease to 85mm intimacy.",
  topics: ["Focal Length Basics", "Prime vs Zoom", "Anamorphic vs Spherical", "Distortion as Story", "ND + Diffusion Filters", "Lens Choice for Emotion"],
  quiz: [
    { q: "Tight 2-person interior dialogue scene. Director says \"make it feel intimate but slightly uncomfortable \u2014 like we\'re too close.\" You have 24mm, 35mm, 50mm, 85mm primes. What\'s the strongest pick?", opts: ["85mm from outside the door \u2014 shallow compression creates intimacy at distance", "50mm at normal conversational distance \u2014 neutral lens reads honest", "24mm at close range \u2014 subtle facial distortion creates the \u2018too close\u2019 unease the director described", "35mm on a slider \u2014 movement adds the discomfort"], correct: 2 },
    { q: "On a full-frame sensor, an 85mm f/1.4 portrait at 6 ft reads perfectly. You switch to a Super 35 body, same lens. What happens to the shot if you want to preserve the same framing?", opts: ["Nothing \u2014 focal length is focal length; the image stays identical", "Your effective field of view narrows (~1.5x crop), so you must step back to maintain framing, which also reduces depth-of-field compression slightly", "The lens becomes a wide angle on Super 35", "The f-stop changes to approximately f/2 equivalent"], correct: 1 },
    { q: "You\'re shooting a stalker-POV scene: villain watches the protagonist from across the street. The director wants \u2018observed, not present.\u2019 Best lens choice?", opts: ["24mm close to the protagonist \u2014 viewer feels physically with them", "135mm from the stalker\u2019s position \u2014 compressed, narrow, voyeuristic; reads as surveillance", "50mm from the stalker\u2019s position \u2014 neutral and honest", "85mm f/1.4 wide open on the protagonist \u2014 shallow focus sells the menace"], correct: 1 },
    { q: "A film budget allows one lens purchase for a narrative feature. The DP picks a set of primes over a workhorse 24\u201370 f/2.8 zoom. What\u2019s the craft reason, not the price reason?", opts: ["Primes are always sharper than zooms at every aperture", "Prime sets force a focal-length decision per shot, give wider max apertures for shallower DOF + low light, and keep the DP visually honest about composition", "Primes are smaller so they\u2019re easier to rig on gimbals", "Zooms introduce chromatic aberration that cannot be fixed in post"], correct: 1 },
    { q: "Outdoor noon, 24fps, 1/50 shutter, and you want to shoot a portrait at f/1.8 for shallow focus. You\u2019ve stacked 6 stops of ND. Skin still looks slightly off \u2014 shifting magenta under the ND. What\'s likely going on?", opts: ["The lens has a tint at wide apertures you need to WB around", "The ND is letting infrared light through (IR contamination) \u2014 you need an IRND or IR-cut filter at high ND stack values", "The sensor is clipping red and recovering in post will fix it", "F/1.8 creates magenta fringing that can\u2019t be avoided on any lens"], correct: 1 },
    { q: "Production designer loves practical neon signs in every shot. You\'re shooting narrative with spherical primes. Director asks for \u2018that Blade Runner 2049 feel\u2019 but budget won\u2019t cover anamorphic lenses. What\'s a defensible approach?", opts: ["Shoot 16:9 and crop to 2.39:1 in post; pair with Pro-Mist diffusion to bloom the practicals + use oval aperture inserts for horizontal bokeh hints", "Refuse \u2014 you can\u2019t deliver that look without anamorphic glass and you shouldn\u2019t pretend", "Shoot wide open at f/1.4 on every shot to mimic anamorphic bokeh size", "Tell the director to change the reference \u2014 the look is copyrighted"], correct: 0 },
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
