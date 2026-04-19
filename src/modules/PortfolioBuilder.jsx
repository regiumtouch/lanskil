import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "../supabase";

const PURPLE = "#7C3AED";
const ORANGE = "#F4A261";
const GRADIENT = "linear-gradient(135deg," + PURPLE + " 0%," + ORANGE + " 100%)";

const EMPTY_DATA = {
  brandName: "FreshRoast",
  voiceGuide: "",
  contentStrategy: "",
  linkedinPosts: [
    { hook: "", body: "", cta: "", annotation: "" },
    { hook: "", body: "", cta: "", annotation: "" },
    { hook: "", body: "", cta: "", annotation: "" },
    { hook: "", body: "", cta: "", annotation: "" },
  ],
  instagramPosts: [
    { caption: "", cta: "", annotation: "" },
    { caption: "", cta: "", annotation: "" },
    { caption: "", cta: "", annotation: "" },
    { caption: "", cta: "", annotation: "" },
  ],
  xThreads: [
    { tweets: "", annotation: "" },
    { tweets: "", annotation: "" },
  ],
  adVariants: [
    { framework: "Problem-Solution", primaryText: "", headline: "", description: "", annotation: "" },
    { framework: "Testimonial-Led", primaryText: "", headline: "", description: "", annotation: "" },
    { framework: "Benefit-Stack", primaryText: "", headline: "", description: "", annotation: "" },
  ],
  tiktokScripts: [
    { hook: "", body: "", cta: "", duration: "30", annotation: "" },
    { hook: "", body: "", cta: "", duration: "30", annotation: "" },
  ],
  finalAnnotations: "",
};

function Section({ num, title, subtitle, progress, isOpen, onToggle, T, children }) {
  const sectionStyle = { background: T.card, border: "1px solid " + T.border, borderRadius: 3, marginBottom: 16, overflow: "hidden" };
  const headerStyle = { padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", gap: 14 };
  return (
    <div style={sectionStyle}>
      <div onClick={onToggle} style={headerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 22, color: PURPLE, fontWeight: 600, minWidth: 34 }}>{"0" + num}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 700, color: T.text, lineHeight: 1.2 }}>{title}</div>
            <div style={{ fontSize: 12, color: T.text3, fontFamily: "'DM Sans',sans-serif", marginTop: 2 }}>{subtitle}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 10.5, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, color: progress === 100 ? "#10B981" : T.text3, letterSpacing: 1, textTransform: "uppercase" }}>{progress}%</div>
          <div style={{ width: 60, height: 2, background: T.border }}>
            <div style={{ height: "100%", background: progress === 100 ? "#10B981" : GRADIENT, width: progress + "%", transition: "width .3s" }} />
          </div>
          <span style={{ fontSize: 14, color: T.text3, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>{"\u25BE"}</span>
        </div>
      </div>
      {isOpen && (
        <div style={{ padding: "0 22px 22px", borderTop: "1px solid " + T.border }}>
          {children}
        </div>
      )}
    </div>
  );
}

const RUBRIC = [
  { criteria: "Hook quality & scroll-stopping power", weight: 20 },
  { criteria: "Platform-native adaptation (not just resized)", weight: 20 },
  { criteria: "CTA effectiveness & strategic variety", weight: 15 },
  { criteria: "Storytelling & emotional engagement", weight: 15 },
  { criteria: "Brand voice consistency across platforms", weight: 10 },
  { criteria: "Ad copy structure & testing plan", weight: 10 },
  { criteria: "Content calendar strategy & rationale", weight: 5 },
  { criteria: "Overall professionalism & presentation", weight: 5 },
];

