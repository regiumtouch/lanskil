// RichSlide renderer - handles different layout types for rich modules
// Supports: cover, stats, grid, principle, comparison, example, table, quiz, exercise, takeaways

const PURPLE = "#7C3AED";
const PURPLE_LIGHT = "#F3EDFF";
const ORANGE = "#F4A261";

export default function RichSlide({ slide, T, present }) {
  const p = present ? 1.25 : 1; // scale factor for present mode

  const styles = {
    wrap: {
      background: T.card,
      borderRadius: present ? 0 : 20,
      border: present ? "none" : "1px solid " + T.border,
      padding: present ? "60px 80px" : "40px 48px",
      minHeight: present ? "calc(100vh - 80px)" : 480,
      color: T.text,
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    eyebrow: {
      fontSize: 11 * p,
      fontWeight: 800,
      color: PURPLE,
      textTransform: "uppercase",
      letterSpacing: 2,
      marginBottom: 12,
    },
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: (32 * p) + "px",
      fontWeight: 800,
      lineHeight: 1.15,
      marginBottom: 16,
      color: T.text,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: (22 * p) + "px",
      fontWeight: 700,
      marginBottom: 12,
      color: T.text,
    },
    sub: { fontSize: 15 * p, color: T.text2, lineHeight: 1.7, marginBottom: 24 },
    body: { fontSize: 14 * p, color: T.text2, lineHeight: 1.7 },
  };

  switch (slide.type) {
    case "cover":
      return (
        <div style={{ ...styles.wrap, background: "linear-gradient(135deg,#1A1A1A,#2D1B4E)", color: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.3),transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "-20%", left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(244,162,97,0.15),transparent 70%)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 12 * p, fontWeight: 800, color: ORANGE, letterSpacing: 3, marginBottom: 16 }}>{slide.module}</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: (56 * p) + "px", fontWeight: 900, lineHeight: 1.05, marginBottom: 8, color: "white" }}>
              {slide.title}<br />
              <span style={{ background: "linear-gradient(135deg," + PURPLE + "," + ORANGE + ")", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>{slide.titleAccent}</span>
            </h1>
            <p style={{ fontSize: 17 * p, color: "#BBB", lineHeight: 1.7, maxWidth: 680, marginTop: 20 }}>{slide.subtitle}</p>
            <div style={{ marginTop: 32, fontSize: 12 * p, color: "#888", fontWeight: 600, letterSpacing: 1.5 }}>{slide.meta}</div>
          </div>
        </div>
      );

    case "stats":
      return (
        <div style={styles.wrap}>
          <div style={styles.eyebrow}>{slide.eyebrow}</div>
          <h1 style={styles.h1}>{slide.title}</h1>
          <p style={styles.sub}>{slide.intro}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 32 }}>
            {slide.stats.map((s, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 16, background: PURPLE_LIGHT, border: "1px solid " + PURPLE + "30" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42 * p, fontWeight: 900, color: PURPLE, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13 * p, color: T.text2, marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: 14 * p, fontWeight: 700, color: T.text, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{slide.subheading}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {slide.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: PURPLE, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                <p style={{ fontSize: 13.5 * p, color: T.text2, lineHeight: 1.65 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "grid":
      return (
        <div style={styles.wrap}>
          <div style={styles.eyebrow}>{slide.eyebrow}</div>
          <h1 style={styles.h1}>{slide.title}</h1>
          <p style={styles.sub}>{slide.subtitle}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {slide.items.map((item, i) => (
              <div key={i} style={{ padding: 22, borderRadius: 16, background: T.subtle, border: "1.5px solid " + T.border, position: "relative" }}>
                <div style={{ position: "absolute", top: 14, right: 16, fontSize: 10 * p, fontWeight: 800, color: PURPLE, letterSpacing: 1 }}>{item.num}</div>
                <div style={{ fontSize: 28 * p, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16 * p, fontWeight: 700, color: T.text, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 12.5 * p, color: T.text2, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          {slide.footer && <p style={{ marginTop: 24, fontSize: 13 * p, color: T.text3, fontStyle: "italic", textAlign: "center" }}>{slide.footer}</p>}
        </div>
      );

    case "principle":
      return (
        <div style={styles.wrap}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: PURPLE, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 * p, fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>{slide.num}</div>
            <h1 style={{ ...styles.h1, marginBottom: 0, fontSize: (26 * p) + "px" }}>{slide.title}</h1>
          </div>
          {slide.intro && <p style={styles.sub}>{slide.intro}</p>}
          {slide.sectionTitle && <h3 style={{ fontSize: 13 * p, fontWeight: 700, color: T.text, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>{slide.sectionTitle}</h3>}

          {slide.sections && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginBottom: 20 }}>
              {slide.sections.map((s, i) => (
                <div key={i} style={{ padding: 16, borderRadius: 12, background: T.subtle, borderLeft: "3px solid " + PURPLE }}>
                  <div style={{ fontSize: 13 * p, fontWeight: 700, color: T.text, marginBottom: 4 }}>{s.heading}</div>
                  <div style={{ fontSize: 12.5 * p, color: PURPLE, fontStyle: "italic", marginBottom: 4 }}>{s.example}</div>
                  <div style={{ fontSize: 11.5 * p, color: T.text3 }}>{s.note}</div>
                </div>
              ))}
            </div>
          )}

          {slide.twoCol && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              {[slide.twoCol.left, slide.twoCol.right].map((col, i) => (
                <div key={i} style={{ padding: 18, borderRadius: 12, background: T.subtle, border: "1px solid " + T.border }}>
                  <div style={{ fontSize: 13 * p, fontWeight: 700, color: PURPLE, marginBottom: 10 }}>{col.title}</div>
                  {col.items.map((it, j) => <div key={j} style={{ fontSize: 13 * p, color: T.text2, marginBottom: 6 }}>• {it}</div>)}
                </div>
              ))}
            </div>
          )}

          {slide.grid && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
              {slide.grid.map((g, i) => (
                <div key={i} style={{ padding: 14, borderRadius: 12, background: T.subtle, border: "1px solid " + T.border }}>
                  <div style={{ fontSize: 12 * p, fontWeight: 700, color: T.text, marginBottom: 4 }}>{g.heading}</div>
                  <div style={{ fontSize: 11.5 * p, color: PURPLE, fontStyle: "italic", marginBottom: 4 }}>{g.example}</div>
                  <div style={{ fontSize: 10.5 * p, color: T.text3 }}>{g.note}</div>
                </div>
              ))}
            </div>
          )}

          {slide.pricing && (
            <div>
              <div style={{ fontSize: 11 * p, fontWeight: 700, color: T.text3, marginBottom: 12, letterSpacing: 1 }}>{slide.pricing.label}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
                {slide.pricing.tiers.map((t, i) => (
                  <div key={i} style={{ padding: 18, borderRadius: 14, background: t.highlight ? PURPLE_LIGHT : T.subtle, border: t.highlight ? "2px solid " + PURPLE : "1px solid " + T.border, position: "relative" }}>
                    {t.badge && <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: PURPLE, color: "white", fontSize: 9.5 * p, fontWeight: 800, padding: "4px 12px", borderRadius: 20, letterSpacing: 1 }}>{t.badge}</div>}
                    <div style={{ fontSize: 14 * p, fontWeight: 700, color: T.text, marginBottom: 6 }}>{t.name}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30 * p, fontWeight: 800, color: t.highlight ? PURPLE : T.text }}>{t.price}<span style={{ fontSize: 12 * p, fontWeight: 500, color: T.text3 }}>{t.period}</span></div>
                    <div style={{ marginTop: 10, borderTop: "1px solid " + T.border, paddingTop: 10 }}>
                      {t.features.map((f, j) => <div key={j} style={{ fontSize: 11.5 * p, color: T.text2, marginBottom: 4 }}>✓ {f}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.example && <ExampleCard ex={slide.example} T={T} p={p} />}

          {slide.rule && (
            <div style={{ marginTop: 16, padding: "14px 20px", background: "linear-gradient(135deg," + PURPLE + "," + ORANGE + ")", borderRadius: 12, color: "white", fontSize: 13 * p, fontWeight: 600, lineHeight: 1.5 }}>
              <strong style={{ fontSize: 11 * p, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 4, opacity: 0.9 }}>Copywriting Rule</strong>
              {slide.rule}
            </div>
          )}
        </div>
      );

    case "comparison":
      return (
        <div style={styles.wrap}>
          {slide.eyebrow && <div style={styles.eyebrow}>{slide.eyebrow}</div>}
          {slide.num && <div style={{ display: "inline-block", padding: "4px 10px", background: PURPLE, color: "white", fontSize: 11 * p, fontWeight: 800, borderRadius: 6, marginBottom: 8 }}>{slide.num}</div>}
          <h1 style={styles.h1}>{slide.title}</h1>
          {slide.subtitle && <p style={styles.sub}>{slide.subtitle}</p>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
            {[slide.left, slide.right].map((col, i) => (
              <div key={i} style={{ padding: 22, borderRadius: 16, background: T.subtle, border: "1.5px solid " + (col.color || T.border) }}>
                <div style={{ fontSize: 14 * p, fontWeight: 700, color: col.color || T.text, marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid " + T.border }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.items.map((it, j) => (
                    <div key={j}>
                      <div style={{ fontSize: 13 * p, fontWeight: 600, color: T.text, marginBottom: 2 }}>{it.strong}</div>
                      {it.note && <div style={{ fontSize: 11.5 * p, color: T.text3, lineHeight: 1.5 }}>{it.note}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {slide.footer && <p style={{ marginTop: 20, fontSize: 12.5 * p, color: T.text3, fontStyle: "italic", textAlign: "center" }}>{slide.footer}</p>}
        </div>
      );

    case "example":
      return (
        <div style={styles.wrap}>
          <h1 style={styles.h1}>{slide.title}</h1>
          {slide.subtitle && <p style={styles.sub}>{slide.subtitle}</p>}
          {slide.product && (
            <div style={{ padding: 24, borderRadius: 16, background: T.subtle, border: "1px solid " + T.border, marginBottom: 20 }}>
              <div style={{ fontSize: 11 * p, fontWeight: 800, color: "#FF9900", letterSpacing: 1, marginBottom: 8 }}>{slide.product.brand.toUpperCase()}</div>
              <div style={{ fontSize: 16 * p, fontWeight: 700, color: T.text, marginBottom: 6 }}>{slide.product.name}</div>
              <div style={{ fontSize: 11.5 * p, color: T.text3, marginBottom: 10 }}>⭐⭐⭐⭐⭐ {slide.product.rating}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28 * p, fontWeight: 800, color: T.text }}>{slide.product.price}</span>
                <span style={{ fontSize: 13 * p, color: T.text3, textDecoration: "line-through" }}>{slide.product.oldPrice}</span>
                <span style={{ background: "#EF4444", color: "white", fontSize: 10 * p, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>{slide.product.discount}</span>
              </div>
              <div style={{ fontSize: 12 * p, color: "#EF4444", fontWeight: 600, marginBottom: 6 }}>{slide.product.stock}</div>
              <div style={{ fontSize: 12 * p, color: "#059669", marginBottom: 4 }}>{slide.product.delivery}</div>
              <div style={{ fontSize: 12 * p, color: "#EF4444", fontWeight: 600, marginBottom: 10 }}>{slide.product.urgency}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {slide.product.badges.map((b, i) => <span key={i} style={{ background: "#FFE89A", color: "#92400E", fontSize: 10.5 * p, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>{b}</span>)}
              </div>
            </div>
          )}
          {slide.triggers && (
            <div>
              <h3 style={{ fontSize: 13 * p, fontWeight: 700, color: T.text, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>{slide.triggersTitle || "Psychology Triggers"}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {slide.triggers.map((t, i) => (
                  <div key={i} style={{ padding: 14, borderRadius: 12, background: PURPLE_LIGHT, borderLeft: "3px solid " + PURPLE }}>
                    <div style={{ fontSize: 13 * p, fontWeight: 700, color: PURPLE, marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 11.5 * p, color: T.text2, lineHeight: 1.5 }}>{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );

    case "table":
      return (
        <div style={styles.wrap}>
          <h1 style={styles.h1}>{slide.title}</h1>
          <p style={styles.sub}>{slide.subtitle}</p>
          <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid " + T.border, marginBottom: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: slide.columns.map(() => "1fr").join(" "), background: PURPLE, color: "white" }}>
              {slide.columns.map((c, i) => <div key={i} style={{ padding: "12px 14px", fontSize: 12 * p, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{c}</div>)}
            </div>
            {slide.rows.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: slide.columns.map(() => "1fr").join(" "), background: i % 2 ? T.subtle : T.card, borderTop: "1px solid " + T.border }}>
                {row.map((cell, j) => (
                  <div key={j} style={{ padding: "12px 14px", fontSize: 12 * p, color: j === 0 ? PURPLE : T.text2, fontWeight: j === 0 ? 700 : 400, lineHeight: 1.4 }}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
          {slide.footer && (
            <div style={{ padding: "14px 20px", background: "linear-gradient(135deg," + PURPLE + "," + ORANGE + ")", borderRadius: 12, color: "white", fontSize: 12.5 * p, fontWeight: 600, lineHeight: 1.5 }}>
              {slide.footer}
            </div>
          )}
        </div>
      );

    case "quiz":
      return (
        <div style={styles.wrap}>
          <div style={styles.eyebrow}>Knowledge Check</div>
          <h1 style={styles.h1}>{slide.title}</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
            {slide.questions.map((q, i) => (
              <div key={i} style={{ padding: 18, borderRadius: 12, background: T.subtle, border: "1px solid " + T.border }}>
                <div style={{ fontSize: 14 * p, fontWeight: 700, color: T.text, marginBottom: 10 }}>Q{i + 1}. {q.q}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {q.opts.map((o, j) => (
                    <div key={j} style={{ fontSize: 12.5 * p, color: T.text2, padding: "6px 10px", borderRadius: 8 }}>
                      {String.fromCharCode(65 + j)}) {o}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {slide.scoring && <p style={{ marginTop: 20, fontSize: 12 * p, color: T.text3, textAlign: "center", fontStyle: "italic" }}>{slide.scoring}</p>}
        </div>
      );

    case "exercise":
      return (
        <div style={styles.wrap}>
          <div style={styles.eyebrow}>Practical Exercise</div>
          <h1 style={styles.h1}>{slide.title}</h1>
          <p style={styles.sub}>{slide.intro}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {slide.items.map((item, i) => (
              <div key={i} style={{ padding: 16, borderRadius: 12, background: T.subtle, borderLeft: "3px solid " + PURPLE }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 6, background: PURPLE, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 * p, fontWeight: 700, flexShrink: 0 }}>{item.num}</div>
                  <div style={{ fontSize: 13.5 * p, color: T.text, fontStyle: "italic", lineHeight: 1.5 }}>{item.copy}</div>
                </div>
                <div style={{ marginLeft: 38, fontSize: 12 * p, color: "#059669", fontWeight: 600 }}>→ {item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "takeaways":
      return (
        <div style={styles.wrap}>
          <div style={styles.eyebrow}>Module Summary</div>
          <h1 style={styles.h1}>{slide.title}</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
            {slide.items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: 14, borderRadius: 12, background: T.subtle }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg," + PURPLE + "," + ORANGE + ")", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 * p, fontWeight: 800, flexShrink: 0, fontFamily: "'Playfair Display', serif" }}>{i + 1}</div>
                <p style={{ fontSize: 13.5 * p, color: T.text2, lineHeight: 1.6, paddingTop: 4 }}>{item}</p>
              </div>
            ))}
          </div>
          {slide.next && (
            <div style={{ marginTop: 24, padding: "16px 24px", background: "linear-gradient(135deg," + PURPLE + "," + ORANGE + ")", borderRadius: 14, color: "white", fontSize: 13 * p, fontWeight: 600, textAlign: "center" }}>
              {slide.next}
            </div>
          )}
        </div>
      );

    default:
      return <div style={styles.wrap}><p>Unknown slide type: {slide.type}</p></div>;
  }
}

function ExampleCard({ ex, T, p }) {
  return (
    <div style={{ padding: 18, borderRadius: 14, background: T.subtle, border: "1px dashed " + PURPLE, marginTop: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        {ex.label && <span style={{ fontSize: 10 * p, fontWeight: 800, color: PURPLE, letterSpacing: 1 }}>{ex.label}:</span>}
        <span style={{ fontSize: 14 * p, fontWeight: 700, color: T.text }}>{ex.brand}</span>
      </div>
      {ex.heading && <div style={{ fontSize: 13 * p, fontWeight: 600, color: T.text, marginBottom: 4 }}>{ex.heading}</div>}
      {ex.price && (
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22 * p, fontWeight: 800, color: PURPLE }}>{ex.price}</span>
          {ex.oldPrice && <span style={{ fontSize: 12 * p, color: T.text3, textDecoration: "line-through" }}>{ex.oldPrice}</span>}
        </div>
      )}
      {ex.bullets && (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {ex.bullets.map((b, i) => <div key={i} style={{ fontSize: 12 * p, color: T.text2 }}>{b.startsWith("✓") || b.startsWith("🔥") || b.startsWith("👁") || b.startsWith("⏱") ? b : "✓ " + b}</div>)}
        </div>
      )}
      {ex.result && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid " + T.border, fontSize: 12 * p, color: "#059669", fontWeight: 600 }}>
          RESULT: {ex.result}
        </div>
      )}
    </div>
  );
}
