"use client";

import Link from "next/link";

const LINKS = {
  Platform: [
    { label: "Verify a Product", href: "/#verify" },
    { label: "Artisan Registry", href: "/explore" },
    { label: "AI Guardian", href: "/#how-it-works" },
  ],
  "For Artisans": [
    { label: "Register", href: "/artisan/dashboard" },
    { label: "KYC Process", href: "#" },
    { label: "WhatsApp Bot", href: "#" },
  ],
  Ecosystem: [
    { label: "GI Tag Directory", href: "/explore" },
    { label: "Cooperative Partners", href: "#" },
    { label: "Government Boards", href: "#" },
  ],
};

export default function Footer() {
  return (
    <>
      <div className="heritage-border" />
      <footer style={{ background: "#1A1208", color: "#FAF6EE" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
            {/* Brand */}
            <div>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #C84B31, #C9922A)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Cormorant Garamond', serif" }}>प्र</span>
                </div>
                <span className="font-heritage" style={{ fontSize: 26, fontWeight: 700, color: "#FAF6EE" }}>
                  Pram<span style={{ color: "#E07C4C" }}>aa</span>n
                </span>
              </Link>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(250,246,238,0.4)", maxWidth: 300, marginBottom: 24 }}>
                An autonomous digital workforce protecting the economic rights of India&apos;s heritage artisans — secured by the mathematical certainty of the blockchain.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D6E56" }} className="animate-pulse-gold" />
                <span style={{ fontSize: 11, fontWeight: 600, color: "#C9922A", letterSpacing: "0.15em", textTransform: "uppercase" }}>Polygon L2 · Mainnet</span>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9922A", marginBottom: 24 }}>{title}</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} style={{ fontSize: 14, color: "rgba(250,246,238,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF6EE")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,246,238,0.45)")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,146,42,0.12)", padding: "16px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "rgba(250,246,238,0.25)" }}>© 2025 Pramaan AI · Protecting heritage through cryptographic certainty</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12, color: "rgba(250,246,238,0.25)" }}>Built on</span>
              <div style={{ border: "1px solid rgba(201,146,42,0.3)", padding: "4px 14px", borderRadius: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#C9922A", letterSpacing: "0.15em", textTransform: "uppercase" }}>Polygon L2</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
