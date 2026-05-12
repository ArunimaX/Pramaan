// ─────────────────────────────────────────────
// Mock data for Pramaan AI – Phase 1 Frontend
// ─────────────────────────────────────────────

export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  location: string;
  region: string;
  state: string;
  lat: number;
  lng: number;
  craft: string;
  bio: string;
  productsCount: number;
  joinedDate: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: "leaf" | "loom" | "check" | "truck" | "scan";
}

export interface Product {
  id: string;
  title: string;
  emoji: string;
  description: string;
  image: string;
  giTag: string;
  giNumber: string;
  artisan: Artisan;
  mintedDate: string;
  blockNumber: string;
  txHash: string;
  price: string;
  materials: string[];
  timeTaken: string;
  status: "minted" | "verified" | "in-transit" | "delivered";
  carbonSaved: string;
  fairWagePercent: number;
  timeline: TimelineEvent[];
}

export interface LiveFeedItem {
  id: string;
  type: "mint" | "verify" | "block" | "tip";
  message: string;
  region: string;
  timestamp: string;
}

export const ARTISANS: Artisan[] = [
  {
    id: "art-001",
    name: "Ananya Devi",
    avatar: "AD",
    location: "Bishnupur, West Bengal",
    region: "Bishnupur",
    state: "West Bengal",
    lat: 23.0745,
    lng: 87.3158,
    craft: "Baluchari Silk Weaving",
    bio: "Third-generation master weaver preserving mythological motifs of Bishnupur's Baluchari tradition. Her sarees feature scenes from the Ramayana woven in pure silk with untwisted threads.",
    productsCount: 24,
    joinedDate: "2024-09-15",
  },
  {
    id: "art-002",
    name: "Ratan Kumar Pal",
    avatar: "RP",
    location: "Panchmura, Bankura",
    region: "Bankura",
    state: "West Bengal",
    lat: 23.2345,
    lng: 87.0654,
    craft: "Terracotta Sculpture",
    bio: "A master craftsman from Panchmura village, keeping alive the 400-year-old tradition of the iconic Bankura Horse. Each piece is hand-sculpted from local red clay.",
    productsCount: 18,
    joinedDate: "2024-11-02",
  },
  {
    id: "art-003",
    name: "Lakshmi Narayan",
    avatar: "LN",
    location: "Kanchipuram, Tamil Nadu",
    region: "Kanchipuram",
    state: "Tamil Nadu",
    lat: 12.8342,
    lng: 79.7036,
    craft: "Kanchipuram Silk Weaving",
    bio: "A hereditary weaver creating temple-border Kanchipuram silk sarees with pure gold zari. His family has been weaving for six generations.",
    productsCount: 31,
    joinedDate: "2024-08-20",
  },
  {
    id: "art-004",
    name: "Sita Devi Jha",
    avatar: "SJ",
    location: "Madhubani, Bihar",
    region: "Madhubani",
    state: "Bihar",
    lat: 26.3567,
    lng: 86.0716,
    craft: "Madhubani Painting",
    bio: "National award-winning Madhubani artist specializing in Kohbar and Bharni styles. She uses natural dyes from flowers, berries, and charcoal.",
    productsCount: 42,
    joinedDate: "2024-07-10",
  },
  {
    id: "art-005",
    name: "Meena Thakur",
    avatar: "MT",
    location: "Kullu, Himachal Pradesh",
    region: "Kullu",
    state: "Himachal Pradesh",
    lat: 31.9579,
    lng: 77.1095,
    craft: "Kullu Shawl Weaving",
    bio: "Using handspun pashmina and local sheep wool, Meena creates geometric-bordered shawls on traditional pit looms passed down through her community.",
    productsCount: 15,
    joinedDate: "2025-01-05",
  },
  {
    id: "art-006",
    name: "Abdul Rashid Mir",
    avatar: "AM",
    location: "Srinagar, Kashmir",
    region: "Kashmir",
    state: "Jammu & Kashmir",
    lat: 34.0837,
    lng: 74.7973,
    craft: "Pashmina Weaving & Sozni Embroidery",
    bio: "Master artisan creating hand-embroidered Pashmina shawls with Sozni needlework. Each shawl takes 6-18 months of meticulous needlework.",
    productsCount: 8,
    joinedDate: "2025-02-14",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "BALUCHARI-405",
    title: "Baluchari Silk Saree — Ramayana Panels",
    emoji: "🧵",
    description:
      "Hand-woven in Bishnupur with mythological motifs from the Ramayana. Each piece takes 3–5 weeks to complete on a traditional Jacquard loom. The borders feature intricate kalka (paisley) motifs in contrasting gold zari.",
    image: "/products/baluchari.jpg",
    giTag: "Baluchari Sari",
    giNumber: "WB-GI-2409",
    artisan: ARTISANS[0],
    mintedDate: "2025-03-12",
    blockNumber: "48,221",
    txHash: "0x3f4a8c2d91b7e6f0a4528dc1e7f3b9a0d6c5e842",
    price: "₹18,500",
    materials: ["Pure Mulberry Silk", "Untwisted Silk Thread", "Gold Zari"],
    timeTaken: "4 weeks",
    status: "verified",
    carbonSaved: "2.4 kg CO₂",
    fairWagePercent: 87,
    timeline: [
      { date: "2025-02-10", title: "Raw Silk Sourced", description: "Pure mulberry silk procured from Malda silk farms", icon: "leaf" },
      { date: "2025-02-14", title: "Dyeing Completed", description: "Natural lac dye applied for the deep maroon base", icon: "leaf" },
      { date: "2025-02-18", title: "Weaving Begins", description: "Jacquard loom setup with Ramayana panel design cards", icon: "loom" },
      { date: "2025-03-12", title: "Weaving Complete", description: "Final quality check by Bankura GI Society cooperative", icon: "check" },
      { date: "2025-03-14", title: "GI Tag Minted", description: "Cryptographic proof of authenticity recorded on Polygon", icon: "check" },
      { date: "2025-03-18", title: "Shipped to Buyer", description: "Export logged at Kolkata distribution center", icon: "truck" },
    ],
  },
  {
    id: "DARJ-2024-881",
    title: "Darjeeling First Flush Tea — Spring 2024",
    emoji: "🍃",
    description:
      "Harvested from elevation-grown bushes in the Himalayan foothills of Darjeeling. First flush leaves plucked in early spring for the most delicate muscatel flavor. The most counterfeited tea on earth — now cryptographically protected.",
    image: "/products/darjeeling.jpg",
    giTag: "Darjeeling Tea",
    giNumber: "WB-GI-0102",
    artisan: { ...ARTISANS[0], id: "art-tea-001", name: "Makaibari Estate", avatar: "ME", location: "Darjeeling, West Bengal", craft: "Tea Cultivation" },
    mintedDate: "2024-04-04",
    blockNumber: "41,998",
    txHash: "0x9b2c7e4f13a0d56f8e723b1c94d0a6e5f7b82931",
    price: "₹2,800 / 100g",
    materials: ["Camellia Sinensis", "First Flush Leaves", "Organic Certified"],
    timeTaken: "Spring harvest",
    status: "verified",
    carbonSaved: "0.8 kg CO₂",
    fairWagePercent: 92,
    timeline: [
      { date: "2024-03-01", title: "Spring Pruning", description: "Bushes pruned at Makaibari's biodynamic estate", icon: "leaf" },
      { date: "2024-03-22", title: "First Flush Plucking", description: "Hand-plucked two-leaves-and-a-bud at dawn", icon: "leaf" },
      { date: "2024-03-23", title: "Processing", description: "Withering, rolling, oxidation — traditional orthodox method", icon: "loom" },
      { date: "2024-04-01", title: "Quality Grading", description: "Graded FTGFOP1 by certified tea tasters", icon: "check" },
      { date: "2024-04-04", title: "GI Tag Minted", description: "Batch authenticity recorded on Polygon blockchain", icon: "check" },
    ],
  },
  {
    id: "BANKURA-TH-012",
    title: "Bankura Terracotta Horse — Large",
    emoji: "🏺",
    description:
      "The iconic folk artifact of West Bengal, hand-crafted in Panchmura village using techniques passed down over 400 years. Sculpted from local red clay and fired in a traditional wood kiln.",
    image: "/products/bankura.jpg",
    giTag: "Bankura Horse",
    giNumber: "WB-GI-1187",
    artisan: ARTISANS[1],
    mintedDate: "2025-04-20",
    blockNumber: "49,102",
    txHash: "0xa7d3f1e2b8c94056d1e2f3a4b5c6d7e8f9012345",
    price: "₹4,200",
    materials: ["Red Laterite Clay", "Rice Husk Ash", "Natural Red Oxide"],
    timeTaken: "2 weeks",
    status: "minted",
    carbonSaved: "1.1 kg CO₂",
    fairWagePercent: 91,
    timeline: [
      { date: "2025-04-06", title: "Clay Collected", description: "Laterite clay sourced from local Panchmura riverbed", icon: "leaf" },
      { date: "2025-04-08", title: "Hand Sculpting", description: "Traditional coil-and-pinch technique used", icon: "loom" },
      { date: "2025-04-15", title: "Kiln Firing", description: "Fired at 800°C in a wood-fueled open kiln", icon: "loom" },
      { date: "2025-04-18", title: "Quality Verified", description: "Inspected by Bankura Crafts Council cooperative", icon: "check" },
      { date: "2025-04-20", title: "GI Tag Minted", description: "On-chain authentication recorded", icon: "check" },
    ],
  },
  {
    id: "KANCHI-SILK-077",
    title: "Kanchipuram Temple-Border Saree",
    emoji: "🥻",
    description:
      "A pure silk Kanchipuram saree with traditional temple-border motifs and heavy gold zari pallu. Each saree undergoes a unique three-shuttle weaving technique that creates an interlocking pattern.",
    image: "/products/kanchipuram.jpg",
    giTag: "Kanchipuram Silk",
    giNumber: "TN-GI-0305",
    artisan: ARTISANS[2],
    mintedDate: "2025-05-01",
    blockNumber: "50,344",
    txHash: "0xf1e2d3c4b5a69788796a5b4c3d2e1f0a1b2c3d4e",
    price: "₹35,000",
    materials: ["Pure Mulberry Silk", "Real Gold Zari", "Silver Thread Core"],
    timeTaken: "6 weeks",
    status: "verified",
    carbonSaved: "3.2 kg CO₂",
    fairWagePercent: 85,
    timeline: [
      { date: "2025-03-15", title: "Silk Yarn Procured", description: "Raw silk from Karnataka silk board", icon: "leaf" },
      { date: "2025-03-20", title: "Dyeing", description: "Vibrant crimson dye using lac and turmeric base", icon: "leaf" },
      { date: "2025-03-25", title: "Warp Setup", description: "3,600 threads set on the pit loom", icon: "loom" },
      { date: "2025-04-28", title: "Weaving Complete", description: "Three-shuttle interlock technique completed", icon: "check" },
      { date: "2025-05-01", title: "GI Tag Minted", description: "Registered on Polygon with cryptographic proof", icon: "check" },
    ],
  },
  {
    id: "MADHU-PAINT-203",
    title: "Madhubani Kohbar Painting — Fertility Motifs",
    emoji: "🖌️",
    description:
      "An ancient Mithila art form using natural dyes and symbolic motifs. This Kohbar-style painting depicts the lotus pond, bamboo grove, and fertility symbols traditionally painted in bridal chambers.",
    image: "/products/madhubani.jpg",
    giTag: "Madhubani Painting",
    giNumber: "BR-GI-0412",
    artisan: ARTISANS[3],
    mintedDate: "2025-04-10",
    blockNumber: "49,888",
    txHash: "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b",
    price: "₹12,000",
    materials: ["Handmade Paper", "Natural Dyes (Henna, Turmeric, Indigo)", "Bamboo Nib"],
    timeTaken: "3 weeks",
    status: "verified",
    carbonSaved: "0.6 kg CO₂",
    fairWagePercent: 94,
    timeline: [
      { date: "2025-03-20", title: "Paper Prepared", description: "Handmade paper treated with cow dung base coat", icon: "leaf" },
      { date: "2025-03-22", title: "Outline Drawn", description: "Bamboo nib outlines in traditional Bharni style", icon: "loom" },
      { date: "2025-04-05", title: "Natural Dyes Applied", description: "Henna, turmeric, indigo, and charcoal pigments", icon: "loom" },
      { date: "2025-04-08", title: "Detailing Complete", description: "Fine double-line borders and fill patterns finished", icon: "check" },
      { date: "2025-04-10", title: "GI Tag Minted", description: "Authenticated and minted on blockchain", icon: "check" },
    ],
  },
  {
    id: "KULLU-SH-089",
    title: "Kullu Hand-woven Shawl — Geometric Border",
    emoji: "🧶",
    description:
      "Traditional wool shawl woven in the Kullu Valley on pit looms. Features signature geometric borders in natural dyed wool with intricate natti patterns unique to each weaver's village.",
    image: "/products/kullu.jpg",
    giTag: "Kullu Shawl",
    giNumber: "HP-GI-0088",
    artisan: ARTISANS[4],
    mintedDate: "2025-02-28",
    blockNumber: "47,555",
    txHash: "0xc0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9",
    price: "₹6,500",
    materials: ["Local Sheep Wool", "Angora Rabbit Fiber", "Natural Plant Dyes"],
    timeTaken: "10 days",
    status: "minted",
    carbonSaved: "1.8 kg CO₂",
    fairWagePercent: 89,
    timeline: [
      { date: "2025-02-10", title: "Wool Sheared", description: "Local Gaddi sheep wool collected and cleaned", icon: "leaf" },
      { date: "2025-02-14", title: "Hand Spinning", description: "Traditional drop-spindle technique used", icon: "loom" },
      { date: "2025-02-18", title: "Dyeing", description: "Walnut husk and madder root natural dyes", icon: "leaf" },
      { date: "2025-02-22", title: "Pit Loom Weaving", description: "Woven on traditional wooden pit loom", icon: "loom" },
      { date: "2025-02-28", title: "GI Tag Minted", description: "Provenance recorded on Polygon network", icon: "check" },
    ],
  },
];

