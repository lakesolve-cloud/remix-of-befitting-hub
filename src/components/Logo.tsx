import logoAsset from "@/assets/befitting-hub-logo.png.asset.json";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
}

export function Logo({ className = "", imageClassName = "", showText = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-3 ${className}`}
      aria-label="Befitting Hub — home"
    >
      <img
        src={logoAsset.url}
        alt="Befitting Hub"
        className={`h-10 w-auto object-contain ${imageClassName}`}
        width="auto"
        height="40"
      />
      {showText && (
        <span className="leading-tight">
          <span className="block font-display text-base font-bold tracking-tight">Befitting Hub</span>
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Befitting Group
          </span>
        </span>
      )}
    </a>
  );
}
