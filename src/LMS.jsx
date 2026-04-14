import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { supabase } from "./supabase";
import { psychologyModule } from "./modules/psychology";
import RichSlide from "./modules/RichSlide";

const CATS = [
  { id: "lead", name: "Leadership & Management", icon: "\u{1F451}", color: "#7C3AED" },
  { id: "brand", name: "Branding & Design", icon: "\u{1F3A8}", color: "#EC4899" },
  { id: "content", name: "Content & Copywriting", icon: "\u270D\uFE0F", color: "#F59E0B" },
  { id: "video", name: "Videography & Production", icon: "\u{1F3AC}", color: "#EF4444" },
  { id: "post", name: "Post-Production", icon: "\u{1F39E}\uFE0F", color: "#8B5CF6" },
  { id: "web", name: "Web Development", icon: "\u{1F4BB}", color: "#3B82F6" },
  { id: "digi", name: "Digital Marketing", icon: "\u{1F4CA}", color: "#F97316" },
  { id: "ops", name: "Operations & Business", icon: "\u{1F4CB}", color: "#14B8A6" },
  { id: "train", name: "Training & Education", icon: "\u{1F393}", color: "#0EA5E9" },
];

const LC = { Beginner: "#10B981", Intermediate: "#F59E0B", Advanced: "#EF4444" };
const TC = { Lecture: "#7C3AED", Workshop: "#2563EB", "Hands-on": "#059669", Practice: "#059669", Project: "#DC2626", "Case Study": "#D97706", "Role Play": "#EC4899", Capstone: "#B91C1C" };
const ICO = ["\u{1F3AF}", "\u{1F4A1}", "\u{1F511}", "\u{1F4CA}", "\u{1F9E9}", "\u26A1", "\u{1F3D7}\uFE0F", "\u{1F50D}", "\u{1F4D0}", "\u{1F393}"];

const C = {};
function a(k,t,b1,b2,b3){C[k.toLowerCase()]={text:t,bullets:[b1,b2,b3]};}

