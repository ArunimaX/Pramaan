"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCTS } from "@/lib/mock-data";

const STEPS = ["AI Details", "Upload Photo", "Mint GI Tag"];

export default function ArtisanDashboard() {
  const [step, setStep] = useState(0);
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<null | Record<string, string>>(null);
  const [tab, setTab] = useState<"new" | "inventory">("inventory");

  const handleRecord = () => {
    setRecording(true); setResult(null);
    setTimeout(() => {
      setRecording(false); setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setResult({ title: "Baluchari Silk Saree — Ramayana Panels", materials: "Pure Mulberry Silk, Untwisted Silk Thread, Gold Zari", time: "4 weeks", description: "Hand-woven Baluchari silk saree featuring mythological Ramayana panel motifs. Deep maroon base with contrasting gold zari borders." });
        setStep(1);
      }, 2500);
    }, 3000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#FAF6EE", paddingTop: 100, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <h1 className="font-heritage" style={{ fontSize: 40, fontWeight: 700, color: "#1A1208" }}>Artisan Dashboard</h1>
            <p style={{ fontSize: 16, color: "#7A5C2E", marginTop: 6 }}>Welcome back, Ananya Devi · Bishnupur, WB</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "1px solid rgba(201,146,42,0.15)", borderRadius: 16, padding: "12px 20px" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #C84B31, #C9922A)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>AD</div>
            <div><p style={{ fontSize: 15, fontWeight: 600, color: "#1A1208" }}>Ananya Devi</p><p style={{ fontSize: 13, color: "#7A5C2E" }}>24 products minted</p></div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 36, borderBottom: "2px solid rgba(201,146,42,0.15)" }}>
          {[{ key: "new" as const, label: "🎙️ New Product" }, { key: "inventory" as const, label: "📦 My Inventory" }].map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{ padding: "14px 28px", fontSize: 15, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", borderBottom: tab === t.key ? "3px solid #C84B31" : "3px solid transparent", color: tab === t.key ? "#C84B31" : "#7A5C2E", marginBottom: -2, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "inventory" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {PRODUCTS.slice(0, 4).map((p) => (
              <div key={p.id} className="card" style={{ cursor: "default" }}>
                <div style={{ height: 160, background: "linear-gradient(135deg, #F5E9CC, #EDE4D0)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 60 }}>{p.emoji}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <h3 className="font-heritage" style={{ fontSize: 18, fontWeight: 700 }}>{p.title.split("—")[0].trim()}</h3>
                    <span className={`badge ${p.status === "verified" ? "badge-verified" : "badge-minted"}`} style={{ fontSize: 10, padding: "4px 10px" }}>{p.status}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#7A5C2E", marginBottom: 14 }}>GI: {p.giNumber} · Block {p.blockNumber}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#C84B31" }}>{p.price}</span>
                    <div style={{ width: 40, height: 40, background: "#1A1208", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                      <svg style={{ width: 22, height: 22, color: "#FAF6EE" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Progress */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 48 }}>
              {STEPS.map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, background: i <= step ? "#C84B31" : "#EDE4D0", color: i <= step ? "#fff" : "#7A5C2E", transition: "all 0.3s" }}>{i + 1}</div>
                  <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: i <= step ? "#C84B31" : "#7A5C2E" }}>{s}</span>
                  {i < STEPS.length - 1 && <div style={{ width: 48, height: 2, background: i < step ? "#C84B31" : "#EDE4D0" }} />}
                </div>
              ))}
            </div>

            {step === 0 && (
              <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
                <h2 className="font-heritage" style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Describe Your Product</h2>
                <p style={{ fontSize: 16, color: "#7A5C2E", marginBottom: 36 }}>Speak in any language. Our AI will understand.</p>

                <button onClick={handleRecord} disabled={recording || processing}
                  style={{ width: 120, height: 120, borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", background: recording ? "#E24B4A" : "#C84B31", boxShadow: "0 12px 36px rgba(200,75,49,0.3)", transition: "all 0.3s" }}
                  className={recording ? "animate-mic-pulse" : ""}
                >
                  <svg style={{ width: 44, height: 44, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
                </button>
                <p style={{ fontSize: 15, color: "#7A5C2E", marginTop: 16 }}>{recording ? "🔴 Listening..." : "Tap to speak"}</p>

                {recording && (
                  <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 24, height: 32, alignItems: "flex-end" }}>
                    {[...Array(12)].map((_, i) => <div key={i} style={{ width: 5, background: "#C84B31", borderRadius: 3, animation: `wave-bar 0.8s ${i * 0.1}s ease-in-out infinite`, height: 8 }} />)}
                  </div>
                )}

                {processing && (
                  <div className="card-flat" style={{ marginTop: 32, padding: 28, textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <svg style={{ width: 20, height: 20, color: "#C84B31", animation: "spin 1s linear infinite" }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity={0.25} /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "#C84B31" }}>Pramaan AI Processing...</span>
                    </div>
                    {[75, 50, 85].map((w, i) => <div key={i} className="animate-shimmer" style={{ height: 12, background: "#EDE4D0", borderRadius: 6, width: `${w}%`, marginBottom: 8 }} />)}
                  </div>
                )}

                {result && (
                  <div className="card-flat" style={{ marginTop: 32, padding: 28, textAlign: "left", borderColor: "rgba(13,110,86,0.3)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0D6E56", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg style={{ width: 14, height: 14, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#0D6E56" }}>AI Parsed Successfully</span>
                    </div>
                    {Object.entries(result).map(([k, v]) => (
                      <div key={k} style={{ marginBottom: 14 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A5C2E" }}>{k}</label>
                        <p style={{ fontSize: 15, fontWeight: 500, color: "#1A1208", marginTop: 2 }}>{v}</p>
                      </div>
                    ))}
                    <button onClick={() => setStep(1)} className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>Continue to Photo Upload →</button>
                  </div>
                )}

                {!recording && !processing && !result && (
                  <div style={{ marginTop: 32, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(201,146,42,0.12)", borderRadius: 14, padding: 20, textAlign: "left" }}>
                    <p style={{ fontSize: 15, color: "#7A5C2E", fontStyle: "italic" }}>&quot;আমি এই বালুচরী সিল্ক শাড়ি চার সপ্তাহ ধরে বুনেছি, লাল রঙ দিয়ে...&quot;</p>
                    <p style={{ fontSize: 12, color: "rgba(122,92,46,0.5)", marginTop: 8 }}>Example: Bengali voice input auto-transcribed by Pramaan AI</p>
                  </div>
                )}
              </div>
            )}

            {step === 1 && (
              <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
                <h2 className="font-heritage" style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Upload Product Photo</h2>
                <p style={{ fontSize: 16, color: "#7A5C2E", marginBottom: 32 }}>Stored on IPFS — decentralized and permanent.</p>
                <div style={{ border: "2px dashed rgba(201,146,42,0.3)", borderRadius: 20, background: "#fff", padding: 56, cursor: "pointer", transition: "border-color 0.2s" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>📸</div>
                  <p style={{ fontSize: 16, color: "#7A5C2E" }}>Drag & drop or click to upload</p>
                  <p style={{ fontSize: 13, color: "rgba(122,92,46,0.5)", marginTop: 6 }}>Stored on IPFS via Pinata</p>
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
                  <button onClick={() => setStep(0)} className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>← Back</button>
                  <button onClick={() => setStep(2)} className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>Continue →</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
                <h2 className="font-heritage" style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Mint GI Tag on Blockchain</h2>
                <p style={{ fontSize: 16, color: "#7A5C2E", marginBottom: 32 }}>Your product will be permanently registered on Polygon.</p>
                <div className="card-flat" style={{ padding: 36 }}>
                  <div style={{ fontSize: 56, marginBottom: 12 }}>🧵</div>
                  <h3 className="font-heritage" style={{ fontSize: 24, fontWeight: 700 }}>Baluchari Silk Saree</h3>
                  <p style={{ fontSize: 14, color: "#7A5C2E", marginTop: 6, marginBottom: 24 }}>GI Tag: WB-GI-2409 · Polygon Mainnet</p>
                  <button className="btn-primary" style={{ width: "100%", justifyContent: "center", background: "#2C3E6E", boxShadow: "0 8px 25px rgba(44,62,110,0.25)" }}>
                    <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Mint GI Tag — Connect Wallet
                  </button>
                  <p style={{ fontSize: 12, color: "rgba(122,92,46,0.5)", marginTop: 12 }}>Estimated gas: ~0.002 MATIC (₹0.04)</p>
                </div>
                <button onClick={() => setStep(1)} style={{ fontSize: 14, color: "#7A5C2E", background: "none", border: "none", cursor: "pointer", marginTop: 16 }}>← Back to Photo</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
