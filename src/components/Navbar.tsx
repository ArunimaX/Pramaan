"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Explore", href: "/explore" },
  { label: "For Artisans", href: "/artisan/dashboard" },
  { label: "Verify", href: "/#verify" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      ...(scrolled
        ? { background: "rgba(250,246,238,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,146,42,0.25)", padding: "12px 0" }
        : { background: "transparent", padding: "20px 0" }
      ),
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #C84B31, #C9922A)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(200,75,49,0.2)" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Cormorant Garamond', serif" }}>प्र</span>
          </div>
          <span className="font-heritage" style={{ fontSize: 26, fontWeight: 700, letterSpacing: "0.02em", color: "#1A1208" }}>
            Pram<span style={{ color: "#C84B31" }}>aa</span>n
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: 13, fontWeight: 600, color: "#7A5C2E", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C84B31")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A5C2E")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/artisan/dashboard" className="btn-primary" style={{ padding: "10px 24px", fontSize: 12, borderRadius: 10 }}>
            <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Launch App
          </Link>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(201,146,42,0.35)", background: "transparent", color: "#3D2B0E", padding: "10px 18px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 10, cursor: "pointer" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D6E56" }} className="animate-pulse-gold" />
            Connect
          </button>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ display: "none", padding: 8, background: "none", border: "none", cursor: "pointer", color: "#1A1208" }}
            className="nav-mobile-btn"
          >
            <svg style={{ width: 28, height: 28 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(250,246,238,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,146,42,0.2)", padding: "24px 28px" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#7A5C2E", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(201,146,42,0.1)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/artisan/dashboard" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
}