a("Definition & scope","Strategic planning is the process of defining an organization's direction and making decisions on allocating resources to pursue that direction. For agencies, it means deciding which services to offer, which markets to serve, and how to grow sustainably.","It answers three questions: Where are we now? Where do we want to go? How do we get there?","A good strategic plan creates alignment across the entire team so everyone works toward the same vision.","Unlike day-to-day operations, strategy focuses on long-term competitive advantage.");
a("Strategic vs operational planning","Strategic planning sets the destination; operational planning maps the daily route. Strategic decisions include entering new markets or launching new services. Operational decisions include scheduling posts or assigning designers.","Strategic plans cover 1-5 years and focus on big-picture goals and positioning.","Operational plans cover days to months and focus on execution, tasks, and workflows.","Both are essential: strategy without operations is a dream, operations without strategy is chaos.");
a("Why agencies need strategy","Without strategy, agencies chase any client who will pay, leading to burnout, scope creep, and thin margins. A strategic agency knows its ideal client, competitive edge, and growth path.","Strategy helps you say no to bad-fit clients and projects that drain resources.","It differentiates you from competitors who offer the same generic services.","In Sierra Leone's growing digital market, early strategic positioning creates lasting advantage.");
a("SWOT framework","SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. It examines internal capabilities (S/W) and external factors (O/T) to inform decision-making.","Strengths: What does Regium Touch do better than competitors? Local knowledge, full-service offering.","Weaknesses: Where do gaps exist? Limited team size, equipment constraints.","Opportunities and Threats: External factors like digital adoption trends or new competitors.");
a("PESTEL analysis","PESTEL examines six macro-environmental factors: Political, Economic, Social, Technological, Environmental, and Legal. It helps agencies understand the landscape they operate in.","Political: Government support for digital businesses, advertising regulations.","Economic: Client spending power, exchange rates, inflation affecting pricing.","Social/Technological: Rising smartphone adoption, social media penetration, digital literacy.");
a("Industry mapping","Industry mapping identifies all players in your market: competitors, complementary businesses, potential partners, and client segments. It reveals underserved needs and oversaturated areas.","Map direct competitors (agencies), indirect (freelancers, in-house teams), and substitutes.","Identify which industries in Sierra Leone are underserved by digital marketing.","Look for partnership opportunities with non-competing businesses.");
a("Vision crafting","A vision statement describes the future state your organization aspires to create. It should be ambitious yet believable, specific enough to guide decisions but broad enough to inspire.","Example: To be West Africa's most trusted digital marketing partner, building brands that transform industries.","The vision should stretch the organization. If easily achievable, it is not visionary enough.","Revisit and refine the vision annually as the market and organization evolve.");
a("Mission statements","A mission statement defines what your organization does, who it serves, and how it creates value right now. While vision is aspirational, mission is operational.","Formula: We do what for whom by how. Example: We build powerful brands and shape skilled marketers.","Keep it under 30 words. If you cannot explain your mission simply, you have not clarified it enough.","Test it: Can every team member explain the mission in their own words?");
a("Values alignment","Values are the non-negotiable principles that guide behavior. They shape culture, hiring decisions, and client relationships. When genuinely lived, they become your strongest differentiator.","Choose 3-5 values maximum. More than that and none get remembered or practiced.","Each value should have behavioral evidence. Excellence means we review every deliverable twice before delivery.","Values should influence real decisions: Would you let go of a high-performer who violates a core value?");
a("SMART goals","SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. They transform vague intentions into concrete targets like acquire 5 retainer clients by December.","Specific: Exactly what will be accomplished and who is responsible?","Measurable: How will you know when it is achieved? What metric defines success?","Time-bound: What is the deadline? Break annual goals into quarterly milestones for accountability.");
a("OKR framework","OKRs (Objectives and Key Results) pair an ambitious qualitative Objective with 2-4 measurable Key Results. They create focus and alignment. Google, LinkedIn, and Spotify all use OKRs.","Objective: Qualitative and inspiring. Become the go-to agency for hospitality brands in Freetown.","Key Results: Quantitative. Win 3 hotel clients, achieve 95% satisfaction, generate 20 inbound leads.","OKRs cascade: Company OKRs inform department OKRs, which inform individual OKRs.");
a("Cascading objectives","Cascading connects high-level goals to team and individual objectives so everyone sees how their work contributes to the bigger picture.","Company goal leads to Department goal leads to Individual goal. Each supports the one above.","Example: Company Grow revenue 40% leads to Sales Close 8 clients leads to BD Send 30 proposals.","Review alignment monthly. If individual work does not connect to company goals, something is off.");
a("Competitor mapping","Competitor mapping creates a visual overview of your competitive landscape. Plot competitors on axes like price vs service breadth.","Identify 5-10 competitors: agencies, freelancers, and international firms in the SL market.","Map by strengths: Who has the best design? Best social media? Best relationships?","Find the gap: Where is no one competing strongly? That is your strategic opportunity.");
a("Positioning strategy","Positioning is how you want your target audience to perceive you relative to competitors. It is not what you do but what you are known for.","Complete: For target who needs service, Regium Touch is the category that differentiator.","Positioning must be true, relevant to clients, and different from competitors.","Own one thing in the client's mind: the training agency, the brand agency, the full-service partner.");
a("Blue ocean thinking","Blue Ocean Strategy means creating uncontested market space rather than competing in crowded red oceans. For agencies, combine services in new ways.","Red ocean: Fighting other agencies for the same clients with similar services on price.","Blue ocean: Creating new demand, like pairing digital marketing with staff training.","Ask: What can we eliminate, reduce, raise, or create that competitors are not doing?");
a("Phased planning","Phased planning breaks a multi-year strategy into manageable phases of 6-12 months each with specific goals, resources, and success criteria.","Phase 1 Foundation: Build core team, establish processes, secure anchor clients.","Phase 2 Growth: Scale services, expand client base, invest in equipment and training.","Phase 3 Leadership: Become market leader, launch new revenue streams, expand regionally.");
a("Milestone setting","Milestones are specific checkpoints marking significant progress. They are binary (done or not) and celebration-worthy.","Examples: First retainer signed, Team reaches 10 people, Revenue hits target.","Set milestones quarterly for regular evaluation and celebration.","Each milestone should trigger a review: Are we on track? What needs adjusting?");
a("Resource allocation","Resource allocation determines how you distribute people, money, time, and equipment. In agencies, the biggest resource is human talent.","Use the 70/20/10 rule: 70% on core business, 20% on growth initiatives, 10% on experiments.","Track utilization: How much of each person's time is billable vs internal?","Do not over-allocate. Leave buffer for unexpected needs and team development.");
a("Execution frameworks","Strategy fails at execution more often than planning. Frameworks like 4DX create accountability and rhythm.","4DX: Focus on wildly important goals, act on lead measures, keep a scoreboard, create accountability.","Weekly 15-30 min check-ins are more effective than monthly reviews.","Make strategy visible with a dashboard showing progress toward key goals.");
a("Review cadence","A review cadence is a regular schedule for evaluating strategic progress. Without it, even great plans get forgotten.","Weekly: 15-min team stand-up on priorities and blockers.","Monthly: Review KPIs, client satisfaction, financial health, pipeline.","Quarterly: Deep strategic review of direction and adjustments needed.");
a("Pivot strategies","A pivot is a strategic shift based on new information. Pivots should be data-driven, not panic-driven.","Signs to pivot: Low margins on a service, declining interest, team burnout.","Types: Service pivot (change offerings), market pivot (change audience), channel pivot.","Pivot toward strength. Build on what works rather than starting from scratch.");
a("Presentation skills","Presenting strategy requires clarity, confidence, and storytelling. Structure as narrative: where we are, where we are going, how we get there.","Start with why before what. Stakeholders need urgency before embracing the plan.","Use visuals: charts, roadmaps, before/after comparisons make strategy tangible.","Anticipate objections and address them proactively.");
a("Stakeholder alignment","Stakeholders include anyone affected by your strategy: team, clients, partners, investors. Alignment means they understand, support, and will act.","Frame strategy in terms that matter to each stakeholder.","Give people a role. People support what they help create.","Check alignment regularly. Concerns evolve over time.");
a("Feedback integration","Gathering and integrating feedback makes strategies stronger. Create safe channels for honest feedback and demonstrate you act on it.","Ask specific questions: What is the biggest risk you see? yields better input.","Separate collection from evaluation. Hear everything before deciding what to act on.","Close the loop: Tell people what changed based on their feedback.");
a("Brand anatomy","A brand has visual elements (logo, colors, typography), verbal elements (name, tagline, voice), and experiential elements (interactions, reputation).","Visual identity: logo, colors, typography, imagery style, design patterns.","Verbal identity: brand name, tagline, messaging, tone of voice.","Experiential identity: service quality, communication style, reliability.");
a("Identity vs image","Brand identity is how you present yourself. Brand image is how the audience perceives you. When aligned, the brand is strong.","Identity is internal: the assets, guidelines, and intentions you create.","Image is external: what customers and the public think about you.","Compare intended identity with market research on actual perception.");
a("Brand equity","Brand equity is commercial value from consumer perception rather than the product itself. High equity means people pay more and trust more.","Built through consistent positive experiences, quality delivery, and visibility.","Takes years to build and minutes to destroy. Protect it fiercely.","Signs: referral clients, premium pricing, talent wanting to work for you.");
a("Logo types","Seven types: wordmark (Google), lettermark (IBM), pictorial (Apple), abstract (Nike), mascot (Mailchimp), emblem (Starbucks), combination (Adidas).","Wordmarks work best for companies with distinctive, short names.","Pictorial/abstract marks provide versatility and transcend language barriers.","Combination marks offer the most flexibility: icon alone or with text.");
a("Versatility testing","A versatile logo works across all applications: business cards, billboards, social avatars, embroidery, single-color printing.","Test at very small (16px favicon) and very large (building signage) sizes.","Test in black, white, reversed on dark, and on photography.","Test on physical items: business card, T-shirt, vehicle.");
a("Scalability","A scalable logo maintains clarity and recognition at any size. Logos with excessive detail break down when reduced.","Complex logos need simplified versions for small applications.","Create a minimum size specification.","Vector formats (SVG, AI, EPS) ensure infinite scaling without quality loss.");
a("Color psychology","Colors evoke emotional responses. Red creates urgency, blue builds trust, green suggests growth, purple conveys luxury.","Red: energy, passion, urgency. Blue: trust, stability, professionalism.","Cultural context matters: white means purity in Western cultures but mourning in some Asian cultures.","Your primary brand color should appear in 60% of visual materials.");
a("Palette construction","A palette includes 1-2 primary colors, 2-3 secondary, 1-2 accent, plus neutrals. Each has a defined role.","Primary: Main brand colors used most frequently.","Secondary: Supporting colors for backgrounds, icons, sections.","Accent: High-contrast for CTAs, highlights, emphasis.");
a("Accessibility contrast","Color accessibility ensures text is readable by all. WCAG requires minimum 4.5:1 contrast ratio.","Use contrast checking tools for all text/background combinations.","Never convey information through color alone. Use labels or icons as backup.","About 8% of men are color blind. Accessibility serves a large audience.");
a("Font pairing","Pairing combines typefaces that complement each other. Classic: distinctive display font with clean body font.","Pair a serif with a sans-serif for contrast.","Both fonts should reflect the same brand personality.","Limit to 2-3 typefaces maximum.");
a("Type hierarchy","Uses size, weight, and spacing to create levels of importance: headline, subhead, body, caption.","Heading: 24-48pt. Subheading: 16-20pt. Body: 14-16pt.","Maintain consistent ratios so each level is clearly distinguishable.","Line height should be 1.4-1.6x the font size for comfortable reading.");
a("Licensing","Font licensing determines legal use. Desktop, web, app, and commercial licenses are often separate.","Google Fonts are free for all uses. Adobe Fonts come with Creative Cloud.","Always check the license before using in client work.","Budget for premium fonts when needed. A distinctive typeface elevates a brand.");
a("Design elements","Fundamental elements: line, shape, color, texture, space, form, and value. Every visual is built from these.","Line: Creates direction and structure. Thick lines feel bold; thin feel delicate.","Shape: Geometric feels structured; organic feels natural and free.","Space: Positive is filled; negative is empty. Both are used actively.");
a("Visual building blocks","Designers combine elements to create compositions. Mastering the blocks gives conscious control.","Start with point and line. Even complex designs break down to primitives.","Every element should serve a purpose: communication, decoration, or structure.","Practice analyzing designs: What elements are used? What creates the mood?");
a("Seeing like a designer","Designers notice spacing, alignment, color relationships, hierarchy in everyday objects.","Critique 3 designs daily: What works? What does not? Why?","Notice typography everywhere: menus, signs, packaging.","Train your eye for alignment: once you notice misalignment, you cannot unsee it.");
a("Balance & symmetry","Balance creates stability. Symmetrical feels formal. Asymmetrical (different elements, equal weight) feels dynamic.","Symmetrical layouts: formal content like invitations, certificates, luxury.","Asymmetrical: creative and energetic. Balance a large image with smaller text.","Visual weight is affected by size, color, contrast, and position.");
a("Contrast","Contrast is the difference between elements: size, color, weight, texture. Creates interest and guides attention.","Size contrast: Make the most important element significantly larger.","Color contrast: Dark on light ensures readability.","If everything is bold, nothing is bold. Use contrast selectively.");
a("Proximity & alignment","Proximity groups related elements. Alignment creates visual order along invisible lines.","Group related information. Separate unrelated groups with space.","Choose alignment (left, centered, grid) and stick to it.","Left-aligned text is easier to read than centered for body copy.");
a("Copy vs content","Copy persuades and drives action (buy, sign up). Content informs and entertains. Both are essential.","Copy: Headlines, ad text, CTAs, sales pages. All aim to convert.","Content: Blog posts, guides, social posts. Aim to build trust.","Best marketing uses both: content attracts; copy converts.");
a("AIDA framework","AIDA: Attention (hook), Interest (engage), Desire (make them want it), Action (tell them what to do).","Attention: Lead with a bold headline, surprising statistic, or provocative question.","Interest: Present the problem they relate to and hint at the solution.","Desire: Show the transformation. Action: Clear, specific CTA.");
a("Value proposition writing","A value proposition communicates why to choose you. What do you do? For whom? Why better? Understood in under 10 seconds.","Formula: We help [audience] achieve [outcome] through [unique approach].","Test: Can someone unfamiliar understand it immediately?","Specific beats generic. Build websites that convert for SL hospitality brands is strong.");
a("Headline formulas","Proven patterns: Numbers (7 Ways), How-to, Questions (Are You Making This Mistake?), Benefits (Get More Clients Without...).","Numbers promise specific value: 5 Steps to Better Social Media Results.","How-to promises instruction: How to Write Copy That Converts.","Negative headlines create urgency: Stop Making These 5 Branding Mistakes.");
a("Power words","Power words trigger emotional responses: free, proven, exclusive, instant, guaranteed, secret.","Urgency: now, today, limited, deadline, last chance.","Trust: proven, guaranteed, certified, tested, results.","Exclusivity: members-only, insider, VIP, invitation, private.");
a("A/B testing hooks","A/B testing compares two versions to find what performs better. Replaces opinion with data.","Test one variable at a time: only the headline, or only the CTA.","Need at least 100 views per version for meaningful results.","Keep a swipe file of winners. Patterns emerge over time.");
a("Platform voice","Each platform has distinct style. LinkedIn is professional. Instagram visual. X conversational. TikTok authentic.","LinkedIn: Insights, professional language, expertise.","Instagram: Lead with visuals, storytelling captions, hashtags.","X: Concise, join conversations, use personality.");
a("Caption structure","Effective captions: Hook (stops scroll), Body (value/story), CTA (what to do). First line is critical.","Hook: Make first line irresistible. Question, bold statement, or fact.","Body: Deliver value. Teach, share a story, or present an insight.","CTA: Save this, Drop an emoji, Link in bio.");
a("Hashtag strategy","Hashtags increase discoverability. Mix high-volume, medium, and branded hashtags.","Use 5-15 on Instagram. Diminishing returns beyond 15.","Mix: 2-3 large (1M+), 5-7 medium (10K-500K), 2-3 small niche.","Create a branded hashtag for each client or campaign.");
a("Hero sections","First thing visitors see on a landing page. Must communicate what, for whom, and why in 5 seconds.","Include: Benefit headline, subheadline, CTA button, relevant image.","Frame from visitor perspective: What will I get? not What do you do?","5-second test: Show someone briefly, ask what the page is about.");
a("Feature-benefit copy","Features describe what something does. Benefits describe why customers care. Lead with benefits.","Formula: [Feature] so you can [benefit].","Customers buy benefits, not features. They want the hole, not the drill.","List features in supporting sections framed as outcomes.");
a("CTA writing","CTAs tell users what to do. Best are specific, action-oriented, value-focused.","First-person: Start My Free Trial converts better than Start Your Free Trial.","Be specific: Download the Guide not Click Here.","Add urgency when appropriate: Claim Your Spot, Only 5 Left.");
a("Subject lines","Subject lines determine open rates. Best are specific, create curiosity, deliver on promise.","Under 50 characters for mobile.","Personalization increases opens.","Preview text complements, not repeats, the subject.");
a("Email structure","Subject, Preview text, Opening hook, Value/Content, CTA, P.S. line. Each gets reader to next.","Opening: Address their situation. No pleasantries.","Body: One key message per email.","CTA: One primary CTA. Multiple reduce clicks on all.");
a("Sequence writing","Automated email series triggered by actions. Nurture leads from awareness to purchase.","Welcome (3-5 emails): Introduce, deliver wins, build trust, present offer.","Spacing: immediately, 2 days, 3 days, then weekly.","Each email stands alone while building a coherent narrative.");
a("Ad copy formulas","Uses PAS (Problem-Agitate-Solve), AIDA, Before-After-Bridge under character constraints.","PAS: State Problem, Agitate it, present Solution.","Before-After-Bridge: Life before, after, your service as bridge.","Keep primary text under 125 characters for Meta Ads.");
a("Character limits","Google: 30-char headlines, 90-char descriptions. Meta: 40-char headline, 125-char primary.","Google: 3 headlines (30 each), 2 descriptions (90 each).","Meta primary text truncates at about 125 chars.","Write at limit first, then edit to keep only essentials.");
a("Testing variations","Test ad variations systematically. One element at a time to isolate changes.","Create 3-5 variations of each element.","Common tests: emotional vs rational, question vs statement.","Document winners. Patterns inform future copy.");
a("Sensor sizes","Full-frame (36x24mm), APS-C (23x15mm), Micro Four Thirds (17x13mm). Larger sensors = more light, shallower depth.","Full-frame: Best quality, best low-light, most expensive.","APS-C: Great balance of quality and cost. Most popular for pro video.","Crop factor: 50mm on APS-C looks like 75mm on full-frame.");
a("Lens mounts","Interface between body and lens. Common: Canon RF/EF, Sony E-mount, Nikon Z, MFT.","Buying a camera means choosing which lenses you can use.","Adapters allow cross-mount but may sacrifice autofocus.","Sony E-mount and Canon RF have widest selections.");
a("Recording codecs","Codecs compress video. H.264 (small/good), H.265 (smaller/better), ProRes (large/best), RAW (enormous/max).","H.264: Great for social, limited grading flexibility.","ProRes: Industry standard for editing, smooth in editors.","RAW: Maximum quality, requires fast cards and powerful computers.");
a("ISO behavior","ISO controls sensor sensitivity. Low (100-400) is clean. High (1600+) brightens but adds grain.","ISO 100-400: Daylight, studios. Clean and sharp.","ISO 800-1600: Indoor, decent light. Slight noise but acceptable.","ISO 3200+: Low-light. Visible noise. Avoid for commercial work.");
a("Shutter speed rules","For video, shutter controls motion blur. 180-degree rule: double your frame rate.","24fps = 1/50 shutter. 30fps = 1/60. 60fps = 1/120.","Faster shutter eliminates blur, creates staccato look.","Bright conditions: use ND filters instead of raising shutter speed.");
a("Aperture control","Aperture (f-stop) controls light and depth of field. Wide (f/1.4-2.8) = blur. Narrow (f/8-16) = sharp.","f/1.4-2.8: Shallow depth, beautiful bokeh. Great for interviews.","f/5.6-8: Moderate depth, sharp wider area.","f/11-16: Deep depth, nearly everything sharp.");
a("Focus peaking","Highlights in-focus edges with colored outlines. Essential for manual focus in video.","Enable in display settings. Choose visible color.","Use with magnification for critical focus on interviews.","Set Low for precision, High for faster confirmation.");
a("AF modes","Continuous AF (tracks), Face/Eye AF (locks on faces), Manual (full control).","Face/Eye AF: Best for interviews.","Continuous: Good for moving subjects but can hunt.","Manual with peaking is most reliable for controlled shoots.");
a("Pull focus techniques","Shift focus between subjects during a shot. Directs attention, adds cinematic quality.","Mark focus distances before the shot.","Use wider apertures for more dramatic transitions.","Rehearse before recording. Smooth speed looks professional.");
a("Color temperature","Kelvin describes light warmth. Daylight 5600K, tungsten 3200K (warm), shade 7000K+ (cool).","2700-3200K: Tungsten, warm orange. Common indoors.","5600K: Daylight, neutral white. Reference for white light.","7000-10000K: Shade/overcast, cool blue.");
a("Custom WB","Custom white balance uses a reference card to calibrate to exact lighting. More accurate than presets.","Hold gray card in scene light and use camera custom WB function.","Set custom WB when lighting does not match a preset.","Re-set whenever location or lighting changes.");
a("Mixed lighting","Multiple sources with different temperatures (tungsten + window). A common challenge.","Option 1: Overpower one source to match everything.","Option 2: Use gels to match the dominant source.","Option 3: Embrace mix creatively. Warm key + cool background.");
a("Standard profiles","Picture profiles control color, contrast, sharpness. Standard, Portrait, Cinema each produce different looks.","Standard: Moderate contrast/saturation. Good for quick turnaround.","Portrait: Reduced contrast, softer skin. Good for interviews.","Cinema: Lower contrast/saturation. Designed for grading.");
a("Log formats","Log profiles capture maximum dynamic range by flattening contrast. Designed for color grading in post.","Common: S-Log (Sony), C-Log (Canon), V-Log (Panasonic).","Looks flat from camera. That is intentional.","Requires controlled exposure and post-production skill.");
a("Dynamic range","Difference between brightest and darkest captured. Higher range preserves more detail.","Standard profiles: 8-10 stops.","Log profiles: 13-15+ stops. Significantly more.","When insufficient, choose: expose for highlights or shadows.");
a("Focal lengths","mm determines field of view. Wide (16-35mm) captures more. Normal (35-50mm) approximates human vision. Telephoto (70-200mm+) isolates.","16-24mm: Ultra-wide, dramatic. Great for establishing shots.","35-50mm: Natural perspective. Great for brand films.","85-135mm: Flattering compression. Perfect for interviews.");
a("Lens compression","Telephoto makes distant objects appear closer. Wide exaggerates distance. Creates different spatial feels.","Wide: close objects appear much larger than background.","Telephoto: foreground and background appear closer together.","200mm with compressed cityscape behind a person looks cinematic.");
a("Prime vs zoom","Primes: fixed focal, wider apertures, sharper, lighter. Zooms: range, versatile, typically slower.","Primes: f/1.4-1.8, creative depth. Best for controlled shoots.","Zooms: versatile, faster workflow. Good for events.","50mm f/1.4 prime is essential for low light and portraits.");
a("Light quality","Quality = hard or soft. Hard creates sharp shadows and drama. Soft wraps and creates gentle shadows.","Hard: Small sources (bare bulb, direct sun). Texture and defined edges.","Soft: Large sources (softbox, overcast). Flattering and forgiving.","To soften: move closer, make larger, or bounce off white surface.");
a("Direction & angle","Direction affects mood. Front reduces shadows. Side creates depth. Back creates separation.","Front: Even, low-shadow. Safe but can look flat.","Side (45 degrees): Depth, texture. Most popular for interviews.","Back (rim): Separates subject from background. Halo effect.");
a("Key light placement","The primary, brightest light. Standard: 30-45 degrees to one side, slightly above eye level.","Higher: Shadows under nose/chin. Classic cinematic look.","Lower: Eerie style. Rarely used for commercial work.","Further to side = more dramatic and shadowy.");
a("Fill ratios","Key-to-fill intensity ratio. 1:1 flat, 4:1 dramatic. Most commercial uses 2:1 to 3:1.","1:1: Flat, even. Beauty/cosmetics look.","2:1: Slight shadows. Best for corporate interviews.","4:1+: Deep shadows, dramatic. Narrative and artistic.");
a("Back light purpose","Separates subject from background with a bright edge around head and shoulders.","Position behind and above, aimed at head and shoulders.","Should be subtle: gentle rim, not blinding halo.","With two lights: one key, one back. Fill with reflector.");
a("Talking head setup","Standard for interviews: professional, flattering light on speaker.","Key at 30-45 degrees, slightly above eye level, soft source.","Fill or reflector opposite side for 2:1 or 3:1 ratio.","Back light for separation from background.");
a("Background separation","Adds depth through lighting, depth of field, and physical distance.","Place subject 3-4 feet from background.","Use separate background light for interest.","Combine with wide aperture to blur background.");
a("Eye lights","Small reflections visible in eyes. Add life and energy. Without them, eyes look flat.","Ensure key light creates visible catchlight.","Ring lights create circular; softboxes create rectangular catchlights.","Top-center position looks most natural.");
a("Mood lighting","Creates emotional atmosphere. Cool = melancholic. Warm = cozy. High contrast = dramatic.","Low key (mostly dark): Mystery, drama, sophistication.","High key (bright, even): Optimism, energy, cleanliness.","Cool for technology, warm for comfort, saturated for energy.");
a("Colored gels","Transparent sheets over lights to change color. Creative and practical uses.","CTO (Orange): Converts daylight to match tungsten.","CTB (Blue): Converts tungsten to match daylight.","Creative: deep blue, magenta, red on background for mood.");
a("Practical lights","Visible sources in scene: desk lamps, candles, neon. Add visual interest and authenticity.","Add atmosphere that studio lights alone cannot create.","Dim so they complement, not compete with key light.","Common: desk lamps, bulbs, monitors, candles, neon.");
a("Interface tour","NLE panels: Project (media), Source Monitor (preview clips), Timeline (assemble), Program Monitor (preview edit).","Timeline is where you build your story. Learn it deeply.","Source Monitor: set In/Out points before placing clips.","Customize: close unused panels, enlarge frequent ones.");
a("Workspace customization","Customize NLE by arranging panels, creating shortcuts, saving presets for different tasks.","Create workspaces for editing, color, audio, graphics.","Assign single-key shortcuts to common functions.","Save presets for instant switching.");
a("Keyboard shortcuts","Make editing dramatically faster. JKL for playback, I/O for marking, ripple delete essential.","JKL: J backward, K stop, L forward. Press L for fast forward.","I and O: Mark In and Out points.","Ripple Delete: Removes clip AND closes gap automatically.");
a("Selects process","Best clips from all footage. Watch, mark best takes, organize before editing.","Watch at 1.5-2x, marking In/Out on usable sections.","Color-code: green=great, yellow=usable, red=unusable.","Create selects sequence before building narrative.");
a("Assembly technique","Place clips in rough order without worrying about timing. Get structure right first.","Drag selects in story order: context, problem, solution, conclusion.","Leave clips long. Trim in next pass.","Assembly should be 2-3x longer than final.");
a("Story structure","Every video: Setup (context), Conflict (tension), Resolution (payoff). Keeps viewers watching.","Opening 3 seconds determine if viewers stay. Hook immediately.","Middle should build. Avoid static or repetitive sections.","End with conclusion or CTA. Reward viewers who reach end.");
a("Cut types","Hard cut: instant (most common). Jump cut: removes time in same angle. Match cut: connects through similarity.","Hard cut: Clean, invisible between angles. The foundation.","Jump cut: Forward in time. Modern, fast-paced feel.","Cross dissolve: Blends clips. Implies time passage. Use sparingly.");
a("J & L cuts","J-cuts: hear next scene before seeing it. L-cuts: hear current over next. Both make edits invisible.","J-cut: Audio starts before video. Creates anticipation.","L-cut: Audio continues over next video. Maintains continuity.","The secret weapon of great editors.");
a("Transition use","Use cuts 90% of the time. Dissolves and effects should be intentional, not decorative.","Cut: Clean, professional, invisible. Use for most transitions.","Dissolve: Implies time passage. 0.5-1 second duration.","Avoid novelty transitions. They look amateur.");
a("Beat matching","Sync edits to music rhythm. Cutting on beats connects visual and audio.","Identify key beats, accents, and structural changes.","Place major transitions on strong beats.","Not every beat needs a cut. Let moments breathe.");
a("Tension building","Editing builds tension through pacing, duration, and sound. Longer shots = suspense, rapid cuts = urgency.","Slow before key moments. Longer shots build anticipation.","Speed up at climax: faster cuts, louder audio.","Music amplifies: rising tones, percussion, or silence.");
a("Breathing room","Allow moments to land. Hold reactions, let pauses sit. Give time to feel and process.","After emotional moments, hold 2-3 extra seconds.","Let music play without constant visual changes.","Packed seconds cause fatigue. Rhythm needs rests.");
a("End-to-end editing","Full workflow: raw through selects, assembly, rough, fine cut, color, audio, delivery.","Order: Organize, Selects, Assembly, Rough, Fine, Color, Audio, Export.","Never skip selects. Saves more time than any other step.","Export draft for review before polishing.");
a("Revision process","Structure revisions: typically 2 rounds included, additional billed separately.","Send organized review links with timecode references.","Consolidate feedback before making changes.","Confirm round 1 addressed before round 2.");
a("Final delivery","Export in all required formats. Different platforms need different specs.","Standard: H.264 MP4 1080p + 4K master for archive.","Social: Square, Vertical, Horizontal with subtitles.","Deliver organized: folders per format, clear naming.");
a("Video color wheel","Divided into Shadows, Midtones, Highlights. Each range shifts independently.","Shadows toward blue = cool mood. Highlights toward orange = warmth.","Complementary grading (opposite colors) is most popular.","Center is neutral gray. Moving outward saturates.");
a("Complementary colors","Opposite on wheel creates tension. Teal/orange most popular: cool backgrounds, warm skin.","Works because skin tones naturally contrast with cool backgrounds.","Other pairs: purple/gold, green/magenta, blue/amber.","Use subtly. Extreme pushing looks unnatural.");
a("Emotional grading","Creates atmosphere. Cool = melancholic. Warm = nostalgic. Desaturated = gritty. Saturated = vibrant.","Match grade to story: corporate success should feel warm.","Consistency crucial. Every shot should feel unified.","Subtle is almost always better.");
a("Waveform monitor","Displays brightness values. Bottom = black (0 IRE), top = white (100 IRE). Primary exposure tool.","Signals should fall between 0 and 100 IRE.","Skin tones typically 55-75 IRE.","Bunched waveform means image lacks contrast.");
a("Vectorscope","Displays color: hue (position) and saturation (distance from center).","Skin tone line runs toward 11 o'clock. All skin tones fall on it.","Deviation means color cast to correct.","Oversaturated pushes toward edges. Pull back for natural.");
a("Histogram","Brightness distribution. Left = shadows, middle = midtones, right = highlights.","Bunched left = underexposure (too dark).","Bunched right = overexposure (too bright).","Edge spikes = clipping. Lost detail cannot be recovered.");
a("White balance fix","Remove color casts so whites are truly white. First step in correction workflow.","Use eyedropper on neutral gray or white in frame.","If no reference, adjust until skin tones look natural on vectorscope.","Shoot gray card at each setup for fast correction.");
a("Exposure correction","Adjust brightness and shadow/midtone/highlight relationships for full tonal range.","Waveform: lift shadows above 0, bring highlights below 100.","Use Lift/Gamma/Gain rather than just overall brightness.","Keep skin tones in 55-75 IRE range.");
a("Color cast removal","Unwanted tints from non-neutral lighting: green fluorescents, orange tungsten, blue shade.","Vectorscope shows casts: neutral should be centered.","Adjust color wheels to pull trace toward center.","Careful not to overcorrect. Slight warm often more pleasing.");
a("Creative looks","Artistic treatments after correction. Establish mood: warm, cool, gritty, vibrant.","Always correct first, then grade.","Start with a reference image. Grade toward it.","Save favorites as presets for consistency.");
a("LUT application","LUTs are preset color transformations. Technical convert log. Creative apply looks.","Technical: Convert log to viewable color first.","Creative: Apply at 50-70% intensity, not 100%.","LUTs are starting points, not final grades.");
a("Custom LUT creation","Save your signature look for consistent application across projects.","Grade best clip perfectly, export as .cube LUT.","Test on diverse footage.","Create LUTs for different scenarios.");
a("MoGraph types","Animated typography, logo animations, lower thirds, infographics, UI animations, title sequences.","Typography: Animated text, kinetic typography, captions.","Informational: Data visualizations, diagrams, callouts.","Branding: Logo animations, bumpers, transitions.");
a("Industry uses","Advertising, broadcast, social media, film, corporate, web. Essential across all media.","Social: Animated posts increase engagement 20-30%.","Corporate: Explainers communicate complex ideas quickly.","Broadcast: Lower thirds and tickers are the backbone.");
a("Tool overview","After Effects (standard), DaVinci Resolve Fusion (free), Apple Motion. AE has largest ecosystem.","After Effects: Most plugins, best ecosystem, integrates with Premiere.","Resolve Fusion: Free and powerful but steeper learning curve.","For agency work, AE covers 95% of needs.");
a("Keyframe types","Mark property changes. Linear = constant speed. Easy Ease = smooth. Bezier = full control.","Linear: Robotic, constant. Rarely natural.","Easy Ease (F9): Smooth acceleration. Use as default.","Bezier: Master Graph Editor for professional animation.");
a("Ease in/out","Controls acceleration. Nothing in nature moves at constant speed. Easing makes motion natural.","Ease Out: Starts fast, slows. For elements entering.","Ease In: Starts slow, speeds up. For elements leaving.","Graph Editor customizes curves. Steeper = faster.");
a("Graph editor","Visualizes timing as curves. Horizontal = time, vertical = value. Steeper = faster.","Where good animation becomes great. Worth the investment.","Pull handles: long = slow easing, short = quick.","Reference cubic-bezier.com for professional curves.");
a("Text animators","Animate characters, words, or lines without keyframing each. Range Selectors control affected chars.","Range Selector creates cascading/staggered effects.","Common: fade up, scale in, typewriter, random reveal.","Combine multiple animators for complex effects.");
a("Kinetic typography","Text moves to convey emphasis, emotion, rhythm. Words fly in, scale on phrases, dance to music.","Sync appearances to audio or beats.","Size and color changes emphasize key words.","Keep readable. Fancy animation means nothing if unreadable.");
a("Title sequences","Introduce videos with animated text and graphics. Set tone, build anticipation.","Match style to content: bold for action, minimal for corporate.","Animate over establishing shots or abstract backgrounds.","Short for social (3-5s), longer for brand films (10-30s).");
a("Lower third design","Display names, titles in lower portion. Essential for interviews and presentations.","Clean and legible: Name bold, title regular weight.","Animate subtly: gentle slide-in and fade-out.","Brand consistency: client colors and fonts.");
a("Name plates","Display name and title. Appear 3-5 seconds when person first speaks.","Line 1 = Name (larger, bolder). Line 2 = Title (smaller, lighter).","Appear 1-2 seconds after speaking, stay 4-5 seconds.","Lower-left or lower-right. Do not overlap face.");
a("Info call-outs","Point to or highlight specific elements: features, locations, data points.","Use animated lines from call-out to element.","Concise: 3-7 words per call-out.","Animate in sequence. Guide the viewer.");
a("Document structure","HTML: DOCTYPE, html, head (metadata), body (visible content).","Head contains title, charset, CSS links, meta tags.","Body contains everything users see.","Include lang attribute and charset meta tag.");
a("Semantic tags","Describe content meaning: header, nav, main, article, section, aside, footer.","header for headers, nav for navigation, main for primary content.","article for self-contained, section for thematic groupings.","Screen readers depend on semantic tags for navigation.");
a("Accessibility basics","Ensures sites work for everyone. Headings, alt text, keyboard nav, contrast.","Use heading levels in order. Do not skip.","Every image needs alt attribute.","Interactive elements must be keyboard-accessible.");
a("Selector types","Target elements: element (p), class (.name), ID (#name), pseudo (:hover).","Class selectors most common. Reusable, moderate specificity.","IDs used sparingly. Hard to override.","Combine for precision: .card .title targets titles inside cards.");
a("Specificity","Determines which rule wins. Inline > IDs > Classes > Elements.","element=1, class=10, ID=100, inline=1000.","Avoid !important. Breaks cascade.","Keep specificity low with classes instead of IDs.");
a("Inheritance","Children inherit some properties from parents. Color, font-family inherit. Border, margin do not.","Set font-family, color, line-height on body. They inherit.","Use inherit keyword to force when needed.","Understanding inheritance reduces repetitive code.");
a("Box model","Every element: content, padding (inside border), border, margin (outside).","Default: width/height only apply to content.","box-sizing: border-box includes padding and border.","Margin affects position, not size.");
a("Margin collapse","Vertical margins overlap. Larger wins instead of both applying.","Only vertical collapse, not horizontal.","Parent-child can collapse without borders/padding.","Solutions: padding, border, or flexbox/grid.");
a("Box-sizing","Changes size calculation. content-box excludes padding. border-box includes it.","Always add * { box-sizing: border-box; } to CSS.","border-box: width 300px means exactly 300px total.","Universally recommended. Included in every CSS reset.");
a("Flex container","display: flex on parent. Children become flex items. One-dimensional layout.","justify-content: main axis alignment.","align-items: cross axis alignment.","gap: spacing between items without margin.");
a("Flex items","Direct children of flex containers. Sized with flex-grow, shrink, basis.","flex: 1 fills available space. Multiple items share equally.","flex-shrink: 0 prevents shrinking below content.","align-self overrides container alignment for one item.");
a("Alignment","justify-content handles main axis. align-items handles cross axis.","justify-content: center places items in middle.","align-items: center vertically centers.","Both centered = perfect centering. The holy grail of CSS.");
a("Grid template","grid-template-columns/rows define structure. Fixed (px), flexible (fr), auto.","1fr 1fr 1fr = 3 equal columns.","250px 1fr = fixed sidebar + flexible main.","minmax with auto-fill creates responsive grids.");
a("Grid areas","Name regions, assign elements. Layouts read like floor plans.","grid-template-areas: header header / sidebar main / footer footer.","grid-area: header places element in named region.","Just redefine areas in media query for responsive.");
a("Responsive grid","Adapt with auto-fill/auto-fit, media queries, flexible units.","repeat(auto-fill, minmax(300px, 1fr)) auto-adjusts columns.","Single line replaces multiple media queries.","Combine with gap for consistent spacing.");
a("Mobile-first","Start mobile, add complexity for larger screens with min-width queries.","Start CSS with mobile styles. Add min-width for tablet/desktop.","Forces content prioritization.","60%+ of traffic is mobile. Design for majority first.");
a("Media queries","Apply CSS rules based on screen width. Foundation of responsive design.","@media (min-width: 768px) applies to 768px and above.","Common: 480px, 768px, 1024px, 1280px.","Content-driven breakpoints, not device-driven.");
a("Fluid typography","Text scales smoothly with viewport. No jumping at breakpoints.","clamp(): font-size: clamp(1rem, 2.5vw, 2rem).","Eliminates typography media queries.","Apply to headings. Body fine at fixed 16px.");
a("Installation","WordPress on any hosting with PHP and MySQL. Many offer one-click install.","Choose hosting with uptime, SSL, PHP 8+.","After install: HTTPS, remove defaults, configure permalinks.","Create staging site. Never build on live.");
a("Dashboard tour","Areas: Posts, Pages, Media, Appearance, Plugins, Settings, Users.","Posts = blog entries. Pages = static content.","Customizer modifies appearance with live preview.","Keep organized: only needed plugins, remove unused widgets.");
a("Settings","Site Title, Tagline, URLs, timezone, reading, discussion, media.","Permalinks: Post Name for clean URLs.","Reading: homepage as posts or static page.","Set timezone correctly for scheduled posts.");
a("Theme selection","Themes control visual design. Choose well-coded, updated, responsive.","Free: Astra, GeneratePress, Kadence. Lightweight.","Premium: Avada, Divi. More features but heavier.","Avoid themes not updated in 6+ months.");
a("Customizer","Visual interface for identity, colors, typography, header/footer with preview.","Preview on mobile before publishing.","Customizer for global, page builder for page-specific.","Some themes add separate options panels.");
a("Child themes","Inherits parent but allows customizations that survive updates.","Needs style.css and functions.php.","All modifications go in child theme.","Always use for client sites.");
a("Elementor widgets","Drag-and-drop: Heading, Text, Image, Video, Button, Forms.","Structure: Section, Column, Widget hierarchy.","Check responsive mode per device.","Global Styles for consistent fonts and colors.");
a("Gutenberg blocks","Built-in: Paragraph, Heading, Image, Gallery, Cover, Columns, Group.","Group blocks create sections with backgrounds.","Reusable blocks save combinations for reuse.","Block patterns provide pre-designed layouts.");
a("Templates","Define page layouts. Hierarchy determines which renders each content type.","Page builders override default templates.","Create for common types: Service, Team, Case Study.","Reuse across site for consistency.");
a("Yoast SEO","Most popular SEO plugin. Meta editing, sitemaps, breadcrumbs, analysis.","Configure wizard: site type, organization, social.","Aim for green SEO and Readability scores.","Set titles and descriptions for every page.");
a("Wordfence","Security: firewall, malware scanner, login security, threat protection.","Enable two-factor for all admin accounts.","Configure firewall for known malicious patterns.","Schedule scans and review alerts weekly.");
a("Contact Form 7","Free forms: text, dropdowns, checkboxes, uploads, email notifications.","Include: Name, Email, Subject, Message. Keep short.","Email notifications to the right person.","Thank-you message or redirect after submission.");
a("Platform demographics","Each platform attracts different users. IG: 18-34. LinkedIn: 25-54 pro. FB: broadest. TikTok: 16-24.","Instagram: 67% under 34, visual-first. Best B2C.","LinkedIn: Highest income, professional. Best B2B.","TikTok: Fastest-growing. Authentic wins.");
a("Algorithm basics","Prioritize engagement (likes, comments, shares, saves). Consider relevance, relationship, recency.","Engagement in first 30-60 min signals quality.","Shares and saves weighted more than likes.","Each platform favors its newest feature.");
a("Content types per platform","Each favors certain formats. IG: Reels, carousels. LinkedIn: text, articles. TikTok: short video.","Reels get 2-3x reach of static posts.","LinkedIn documents generate high engagement.","Create platform-native content. Do not just cross-post.");
a("Goal frameworks","Goals should be SMART tied to business objectives. Awareness, engagement, conversion.","Awareness: increase reach 25%, grow followers 500.","Engagement: 5% rate, 100+ comments per post.","Conversion: 50 leads/month, 1000 website visits.");
a("KPI selection","Choose 3-5 KPIs directly indicating success.","Awareness: reach, impressions, follower growth.","Engagement: rate, comments, saves, shares.","Conversion: clicks, traffic, lead completions.");
a("Benchmarking","Compare against industry, competitors, or own history.","Average engagement: IG 1-3%, LinkedIn 2-5%, FB 0.5-1%.","Compare like-for-like: 10K vs 100K accounts differ.","Track month-over-month trends.");
a("Pillar framework","3-5 core themes organizing all social content. Variety, consistency, alignment.","Example: Tips, Client stories, Behind-scenes, Trends, Community.","40% educational, 20% promo, 20% engagement, 20% entertainment.","Prevents the what should we post problem.");
a("Content ratio","Balance post types. 80/20 (value/promo) or 4-1-1 (4 educational, 1 soft, 1 hard).","Value-first builds trust. Promo converts. Need both.","Dropping engagement? Too much promotion.","Dropping leads? Not enough promotion.");
a("Theme calendar","Assign themes to time periods. Makes planning easier.","Example: Motivation Monday, Tutorial Tuesday, Spotlight Friday.","Monthly themes align with seasons or campaigns.","70% planned, 30% reactive for freshness.");
a("Calendar templates","Organize by date, platform, type, copy, media, status.","Minimum: Date, Platform, Pillar, Copy, Media, Status.","Plan 2-4 weeks ahead.","Include approval workflow.");
a("Posting frequency","Varies by platform. Quality beats quantity.","IG: 3-5 feed/week + daily Stories. LinkedIn: 3-5/week.","TikTok: 1-3/day growth, 3-5/week maintenance.","Consistency over volume. Never sacrifice quality.");
a("Content batching","Create multiple pieces in one session. Dramatically more efficient.","Batch by type: all videos one day, copy another.","4-hour shoot = 2-4 weeks of content.","Reduces context-switching, the #1 productivity killer.");
a("Account structure","Account, Campaigns, Ad Groups, Ads/Keywords hierarchy.","Each campaign = single goal.","Ad groups = tightly related keyword themes.","Separate budgets/reporting = separate campaigns.");
a("Campaign types","Search (text), Display (banners), Video (YouTube), Shopping, Performance Max.","Search: captures demand. People actively searching.","Display: awareness and retargeting.","Start with Search. Highest intent.");
a("Keyword Planner","Google tool for keywords, volume estimates, cost forecasting.","Enter seeds, explore suggestions with volume.","Filter by location for local volumes.","Decent volume + low-medium competition = best value.");
a("Match types","Broad (widest), Phrase (moderate), Exact (most precise). Trade reach for relevance.","Broad: triggers for related. Wide reach, less control.","Phrase: triggers when query includes your phrase.","Exact: only that query. Highest relevance, lowest volume.");
a("Negative keywords","Prevent showing for irrelevant searches. Save budget.","Add proactively: free, cheap, DIY, jobs.","Review Search Terms weekly.","Build master list for all campaigns.");
a("Headline formulas","Up to 15 headlines, 30 chars each. Keyword + benefit + CTA.","Include keyword in 2-3 headlines.","Benefit headlines: Grow Your Brand, Expert Team.","CTA: Get Free Consultation, Start Today.");
a("Description writing","Up to 4 descriptions, 90 chars each. Benefits, credibility, CTAs.","Lead with strongest differentiator.","Include social proof.","End with clear CTA.");
a("Ad extensions","Sitelinks, callouts, call, location. Increase clicks 10-15%.","Sitelinks: 4-6 page links.","Callouts: Free Consultation, Local Experts.","No additional cost. Always use them.");
a("Conversion setup","Measures what happens after clicks. Without it, spending blindly.","Define primary conversion action.","Install tag on confirmation page.","Set values for smart bidding.");
a("GTM basics","Tag Manager manages tracking codes without editing site code.","Install one container, manage all tags.","Triggers (when) and Tags (what to track).","Always Preview mode before publishing.");
a("Tag configuration","Tracking snippets firing on triggers. Ads Conversion, Analytics, Pixel.","Each needs: what, when, where data goes.","Variables pass dynamic data.","Create tracking plan before implementing.");
a("Business Suite","Central dashboard for FB and IG business assets.","Verify business, add team, connect assets.","Organic management + Ads Manager for paid.","Keep personal and business separate.");
a("Ad account setup","Where campaigns are created and billed.","Set correct timezone and currency (cannot change later).","Add payment and set spending limit.","Verify domain and install Pixel first.");
a("Campaign hierarchy","Campaign (objective), Ad Set (targeting, budget), Ad (creative).","Campaign: choose objective.","Ad Set: audience, placement, budget, schedule.","Ad: image/video, headline, text, CTA.");
a("Core audiences","Demographics, interests, behaviors targeting.","Start broad. Let algorithm optimize.","Layer: Location + Age + Interest.","Location most powerful for local businesses.");
a("Custom audiences","Target people who already interacted: visitors, subscribers, engagers.","Website: retarget pricing page visitors.","Email: target existing clients.","Engagement: target recent social interactors.");
a("Lookalike audiences","Find new people resembling best customers at scale.","Create from best source: customers > leads > visitors.","Start 1% (most similar), expand 2-5%.","Lookalike + Interest = powerful targeting.");
a("Image ads","Single-image in feeds, Stories, right column. Simple, test quickly.","Eye-catching images. Avoid generic stock.","Text overlay under 20%.","Show service in action, not just logo.");
a("Video ads","More attention than static. Short-form (15-30s) outperforms longer.","Hook in first 3 seconds.","Design for sound-off: captions. 85% watched muted.","Square for feeds, Vertical for Stories.");
a("Carousel format","2-10 swipeable cards with image, headline, link.","Story: Problem, Solution, Benefits, Proof, CTA.","Each card works standalone and builds narrative.","First card determines swiping. Make compelling.");
a("Pixel setup","JavaScript tracking user actions. Enables conversions, retargeting, audiences.","Install via GTM or site header.","Configure events: PageView, Lead, Purchase.","Verify with Pixel Helper Chrome extension.");
a("Retargeting funnels","Different ads based on journey stage.","Top: educational content for video viewers.","Middle: case studies for site visitors.","Bottom: urgency and offers for pricing viewers.");
a("Exclusion audiences","Prevent showing to wrong groups: existing customers, converters.","Exclude converters from lead campaigns.","Exclude customers from awareness.","Exclude employees to prevent inflated data.");
a("Project phases","Discovery, Planning, Execution, Review, Delivery.","Discovery: understand goals, research industry.","Planning: create plan, assign team, set comms.","Execution through Delivery: create-feedback-refine-handoff.");
a("Agency workflows","Standardize brief to delivery. Ensures consistency.","Brief, Discovery, Strategy, Creative, Review, Revisions, Delivery.","PM tools visualize workflow stages.","Document and share with clients during onboarding.");
a("Stakeholder roles","Client contact, internal team, PM, approvers.","Identify single decision-maker at start.","RACI for every deliverable.","PM is single point of contact.");
a("Scope definition","Exactly what is included and excluded. Prevents scope creep.","Write as deliverables: One 5-page website.","Include Out of Scope section.","Changes require formal process.");
a("Timeline planning","Estimate phase durations. Schedule with milestones and deadlines.","Work backwards from delivery date.","Buffer: multiply estimates by 1.3-1.5.","Include client dependencies.");
a("Milestone mapping","Checkpoints breaking projects into manageable phases.","Set at end of each phase.","Clear pass/fail criteria.","Celebrate milestones.");
a("Sprint planning","Short focused periods (1-2 weeks) with defined committed tasks.","Review available work, commit realistically.","Keep goals achievable.","Daily standups for coordination.");
a("Kanban boards","Cards: To Do, In Progress, Review, Done. Limit WIP, reveal bottlenecks.","Too many In Progress = nothing finishes. Limit per column.","Move left to right. Flow, not accumulation.","Pile-ups reveal broken processes.");
a("Stand-ups","Brief daily meetings: what done, doing, blocking.","15 minutes maximum. Coordination, not discussion.","Focus on blockers for PM to resolve.","Remote: async in Slack works well.");
a("Tool setup","Trello, Asana, Notion organize tasks, deadlines, communication.","Trello: Visual kanban. Small teams.","Asana: Structured timelines. Multi-project teams.","Notion: Flexible all-in-one workspace.");
a("Task management","Each task: description, owner, deadline, priority. Break 4+ hour items.","Titles as outcomes: Design 3 options for Client X.","One owner per task.","Priorities and deadline sorting.");
a("Collaboration features","Comments, attachments, @mentions, feeds, integrations.","Task comments keep context attached.","@mention for notifications.","Integrate with Slack.");
a("ICP framework","Ideal Client Profile: industry, size, budget, decision-maker, problems solved.","Analyze best clients: What do they share?","Define must-haves and nice-to-haves.","Clear ICP means saying NO to poor fits.");
a("Industry targeting","Focus on sectors with expertise, results, or competitive advantage.","Choose industries with existing results or connections.","SL targets: hospitality, finance, FMCG, NGOs, telecom.","Specialization enables premium pricing.");
a("Qualification criteria","Whether a lead is worth pursuing. BANT: Budget, Authority, Need, Timeline.","Lead should meet 3 of 4 BANT.","Red flags: no budget, no authority, just exploring.","5 qualified > 50 unqualified prospects.");
a("Outbound tactics","Proactive outreach: cold email, LinkedIn, networking, referrals.","Cold email: Personalize heavily.","LinkedIn: Connect, engage, then message.","Events, associations, speaking.");
a("Inbound strategy","Attract through content, SEO, social proof, referrals. Higher quality leads.","Content demonstrating expertise.","Local SEO optimization.","Testimonials, portfolio, awards drive inbound.");
a("Referral systems","Incentivize recommendations. Highest-converting lead source.","Ask after successful delivery.","Formal program: Refer a client, get 10% off.","Make referring easy.");
a("Proposal structure","Executive Summary, Understanding Needs, Solution, Deliverables, Investment, Why Us, Next Steps.","Executive Summary should standalone.","Show understanding of THEIR business.","Price after value.");
a("Value framing","Present in terms of outcomes, not inputs. Grow audience 40% not 20 posts.","Focus on ROI.","Case studies as evidence.","Address cost of inaction.");
a("Pricing presentation","How you present matters. Show investment, use tiers, tie to value.","Investment not cost.","3 options: stripped-down, recommended, premium.","Break down: $5,000/month = $166/day.");
a("Deck structure","10-15 slides: Intro, Challenge, Understanding, Solution, Portfolio, Team, Timeline, Investment, Why Us, Next Steps.","First 3 slides hook them.","Portfolio relevant to their industry.","Clear, low-friction next step.");
a("Presentation delivery","Conversations, not monologues. Eye contact, read room, adapt.","Present without reading slides.","Start with energy.","Handle questions: direct answer + evidence.");
a("Handling objections","Objections signal interest. Common: expensive, in-house, bad experience, timing.","Expensive: reframe value, phased approach.","In-house: highlight opportunity cost.","Bad experience: empathize, explain your approach.");
a("Andragogy","Adult learning theory. Need relevance, draw on experience, self-directed.","Adults need WHY before engaging.","Use experience as resource through discussion.","Best through problem-solving and application.");
a("Learning styles","Multimodal teaching with varied formats is proven effective.","Everyone benefits from multiple modalities.","Vary: lecture, discussion, practice, reflection.","Visuals support verbal. Practice reinforces.");
a("Retention strategies","70% forgotten within 24 hours without reinforcement.","Spaced repetition: review at 1, 3, 7, 14 days.","Active recall: testing beats re-reading.","Teach-back: explaining to others dramatically improves retention.");
a("Bloom's Taxonomy","Cognitive skills: Remember, Understand, Apply, Analyze, Evaluate, Create.","Remember/Understand: List, Explain.","Apply/Analyze: Use, Compare.","Evaluate/Create: Design, Critique, Build.");
a("Objective structure","By the end, learners will be able to [verb] + [task] + [criteria].","Use action verbs: list, explain, apply, compare.","Example: Create a content calendar using the pillar framework.","2-4 objectives per session. More = too much.");
a("Measurable outcomes","Evidence objectives were met through assessment or demonstration.","Observable: Design a logo that meets guidelines.","Include criteria: Write 5 captions with hooks and CTAs.","Align assessments directly to outcomes.");
a("Module sequencing","Logical order: foundational before advanced, theory before practice.","Start with why before how.","Each module builds on previous.","End each with integrating practical activity.");
a("Prerequisite mapping","Identify required skills before new material.","Map dependencies explicitly.","Visual diagram of learning paths.","Self-assessment for prerequisite verification.");
a("Time allocation","Balance delivery with practice, discussion, assessment.","40% delivery, 60% practice and application.","Attention drops after 15-20 min. Break into segments.","Over-prepare content, under-plan time.");
a("Assessment types","Formative (during: quizzes) and summative (after: projects). Both valuable.","Formative checks understanding for real-time adjustment.","Summative evaluates overall achievement.","Practical assessments most authentic.");
a("Rubric design","Define criteria and performance levels. Consistent, transparent.","3-4 levels: Exceeds, Meets, Approaching, Not Yet.","Describe observable behavior at each level.","Share before assessment.");
a("Formative vs summative","Formative during learning for feedback. Summative after for evaluation.","Formative: polls, discussions, drafts, exercises.","Summative: projects, portfolios, demonstrations.","Frequent formative, strategic summative.");
a("Facilitator mindset","Guide learning, not deliver information. Guide on the side.","Create conditions for learning.","Ask more than you tell.","Comfort with silence: wait 7-10 seconds after questions.");
a("Guiding vs telling","Guiding leads to discovery through questions. Telling states directly. Guiding = deeper learning.","Socratic method: questions leading to conclusions.","Redirect: What do you think?","Tell for facts. Guide for concepts.");
a("Participant-centered learning","Learner's experience at center. Diverse experiences, different paces.","Understand audience first.","Give choices in exercises.","Check in regularly.");
a("Voice projection","Speak loudly and clearly. Diaphragmatic breathing, open mouth.","Deep belly breaths power your voice.","Vary volume for emphasis.","Project to farthest person.");
a("Body language","Open posture, eye contact, purposeful movement.","Stand presenting, sit facilitating.","Eye contact with different parts of room.","Avoid nervous habits.");
a("Pacing & pauses","Speed and strategic pauses. Emphasis, thinking time, prevent overload.","Slow for complex, speed up for review.","Pause 3-5 seconds after questions.","Transitions between sections help organize.");
a("Group activities","Active learning through discussion, problem-solving, collaboration.","Clear instructions with time limits.","1-minute warnings before time up.","Debrief every activity.");
a("Think-pair-share","Think individually, discuss with partner, share with group.","Think (2 min): individual reflection.","Pair (3-5 min): discuss and build.","Share (5 min): key insights with full group.");
a("Breakout sessions","Small groups (3-5) for focused work. Increases participation.","Assign roles: timekeeper, notetaker, presenter.","Specific deliverables.","Walk between groups to help.");
a("Session delivery","Preparation, presence, flexibility. Know material, adapt to needs.","Prepare 120%, deliver 80%.","Start strong: first 2 minutes set tone.","End strong: takeaways, next session, action item.");
a("Peer evaluation","Participants assess each other using criteria.","Clear rubric for consistency.","One effective thing and one suggestion.","Debrief the process itself.");
a("Self-reflection","Evaluate own learning and growth. Metacognitive awareness.","What was most valuable? What will you do differently?","Written deeper than verbal.","Connect to action: one thing to implement.");
a("Guideline structure","Organized: Introduction, Logo, Color, Typography, Imagery, Voice, Applications, Dos/Don'ts.","Practical with assets and codes.","One-page quick-reference card.","Living document. Update as brand evolves.");
a("Usage examples","Show brand elements in real contexts: social, email, presentations, print.","Correct and incorrect side by side.","Templates for common applications.","Examples at different sizes and backgrounds.");
a("Do's and don'ts","Guardrails preventing common mistakes. Stretching logos, wrong colors, effects.","Logo: no stretching, rotating, shadows, color changes.","Color: no low-opacity text, no clashing combos.","Visual examples of each mistake.");
a("Typeface anatomy","Baseline, x-height, cap height, ascenders, descenders, serif vs sans-serif.","Serif (Times): strokes, traditional, editorial.","Sans-serif (Helvetica): modern, clean, approachable.","Higher x-height = more readable at small sizes.");
a("Font categories","Serif, Sans-Serif, Slab, Script, Display, Monospace. Different associations.","Serif: professional, editorial. Great for print body.","Sans-Serif: modern, digital. Dominant in web/UI.","Script/Display: decorative. Headlines only.");
a("Pairing rules","Contrast and harmony. Different enough for interest, cohesive enough to work.","Pair serif heading with sans-serif body.","Match mood. Same personality.","Safe: one family, different weights.");
a("Culture definition","Culture is the shared beliefs, values, and behaviors that define how a team operates. It is not what you say but what you do daily.","Culture is caught, not taught. People observe what gets rewarded.","A strong culture attracts talent that fits and repels those who do not.","Define culture intentionally or it will define itself.");
a("Values in practice","Living values means they influence real decisions: hiring, firing, client selection, and daily interactions.","Each value needs specific behaviors attached to it.","Recognize and reward value-aligned behavior publicly.","Address value violations quickly regardless of performance.");
a("Culture rituals","Recurring practices that reinforce culture: weekly wins, creative reviews, team lunches, learning sessions.","Rituals create rhythm and predictability.","They should be authentic, not forced.","Start small: one meaningful ritual is better than five hollow ones.");
a("Job descriptions","Well-written JDs attract the right candidates. Focus on outcomes, not just tasks.","Lead with impact: What will this person achieve?","Include must-have vs nice-to-have skills clearly.","Show culture and growth opportunities.");
a("Interview frameworks","Structured interviews reduce bias and improve hiring quality.","Use the same questions for all candidates in a role.","Behavioral questions: Tell me about a time when...","Score against criteria, not gut feeling.");
a("Skill assessment","Practical tests reveal capability better than resumes.","Design tasks that mirror actual work.","Time-box assessments to respect candidates.","Evaluate both output quality and process thinking.");
a("Review frameworks","Performance reviews should develop, not just evaluate.","Continuous feedback beats annual surprises.","360 reviews provide complete perspective.","Focus on growth areas, not just past performance.");
a("Constructive feedback","Effective feedback is specific, timely, and actionable.","SBI model: Situation, Behavior, Impact.","Balance reinforcing (what to keep) with redirecting (what to change).","Ask for their perspective before giving yours.");
a("Growth planning","Individual development plans connect personal goals to organizational needs.","Identify 1-2 focus areas per quarter.","Provide resources: training, mentoring, stretch assignments.","Review progress monthly, adjust quarterly.");
a("Delegation matrix","Categorize tasks by importance and who should handle them. Leaders should focus on high-impact, high-skill work.","Delegate: routine tasks others can learn.","Automate: repetitive processes.","Eliminate: tasks that do not add value.");
a("RACI charts","Responsible, Accountable, Consulted, Informed. Clarifies roles for every deliverable.","One person Accountable per task (the decision-maker).","Responsible people do the work.","Too many Consulted slows everything down.");
a("Accountability loops","Systems ensuring follow-through: check-ins, deadlines, visibility, consequences.","Weekly progress updates create natural accountability.","Make commitments public within the team.","Address missed commitments promptly and constructively.");
a("Conflict styles","Five styles: Competing, Collaborating, Compromising, Avoiding, Accommodating. Each has appropriate contexts.","Collaborating is ideal when both outcomes matter.","Competing when urgent decisions are needed.","Avoiding is appropriate when the issue is trivial.");
a("Mediation techniques","Neutral facilitation of disputes. Focus on interests, not positions.","Hear both sides separately first.","Find common ground and shared goals.","Move from blame to problem-solving.");
a("Resolution frameworks","Structured approaches to resolve recurring conflicts.","Address the issue, not the person.","Document agreements and follow-up dates.","Escalation paths for unresolved issues.");
a("Color wheel","Primary (red, blue, yellow), secondary (green, orange, purple), tertiary colors arranged in a circle showing relationships.","Complementary colors sit opposite each other.","Analogous colors sit next to each other.","Triadic colors form an equilateral triangle.");
a("Color harmonies","Systematic combinations: complementary, analogous, triadic, split-complementary, tetradic.","Complementary: maximum contrast and vibrancy.","Analogous: harmonious and pleasing.","Use the 60-30-10 rule for balance.");
a("Emotional associations","Colors trigger psychological responses shaped by culture and context.","Warm colors (red, orange, yellow): energy, urgency, warmth.","Cool colors (blue, green, purple): calm, trust, sophistication.","Consider your target audience's cultural context.");
a("Hierarchy systems","Visual hierarchy uses size, weight, color, and spacing to create information priority.","Primary: largest, boldest. What you see first.","Secondary: supports primary. Provides context.","Tertiary: details, metadata. Smallest.");
a("Grid structures","Underlying frameworks that align and organize design elements consistently.","Column grids: most common for layouts.","Modular grids: for complex, data-heavy designs.","Consistent gutters create rhythm.");
a("F & Z patterns","Eye-tracking patterns showing how users scan content. F for text-heavy, Z for minimal.","F-pattern: scan top, then left side. Place key info there.","Z-pattern: top-left to top-right, diagonal to bottom-left to bottom-right.","Place CTAs at the end of the pattern.");

