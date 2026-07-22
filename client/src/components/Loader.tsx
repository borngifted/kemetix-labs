/* KEMETIX — loader with 0→100 counter, replicates noth.in entry loader */
import { useEffect, useState } from "react";
import SaturnMark from "./SaturnMark";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      // ease-out counter
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setHiding(true);
        setTimeout(onDone, 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-between bg-[#0B1D3A] p-8 text-white transition-opacity duration-500"
      style={{ opacity: hiding ? 0 : 1, pointerEvents: hiding ? "none" : "auto" }}
    >
      <span className="label-mono font-bold">Kemetix Labs</span>
      <div style={{ transform: `scale(${0.6 + n / 250})`, opacity: 0.25 + n / 133, transition: "transform 0.1s linear" }}>
        <SaturnMark className="h-32 w-32 text-white" />
      </div>
      <div className="flex w-full items-end justify-between">
        <span className="label-mono">Precision . Performance . Potential</span>
        <span className="font-mono text-5xl font-medium tabular-nums">{n}</span>
      </div>
    </div>
  );
}
