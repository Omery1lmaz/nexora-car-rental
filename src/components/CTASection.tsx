import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gift, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="firsatlar" className="py-16 bg-[#0d0f14]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-2xl border border-[#00e0a0]/20 p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, #0a1a14 0%, #0d1520 50%, #0a1208 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 80% 50%, #00e0a0 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#00e0a0]/15 border border-[#00e0a0]/30 flex items-center justify-center shrink-0">
                <Gift size={26} className="text-[#00e0a0]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                  RoadifyTR Ödüllerine Katıl
                </h3>
                <p className="text-white/50 text-sm max-w-md">
                  Puan kazan, ayrıcalıkların kilidini aç ve özel üye avantajlarının tadını çıkar.
                </p>
              </div>
            </div>

            <button
              data-testid="button-hemen-katil"
              className="shrink-0 flex items-center gap-2 px-7 py-3.5 bg-[#00e0a0] hover:bg-[#00c890] text-[#0d0f14] font-bold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#00e0a0]/30 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Hemen Katıl
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
