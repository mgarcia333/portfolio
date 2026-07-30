import type { Locale } from "@/i18n";

function FlagES({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </svg>
  );
}

const STRIPE_HEIGHT = 20 / 9;
const RED_STRIPE_ROWS = [1, 3, 5, 7];

function FlagCA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#FCDD09" />
      {RED_STRIPE_ROWS.map((row) => (
        <rect key={row} y={row * STRIPE_HEIGHT} width="30" height={STRIPE_HEIGHT} fill="#DA121A" />
      ))}
    </svg>
  );
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#00247D" />
      <g stroke="#FFF" strokeWidth="3.4">
        <path d="M0,0 L30,20 M30,0 L0,20" />
      </g>
      <g stroke="#CF142B" strokeWidth="1.2">
        <path d="M0,0 L30,20 M30,0 L0,20" />
      </g>
      <g stroke="#FFF" strokeWidth="5.6">
        <path d="M15,0 V20 M0,10 H30" />
      </g>
      <g stroke="#CF142B" strokeWidth="3.2">
        <path d="M15,0 V20 M0,10 H30" />
      </g>
    </svg>
  );
}

export const flagByLocale: Record<Locale, (props: { className?: string }) => React.JSX.Element> = {
  es: FlagES,
  ca: FlagCA,
  en: FlagGB,
};
