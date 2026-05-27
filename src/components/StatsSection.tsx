import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, MapPin, Car, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Mutlu Müşteri" },
  { icon: MapPin, value: 150, suffix: "+", label: "Dünya Geneli Konum" },
  { icon: Car, value: 5000, suffix: "+", label: "Araç Filosu" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Müşteri Puanı", isDecimal: true },
];

function StatItem({
  stat,
}: {
  stat: (typeof stats)[0];
}) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          if (valueRef.current) {
            valueRef.current.textContent = stat.isDecimal
              ? obj.val.toFixed(1)
              : Math.floor(obj.val).toLocaleString("tr-TR");
          }
        },
      });
    });
    return () => ctx.revert();
  }, [stat.value, stat.isDecimal]);

  const Icon = stat.icon;

  return (
    <div
      className="flex flex-col items-center text-center group"
      data-testid={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="w-12 h-12 rounded-xl bg-[#00e0a0]/10 border border-[#00e0a0]/20 flex items-center justify-center mb-4 group-hover:bg-[#00e0a0]/20 transition-colors">
        <Icon size={22} className="text-[#00e0a0]" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-white mb-1">
        <span ref={valueRef}>0</span>
        <span className="text-[#00e0a0]">{stat.suffix}</span>
      </div>
      <p className="text-sm text-white/50 font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll(".stat-item") ?? [], {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        immediateRender: false,
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
    <section ref={sectionRef} className="py-16 border-t border-white/5 bg-[#0d0f14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
