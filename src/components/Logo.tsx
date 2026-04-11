import { cn } from "@/lib/utils";

export default function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "font-display font-black tracking-[-0.06em] text-2xl sm:text-[26px] leading-none flex items-baseline",
          variant === "dark" ? "text-ink" : "text-white"
        )}
      >
        wo
        <span className="relative inline-block">
          r
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand" />
        </span>
        o
        <sup className="text-[10px] ml-0.5 text-brand">®</sup>
      </span>
      <span
        className={cn(
          "hidden sm:inline text-[10px] uppercase tracking-[0.32em] mt-1",
          variant === "dark" ? "text-muted" : "text-white/55"
        )}
      >
        global
      </span>
    </div>
  );
}