const SKILLS = [
  { id: "strategic-planning", name: "Strategic Planning", cat: "lead", lv: "Advanced", icon: "\u{1F9ED}", color: "#7C3AED", dur: "12h", roles: ["Managing Director"], desc: "Develop strategic plans, set goals, and build growth roadmaps.", lessons: [
    { id: "sp01", title: "What is Strategic Planning?", type: "Lecture", duration: "45 min", desc: "Understand strategic planning and how it differs from operational planning.", topics: ["Definition & scope", "Strategic vs operational planning", "Why agencies need strategy"] },
    { id: "sp02", title: "Environmental Scanning & SWOT", type: "Workshop", duration: "1.5h", desc: "Analyze strengths, weaknesses, opportunities, and threats.", topics: ["SWOT framework", "PESTEL analysis", "Industry mapping"] },
    { id: "sp03", title: "Vision, Mission & Values", type: "Workshop", duration: "1h", desc: "Craft compelling vision statements and align mission with objectives.", topics: ["Vision crafting", "Mission statements", "Values alignment"] },
    { id: "sp04", title: "SMART Goals & OKRs", type: "Hands-on", duration: "1.5h", desc: "Translate strategy into measurable objectives.", topics: ["SMART goals", "OKR framework", "Cascading objectives"] },
    { id: "sp05", title: "Competitive Analysis", type: "Case Study", duration: "1.5h", desc: "Study competitors and find differentiation.", topics: ["Competitor mapping", "Positioning strategy", "Blue ocean thinking"] },
    { id: "sp06", title: "3-Year Growth Roadmap", type: "Project", duration: "2h", desc: "Create a phased growth plan.", topics: ["Phased planning", "Milestone setting", "Resource allocation"] },
    { id: "sp07", title: "Execution & Review", type: "Workshop", duration: "1.5h", desc: "Implement execution and review processes.", topics: ["Execution frameworks", "Review cadence", "Pivot strategies"] },
    { id: "sp08", title: "Capstone: Strategic Plan", type: "Capstone", duration: "2h", desc: "Present a complete strategic plan.", topics: ["Presentation skills", "Stakeholder alignment", "Feedback integration"] },
  ]},
  { id: "team-leadership", name: "Team Leadership", cat: "lead", lv: "Intermediate", icon: "\u{1F465}", color: "#7C3AED", dur: "10h", roles: ["Managing Director", "Creative Director", "Project Manager"], desc: "Build and lead high-performing teams.", lessons: [
    { id: "tl01", title: "Building Agency Culture", type: "Lecture", duration: "1h", desc: "Define culture that attracts talent.", topics: ["Culture definition", "Values in practice", "Culture rituals"] },
    { id: "tl02", title: "Hiring", type: "Workshop", duration: "1.5h", desc: "Job descriptions, interviews, evaluation.", topics: ["Job descriptions", "Interview frameworks", "Skill assessment"] },
    { id: "tl03", title: "Feedback & Reviews", type: "Role Play", duration: "1.5h", desc: "Give feedback that drives growth.", topics: ["Review frameworks", "Constructive feedback", "Growth planning"] },
    { id: "tl04", title: "Delegation", type: "Workshop", duration: "1.5h", desc: "Delegate without micromanaging.", topics: ["Delegation matrix", "RACI charts", "Accountability loops"] },
    { id: "tl05", title: "Conflict Resolution", type: "Role Play", duration: "1h", desc: "Navigate conflicts constructively.", topics: ["Conflict styles", "Mediation techniques", "Resolution frameworks"] },
  ]},
  { id: "brand-identity", name: "Brand Identity", cat: "brand", lv: "Intermediate", icon: "\u{1F48E}", color: "#EC4899", dur: "10h", roles: ["Creative Director", "Graphic Designer"], desc: "Design brand systems: logos, colors, typography, guidelines.", lessons: [
    { id: "bi01", title: "What Makes a Brand?", type: "Lecture", duration: "1h", desc: "Brand identity, image, and equity.", topics: ["Brand anatomy", "Identity vs image", "Brand equity"] },
    { id: "bi02", title: "Logo Design", type: "Workshop", duration: "1.5h", desc: "Versatile, memorable, scalable logos.", topics: ["Logo types", "Versatility testing", "Scalability"] },
    { id: "bi03", title: "Color Systems", type: "Hands-on", duration: "1.5h", desc: "Build palettes with usage rules.", topics: ["Color psychology", "Palette construction", "Accessibility contrast"] },
    { id: "bi04", title: "Typography", type: "Workshop", duration: "1h", desc: "Select, pair, define hierarchy.", topics: ["Font pairing", "Type hierarchy", "Licensing"] },
    { id: "bi05", title: "Brand Guidelines", type: "Project", duration: "2h", desc: "Compile into professional document.", topics: ["Guideline structure", "Usage examples", "Do's and don'ts"] },
  ]},
  { id: "design-fundamentals", name: "Design Fundamentals", cat: "brand", lv: "Beginner", icon: "\u{1F4D0}", color: "#EC4899", dur: "8h", roles: ["Graphic Designer"], desc: "Core design principles.", lessons: [
    { id: "df01", title: "Elements of Design", type: "Lecture", duration: "1h", desc: "Line, shape, color, texture, space.", topics: ["Design elements", "Visual building blocks", "Seeing like a designer"] },
    { id: "df02", title: "Composition", type: "Workshop", duration: "1h", desc: "Balance, contrast, alignment.", topics: ["Balance & symmetry", "Contrast", "Proximity & alignment"] },
    { id: "df03", title: "Typography", type: "Hands-on", duration: "1.5h", desc: "Typefaces, pairing, readability.", topics: ["Typeface anatomy", "Font categories", "Pairing rules"] },
    { id: "df04", title: "Color Theory", type: "Workshop", duration: "1.5h", desc: "Color wheel, harmonies, emotions.", topics: ["Color wheel", "Color harmonies", "Emotional associations"] },
    { id: "df05", title: "Hierarchy & Layout", type: "Hands-on", duration: "1h", desc: "Guide eye through design.", topics: ["Hierarchy systems", "Grid structures", "F & Z patterns"] },
  ]},
  { id: "copywriting", name: "Copywriting", cat: "content", lv: "Beginner", icon: "\u270F\uFE0F", color: "#7C3AED", dur: "11.5h", roles: ["Content Strategist"], desc: "Persuasive copy for all channels.", lessons: [
    { id: "psych01", title: psychologyModule.title, type: psychologyModule.type, duration: psychologyModule.duration, desc: psychologyModule.desc, topics: psychologyModule.topics, rich: psychologyModule },
    { id: "cw01", title: "Fundamentals", type: "Lecture", duration: "1h", desc: "Clarity, persuasion, action.", topics: ["Copy vs content", "AIDA framework", "Value proposition writing"] },
    { id: "cw02", title: "Headlines & Hooks", type: "Practice", duration: "1.5h", desc: "Grab attention and pull in.", topics: ["Headline formulas", "Power words", "A/B testing hooks"] },
    { id: "cw03", title: "Social Copy", type: "Workshop", duration: "1.5h", desc: "Platform-specific copy.", topics: ["Platform voice", "Caption structure", "Hashtag strategy"] },
    { id: "cw04", title: "Web Copy", type: "Hands-on", duration: "1.5h", desc: "Landing pages that convert.", topics: ["Hero sections", "Feature-benefit copy", "CTA writing"] },
    { id: "cw05", title: "Email Copy", type: "Workshop", duration: "1h", desc: "Subject lines and sequences.", topics: ["Subject lines", "Email structure", "Sequence writing"] },
    { id: "cw06", title: "Ad Copy", type: "Hands-on", duration: "1.5h", desc: "Ads within character limits.", topics: ["Ad copy formulas", "Character limits", "Testing variations"] },
  ]},
  { id: "camera-operation", name: "Camera Operation", cat: "video", lv: "Beginner", icon: "\u{1F4F7}", color: "#EF4444", dur: "10h", roles: ["Videographer"], desc: "Master cameras for pro video.", lessons: [
    { id: "co01", title: "Camera Anatomy", type: "Lecture", duration: "1h", desc: "Sensors, lenses, formats.", topics: ["Sensor sizes", "Lens mounts", "Recording codecs"] },
    { id: "co02", title: "Exposure Triangle", type: "Hands-on", duration: "1.5h", desc: "ISO, shutter, aperture.", topics: ["ISO behavior", "Shutter speed rules", "Aperture control"] },
    { id: "co03", title: "Focus Systems", type: "Hands-on", duration: "1h", desc: "Manual, peaking, autofocus.", topics: ["Focus peaking", "AF modes", "Pull focus techniques"] },
    { id: "co04", title: "White Balance", type: "Workshop", duration: "1h", desc: "For any lighting.", topics: ["Color temperature", "Custom WB", "Mixed lighting"] },
    { id: "co05", title: "Profiles & Log", type: "Hands-on", duration: "1.5h", desc: "Configure for post.", topics: ["Standard profiles", "Log formats", "Dynamic range"] },
    { id: "co06", title: "Lens Selection", type: "Workshop", duration: "1.5h", desc: "Right lens for every shot.", topics: ["Focal lengths", "Lens compression", "Prime vs zoom"] },
  ]},
  { id: "lighting-techniques", name: "Lighting", cat: "video", lv: "Intermediate", icon: "\u{1F4A1}", color: "#EF4444", dur: "8h", roles: ["Videographer", "Production Assistant"], desc: "Master lighting for all scenarios.", lessons: [
    { id: "lt01", title: "Properties of Light", type: "Lecture", duration: "1h", desc: "Hard/soft, direction, color.", topics: ["Light quality", "Direction & angle", "Color temperature"] },
    { id: "lt02", title: "Three-Point Lighting", type: "Hands-on", duration: "1.5h", desc: "Key, fill, back lights.", topics: ["Key light placement", "Fill ratios", "Back light purpose"] },
    { id: "lt03", title: "Interview Lighting", type: "Hands-on", duration: "1.5h", desc: "Professional subject lighting.", topics: ["Talking head setup", "Background separation", "Eye lights"] },
    { id: "lt04", title: "Creative Lighting", type: "Workshop", duration: "1h", desc: "Mood, drama, storytelling.", topics: ["Mood lighting", "Colored gels", "Practical lights"] },
  ]},
  { id: "video-editing", name: "Video Editing", cat: "post", lv: "Beginner", icon: "\u2702\uFE0F", color: "#8B5CF6", dur: "10h", roles: ["Video Editor"], desc: "Edit professional video.", lessons: [
    { id: "ed01", title: "NLE Setup", type: "Hands-on", duration: "1h", desc: "Navigate Premiere/Resolve.", topics: ["Interface tour", "Workspace customization", "Keyboard shortcuts"] },
    { id: "ed02", title: "Assembly Edit", type: "Workshop", duration: "1.5h", desc: "Build story structure.", topics: ["Selects process", "Assembly technique", "Story structure"] },
    { id: "ed03", title: "Cutting", type: "Hands-on", duration: "1.5h", desc: "Cut types and transitions.", topics: ["Cut types", "J & L cuts", "Transition use"] },
    { id: "ed04", title: "Pacing", type: "Practice", duration: "1h", desc: "Control through rhythm.", topics: ["Beat matching", "Tension building", "Breathing room"] },
    { id: "ed05", title: "Capstone: Full Edit", type: "Capstone", duration: "2h", desc: "Complete brand video.", topics: ["End-to-end editing", "Revision process", "Final delivery"] },
  ]},
  { id: "color-grading", name: "Color Grading", cat: "post", lv: "Intermediate", icon: "\u{1F3A8}", color: "#8B5CF6", dur: "8h", roles: ["Video Editor"], desc: "Correction and creative grading.", lessons: [
    { id: "cg01", title: "Color Theory", type: "Lecture", duration: "1h", desc: "Wheels, complements, emotion.", topics: ["Video color wheel", "Complementary colors", "Emotional grading"] },
    { id: "cg02", title: "Reading Scopes", type: "Hands-on", duration: "1h", desc: "Waveform, vectorscope.", topics: ["Waveform monitor", "Vectorscope", "Histogram"] },
    { id: "cg03", title: "Correction", type: "Hands-on", duration: "1.5h", desc: "Fix WB, exposure, casts.", topics: ["White balance fix", "Exposure correction", "Color cast removal"] },
    { id: "cg04", title: "Creative Grading", type: "Hands-on", duration: "1.5h", desc: "Cinematic grades and LUTs.", topics: ["Creative looks", "LUT application", "Custom LUT creation"] },
  ]},
  { id: "motion-graphics", name: "Motion Graphics", cat: "post", lv: "Intermediate", icon: "\u2728", color: "#8B5CF6", dur: "8h", roles: ["Video Editor"], desc: "Animated text, titles, effects.", lessons: [
    { id: "mg01", title: "Overview", type: "Lecture", duration: "45 min", desc: "Types and industry uses.", topics: ["MoGraph types", "Industry uses", "Tool overview"] },
    { id: "mg02", title: "Keyframes", type: "Hands-on", duration: "1.5h", desc: "Animate properties.", topics: ["Keyframe types", "Ease in/out", "Graph editor"] },
    { id: "mg03", title: "Animated Text", type: "Workshop", duration: "1.5h", desc: "Titles and reveals.", topics: ["Text animators", "Kinetic typography", "Title sequences"] },
    { id: "mg04", title: "Lower Thirds", type: "Hands-on", duration: "1h", desc: "Design and animate.", topics: ["Lower third design", "Name plates", "Info call-outs"] },
  ]},
  { id: "html-css", name: "HTML & CSS", cat: "web", lv: "Beginner", icon: "\u{1F310}", color: "#3B82F6", dur: "10h", roles: ["Web Developer"], desc: "Semantic HTML, CSS, responsive.", lessons: [
    { id: "hc01", title: "HTML Structure", type: "Lecture", duration: "1h", desc: "Accessible semantic HTML.", topics: ["Document structure", "Semantic tags", "Accessibility basics"] },
    { id: "hc02", title: "CSS Selectors", type: "Hands-on", duration: "1h", desc: "Selectors and cascade.", topics: ["Selector types", "Specificity", "Inheritance"] },
    { id: "hc03", title: "Box Model", type: "Workshop", duration: "1h", desc: "Margin, padding, border.", topics: ["Box model", "Margin collapse", "Box-sizing"] },
    { id: "hc04", title: "Flexbox", type: "Hands-on", duration: "1.5h", desc: "Flexible layouts.", topics: ["Flex container", "Flex items", "Alignment"] },
    { id: "hc05", title: "CSS Grid", type: "Hands-on", duration: "1.5h", desc: "2D layouts.", topics: ["Grid template", "Grid areas", "Responsive grid"] },
    { id: "hc06", title: "Responsive", type: "Workshop", duration: "1.5h", desc: "Every screen size.", topics: ["Mobile-first", "Media queries", "Fluid typography"] },
  ]},
  { id: "wordpress-cms", name: "WordPress", cat: "web", lv: "Intermediate", icon: "\u{1F4E6}", color: "#3B82F6", dur: "10h", roles: ["Web Developer"], desc: "Build WordPress websites.", lessons: [
    { id: "wp01", title: "Setup", type: "Hands-on", duration: "1h", desc: "Install and configure.", topics: ["Installation", "Dashboard tour", "Settings"] },
    { id: "wp02", title: "Themes", type: "Workshop", duration: "1.5h", desc: "Choose and customize.", topics: ["Theme selection", "Customizer", "Child themes"] },
    { id: "wp03", title: "Page Builders", type: "Hands-on", duration: "1.5h", desc: "Elementor and Gutenberg.", topics: ["Elementor widgets", "Gutenberg blocks", "Templates"] },
    { id: "wp04", title: "Plugins", type: "Hands-on", duration: "1h", desc: "SEO, security, forms.", topics: ["Yoast SEO", "Wordfence", "Contact Form 7"] },
  ]},
  { id: "social-media-strategy", name: "Social Strategy", cat: "digi", lv: "Beginner", icon: "\u{1F4F1}", color: "#E11D48", dur: "8h", roles: ["Social Media Manager"], desc: "Data-driven social strategies.", lessons: [
    { id: "ss01", title: "Platforms", type: "Lecture", duration: "1h", desc: "Strengths and demographics.", topics: ["Platform demographics", "Algorithm basics", "Content types per platform"] },
    { id: "ss02", title: "Goals", type: "Workshop", duration: "1h", desc: "Align with business objectives.", topics: ["Goal frameworks", "KPI selection", "Benchmarking"] },
    { id: "ss03", title: "Content Pillars", type: "Hands-on", duration: "1.5h", desc: "Consistent messaging.", topics: ["Pillar framework", "Content ratio", "Theme calendar"] },
    { id: "ss04", title: "Calendar", type: "Hands-on", duration: "1.5h", desc: "30-day content plan.", topics: ["Calendar templates", "Posting frequency", "Content batching"] },
  ]},
  { id: "google-ads", name: "Google Ads", cat: "digi", lv: "Intermediate", icon: "\u{1F3AF}", color: "#F97316", dur: "8h", roles: ["Digital Marketing Specialist"], desc: "Create and optimize PPC.", lessons: [
    { id: "ga01", title: "Account Setup", type: "Hands-on", duration: "1h", desc: "Campaign hierarchy.", topics: ["Account structure", "Campaign types", "Settings"] },
    { id: "ga02", title: "Keywords", type: "Hands-on", duration: "1h", desc: "Research and organize.", topics: ["Keyword Planner", "Match types", "Negative keywords"] },
    { id: "ga03", title: "Ad Writing", type: "Workshop", duration: "1h", desc: "Compelling ad copy.", topics: ["Headline formulas", "Description writing", "Ad extensions"] },
    { id: "ga04", title: "Tracking", type: "Hands-on", duration: "1.5h", desc: "Conversions with GTM.", topics: ["Conversion setup", "GTM basics", "Tag configuration"] },
  ]},
  { id: "meta-ads", name: "Meta Ads", cat: "digi", lv: "Intermediate", icon: "\u{1F4E3}", color: "#F97316", dur: "8h", roles: ["Social Media Manager", "Digital Marketing Specialist"], desc: "Facebook and Instagram ads.", lessons: [
    { id: "ma01", title: "Setup", type: "Hands-on", duration: "1h", desc: "Business Suite and accounts.", topics: ["Business Suite", "Ad account setup", "Campaign hierarchy"] },
    { id: "ma02", title: "Targeting", type: "Hands-on", duration: "1.5h", desc: "Audiences and lookalikes.", topics: ["Core audiences", "Custom audiences", "Lookalike audiences"] },
    { id: "ma03", title: "Creative", type: "Workshop", duration: "1h", desc: "Images, video, carousels.", topics: ["Image ads", "Video ads", "Carousel format"] },
    { id: "ma04", title: "Retargeting", type: "Workshop", duration: "1.5h", desc: "Funnels and exclusions.", topics: ["Pixel setup", "Retargeting funnels", "Exclusion audiences"] },
  ]},
  { id: "project-management", name: "Project Management", cat: "ops", lv: "Beginner", icon: "\u{1F4CB}", color: "#14B8A6", dur: "8h", roles: ["Project Manager"], desc: "Plan, execute, deliver projects.", lessons: [
    { id: "prj01", title: "Project Lifecycle", type: "Lecture", duration: "1h", desc: "Brief through delivery.", topics: ["Project phases", "Agency workflows", "Stakeholder roles"] },
    { id: "prj02", title: "Scope & Timeline", type: "Workshop", duration: "1.5h", desc: "Define and schedule.", topics: ["Scope definition", "Timeline planning", "Milestone mapping"] },
    { id: "prj03", title: "Agile & Kanban", type: "Practice", duration: "1h", desc: "Creative workflows.", topics: ["Sprint planning", "Kanban boards", "Stand-ups"] },
    { id: "prj04", title: "PM Tools", type: "Hands-on", duration: "1.5h", desc: "Trello, Asana, Notion.", topics: ["Tool setup", "Task management", "Collaboration features"] },
  ]},
  { id: "business-development", name: "Business Development", cat: "ops", lv: "Intermediate", icon: "\u{1F91D}", color: "#A855F7", dur: "8h", roles: ["Business Dev Lead"], desc: "Leads, proposals, pitches.", lessons: [
    { id: "bdev01", title: "Client Profiling", type: "Workshop", duration: "1h", desc: "Define ideal clients.", topics: ["ICP framework", "Industry targeting", "Qualification criteria"] },
    { id: "bdev02", title: "Lead Gen", type: "Practice", duration: "1.5h", desc: "Networking and outreach.", topics: ["Outbound tactics", "Inbound strategy", "Referral systems"] },
    { id: "bdev03", title: "Proposals", type: "Hands-on", duration: "1.5h", desc: "Communicate value.", topics: ["Proposal structure", "Value framing", "Pricing presentation"] },
    { id: "bdev04", title: "Pitching", type: "Role Play", duration: "1h", desc: "Clarity and confidence.", topics: ["Deck structure", "Presentation delivery", "Handling objections"] },
  ]},
  { id: "instructional-design", name: "Instructional Design", cat: "train", lv: "Intermediate", icon: "\u{1F4D8}", color: "#0EA5E9", dur: "6h", roles: ["Training Coordinator"], desc: "Design effective training.", lessons: [
    { id: "id01", title: "Adult Learning", type: "Lecture", duration: "1h", desc: "How adults learn.", topics: ["Andragogy", "Learning styles", "Retention strategies"] },
    { id: "id02", title: "Objectives", type: "Workshop", duration: "1h", desc: "Clear, measurable.", topics: ["Bloom's Taxonomy", "Objective structure", "Measurable outcomes"] },
    { id: "id03", title: "Curriculum", type: "Hands-on", duration: "1.5h", desc: "Structure learning paths.", topics: ["Module sequencing", "Prerequisite mapping", "Time allocation"] },
    { id: "id04", title: "Assessment", type: "Workshop", duration: "1h", desc: "Measure real learning.", topics: ["Assessment types", "Rubric design", "Formative vs summative"] },
  ]},
  { id: "facilitation", name: "Facilitation", cat: "train", lv: "Intermediate", icon: "\u{1F3A4}", color: "#0EA5E9", dur: "6h", roles: ["Training Coordinator"], desc: "Engage and guide learners.", lessons: [
    { id: "fac01", title: "Facilitation vs Teaching", type: "Lecture", duration: "45 min", desc: "Guide, not lecture.", topics: ["Facilitator mindset", "Guiding vs telling", "Participant-centered learning"] },
    { id: "fac02", title: "Presentation Skills", type: "Practice", duration: "1.5h", desc: "Voice, body, pacing.", topics: ["Voice projection", "Body language", "Pacing & pauses"] },
    { id: "fac03", title: "Engaging Learners", type: "Workshop", duration: "1h", desc: "Activities for all.", topics: ["Group activities", "Think-pair-share", "Breakout sessions"] },
    { id: "fac04", title: "Capstone", type: "Capstone", duration: "1h", desc: "Deliver with feedback.", topics: ["Session delivery", "Peer evaluation", "Self-reflection"] },
  ]},
];

