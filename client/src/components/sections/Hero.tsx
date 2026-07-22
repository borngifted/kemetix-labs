/* KEMETIX — full-viewport hero with giant wordmark, replicates noth.in hero-home */
import PillButton from "../PillButton";
import SaturnMark from "../SaturnMark";

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] w-full flex-col justify-between bg-white pt-20 text-[#0B1D3A]">
      <div className="flex items-start justify-between px-5">
        <p className="max-w-[16rem] text-[1.05rem] font-semibold leading-tight">
          Precision. Performance. Potential.
        </p>
        <p className="label-mono hidden text-right text-[#0B1D3A]/60 sm:block">
          Premium research peptides
          <br />
          Engineered for results
        </p>
      </div>

      {/* Giant wordmark */}
      <div className="w-full overflow-hidden px-2">
        <div className="flex items-end justify-center gap-[1.5vw]">
          <h1 className="headline-tight select-none whitespace-nowrap text-center text-[clamp(3.4rem,15.2vw,15rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
            Kemetix
          </h1>
          <SaturnMark className="mb-[1.6vw] hidden w-[9vw] max-w-[8.5rem] shrink-0 text-[#0B1D3A] md:block" />
        </div>
        <div className="mt-1 flex items-center justify-center gap-6 px-[2vw]">
          <span className="h-px flex-1 bg-[#0B1D3A]/30" />
          <span className="text-[clamp(1rem,2.6vw,2rem)] font-medium uppercase tracking-[0.55em]">Labs</span>
          <span className="h-px flex-1 bg-[#0B1D3A]/30" />
        </div>
      </div>

      <div className="flex items-end justify-between px-5 pb-6">
        <div className="flex items-center gap-5">
          <PillButton href="#peptides">Explore the catalog</PillButton>
          <span className="label-mono hidden text-[#0B1D3A]/60 md:block">( Research use only )</span>
        </div>
        <p className="label-mono text-right text-[#0B1D3A]/60">
          Backed by science
          <br />
          Driven by purpose
        </p>
      </div>
    </section>
  );
}
