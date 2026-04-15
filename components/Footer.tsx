export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20">
      <div className="section-shell flex flex-col gap-6 py-10 text-sm text-orange-50/70 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-black uppercase tracking-wider text-white">Lahor Zeera</p>
          <p className="mt-1">Premium Jeera Soda · Desi Roots, Global Pour</p>
        </div>
        <div className="flex gap-5">
          <a href="#about" className="transition hover:text-orange-200">
            About
          </a>
          <a href="#products" className="transition hover:text-orange-200">
            Products
          </a>
          <a href="#experience" className="transition hover:text-orange-200">
            Experience
          </a>
        </div>
      </div>
    </footer>
  );
}
