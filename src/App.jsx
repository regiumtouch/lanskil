import { useState, useEffect, useRef } from "react";
import LMS from "./LMS";
import { supabase } from "./supabase";

const COURSES = [
  {
    id: 1,
    title: "Content Strategy & Planning",
    desc: "Master the art of crafting content that converts. Learn editorial calendars, audience research, and distribution frameworks.",
    duration: "8 Weeks",
    format: "Hybrid",
    level: "Beginner",
    icon: "📝",
    tag: "Most Popular",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1751257983922-a627088d4c21?ixlib=rb-4.1.0&w=600&h=340&fit=crop",
  },
  {
    id: 2,
    title: "Videography & Video Editing",
    desc: "From camera fundamentals to post-production mastery. Create scroll-stopping video content for any platform.",
    duration: "10 Weeks",
    format: "In-Person",
    level: "All Levels",
    icon: "🎬",
    tag: "Hands-On",
    color: "#2D7DD2",
    image: "https://images.unsplash.com/photo-1635360381874-edd74cbd57f3?ixlib=rb-4.1.0&w=600&h=340&fit=crop",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    desc: "Build engaged communities and drive real results. Platform-specific strategies for Instagram, TikTok, LinkedIn & more.",
    duration: "6 Weeks",
    format: "Online",
    level: "Intermediate",
    icon: "📱",
    tag: "New Cohort",
    color: "#45B69C",
    image: "https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?ixlib=rb-4.1.0&w=600&h=340&fit=crop",
  },
  {
    id: 4,
    title: "Brand Design & Visual Identity",
    desc: "Create memorable brands from scratch. Typography, color theory, logo design, and complete brand systems.",
    duration: "8 Weeks",
    format: "Hybrid",
    level: "Beginner",
    icon: "🎨",
    tag: "Creative",
    color: "#9B5DE5",
    image: "https://plus.unsplash.com/premium_photo-1661306571194-fcb634770d6f?ixlib=rb-4.1.0&w=600&h=340&fit=crop",
  },
  {
    id: 5,
    title: "Copywriting & Storytelling",
    desc: "Write words that sell. Headlines, email sequences, landing pages, and narrative techniques that move people to action.",
    duration: "6 Weeks",
    format: "Online",
    level: "All Levels",
    icon: "✍️",
    tag: "High Demand",
    color: "#F4A261",
    image: "https://plus.unsplash.com/premium_photo-1757261507785-6c4019a6cab5?ixlib=rb-4.1.0&w=600&h=340&fit=crop",
  },
  {
    id: 6,
    title: "Digital Advertising & Analytics",
    desc: "Run profitable ad campaigns across Google, Meta, and emerging platforms. Data-driven decision making for marketers.",
    duration: "8 Weeks",
    format: "Hybrid",
    level: "Intermediate",
    icon: "📊",
    tag: "ROI Focused",
    color: "#E63946",
    image: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?ixlib=rb-4.1.0&w=600&h=340&fit=crop",
  },
];

const FEATURES = [
  {
    title: "Learn by Doing",
    desc: "Every course includes real client projects, portfolio pieces, and hands-on labs — not just theory.",
    icon: "⚡",
  },
  {
    title: "Industry Mentors",
    desc: "Learn directly from professionals working at leading agencies and brands across Africa and beyond.",
    icon: "👥",
  },
  {
    title: "Flexible Formats",
    desc: "Choose online, in-person, or hybrid learning. Evening and weekend cohorts available for working professionals.",
    icon: "🔄",
  },
  {
    title: "Career Support",
    desc: "Get job-ready with CV reviews, portfolio critiques, interview prep, and connections to hiring partners.",
    icon: "🚀",
  },
];

const TESTIMONIALS = [
  {
    name: "Aminata K.",
    role: "Content Strategist, Freetown",
    text: "This program completely changed my career trajectory. I went from posting randomly on social media to running content strategy for three brands.",
    avatar: "AK",
    photo: "https://plus.unsplash.com/premium_photo-1759570236398-34e8ebb64a3c?ixlib=rb-4.1.0&w=88&h=88&fit=crop&crop=face",
  },
  {
    name: "Ibrahim S.",
    role: "Freelance Videographer",
    text: "The videography course gave me both the technical skills and the confidence to start my own production company. The in-person sessions were invaluable.",
    avatar: "IS",
    photo: "https://plus.unsplash.com/premium_photo-1723514489790-18b9a81cbf09?ixlib=rb-4.1.0&w=88&h=88&fit=crop&crop=face",
  },
  {
    name: "Fatmata B.",
    role: "Marketing Manager",
    text: "I enrolled my entire team. The practical approach means they were applying what they learned from week one. Highly recommend the hybrid format.",
    avatar: "FB",
    photo: "https://images.unsplash.com/photo-1571442463716-e3e186378445?ixlib=rb-4.1.0&w=88&h=88&fit=crop&crop=face",
  },
];

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

async function ensureProfile(authUser, overrides = {}) {
  const payload = {
    id: authUser.id,
    first_name: overrides.first_name ?? authUser.user_metadata?.first_name ?? "",
    last_name: overrides.last_name ?? authUser.user_metadata?.last_name ?? "",
  };
  if (overrides.phone !== undefined) payload.phone = overrides.phone;
  if (overrides.interests !== undefined) payload.interests = overrides.interests;
  const { data, error } = await supabase
    .from("profiles")
    .upsert(payload, { onConflict: "id" })
    .select()
    .maybeSingle();
  if (error) {
    console.error("[ensureProfile] upsert failed:", error.message);
    return null;
  }
  return data;
}

