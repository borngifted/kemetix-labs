/* KEMETIX — pill CTA button, replicates noth.in .btn (rounded-full, uppercase, arrow) */
import Arrow from "./Arrow";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "navy" | "white" | "royal";
  onClick?: () => void;
  className?: string;
};

export default function PillButton({ children, href, variant = "navy", onClick, className = "" }: Props) {
  const styles =
    variant === "navy"
      ? "bg-[#0B1D3A] text-white border border-white/25 hover:border-white"
      : variant === "royal"
        ? "bg-[#1E4DB7] text-white border border-white/25 hover:border-white"
        : "bg-white text-[#0B1D3A] border border-[#0B1D3A]/30 hover:border-[#0B1D3A]";
  const cls = `btn-pill ${styles} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  return (
    <button className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