const QZ = {
  sp01: [
    { q: "What is the primary difference between strategic and operational planning?", opts: ["Strategic focuses on long-term direction; operational on daily execution", "They are identical", "Operational is more important", "Strategic is only for large companies"], correct: 0 },
    { q: "How many key questions does strategic planning answer?", opts: ["Three: Where are we? Where going? How?", "One", "Five", "Two"], correct: 0 },
    { q: "Why do agencies need strategic planning?", opts: ["To differentiate and avoid chasing any client", "Legally required", "Replace marketing", "Reduce headcount"], correct: 0 },
  ],
  sp02: [
    { q: "What does SWOT stand for?", opts: ["Strengths, Weaknesses, Opportunities, Threats", "Strategy, Workflow, Operations, Testing", "Sales, Website, Outreach, Targeting", "Systems, Workflow, Objectives, Tactics"], correct: 0 },
    { q: "Which SWOT elements are internal?", opts: ["Strengths and Weaknesses", "Opportunities and Threats", "All four", "None"], correct: 0 },
    { q: "What does PESTEL examine?", opts: ["Political, Economic, Social, Technological, Environmental, Legal", "Only finances", "Internal capabilities", "Customer satisfaction"], correct: 0 },
  ],
  sp03: [
    { q: "What is a vision statement?", opts: ["Description of aspired future state", "Product list", "Annual budget", "Legal document"], correct: 0 },
    { q: "Ideal mission statement length?", opts: ["Under 30 words", "500+ words", "One page", "Unlimited"], correct: 0 },
    { q: "When are values effective?", opts: ["When influencing real decisions", "When on a wall", "When impressive sounding", "When matching competitors"], correct: 0 },
  ],
};

