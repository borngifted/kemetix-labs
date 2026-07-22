/* KEMETIX — five value pillars, replicates noth.in "We design:" list style */
const pillars = [
  ["Precise", "Exact dosing & consistency"],
  ["Pure", "High purity peptides"],
  ["Lab Tested", "For purity & quality"],
  ["Advanced", "Cutting edge research"],
  ["Trusted", "Quality you can rely on"],
];

export default function Pillars() {
  return (
    <section className="bg-white px-5 py-28 text-[#0B1D3A]">
      <div className="grid gap-12 md:grid-cols-[0.75fr_1fr]">
        <div>
          <span className="reveal label-mono text-[#0B1D3A]/50">( The standard )</span>
          <h2 className="reveal headline-tight mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold" data-delay="1">
            Forms follow
            <br />
            precision.
          </h2>
        </div>
        <div>
          <p className="reveal mb-8 text-[1.15rem] font-medium">We deliver :</p>
          <ul>
            {pillars.map(([t, d], i) => (
              <li
                key={t}
                className="reveal flex flex-wrap items-baseline justify-between gap-2 border-t border-[#0B1D3A]/15 py-5 last:border-b"
                data-delay={String(Math.min(i + 1, 5))}
              >
                <span className="text-[1.8rem] font-bold uppercase tracking-tight">{t}</span>
                <span className="text-[1rem] font-medium text-[#0B1D3A]/60">{d}</span>
              </li>
            ))}
          </ul>
          <p className="reveal mt-8 max-w-[40ch] text-[1.05rem] font-medium text-[#0B1D3A]/70" data-delay="3">
            Precision is where molecular science meets uncompromising quality control.
          </p>
        </div>
      </div>
    </section>
  );
}
