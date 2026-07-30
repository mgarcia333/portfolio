export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      <div className="bg-noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="bg-scanlines absolute inset-0 opacity-30 mix-blend-soft-light" />
    </div>
  );
}