function gc(topic) {
  var k = topic.toLowerCase();
  var c = C[k];
  if (c) return c;
  return { text: "Understanding " + topic + " is essential for this skill. This concept is a core building block in your professional development.", bullets: ["Learn fundamentals of " + topic, "Apply " + topic + " in real projects", "Practice with hands-on exercises"] };
}

function genSlides(ls) {
  var slides = [{ type: "intro", title: ls.title, subtitle: ls.type + " \u2014 " + ls.duration, body: ls.desc, icon: "\u{1F4D6}" }];
  (ls.topics || []).forEach(function(t, i) { var c = gc(t); slides.push({ type: "topic", title: t, body: c.text, bullets: c.bullets, icon: ICO[i % ICO.length], num: i + 1, total: ls.topics.length }); });
  slides.push({ type: "summary", title: "Key Takeaways", topics: ls.topics || [], icon: "\u2705" });
  return slides;
}

function getQuiz(ls) {
  if (ls.rich && ls.rich.quiz) return ls.rich.quiz;
  if (QZ[ls.id]) return QZ[ls.id];
  var t = ls.topics || [];
  if (t.length < 2) return [];
  return [
    { q: "Which is a core topic in " + ls.title + "?", opts: [t[0], "Blockchain Architecture", "Marine Biology", "Quantum Computing"], correct: 0 },
    { q: "What does " + ls.title + " primarily teach?", opts: [ls.desc, "Cooking", "Astrophysics", "Music"], correct: 0 },
    { q: "Which skill would you develop?", opts: ["Applying " + t[t.length - 1] + " professionally", "Medical procedures", "Piloting aircraft", "Spacecraft design"], correct: 0 },
  ];
}