export const LIVE_FEED: LiveFeedItem[] = [
  { id: "lf-1", type: "mint", message: "Artisan Ananya Devi minted Baluchari Silk Saree #405", region: "Bishnupur, WB", timestamp: "2 min ago" },
  { id: "lf-2", type: "verify", message: "Consumer in Berlin verified Darjeeling First Flush #881", region: "Darjeeling, WB", timestamp: "5 min ago" },
  { id: "lf-3", type: "block", message: "AI Guardian flagged counterfeit listing on Meesho", region: "Mumbai, MH", timestamp: "8 min ago" },
  { id: "lf-4", type: "tip", message: "₹250 micro-tip sent to Sita Devi for Madhubani painting", region: "Madhubani, Bihar", timestamp: "12 min ago" },
  { id: "lf-5", type: "mint", message: "Ratan Pal minted Bankura Terracotta Horse #012", region: "Panchmura, WB", timestamp: "18 min ago" },
  { id: "lf-6", type: "verify", message: "Consumer in Tokyo verified Kanchipuram Silk #077", region: "Kanchipuram, TN", timestamp: "22 min ago" },
  { id: "lf-7", type: "mint", message: "Abdul Rashid minted Pashmina Shawl #156", region: "Srinagar, J&K", timestamp: "31 min ago" },
  { id: "lf-8", type: "block", message: "AI Guardian blocked 14 counterfeit Pashmina listings", region: "Delhi, NCR", timestamp: "45 min ago" },
  { id: "lf-9", type: "tip", message: "₹500 direct payment to Meena Thakur for Kullu Shawl", region: "Kullu, HP", timestamp: "1 hr ago" },
  { id: "lf-10", type: "verify", message: "Consumer in New York verified Madhubani Painting #203", region: "Madhubani, Bihar", timestamp: "1 hr ago" },
];

