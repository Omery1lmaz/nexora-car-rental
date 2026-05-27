import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MapPin, Calendar, User, ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          headlineRef.current?.querySelectorAll(".word") ?? [],
          {
            y: 80,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          formRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #070a0e 0%, #0d1520 40%, #081410 80%, #0d0f14 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,224,160,0.08) 0%, transparent 60%),
                radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,100,200,0.06) 0%, transparent 60%)
              `,
            }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,224,160,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,224,160,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85"
            alt="Lüks araba"
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d0f14 0%, #0d0f14 20%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, #0d0f14 0%, transparent 30%, transparent 70%, #0d0f14 100%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <div ref={badgeRef} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00e0a0]/10 border border-[#00e0a0]/20 rounded-full text-[#00e0a0] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00e0a0] animate-pulse" />
              Türkiye genelinde 150+ konum
            </span>
          </div>

          <div ref={headlineRef} className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
              <div className="overflow-hidden">
                <span className="word inline-block text-white">ÖZGÜR </span>
                <span className="word inline-block text-white">YOLLAR.</span>
              </div>
              <div className="overflow-hidden">
                <span className="word inline-block text-[#00e0a0]">HARİKA </span>
                <span className="word inline-block text-[#00e0a0]">SEÇİMLER.</span>
              </div>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="mt-4 mb-10 text-lg text-white/60 leading-relaxed max-w-xl"
          >
            Premium arabalar. Esnek kiralama.
            <br />
            Yolculuğunuz, sizin tarzınızda.
          </p>

          <div
            ref={formRef}
            className="bg-[#111318]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-lg"
          >
            <p className="text-xs font-semibold text-[#00e0a0] uppercase tracking-wider mb-4">
              Mükemmel Aracını Bul
            </p>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <MapPin size={16} className="text-[#00e0a0] shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">
                    Alış Noktası
                  </p>
                  <select
                    data-testid="input-alis-noktasi"
                    className="w-full bg-transparent text-sm text-white/80 outline-none cursor-pointer"
                  >
                    <option value="">Konum seçin</option>
                    <option>İstanbul Havalimanı</option>
                    <option>Sabiha Gökçen Havalimanı</option>
                    <option>Ankara Esenboğa</option>
                    <option>İzmir Adnan Menderes</option>
                    <option>Antalya Havalimanı</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <Calendar size={16} className="text-[#00e0a0] shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">
                      Alış Tarihi
                    </p>
                    <input
                      data-testid="input-alis-tarihi"
                      type="date"
                      className="w-full bg-transparent text-sm text-white/80 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <Calendar size={16} className="text-[#00e0a0] shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">
                      İade Tarihi
                    </p>
                    <input
                      data-testid="input-iade-tarihi"
                      type="date"
                      className="w-full bg-transparent text-sm text-white/80 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <User size={16} className="text-[#00e0a0] shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">
                    Sürücü Yaşı
                  </p>
                  <select
                    data-testid="input-surucu-yasi"
                    className="w-full bg-transparent text-sm text-white/80 outline-none cursor-pointer"
                  >
                    <option>25+</option>
                    <option>21-24</option>
                    <option>18-20</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              data-testid="button-arac-bul"
              className="w-full flex items-center justify-center gap-2 bg-[#00e0a0] hover:bg-[#00c890] text-[#0d0f14] font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#00e0a0]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Araç Bul
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <a
        href="#ozellikler"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-[#00e0a0] transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