export default function LMS({ onBack, user, onLogout }) {
  var _a = useState("dash"), v = _a[0], setV = _a[1];
  var _b = useState(null), sk = _b[0], setSk = _b[1];
  var _c = useState(null), ls = _c[0], setLs = _c[1];
  var _d = useState({}), dn = _d[0], setDn = _d[1];
  var _progLoaded = useState(false), progLoaded = _progLoaded[0], setProgLoaded = _progLoaded[1];
  var _e = useState(""), sr = _e[0], setSr = _e[1];
  var _f = useState("All"), fc = _f[0], setFc = _f[1];
  var _g = useState("All"), fl = _g[0], setFl = _g[1];
  var _h = useState(false), sbo = _h[0], setSbo = _h[1];
  var _i = useState(0), si = _i[0], setSi = _i[1];
  var _j = useState("browse"), md = _j[0], setMd = _j[1];
  var _k = useState({}), qa = _k[0], setQa = _k[1];
  var _l = useState(false), qs = _l[0], setQs = _l[1];
  var _toast = useState(null), toast = _toast[0], setToast = _toast[1];
  var _dm = useState(function(){try{return localStorage.getItem("sf-dark")==="1";}catch(e){return false;}}), dark = _dm[0], setDark = _dm[1];
  function toggleDark(){setDark(function(d){localStorage.setItem("sf-dark",d?"0":"1");return !d;});}
  var T = dark ? {bg:"#111318",card:"#1A1D24",text:"#E5E5E5",text2:"#AAA",text3:"#777",border:"#2A2D35",subtle:"#1E2128",hover:"#252830",inputBg:"#1A1D24",activeBg:"#2A1A10",activeText:"#F4A261",statBg1:"#1F1410",statBg2:"#1F1A0F",statBg3:"#0F1F18",statBg4:"#0F1520",bannerBg:"linear-gradient(135deg,#0D0E12,#1A1D24)"} : {bg:"#FAFAF7",card:"#FFFFFF",text:"#1A1A1A",text2:"#888",text3:"#999",border:"#ECECEC",subtle:"#F5F5F5",hover:"#F0F0F0",inputBg:"#FFFFFF",activeBg:"#F3EDFF",activeText:"#7C3AED",statBg1:"#FFF5F2",statBg2:"#FFFBEB",statBg3:"#ECFDF5",statBg4:"#EFF6FF",bannerBg:"linear-gradient(135deg,#1A1A1A,#2D2D2D)"};
  // Load progress from Supabase on mount
  useEffect(function(){
    if(!user)return;
    supabase.from("progress").select("lesson_id").eq("user_id",user.id).then(function(res){
      if(res.data){var obj={};res.data.forEach(function(r){obj[r.lesson_id]=true;});setDn(obj);}
      setProgLoaded(true);
    });
  },[user]);
  var mk = useCallback(function(id){
    setDn(function(p){var n={};Object.keys(p).forEach(function(k){n[k]=p[k]});n[id]=true;return n;});
    if(user){supabase.from("progress").upsert({user_id:user.id,lesson_id:id},{onConflict:"user_id,lesson_id"});}
    setToast("Lesson marked complete!");setTimeout(function(){setToast(null);},2500);
  },[user]);
  var tl = useMemo(function(){return SKILLS.reduce(function(a,s){return a+s.lessons.length;},0);},[]);
  var dc = Object.values(dn).filter(Boolean).length;
  var gp = useCallback(function(s){var d=s.lessons.filter(function(l){return dn[l.id];}).length;return s.lessons.length?Math.round(d/s.lessons.length*100):0;},[dn]);
  var ft = useMemo(function(){return SKILLS.filter(function(s){var m=s.name.toLowerCase().indexOf(sr.toLowerCase())>=0||s.desc.toLowerCase().indexOf(sr.toLowerCase())>=0;return m&&(fc==="All"||s.cat===fc)&&(fl==="All"||s.lv===fl);});},[sr,fc,fl]);
  var op = tl?Math.round(dc/tl*100):0;
  function scr(){window.scrollTo({top:0,behavior:"smooth"});}
  function osk(s){setSk(s);setLs(null);setV("skill");setMd("browse");setSbo(false);scr();}
  function ols(l){setLs(l);setV("lesson");setMd("browse");setSi(0);setQa({});setQs(false);scr();}
  function oskl(s,l){setSk(s);setLs(l);setV("lesson");setMd("browse");setSi(0);setQa({});setQs(false);setSbo(false);scr();}
  function nxt(){if(!sk||!ls)return null;var idx=sk.lessons.indexOf(ls);return idx<sk.lessons.length-1?sk.lessons[idx+1]:null;}
  var _qScore=useState(null),qScore=_qScore[0],setQScore=_qScore[1];

  return (
    <div style={{fontFamily:"'DM Sans',sans-serif",background:T.bg,color:T.text,minHeight:"100vh",overflowX:"hidden",transition:"background .3s,color .3s"}}>
      <style>{"@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:"+(dark?"#333":"#DDD")+";border-radius:3px}.c{background:"+T.card+";border:1px solid "+T.border+";border-radius:18px;transition:all .25s ease}.c:hover{border-color:"+(dark?"#444":"#DDD")+";box-shadow:0 8px 28px rgba(0,0,0,"+(dark?".2":".06")+");transform:translateY(-2px)}.bg{display:inline-flex;align-items:center;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.2px}.bt{border:none;cursor:pointer;font-family:inherit;transition:all .2s}.bt:hover{opacity:.88}.sb{position:fixed;top:0;left:0;width:264px;height:100vh;background:"+T.bg+";border-right:1px solid "+T.border+";z-index:100;padding:0;overflow-y:auto;transition:transform .3s;display:flex;flex-direction:column}@media(max-width:768px){.sb{transform:translateX(-100%)}.sb.o{transform:translateX(0)}}@media(min-width:769px){.sb{transform:translateX(0)}}.mn{margin-left:264px;padding:32px 36px;min-height:100vh}@media(max-width:768px){.mn{margin-left:0;padding:16px}}.ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.35);backdrop-filter:blur(4px);z-index:99}@media(max-width:768px){.ov.o{display:block}}.hb{display:none;position:fixed;top:16px;left:16px;z-index:101;background:#F3EDFF;border:none;color:#7C3AED;width:40px;height:40px;border-radius:12px;cursor:pointer;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,.08)}@media(max-width:768px){.hb{display:flex;align-items:center;justify-content:center}}@keyframes fi{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.fi{animation:fi .4s ease forwards}.bt:focus-visible,.c:focus-visible{outline:2px solid #7C3AED;outline-offset:2px}input:focus-visible{outline:2px solid #7C3AED;outline-offset:1px;border-color:#7C3AED!important}.quiz-opt{transition:all .2s}.quiz-opt:hover{border-color:#CCC!important;background:#FFF!important}.quiz-opt:focus-visible{outline:2px solid #7C3AED;outline-offset:2px}@media(max-width:420px){.sk-grid{grid-template-columns:1fr!important}}@keyframes toastin{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes ringIn{from{stroke-dashoffset:var(--ring-full)}to{stroke-dashoffset:var(--ring-offset)}}.ring-anim{animation:ringIn .8s cubic-bezier(.4,0,.2,1) forwards}@keyframes slideIn{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes slideOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-30px)}}.slide-enter{animation:slideIn .35s ease forwards}.confetti-wrap{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:300}@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}.confetti-piece{position:absolute;width:10px;height:10px;top:-10px;animation:confettiFall 2.5s ease-in forwards}.quiz-review{border-radius:12px;padding:14px 18px;margin-bottom:10px;display:flex;align-items:flex-start;gap:12px;transition:all .3s}.quiz-correct{background:#F0FDF4;border:1.5px solid #BBF7D0}.quiz-wrong{background:#FEF2F2;border:1.5px solid #FECACA}.toast{position:fixed;bottom:28px;right:28px;background:#10B981;color:white;padding:14px 28px;border-radius:14px;font-size:14px;font-weight:600;z-index:200;box-shadow:0 8px 30px rgba(16,185,129,.25);animation:toastin .3s ease}.bc{display:flex;align-items:center;gap:6px;font-size:12px;color:#999;margin-bottom:18px;flex-wrap:wrap}.bc span{cursor:pointer;transition:color .2s}.bc span:hover{color:#7C3AED}.bc .sep{color:#DDD;cursor:default}.bc .cur{color:#1A1A1A;font-weight:600;cursor:default}.bc .cur:hover{color:#1A1A1A}.nav-item{display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:500;margin-bottom:2px;border:none;cursor:pointer;font-family:inherit;transition:all .2s;background:transparent;text-align:left}.nav-item:hover{background:"+T.hover+"}.nav-item.active{background:"+T.activeBg+";color:"+T.activeText+";font-weight:600}.stat-card{padding:20px 24px;border-radius:18px;flex:1;min-width:150px;position:relative;overflow:hidden}.stat-card::after{content:'';position:absolute;top:-20px;right:-20px;width:60px;height:60px;border-radius:50%;opacity:.08}"}</style>
      {toast&&<div className="toast">{"\u2705"} {toast}</div>}
      <button className="hb" onClick={function(){setSbo(!sbo);}} aria-label="Toggle menu">&#9776;</button>
      <div className={"ov "+(sbo?"o":"")} onClick={function(){setSbo(false);}} />
      <div className={"sb "+(sbo?"o":"")}>
        <div style={{padding:"24px 20px 20px"}}>
          {onBack && <button className="bt" onClick={onBack} style={{display:"flex",alignItems:"center",gap:6,color:"#7C3AED",fontSize:12,fontWeight:600,marginBottom:16,background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",padding:0}}>{"\u2190"} Back to Home</button>}
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
            <div style={{width:38,height:38,borderRadius:12,background:"linear-gradient(135deg,#7C3AED,#6D28D9)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,fontFamily:"'Playfair Display',serif",transform:"rotate(-3deg)",boxShadow:"0 3px 12px rgba(124,58,237,.25)"}}>L</div>
            <div><span style={{fontFamily:"'Playfair Display',serif",fontWeight:800,fontSize:20,letterSpacing:"-0.5px",display:"block"}}>LanSkil</span><span style={{fontSize:10,color:"#AAA",fontWeight:500}}>by Regium Touch</span></div>
          </div>
        </div>
        <div style={{padding:"0 10px",flex:1}}>
          <button className={"nav-item"+(v==="dash"&&fc==="All"?" active":"")} onClick={function(){setV("dash");setSk(null);setLs(null);setFc("All");setSbo(false);}}><span style={{fontSize:16}}>{"\u{1F4DA}"}</span> All Skills</button>
          <div style={{margin:"16px 14px 8px",fontSize:10,fontWeight:700,color:"#BBB",textTransform:"uppercase",letterSpacing:"1.5px"}}>Categories</div>
          {CATS.map(function(cat){return <button key={cat.id} className={"nav-item"+(fc===cat.id&&v==="dash"?" active":"")} onClick={function(){setFc(cat.id);setV("dash");setSk(null);setSbo(false);}} style={{color:fc===cat.id?cat.color:"#777"}}><span style={{fontSize:15}}>{cat.icon}</span><span style={{flex:1,fontSize:12.5}}>{cat.name}</span></button>;})}
        </div>
        <div style={{padding:"8px 10px",borderTop:"1px solid "+T.border}}>
          <button className="nav-item" onClick={toggleDark} style={{color:T.text2,justifyContent:"space-between"}}>
            <span style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:15}}>{dark?"\u2600\uFE0F":"\u{1F319}"}</span><span style={{fontSize:12.5}}>{dark?"Light Mode":"Dark Mode"}</span></span>
            <div style={{width:36,height:20,borderRadius:10,background:dark?"#7C3AED":"#DDD",position:"relative",transition:"background .3s"}}><div style={{width:16,height:16,borderRadius:8,background:"white",position:"absolute",top:2,left:dark?18:2,transition:"left .3s",boxShadow:"0 1px 3px rgba(0,0,0,.2)"}}/></div>
          </button>
        </div>
        {user&&<div style={{borderTop:"1px solid "+T.border,padding:"16px 16px",margin:"0"}}><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><div style={{width:34,height:34,borderRadius:50,background:"linear-gradient(135deg,#7C3AED,#F4A261)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:14,fontWeight:700,flexShrink:0}}>{(user.firstName||"U").charAt(0)}</div><div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user.firstName}{user.lastName?" "+user.lastName:""}</div><div style={{fontSize:11,color:T.text3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user.email}</div></div></div><button className="bt" onClick={onLogout} style={{width:"100%",padding:"8px 0",borderRadius:10,background:T.hover,color:T.text2,fontSize:12,fontWeight:500,border:"none",textAlign:"center",transition:"all .2s"}}>{"\u{1F6AA}"} Sign Out</button></div>}
      </div>
      <div className="mn">
        {v==="dash"&&<Dash ft={ft} sr={sr} setSr={setSr} fc={fc} fl={fl} setFl={setFl} osk={osk} oskl={oskl} gp={gp} op={op} tl={tl} dc={dc} dn={dn} user={user} T={T} dark={dark}/>}
        {v==="skill"&&sk&&<SkV sk={sk} gb={function(){setV("dash");setSk(null);}} ols={ols} dn={dn} gp={gp} T={T}/>}
        {v==="lesson"&&ls&&sk&&md==="browse"&&<LBr ls={ls} sk={sk} gb={function(){setV("skill");setLs(null);}} dn={dn} go={function(){setMd("slides");setSi(0);}} T={T}/>}
        {v==="lesson"&&ls&&sk&&md==="slides"&&<SlV ls={ls} sk={sk} si={si} setSi={setSi} setMd={setMd} setQa={setQa} setQs={setQs} T={T}/>}
        {v==="lesson"&&ls&&sk&&md==="ready"&&<ReadyV ls={ls} sk={sk} setMd={setMd} setQa={setQa} setQs={setQs} T={T}/>}
        {v==="lesson"&&ls&&sk&&md==="quiz"&&<QzV ls={ls} sk={sk} qa={qa} setQa={setQa} qs={qs} setQs={setQs} setMd={setMd} T={T} setQScore={setQScore}/>}
        {v==="lesson"&&ls&&sk&&md==="results"&&<ResV ls={ls} sk={sk} mk={mk} dn={dn} setMd={setMd} gb={function(){setV("skill");setLs(null);scr();}} nxt={nxt()} ols={ols} goDash={function(){setV("dash");setSk(null);setLs(null);scr();}} user={user} T={T} qScore={qScore}/>}
      </div>
    </div>
  );
}

function Rng(props){var p=props.p,sz=props.sz||44,sw=props.sw||3.5,c=props.c||"#7C3AED",r=(sz-sw)/2,ci=2*Math.PI*r,o=ci-(p/100)*ci;return <div role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100} aria-label={p+"% complete"} style={{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",width:sz,height:sz}}><svg width={sz} height={sz} style={{transform:"rotate(-90deg)"}}><circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="#ECECEC" strokeWidth={sw}/><circle className="ring-anim" cx={sz/2} cy={sz/2} r={r} fill="none" stroke={c} strokeWidth={sw} strokeDasharray={ci} strokeDashoffset={o} strokeLinecap="round" style={{"--ring-full":ci,"--ring-offset":o}}/></svg><span style={{position:"absolute",fontSize:sz*.22,fontWeight:700,color:c}}>{p}%</span></div>;}

function Bar(props){var p=props.p,c=props.c||"#7C3AED",h=props.h||5;return <div style={{width:"100%",height:h,background:"#E8E8E8",borderRadius:h}}><div style={{width:p+"%",height:"100%",background:c,borderRadius:h,transition:"width .4s"}}/></div>;}

function Dash(props){var ft=props.ft,sr=props.sr,setSr=props.setSr,fc=props.fc,fl=props.fl,setFl=props.setFl,osk=props.osk,oskl=props.oskl,gp=props.gp,op=props.op,tl=props.tl,dc=props.dc,dn=props.dn,user=props.user,T=props.T,dark=props.dark;
  var inProg=SKILLS.filter(function(s){var p=gp(s);return p>0&&p<100;}).length;
  var comp=SKILLS.filter(function(s){return gp(s)===100;}).length;
  // Build Continue Learning list - skills with progress > 0, showing next uncompleted lesson
  var continueList=SKILLS.map(function(s){
    var progress=gp(s);
    if(progress<=0||progress>=100)return null;
    var nextLesson=s.lessons.find(function(l){return !dn[l.id];});
    if(!nextLesson)return null;
    return {skill:s,lesson:nextLesson,progress:progress};
  }).filter(Boolean).slice(0,3);
  return <div>
  {/* Welcome Banner */}
  <div style={{background:"linear-gradient(135deg,#1A1A1A 0%,#2D2D2D 100%)",borderRadius:24,padding:"36px 40px",marginBottom:28,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"-30%",right:"-5%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,58,237,0.2),transparent 70%)"}}/>
    <div style={{position:"absolute",bottom:"-20%",left:"30%",width:150,height:150,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,162,97,0.1),transparent 70%)"}}/>
    <div style={{position:"relative",zIndex:1}}>
      {user&&<p style={{fontSize:14,color:"#AAA",marginBottom:8}}>Welcome back, <strong style={{color:"white"}}>{user.firstName}</strong> {"\u{1F44B}"}</p>}
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,3vw,32px)",fontWeight:800,letterSpacing:"-0.8px",marginBottom:6,color:"white"}}>LanSkil Skills Library</h1>
      <p style={{color:"#888",fontSize:14}}>Master {SKILLS.length} interactive modules across {CATS.length} categories</p>
    </div>
  </div>

  {/* Stats Row */}
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:14,marginBottom:28}}>
    <div className="stat-card" style={{background:dark?"linear-gradient(135deg,"+T.statBg1+","+T.card+")":"linear-gradient(135deg,#FFF5F2,#FFFFFF)",border:"1px solid "+(dark?"#3D2A20":"#FDDDD3")}}><div style={{fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:8}}>Overall</div><div style={{fontSize:32,fontWeight:800,color:"#7C3AED",fontFamily:"'Playfair Display',serif",lineHeight:1}}>{op}%</div><div style={{marginTop:10}}><Bar p={op} c={"#7C3AED"} h={4}/></div></div>
    <div className="stat-card" style={{background:dark?"linear-gradient(135deg,"+T.statBg2+","+T.card+")":"linear-gradient(135deg,#FFFBEB,#FFFFFF)",border:"1px solid "+(dark?"#3D3520":"#FDE68A")}}><div style={{fontSize:11,color:"#D97706",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:8}}>In Progress</div><div style={{fontSize:32,fontWeight:800,color:"#D97706",fontFamily:"'Playfair Display',serif",lineHeight:1}}>{inProg}</div><div style={{fontSize:12,color:T.text3,marginTop:8}}>skills started</div></div>
    <div className="stat-card" style={{background:dark?"linear-gradient(135deg,"+T.statBg3+","+T.card+")":"linear-gradient(135deg,#ECFDF5,#FFFFFF)",border:"1px solid "+(dark?"#1A3D2A":"#A7F3D0")}}><div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:8}}>Completed</div><div style={{fontSize:32,fontWeight:800,color:"#059669",fontFamily:"'Playfair Display',serif",lineHeight:1}}>{comp}</div><div style={{fontSize:12,color:T.text3,marginTop:8}}>of {SKILLS.length} skills</div></div>
    <div className="stat-card" style={{background:dark?"linear-gradient(135deg,"+T.statBg4+","+T.card+")":"linear-gradient(135deg,#EFF6FF,#FFFFFF)",border:"1px solid "+(dark?"#1A2540":"#BFDBFE")}}><div style={{fontSize:11,color:"#2563EB",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:8}}>Lessons Done</div><div style={{fontSize:32,fontWeight:800,color:"#2563EB",fontFamily:"'Playfair Display',serif",lineHeight:1}}>{dc}</div><div style={{fontSize:12,color:T.text3,marginTop:8}}>of {tl} total</div></div>
  </div>

  {/* Continue Learning */}
  {continueList.length>0&&<div style={{marginBottom:28}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#7C3AED,#F4A261)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{"\u{1F4CD}"}</div>
        <div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,lineHeight:1.2,color:T.text}}>Continue Learning</h2><p style={{fontSize:12,color:T.text3}}>Pick up where you left off</p></div>
      </div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:14}}>
      {continueList.map(function(item){
        var s=item.skill,l=item.lesson,p=item.progress;
        return <div key={s.id} className="c" onClick={function(){oskl(s,l);}} style={{padding:20,cursor:"pointer",borderLeft:"4px solid "+s.color,background:"linear-gradient(135deg,"+s.color+"08,"+T.card+")"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,gap:10}}>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:10,fontWeight:800,color:s.color,textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>{s.name}</div>
              <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:T.text,marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{l.title}</h4>
              <div style={{fontSize:11.5,color:T.text3,display:"flex",alignItems:"center",gap:6}}>
                <span>{"\u23F1"} {l.duration}</span>
                <span>{"\u2022"}</span>
                <span>{l.type}</span>
              </div>
            </div>
            <div style={{fontSize:20,color:s.color}}>{"\u25B6"}</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{flex:1}}><Bar p={p} c={s.color} h={5}/></div>
            <span style={{fontSize:11.5,fontWeight:700,color:s.color,whiteSpace:"nowrap"}}>{p}%</span>
          </div>
        </div>;
      })}
    </div>
  </div>}

  {/* Search & Filter */}
  <div style={{display:"flex",gap:12,marginBottom:24,flexWrap:"wrap",alignItems:"center"}}>
    <div style={{flex:1,minWidth:200,position:"relative"}}>
      <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:15,color:"#BBB"}}>{"\u{1F50D}"}</span>
      <input value={sr} onChange={function(e){setSr(e.target.value);}} placeholder="Search skills..." style={{width:"100%",padding:"11px 15px 11px 40px",borderRadius:14,border:"1.5px solid "+T.border,background:T.inputBg,color:T.text,fontSize:14,outline:"none",fontFamily:"inherit",transition:"border-color .2s"}}/>
    </div>
    <div style={{display:"flex",gap:6,background:T.card,border:"1px solid "+T.border,borderRadius:12,padding:4}}>
      {["All","Beginner","Intermediate","Advanced"].map(function(l){return <button key={l} className="bt" onClick={function(){setFl(l);}} style={{padding:"8px 16px",borderRadius:9,background:fl===l?"#1A1A1A":"transparent",color:fl===l?"white":(LC[l]||"#999"),fontSize:12,fontWeight:600,border:"none",transition:"all .2s"}}>{l}</button>;})}
    </div>
  </div>

  {/* Empty State */}
  {ft.length===0&&<div style={{textAlign:"center",padding:"80px 20px"}}><div style={{fontSize:56,marginBottom:16}}>{"\u{1F50D}"}</div><h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,marginBottom:8}}>No skills found</h3><p style={{color:"#888",fontSize:15}}>Try adjusting your search or filters.</p></div>}

  {/* Categories & Skills */}
  {(fc==="All"?CATS:CATS.filter(function(c){return c.id===fc;})).map(function(cat){var cs=ft.filter(function(s){return s.cat===cat.id;});if(!cs.length)return null;return <div key={cat.id} style={{marginBottom:36}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}><div style={{width:36,height:36,borderRadius:10,background:cat.color+"12",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{cat.icon}</div><div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,lineHeight:1.2,color:T.text}}>{cat.name}</h2><p style={{fontSize:12,color:T.text3}}>{cs.length} {cs.length===1?"module":"modules"}</p></div></div>
    <div className="sk-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
      {cs.map(function(s){var pr=gp(s);return <div key={s.id} className="c" onClick={function(){osk(s);}} style={{padding:0,cursor:"pointer",overflow:"hidden"}}>
        <div style={{padding:"20px 24px 16px",borderBottom:"1px solid "+T.border}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
            <div style={{display:"flex",gap:10,alignItems:"center"}}><div style={{width:44,height:44,borderRadius:14,background:s.color+"12",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{s.icon}</div><div><h3 style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,marginBottom:3}}>{s.name}</h3><div style={{display:"flex",gap:6}}><span className="bg" style={{background:LC[s.lv]+"15",color:LC[s.lv]}}>{s.lv}</span><span className="bg" style={{background:T.subtle,color:T.text3}}>{s.lessons.length} lessons</span></div></div></div>
            <Rng p={pr} sz={48} c={s.color}/>
          </div>
          <p style={{fontSize:13,color:T.text2,lineHeight:1.55}}>{s.desc}</p>
        </div>
        <div style={{padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{flex:1,marginRight:16}}><Bar p={pr} c={s.color} h={5}/></div>
          <span style={{fontSize:12,fontWeight:600,color:s.color,whiteSpace:"nowrap"}}>{pr>0?pr+"% done":"Start"} {"\u2192"}</span>
        </div>
      </div>;})}
    </div>
  </div>;})}
  </div>;}

function SkV(props){var sk=props.sk,gb=props.gb,ols=props.ols,dn=props.dn,gp=props.gp;var pr=gp(sk),d=sk.lessons.filter(function(l){return dn[l.id];}).length;
  return <div><div className="bc"><span onClick={gb}>Dashboard</span><span className="sep">/</span><span className="cur">{sk.name}</span></div><div className="c" style={{padding:30,marginBottom:22,borderLeft:"4px solid "+sk.color}}><div style={{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}><div style={{fontSize:44}}>{sk.icon}</div><div style={{flex:1}}><h1 style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:800,margin:"4px 0"}}>{sk.name}</h1><p style={{fontSize:13.5,color:"#888",lineHeight:1.6}}>{sk.desc}</p><div style={{display:"flex",gap:14,marginTop:10,fontSize:12.5,color:"#888"}}><span>{"\u2705"} {d}/{sk.lessons.length}</span><span>{sk.roles.join(", ")}</span></div></div><Rng p={pr} sz={76} sw={5.5} c={sk.color}/></div><div style={{marginTop:18}}><Bar p={pr} c={sk.color} h={7}/></div></div>
  <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,marginBottom:14}}>Lessons</h2>
  <div style={{display:"flex",flexDirection:"column",gap:10}}>{sk.lessons.map(function(l,i){var isDone=dn[l.id];var tc=TC[l.type]||"#888";return <div key={l.id} className="c" onClick={function(){ols(l);}} style={{padding:16,cursor:"pointer",opacity:isDone?.6:1}}><div style={{display:"flex",gap:12,alignItems:"flex-start"}}><div style={{width:30,height:30,borderRadius:8,background:isDone?"#10B981":"#E8E8E8",color:isDone?"white":"#CCC",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:700,flexShrink:0,marginTop:2}}>{isDone?"\u2713":String(i+1).padStart(2,"0")}</div><div style={{flex:1}}><h3 style={{fontSize:13.5,fontWeight:600,marginBottom:3,color:isDone?"#999":"#1A1A1A"}}>{l.title}</h3><p style={{fontSize:11.5,color:"#999",marginBottom:8}}>{l.desc}</p><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><span className="bg" style={{background:tc+"15",color:tc}}>{l.type}</span><span className="bg" style={{background:"#E8E8E8",color:"#888"}}>{"\u23F1"} {l.duration}</span>{isDone&&<span className="bg" style={{background:"#10B98118",color:"#10B981"}}>{"\u2713"} Done</span>}</div></div><div style={{fontSize:20,color:isDone?"#10B981":"#DDD",flexShrink:0}}>{"\u25B6"}</div></div></div>;})}</div></div>;}

