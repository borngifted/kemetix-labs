/* KEMETIX — product list with sticky vertical letters, replicates noth.in WORKS section */
import {
  VIAL_BPC157,
  VIAL_TB500,
  VIAL_CJC1295,
  VIAL_IPAMORELIN,
  VIAL_IGF1LR3,
  VIAL_MELANOTAN2,
} from "@/lib/assets";
import Arrow from "../Arrow";

const products = [
  { name: "BPC-157", dose: "5 MG", desc: "The body's repair signal, isolated.", img: VIAL_BPC157, tag: "Recovery research" },
  { name: "TB-500", dose: "5 MG", desc: "Regeneration, written in peptide form.", img: VIAL_TB500, tag: "Tissue research" },
  { name: "CJC-1295", dose: "5 MG", desc: "Sustained signaling, engineered to last.", img: VIAL_CJC1295, tag: "GH research" },
  { name: "IPAMORELIN", dose: "5 MG", desc: "Selective by design, clean by nature.", img: VIAL_IPAMORELIN, tag: "GH research" },
  { name: "IGF-1 LR3", dose: "1 MG", desc: "Growth signaling, extended and refined.", img: VIAL_IGF1LR3, tag: "Growth research" },
  { name: "MELANOTAN II", dose: "10 MG", desc: "Pigment science, precisely dosed.", img: VIAL_MELANOTAN2, tag: "Melanocortin research" },
];

const letters = "PEPTIDES".split("");

export default function Products() {
  return (
    <section id="peptides" className="relative bg-[#0B1D3A] px-5 pb-32 pt-24 text-white">
      <div className="grid grid-cols-[2.5rem_1fr] gap-6 md:grid-cols-[4rem_1fr]">
        {/* Sticky vertical letters */}
        <div className="relative">
          <div className="sticky top-24 flex flex-col items-center">
            {letters.map((l, i) => (
              <span key={i} className="text-[1.6rem] font-extrabold uppercase leading-[1.15] tracking-tight md:text-[1.9rem]">
                {l}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
            <h2 className="reveal headline-tight max-w-[18ch] text-[clamp(2.2rem,5vw,4.2rem)] font-bold">
              Good compounds work. <span className="text-white/50">Great compounds verify.</span>
            </h2>
            <span className="label-mono text-white/50">© 24 . 26</span>
          </div>

          {/* Offset product grid */}
          <div className="grid gap-x-4 gap-y-24 sm:grid-cols-2">
            {products.map((p, i) => (
              <article
                key={p.name}
                className={`product-card reveal group ${i % 2 === 1 ? "sm:mt-24" : ""}`}
                data-delay={String((i % 2) + 1)}
              >
                <div className="overflow-hidden rounded-[0.25rem]">
                  <img src={p.img} alt={`${p.name} research peptide`} className="product-img aspect-[4/3] w-full object-cover" />
                </div>
                <p className="label-mono mt-4 text-white/45">{p.tag}</p>
                <div className="mt-2 flex items-baseline justify-between">
                  <h3 className="text-[1.7rem] font-bold uppercase tracking-tight">{p.name}</h3>
                  <span className="font-mono text-sm text-[#6E9BFF]">{p.dose}</span>
                </div>
                <p className="mt-1.5 text-[1.05rem] font-medium text-white/70">{p.desc}</p>
              </article>
            ))}
          </div>

          {/* View all + count */}
          <div className="mt-24 flex items-end justify-between">
            <a href="#contact" className="group inline-flex items-center gap-3 text-[2rem] font-semibold tracking-tight">
              Request full catalog
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="text-[1.1rem]">( 06 )</span>
          </div>

          {/* Packaging assurances */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-[0.25rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Lab tested", "Every batch verified for purity & quality"],
              ["99%+ purity", "High purity guaranteed, batch after batch"],
              ["Preservative free", "No additives, no compromises"],
              ["Scan for COA", "QR-linked certificates of analysis"],
            ].map(([t, d]) => (
              <div key={t} className="bg-[#0B1D3A] p-6">
                <p className="label-mono text-[#6E9BFF]">{t}</p>
                <p className="mt-2 text-sm font-medium text-white/70">{d}</p>
              </div>
            ))}
          </div>
          <p className="label-mono mt-6 text-white/40">Research use only — not for human consumption.</p>
        </div>
      </div>
    </section>
  );
}
