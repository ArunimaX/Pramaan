"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PRODUCTS, LIVE_FEED, type LiveFeedItem } from "@/lib/mock-data";

/* ═══ LIVE TICKER ═══ */
function LiveTicker() {
  const feeds = LIVE_FEED;
  const colors: Record<string, string> = {
    mint: "#E8B84B", verify: "#1B9E75", block: "#E24B4A", tip: "#E07C4C",
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="animate-ticker" style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}>
        {[...feeds, ...feeds].map((item, i) => (
          <div key={`${item.id}-${i}`} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: colors[item.type] }} />
            <span style={{ fontSize: 14, color: colors[item.type], fontWeight: 500 }}>{item.message}</span>
            <span style={{ fontSize: 12, color: "rgba(250,246,238,0.3)" }}>· {item.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══ LANDING PAGE ═══ */
export default function LandingPage() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="heritage-pattern" style={{ minHeight: "100dvh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left */}
          <div className="animate-slide-up">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, border: "1px solid rgba(201,146,42,0.3)", borderRadius: 999, padding: "10px 22px", marginBottom: 40, background: "rgba(255,255,255,0.5)" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#0D6E56" }} className="animate-pulse-gold" />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A6F1D" }}>
                Live on Polygon — 12,441 items authenticated
              </span>
            </div>

            <h1 className="font-heritage" style={{ fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 700, lineHeight: 1.02, color: "#1A1208", marginBottom: 32 }}>
              Ancient Craft,<br />
              <em style={{ color: "#C84B31", fontStyle: "italic" }}>Mathematically</em><br />
              Protected.
            </h1>

            <p style={{ fontSize: 20, lineHeight: 1.7, color: "#7A5C2E", maxWidth: 520, marginBottom: 48 }}>
              Pramaan AI deploys autonomous AI agents and distributed ledgers to defend GI-tagged heritage artisans — so a master weaver captures the true market value of her craft.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <Link href="/#verify" className="btn-primary">
                <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Verify a Product
              </Link>
              <Link href="/artisan/dashboard" className="btn-outline">
                <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                Protect Your Craft
              </Link>
            </div>
          </div>

          {/* Right – Phone */}
          <div className="animate-slide-up" style={{ display: "flex", justifyContent: "center", animationDelay: "200ms" }}>
            <div style={{ position: "relative" }}>
              {/* Floating badges */}
              <div className="animate-float" style={{ position: "absolute", top: -24, left: -80, background: "#fff", borderRadius: 14, border: "1px solid rgba(201,146,42,0.2)", padding: "14px 20px", boxShadow: "0 20px 50px rgba(26,18,8,0.1)", zIndex: 20, animationDelay: "0.5s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#0D6E56" }} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1208" }}>Verified Authentic</span>
                </div>
              </div>
              <div className="animate-float" style={{ position: "absolute", bottom: -20, right: -64, background: "#fff", borderRadius: 14, border: "1px solid rgba(201,146,42,0.2)", padding: "14px 20px", boxShadow: "0 20px 50px rgba(26,18,8,0.1)", zIndex: 20, animationDelay: "1.5s" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#C84B31" }}>₹18,500 — Fair Trade ✦</span>
              </div>

              <div className="phone-frame">
                <div style={{ width: 90, height: 24, background: "#1A1208", borderRadius: "0 0 14px 14px", margin: "0 auto 12px" }} />
                <div className="phone-screen">
                  <div style={{ background: "#1A1208", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="font-heritage" style={{ fontSize: 22, fontWeight: 700, color: "#FAF6EE", letterSpacing: "0.05em" }}>Pramaan</span>
                    <span style={{ fontSize: 11, color: "rgba(250,246,238,0.4)", fontWeight: 600 }}>Block 48,221</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#E8F5EE", borderBottom: "1px solid rgba(13,110,86,0.15)", padding: "16px 24px" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1A7A4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg style={{ width: 18, height: 18, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A7A4A" }}>Cryptographically Verified</p>
                      <p style={{ fontSize: 12, color: "#7A5C2E" }}>Authentic GI-tagged product</p>
                    </div>
                  </div>
                  <div style={{ padding: "24px 24px 20px", textAlign: "center" }}>
                    <div style={{ fontSize: 56, marginBottom: 8 }}>🧵</div>
                    <h4 className="font-heritage" style={{ fontSize: 20, fontWeight: 700 }}>Baluchari Silk Saree</h4>
                    <p style={{ fontSize: 13, color: "#7A5C2E", marginTop: 6 }}>Woven by Ananya Devi · Bishnupur, WB</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 14 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, background: "#F5E9CC", color: "#3D2B0E", padding: "4px 12px", borderRadius: 999, border: "1px solid rgba(201,146,42,0.25)" }}>GI #WB-2409</span>
                      <span style={{ fontSize: 11, fontWeight: 600, background: "#F5E9CC", color: "#3D2B0E", padding: "4px 12px", borderRadius: 999, border: "1px solid rgba(201,146,42,0.25)" }}>Batch #405</span>
                    </div>
                  </div>
                  <div style={{ padding: "0 24px 24px" }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A5C2E", marginBottom: 14 }}>Provenance Journey</p>
                    {["Artisan Workshop", "Cooperative Verified", "Export Logged"].map((s, i) => (
                      <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10, position: "relative" }}>
                        {i < 2 && <div style={{ position: "absolute", left: 7, top: 18, width: 1, height: 18, background: "rgba(201,146,42,0.3)" }} />}
                        <div style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid #C9922A", background: "#C9922A", flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1208" }}>{s}</span>
                      </div>
                    ))}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(201,146,42,0.4)", background: "#fff", flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 14, color: "#7A5C2E" }}>Consumer Scan — Awaiting...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TICKER ═══ */}
      <div style={{ background: "#1A1208", padding: "14px 0", borderTop: "1px solid rgba(201,146,42,0.15)", borderBottom: "1px solid rgba(201,146,42,0.15)" }}>
        <LiveTicker />
      </div>

      {/* ═══ FEATURES ═══ */}
      <section className="section-spacer heritage-pattern">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }} className="reveal" ref={r}>
            <span className="badge-section">The Technology</span>
            <h2 className="font-heritage" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 700, color: "#1A1208", marginBottom: 16 }}>
              AI meets ancient wisdom
            </h2>
            <p style={{ fontSize: 18, color: "#7A5C2E", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              Three pillars of trust — from voice-powered onboarding to cryptographic verification and fair-trade escrow.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="reveal" ref={r}>
            {[
              { icon: "🎙️", title: "Pramaan AI Onboarding", desc: "Speak in Bengali, Tamil, or Hindi. Our AI agent transcribes your voice, structures the product details, and prepares the GI tag — all through a simple WhatsApp-like interface.", color: "#C84B31" },
              { icon: "🛡️", title: "Cryptographic Verification", desc: "Every product gets an unforgeable NFC thread and QR code. Consumers scan once to reveal the full provenance journey — artisan, materials, timeline — all proven on Polygon.", color: "#C9922A" },
              { icon: "💰", title: "Direct-to-Artisan Escrow", desc: "No middlemen. Payments flow directly to the artisan through on-chain escrow. Buyers see exactly what percentage reaches the creator. Fair trade, guaranteed.", color: "#2C3E6E" },
            ].map((f) => (
              <div key={f.title} className="card-flat" style={{ padding: 40 }}>
                <div style={{ fontSize: 48, marginBottom: 24 }}>{f.icon}</div>
                <h3 className="font-heritage" style={{ fontSize: 26, fontWeight: 700, color: "#1A1208", marginBottom: 14 }}>{f.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "#7A5C2E" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="heritage-border" />

      {/* ═══ PRODUCTS ═══ */}
      <section className="section-spacer" style={{ background: "#f3edd9" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }} className="reveal" ref={r}>
            <div>
              <span className="badge-gold-section">On the Ledger</span>
              <h2 className="font-heritage" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#1A1208" }}>
                Featured authentic heritage goods
              </h2>
            </div>
            <Link href="/explore" className="btn-dark">
              Explore All
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="reveal" ref={r}>
            {PRODUCTS.slice(0, 6).map((p) => (
              <Link key={p.id} href={`/verify/${p.id}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ height: 220, background: "linear-gradient(135deg, #F5E9CC, #EDE4D0)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span className="emoji-display">{p.emoji}</span>
                  <span className="badge badge-gi" style={{ position: "absolute", top: 16, left: 16 }}>GI Verified</span>
                  <span className={`badge ${p.status === "verified" ? "badge-verified" : "badge-minted"}`} style={{ position: "absolute", top: 16, right: 16 }}>{p.status}</span>
                </div>
                <div style={{ padding: 28 }}>
                  <h3 className="font-heritage" style={{ fontSize: 22, fontWeight: 700, color: "#1A1208", marginBottom: 8 }}>
                    {p.title.split("—")[0].trim()}
                  </h3>
                  <p style={{ fontSize: 15, color: "#7A5C2E", lineHeight: 1.6, marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(201,146,42,0.15)", paddingTop: 20 }}>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#1A1208" }}>{p.artisan.name}</p>
                      <p style={{ fontSize: 13, color: "#7A5C2E", marginTop: 2 }}>{p.artisan.location}</p>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#C84B31", textTransform: "uppercase", letterSpacing: "0.08em" }}>Verify →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="heritage-border" />

      {/* ═══ STATS ═══ */}
      <section style={{ background: "#1A1208", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="reveal" ref={r}>
          {[
            { num: "12,441", label: "Items on-chain" },
            { num: "847", label: "Artisans protected" },
            { num: "3,210", label: "Counterfeits flagged" },
            { num: "₹0.04", label: "Cost per auth" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "40px 20px", borderRight: "1px solid rgba(201,146,42,0.1)" }}>
              <div className="font-heritage" style={{ fontSize: 56, fontWeight: 700, color: "#E8B84B", lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,246,238,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ VERIFY ═══ */}
      <section id="verify" className="section-spacer heritage-pattern">
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 32px", textAlign: "center" }} className="reveal" ref={r}>
          <span className="badge-section">Try It Now</span>
          <h2 className="font-heritage" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 700, color: "#1A1208", marginBottom: 16 }}>
            Verify any product on the ledger
          </h2>
          <p style={{ fontSize: 18, color: "#7A5C2E", marginBottom: 48, lineHeight: 1.7 }}>
            Enter a product hash or scan an NFC tag. The blockchain doesn&apos;t lie — you&apos;ll know in under two seconds whether what you hold is real.
          </p>
          <VerifyWidget />
        </div>
      </section>
    </>
  );
}

/* ═══ VERIFY WIDGET ═══ */
function VerifyWidget() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState<boolean | null>(null);

  const handleVerify = () => {
    if (!input.trim()) return;
    setLoading(true); setFound(null);
    setTimeout(() => {
      setLoading(false);
      const key = input.trim().toUpperCase();
      const product = PRODUCTS.find((p) => p.id === key || p.giNumber === key);
      setFound(!!product);
      if (product) window.location.href = `/verify/${product.id}`;
    }, 1200);
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <div style={{ background: "#fff", border: "1px solid rgba(201,146,42,0.25)", borderRadius: 20, padding: 32, boxShadow: "0 15px 40px rgba(26,18,8,0.06)" }}>
        <label style={{ display: "block", textAlign: "left", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A5C2E", marginBottom: 10 }}>
          Product Hash or Tag ID
        </label>
        <input
          type="text" value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleVerify()}
          placeholder="e.g. BALUCHARI-405 or DARJ-2024-881"
          style={{ width: "100%", border: "1px solid rgba(201,146,42,0.25)", background: "#FAF6EE", borderRadius: 12, padding: "16px 20px", fontSize: 16, color: "#1A1208", outline: "none", marginBottom: 16 }}
        />
        <button onClick={handleVerify} disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
          {loading ? "Authenticating..." : "Authenticate on Ledger"}
        </button>
      </div>
      <div style={{ marginTop: 16, fontSize: 14, color: "#7A5C2E" }}>
        Try: <code style={{ fontWeight: 700, color: "#C84B31", background: "rgba(200,75,49,0.08)", padding: "3px 8px", borderRadius: 6 }}>BALUCHARI-405</code> or{" "}
        <code style={{ fontWeight: 700, color: "#C84B31", background: "rgba(200,75,49,0.08)", padding: "3px 8px", borderRadius: 6 }}>DARJ-2024-881</code>
      </div>
      {found === false && (
        <div style={{ marginTop: 32, border: "1px solid rgba(226,75,74,0.3)", background: "#fff", borderRadius: 16, padding: 28, textAlign: "left" }}>
          <strong className="font-heritage" style={{ fontSize: 22, color: "#B84A1A", display: "block", marginBottom: 8 }}>Not found on ledger.</strong>
          <p style={{ fontSize: 16, color: "rgba(184,74,26,0.7)", lineHeight: 1.6 }}>
            This product ID has no matching record on the Polygon blockchain. This item may be counterfeit — our AI Guardian has been alerted.
          </p>
        </div>
      )}
    </div>
  );
}
