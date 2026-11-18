export default function CrestLogo({ size = 52, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Demo High School Crest"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <filter id="shieldShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Main Shield Outline with Shadow */}
      <path
        d="M60 8 C92 8, 108 20, 108 45 C108 80, 85 102, 60 114 C35 102, 12 80, 12 45 C12 20, 28 8, 60 8 Z"
        fill="url(#shieldGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="4"
        filter="url(#shieldShadow)"
      />

      {/* Inner Decorative Border */}
      <path
        d="M60 14 C88 14, 102 24, 102 46 C102 76, 81 96, 60 107 C39 96, 18 76, 18 46 C18 24, 32 14, 60 14 Z"
        fill="none"
        stroke="rgba(253, 224, 71, 0.4)"
        strokeWidth="1.5"
      />

      {/* Mount Elgon Peaks Silhouette */}
      <path
        d="M24 64 L42 46 L55 58 L72 38 L96 64 Z"
        fill="#3b82f6"
        opacity="0.35"
      />

      {/* Golden Sun / Star of Excellence */}
      <circle cx="60" cy="30" r="7" fill="url(#goldGrad)" />
      <path
        d="M60 20 L61.5 27 L68 28.5 L61.5 30 L60 37 L58.5 30 L52 28.5 L58.5 27 Z"
        fill="#fef08a"
      />

      {/* Torch of Knowledge */}
      <path
        d="M58 40 L62 40 L61 58 L59 58 Z"
        fill="url(#goldGrad)"
        stroke="#ca8a04"
        strokeWidth="0.8"
      />
      {/* Torch Flame */}
      <path
        d="M60 33 C62 36, 65 38, 63 41 C61 43, 59 43, 57 41 C55 38, 58 36, 60 33 Z"
        fill="#ef4444"
      />
      <circle cx="60" cy="39" r="2" fill="#fbbf24" />

      {/* Open Academic Book */}
      <g transform="translate(38, 62)">
        {/* Left page */}
        <path
          d="M22 6 C16 4, 6 4, 1 7 L1 22 C6 19, 16 19, 22 21 Z"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth="1.2"
        />
        {/* Right page */}
        <path
          d="M22 6 C28 4, 38 4, 43 7 L43 22 C38 19, 28 19, 22 21 Z"
          fill="#f8fafc"
          stroke="#0f172a"
          strokeWidth="1.2"
        />
        {/* Page text lines */}
        <line x1="5" y1="10" x2="18" y2="9" stroke="#94a3b8" strokeWidth="1" />
        <line x1="5" y1="13" x2="18" y2="12" stroke="#94a3b8" strokeWidth="1" />
        <line x1="5" y1="16" x2="15" y2="15" stroke="#94a3b8" strokeWidth="1" />
        <line x1="26" y1="9" x2="39" y2="10" stroke="#94a3b8" strokeWidth="1" />
        <line x1="26" y1="12" x2="39" y2="13" stroke="#94a3b8" strokeWidth="1" />
        <line x1="26" y1="15" x2="35" y2="16" stroke="#94a3b8" strokeWidth="1" />
        {/* Center Spine */}
        <line x1="22" y1="5" x2="22" y2="21" stroke="url(#goldGrad)" strokeWidth="1.8" />
      </g>

      {/* Bottom Ribbon / Banner */}
      <path
        d="M26 100 Q60 114 94 100 L90 109 Q60 120 30 109 Z"
        fill="url(#goldGrad)"
        stroke="#ca8a04"
        strokeWidth="1"
      />
      <text
        x="60"
        y="107"
        fontSize="6.5"
        fontWeight="800"
        fill="#0f172a"
        textAnchor="middle"
        letterSpacing="0.8"
      >
        MBALE • UGANDA
      </text>
    </svg>
  );
}
