/* KEMETIX — manifesto statement, replicates noth.in "Most brands produce content" section */
export default function Manifesto() {
  return (
    <section className="bg-white px-5 pb-36 pt-28 text-[#0B1D3A]">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="reveal headline-tight max-w-[16ch] text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold">
            Most labs produce peptides.
            <br />
            <span className="text-[#1E4DB7]">We engineer precision.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-8 md:pl-10">
          <span className="reveal label-mono text-[#0B1D3A]/50" data-delay="1">( The Kemetix standard )</span>
          <p className="reveal max-w-[42ch] text-[1.15rem] font-medium leading-snug" data-delay="2">
            We are committed to precision, innovation, and results. Kemetix Labs delivers premium
            peptide solutions backed by science and driven by purpose — exact dosing, verified
            purity, and quality you can rely on, down to the molecular level.
          </p>
        </div>
      </div>
    </section>
  );
}
