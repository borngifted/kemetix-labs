/* KEMETIX — marquee ticker, replicates noth.in "we are nothin'" repeated band */
export default function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className="headline-tight whitespace-nowrap px-6 text-[clamp(2.5rem,7vw,6rem)] font-extrabold uppercase">
                {t}
                <span className="px-6 text-[#1E4DB7]">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
