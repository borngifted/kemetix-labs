/* KEMETIX — footer CTA, replicates noth.in "Let's start from nothin'" footer */
import PillButton from "../PillButton";
import SaturnMark from "../SaturnMark";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B1D3A] px-5 pb-8 pt-28 text-white">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <span className="label-mono text-white/50">( Contact )</span>
          <h2 className="headline-tight mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)] font-bold">
            Let's start
            <br />
            from science
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 pb-2">
          <PillButton href="mailto:info@kemetixlabs.com" variant="royal">
            Drop us an email
          </PillButton>
          <PillButton href="#peptides" variant="white">
            View the catalog
          </PillButton>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-white/12 pt-8">
        <div className="flex items-center gap-3">
          <SaturnMark className="h-9 w-9 text-white" />
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em]">
              KEMETIX <span className="font-medium tracking-[0.3em]">LABS</span>
            </p>
            <p className="label-mono mt-1 text-white/45">www.kemetixlabs.com</p>
          </div>
        </div>
        <p className="label-mono max-w-[34rem] text-white/45">
          Research use only. Not for human consumption. All products are supplied strictly for
          laboratory research purposes.
        </p>
        <p className="label-mono text-white/45">© 2026 — Kemetix Labs</p>
      </div>
    </footer>
  );
}
