/* KEMETIX — full-bleed visual break, replicates noth.in showreel section */
import { HERO_VIALS } from "@/lib/assets";

export default function Showcase() {
  return (
    <section className="relative bg-[#0B1D3A] text-white">
      <div className="relative h-[85vh] w-full overflow-hidden">
        <img src={HERO_VIALS} alt="Kemetix Labs peptide vials" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-transparent to-[#0B1D3A]/40" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-8">
          <p className="max-w-[24rem] text-[1.1rem] font-medium leading-snug">
            Six research compounds. One uncompromising standard of purity.
          </p>
          <span className="label-mono text-white/60">( 99%+ purity · lab tested )</span>
        </div>
      </div>
    </section>
  );
}
