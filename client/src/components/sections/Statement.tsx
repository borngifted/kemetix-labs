/* KEMETIX — marquee + giant closing statement, replicates noth.in ticker & closing block */
import Marquee from "../Marquee";

export default function Statement() {
  return (
    <section className="bg-[#0B1D3A] py-24 text-white">
      <Marquee items={["we are kemetix", "precision", "performance", "potential"]} />
      <Marquee items={["engineered for results", "backed by science", "built for you"]} reverse className="mt-4 opacity-30" />
      <div className="px-5 pt-32">
        <h2 className="reveal headline-tight max-w-[16ch] text-[clamp(2.8rem,7vw,6rem)] font-bold">
          Engineered for results. Backed by science.{" "}
          <span className="text-[#6E9BFF]">Built for you.</span>
        </h2>
      </div>
    </section>
  );
}
