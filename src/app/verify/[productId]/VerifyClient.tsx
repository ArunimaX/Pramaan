"use client";

import Link from "next/link";
import type { Product } from "@/lib/mock-data";

const ICONS: Record<string, string> = { leaf: "🌿", loom: "🧶", check: "✅", truck: "🚚", scan: "📱" };

export default function VerifyClient({ product }: { product: Product }) {
  return (
    <div style={{ minHeight: "100vh", background: "#FAF6EE", paddingTop: 100, paddingBottom: 60 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>

        {/* VERIFIED HERO */}
        <div className="animate-slide-up" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "#1A7A4A", margin: "0 auto 28px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(26,122,74,0.2)" }}>
            <svg style={{ width: 52, height: 52, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#E8F5EE", border: "1px solid rgba(13,110,86,0.15)", borderRadius: 999, padding: "10px 22px", marginBottom: 20 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#0D6E56" }} className="animate-pulse-gold" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A7A4A" }}>Cryptographically Verified on Polygon</span>
          </div>
          <h1 className="font-heritage" style={{ fontSize: 40, fontWeight: 700, color: "#1A1208", marginBottom: 12 }}>{product.title}</h1>
          <p style={{ fontSize: 16, color: "#7A5C2E" }}>GI Registry: <strong style={{ color: "#C9922A" }}>{product.giNumber}</strong> · Block <strong>{product.blockNumber}</strong></p>

          <div className="animate-shimmer" style={{ display: "inline-block", marginTop: 28, background: "linear-gradient(90deg, #C9922A, #E07C4C, #C9922A)", backgroundSize: "200% 100%", padding: "14px 36px", borderRadius: 12, border: "1px solid rgba(201,146,42,0.4)" }}>
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1A1208" }}>✦ Authentic Heritage Product ✦</span>
          </div>
        </div>

        <div className="heritage-border" style={{ marginBottom: 48 }} />

        {/* PRODUCT DETAILS */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginBottom: 56 }}>
          <div style={{ height: 320, background: "linear-gradient(135deg, #F5E9CC, #EDE4D0)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 20, border: "1px solid rgba(201,146,42,0.15)" }}>
            <span style={{ fontSize: 100 }}>{product.emoji}</span>
          </div>
          <div>
            <h2 className="font-heritage" style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Product Details</h2>
            <p style={{ fontSize: 16, color: "#7A5C2E", lineHeight: 1.7, marginBottom: 24 }}>{product.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[{ l: "Price", v: product.price }, { l: "Time Taken", v: product.timeTaken }, { l: "GI Tag", v: product.giTag }, { l: "Minted", v: product.mintedDate }].map((d) => (
                <div key={d.l}>
                  <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A5C2E" }}>{d.l}</label>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#1A1208", marginTop: 2 }}>{d.v}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A5C2E" }}>Materials</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                {product.materials.map((m) => <span key={m} style={{ fontSize: 13, fontWeight: 600, background: "#F5E9CC", color: "#3D2B0E", padding: "6px 14px", borderRadius: 8, border: "1px solid rgba(201,146,42,0.25)" }}>{m}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="heritage-border" style={{ marginBottom: 48 }} />

        {/* TIMELINE */}
        <h2 className="font-heritage" style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 36 }}>Heritage Journey</h2>
        <div style={{ maxWidth: 640, margin: "0 auto 56px" }}>
          {product.timeline.map((ev, i) => (
            <div key={i} style={{ display: "flex", gap: 24, position: "relative" }}>
              {i < product.timeline.length - 1 && <div style={{ position: "absolute", left: 19, top: 44, width: 2, height: "calc(100% - 10px)", background: "rgba(201,146,42,0.25)" }} />}
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", border: "2px solid #C9922A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 2, fontSize: 20 }}>{ICONS[ev.icon]}</div>
              <div style={{ paddingBottom: 32 }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C9922A" }}>{ev.date}</span>
                <h4 className="font-heritage" style={{ fontSize: 20, fontWeight: 700, color: "#1A1208", marginTop: 4 }}>{ev.title}</h4>
                <p style={{ fontSize: 15, color: "#7A5C2E", lineHeight: 1.6 }}>{ev.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="heritage-border" style={{ marginBottom: 48 }} />

        {/* ARTISAN + CTAs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginBottom: 56 }}>
          <div>
            <span className="badge-section">Meet the Creator</span>
            <h2 className="font-heritage" style={{ fontSize: 28, fontWeight: 700, color: "#1A1208", marginBottom: 16 }}>{product.artisan.name}</h2>
            <p style={{ fontSize: 16, color: "#7A5C2E", lineHeight: 1.7, marginBottom: 16 }}>{product.artisan.bio}</p>
            <p style={{ fontSize: 15, color: "#7A5C2E", marginBottom: 24 }}>📍 {product.artisan.location} · {product.artisan.productsCount} products minted</p>

            {/* Audio Player */}
            <div className="card-flat" style={{ display: "flex", alignItems: "center", gap: 16, padding: 20, marginBottom: 20 }}>
              <button style={{ width: 52, height: 52, borderRadius: "50%", background: "#C84B31", color: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg style={{ width: 22, height: 22, marginLeft: 2 }} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </button>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Artisan&apos;s Story — Audio</p>
                <div style={{ height: 8, background: "#EDE4D0", borderRadius: 4, overflow: "hidden" }}><div style={{ height: "100%", width: "33%", background: "linear-gradient(90deg, #C84B31, #C9922A)", borderRadius: 4 }} /></div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}><span style={{ fontSize: 11, color: "#7A5C2E" }}>1:23</span><span style={{ fontSize: 11, color: "#7A5C2E" }}>3:45</span></div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(122,92,46,0.5)" }}>Audio stored on IPFS · CID: QmXoY...3kFg</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15 }}>💰 Tip the Artisan — Send Directly</button>
            <button className="btn-outline" style={{ width: "100%", justifyContent: "center", fontSize: 15, borderColor: "#2C3E6E", color: "#2C3E6E" }}>🛒 Buy Directly from Artisan</button>

            {/* Trust Metrics */}
            <div className="card-flat" style={{ padding: 28, marginTop: 8 }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9922A", marginBottom: 20 }}>AI Trust Metrics</h4>
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 15, color: "#3D2B0E" }}>🌱 Carbon Saved</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0D6E56" }}>{product.carbonSaved}</span>
                </div>
                <p style={{ fontSize: 12, color: "rgba(122,92,46,0.5)" }}>vs. factory-produced equivalent</p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 15, color: "#3D2B0E" }}>💚 Fair Wage Guarantee</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0D6E56" }}>{product.fairWagePercent}%</span>
                </div>
                <div style={{ height: 10, background: "#EDE4D0", borderRadius: 5, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${product.fairWagePercent}%`, background: "linear-gradient(90deg, #0D6E56, #1B9E75)", borderRadius: 5 }} />
                </div>
                <p style={{ fontSize: 12, color: "rgba(122,92,46,0.5)", marginTop: 4 }}>of sale price reaches artisan directly</p>
              </div>
            </div>

            <div style={{ background: "#FAF6EE", border: "1px solid rgba(201,146,42,0.15)", borderRadius: 14, padding: 20 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A5C2E" }}>Transaction Hash</label>
              <p style={{ fontSize: 13, color: "#7A5C2E", wordBreak: "break-all", marginTop: 4, fontFamily: "monospace" }}>{product.txHash}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