function LBr(props){var ls=props.ls,sk=props.sk,gb=props.gb,dn=props.dn,go=props.go;var isDone=dn[ls.id];var sl=genSlides(ls);var tc=TC[ls.type]||"#666";
  return <div className="fi"><div className="bc"><span onClick={gb}>Dashboard</span><span className="sep">/</span><span onClick={gb}>{sk.name}</span><span className="sep">/</span><span className="cur">{ls.title}</span></div><div className="c" style={{padding:36,marginBottom:24,borderLeft:"4px solid "+sk.color}}><div style={{display:"flex",gap:7,marginBottom:12,flexWrap:"wrap"}}><span className="bg" style={{background:sk.color+"18",color:sk.color}}>{sk.name}</span><span className="bg" style={{background:tc+"15",color:tc}}>{ls.type}</span><span className="bg" style={{background:"#E8E8E8",color:"#777"}}>{"\u23F1"} {ls.duration}</span></div><h1 style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:800,marginBottom:10}}>{ls.title}</h1><p style={{fontSize:14.5,color:"#777",lineHeight:1.7,marginBottom:24}}>{ls.desc}</p><button className="bt" onClick={go} style={{display:"inline-flex",alignItems:"center",gap:8,padding:"14px 36px",borderRadius:50,background:sk.color,color:"white",fontSize:14,fontWeight:700,border:"none",boxShadow:"0 4px 20px "+sk.color+"40"}}>{isDone?"\u21BB Review":"\u25B6 Start"} ({sl.length} slides + quiz)</button><div style={{marginTop:10,fontSize:12,color:"#999"}}>Complete slides then pass the quiz (67%) to finish.</div>{isDone&&<span style={{marginLeft:12,color:"#10B981",fontSize:13,fontWeight:600}}>{"\u2713"} Completed</span>}</div>
  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,marginBottom:12}}>What You'll Learn</h3><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>{(ls.topics||[]).map(function(t,i){return <div key={i} className="c" style={{padding:16,display:"flex",alignItems:"center",gap:10}}><div style={{width:32,height:32,borderRadius:8,background:sk.color+"15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>{ICO[i%ICO.length]}</div><span style={{fontSize:13,fontWeight:500}}>{t}</span></div>;})}</div></div>;}

function SlV(props){
  var ls=props.ls,sk=props.sk,si=props.si,setSi=props.setSi,setMd=props.setMd,setQa=props.setQa,setQs=props.setQs,T=props.T||{card:"#FFFFFF",text:"#1A1A1A",text2:"#555",text3:"#888",border:"#ECECEC",subtle:"#F5F5F5"};
  var isRich=!!ls.rich;
  var slides=useMemo(function(){return isRich?ls.rich.slides:genSlides(ls);},[ls,isRich]);
  var s=slides[si];var last=si===slides.length-1;var pr=Math.round((si+1)/slides.length*100);
  var _pm=useState(false),present=_pm[0],setPresent=_pm[1];
  var containerRef=useRef(null);

  useEffect(function(){
    function kh(e){
      if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){if(si<slides.length-1){e.preventDefault();setSi(si+1);}}
      if(e.key==="ArrowLeft"||e.key==="PageUp"){if(si>0){e.preventDefault();setSi(si-1);}}
      if(e.key==="Escape"&&present){setPresent(false);if(document.fullscreenElement)document.exitFullscreen();}
      if(e.key==="f"||e.key==="F"){togglePresent();}
    }
    window.addEventListener("keydown",kh);
    return function(){window.removeEventListener("keydown",kh);};
  },[si,slides.length,present]);

  useEffect(function(){
    function onFsChange(){if(!document.fullscreenElement)setPresent(false);}
    document.addEventListener("fullscreenchange",onFsChange);
    return function(){document.removeEventListener("fullscreenchange",onFsChange);};
  },[]);

  function togglePresent(){
    if(present){
      if(document.fullscreenElement)document.exitFullscreen();
      setPresent(false);
    }else{
      setPresent(true);
      if(containerRef.current&&containerRef.current.requestFullscreen){
        containerRef.current.requestFullscreen().catch(function(){});
      }
    }
  }

  // PRESENT MODE - fullscreen projector view
  if(present){
    return <div ref={containerRef} style={{position:"fixed",inset:0,background:"#000",zIndex:9999,display:"flex",flexDirection:"column",fontFamily:"'DM Sans',sans-serif"}}>
      <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
        <div key={si} className="slide-enter" style={{width:"100%",maxWidth:1280,aspectRatio:"16/9",background:"white",borderRadius:12,overflow:"hidden",boxShadow:"0 20px 80px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column"}}>
          {isRich?<RichSlide slide={s} T={T} present={true} slideIdx={si}/>:<LegacySlide s={s} sk={sk} T={T} present={true}/>}
        </div>
      </div>
      <div style={{padding:"14px 24px",background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"space-between",color:"white"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <button onClick={togglePresent} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"white",padding:"8px 16px",borderRadius:50,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{"\u2715"} Exit Present</button>
          <span style={{fontSize:12,color:"#AAA"}}>← → navigate  |  F toggle  |  ESC exit</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <button onClick={function(){if(si>0)setSi(si-1);}} disabled={si===0} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"white",padding:"8px 14px",borderRadius:50,fontSize:12,fontWeight:600,cursor:si===0?"default":"pointer",opacity:si===0?0.4:1,fontFamily:"inherit"}}>{"\u2190"}</button>
          <span style={{fontSize:13,fontWeight:700,minWidth:70,textAlign:"center"}}>{si+1} / {slides.length}</span>
          <button onClick={function(){if(si<slides.length-1)setSi(si+1);}} disabled={last} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"white",padding:"8px 14px",borderRadius:50,fontSize:12,fontWeight:600,cursor:last?"default":"pointer",opacity:last?0.4:1,fontFamily:"inherit"}}>{"\u2192"}</button>
        </div>
      </div>
    </div>;
  }

  // NORMAL MODE
  return <div className="fi">
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:10}}>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <button className="bt" onClick={function(){setMd("browse");}} style={{padding:"8px 16px",borderRadius:50,background:T.hover||"#F0F0F0",color:T.text3||"#777",fontSize:12,fontWeight:600,border:"none"}}>{"\u2715"} Exit</button>
        <span style={{fontSize:13,fontWeight:600,color:T.text||"#1A1A1A"}}>{ls.title}</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <button className="bt" onClick={togglePresent} title="Present Mode (F)" style={{padding:"8px 16px",borderRadius:50,background:"linear-gradient(135deg,"+sk.color+","+sk.color+"CC)",color:"white",fontSize:12,fontWeight:700,border:"none",display:"inline-flex",alignItems:"center",gap:6}}>{"\u{1F4FD}\uFE0F"} Present</button>
        <span style={{fontSize:12,color:T.text3||"#999",fontWeight:600}}>{si+1} of {slides.length}</span>
        <div style={{width:140}}><Bar p={pr} c={sk.color} h={5}/></div>
        <span style={{fontSize:12,fontWeight:700,color:sk.color}}>{pr}%</span>
      </div>
    </div>

    {isRich?
      <div key={si} className="slide-enter" style={{marginBottom:20,borderRadius:20,overflow:"hidden",border:"1px solid "+(T.border||"#ECECEC")}}><RichSlide slide={s} T={T} present={false} slideIdx={si}/></div>
      :
      <div key={si} className="c slide-enter" style={{padding:0,overflow:"hidden",marginBottom:20,minHeight:360}}><div style={{background:"linear-gradient(135deg,"+sk.color+"15,"+sk.color+"08)",padding:"28px 36px 20px",borderBottom:"1px solid #E8E8E8"}}><div style={{fontSize:40,marginBottom:10}}>{s.icon}</div>{s.type==="intro"&&<div><span className="bg" style={{background:sk.color+"20",color:sk.color}}>{s.subtitle}</span><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,marginTop:6}}>{s.title}</h2></div>}{s.type==="topic"&&<div><span className="bg" style={{background:"#E8E8E8",color:"#777"}}>Topic {s.num} of {s.total}</span><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,marginTop:6}}>{s.title}</h2></div>}{s.type==="summary"&&<h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800}}>Key Takeaways</h2>}</div>
      <div style={{padding:"24px 36px 32px"}}>{s.type==="intro"&&<p style={{fontSize:15,color:"#555",lineHeight:1.8}}>{s.body}</p>}{s.type==="topic"&&<div><p style={{fontSize:14.5,color:"#555",lineHeight:1.7,marginBottom:20}}>{s.body}</p><div style={{display:"flex",flexDirection:"column",gap:12}}>{(s.bullets||[]).map(function(b,i){return <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}><div style={{width:28,height:28,borderRadius:8,background:sk.color+"15",color:sk.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,flexShrink:0}}>{i+1}</div><p style={{fontSize:13.5,color:"#444",lineHeight:1.6,paddingTop:4}}>{b}</p></div>;})}</div></div>}{s.type==="summary"&&<div style={{display:"flex",flexDirection:"column",gap:10}}>{(s.topics||[]).map(function(t,i){return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",borderRadius:10,background:"#F5F5F5"}}><div style={{color:"#10B981",fontSize:16}}>{"\u2713"}</div><span style={{fontSize:14,color:"#444",fontWeight:500}}>{t}</span></div>;})}</div>}</div></div>
    }

    <div style={{display:"flex",justifyContent:"space-between",gap:12}}>
      <button className="bt" onClick={function(){setSi(Math.max(0,si-1));}} style={{padding:"12px 24px",borderRadius:50,background:T.hover||"#E8E8E8",color:si===0?"#CCC":(T.text||"#1A1A1A"),fontSize:13,fontWeight:600,border:"none",opacity:si===0?.5:1}}>{"\u2190"} Previous</button>
      {last?
        <button className="bt" onClick={function(){setMd("ready");}} style={{padding:"12px 32px",borderRadius:50,background:sk.color,color:"white",fontSize:13,fontWeight:700,border:"none"}}>{"\u{1F3AF}"} Finish Slides {"\u2192"}</button>
      :
        <button className="bt" onClick={function(){setSi(si+1);}} style={{padding:"12px 24px",borderRadius:50,background:sk.color,color:"white",fontSize:13,fontWeight:600,border:"none"}}>Next {"\u2192"}</button>
      }
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:4,marginTop:16,flexWrap:"wrap"}}>{slides.map(function(_,i){return <div key={i} onClick={function(){setSi(i);}} style={{width:i===si?20:6,height:6,borderRadius:3,background:i===si?sk.color:i<si?"#10B981":(T.border||"#E8E8E8"),cursor:"pointer",transition:"all .2s"}}/>;})}</div>
  </div>;
}

