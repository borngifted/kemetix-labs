/* KEMETIX — merchandise collection, adapted from PDF page 2 */
import { MERCH_COLLECTION } from "@/lib/assets";

const items = [
  ["Hats", "Structured navy caps, embroidered Saturn mark"],
  ["T-Shirts", "Navy tees, front & back logo prints"],
  ["Water Bottles", "Insulated steel, shaker & flip-top styles"],
  ["Pens", "Navy lacquer with silver detailing"],
  ["Wristbands", "Precision. Performance. Potential."],
  ["Journal", "Daily & monthly schedule, hardcover"],
];

export default function Merch() {
  return (
    <section id="merch" className="bg-white px-5 py-28 text-[#0B1D3A]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="reveal label-mono text-[#0B1D3A]/50">( Beyond the lab )</span>
          <h2 className="reveal headline-tight mt-5 text-[clamp(2.2rem,5vw,4.2rem)] font-bold" data-delay="1">
            Merchandise collection
          </h2>
        </div>
        <span className="reveal label-mono text-[#0B1D3A]/50" data-delay="2">( 06 pieces )</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="reveal overflow-hidden rounded-[0.25rem]">
          <img src={MERCH_COLLECTION} alt="Kemetix Labs merchandise collection" className="h-full w-full object-cover" />
        </div>
        <ul className="flex flex-col justify-center">
          {items.map(([t, d], i) => (
            <li key={t} className="reveal flex flex-wrap items-baseline justify-between gap-2 border-t border-[#0B1D3A]/15 py-4.5 last:border-b" data-delay={String(Math.min(i + 1, 5))}>
              <span className="text-[1.5rem] font-bold uppercase tracking-tight">{t}</span>
              <span className="text-[0.95rem] font-medium text-[#0B1D3A]/60">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
