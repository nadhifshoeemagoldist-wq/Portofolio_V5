// Helper to generate clean, modern developer mockup banners (no AI stock photos)
const createMockupSvg = (title, category, tech, color1, color2, iconType) => {
  const isWeb = iconType === "web";
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
      <linearGradient id="g_${title}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="#08071a"/>
    <circle cx="680" cy="90" r="220" fill="${color1}" opacity="0.18"/>
    <circle cx="100" cy="380" r="180" fill="${color2}" opacity="0.14"/>
    
    <!-- Grid Pattern -->
    <g opacity="0.15">
      <line x1="0" y1="90" x2="800" y2="90" stroke="#fff" stroke-dasharray="4,4"/>
      <line x1="0" y1="180" x2="800" y2="180" stroke="#fff" stroke-dasharray="4,4"/>
      <line x1="0" y1="270" x2="800" y2="270" stroke="#fff" stroke-dasharray="4,4"/>
      <line x1="0" y1="360" x2="800" y2="360" stroke="#fff" stroke-dasharray="4,4"/>
      <line x1="200" y1="0" x2="200" y2="450" stroke="#fff" stroke-dasharray="4,4"/>
      <line x1="400" y1="0" x2="400" y2="450" stroke="#fff" stroke-dasharray="4,4"/>
      <line x1="600" y1="0" x2="600" y2="450" stroke="#fff" stroke-dasharray="4,4"/>
    </g>

    <!-- Main Card Mockup -->
    <rect x="40" y="35" width="720" height="380" rx="20" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    
    <!-- Header Badge -->
    <rect x="80" y="70" width="150" height="30" rx="15" fill="rgba(255,255,255,0.08)" stroke="${color1}" stroke-opacity="0.4"/>
    <text x="155" y="90" fill="${color1}" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1.5">${category.toUpperCase()}</text>

    <!-- Title & Tech -->
    <text x="80" y="155" fill="#ffffff" font-family="system-ui, sans-serif" font-size="44" font-weight="800">${title}</text>
    <text x="80" y="195" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18" font-weight="500">Tech: ${tech}</text>

    <!-- Mockup Preview Window -->
    ${
      isWeb
        ? `<g transform="translate(450, 75)">
            <rect width="270" height="280" rx="14" fill="#030014" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="270" height="28" rx="14" fill="rgba(255,255,255,0.08)"/>
            <circle cx="16" cy="14" r="4" fill="#ef4444"/>
            <circle cx="28" cy="14" r="4" fill="#f59e0b"/>
            <circle cx="40" cy="14" r="4" fill="#10b981"/>
            <rect x="56" y="8" width="160" height="12" rx="6" fill="rgba(255,255,255,0.1)"/>
            <!-- Web Body Mockup -->
            <rect x="20" y="44" width="230" height="35" rx="8" fill="url(#g_${title})" opacity="0.85"/>
            <rect x="20" y="92" width="108" height="75" rx="8" fill="rgba(255,255,255,0.06)"/>
            <rect x="142" y="92" width="108" height="75" rx="8" fill="rgba(255,255,255,0.06)"/>
            <rect x="20" y="180" width="230" height="70" rx="8" fill="rgba(255,255,255,0.04)"/>
          </g>`
        : `<g transform="translate(480, 75)">
            <rect width="230" height="300" rx="24" fill="#030014" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
            <rect x="75" y="10" width="80" height="14" rx="7" fill="rgba(255,255,255,0.1)"/>
            <rect x="20" y="45" width="190" height="38" rx="10" fill="url(#g_${title})" opacity="0.85"/>
            <rect x="20" y="96" width="190" height="52" rx="10" fill="rgba(255,255,255,0.06)"/>
            <rect x="20" y="160" width="190" height="52" rx="10" fill="rgba(255,255,255,0.06)"/>
            <rect x="20" y="224" width="190" height="42" rx="10" fill="rgba(255,255,255,0.04)"/>
          </g>`
    }

    <!-- Bottom Tech Pill -->
    <rect x="80" y="325" width="160" height="38" rx="10" fill="url(#g_${title})" opacity="0.9"/>
    <text x="160" y="349" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">GitHub Project</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const DEFAULT_PROJECTS = [
  {
    id: 1,
    Title: "KarangKita",
    Description: "Aplikasi mobile berbasis Flutter untuk mengelola jadwal kegiatan, pengumuman, dan galeri dokumentasi komunitas Karang Taruna.",
    Img: createMockupSvg("KarangKita", "Mobile App", "Flutter • Dart • Git", "#38bdf8", "#6366f1", "mobile"),
    Link: "https://github.com/kelompok4-KH002/KarangKita",
    Github: "https://github.com/kelompok4-KH002/KarangKita",
    TechStack: ["Flutter", "Dart", "Mobile", "Git"],
    Features: [
      "Manajemen jadwal kegiatan dan agenda komunitas",
      "Galeri dokumentasi acara Karang Taruna",
      "Antarmuka responsif dan ramah pengguna",
      "Kolaborasi tim berbasis Git"
    ]
  },
  {
    id: 2,
    Title: "Pulih Bunda",
    Description: "Aplikasi mobile yang dirancang untuk mendukung kesehatan dan pemulihan ibu dengan antarmuka yang ramah dan edukatif.",
    Img: createMockupSvg("Pulih Bunda", "HealthTech", "Flutter • UI/UX", "#f43f5e", "#a855f7", "mobile"),
    Link: "https://github.com/pulih-bunda/pulih-bunda-app",
    Github: "https://github.com/pulih-bunda/pulih-bunda-app",
    TechStack: ["Flutter", "Dart", "HealthTech", "UI/UX"],
    Features: [
      "Pelacakan tahap pemulihan kesehatan ibu",
      "Panduan dan artikel edukasi kesehatan",
      "Tampilan antarmuka yang bersih dan menenangkan",
      "Navigasi aplikasi yang intuitif"
    ]
  },
  {
    id: 3,
    Title: "WorkSync",
    Description: "Platform kolaborasi dan sinkronisasi tugas tim untuk meningkatkan efisiensi kerja dan pelacakan progres bersama.",
    Img: createMockupSvg("WorkSync", "Team Platform", "Collaboration • Productivity", "#3b82f6", "#10b981", "team"),
    Link: "https://github.com/wvionn/worksync",
    Github: "https://github.com/wvionn/worksync",
    TechStack: ["Collaboration", "Productivity", "Fullstack", "Git"],
    Features: [
      "Sinkronisasi penugasan antar anggota tim",
      "Pelacakan status pekerjaan secara real-time",
      "Workspace bersama yang terorganisir",
      "Kemudahan koordinasi tim"
    ]
  },
  {
    id: 4,
    Title: "MoneyTrack",
    Description: "Aplikasi pelacak keuangan harian untuk memonitor arus kas, pemasukan, pengeluaran, dan anggaran pribadi secara efisien.",
    Img: createMockupSvg("MoneyTrack", "Finance App", "Dart • State Management", "#10b981", "#06b6d4", "finance"),
    Link: "https://github.com/nadhifshoeemagoldist-wq/MoneyTrack",
    Github: "https://github.com/nadhifshoeemagoldist-wq/MoneyTrack",
    TechStack: ["Mobile App", "Finance", "Dart", "State Management"],
    Features: [
      "Pencatatan pemasukan dan pengeluaran harian",
      "Visualisasi ringkasan anggaran bulanan",
      "Kategori transaksi yang dapat disesuaikan",
      "Penyimpanan data lokal yang cepat dan aman"
    ]
  },
  {
    id: 5,
    Title: "BookNow",
    Description: "Platform web sistem pemesanan dan reservasi yang dirancang untuk mempermudah proses booking secara praktis, cepat, dan responsif.",
    Img: createMockupSvg("BookNow", "Web App", "Web App • Booking System", "#f59e0b", "#ef4444", "web"),
    Link: "https://github.com/nadhifshoeemagoldist-wq/BookNow",
    Github: "https://github.com/nadhifshoeemagoldist-wq/BookNow",
    TechStack: ["Web App", "Booking Flow", "UI/UX", "Database"],
    Features: [
      "Katalog layanan untuk reservasi online",
      "Pengecekan ketersediaan jadwal secara real-time",
      "Alur konfirmasi pemesanan interaktif",
      "Riwayat transaksi booking pengguna"
    ]
  },
  {
    id: 6,
    Title: "SiMAKAN",
    Description: "Aplikasi web pemesanan dan manajemen makanan dengan antarmuka interaktif dan alur transaksi yang praktis.",
    Img: createMockupSvg("SiMAKAN", "Web App", "Web App • Food Ordering", "#ec4899", "#8b5cf6", "web"),
    Link: "https://github.com/nadhifshoeemagoldist-wq/SiMAKAN",
    Github: "https://github.com/nadhifshoeemagoldist-wq/SiMAKAN",
    TechStack: ["Web App", "Food Ordering", "JavaScript", "UI Flow"],
    Features: [
      "Katalog menu makanan interaktif berbasis web",
      "Keranjang pesanan dan kalkulasi harga otomatis",
      "Status dan riwayat pemesanan pengguna",
      "Desain antarmuka web yang responsif"
    ]
  }
];
