/* KEMETIX — fixed nav with mix-blend-mode: difference, replicates noth.in .nav-boiler */
import SaturnMark from "./SaturnMark";

const links = [
  { label: "Peptides", href: "#peptides" },
  { label: "Why Saturn", href: "#saturn" },
  { label: "Merch", href: "#merch" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="blend-diff pointer-events-none fixed inset-x-0 top-0 z-[1001] flex h-16 items-center justify-between px-5 text-white">
      <a href="#top" className="pointer-events-auto flex items-center gap-2.5">
        <SaturnMark className="h-8 w-8" />
        <span className="text-sm font-extrabold tracking-[0.18em]">
          KEMETIX <span className="font-medium tracking-[0.3em]">LABS</span>
        </span>
      </a>
      <div className="pointer-events-auto flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="label-mono hidden font-bold transition-opacity hover:opacity-60 sm:block"
          >
            {l.label}
          </a>
        ))}
        <span className="label-mono rounded bg-white px-1.5 py-1 font-bold text-[#0B1D3A]">RUO</span>
      </div>
    </nav>
  );
}
