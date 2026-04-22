// Cinematography — Module 5: Lighting Fundamentals
export const cineLightingModule = {
  id: "cine05",
  title: "Lighting Fundamentals",
  type: "Rich Module",
  duration: "3.5 hours",
  desc: "Light is the cinematographer's paint. The 5 qualities of light, three-point setup, motivated vs unmotivated, natural light, and why practicals matter.",
  topics: ["Qualities of Light", "Three-Point Lighting", "Motivated Lighting", "High-Key vs Low-Key", "Natural + Golden Hour", "Practicals"],
  quiz: [
    { q: "The 5 controllable qualities of any light source are:", opts: ["Brightness only", "Intensity, direction, colour, quality (hard/soft), and distance/size relative to subject", "On / off", "Battery life"], correct: 1 },
    { q: "In three-point lighting, the backlight\u2019s job is:", opts: ["Add brightness", "Separate subject from background by creating a rim of light on hair/shoulders \u2014 manufactures 3D depth in a 2D image", "Fill shadows", "Light the background"], correct: 1 },
    { q: "\u201CMotivated lighting\u201D means:", opts: ["Lights controlled by mood", "Every light in the scene has a visible or implied source in the world of the film (window, lamp, fire, practical) \u2014 makes lighting feel real", "Lights set high", "Automatic exposure"], correct: 1 },
    { q: "High-key lighting is characterised by:", opts: ["Low angles", "High fill ratio, soft shadows, bright overall image \u2014 used in sitcoms, comedies, cheerful tones", "Dark shadows", "Only natural light"], correct: 1 },
    { q: "Low-key lighting is characterised by:", opts: ["Bright everywhere", "Low fill, heavy shadows, contrast + drama \u2014 used in noir, thriller, horror, Godfather\u2019s interior scenes", "All keys lit", "Bright background"], correct: 1 },
    { q: "Golden hour refers to:", opts: ["Any sunny hour", "The ~60 min after sunrise and before sunset when sun is low + warm; produces soft, directional, flattering light", "Mid-day", "Night exteriors"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 5", title: "Lighting", titleAccent: "Fundamentals", subtitle: "Light is the cinematographer\u2019s paint. Qualities of light, three-point setup, motivated lighting, and the natural light playbook.", meta: "Cinematography \u00B7 Tier II \u00B7 Module 5  |  7 Slides" },
    { type: "stats", eyebrow: "WHY LIGHTING DECIDES EVERYTHING", title: "Cinematography and lighting are almost synonyms \u2014 where light goes, story goes", intro: "Most of what audiences perceive as \u201Ccinematic\u201D comes down to lighting. Great composition with flat lighting looks like a home video. Average composition with deliberate lighting looks like cinema.", stats: [
      { num: "5", label: "controllable qualities of any light source \u2014 master these + you can build any look" },
      { num: "3", label: "points in the classic lighting setup (key / fill / back) \u2014 and the entire tradition of cinematography builds from here" },
      { num: "1", label: "golden rule: motivated lighting. Every light needs a reason in the world of the film." },
    ], subheading: "What Great Lighting Does", bullets: [
      "Shapes the subject with light + shadow, creating dimensional + sculptural feel",
      "Establishes mood before dialogue \u2014 warm / cool / contrasty / bright / dark",
      "Guides audience attention via brightest area of the frame",
      "Makes the world feel real via motivation (windows, lamps, fires, sky)",
    ] },
    { type: "grid", eyebrow: "THE FIVE QUALITIES OF LIGHT", title: "Every light source is controllable along these dimensions", subtitle: "Master these + you can recreate any look with whatever gear you have.", items: [
      { num: "01", title: "Intensity", desc: "Brightness. Controlled by source power, distance to subject, diffusion.", icon: "\u{1F506}" },
      { num: "02", title: "Direction", desc: "Where the light comes from relative to subject. Front, side, back, top, bottom.", icon: "\u2197\uFE0F" },
      { num: "03", title: "Colour", desc: "Temperature (warm/cool) + hue. Kelvin + gels.", icon: "\u{1F308}" },
      { num: "04", title: "Quality (hard / soft)", desc: "Small, distant sources = hard shadows. Large, close sources = soft shadows.", icon: "\u{1F324}\uFE0F" },
      { num: "05", title: "Size (relative)", desc: "Bigger source relative to subject = softer. Size matters more than watts for softness.", icon: "\u{1F4CF}" },
    ], footer: "Rule: talking about light in these 5 terms (not \u201Cwe need a bigger light\u201D) makes you instantly more articulate on set + clearer in collaboration." },
    { type: "principle", num: "01", title: "Three-Point Lighting \u2014 The Foundation", intro: "The classic three-light setup (key + fill + back) is the workhorse of narrative cinematography. Master it first \u2014 then you can break it on purpose. Every other lighting setup starts from understanding this.", sectionTitle: "The Three Lights + Their Jobs", sections: [
      { heading: "Key Light \u2014 The Main Light", example: "Placed ~45\u00B0 off-axis from camera + slightly above eye-level. Motivated by a window, lamp, or sun.", note: "Does 70\u201380% of the heavy lifting. Provides the main exposure + shaping of the face." },
      { heading: "Fill Light \u2014 Softens Shadows", example: "Placed opposite the key, lower intensity. Fills the shadow side of the face without competing with the key.", note: "The ratio of key:fill defines how dramatic your lighting feels. 8:1 ratio = dramatic. 2:1 ratio = flat / commercial." },
      { heading: "Backlight (Rim / Hair Light) \u2014 Creates Separation", example: "Placed behind subject, shining toward camera. Creates a rim of light on hair + shoulders.", note: "This is what makes the subject pop off the background. Without it, subjects feel pasted-on / 2D." },
      { heading: "Background Light (Optional 4th) \u2014 Adds Depth", example: "Lights the background subtly so it\u2019s not dead black; often coloured or gelled.", note: "Makes the world behind the subject feel inhabited. Especially important in dark scenes." },
    ], rule: "Every narrative lighting setup works off variations of three-point. Learn it cold before experimenting. Once you know it, you can break any rule." },
    { type: "comparison", eyebrow: "FLAT vs SHAPED LIGHTING", title: "Two portraits of the same subject", subtitle: "Same camera, same exposure. One lit flat; one lit with shape. Dramatic difference in cinematic feel.", left: { title: "Flat Lighting (Amateur)", color: "#EF4444", items: [
      { strong: "Single on-camera LED at full brightness", note: "No directionality. Subject evenly lit + flat. Reads as \u2018video.\u2019" },
      { strong: "No shadows on face \u2014 subject looks 2D", note: "Without shadows, no sense of dimension. The face feels like a photograph pasted on the background." },
      { strong: "Background identical brightness to subject", note: "Subject doesn\u2019t separate. Eye has nowhere specific to go." },
      { strong: "Overall: bright but uncinematic", note: "Technically \u2018exposed\u2019 but emotionally lifeless." },
    ] }, right: { title: "Shaped Lighting (Cinematic)", color: "#10B981", items: [
      { strong: "Key light 45\u00B0 off-axis, soft (big window or diffused source)", note: "Shape on the face. Cheekbones, jawline visible. Dimensional." },
      { strong: "Fill light at 1/4 key intensity, opposite side", note: "Shadows still visible but readable. 4:1 ratio feels dramatic but not punishing." },
      { strong: "Backlight rim on hair + shoulder", note: "Subject pops forward of the background. 3D feel in a 2D frame." },
      { strong: "Background subtly lit / slightly darker than subject", note: "Eye goes where we want. Depth maintained." },
    ] }, footer: "Rule: the difference between \u2018video\u2019 + \u2018cinema\u2019 is often just motivated shape in the key + a backlight. Cheap to execute; huge impact." },
    { type: "table", title: "Natural Light Playbook", subtitle: "You don\u2019t need expensive lights. The sun + sky + reflectors can produce cinematic results. Here\u2019s the timing playbook.", columns: ["Time of Day", "Quality", "What To Shoot"], rows: [
      ["Sunrise / Sunset (\u2018magic hour\u2019)", "Warm, directional, soft", "Anything beautiful. 30\u201345 min window both morning + evening."],
      ["Golden hour (1hr after sunrise / before sunset)", "Warm, low angle, long shadows", "Portraits, wide landscape, romantic scenes"],
      ["Blue hour (pre-sunrise / post-sunset)", "Cool + soft, magical quality", "Moody scenes, night-for-blue-hour cheats, atmospheric exteriors"],
      ["Overcast midday", "Soft, shadowless, neutral", "Documentary, ensemble scenes where even lighting serves"],
      ["Harsh noon sun", "Hard + top-light + unflattering", "Avoid for portraits; can work for action, noir shadows, or deliberate harshness"],
      ["Night exterior + streetlights", "Sodium + mercury + LED mix \u2014 messy", "Difficult; typically lit with additional sources even if \u2018natural\u2019"],
    ], footer: "Rule: schedule your important shots around light, not around logistics. Magic hour is brief \u2014 plan accordingly." },
    { type: "exercise", title: "The Four-Way Lighting Test", intro: "Light the same person 4 ways. Compare the mood of each. Learn what each setup communicates.", items: [
      { num: "1", copy: "Light 1: Key only. Single light 45\u00B0 off-axis. No fill. Shoot.", answer: "Dramatic. Strong shadows on face\u2019s dark side. Reads as noir / tension. Note how much mood comes from shadow alone." },
      { num: "2", copy: "Light 2: Key + fill. Add a second light, opposite side, at 1/4 intensity.", answer: "More balanced. Still shaped. Classic narrative / portrait feel. This is your safe default." },
      { num: "3", copy: "Light 3: Key + fill + backlight. Add rim from behind.", answer: "Subject now pops off background. The cinematic feel arrives. This is the classic three-point result." },
      { num: "4", copy: "Light 4: Low-key \u2014 single side light only, no fill. Most of the face in shadow.", answer: "Mysterious, dramatic, noir. Compare to Light 1 \u2014 the difference is the intensity + angle of the single source." },
    ] },
  ],
};
