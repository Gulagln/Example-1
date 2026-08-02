import { cn } from "@/lib/utils";

type Variant = "hero" | "plate" | "interior" | "portrait" | "texture";

type PlaceholderArtProps = {
  variant?: Variant;
  className?: string;
  caption?: string;
  dark?: boolean;
};

/**
 * Abstract, brand-toned placeholder for imagery slots (no real photography yet).
 * Structured as a <figure> with an aspect-ratio box so real <Image> photography
 * can drop in later without touching layout.
 */
export function PlaceholderArt({
  variant = "interior",
  className,
  caption,
  dark = false,
}: PlaceholderArtProps) {
  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden",
        dark ? "bg-primary" : "bg-muted",
        className
      )}
      aria-hidden={caption ? undefined : true}
    >
      <PatternLayer variant={variant} dark={dark} />
      {caption && (
        <figcaption className="sr-only">{caption}</figcaption>
      )}
    </figure>
  );
}

function PatternLayer({ variant, dark }: { variant: Variant; dark: boolean }) {
  const line = dark ? "rgba(212,162,50,0.5)" : "rgba(161,98,7,0.45)";
  const lineFaint = dark ? "rgba(243,237,228,0.12)" : "rgba(28,25,23,0.08)";

  switch (variant) {
    case "hero":
      return (
        <svg
          viewBox="0 0 800 1000"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <radialGradient id="heroGrad" cx="70%" cy="20%" r="90%">
              <stop offset="0%" stopColor={dark ? "#332c26" : "#efe5d4"} />
              <stop offset="55%" stopColor={dark ? "#1a1613" : "#e4d7bf"} />
              <stop offset="100%" stopColor={dark ? "#100e0c" : "#d9c9a8"} />
            </radialGradient>
          </defs>
          <rect width="800" height="1000" fill="url(#heroGrad)" />
          {Array.from({ length: 7 }).map((_, i) => (
            <circle
              key={i}
              cx={620 - i * 4}
              cy={230}
              r={70 + i * 58}
              fill="none"
              stroke={i % 2 === 0 ? line : lineFaint}
              strokeWidth={1}
            />
          ))}
          <path
            d="M0 780 C 180 700, 320 860, 500 760 S 760 640, 800 700"
            fill="none"
            stroke={line}
            strokeWidth={1.5}
          />
          <path
            d="M0 860 C 200 790, 340 940, 540 840 S 780 720, 800 780"
            fill="none"
            stroke={lineFaint}
            strokeWidth={1}
          />
        </svg>
      );
    case "plate":
      return (
        <svg
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <radialGradient id="plateGrad" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor={dark ? "#2a231d" : "#f2e9d8"} />
              <stop offset="100%" stopColor={dark ? "#100e0c" : "#dccdac"} />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill="url(#plateGrad)" />
          <circle cx="200" cy="195" r="120" fill="none" stroke={lineFaint} strokeWidth="1" />
          <circle cx="200" cy="195" r="86" fill="none" stroke={line} strokeWidth="1.2" />
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const x1 = 200 + Math.cos(angle) * 40;
            const y1 = 195 + Math.sin(angle) * 40;
            const x2 = 200 + Math.cos(angle) * 60;
            const y2 = 195 + Math.sin(angle) * 60;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={line} strokeWidth="1" />
            );
          })}
        </svg>
      );
    case "portrait":
      return (
        <svg
          viewBox="0 0 400 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="portraitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={dark ? "#211c18" : "#eee2cb"} />
              <stop offset="100%" stopColor={dark ? "#0c0a09" : "#d3c19a"} />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#portraitGrad)" />
          <ellipse cx="200" cy="200" rx="86" ry="100" fill="none" stroke={line} strokeWidth="1.4" />
          <path
            d="M90 460 C 90 340, 310 340, 310 460"
            fill="none"
            stroke={line}
            strokeWidth="1.4"
          />
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1={40 + i * 80}
              y1="0"
              x2={40 + i * 80}
              y2="500"
              stroke={lineFaint}
              strokeWidth="1"
            />
          ))}
        </svg>
      );
    case "texture":
      return (
        <svg
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <pattern id="grain" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill={dark ? "#1a1613" : "#f1e9d9"} />
              <path d="M0 15 H30 M15 0 V30" stroke={lineFaint} strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="300" height="300" fill="url(#grain)" />
        </svg>
      );
    case "interior":
    default:
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="interiorGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={dark ? "#2a231d" : "#efe5d4"} />
              <stop offset="100%" stopColor={dark ? "#100e0c" : "#d9c9a8"} />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#interiorGrad)" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={i}
              x={40 + i * 90}
              y={60}
              width="46"
              height="280"
              fill="none"
              stroke={i % 2 === 0 ? line : lineFaint}
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="340" x2="600" y2="340" stroke={line} strokeWidth="1.2" />
        </svg>
      );
  }
}
