import { Twitter, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Hızlı Erişim": ["Anasayfa", "Arabalar", "Fırsatlar", "Hakkımızda"],
  "Hizmetler": ["Günlük Kiralama", "Haftalık Kiralama", "Aylık Kiralama", "Havalimanı Transfer"],
  "Destek": ["SSS", "Müşteri Desteği", "Konum Bul", "Üyelik Programı"],
};

export default function Footer() {
  return (
    <footer id="hakkimizda" className="bg-[#080b0f] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#00e0a0] flex items-center justify-center font-black text-[#0d0f14] text-lg">
                R
              </div>
              <span className="font-bold text-xl text-white">
                Roadify<span className="text-[#00e0a0]">TR</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Türkiye&apos;nin en güvenilir araç kiralama platformu. Premium araçlar, esnek fiyatlar ve 7/24 destek.
            </p>

            <div className="space-y-2.5 text-sm text-white/40">
              <div className="flex items-center gap-2.5 hover:text-[#00e0a0] transition-colors cursor-pointer">
                <Phone size={14} className="text-[#00e0a0]" />
                +90 (212) 123 45 67
              </div>
              <div className="flex items-center gap-2.5 hover:text-[#00e0a0] transition-colors cursor-pointer">
                <Mail size={14} className="text-[#00e0a0]" />
                destek@roadifytr.com
              </div>
              <div className="flex items-center gap-2.5 hover:text-[#00e0a0] transition-colors cursor-pointer">
                <MapPin size={14} className="text-[#00e0a0]" />
                İstanbul, Türkiye
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-[#00e0a0] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2024 RoadifyTR. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-4">
            {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00e0a0] hover:border-[#00e0a0]/30 transition-all duration-200"
                data-testid={`link-social-${i}`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
