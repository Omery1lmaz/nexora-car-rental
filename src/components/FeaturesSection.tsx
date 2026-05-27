import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Calendar, Car, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "En İyi Fiyat Garantisi",
    desc: "Her zaman en uygun fiyatları sunuyoruz.",
  },
  {
    icon: Calendar,
    title: "Esnek Rezervasyon",
    desc: "İstediğiniz zaman değiştirin veya iptal edin.",
  },
  {
    icon: Car,
    title: "Geniş Araç Yelpazesi",
    desc: "Ekonomikten lükse, her ihtiyaç için araç.",
  },
  {
    icon: Headphones,
    title: "7/24 Müşteri Desteği",
    desc: "Her an yanınızdayız, size yardımcı olmaya hazırız.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.querySelectorAll(".feature-card") ?? [], {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ozellikler"
      ref={sectionRef}
      className="relative py-20 border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f14] via-[#0a0f1a] to-[#0d0f14]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#00e0a0] text-xs font-bold uppercase tracking-widest mb-3">
            AVANTAJLARIMIZ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Neden Bizi Seçmelisiniz?
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="feature-card group p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#00e0a0]/20 transition-all duration-300"
                data-testid={`card-feature-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00e0a0]/10 border border-[#00e0a0]/20 flex items-center justify-center mb-4 group-hover:bg-[#00e0a0]/20 transition-colors">
                  <Icon size={22} className="text-[#00e0a0]" />
                </div>
                <h3 className="font-bold text-white mb-2 text-base">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