export default function PortfolioBuilder({ user, lesson, onBack, T }) {
  const [data, setData] = useState(EMPTY_DATA);
  const [status, setStatus] = useState("draft");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveState, setSaveState] = useState("idle"); // idle | saving | saved | error
  const [lastSaved, setLastSaved] = useState(null);
  const [openSection, setOpenSection] = useState(1);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const saveTimer = useRef(null);

  // Load existing submission
  useEffect(() => {
    if (!user || !lesson) return;
    supabase.from("portfolio_submissions").select("*").eq("user_id", user.id).eq("lesson_id", lesson.id).maybeSingle().then(({ data: row, error }) => {
      if (error) { console.error("portfolio load error:", error); }
      if (row) {
        setData({ ...EMPTY_DATA, ...(row.data || {}) });
        setStatus(row.status || "draft");
        if (row.updated_at) setLastSaved(new Date(row.updated_at));
        if (row.review_status && row.review_status !== "pending") {
          setReview({ status: row.review_status, score: row.review_score, feedback: row.review_feedback, at: row.reviewed_at });
        }
      }
      setLoading(false);
    });
  }, [user, lesson]);

  // Auto-save with debounce
  const saveNow = useCallback(async (override) => {
    if (!user || !lesson) return;
    setSaveState("saving");
    const payload = {
      user_id: user.id,
      lesson_id: lesson.id,
      project_name: data.brandName || "FreshRoast Campaign",
      data: data,
      status: override?.status || status,
      updated_at: new Date().toISOString(),
    };
    if (override?.status === "submitted") {
      payload.submitted_at = new Date().toISOString();
    }
    const { error } = await supabase.from("portfolio_submissions").upsert(payload, { onConflict: "user_id,lesson_id" });
    if (error) {
      console.error("portfolio save error:", error);
      setSaveState("error");
    } else {
      setSaveState("saved");
      setLastSaved(new Date());
      setTimeout(() => setSaveState("idle"), 2000);
    }
  }, [user, lesson, data, status]);

  // Debounced auto-save on data change
  useEffect(() => {
    if (loading || status === "submitted") return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => { saveNow(); }, 1200);
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
  }, [data, loading, status, saveNow]);

  function update(key, value) { setData(prev => ({ ...prev, [key]: value })); }
  function updateArrayItem(key, idx, field, value) {
    setData(prev => ({ ...prev, [key]: prev[key].map((item, i) => i === idx ? { ...item, [field]: value } : item) }));
  }

  async function handleSubmit() {
    setShowConfirmSubmit(false);
    setStatus("submitted");
    await saveNow({ status: "submitted" });
  }

  function downloadText() {
    const lines = [];
    lines.push("═══════════════════════════════════════");
    lines.push("  PORTFOLIO SUBMISSION");
    lines.push("  " + (data.brandName || "FreshRoast") + " — Social Media Copy Campaign");
    lines.push("  By: " + (user?.firstName || "Learner") + " " + (user?.lastName || ""));
    lines.push("  Date: " + new Date().toLocaleDateString());
    lines.push("═══════════════════════════════════════");
    lines.push("");
    lines.push("── 1. BRAND VOICE GUIDE ──");
    lines.push(data.voiceGuide || "(empty)");
    lines.push("");
    lines.push("── 2. CONTENT STRATEGY ──");
    lines.push(data.contentStrategy || "(empty)");
    lines.push("");
    lines.push("── 3. LINKEDIN POSTS ──");
    data.linkedinPosts.forEach((p, i) => {
      lines.push("  LinkedIn #" + (i + 1));
      lines.push("  HOOK: " + (p.hook || "(empty)"));
      lines.push("  BODY: " + (p.body || "(empty)"));
      lines.push("  CTA: " + (p.cta || "(empty)"));
      lines.push("  ANNOTATION: " + (p.annotation || "(empty)"));
      lines.push("");
    });
    lines.push("── 4. INSTAGRAM CAPTIONS ──");
    data.instagramPosts.forEach((p, i) => {
      lines.push("  Instagram #" + (i + 1));
      lines.push("  CAPTION: " + (p.caption || "(empty)"));
      lines.push("  CTA: " + (p.cta || "(empty)"));
      lines.push("  ANNOTATION: " + (p.annotation || "(empty)"));
      lines.push("");
    });
    lines.push("── 5. X / TWITTER THREADS ──");
    data.xThreads.forEach((p, i) => {
      lines.push("  Thread #" + (i + 1));
      lines.push("  TWEETS:");
      lines.push(p.tweets || "(empty)");
      lines.push("  ANNOTATION: " + (p.annotation || "(empty)"));
      lines.push("");
    });
    lines.push("── 6. META AD VARIANTS ──");
    data.adVariants.forEach((p, i) => {
      lines.push("  Ad Variant #" + (i + 1) + " — " + (p.framework || "framework"));
      lines.push("  PRIMARY TEXT: " + (p.primaryText || "(empty)"));
      lines.push("  HEADLINE: " + (p.headline || "(empty)"));
      lines.push("  DESCRIPTION: " + (p.description || "(empty)"));
      lines.push("  ANNOTATION: " + (p.annotation || "(empty)"));
      lines.push("");
    });
    lines.push("── 7. TIKTOK SCRIPTS ──");
    data.tiktokScripts.forEach((p, i) => {
      lines.push("  Script #" + (i + 1) + " (" + (p.duration || "30") + " sec)");
      lines.push("  HOOK: " + (p.hook || "(empty)"));
      lines.push("  BODY: " + (p.body || "(empty)"));
      lines.push("  CTA: " + (p.cta || "(empty)"));
      lines.push("  ANNOTATION: " + (p.annotation || "(empty)"));
      lines.push("");
    });
    lines.push("── 8. FINAL ANNOTATIONS & TESTING PLAN ──");
    lines.push(data.finalAnnotations || "(empty)");
    lines.push("");
    lines.push("═══════════════════════════════════════");
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "FreshRoast-Portfolio-" + (user?.firstName || "Submission") + ".txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Section progress helpers
  function sectionProgress(fields) {
    const filled = fields.filter(f => String(f || "").trim().length > 20).length;
    return Math.round((filled / fields.length) * 100);
  }
  const p1 = sectionProgress([data.voiceGuide]);
  const p2 = sectionProgress([data.contentStrategy]);
  const p3 = sectionProgress(data.linkedinPosts.flatMap(x => [x.hook, x.body, x.cta]).concat(data.instagramPosts.flatMap(x => [x.caption, x.cta])).concat(data.xThreads.map(x => x.tweets)));
  const p4 = sectionProgress(data.adVariants.flatMap(x => [x.primaryText, x.headline]));
  const p5 = sectionProgress(data.tiktokScripts.flatMap(x => [x.hook, x.body, x.cta]));
  const p6 = sectionProgress([data.finalAnnotations]);
  const overallProgress = Math.round((p1 + p2 + p3 + p4 + p5 + p6) / 6);

  if (loading) {
    return <div style={{ padding: 48, textAlign: "center", color: T.text3 }}>Loading your portfolio…</div>;
  }

  const readOnly = status === "submitted";

  const sectionStyle = {
    background: T.card,
    border: "1px solid " + T.border,
    borderRadius: 3,
    marginBottom: 16,
    overflow: "hidden",
  };
  const sectionHeaderStyle = {
    padding: "18px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    gap: 14,
  };
  const labelStyle = {
    display: "block",
    fontSize: 10,
    fontWeight: 700,
    color: T.text3,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    fontFamily: "'DM Sans',sans-serif",
    marginBottom: 6,
    marginTop: 12,
  };
  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid " + T.border,
    borderRadius: 3,
    fontSize: 13.5,
    fontFamily: "'DM Sans',sans-serif",
    color: T.text,
    background: readOnly ? T.subtle : T.card,
    outline: "none",
    transition: "border-color .15s",
    resize: "vertical",
  };
  const taStyle = { ...inputStyle, minHeight: 90, lineHeight: 1.6 };

  const toggleSection = (num) => setOpenSection(openSection === num ? null : num);

  return (
    <div className="fi" style={{ maxWidth: 880, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ background: GRADIENT, borderRadius: 4, padding: "32px 32px", marginBottom: 28, color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85 }}>Portfolio Builder · Module 8 Capstone</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, margin: "10px 0 8px", lineHeight: 1.1, letterSpacing: -.5 }}>FreshRoast {"\u2014"} Social Media Copy Campaign</h1>
        <p style={{ fontSize: 14, opacity: 0.92, margin: "0 0 18px", maxWidth: 620, lineHeight: 1.6 }}>Build your complete campaign {"\u2014"} brand voice, calendar, 10 organic posts, 3 ad variants, and 2 TikTok scripts. Work is auto-saved as you go.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 11, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, padding: "4px 12px", borderRadius: 2, background: "rgba(255,255,255,.2)", letterSpacing: 1.2, textTransform: "uppercase" }}>{status === "submitted" ? "Submitted" : "Draft"}</span>
          <span style={{ fontSize: 11, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, opacity: 0.9 }}>{overallProgress}% complete</span>
          {saveState === "saving" && <span style={{ fontSize: 11, opacity: 0.9 }}>Saving…</span>}
          {saveState === "saved" && <span style={{ fontSize: 11, opacity: 0.9 }}>{"\u2713"} Saved</span>}
          {saveState === "error" && <span style={{ fontSize: 11, opacity: 0.9, color: "#FECACA" }}>Save error {"\u2014"} check connection</span>}
          {lastSaved && saveState === "idle" && <span style={{ fontSize: 11, opacity: 0.8 }}>Last saved {lastSaved.toLocaleTimeString()}</span>}
        </div>
      </div>

      {/* Back */}
      <button onClick={onBack} className="bt" style={{ marginBottom: 16, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"\u2190"} Back to Lesson</button>

      {/* Review banner (when instructor has reviewed) */}
      {review && (() => {
        const palette = {
          approved: { bg: "#ECFDF5", border: "#A7F3D0", color: "#059669", label: "Approved" },
          needs_revision: { bg: "#FEF3C7", border: "#FDE68A", color: "#B45309", label: "Needs Revision" },
          rejected: { bg: "#FEE2E2", border: "#FECACA", color: "#DC2626", label: "Rejected" },
          under_review: { bg: "#E0E7FF", border: "#C7D2FE", color: "#4338CA", label: "Under Review" },
        };
        const p = palette[review.status] || palette.under_review;
        return (
          <div style={{ background: p.bg, border: "1px solid " + p.border, borderRadius: 3, padding: "18px 22px", marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: review.feedback ? 10 : 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, color: p.color, letterSpacing: 2, textTransform: "uppercase" }}>Instructor Review \u00B7 {p.label}</span>
                {review.score != null && <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: p.color }}>{review.score}/100</span>}
              </div>
              {review.at && <span style={{ fontSize: 11, color: p.color, opacity: 0.7, fontFamily: "'DM Sans',sans-serif" }}>{new Date(review.at).toLocaleDateString()}</span>}
            </div>
            {review.feedback && <p style={{ fontSize: 13, color: p.color, lineHeight: 1.65, whiteSpace: "pre-wrap", fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{review.feedback}</p>}
          </div>
        );
      })()}

      {/* Sections */}
      <Section num={1} title="Brand Voice Guide" subtitle="Define FreshRoast's voice, tone, and do's/don'ts in 1 page." progress={p1} isOpen={openSection===1} onToggle={()=>toggleSection(1)} T={T}>
        <label style={labelStyle}>Brand Name</label>
        <input value={data.brandName} disabled={readOnly} onChange={e => update("brandName", e.target.value)} style={inputStyle} />
        <label style={labelStyle}>Voice, Tone & Do/Don't</label>
        <textarea value={data.voiceGuide} disabled={readOnly} onChange={e => update("voiceGuide", e.target.value)} rows={10} placeholder="Describe voice (e.g. warm, specific, slightly contrarian). Include 3-5 'we say this / not that' examples, plus words the brand refuses to use." style={{ ...taStyle, minHeight: 180 }} />
      </Section>

      <Section num={2} title="Content Strategy" subtitle="2-week calendar logic: pillars, post-types, platform rationale, the 40/30/20/10 mix." progress={p2} isOpen={openSection===2} onToggle={()=>toggleSection(2)} T={T}>
        <label style={labelStyle}>Strategy Overview</label>
        <textarea value={data.contentStrategy} disabled={readOnly} onChange={e => update("contentStrategy", e.target.value)} rows={12} placeholder="List 3 content pillars. Describe the content mix (40/30/20/10). Note which platforms you will use and why. Outline how the 2-week cadence will work." style={{ ...taStyle, minHeight: 200 }} />
      </Section>

      <Section num={3} title="Organic Posts (10)" subtitle="4 LinkedIn · 4 Instagram · 2 X threads. Hook + body + CTA + annotation each." progress={p3} isOpen={openSection===3} onToggle={()=>toggleSection(3)} T={T}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, color: PURPLE, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 18, marginBottom: 4 }}>LinkedIn Posts</div>
        {data.linkedinPosts.map((p, i) => (
          <div key={i} style={{ padding: "14px 16px", background: T.subtle, borderRadius: 3, marginBottom: 10, borderLeft: "3px solid " + PURPLE }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: T.text3, marginBottom: 6 }}>LinkedIn Post {i + 1}</div>
            <input value={p.hook} disabled={readOnly} onChange={e => updateArrayItem("linkedinPosts", i, "hook", e.target.value)} placeholder="Hook (first 7-12 words)" style={{ ...inputStyle, marginBottom: 6 }} />
            <textarea value={p.body} disabled={readOnly} onChange={e => updateArrayItem("linkedinPosts", i, "body", e.target.value)} placeholder="Body copy" rows={5} style={{ ...taStyle, marginBottom: 6 }} />
            <input value={p.cta} disabled={readOnly} onChange={e => updateArrayItem("linkedinPosts", i, "cta", e.target.value)} placeholder="CTA (one specific ask)" style={{ ...inputStyle, marginBottom: 6 }} />
            <input value={p.annotation} disabled={readOnly} onChange={e => updateArrayItem("linkedinPosts", i, "annotation", e.target.value)} placeholder="Annotation: which formula(s) you used and why" style={inputStyle} />
          </div>
        ))}

        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, color: PURPLE, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 20, marginBottom: 4 }}>Instagram Captions</div>
        {data.instagramPosts.map((p, i) => (
          <div key={i} style={{ padding: "14px 16px", background: T.subtle, borderRadius: 3, marginBottom: 10, borderLeft: "3px solid " + ORANGE }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: T.text3, marginBottom: 6 }}>Instagram Caption {i + 1}</div>
            <textarea value={p.caption} disabled={readOnly} onChange={e => updateArrayItem("instagramPosts", i, "caption", e.target.value)} placeholder="Caption (150-300 chars typically)" rows={4} style={{ ...taStyle, marginBottom: 6 }} />
            <input value={p.cta} disabled={readOnly} onChange={e => updateArrayItem("instagramPosts", i, "cta", e.target.value)} placeholder="CTA" style={{ ...inputStyle, marginBottom: 6 }} />
            <input value={p.annotation} disabled={readOnly} onChange={e => updateArrayItem("instagramPosts", i, "annotation", e.target.value)} placeholder="Annotation" style={inputStyle} />
          </div>
        ))}

        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, color: PURPLE, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 20, marginBottom: 4 }}>X / Twitter Threads</div>
        {data.xThreads.map((p, i) => (
          <div key={i} style={{ padding: "14px 16px", background: T.subtle, borderRadius: 3, marginBottom: 10, borderLeft: "3px solid #1A1F3D" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: T.text3, marginBottom: 6 }}>Thread {i + 1}</div>
            <textarea value={p.tweets} disabled={readOnly} onChange={e => updateArrayItem("xThreads", i, "tweets", e.target.value)} placeholder="Paste the full thread — one tweet per paragraph. 8-12 tweets typical." rows={10} style={{ ...taStyle, marginBottom: 6 }} />
            <input value={p.annotation} disabled={readOnly} onChange={e => updateArrayItem("xThreads", i, "annotation", e.target.value)} placeholder="Annotation" style={inputStyle} />
          </div>
        ))}
      </Section>

      <Section num={4} title="Paid Campaign (3 Meta Ad Variants)" subtitle="First-box-free offer. Primary text + headline + description per variant." progress={p4} isOpen={openSection===4} onToggle={()=>toggleSection(4)} T={T}>
        {data.adVariants.map((p, i) => (
          <div key={i} style={{ padding: "14px 16px", background: T.subtle, borderRadius: 3, marginBottom: 10, borderLeft: "3px solid " + PURPLE }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: T.text3 }}>Ad Variant {i + 1}</div>
              <select value={p.framework} disabled={readOnly} onChange={e => updateArrayItem("adVariants", i, "framework", e.target.value)} style={{ fontSize: 11, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, padding: "4px 8px", border: "1px solid " + T.border, borderRadius: 2, background: T.card, color: T.text }}>
                <option>Problem-Solution</option>
                <option>Testimonial-Led</option>
                <option>Benefit-Stack</option>
              </select>
            </div>
            <textarea value={p.primaryText} disabled={readOnly} onChange={e => updateArrayItem("adVariants", i, "primaryText", e.target.value)} placeholder="Primary text (main ad body)" rows={5} style={{ ...taStyle, marginBottom: 6 }} />
            <input value={p.headline} disabled={readOnly} onChange={e => updateArrayItem("adVariants", i, "headline", e.target.value)} placeholder="Headline (5-7 words)" style={{ ...inputStyle, marginBottom: 6 }} />
            <input value={p.description} disabled={readOnly} onChange={e => updateArrayItem("adVariants", i, "description", e.target.value)} placeholder="Description (risk-reversal or urgency)" style={{ ...inputStyle, marginBottom: 6 }} />
            <input value={p.annotation} disabled={readOnly} onChange={e => updateArrayItem("adVariants", i, "annotation", e.target.value)} placeholder="Annotation" style={inputStyle} />
          </div>
        ))}
      </Section>

      <Section num={5} title="TikTok Scripts (2)" subtitle="30-60 sec shorts. Hook · Body · CTA. Native UGC feel." progress={p5} isOpen={openSection===5} onToggle={()=>toggleSection(5)} T={T}>
        {data.tiktokScripts.map((p, i) => (
          <div key={i} style={{ padding: "14px 16px", background: T.subtle, borderRadius: 3, marginBottom: 10, borderLeft: "3px solid " + ORANGE }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: T.text3 }}>Script {i + 1}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", color: T.text3, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600 }}>Duration</span>
                <input type="number" value={p.duration} disabled={readOnly} onChange={e => updateArrayItem("tiktokScripts", i, "duration", e.target.value)} min={15} max={90} style={{ width: 50, fontSize: 12, padding: "4px 6px", border: "1px solid " + T.border, borderRadius: 2, background: T.card, color: T.text }} />
                <span style={{ fontSize: 11, color: T.text3 }}>sec</span>
              </div>
            </div>
            <input value={p.hook} disabled={readOnly} onChange={e => updateArrayItem("tiktokScripts", i, "hook", e.target.value)} placeholder="Hook (first 1-2 seconds — spoken + on-screen)" style={{ ...inputStyle, marginBottom: 6 }} />
            <textarea value={p.body} disabled={readOnly} onChange={e => updateArrayItem("tiktokScripts", i, "body", e.target.value)} placeholder="Body (story/explanation with visual cues)" rows={5} style={{ ...taStyle, marginBottom: 6 }} />
            <input value={p.cta} disabled={readOnly} onChange={e => updateArrayItem("tiktokScripts", i, "cta", e.target.value)} placeholder="CTA (last 2-5 sec)" style={{ ...inputStyle, marginBottom: 6 }} />
            <input value={p.annotation} disabled={readOnly} onChange={e => updateArrayItem("tiktokScripts", i, "annotation", e.target.value)} placeholder="Annotation" style={inputStyle} />
          </div>
        ))}
      </Section>

      <Section num={6} title="Final Annotations & Testing Plan" subtitle="Explain your process, which A/B tests you'd run first, what you learned." progress={p6} isOpen={openSection===6} onToggle={()=>toggleSection(6)} T={T}>
        <textarea value={data.finalAnnotations} disabled={readOnly} onChange={e => update("finalAnnotations", e.target.value)} rows={10} placeholder="What frameworks did you use most? Which piece do you think is strongest and why? What would you A/B test first if this campaign went live?" style={{ ...taStyle, minHeight: 200 }} />
      </Section>

      {/* Rubric reference */}
      <div style={{ padding: "20px 24px", background: T.subtle, borderRadius: 3, marginBottom: 20, border: "1px solid " + T.border }}>
        <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, color: T.text3, letterSpacing: 1.8, textTransform: "uppercase", marginBottom: 12 }}>Self-Score Against Rubric</div>
        {RUBRIC.map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < RUBRIC.length - 1 ? "1px solid " + T.border : "none", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", color: T.text2 }}>
            <span>{r.criteria}</span>
            <span style={{ color: ORANGE, fontWeight: 700 }}>{r.weight}%</span>
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", flexWrap: "wrap", marginBottom: 40 }}>
        <button onClick={downloadText} className="bt" style={{ padding: "11px 20px", borderRadius: 2, background: T.card, color: T.text, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif", letterSpacing: .5, textTransform: "uppercase", cursor: "pointer" }}>Export as .txt</button>
        {!readOnly && <button onClick={() => saveNow()} className="bt" style={{ padding: "11px 20px", borderRadius: 2, background: T.card, color: T.text, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif", letterSpacing: .5, textTransform: "uppercase", cursor: "pointer" }}>Save Draft</button>}
        {!readOnly && <button onClick={() => setShowConfirmSubmit(true)} disabled={overallProgress < 50} className="bt" style={{ padding: "11px 26px", borderRadius: 2, background: overallProgress >= 50 ? GRADIENT : T.border, color: "white", fontSize: 12, fontWeight: 700, border: "none", fontFamily: "'DM Sans',sans-serif", letterSpacing: .8, textTransform: "uppercase", cursor: overallProgress >= 50 ? "pointer" : "not-allowed", boxShadow: overallProgress >= 50 ? "0 4px 14px rgba(124,58,237,.2)" : "none" }}>Submit Portfolio {"\u2192"}</button>}
        {readOnly && <div style={{ padding: "12px 20px", background: "#ECFDF5", color: "#059669", fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", letterSpacing: .8, textTransform: "uppercase", borderRadius: 2 }}>{"\u2713"} Submitted</div>}
      </div>

      {/* Submit confirmation dialog */}
      {showConfirmSubmit && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: 20 }}>
          <div style={{ background: T.card, padding: "32px 36px", borderRadius: 4, maxWidth: 440, width: "100%" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, marginBottom: 10, color: T.text }}>Submit Portfolio?</h3>
            <p style={{ fontSize: 13.5, color: T.text2, lineHeight: 1.6, marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Once you submit, fields become read-only. You can still export and review. Current completion: <strong>{overallProgress}%</strong>.</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setShowConfirmSubmit(false)} className="bt" style={{ padding: "10px 18px", borderRadius: 2, background: T.subtle, color: T.text, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>Cancel</button>
              <button onClick={handleSubmit} className="bt" style={{ padding: "10px 20px", borderRadius: 2, background: GRADIENT, color: "white", fontSize: 12, fontWeight: 700, border: "none", fontFamily: "'DM Sans',sans-serif", letterSpacing: .8, textTransform: "uppercase" }}>Yes, Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
