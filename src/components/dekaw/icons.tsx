// Ícones/ilustrações SVG inline — linha simples, apenas verde/branco.
type P = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTribo({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="32" r="5" />
        <circle cx="38" cy="32" r="5" />
        <path d="M24 17v8m0 0-9 5m9-5 9 5" />
        <path d="M14 36h20" opacity="0.5" />
      </g>
    </svg>
  );
}

export function IconChat({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M8 12h24a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H18l-8 6v-6H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z" />
        <path d="M13 19h14M13 24h9" opacity="0.6" />
        <path d="M40 20a5 5 0 0 1 0 10" opacity="0.4" />
      </g>
    </svg>
  );
}

export function IconTrofeu({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M16 8h16v9a8 8 0 0 1-16 0V8Z" />
        <path d="M16 11h-4a5 5 0 0 0 5 5M32 11h4a5 5 0 0 1-5 5" opacity="0.6" />
        <path d="M24 25v7m-6 8h12l-2-8H20l-2 8Z" />
      </g>
    </svg>
  );
}

export function IconQuadra({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <rect x="5" y="10" width="38" height="28" rx="3" />
        <path d="M24 10v28" />
        <path d="M5 24h38" opacity="0.45" />
        <path d="M12 16v16M36 16v16" opacity="0.35" />
      </g>
    </svg>
  );
}

export function IconRaquete({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <ellipse cx="27" cy="17" rx="12" ry="13" transform="rotate(-20 27 17)" />
        <path d="M18 27 8 40" />
        <path d="M20 9 34 25M34 9 20 25" opacity="0.35" />
        <circle cx="9" cy="33" r="3" opacity="0.6" />
      </g>
    </svg>
  );
}

export function IconProfessor({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <circle cx="18" cy="13" r="5" />
        <path d="M8 38c0-6 4.5-10 10-10s10 4 10 10" />
        <path d="M32 14h12v10H36l-4 4v-4h0Z" opacity="0.7" />
      </g>
    </svg>
  );
}

export function IconRelogio({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l7 5" />
      </g>
    </svg>
  );
}

export function IconEscudo({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M24 6l14 5v12c0 9-6 15-14 19-8-4-14-10-14-19V11l14-5Z" />
        <path d="M18 24l4.5 4.5L31 20" />
      </g>
    </svg>
  );
}

export function IconConvite({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...stroke}>
        <rect x="6" y="12" width="28" height="20" rx="3" />
        <path d="M6 15l14 9 14-9" opacity="0.6" />
        <path d="M40 20v10m-5-5h10" />
      </g>
    </svg>
  );
}

// Ilustração: jogadores em quadra
export function ArtJogadores({ className }: P) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dkw-court" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <g {...stroke} strokeWidth={2}>
        <path d="M40 235 L100 95 L300 95 L360 235 Z" fill="url(#dkw-court)" />
        <path d="M60 190h280" opacity="0.4" />
        <path d="M200 95v140" opacity="0.4" />
        <path d="M120 140h160" opacity="0.25" />
        {/* jogador esquerda */}
        <circle cx="138" cy="128" r="9" />
        <path d="M138 137v22m0-14-14 8m14-8 12 6m-12 8-8 20m8-20 9 20" />
        <path d="M150 143a9 9 0 1 0 12-6" opacity="0.7" />
        {/* jogador direita */}
        <circle cx="272" cy="150" r="9" />
        <path d="M272 159v22m0-14 14 7m-14-7-12 7m12 14-8 20m8-20 9 20" />
        <path d="M286 166a10 10 0 1 1 10 8" opacity="0.7" />
        {/* bola e trajetória */}
        <path d="M170 120q40-40 78-6" strokeDasharray="5 7" opacity="0.6" />
        <circle cx="252" cy="116" r="6" />
      </g>
    </svg>
  );
}