"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, GI_REGIONS } from "@/lib/mock-data";

export default function ExplorePage() {
  const [region, setRegion] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const mr = !region || p.artisan.region === region || p.artisan.state === region;
    const ms = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.artisan.name.toLowerCase().includes(search.toLowerCase());
    return mr && ms;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#FAF6EE", paddingTop: 100, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="badge-section">Discover</span>
          <h1 className="font-heritage" style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700, color: "#1A1208", marginBottom: 12 }}>GI Heritage Explorer</h1>
          <p style={{ fontSize: 18, color: "#7A5C2E", maxWidth: 560, margin: "0 auto" }}>Explore authenticated heritage goods from across India. Every product is verified on-chain.</p>
        </div>

        {/* MAP */}
        <div className="card-flat" style={{ padding: 28, marginBottom: 48 }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9922A", marginBottom: 20 }}>GI Regions of India</h3>
          <div style={{ background: "linear-gradient(135deg, #FAF6EE, #EDE4D0)", borderRadius: 16, padding: 32, minHeight: 280 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {GI_REGIONS.map((r) => (
                <button key={r.name} onClick={() => setRegion(region === r.name ? null : r.name)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", border: "1px solid", borderColor: region === r.name ? "#C84B31" : "rgba(201,146,42,0.2)", borderRadius: 12, background: region === r.name ? "#C84B31" : "rgba(255,255,255,0.8)", color: region === r.name ? "#fff" : "#3D2B0E", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", boxShadow: region === r.name ? "0 6px 20px rgba(200,75,49,0.2)" : "none" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: region === r.name ? "#fff" : "#C9922A" }} />
                  {r.name} <span style={{ fontSize: 12, opacity: 0.7 }}>({r.productCount})</span>
                </button>
              ))}
            </div>

            {region && (() => {
              const g = GI_REGIONS.find((x) => x.name === region);
              if (!g) return null;
              return (
                <div className="animate-slide-up" style={{ marginTop: 20, background: "#fff", border: "1px solid rgba(200,75,49,0.2)", borderRadius: 14, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h4 className="font-heritage" style={{ fontSize: 20, fontWeight: 700 }}>{g.name}, {g.state}</h4>
                    <p style={{ fontSize: 14, color: "#7A5C2E" }}>Crafts: {g.crafts.join(", ")}</p>
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#C84B31" }}>{g.productCount} products</span>
                </div>
              );
            })()}
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ display: "flex", gap: 16, marginBottom: 36 }}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products or artisans..."
            style={{ flex: 1, border: "1px solid rgba(201,146,42,0.25)", background: "#fff", borderRadius: 14, padding: "14px 20px", fontSize: 16, color: "#1A1208", outline: "none" }}
          />
          {region && (
            <button onClick={() => setRegion(null)} style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(200,75,49,0.3)", borderRadius: 14, padding: "14px 20px", fontSize: 14, fontWeight: 600, color: "#C84B31", background: "transparent", cursor: "pointer" }}>
              ✕ Clear: {region}
            </button>
          )}
        </div>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {filtered.length === 0 && (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: 64 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16, color: "#7A5C2E" }}>No products found. Try a different filter.</p>
            </div>
          )}
          {filtered.map((p) => (
            <Link key={p.id} href={`/verify/${p.id}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ height: 200, background: "linear-gradient(135deg, #F5E9CC, #EDE4D0)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span className="emoji-display">{p.emoji}</span>
                <span className="badge badge-gi" style={{ position: "absolute", top: 14, left: 14 }}>GI Verified</span>
                <span className={`badge ${p.status === "verified" ? "badge-verified" : "badge-minted"}`} style={{ position: "absolute", top: 14, right: 14 }}>{p.status}</span>
              </div>
              <div style={{ padding: 24 }}>
                <h3 className="font-heritage" style={{ fontSize: 20, fontWeight: 700, color: "#1A1208", marginBottom: 6 }}>{p.title.split("—")[0].trim()}</h3>
                <p style={{ fontSize: 14, color: "#7A5C2E", lineHeight: 1.6, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.materials.slice(0, 2).map((m) => <span key={m} style={{ fontSize: 11, fontWeight: 600, background: "#F5E9CC", color: "#3D2B0E", padding: "4px 10px", borderRadius: 6, border: "1px solid rgba(201,146,42,0.25)" }}>{m}</span>)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(201,146,42,0.12)", paddingTop: 16 }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1208" }}>{p.artisan.name}</p>
                    <p style={{ fontSize: 12, color: "#7A5C2E", marginTop: 2 }}>{p.artisan.location}</p>
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#C84B31" }}>{p.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