export default function App() {
  const [view, setView] = useState("landing");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try { localStorage.setItem("lsk-view", view); } catch {}
  }, [view]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        loadProfile(session.user);
        try {
          const saved = localStorage.getItem("lsk-view");
          if (saved === "lms") setView("lms");
        } catch {}
      }
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setView("reset-password");
        return;
      }
      if (session) {
        loadProfile(session.user);
      } else {
        setUser(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  async function loadProfile(authUser) {
    let { data } = await supabase.from("profiles").select("*").eq("id", authUser.id).maybeSingle();
    if (!data) data = await ensureProfile(authUser);
    setUser({
      id: authUser.id,
      email: authUser.email,
      firstName: data?.first_name || authUser.user_metadata?.first_name || "Learner",
      lastName: data?.last_name || authUser.user_metadata?.last_name || "",
      phone: data?.phone || "",
      interests: data?.interests || [],
    });
  }

  async function handleLogin(userData) {
    setUser(userData);
    setView("lms");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    setView("landing");
  }

  function handleExploreCourses() {
    if (user) { setView("lms"); }
    else { setView("auth"); }
  }

  if (loading) return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#FAFAF7", fontFamily: "'DM Sans', sans-serif" }}><div style={{ textAlign: "center" }}><div style={{ width: 42, height: 42, background: "#7C3AED", borderRadius: 12, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 20, fontWeight: 900, fontFamily: "'Cormorant Garamond', serif", transform: "rotate(-3deg)", marginBottom: 16 }}>L</div><p style={{ color: "#999", fontSize: 14 }}>Loading...</p></div></div>;

  if (view === "lms" && user) return <LMS onBack={() => setView("landing")} user={user} onLogout={handleLogout} />;
  if (view === "auth") return <AuthScreen onLogin={handleLogin} onBack={() => setView("landing")} />;
  if (view === "reset-password") return <ResetPasswordScreen onDone={async () => { await supabase.auth.signOut(); setUser(null); setView("auth"); }} />;
  return <Landing onExploreCourses={handleExploreCourses} user={user} onEnterLMS={() => setView("lms")} />;
}

function ResetPasswordScreen({ onDone }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); setInfo("");
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) { setError(updateError.message); setLoading(false); return; }
      setInfo("Password updated! Redirecting to sign in...");
      setTimeout(() => { onDone(); }, 1500);
    } catch (err) { setError(err.message); setLoading(false); }
  }

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif", background: "#FAFAF7", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .auth-card { background: white; border-radius: 28px; padding: clamp(32px, 5vw, 52px); max-width: 480px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.08); position: relative; overflow: hidden; }
        .auth-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #7C3AED, #F4A261, #45B69C, #2D7DD2); }
        .auth-input { width: 100%; padding: 14px 18px; border: 1.5px solid #E8E8E8; border-radius: 14px; font-size: 15px; font-family: 'DM Sans', sans-serif; outline: none; transition: border-color 0.2s, box-shadow 0.2s; background: #FAFAF7; }
        .auth-input:focus { border-color: #7C3AED; box-shadow: 0 0 0 3px rgba(124,58,237,0.1); }
        .auth-btn { width: 100%; padding: 15px; border: none; border-radius: 50px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .auth-btn-primary { background: #7C3AED; color: white; }
        .auth-btn-primary:hover:not(:disabled) { background: #6D28D9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(124,58,237,0.3); }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.6s linear infinite; }
      `}</style>

      <div className="auth-card">
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 42, height: 42, background: "#7C3AED", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 20, fontWeight: 900, fontFamily: "'Cormorant Garamond', serif", transform: "rotate(-3deg)" }}>L</div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 900, fontSize: 24 }}>LanSkil</span>
          </div>
          <p style={{ color: "#888", fontSize: 14, marginTop: 4 }}>Choose a new password for your account</p>
        </div>

        {error && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: "12px 16px", marginBottom: 20, color: "#DC2626", fontSize: 13, fontWeight: 500 }}>{error}</div>
        )}
        {info && (
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 12, padding: "12px 16px", marginBottom: 20, color: "#059669", fontSize: 13, fontWeight: 500 }}>{info}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>New Password</label>
            <div style={{ position: "relative" }}>
              <input className="auth-input" type={showPw ? "text" : "password"} placeholder="At least 6 characters" value={password} onChange={e => { setPassword(e.target.value); setError(""); }} style={{ paddingRight: 44 }} />
              <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#999", padding: 4 }} aria-label={showPw ? "Hide password" : "Show password"}>{showPw ? "\u{1F441}\uFE0F" : "\u{1F441}\u200D\u{1F5E8}"}</button>
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Confirm Password</label>
            <input className="auth-input" type={showPw ? "text" : "password"} placeholder="Re-enter password" value={confirm} onChange={e => { setConfirm(e.target.value); setError(""); }} />
          </div>
          <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
            {loading ? <><div className="spinner" /> Updating...</> : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AuthScreen({ onLogin, onBack }) {
  const [mode, setMode] = useState("signup");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", interests: [] });
  const [error, setError] = useState("");
  const [errorKind, setErrorKind] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const interests = [
    { id: "leadership", label: "Leadership & Management", icon: "\u{1F451}" },
    { id: "branding", label: "Branding & Design", icon: "\u{1F3A8}" },
    { id: "content", label: "Content & Copywriting", icon: "\u270D\uFE0F" },
    { id: "video", label: "Videography & Production", icon: "\u{1F3AC}" },
    { id: "postprod", label: "Post-Production", icon: "\u{1F39E}\uFE0F" },
    { id: "web", label: "Web Development", icon: "\u{1F4BB}" },
    { id: "marketing", label: "Digital Marketing", icon: "\u{1F4CA}" },
    { id: "ops", label: "Operations & Business", icon: "\u{1F4CB}" },
  ];

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (step === 1) {
      if (!form.firstName.trim() || !form.email.trim()) {
        setError("Please fill in all required fields.");
        return;
      }
      setStep(2); return;
    }
    if (step === 2) { setStep(3); return; }
    if (!form.password.trim()) {
      setError("Please set a password.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { first_name: form.firstName, last_name: form.lastName },
        },
      });
      if (signUpError) { setError(signUpError.message); setLoading(false); return; }
      if (data.user) {
        // Create profile — guarded so failures are logged instead of silent
        await ensureProfile(data.user, {
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          interests: form.interests,
        });
        // If email confirmation is required, session will be null
        if (!data.session) {
          setError("");
          setStep(1);
          setMode("login");
          setForm(prev => ({ ...prev, password: "" }));
          setLoading(false);
          alert("Account created! Please check your email to confirm, then log in.");
          return;
        }
        onLogin({
          id: data.user.id,
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          interests: form.interests,
        });
      }
    } catch (err) { setError(err.message); }
    setLoading(false);
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setError(""); setErrorKind("");
    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });
      if (loginError) {
        const raw = (loginError.message || "").toLowerCase();
        if (raw.includes("email not confirmed") || raw.includes("not confirmed")) {
          setError("Your account exists but the email isn't confirmed yet. Check your inbox for the confirmation link.");
          setErrorKind("not_confirmed");
        } else if (raw.includes("invalid login") || raw.includes("invalid credentials")) {
          setError("We couldn't sign you in. Either this email isn't registered yet, or the password doesn't match.");
          setErrorKind("invalid_credentials");
        } else {
          setError(loginError.message);
          setErrorKind("");
        }
        setLoading(false); return;
      }
      // Profile will be loaded by onAuthStateChange in App
      if (data.user) {
        let { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).maybeSingle();
        if (!profile) profile = await ensureProfile(data.user);
        onLogin({
          id: data.user.id,
          email: data.user.email,
          firstName: profile?.first_name || data.user.user_metadata?.first_name || "Learner",
          lastName: profile?.last_name || data.user.user_metadata?.last_name || "",
          phone: profile?.phone || "",
          interests: profile?.interests || [],
        });
      }
    } catch (err) { setError(err.message); }
    setLoading(false);
  }

  async function handleResendConfirmation() {
    if (!form.email.trim()) return;
    setLoading(true); setInfo("");
    const { error: resendErr } = await supabase.auth.resend({ type: "signup", email: form.email });
    if (resendErr) { setError(resendErr.message); setErrorKind(""); }
    else { setInfo("Confirmation email sent. Check your inbox."); setError(""); setErrorKind(""); }
    setLoading(false);
  }

  async function handleForgotPassword(e) {
    e.preventDefault();
    setError(""); setErrorKind("");
    setInfo("");
    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(form.email, {
        redirectTo: window.location.origin,
      });
      if (resetError) { setError(resetError.message); setLoading(false); return; }
      setInfo("Check your email for a password reset link.");
    } catch (err) { setError(err.message); }
    setLoading(false);
  }

  function toggleInterest(id) {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  }

  function up(field, val) { setForm(prev => ({ ...prev, [field]: val })); setError(""); setInfo(""); }

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif", background: "#FAFAF7", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .auth-card {
          background: white; border-radius: 28px; padding: clamp(32px, 5vw, 52px);
          max-width: 480px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          position: relative; overflow: hidden;
        }
        .auth-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #7C3AED, #F4A261, #45B69C, #2D7DD2);
        }
        .auth-input {
          width: 100%; padding: 14px 18px; border: 1.5px solid #E8E8E8; border-radius: 14px;
          font-size: 15px; font-family: 'DM Sans', sans-serif; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s; background: #FAFAF7;
        }
        .auth-input:focus { border-color: #7C3AED; box-shadow: 0 0 0 3px rgba(124,58,237,0.1); }
        .auth-input::placeholder { color: #BBB; }
        .auth-btn {
          width: 100%; padding: 15px; border: none; border-radius: 50px;
          font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .auth-btn-primary { background: #7C3AED; color: white; }
        .auth-btn-primary:hover:not(:disabled) { background: #6D28D9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(124,58,237,0.3); }
        .auth-toggle {
          background: none; border: none; color: #7C3AED; font-size: 14px;
          font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif;
        }
        .auth-toggle:hover { text-decoration: underline; }
        .interest-chip {
          display: flex; align-items: center; gap: 10px; padding: 12px 16px;
          border-radius: 14px; border: 2px solid #E8E8E8; cursor: pointer;
          transition: all 0.2s; background: white; font-size: 14px; font-weight: 500;
        }
        .interest-chip:hover { border-color: #CCC; }
        .interest-chip.selected { border-color: #7C3AED; background: #F3EDFF; color: #7C3AED; }
        .step-dots { display: flex; gap: 8px; justify-content: center; }
        .step-dot {
          width: 8px; height: 8px; border-radius: 4px; background: #E8E8E8; transition: all 0.3s;
        }
        .step-dot.active { width: 24px; background: #7C3AED; }
        .step-dot.done { background: #10B981; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .auth-animate { animation: fadeInUp 0.4s ease forwards; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.6s linear infinite; }
      `}</style>

      <div style={{ position: "absolute", top: 24, left: 24 }}>
        <button onClick={onBack} style={{
          background: "white", border: "1px solid #E8E8E8", borderRadius: 50, padding: "10px 22px",
          fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          color: "#666", display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s",
        }}>
          {"\u2190"} Home
        </button>
      </div>

      <div className="auth-card">
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 42, height: 42, background: "#7C3AED", borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontSize: 20, fontWeight: 900, fontFamily: "'Cormorant Garamond', serif",
              transform: "rotate(-3deg)",
            }}>L</div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 900, fontSize: 24 }}>LanSkil</span>
          </div>
          <div style={{ fontSize: 11, color: "#BBB", fontWeight: 500, marginTop: -4, marginBottom: 4 }}>by Regium Touch</div>
          {mode === "signup" && step === 1 && <p style={{ color: "#888", fontSize: 14, marginTop: 4 }}>Create your account to start learning</p>}
          {mode === "signup" && step === 2 && <p style={{ color: "#888", fontSize: 14, marginTop: 4 }}>What are you interested in?</p>}
          {mode === "signup" && step === 3 && <p style={{ color: "#888", fontSize: 14, marginTop: 4 }}>Set a password to secure your account</p>}
          {mode === "login" && <p style={{ color: "#888", fontSize: 14, marginTop: 4 }}>Welcome back! Sign in to continue</p>}
          {mode === "reset" && <p style={{ color: "#888", fontSize: 14, marginTop: 4 }}>Enter your email to receive a reset link</p>}
        </div>

        {/* Step indicators for signup */}
        {mode === "signup" && (
          <div className="step-dots" style={{ marginBottom: 28 }}>
            {[1, 2, 3].map(s => (
              <div key={s} className={`step-dot ${s === step ? "active" : ""} ${s < step ? "done" : ""}`} />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12,
            padding: "12px 16px", marginBottom: 20, color: "#DC2626", fontSize: 13, fontWeight: 500,
          }}>
            <div style={{ lineHeight: 1.55 }}>{error}</div>
            {errorKind === "invalid_credentials" && (
              <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                <button type="button" onClick={() => { setMode("signup"); setStep(1); setError(""); setErrorKind(""); setInfo(""); }}
                  style={{ padding: "8px 14px", borderRadius: 8, background: "#7C3AED", color: "white", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Create account
                </button>
                <button type="button" onClick={() => { setMode("reset"); setError(""); setErrorKind(""); setInfo(""); }}
                  style={{ padding: "8px 14px", borderRadius: 8, background: "white", color: "#7C3AED", border: "1px solid #DDD6FE", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Reset password
                </button>
              </div>
            )}
            {errorKind === "not_confirmed" && (
              <div style={{ marginTop: 12 }}>
                <button type="button" onClick={handleResendConfirmation} disabled={loading}
                  style={{ padding: "8px 14px", borderRadius: 8, background: "#7C3AED", color: "white", border: "none", fontSize: 12, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1, fontFamily: "inherit" }}>
                  {loading ? "Sending…" : "Resend confirmation email"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Info */}
        {info && (
          <div style={{
            background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 12,
            padding: "12px 16px", marginBottom: 20, color: "#059669", fontSize: 13, fontWeight: 500,
          }}>
            {info}
          </div>
        )}

        {/* LOGIN FORM */}
        {mode === "login" && (
          <form onSubmit={handleLoginSubmit} className="auth-animate">
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Email</label>
              <input className="auth-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => up("email", e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#666" }}>Password</label>
                <button type="button" className="auth-toggle" style={{ fontSize: 12 }} onClick={() => { setMode("reset"); setError(""); setInfo(""); }}>Forgot password?</button>
              </div>
              <div style={{ position: "relative" }}>
                <input className="auth-input" type={showPw ? "text" : "password"} placeholder="Enter your password" value={form.password} onChange={e => up("password", e.target.value)} style={{ paddingRight: 44 }} />
                <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#999", padding: 4 }} aria-label={showPw ? "Hide password" : "Show password"}>{showPw ? "\u{1F441}\uFE0F" : "\u{1F441}\u200D\u{1F5E8}"}</button>
              </div>
            </div>
            <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
              {loading ? <><div className="spinner" /> Signing in...</> : "Sign In"}
            </button>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <span style={{ color: "#888", fontSize: 14 }}>Don't have an account? </span>
              <button type="button" className="auth-toggle" onClick={() => { setMode("signup"); setStep(1); setError(""); setInfo(""); }}>Sign Up</button>
            </div>
          </form>
        )}

        {/* RESET PASSWORD FORM */}
        {mode === "reset" && (
          <form onSubmit={handleForgotPassword} className="auth-animate">
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Email</label>
              <input className="auth-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => up("email", e.target.value)} />
            </div>
            <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
              {loading ? <><div className="spinner" /> Sending...</> : "Send reset link"}
            </button>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button type="button" className="auth-toggle" onClick={() => { setMode("login"); setError(""); setInfo(""); }}>{"\u2190"} Back to sign in</button>
            </div>
          </form>
        )}

        {/* SIGNUP STEP 1: Personal Info */}
        {mode === "signup" && step === 1 && (
          <form onSubmit={handleSignup} className="auth-animate">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>First Name *</label>
                <input className="auth-input" placeholder="Aminata" value={form.firstName} onChange={e => up("firstName", e.target.value)} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Last Name</label>
                <input className="auth-input" placeholder="Kamara" value={form.lastName} onChange={e => up("lastName", e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Email *</label>
              <input className="auth-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => up("email", e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Phone / WhatsApp</label>
              <input className="auth-input" type="tel" placeholder="+232..." value={form.phone} onChange={e => up("phone", e.target.value)} />
            </div>
            <button type="submit" className="auth-btn auth-btn-primary">Continue {"\u2192"}</button>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <span style={{ color: "#888", fontSize: 14 }}>Already have an account? </span>
              <button type="button" className="auth-toggle" onClick={() => { setMode("login"); setError(""); }}>Sign In</button>
            </div>
          </form>
        )}

        {/* SIGNUP STEP 2: Interests */}
        {mode === "signup" && step === 2 && (
          <div className="auth-animate">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
              {interests.map(i => (
                <div
                  key={i.id}
                  className={`interest-chip ${form.interests.includes(i.id) ? "selected" : ""}`}
                  onClick={() => toggleInterest(i.id)}
                >
                  <span style={{ fontSize: 18 }}>{i.icon}</span>
                  <span style={{ fontSize: 13 }}>{i.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button type="button" onClick={() => setStep(1)} style={{
                flex: "0 0 auto", padding: "15px 24px", borderRadius: 50, border: "1.5px solid #E8E8E8",
                background: "white", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", color: "#666",
              }}>{"\u2190"}</button>
              <button type="button" className="auth-btn auth-btn-primary" onClick={handleSignup} style={{ flex: 1 }}>
                {form.interests.length === 0 ? "Skip" : `Continue with ${form.interests.length} selected`} {"\u2192"}
              </button>
            </div>
          </div>
        )}

        {/* SIGNUP STEP 3: Password */}
        {mode === "signup" && step === 3 && (
          <form onSubmit={handleSignup} className="auth-animate">
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>Create Password *</label>
              <div style={{ position: "relative" }}>
                <input className="auth-input" type={showPw ? "text" : "password"} placeholder="At least 6 characters" value={form.password} onChange={e => up("password", e.target.value)} style={{ paddingRight: 44 }} />
                <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#999", padding: 4 }} aria-label={showPw ? "Hide password" : "Show password"}>{showPw ? "\u{1F441}\uFE0F" : "\u{1F441}\u200D\u{1F5E8}"}</button>
              </div>
              <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{
                    flex: 1, height: 4, borderRadius: 2,
                    background: form.password.length >= i * 3 ? (form.password.length >= 10 ? "#10B981" : form.password.length >= 6 ? "#F59E0B" : "#EF4444") : "#E8E8E8",
                    transition: "all 0.3s",
                  }} />
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#999", marginTop: 6 }}>
                {form.password.length < 6 ? "At least 6 characters required" : form.password.length < 10 ? "Good password" : "Strong password!"}
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button type="button" onClick={() => setStep(2)} style={{
                flex: "0 0 auto", padding: "15px 24px", borderRadius: 50, border: "1.5px solid #E8E8E8",
                background: "white", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", color: "#666",
              }}>{"\u2190"}</button>
              <button type="submit" className="auth-btn auth-btn-primary" disabled={loading} style={{ flex: 1 }}>
                {loading ? <><div className="spinner" /> Creating account...</> : "Create Account"}
              </button>
            </div>
          </form>
        )}

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: 12, color: "#BBB", marginTop: 24 }}>
          By continuing, you agree to LanSkil's Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}

function Landing({ onExploreCourses }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [enrollModal, setEnrollModal] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const filters = ["All", "Online", "In-Person", "Hybrid"];
  const filteredCourses =
    activeFilter === "All"
      ? COURSES
      : COURSES.filter((c) => c.format === activeFilter);

  const handleEnroll = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEnrollModal(null);
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 2500);
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#FAFAF7",
        color: "#1A1A1A",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(250, 250, 247, 0.92); backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 0 clamp(20px, 5vw, 80px);
          height: 72px; display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Cormorant Garamond', serif; font-weight: 900;
          font-size: 22px; color: #1A1A1A; text-decoration: none;
          display: flex; align-items: center; gap: 10px;
        }
        .nav-logo-mark {
          width: 36px; height: 36px; background: #7C3AED; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 18px; font-weight: 900;
          transform: rotate(-3deg);
        }
        .nav-links { display: flex; gap: 36px; align-items: center; }
        .nav-links a {
          text-decoration: none; color: #555; font-size: 14px; font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #7C3AED; }
        .nav-cta {
          background: #1A1A1A; color: white !important; padding: 10px 24px;
          border-radius: 50px; font-size: 13px !important; font-weight: 600 !important;
          transition: all 0.3s !important;
        }
        .nav-cta:hover { background: #7C3AED !important; transform: translateY(-1px); }
        
        .hamburger {
          display: none; background: none; border: none; cursor: pointer;
          width: 32px; height: 24px; position: relative; z-index: 200;
        }
        .hamburger span {
          display: block; width: 100%; height: 2px; background: #1A1A1A;
          position: absolute; left: 0; transition: all 0.3s;
        }
        .hamburger span:nth-child(1) { top: 0; }
        .hamburger span:nth-child(2) { top: 50%; transform: translateY(-50%); }
        .hamburger span:nth-child(3) { bottom: 0; }
        .hamburger.open span:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { bottom: 50%; transform: translateY(50%) rotate(-45deg); }

        .mobile-menu {
          display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(250,250,247,0.98); z-index: 99; flex-direction: column;
          align-items: center; justify-content: center; gap: 32px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-size: 24px; color: #1A1A1A; text-decoration: none; font-weight: 500;
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: #7C3AED; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
        }

        .hero {
          padding: 140px clamp(20px, 5vw, 80px) 80px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          max-width: 1300px; margin: 0 auto;
        }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding-top: 120px; gap: 40px; text-align: center; }
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #F3EDFF; color: #7C3AED; font-size: 13px; font-weight: 600;
          padding: 8px 18px; border-radius: 50px; margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
        }
        .hero-badge::before {
          content: ''; width: 8px; height: 8px; background: #7C3AED;
          border-radius: 50%; animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .hero h1 {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 900; line-height: 1.05; margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
        .hero h1 em {
          font-style: italic; color: #7C3AED;
          background: linear-gradient(135deg, #7C3AED, #F4A261);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero p {
          font-size: 17px; line-height: 1.7; color: #666; max-width: 500px;
          margin-bottom: 36px; animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        @media (max-width: 900px) { .hero p { margin: 0 auto 36px; } }
        .hero-actions {
          display: flex; gap: 16px; flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        @media (max-width: 900px) { .hero-actions { justify-content: center; } }
        .btn-primary {
          background: #7C3AED; color: white; border: none; padding: 16px 36px;
          border-radius: 50px; font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit;
        }
        .btn-primary:hover { background: #d14e2e; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124,58,237,0.3); }
        .btn-secondary {
          background: transparent; color: #1A1A1A; border: 2px solid #E0E0E0; padding: 14px 36px;
          border-radius: 50px; font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit;
        }
        .btn-secondary:hover { border-color: #1A1A1A; }

        .hero-visual {
          position: relative; animation: fadeInUp 1s ease-out 0.3s both;
        }
        .hero-card {
          background: white; border-radius: 24px; padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08); position: relative; overflow: hidden;
        }
        .hero-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #7C3AED, #2D7DD2, #45B69C, #9B5DE5);
        }
        .hero-card-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .hero-skill-chip {
          padding: 14px 16px; border-radius: 14px; font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 10px;
          transition: transform 0.2s;
        }
        .hero-skill-chip:hover { transform: scale(1.03); }

        .hero-float-badge {
          position: absolute; background: white; border-radius: 16px; padding: 14px 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1); font-size: 13px; font-weight: 600;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stats-bar {
          background: #1A1A1A; padding: 48px clamp(20px, 5vw, 80px);
          display: flex; justify-content: center; gap: clamp(32px, 6vw, 80px); flex-wrap: wrap;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4vw, 48px);
          font-weight: 900; color: #7C3AED;
        }
        .stat-label { font-size: 14px; color: #999; margin-top: 4px; }

        .section {
          padding: 100px clamp(20px, 5vw, 80px);
          max-width: 1300px; margin: 0 auto;
        }
        .section-label {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px;
          color: #7C3AED; margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 4vw, 46px);
          font-weight: 800; margin-bottom: 16px; line-height: 1.15;
        }
        .section-desc {
          font-size: 16px; color: #777; max-width: 550px; line-height: 1.7; margin-bottom: 48px;
        }

        .filter-bar {
          display: flex; gap: 10px; margin-bottom: 40px; flex-wrap: wrap;
        }
        .filter-btn {
          padding: 10px 24px; border-radius: 50px; border: 1.5px solid #E0E0E0;
          background: white; font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; color: #666;
        }
        .filter-btn.active {
          background: #1A1A1A; color: white; border-color: #1A1A1A;
        }
        .filter-btn:hover:not(.active) { border-color: #999; }

        .courses-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;
        }
        @media (max-width: 420px) { .courses-grid { grid-template-columns: 1fr; } }
        .course-card {
          background: white; border-radius: 20px; padding: 0; position: relative;
          border: 1px solid #F0F0F0; transition: all 0.4s; cursor: pointer; overflow: hidden;
        }
        .course-card-image {
          width: 100%; height: 180px; object-fit: cover; display: block;
        }
        .course-card-body { padding: 28px 32px 32px; }
        .course-card:hover {
          transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: transparent;
        }
        .course-card-tag {
          display: inline-block; padding: 5px 14px; border-radius: 50px;
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
          margin-bottom: 20px;
        }
        .course-card-icon { font-size: 36px; margin-bottom: 16px; display: block; }
        .course-card h3 {
          font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 800;
          margin-bottom: 12px; line-height: 1.25;
        }
        .course-card p { font-size: 14px; color: #888; line-height: 1.65; margin-bottom: 24px; }
        .course-meta {
          display: flex; gap: 16px; flex-wrap: wrap;
        }
        .course-meta-item {
          font-size: 12px; color: #999; font-weight: 600;
          display: flex; align-items: center; gap: 5px;
        }
        .course-card-body { position: relative; }
        .course-enroll-btn {
          position: absolute; bottom: 32px; right: 32px; width: 44px; height: 44px;
          border-radius: 50%; border: 2px solid #E0E0E0; background: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s; font-size: 18px;
        }
        .course-card:hover .course-enroll-btn {
          background: #7C3AED; border-color: #7C3AED; color: white;
        }

        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px;
        }
        .feature-card {
          padding: 36px; border-radius: 20px; background: white; border: 1px solid #F0F0F0;
          transition: all 0.3s;
        }
        .feature-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.06); }
        .feature-icon {
          width: 56px; height: 56px; border-radius: 16px; background: #F3EDFF;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 20px;
        }
        .feature-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
        .feature-card p { font-size: 14px; color: #888; line-height: 1.65; }

        .inperson-section {
          background: #1A1A1A; border-radius: 32px; padding: clamp(40px, 6vw, 80px);
          margin: 0 clamp(20px, 5vw, 80px); display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center; color: white; position: relative; overflow: hidden;
        }
        @media (max-width: 768px) { .inperson-section { grid-template-columns: 1fr; } }
        .inperson-section::before {
          content: ''; position: absolute; top: -40%; right: -10%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%);
        }
        .inperson-section .section-label { color: #F4A261; }
        .inperson-section h2 {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800; margin-bottom: 20px; line-height: 1.15;
        }
        .inperson-section p { color: #CCC; font-size: 15px; line-height: 1.7; margin-bottom: 32px; }
        .inperson-features { display: flex; flex-direction: column; gap: 20px; }
        .inperson-feat {
          display: flex; gap: 16px; align-items: flex-start;
        }
        .inperson-feat-icon {
          width: 44px; height: 44px; min-width: 44px; border-radius: 12px;
          background: rgba(255,255,255,0.12); display: flex; align-items: center;
          justify-content: center; font-size: 20px;
        }
        .inperson-feat h4 { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
        .inperson-feat p { font-size: 13px; color: #BBB; margin: 0; line-height: 1.5; }

        .testimonials-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;
        }
        .testimonial-card {
          background: white; border-radius: 20px; padding: 36px; border: 1px solid #F0F0F0;
        }
        .testimonial-card p {
          font-size: 15px; line-height: 1.7; color: #555; margin-bottom: 24px;
          font-style: italic;
        }
        .testimonial-author { display: flex; align-items: center; gap: 14px; }
        .testimonial-avatar {
          width: 44px; height: 44px; border-radius: 50%; background: #7C3AED;
          color: white; display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px; border: 2px solid #F3EDFF;
        }
        .testimonial-name { font-weight: 700; font-size: 15px; }
        .testimonial-role { font-size: 13px; color: #999; }

        .cta-section {
          text-align: center; padding: 100px clamp(20px, 5vw, 80px);
          max-width: 700px; margin: 0 auto;
        }
        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 4vw, 46px);
          font-weight: 900; margin-bottom: 16px; line-height: 1.1;
        }
        .cta-section p { color: #777; font-size: 16px; line-height: 1.7; margin-bottom: 36px; }

        .footer {
          background: #1A1A1A; color: white; padding: 60px clamp(20px, 5vw, 80px) 32px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
          max-width: 1300px; margin: 0 auto;
        }
        @media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        .footer-brand {
          font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 900;
          margin-bottom: 12px;
        }
        .footer-desc { font-size: 14px; color: #888; line-height: 1.6; }
        .footer h4 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; color: #999; }
        .footer a { display: block; color: #DDD; text-decoration: none; font-size: 14px; margin-bottom: 10px; transition: color 0.2s; }
        .footer a:hover { color: #7C3AED; }
        .footer-bottom {
          border-top: 1px solid #333; margin-top: 48px; padding-top: 24px;
          display: flex; justify-content: space-between; max-width: 1300px; margin-left: auto; margin-right: auto;
          font-size: 13px; color: #666; flex-wrap: wrap; gap: 12px;
        }

        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px); z-index: 200; display: flex;
          align-items: center; justify-content: center; padding: 20px;
          animation: fadeIn 0.3s;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal {
          background: white; border-radius: 24px; padding: clamp(24px, 5vw, 48px); max-width: 480px;
          width: 100%; position: relative; animation: slideUp 0.4s ease-out;
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .modal-close {
          position: absolute; top: 20px; right: 20px; background: #F5F5F5;
          border: none; width: 36px; height: 36px; border-radius: 50%;
          font-size: 18px; cursor: pointer; display: flex; align-items: center;
          justify-content: center; transition: background 0.2s;
        }
        .modal-close:hover { background: #E0E0E0; }
        .modal h2 {
          font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 800;
          margin-bottom: 8px;
        }
        .modal .modal-sub { font-size: 14px; color: #888; margin-bottom: 32px; }
        .form-group { margin-bottom: 20px; }
        .form-group label {
          display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #666;
        }
        .form-group input {
          width: 100%; padding: 14px 18px; border: 1.5px solid #E8E8E8; border-radius: 14px;
          font-size: 15px; font-family: inherit; outline: none; transition: border-color 0.2s;
        }
        .form-group input:focus { border-color: #7C3AED; }
        .modal .btn-primary { width: 100%; }

        .success-msg {
          text-align: center; padding: 40px 0;
        }
        .success-icon { font-size: 56px; margin-bottom: 16px; display: block; }
        .success-msg h3 { font-family: 'Cormorant Garamond', serif; font-size: 24px; margin-bottom: 8px; }
        .success-msg p { color: #888; font-size: 14px; }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <span className="nav-logo-mark">L</span>
          LanSkil
        </a>
        <div className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#features">Why Us</a>
          <a href="#inperson">In-Person</a>
          <a href="#testimonials">Stories</a>
          <a href="#enroll" className="nav-cta">
            Enroll Now
          </a>
        </div>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#courses" onClick={() => setMenuOpen(false)}>
          Courses
        </a>
        <a href="#features" onClick={() => setMenuOpen(false)}>
          Why Us
        </a>
        <a href="#inperson" onClick={() => setMenuOpen(false)}>
          In-Person
        </a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>
          Stories
        </a>
        <a
          href="#enroll"
          onClick={() => setMenuOpen(false)}
          style={{ color: "#7C3AED" }}
        >
          Enroll Now
        </a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-badge">Enrolling Now — Next Cohort Starts Soon</div>
          <h1>
            Build the <em>Digital Skills</em> That Brands Are Hiring For
          </h1>
          <p>
            From content strategy to videography — master the marketing skills
            that actually get you hired. Practical training, real projects,
            industry mentors. Online and in-person in Freetown.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onExploreCourses}>
              Explore Courses
            </button>
            <button className="btn-secondary">Download Brochure</button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://plus.unsplash.com/premium_photo-1667516599086-af387f7c62b1?ixlib=rb-4.1.0&w=700&h=500&fit=crop"
            alt="Creative team collaborating in a brainstorm meeting"
            style={{
              width: "100%",
              borderRadius: 24,
              objectFit: "cover",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              display: "block",
            }}
          />
          <div
            className="hero-float-badge"
            style={{ top: -16, right: -12, animationDelay: "0.5s" }}
          >
            🎓 500+ Graduates
          </div>
          <div
            className="hero-float-badge"
            style={{ bottom: -12, left: -12, animationDelay: "1.5s" }}
          >
            ⭐ 4.9 Rating
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[
          { num: 1000, suffix: "+", label: "Student Target by 2027" },
          { label: "Expert Instructors", iconOnly: true },
          { num: 60, suffix: "+", label: "Rich Modules Live" },
          { num: 93, suffix: "%", label: "Placement Goal" },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">
              {s.iconOnly ? <span style={{ fontSize: "0.9em" }}>{"\u2728"}</span> : <AnimatedCounter end={s.num} suffix={s.suffix} />}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* COURSES */}
      <section className="section" id="courses">
        <div className="section-label">Our Programs</div>
        <div className="section-title">Courses Built for the Real World</div>
        <div className="section-desc">
          Every program is designed around the skills employers and clients are
          actually looking for. Choose your path and start building your
          portfolio from day one.
        </div>
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="courses-grid">
          {filteredCourses.map((c) => (
            <div
              className="course-card"
              key={c.id}
              onClick={() => setEnrollModal(c.title)}
            >
              <img src={c.image} alt={c.title} className="course-card-image" />
              <div className="course-card-body">
                <span
                  className="course-card-tag"
                  style={{
                    background: c.color + "15",
                    color: c.color,
                  }}
                >
                  {c.tag}
                </span>
                <span className="course-card-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="course-meta">
                  <span className="course-meta-item">🕐 {c.duration}</span>
                  <span className="course-meta-item">📍 {c.format}</span>
                  <span className="course-meta-item">📈 {c.level}</span>
                </div>
                <button
                  className="course-enroll-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnrollModal(c.title);
                  }}
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features" style={{ background: "white" }}>
        <div className="section-label">Why LanSkil</div>
        <div className="section-title">Not Just Another Online Course</div>
        <div className="section-desc">
          We combine the flexibility of online learning with the depth of
          in-person mentorship to create an experience that actually sticks.
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IN-PERSON */}
      <section id="inperson" style={{ padding: "40px 0 100px" }}>
        <div className="inperson-section">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label">In-Person Training</div>
            <h2>
              Hands-On Learning at Our Freetown Campus
            </h2>
            <p>
              Some skills are best learned face-to-face. Our in-person sessions
              give you access to professional equipment, real-time feedback, and
              a community of driven peers.
            </p>
            <button
              className="btn-primary"
              onClick={() => setEnrollModal("In-Person Visit")}
            >
              Book a Campus Visit
            </button>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661963085061-5068e4e73cc6?ixlib=rb-4.1.0&w=600&h=400&fit=crop"
              alt="LanSkil campus classroom"
              style={{
                width: "100%",
                borderRadius: 20,
                objectFit: "cover",
                marginBottom: 28,
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              }}
            />
            <div className="inperson-features">
            {[
              {
                icon: "🎥",
                title: "Professional Studio Access",
                desc: "Cameras, lighting rigs, editing suites — all included in your enrollment.",
              },
              {
                icon: "👩‍🏫",
                title: "Small Class Sizes",
                desc: "Maximum 15 students per cohort for personalized attention and mentorship.",
              },
              {
                icon: "🤝",
                title: "Networking Events",
                desc: "Monthly meetups with industry professionals, potential clients, and fellow creatives.",
              },
              {
                icon: "💼",
                title: "Live Client Projects",
                desc: "Work on real briefs from local businesses and NGOs as part of your training.",
              },
            ].map((f, i) => (
              <div className="inperson-feat" key={i}>
                <div className="inperson-feat-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="section-label">Student Stories</div>
        <div className="section-title">From Learners to Leaders</div>
        <div className="section-desc">
          Hear from graduates who turned their training into thriving careers
          and businesses.
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>"{t.text}"</p>
              <div className="testimonial-author">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="testimonial-avatar"
                  style={{ objectFit: "cover" }}
                />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="enroll">
        <div className="section-label">Ready to Start?</div>
        <h2>
          Your Next Chapter{" "}
          <span style={{ fontStyle: "italic", color: "#7C3AED" }}>
            Starts Here
          </span>
        </h2>
        <p>
          Join hundreds of graduates who are building careers they love. Enroll
          in the next cohort and get the skills, portfolio, and connections you
          need to thrive.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={onExploreCourses}>
            Apply Now — It's Free to Start
          </button>
          <button className="btn-secondary">Talk to an Advisor</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">LanSkil by Regium Touch</div>
            <p className="footer-desc">
              Empowering the next generation of digital marketers, creators, and
              storytellers. Based in Freetown, training globally.
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <a href="#">Content Strategy</a>
            <a href="#">Videography</a>
            <a href="#">Social Media</a>
            <a href="#">Brand Design</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">WhatsApp</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 LanSkil by Regium Touch. All rights reserved.</span>
          <span>Freetown, Sierra Leone</span>
        </div>
      </footer>

      {/* ENROLLMENT MODAL */}
      {enrollModal && (
        <div className="modal-overlay" onClick={() => { setEnrollModal(null); setSubmitted(false); }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => { setEnrollModal(null); setSubmitted(false); }}>
              ✕
            </button>
            {submitted ? (
              <div className="success-msg">
                <span className="success-icon">🎉</span>
                <h3>You're In!</h3>
                <p>
                  We'll be in touch within 24 hours with next steps. Welcome to
                  LanSkil!
                </p>
              </div>
            ) : (
              <>
                <h2>
                  {enrollModal === "general"
                    ? "Start Your Journey"
                    : `Enroll: ${enrollModal}`}
                </h2>
                <p className="modal-sub">
                  Fill in your details and we'll get you started with the next
                  cohort.
                </p>
                <div>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+232..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <button className="btn-primary" onClick={handleEnroll}>
                    Submit Application →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
