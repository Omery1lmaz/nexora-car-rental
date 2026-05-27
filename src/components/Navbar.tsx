import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { label: "Anasayfa", href: "#anasayfa" },
  { label: "Arabalar", href: "#arabalar" },
  { label: "Fırsatlar", href: "#firsatlar" },
  { label: "Konumlar", href: "#konumlar" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0f14]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#anasayfa" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-[#00e0a0] flex items-center justify-center font-black text-[#0d0f14] text-lg group-hover:scale-110 transition-transform">
            R
          </div>
          <span className="font-bold text-xl text-white">
            Roadify<span className="text-[#00e0a0]">TR</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 hover:text-[#00e0a0] transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00e0a0] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            data-testid="button-giris-yap"
            className="px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:border-[#00e0a0] hover:text-[#00e0a0] transition-all duration-200"
          >
            Giriş Yap
          </button>
          <button
            data-testid="button-rezervasyon"
            className="px-5 py-2 text-sm font-medium text-[#0d0f14] bg-[#00e0a0] rounded-full hover:bg-[#00c890] transition-all duration-200 font-semibold"
          >
            Hemen Rezervasyon
          </button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0f14]/95 backdrop-blur-md border-t border-white/5 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-white/70 hover:text-[#00e0a0] border-b border-white/5 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 py-2 text-sm text-white border border-white/20 rounded-full">
              Giriş Yap
            </button>
            <button className="flex-1 py-2 text-sm font-semibold text-[#0d0f14] bg-[#00e0a0] rounded-full">
              Rezervasyon
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
