/* KEMETIX — crisp vector Saturn brand mark (planet + tilted ring), per brand guide */
export default function SaturnMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden>
      {/* planet */}
      <circle cx="50" cy="50" r="26" fill={color} />
      {/* crescent highlight */}
      <path d="M62 31c4 3 7 7 8 12-3-6-8-10-14-12 2-.4 4-.4 6 0Z" fill="white" opacity="0.9" />
      {/* ring — tilted ellipse, drawn as two arcs so it passes behind the planet top and in front at bottom */}
      <g transform="rotate(-20 50 50)">
        <path
          d="M8 50c0-6 18.8-11 42-11s42 5 42 11c0 4.5-10.5 8.4-25.6 10.2l-.9-4C77 54.7 86 51.6 86 50c0-3.3-16.1-7-36-7s-36 3.7-36 7c0 1.7 9.6 4.9 22.4 6.3l-.9 4C20 58.5 8 54.6 8 50Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
