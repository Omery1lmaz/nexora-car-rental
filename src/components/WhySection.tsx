import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "Gizli ücret yok",
  "Kolay alış ve iade",
  "Temiz & bakımlı araçlar",
  "Sadakat ödülleri & özel fırsatlar",
];

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(leftRef.current?.querySelectorAll(".reason-item") ?? [], {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hizmetler" ref={sectionRef} className="py-24 bg-[#080b0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef}>
            <p className="text-[#00e0a0] text-xs font-bold uppercase tracking-widest mb-3">
              NEDEN ROADİFYTR?
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Yola çıkmayı{" "}
              <span className="text-[#00e0a0]">kolaylaştırıyoruz.</span>
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              Binlerce mutlu müşteri ile Türkiye&apos;nin en güvenilir araç kiralama platformuyuz.
              Size en iyi deneyimi sunmak için buradayız.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li
                  key={i}
                  className="reason-item flex items-center gap-3 group"
                  data-testid={`item-reason-${i}`}
                >
                  <CheckCircle
                    size={20}
                    className="text-[#00e0a0] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-white/80 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={rightRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Yolculuk keyfi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-[#111318]/90 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <Quote size={24} className="text-[#00e0a0] mb-3" />
                  <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                    &ldquo;RoadifyTR seyahatimizi unutulmaz kıldı. Harika araç, muhteşem hizmet ve çok iyi fiyat!&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00e0a0] to-[#0090cc] flex items-center justify-center font-bold text-[#0d0f14] text-sm">
                      JT
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">James T.</p>
                      <p className="text-white/40 text-xs">Yol Gezgini</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
