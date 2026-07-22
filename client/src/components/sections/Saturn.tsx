/* KEMETIX — Why Saturn brand story, replicates noth.in ( The Studio ) section */
import { SATURN_SPACE, MOLECULE, BOX_KIT } from "@/lib/assets";

const principles = [
  ["01", "Precision & Orbital Focus", "Saturn's rings are a perfect example of precision, balance, and natural engineering. At Kemetix Labs, we apply that same precision to every peptide we develop — down to the molecular level."],
  ["02", "Stability & Strength", "Saturn is a gas giant — powerful, stable, and resilient in the most extreme conditions. Our peptides are engineered for stability, purity, and optimal performance in the body."],
  ["03", "Advanced Science", "Saturn has long fascinated scientists and represents the pursuit of deeper knowledge and innovation. We push the boundaries of peptide science to deliver cutting-edge solutions that work."],
  ["04", "Elevated Performance", "Saturn stands apart — iconic, elite, and in a class of its own. Kemetix Labs peptides are formulated to help you perform, recover, and evolve at the highest level."],
  ["05", "Endless Potential", "Saturn's vast orbit signifies limitless potential and long-term impact. Our mission is to fuel your potential with peptides that create real, lasting results."],
];

const traits = ["Symbol of excellence", "Built on trust", "Science driven", "Elevate performance"];

export default function Saturn() {
  return (
    <section id="saturn" className="relative overflow-clip bg-[#0B1D3A] text-white">
      {/* Space visual */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={SATURN_SPACE} alt="Saturn in deep space" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/60 via-transparent to-[#0B1D3A]" />
        <div className="absolute inset-x-0 bottom-10 px-5">
          <span className="label-mono text-white/60">( Why Saturn ? )</span>
          <h2 className="reveal headline-tight mt-4 max-w-[22ch] text-[clamp(2.4rem,6vw,5rem)] font-bold">
            More than a planet — a set of principles.
          </h2>
        </div>
      </div>

      <div className="px-5 pb-32 pt-20">
        <p className="reveal mb-16 max-w-[52ch] text-[1.15rem] font-medium leading-snug text-white/80">
          Saturn embodies the core principles that drive Kemetix Labs and our commitment to peptide
          excellence — mastery, discipline, and leadership, held to the highest standards so you can
          perform at your peak.
        </p>

        <div className="grid gap-y-0 md:grid-cols-[0.4fr_1fr]">
          <div className="hidden md:block">
            <div className="sticky top-28 pr-10">
              <div className="flex flex-wrap gap-2">
                {traits.map((t) => (
                  <span key={t} className="label-mono rounded-full border border-white/20 px-3 py-1.5 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <img src={MOLECULE} alt="Peptide molecular structure" className="mt-10 w-full max-w-[16rem] rounded-[0.25rem] opacity-80" />
            </div>
          </div>
          <div>
            {principles.map(([n, t, d], i) => (
              <div key={n} className="reveal grid gap-4 border-t border-white/12 py-9 last:border-b sm:grid-cols-[4rem_1fr]" data-delay={String(Math.min(i + 1, 3))}>
                <span className="font-mono text-sm text-[#6E9BFF]">( {n} )</span>
                <div>
                  <h3 className="text-[1.6rem] font-bold uppercase tracking-tight">{t}</h3>
                  <p className="mt-3 max-w-[58ch] text-[1.02rem] font-medium leading-snug text-white/65">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presentation kit visual */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="reveal overflow-hidden rounded-[0.25rem]">
            <img src={BOX_KIT} alt="Kemetix Labs presentation kit" className="w-full object-cover" />
          </div>
          <div>
            <span className="reveal label-mono text-white/50">( The full kit )</span>
            <h3 className="reveal headline-tight mt-5 max-w-[16ch] text-[clamp(1.9rem,3.6vw,3rem)] font-bold" data-delay="1">
              Six compounds, one presentation standard.
            </h3>
            <p className="reveal mt-6 max-w-[46ch] text-[1.05rem] font-medium leading-snug text-white/65" data-delay="2">
              Every Kemetix Labs kit ships lab tested for purity and quality, preservative free with
              no additives, and QR-coded so you can scan for COA results on every batch. Premium
              peptides, for research purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
