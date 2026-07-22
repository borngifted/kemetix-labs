/* KEMETIX — line+chevron arrow, replicates noth.in .arrow-w */
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center ${className}`} aria-hidden>
      <span className="block h-px w-[0.82rem] bg-current" />
      <span
        className="absolute right-0 block h-[0.4rem] w-[0.4rem] rotate-45 border-t border-r border-current"
        style={{ borderTopWidth: 1, borderRightWidth: 1 }}
      />
    </span>
  );
}
