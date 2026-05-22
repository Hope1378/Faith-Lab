export default function Logo({ size = 40, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', flexShrink: 0 }}
    >
      {/* Outer circle */}
      <circle cx="24" cy="24" r="23" stroke={color} strokeWidth="2" opacity="0.15" />
      <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="1.5" opacity="0.25" />

      {/* Open book base */}
      <path
        d="M12 30 C12 28 16 26 24 26 C32 26 36 28 36 30 L36 34 C36 32 32 30 24 30 C16 30 12 32 12 34 Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M12 30 L12 20 C12 18 16 16 24 16 L24 26 C16 26 12 28 12 30 Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M36 30 L36 20 C36 18 32 16 24 16 L24 26 C32 26 36 28 36 30 Z"
        fill={color}
        opacity="0.75"
      />

      {/* Center spine */}
      <path
        d="M24 16 L24 30"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Flame / spark above */}
      <path
        d="M24 16 C22 12 20 10 21 7 C22 4 23 3 24 3 C25 3 26 4 27 7 C28 10 26 12 24 16 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M24 14 C23 11.5 22 10 22.5 8 C23 6 23.5 5.5 24 5.5 C24.5 5.5 25 6 25.5 8 C26 10 25 11.5 24 14 Z"
        fill="#fff"
        opacity="0.6"
      />

      {/* Small spark dots */}
      <circle cx="20" cy="9" r="1" fill={color} opacity="0.7" />
      <circle cx="28" cy="11" r="0.8" fill={color} opacity="0.5" />
      <circle cx="26" cy="6" r="0.6" fill={color} opacity="0.4" />
    </svg>
  )
}