export const GI_REGIONS = [
  { name: "Bishnupur", state: "West Bengal", lat: 23.07, lng: 87.32, crafts: ["Baluchari Silk"], productCount: 24 },
  { name: "Darjeeling", state: "West Bengal", lat: 27.04, lng: 88.26, crafts: ["Darjeeling Tea"], productCount: 156 },
  { name: "Bankura", state: "West Bengal", lat: 23.23, lng: 87.07, crafts: ["Terracotta Horse"], productCount: 18 },
  { name: "Kanchipuram", state: "Tamil Nadu", lat: 12.83, lng: 79.70, crafts: ["Kanchipuram Silk"], productCount: 31 },
  { name: "Madhubani", state: "Bihar", lat: 26.36, lng: 86.07, crafts: ["Madhubani Painting"], productCount: 42 },
  { name: "Kullu", state: "Himachal Pradesh", lat: 31.96, lng: 77.11, crafts: ["Kullu Shawl"], productCount: 15 },
  { name: "Srinagar", state: "Jammu & Kashmir", lat: 34.08, lng: 74.80, crafts: ["Pashmina Shawl", "Sozni Embroidery"], productCount: 8 },
  { name: "Lucknow", state: "Uttar Pradesh", lat: 26.85, lng: 80.95, crafts: ["Chikankari Embroidery"], productCount: 67 },
  { name: "Varanasi", state: "Uttar Pradesh", lat: 25.32, lng: 82.99, crafts: ["Banarasi Silk"], productCount: 89 },
  { name: "Jaipur", state: "Rajasthan", lat: 26.91, lng: 75.79, crafts: ["Blue Pottery", "Block Printing"], productCount: 54 },
  { name: "Mysuru", state: "Karnataka", lat: 12.30, lng: 76.66, crafts: ["Mysore Silk"], productCount: 37 },
  { name: "Patan", state: "Gujarat", lat: 23.85, lng: 72.13, crafts: ["Patola Silk"], productCount: 12 },
];
