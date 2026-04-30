// Cinematography — Module 1: Visual Storytelling Foundations
export const cineStorytellingModule = {
  id: "cine01",
  title: "Visual Storytelling Foundations",
  type: "Rich Module",
  duration: "3 hours",
  desc: "Learn to see the world through a cinematographer's eye. The cinematographer's role, the grammar of cinema, and how frames carry emotion before dialogue ever arrives.",
  topics: ["Cinematographer's Role", "Grammar of Cinema", "Reading Films", "Mood & Tone", "Pre-Visualisation", "Scene Study"],
  quiz: [
    { q: "A director tells you \"I want this kitchen scene to feel lonely, but the script is just a woman eating cereal.\" You have 3 hours + a small crew. What\'s the cinematographer\'s first move?", opts: ["Block the actor + start shooting the master, then figure out coverage from there", "Pull 4\u20135 reference frames of \u2018lonely interiors\u2019, agree with the director which one feels right, and build shot choices backward from that image", "Light the room evenly so every angle is usable, then decide mood in the grade", "Shoot handheld to add emotional texture to an otherwise static scene"], correct: 1 },
    { q: "You\'re watching a 2-minute dialogue scene in a film you want to learn from. Which viewing strategy gives you the most cinematographic insight?", opts: ["Watch it once at full speed, then move on so you absorb the feel without over-analysing", "Watch once for feel, once muted to isolate image grammar, then frame-by-frame through the key beat", "Pull the screenplay + read along while watching so you understand intent shot-by-shot", "Study only the shot sizes, since those are the core grammar of coverage"], correct: 1 },
    { q: "A producer wants to skip the tech scout to save a day. What\'s the most honest argument the DP can make for keeping it?", opts: ["Tech scouts are union-required on most sets and insurance won\u2019t cover a skipped one", "Decisions made at the location in calm conditions cost minutes; the same decisions made on shoot day with crew on the clock cost hours \u2014 the scout is where the schedule is actually protected", "The gaffer + key grip won\u2019t know where to place lights without walking the space first", "Directors always expect a scout and cutting one damages the DP-director relationship"], correct: 1 },
    { q: "Two candidates shoot the same simple scene \u2014 a man answering a phone call. Which choice most reliably separates the \u2018cinematic eye\u2019 candidate from the \u2018camera operator\u2019 candidate?", opts: ["The cinematic candidate uses a longer lens + shallower aperture than the operator", "The cinematic candidate chooses specific foreground + layered focus; the operator points at the subject and centers the frame", "The cinematic candidate shoots more coverage so the editor has options", "The cinematic candidate uses movement on every shot while the operator locks off"], correct: 1 },
    { q: "You\'re asked to deconstruct a scene from a Deakins film to learn from it. After the muted pass you have 30 shots catalogued. What\u2019s the most valuable next step?", opts: ["Measure the average shot length so you understand his pacing rhythm", "For the 3 boldest shots, ask WHY that lens/light/angle specifically \u2014 and imagine what would change if he\u2019d picked the opposite", "Re-watch with the sound on so you can connect the visuals back to the dialogue", "Recreate each shot with your own camera to test your understanding physically"], correct: 1 },
    { q: "A junior DP says \"cinematography is about making images look beautiful.\" Which reframing is closest to how working DPs actually describe the job?", opts: ["Cinematography is about technical execution \u2014 exposure, focus, motion \u2014 done flawlessly on set", "Cinematography is directing the audience\u2019s attention + feeling, shot by shot, through specific image choices \u2014 \u2018beautiful\u2019 is a byproduct, not the goal", "Cinematography is about capturing what the production designer built as cleanly as possible", "Cinematography is the art of staying out of the actor\u2019s way while still covering the scene"], correct: 1 },
  ],
  slides: [
    { type: "cover", module: "MODULE 1", title: "Visual Storytelling", titleAccent: "Foundations", subtitle: "Learn to see the world through a cinematographer\u2019s eye \u2014 the grammar of cinema, reading films, and how images carry emotion before dialogue.", meta: "Cinematography \u00B7 Tier I \u00B7 Module 1  |  7 Slides" },
    { type: "stats", eyebrow: "WHY VISUAL STORYTELLING COMES FIRST", title: "Before you touch a camera, you need to see like a cinematographer", intro: "The camera is just a tool. What makes cinematography is the ability to see \u2014 to know what the frame should contain, what to exclude, and what mood the image carries. That skill is trainable.", stats: [
      { num: "80%", label: "of audience emotional response in a scene can be shaped by cinematography choices alone, pre-dialogue" },
      { num: "30 sec", label: "the typical time an audience takes to feel out the visual tone of a new scene" },
      { num: "3\u20135", label: "cinematographers whose work you should study deeply before shooting your first serious piece" },
    ], subheading: "What Visual Storytelling Requires You To See", bullets: [
      "Every frame is a deliberate choice \u2014 what\u2019s in, what\u2019s out, how it\u2019s lit, what lens made it",
      "Shots + scenes + sequences follow a grammar you can learn to read + speak fluently",
      "Mood lives in the image before it lives in the dialogue \u2014 the cinematographer authors mood",
      "Pre-visualisation is where the visual language gets decided \u2014 shoot day is execution, not discovery",
    ] },
    { type: "grid", eyebrow: "THE GRAMMAR OF CINEMA", title: "Six shot types every cinematographer speaks fluently", subtitle: "Each shot size does specific emotional + narrative work. Know what each does \u2014 then you can use them deliberately.", items: [
      { num: "01", title: "Extreme Wide / Establishing", desc: "Location + scale. Character is small. Audience learns where + feels isolation or grandeur.", icon: "\u{1F3D9}\uFE0F" },
      { num: "02", title: "Wide / Full", desc: "Character fully in frame with environment. Context + body language visible.", icon: "\u{1F464}" },
      { num: "03", title: "Medium", desc: "Waist-up or chest-up. Workhorse shot for dialogue. Neutral emotional charge.", icon: "\u{1F9CD}" },
      { num: "04", title: "Close-Up", desc: "Face-dominant. Emotion + interiority. Audience leans in.", icon: "\u{1F604}" },
      { num: "05", title: "Extreme Close-Up", desc: "Single feature (eye, hand, object). Intensity or unease.", icon: "\u{1F441}\uFE0F" },
      { num: "06", title: "Insert / Cutaway", desc: "Specific detail referenced in dialogue or action (a watch, a note).", icon: "\u{1F4CE}" },
    ], footer: "Rule: cinematographers don\u2019t pick shot sizes randomly. Each size serves a specific emotional + narrative job \u2014 choose with intent." },
    { type: "principle", num: "01", title: "Reading Films Like a Cinematographer", intro: "The fastest way to develop cinematographic taste is to study the work of the best. Not just watch \u2014 study. Frame-by-frame if necessary. Three cinematographers whose work compounds into taste: Deakins, Lubezki, van Hoytema.", sectionTitle: "How To Study a Film Like a DP", sections: [
      { heading: "1. Watch once normally \u2014 feel it", example: "Absorb the overall emotional arc + visual feel. Take no notes.", note: "You need the whole before you dissect the parts. The feeling tells you what the DP was going for." },
      { heading: "2. Watch again with the sound off", example: "Isolates the visual. You see shot sizes, camera moves, lighting, composition without dialogue guiding you.", note: "Cinematography gets naked without sound. You see what the images are doing by themselves." },
      { heading: "3. Pick one scene + deconstruct", example: "3 minutes max. Pause at every shot change. Document: shot size, camera movement, lens (guess focal length), lighting style, colour palette.", note: "One scene studied this way teaches more than 10 films watched passively." },
      { heading: "4. Ask WHY for every choice", example: "Why this lens? Why this lighting? Why this movement? What would change if the DP had chosen differently?", note: "Choice is the whole craft. Learning to see choices is learning to make them later." },
    ], rule: "Pick one cinematographer. Study 5 of their films over a month. Their signature becomes legible to you \u2014 then your own signature starts to form." },
    { type: "comparison", eyebrow: "AMATEUR vs CINEMATIC EYE", title: "Two ways to approach a simple scene", subtitle: "Two shooters film a person making coffee. The amateur captures the action. The cinematographer crafts the moment.", left: { title: "The Amateur Eye", color: "#EF4444", items: [
      { strong: "Static wide shot of the whole kitchen + person", note: "Everything visible. No emphasis. Audience has to find the subject." },
      { strong: "Flat overhead lighting, no shadows", note: "No mood. No depth. Reads as \u201Chome video.\u201D" },
      { strong: "Camera at eye level, straight on, no movement", note: "Default angle. Default height. Default everything. Feels uncomposed." },
      { strong: "Random shot lengths \u2014 whatever feels long enough", note: "No deliberate rhythm. Audience doesn\u2019t build emotion; it waits." },
    ] }, right: { title: "The Cinematographic Eye", color: "#10B981", items: [
      { strong: "Close-up on steam rising; insert on hands turning the dial; medium on the face only when the first sip happens", note: "Specific focus. Each shot earns its place. Audience\u2019s attention directed deliberately." },
      { strong: "Single warm side light from the window; rest of kitchen in shadow", note: "Mood. Intimacy. The light is motivated (window) + chosen (single source)." },
      { strong: "Low angle on the dial (power of the ritual); slight high angle on the face (vulnerability of morning)", note: "Angle tells the story \u2014 not just documents it." },
      { strong: "Each shot held for its specific emotional duration \u2014 steam lingers; the sip is brief", note: "Pacing matches feeling. The scene breathes. Audience feels, not watches." },
    ] }, footer: "Rule: same subject, same location \u2014 radically different result. The difference is deliberate choice at every moment." },
    { type: "table", title: "Pre-Visualisation Tools \u2014 What Cinematographers Actually Use", subtitle: "Before shoot day, the visual language gets decided. Here are the tools, in order of abstraction.", columns: ["Tool", "When You Use It", "What It Does"], rows: [
      ["Lookbook", "Early (pre-script-lock)", "Collects 5\u201315 reference images that define the intended visual language \u2014 colour, light, mood"],
      ["Shot list", "Pre-production", "Every shot planned \u2014 size, lens, movement, location \u2014 for every scene"],
      ["Storyboards", "Mid pre-production", "Visual sketches for complex sequences. Communicates visual + editorial intent to crew"],
      ["Floor plans + lighting diagrams", "Late pre-production", "Physical space + where camera + lights live for each scene"],
      ["Tech scout + walk-through", "Week of shoot", "On-location with director + key crew; final adjustments; problem-anticipation"],
      ["Look (LUT or colour reference)", "Pre-production through post", "A colour preview standard the team references on-set and in grading"],
    ], footer: "Rule: shoots that skip pre-visualisation make ad-hoc decisions on set. Good cinematographers make 70% of the decisions before the camera rolls." },
    { type: "exercise", title: "Deconstruct a 3-Minute Scene", intro: "Pick a film you love. Find a 3-minute scene. Watch it 3 times \u2014 once normally, once muted, once frame-by-frame. Document everything.", items: [
      { num: "1", copy: "Watch normally. Note your emotional experience of the scene in 2\u20133 sentences.", answer: "What did you feel? What was the scene trying to do emotionally? This is what the DP achieved \u2014 now let\u2019s see how." },
      { num: "2", copy: "Watch muted. Document every shot change: shot size (wide/medium/close), camera movement (static/pan/push/track), lighting style (high-key/low-key/natural).", answer: "You should end up with 15\u201340 shots catalogued. Notice patterns \u2014 does the scene get closer as tension builds?" },
      { num: "3", copy: "Pick the 3 most striking shots. For each, identify: lens choice (wide / normal / long), lighting direction, composition rule (thirds / symmetry / etc.).", answer: "These are the shots where the DP made the boldest choices. Understanding why those shots work is where taste starts forming." },
      { num: "4", copy: "Write 1 page: how did the cinematography choices create the emotion you felt in Step 1?", answer: "This synthesis is the point. Every feeling you had traces back to specific visual decisions. Once you can see this, you can start making these decisions yourself." },
    ] },
  ],
};
