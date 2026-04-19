import { useState, useEffect, useMemo } from "react";
import { supabase } from "../supabase";

const PURPLE = "#7C3AED";
const ORANGE = "#F4A261";
const GRADIENT = "linear-gradient(135deg," + PURPLE + " 0%," + ORANGE + " 100%)";

export default function AdminDashboard({ T, onBack }) {
  const [tab, setTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [progress, setProgress] = useState([]);
  const [scores, setScores] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [openSubmission, setOpenSubmission] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [u, p, s, sub] = await Promise.all([
          supabase.from("profiles").select("*").order("created_at", { ascending: false }),
          supabase.from("progress").select("*"),
          supabase.from("quiz_scores").select("*"),
          supabase.from("portfolio_submissions").select("*").order("updated_at", { ascending: false }),
        ]);
        if (cancelled) return;
        if (u.error || p.error || s.error || sub.error) {
          const err = u.error || p.error || s.error || sub.error;
          setError(err.message || "Failed to load data. Are you an admin?");
        } else {
          setUsers(u.data || []);
          setProgress(p.data || []);
          setScores(s.data || []);
          setSubmissions(sub.data || []);
        }
      } catch (e) { if (!cancelled) setError(e.message); }
      if (!cancelled) setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, []);

  // Aggregations
  const stats = useMemo(() => {
    const userMap = {};
    users.forEach(u => { userMap[u.id] = u; });
    const progressByUser = {};
    progress.forEach(p => { progressByUser[p.user_id] = (progressByUser[p.user_id] || 0) + 1; });
    const scoreByUser = {};
    scores.forEach(s => {
      if (!scoreByUser[s.user_id]) scoreByUser[s.user_id] = { total: 0, sum: 0 };
      scoreByUser[s.user_id].total += 1;
      scoreByUser[s.user_id].sum += s.score_pct || 0;
    });
    const submittedCount = submissions.filter(s => s.status === "submitted").length;
    const draftCount = submissions.filter(s => s.status === "draft").length;
    return {
      totalUsers: users.length,
      totalLessonsCompleted: progress.length,
      totalQuizzesTaken: scores.length,
      avgQuizScore: scores.length ? Math.round(scores.reduce((a, s) => a + s.score_pct, 0) / scores.length) : 0,
      submittedCount,
      draftCount,
      userMap,
      progressByUser,
      scoreByUser,
    };
  }, [users, progress, scores, submissions]);

  const lessonCounts = useMemo(() => {
    const map = {};
    progress.forEach(p => { map[p.lesson_id] = (map[p.lesson_id] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [progress]);

  const quizByLesson = useMemo(() => {
    const map = {};
    scores.forEach(s => {
      if (!map[s.lesson_id]) map[s.lesson_id] = { count: 0, sum: 0 };
      map[s.lesson_id].count += 1;
      map[s.lesson_id].sum += s.score_pct || 0;
    });
    return Object.entries(map).map(([lid, v]) => ({ lid, count: v.count, avg: Math.round(v.sum / v.count) })).sort((a, b) => b.count - a.count);
  }, [scores]);

  if (loading) return <div style={{ padding: 48, textAlign: "center", color: T.text3 }}>Loading admin data{"\u2026"}</div>;
  if (error) return <div style={{ padding: 48, textAlign: "center", color: "#DC2626", fontFamily: "'DM Sans',sans-serif" }}>{error}<div style={{ marginTop: 16 }}><button className="bt" onClick={onBack} style={{ padding: "10px 20px", borderRadius: 2, background: T.subtle, color: T.text2, border: "1px solid " + T.border, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{"\u2190"} Back</button></div></div>;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "users", label: "Users (" + users.length + ")" },
    { id: "submissions", label: "Portfolio Submissions (" + submissions.length + ")" },
    { id: "analytics", label: "Analytics" },
  ];

  return (
    <div className="fi" style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ background: GRADIENT, borderRadius: 4, padding: "28px 32px", marginBottom: 24, color: "white" }}>
        <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85 }}>Admin Console</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 700, margin: "8px 0 4px", lineHeight: 1.1, letterSpacing: -.4 }}>LanSkil Admin Dashboard</h1>
        <p style={{ fontSize: 13, opacity: 0.92, margin: 0 }}>Users, lesson progress, quiz scores, and portfolio submissions across the platform.</p>
      </div>

      <button onClick={onBack} className="bt" style={{ marginBottom: 18, padding: "8px 16px", borderRadius: 2, background: T.subtle, color: T.text2, fontSize: 12, fontWeight: 600, border: "1px solid " + T.border, fontFamily: "'DM Sans',sans-serif" }}>{"\u2190"} Back to Dashboard</button>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid " + T.border, flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className="bt" style={{
            padding: "10px 18px", border: "none", background: "none",
            fontFamily: "'DM Sans',sans-serif", fontSize: 12.5, fontWeight: 600, letterSpacing: .3,
            color: tab === t.id ? PURPLE : T.text3, borderBottom: "2px solid " + (tab === t.id ? PURPLE : "transparent"),
            cursor: "pointer",
          }}>{t.label}</button>
        ))}
      </div>

      {/* Overview */}
      {tab === "overview" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 28 }}>
            <StatCard T={T} label="Total Users" value={stats.totalUsers} color={PURPLE} />
            <StatCard T={T} label="Lessons Completed" value={stats.totalLessonsCompleted} color={ORANGE} />
            <StatCard T={T} label="Quizzes Taken" value={stats.totalQuizzesTaken} color="#10B981" />
            <StatCard T={T} label="Avg Quiz Score" value={stats.avgQuizScore + "%"} color="#3B82F6" />
            <StatCard T={T} label="Portfolios Submitted" value={stats.submittedCount} color="#059669" />
            <StatCard T={T} label="Drafts In Progress" value={stats.draftCount} color="#F59E0B" />
          </div>

          <SectionBlock T={T} title="Most Completed Lessons">
            {lessonCounts.length === 0 ? <Empty T={T} msg="No lesson completions yet." /> : (
              <table style={tableStyle}>
                <thead><tr style={thStyle(T)}><th style={thCell}>Lesson ID</th><th style={thCell}>Completions</th></tr></thead>
                <tbody>
                  {lessonCounts.slice(0, 10).map(([lid, count]) => (
                    <tr key={lid} style={trStyle(T)}>
                      <td style={tdCell(T)}>{lid}</td>
                      <td style={tdCell(T)}>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </SectionBlock>
        </div>
      )}

      {/* Users */}
      {tab === "users" && (
        <SectionBlock T={T} title="All Users">
          {users.length === 0 ? <Empty T={T} msg="No users yet." /> : (
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead><tr style={thStyle(T)}>
                  <th style={thCell}>Name</th>
                  <th style={thCell}>Phone</th>
                  <th style={thCell}>Lessons Done</th>
                  <th style={thCell}>Quizzes</th>
                  <th style={thCell}>Avg Score</th>
                  <th style={thCell}>Joined</th>
                </tr></thead>
                <tbody>
                  {users.map(u => {
                    const lessons = stats.progressByUser[u.id] || 0;
                    const sc = stats.scoreByUser[u.id];
                    const avg = sc ? Math.round(sc.sum / sc.total) : 0;
                    return (
                      <tr key={u.id} style={trStyle(T)}>
                        <td style={tdCell(T)}>{(u.first_name || "\u2014") + " " + (u.last_name || "")}</td>
                        <td style={tdCell(T)}>{u.phone || "\u2014"}</td>
                        <td style={tdCell(T)}>{lessons}</td>
                        <td style={tdCell(T)}>{sc ? sc.total : 0}</td>
                        <td style={tdCell(T)}>{sc ? avg + "%" : "\u2014"}</td>
                        <td style={tdCell(T)}>{u.created_at ? new Date(u.created_at).toLocaleDateString() : "\u2014"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </SectionBlock>
      )}

      {/* Submissions */}
      {tab === "submissions" && (
        <SectionBlock T={T} title="Portfolio Submissions">
          {submissions.length === 0 ? <Empty T={T} msg="No portfolio submissions yet." /> : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {submissions.map(s => {
                const user = stats.userMap[s.user_id];
                const name = user ? ((user.first_name || "") + " " + (user.last_name || "")).trim() : s.user_id.slice(0, 8);
                return (
                  <div key={s.user_id + s.lesson_id} onClick={() => setOpenSubmission(s)} style={{
                    background: T.card, border: "1px solid " + T.border, borderRadius: 3, padding: "14px 18px",
                    cursor: "pointer", transition: "border-color .2s",
                    display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
                  }}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: T.text }}>{s.project_name || "Untitled"}</div>
                      <div style={{ fontSize: 12, color: T.text3, fontFamily: "'DM Sans',sans-serif", marginTop: 2 }}>{name} {"\u00B7"} {s.lesson_id}</div>
                    </div>
                    <span style={{
                      fontSize: 10.5, fontFamily: "'DM Sans',sans-serif", fontWeight: 700,
                      padding: "4px 10px", borderRadius: 2, letterSpacing: 1.2, textTransform: "uppercase",
                      background: s.status === "submitted" ? "#ECFDF5" : "#FFF7ED",
                      color: s.status === "submitted" ? "#059669" : "#B45309",
                    }}>{s.status}</span>
                    <div style={{ fontSize: 11, color: T.text3, fontFamily: "'DM Sans',sans-serif", minWidth: 120, textAlign: "right" }}>
                      {s.submitted_at ? "Submitted " + new Date(s.submitted_at).toLocaleDateString() : "Updated " + (s.updated_at ? new Date(s.updated_at).toLocaleDateString() : "\u2014")}
                    </div>
                    <span style={{ fontSize: 14, color: T.text3 }}>{"\u2192"}</span>
                  </div>
                );
              })}
            </div>
          )}
        </SectionBlock>
      )}

      {/* Analytics */}
      {tab === "analytics" && (
        <div>
          <SectionBlock T={T} title="Quiz Performance by Lesson">
            {quizByLesson.length === 0 ? <Empty T={T} msg="No quiz data yet." /> : (
              <table style={tableStyle}>
                <thead><tr style={thStyle(T)}>
                  <th style={thCell}>Lesson</th>
                  <th style={thCell}>Attempts</th>
                  <th style={thCell}>Avg Score</th>
                </tr></thead>
                <tbody>
                  {quizByLesson.map(q => (
                    <tr key={q.lid} style={trStyle(T)}>
                      <td style={tdCell(T)}>{q.lid}</td>
                      <td style={tdCell(T)}>{q.count}</td>
                      <td style={tdCell(T)}>
                        <span style={{ color: q.avg >= 80 ? "#059669" : q.avg >= 60 ? "#B45309" : "#DC2626", fontWeight: 700 }}>{q.avg}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </SectionBlock>
        </div>
      )}

      {/* Submission detail modal */}
      {openSubmission && <SubmissionModal submission={openSubmission} user={stats.userMap[openSubmission.user_id]} T={T} onClose={() => setOpenSubmission(null)} onUpdate={(updated) => {
        setSubmissions(prev => prev.map(s => (s.user_id === updated.user_id && s.lesson_id === updated.lesson_id) ? updated : s));
        setOpenSubmission(updated);
      }} />}
    </div>
  );
}

function StatCard({ T, label, value, color }) {
  return (
    <div style={{ background: T.card, border: "1px solid " + T.border, borderRadius: 3, padding: "18px 20px", borderLeft: "3px solid " + color }}>
      <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, color: T.text3, letterSpacing: 1.8, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 700, color: T.text, lineHeight: 1 }}>{value}</div>
    </div>
  );
}

function SectionBlock({ T, title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 12, letterSpacing: -.2 }}>{title}</h3>
      <div style={{ background: T.card, border: "1px solid " + T.border, borderRadius: 3, padding: 16 }}>{children}</div>
    </div>
  );
}

function Empty({ T, msg }) {
  return <div style={{ padding: 24, textAlign: "center", color: T.text3, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{msg}</div>;
}

const tableStyle = { width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans',sans-serif", fontSize: 12.5 };
const thStyle = (T) => ({ borderBottom: "1px solid " + T.border, textAlign: "left" });
const thCell = { padding: "10px 12px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#888" };
const trStyle = (T) => ({ borderBottom: "1px solid " + T.border });
const tdCell = (T) => ({ padding: "10px 12px", color: T.text2, verticalAlign: "top" });

function SubmissionModal({ submission, user, T, onClose, onUpdate }) {
  const d = submission.data || {};
  const userName = user ? ((user.first_name || "") + " " + (user.last_name || "")).trim() : "Unknown";
  const [reviewStatus, setReviewStatus] = useState(submission.review_status || "pending");
  const [reviewScore, setReviewScore] = useState(submission.review_score ?? "");
  const [reviewFeedback, setReviewFeedback] = useState(submission.review_feedback || "");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  async function saveReview() {
    setSaving(true);
    setSaveMsg("");
    const { data: me } = await supabase.auth.getUser();
    const payload = {
      review_status: reviewStatus,
      review_score: reviewScore === "" ? null : parseInt(reviewScore, 10),
      review_feedback: reviewFeedback,
      reviewed_at: new Date().toISOString(),
      reviewed_by: me?.user?.id || null,
    };
    const { data, error } = await supabase
      .from("portfolio_submissions")
      .update(payload)
      .eq("user_id", submission.user_id)
      .eq("lesson_id", submission.lesson_id)
      .select()
      .single();
    setSaving(false);
    if (error) { setSaveMsg("Error: " + error.message); return; }
    setSaveMsg("\u2713 Review saved");
    if (onUpdate && data) onUpdate(data);
    setTimeout(() => setSaveMsg(""), 2500);
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "flex-start", justifyContent: "center", zIndex: 300, padding: 20, overflowY: "auto" }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: T.card, padding: "28px 32px", borderRadius: 4, maxWidth: 820, width: "100%", marginTop: 40, marginBottom: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, gap: 14 }}>
          <div>
            <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, letterSpacing: 2, color: T.text3, textTransform: "uppercase", marginBottom: 4 }}>Portfolio Submission</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 700, color: T.text, marginBottom: 4 }}>{submission.project_name || d.brandName || "Untitled"}</h2>
            <div style={{ fontSize: 12, fontFamily: "'DM Sans',sans-serif", color: T.text3 }}>{userName} {"\u00B7"} {submission.lesson_id} {"\u00B7"} {submission.status}</div>
          </div>
          <button onClick={onClose} className="bt" style={{ padding: "6px 12px", borderRadius: 2, background: T.subtle, border: "1px solid " + T.border, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", color: T.text2 }}>Close</button>
        </div>

        {/* Review panel */}
        <div style={{ background: "linear-gradient(135deg,#7C3AED0A,#F4A2610A)", border: "1px solid " + T.border, borderRadius: 3, padding: "18px 20px", marginBottom: 22 }}>
          <div style={{ fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, color: PURPLE, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Instructor Review</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 12, marginBottom: 10 }}>
            <div>
              <label style={{ fontSize: 10, fontWeight: 700, color: T.text3, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", display: "block", marginBottom: 4 }}>Status</label>
              <select value={reviewStatus} onChange={e => setReviewStatus(e.target.value)} style={{ width: "100%", padding: "8px 10px", fontFamily: "'DM Sans',sans-serif", fontSize: 13, border: "1px solid " + T.border, borderRadius: 2, background: T.card, color: T.text }}>
                <option value="pending">Pending Review</option>
                <option value="under_review">Under Review</option>
                <option value="approved">{"Approved \u2014 Passed"}</option>
                <option value="needs_revision">Needs Revision</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 10, fontWeight: 700, color: T.text3, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", display: "block", marginBottom: 4 }}>{"Score (0\u2013100)"}</label>
              <input type="number" min={0} max={100} value={reviewScore} onChange={e => setReviewScore(e.target.value)} placeholder="\u2014" style={{ width: "100%", padding: "8px 10px", fontFamily: "'DM Sans',sans-serif", fontSize: 13, border: "1px solid " + T.border, borderRadius: 2, background: T.card, color: T.text }} />
            </div>
          </div>
          <label style={{ fontSize: 10, fontWeight: 700, color: T.text3, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", display: "block", marginBottom: 4 }}>Feedback (visible to student)</label>
          <textarea value={reviewFeedback} onChange={e => setReviewFeedback(e.target.value)} placeholder="Specific, actionable feedback against the rubric \u2014 hook quality, platform adaptation, CTA variety, storytelling, brand voice, ad structure..." rows={5} style={{ width: "100%", padding: "10px 12px", fontFamily: "'DM Sans',sans-serif", fontSize: 13, border: "1px solid " + T.border, borderRadius: 2, background: T.card, color: T.text, lineHeight: 1.55, resize: "vertical" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10, justifyContent: "flex-end" }}>
            {saveMsg && <span style={{ fontSize: 11, color: saveMsg.startsWith("Error") ? "#DC2626" : "#059669", fontFamily: "'DM Sans',sans-serif" }}>{saveMsg}</span>}
            {submission.reviewed_at && <span style={{ fontSize: 11, color: T.text3, fontFamily: "'DM Sans',sans-serif" }}>Last reviewed {new Date(submission.reviewed_at).toLocaleDateString()}</span>}
            <button disabled={saving} onClick={saveReview} className="bt" style={{ padding: "9px 18px", borderRadius: 2, background: GRADIENT, color: "white", fontSize: 12, fontWeight: 700, border: "none", fontFamily: "'DM Sans',sans-serif", letterSpacing: .8, textTransform: "uppercase", cursor: saving ? "not-allowed" : "pointer", opacity: saving ? 0.6 : 1 }}>{saving ? "Saving\u2026" : "Save Review"}</button>
          </div>
        </div>

        <ModalSection T={T} label="Brand Voice Guide">{d.voiceGuide || <i style={{ color: T.text3 }}>(empty)</i>}</ModalSection>
        <ModalSection T={T} label="Content Strategy">{d.contentStrategy || <i style={{ color: T.text3 }}>(empty)</i>}</ModalSection>

        {d.linkedinPosts && d.linkedinPosts.length > 0 && (
          <ModalSection T={T} label="LinkedIn Posts">
            {d.linkedinPosts.map((p, i) => (
              <ItemBlock T={T} key={i} title={"LinkedIn #" + (i + 1)} fields={[["Hook", p.hook], ["Body", p.body], ["CTA", p.cta], ["Annotation", p.annotation]]} />
            ))}
          </ModalSection>
        )}

        {d.instagramPosts && d.instagramPosts.length > 0 && (
          <ModalSection T={T} label="Instagram Captions">
            {d.instagramPosts.map((p, i) => (
              <ItemBlock T={T} key={i} title={"Instagram #" + (i + 1)} fields={[["Caption", p.caption], ["CTA", p.cta], ["Annotation", p.annotation]]} />
            ))}
          </ModalSection>
        )}

        {d.xThreads && d.xThreads.length > 0 && (
          <ModalSection T={T} label="X Threads">
            {d.xThreads.map((p, i) => (
              <ItemBlock T={T} key={i} title={"Thread #" + (i + 1)} fields={[["Tweets", p.tweets], ["Annotation", p.annotation]]} />
            ))}
          </ModalSection>
        )}

        {d.adVariants && d.adVariants.length > 0 && (
          <ModalSection T={T} label="Meta Ad Variants">
            {d.adVariants.map((p, i) => (
              <ItemBlock T={T} key={i} title={"Ad #" + (i + 1) + " \u2014 " + (p.framework || "")} fields={[["Primary Text", p.primaryText], ["Headline", p.headline], ["Description", p.description], ["Annotation", p.annotation]]} />
            ))}
          </ModalSection>
        )}

        {d.tiktokScripts && d.tiktokScripts.length > 0 && (
          <ModalSection T={T} label="TikTok Scripts">
            {d.tiktokScripts.map((p, i) => (
              <ItemBlock T={T} key={i} title={"Script #" + (i + 1) + " (" + (p.duration || "30") + " sec)"} fields={[["Hook", p.hook], ["Body", p.body], ["CTA", p.cta], ["Annotation", p.annotation]]} />
            ))}
          </ModalSection>
        )}

        <ModalSection T={T} label="Final Annotations">{d.finalAnnotations || <i style={{ color: T.text3 }}>(empty)</i>}</ModalSection>
      </div>
    </div>
  );
}

function ModalSection({ T, label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>{label}</div>
      <div style={{ fontSize: 13, color: T.text2, lineHeight: 1.65, whiteSpace: "pre-wrap", fontFamily: "'DM Sans',sans-serif", background: T.subtle, padding: "10px 14px", borderRadius: 2 }}>{children}</div>
    </div>
  );
}

function ItemBlock({ T, title, fields }) {
  return (
    <div style={{ marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid " + T.border }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: T.text3, marginBottom: 4 }}>{title}</div>
      {fields.map(([l, v]) => (
        <div key={l} style={{ marginBottom: 4, fontSize: 12.5, color: T.text2, fontFamily: "'DM Sans',sans-serif" }}>
          <span style={{ fontWeight: 700, color: T.text3, fontSize: 10.5, letterSpacing: 1, textTransform: "uppercase", marginRight: 8 }}>{l}:</span>
          <span>{v || <i style={{ color: T.text3 }}>(empty)</i>}</span>
        </div>
      ))}
    </div>
  );
}