function LegacySlide(props){var s=props.s,sk=props.sk;return <div style={{padding:"40px 60px"}}><h2>{s.title}</h2><p>{s.body}</p></div>;}

function ReadyV(props){
  var ls=props.ls,sk=props.sk,setMd=props.setMd,setQa=props.setQa,setQs=props.setQs,T=props.T||{card:"#FFFFFF",text:"#1A1A1A",text2:"#555",text3:"#888",border:"#ECECEC",subtle:"#F5F5F5"};
  var quizCount=ls.rich&&ls.rich.quiz?ls.rich.quiz.length:0;
  return <div className="fi" style={{maxWidth:640,margin:"40px auto 0"}}>
    <div className="c" style={{padding:"48px 40px",textAlign:"center",borderTop:"4px solid "+sk.color,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-40%",right:"-20%",width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,"+sk.color+"15,transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{fontSize:64,marginBottom:12}}>{"\u{1F3AF}"}</div>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:800,marginBottom:10,color:T.text}}>Slides Complete!</h1>
        <p style={{color:T.text2,fontSize:15,lineHeight:1.7,marginBottom:8}}>You've finished all the material for <strong style={{color:T.text}}>{ls.title}</strong>.</p>
        <p style={{color:T.text3,fontSize:14,marginBottom:28}}>Ready to test your knowledge with a {quizCount}-question evaluation?</p>

        <div style={{padding:"16px 22px",borderRadius:14,background:T.subtle,border:"1px solid "+T.border,marginBottom:28,textAlign:"left"}}>
          <div style={{fontSize:11,fontWeight:700,color:T.text3,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>How the quiz works</div>
          <div style={{display:"flex",flexDirection:"column",gap:8,fontSize:13,color:T.text2}}>
            <div>{"\u2022"} Answer all {quizCount} questions in any order</div>
            <div>{"\u2022"} Your answers stay hidden until you submit</div>
            <div>{"\u2022"} Full review with correct answers shown after submission</div>
            <div>{"\u2022"} Pass with 67% or higher to complete the lesson</div>
          </div>
        </div>

        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <button className="bt" onClick={function(){setMd("quiz");setQa({});setQs(false);}} style={{padding:"14px 36px",borderRadius:50,background:sk.color,color:"white",fontSize:15,fontWeight:700,border:"none",boxShadow:"0 6px 24px "+sk.color+"40"}}>{"\u{1F4DD}"} Take the Quiz {"\u2192"}</button>
          <button className="bt" onClick={function(){setMd("slides");}} style={{padding:"14px 26px",borderRadius:50,background:T.hover||"#F0F0F0",color:T.text2,fontSize:14,fontWeight:600,border:"none"}}>{"\u2190"} Review Slides</button>
        </div>
      </div>
    </div>
  </div>;
}

function QzV(props){var ls=props.ls,sk=props.sk,qa=props.qa,setQa=props.setQa,qs=props.qs,setQs=props.setQs,setMd=props.setMd,setQScore=props.setQScore;
  var qz=useMemo(function(){return getQuiz(ls);},[ls]);var _x=useState(0),qi=_x[0],setQi=_x[1];
  useEffect(function(){if(!qz.length)setMd("results");},[qz.length]);
  if(!qz.length)return null;var q=qz[qi];var sel=qa[qi];var all=Object.keys(qa).length===qz.length;var sc=qz.reduce(function(a,q2,i){return a+(qa[i]===q2.correct?1:0);},0);var pass=sc>=Math.ceil(qz.length*.66);
  if(qs)return <div className="fi">
    <div className="c" style={{padding:"40px 36px",borderTop:"4px solid "+(pass?"#10B981":"#EF4444"),overflow:"hidden"}}>
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:56,marginBottom:12}}>{pass?"\u{1F389}":"\u{1F4DD}"}</div>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:800,marginBottom:6}}>{pass?"Quiz Passed!":"Not quite!"}</h2>
        <p style={{color:"#888",fontSize:15}}>You scored <strong style={{color:pass?"#059669":"#DC2626"}}>{sc}/{qz.length}</strong> ({Math.round(sc/qz.length*100)}%)</p>
        <div style={{width:220,margin:"16px auto"}}><Bar p={Math.round(sc/qz.length*100)} c={pass?"#10B981":"#EF4444"} h={8}/></div>
      </div>

      {/* Answer Review */}
      <div style={{marginBottom:24}}>
        <h3 style={{fontSize:14,fontWeight:700,marginBottom:12,color:"#666"}}>Answer Review</h3>
        {qz.map(function(q2,i){var isCorrect=qa[i]===q2.correct;return <div key={i} className={"quiz-review "+(isCorrect?"quiz-correct":"quiz-wrong")}>
          <div style={{width:24,height:24,borderRadius:50,background:isCorrect?"#10B981":"#EF4444",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0,marginTop:2}}>{isCorrect?"\u2713":"\u2717"}</div>
          <div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:"#1A1A1A",marginBottom:4}}>{q2.q}</p>
            {!isCorrect&&<p style={{fontSize:12,color:"#DC2626",marginBottom:2}}>Your answer: {q2.opts[qa[i]]}</p>}
            <p style={{fontSize:12,color:isCorrect?"#059669":"#059669",fontWeight:500}}>Correct: {q2.opts[q2.correct]}</p>
          </div>
        </div>;})}
      </div>

      <div style={{display:"flex",gap:12,justifyContent:"center"}}>
        {pass?<button className="bt" onClick={function(){if(setQScore)setQScore({correct:sc,total:qz.length,pct:Math.round(sc/qz.length*100)});setMd("results");}} style={{padding:"14px 36px",borderRadius:50,background:"#10B981",color:"white",fontSize:15,fontWeight:700,border:"none",boxShadow:"0 4px 16px rgba(16,185,129,.3)"}}>{"\u2713"} Complete Lesson</button>
        :<button className="bt" onClick={function(){setQa({});setQs(false);setQi(0);}} style={{padding:"14px 32px",borderRadius:50,background:sk.color,color:"white",fontSize:15,fontWeight:600,border:"none"}}>{"\u21BB"} Try Again</button>}
      </div>
    </div>
  </div>;
  return <div className="fi"><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:10}}>
    <button className="bt" onClick={function(){setMd("slides");}} style={{padding:"8px 16px",borderRadius:50,background:"#F0F0F0",color:"#777",fontSize:12,fontWeight:600,border:"none"}}>{"\u2190"} Back to Slides</button>
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      {qz.map(function(_,i){return <div key={i} onClick={function(){setQi(i);}} style={{width:i===qi?28:8,height:8,borderRadius:4,background:qa[i]!==undefined?(i===qi?sk.color:"#10B981"):(i===qi?sk.color:"#E0E0E0"),cursor:"pointer",transition:"all .25s",display:"flex",alignItems:"center",justifyContent:"center"}}>{i===qi&&<span style={{fontSize:9,color:"white",fontWeight:700}}>{i+1}</span>}</div>;})}
    </div>
  </div>
  <div className="c" style={{padding:32,marginBottom:20}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexWrap:"wrap",gap:8}}><span className="bg" style={{background:sk.color+"18",color:sk.color}}>Quiz</span><span style={{fontSize:11,color:"#999"}}>Pass: {Math.ceil(qz.length*.66)}/{qz.length} correct ({Math.ceil(66.6)}%)</span></div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,marginBottom:24,lineHeight:1.5}}>{q.q}</h2><div role="radiogroup" style={{display:"flex",flexDirection:"column",gap:10}}>{q.opts.map(function(o,i){var isSel=sel===i;return <div key={i} role="radio" aria-checked={isSel} tabIndex={0} className="quiz-opt" onKeyDown={function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();setQa(function(p){var n={};Object.keys(p).forEach(function(k){n[k]=p[k]});n[qi]=i;return n;});}}} onClick={function(){setQa(function(p){var n={};Object.keys(p).forEach(function(k){n[k]=p[k]});n[qi]=i;return n;});}} style={{padding:"14px 18px",borderRadius:12,border:"2px solid "+(isSel?sk.color:"#E8E8E8"),background:isSel?sk.color+"10":"#F5F5F5",display:"flex",alignItems:"center",gap:12,cursor:"pointer",transition:"all .2s"}}><div style={{width:28,height:28,borderRadius:14,border:"2px solid "+(isSel?sk.color:"#CCC"),background:isSel?sk.color:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{isSel&&<div style={{width:10,height:10,borderRadius:5,background:"white"}}/>}</div><span style={{fontSize:13.5,color:isSel?"#1A1A1A":"#555",fontWeight:isSel?600:400}}>{o}</span></div>;})}</div></div>
  <div style={{display:"flex",justifyContent:"space-between",gap:12}}><button className="bt" onClick={function(){setQi(Math.max(0,qi-1));}} style={{padding:"12px 24px",borderRadius:50,background:"#E8E8E8",color:qi===0?"#CCC":"#1A1A1A",fontSize:13,fontWeight:600,border:"none",opacity:qi===0?.5:1}}>{"\u2190"}</button>{qi<qz.length-1?<button className="bt" onClick={function(){setQi(qi+1);}} disabled={sel===undefined} style={{padding:"12px 24px",borderRadius:50,background:sel!==undefined?sk.color:"#E8E8E8",color:"white",fontSize:13,fontWeight:600,border:"none",opacity:sel!==undefined?1:.5}}>Next {"\u2192"}</button>:<button className="bt" onClick={function(){setQs(true);}} disabled={!all} style={{padding:"12px 32px",borderRadius:50,background:all?"#10B981":"#E8E8E8",color:"white",fontSize:13,fontWeight:700,border:"none",opacity:all?1:.5}}>Submit</button>}</div></div>;}

function Confetti(){var colors=["#7C3AED","#F4A261","#10B981","#2563EB","#EC4899","#8B5CF6","#F59E0B"];var pieces=[];for(var i=0;i<50;i++){pieces.push({left:Math.random()*100+"%",bg:colors[i%colors.length],delay:Math.random()*1.5+"s",dur:(2+Math.random()*2)+"s",size:(6+Math.random()*8)+"px",shape:Math.random()>.5?"50%":"2px"});}return <div className="confetti-wrap">{pieces.map(function(p,i){return <div key={i} className="confetti-piece" style={{left:p.left,background:p.bg,animationDelay:p.delay,animationDuration:p.dur,width:p.size,height:p.size,borderRadius:p.shape}}/>;})}</div>;}

function printCert(user,sk){var w=window.open("","_blank","width=900,height=650");if(!w)return;var name=(user?user.firstName+" "+(user.lastName||""):"Learner").trim();var date=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});w.document.write('<!DOCTYPE html><html><head><title>Certificate - '+sk.name+'</title><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{display:flex;align-items:center;justify-content:center;min-height:100vh;background:#F5F5F5;font-family:"DM Sans",sans-serif}@media print{body{background:white}.no-print{display:none!important}}.cert{width:800px;padding:60px;background:white;border:3px solid #7C3AED;position:relative;box-shadow:0 8px 40px rgba(0,0,0,.1)}.cert::before{content:"";position:absolute;inset:8px;border:1.5px solid #F4A261;pointer-events:none}.logo{display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:8px}.logo-mark{width:40px;height:40px;background:#7C3AED;border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:900;font-family:"Playfair Display",serif;transform:rotate(-3deg)}.logo-text{font-family:"Playfair Display",serif;font-weight:900;font-size:24px}.sub{text-align:center;color:#AAA;font-size:12px;margin-bottom:32px}.title{text-align:center;font-size:14px;color:#999;text-transform:uppercase;letter-spacing:3px;margin-bottom:12px}.name{text-align:center;font-family:"Playfair Display",serif;font-size:42px;font-weight:800;color:#1A1A1A;margin-bottom:8px;line-height:1.2}.course{text-align:center;font-size:16px;color:#555;margin-bottom:6px}.skill{text-align:center;font-family:"Playfair Display",serif;font-size:24px;font-weight:700;color:#7C3AED;margin-bottom:24px}.date{text-align:center;font-size:14px;color:#999;margin-bottom:32px}.footer{display:flex;justify-content:space-between;align-items:flex-end;padding-top:24px;border-top:1px solid #EEE}.sig{text-align:center}.sig-line{width:160px;border-top:1.5px solid #CCC;margin-bottom:6px}.sig-name{font-size:12px;color:#999}.actions{text-align:center;margin-top:20px}.actions button{padding:12px 32px;border-radius:50px;border:none;background:#7C3AED;color:white;font-size:14px;font-weight:700;cursor:pointer;font-family:"DM Sans",sans-serif;margin:0 8px}</style></head><body><div class="cert"><div class="logo"><div class="logo-mark">L</div><div class="logo-text">LanSkil</div></div><div class="sub">by Regium Touch</div><div class="title">Certificate of Completion</div><div class="name">'+name+'</div><div class="course">has successfully completed</div><div class="skill">'+sk.name+'</div><div class="date">'+date+'</div><div class="footer"><div class="sig"><div class="sig-line"></div><div class="sig-name">Program Director</div></div><div class="sig"><div class="sig-line"></div><div class="sig-name">'+date+'</div></div></div></div><div class="actions no-print"><button onclick="window.print()">Print / Save as PDF</button><button onclick="window.close()" style="background:#888">Close</button></div></body></html>');w.document.close();}

function ResV(props){var ls=props.ls,sk=props.sk,mk=props.mk,dn=props.dn,setMd=props.setMd,gb=props.gb,nxt=props.nxt,ols=props.ols,goDash=props.goDash,user=props.user,T=props.T,qScore=props.qScore;
  var _cf=useState(true),showConf=_cf[0],setShowConf=_cf[1];
  useEffect(function(){if(!dn[ls.id])mk(ls.id);var t=setTimeout(function(){setShowConf(false);},3000);return function(){clearTimeout(t);};},[ls.id]);
  var allDone=!nxt;
  return <div className="fi" style={{textAlign:"center",paddingTop:40}}>
    {showConf&&<Confetti/>}
    <div className="c" style={{padding:"52px 48px",maxWidth:540,margin:"0 auto",borderTop:"4px solid #10B981",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:120,background:"linear-gradient(180deg,#F0FDF4,transparent)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{fontSize:72,marginBottom:12}}>{allDone?"\u{1F3C6}":"\u2705"}</div>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:800,marginBottom:10}}>{allDone?"Skill Complete!":"Lesson Complete!"}</h1>
        <p style={{color:"#555",fontSize:15,marginBottom:6}}>You finished <strong style={{color:"#1A1A1A"}}>{ls.title}</strong></p>
        <p style={{color:"#999",fontSize:13,marginBottom:28}}>Progress saved automatically</p>

        {/* Big score display */}
        {qScore&&<div style={{marginBottom:24,padding:"24px 20px",borderRadius:20,background:"linear-gradient(135deg,"+sk.color+"15,"+sk.color+"08)",border:"1px solid "+sk.color+"30"}}>
          <div style={{fontSize:11,fontWeight:800,color:sk.color,textTransform:"uppercase",letterSpacing:1.5,marginBottom:8}}>Your Quiz Score</div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:52,fontWeight:900,color:sk.color,lineHeight:1}}>{qScore.pct}%</div>
          <div style={{fontSize:13,color:"#666",marginTop:6}}>{qScore.correct} out of {qScore.total} correct</div>
        </div>}

        {/* Stats */}
        <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:28,flexWrap:"wrap"}}>
          <div style={{background:"#F5F5F5",borderRadius:14,padding:"14px 22px",minWidth:90}}><div style={{fontSize:22,fontWeight:800,color:sk.color}}>{ls.topics?ls.topics.length:0}</div><div style={{fontSize:11,color:"#999",fontWeight:500}}>Topics</div></div>
          <div style={{background:"#F5F5F5",borderRadius:14,padding:"14px 22px",minWidth:90}}><div style={{fontSize:22,fontWeight:800,color:"#10B981"}}>{"\u2713"}</div><div style={{fontSize:11,color:"#999",fontWeight:500}}>Quiz Passed</div></div>
          <div style={{background:"#F5F5F5",borderRadius:14,padding:"14px 22px",minWidth:90}}><div style={{fontSize:22,fontWeight:800,color:"#2563EB"}}>{ls.duration}</div><div style={{fontSize:11,color:"#999",fontWeight:500}}>Duration</div></div>
        </div>

        {nxt&&<div style={{marginBottom:24}}><button className="bt" onClick={function(){ols(nxt);}} style={{padding:"15px 40px",borderRadius:50,background:sk.color,color:"white",fontSize:15,fontWeight:700,border:"none",boxShadow:"0 6px 24px "+sk.color+"35",transition:"all .3s"}}>Next: {nxt.title} {"\u2192"}</button></div>}
        {allDone&&<div style={{marginBottom:24}}>
          <div style={{padding:"18px 28px",borderRadius:16,background:"linear-gradient(135deg,#F0FDF4,#ECFDF5)",border:"1px solid #BBF7D0",marginBottom:16}}><p style={{color:"#15803D",fontSize:15,fontWeight:700,marginBottom:4}}>{"\u{1F389}"} All lessons complete!</p><p style={{color:"#059669",fontSize:13}}>You've mastered {sk.name}</p></div>
          <button className="bt" onClick={function(){printCert(user,sk);}} style={{padding:"14px 36px",borderRadius:50,background:"linear-gradient(135deg,#7C3AED,#6D28D9)",color:"white",fontSize:15,fontWeight:700,border:"none",boxShadow:"0 4px 20px rgba(124,58,237,.3)"}}>{"\u{1F4DC}"} Download Certificate</button>
        </div>}

        <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
          <button className="bt" onClick={gb} style={{padding:"11px 24px",borderRadius:50,background:"#F0F0F0",color:"#555",fontSize:13,fontWeight:600,border:"none"}}>{"\u2190"} {sk.name}</button>
          <button className="bt" onClick={function(){setMd("slides");}} style={{padding:"11px 24px",borderRadius:50,background:"#F0F0F0",color:"#555",fontSize:13,fontWeight:500,border:"none"}}>{"\u21BB"} Review</button>
          <button className="bt" onClick={goDash} style={{padding:"11px 24px",borderRadius:50,background:"#F0F0F0",color:"#555",fontSize:13,fontWeight:500,border:"none"}}>{"\u{1F4DA}"} Dashboard</button>
        </div>
      </div>
    </div>
  </div>;}
