import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Users, Zap, DoorOpen, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Elektrik",
    seats: 5,
    transmission: "Otomatik",
    doors: 4,
    price: "₺2.490",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
    badge: "Trend",
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    seats: 5,
    transmission: "Otomatik",
    doors: 4,
    price: "₺3.450",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    badge: null,
  },
  {
    id: 3,
    name: "Ford Mustang",
    category: "Spor",
    seats: 4,
    transmission: "Otomatik",
    doors: 2,
    price: "₺3.150",
    image: "https://images.unsplash.com/photo-1548801009-d4a3be3c4b99?w=600&q=80",
    badge: "Popüler",
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    category: "Lüks",
    seats: 5,
    transmission: "Otomatik",
    doors: 4,
    price: "₺3.000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    badge: null,
  },
];

function CarCard({ car, index }: { car: typeof cars[0]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="car-card group relative bg-[#111318] border border-white/8 rounded-2xl overflow-hidden hover:border-[#00e0a0]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
      data-testid={`card-car-${car.id}`}
    >
      {car.badge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#00e0a0] text-[#0d0f14] text-xs font-bold rounded-full">
          {car.badge}
        </div>
      )}
      <button
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
        onClick={() => setLiked(!liked)}
        data-testid={`button-like-car-${car.id}`}
      >
        <Heart
          size={16}
          className={liked ? "fill-red-500 text-red-500" : "text-white/60"}
        />
      </button>

      <div className="relative h-44 overflow-hidden bg-[#0a0d12]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-white text-lg leading-tight">{car.name}</h3>
            <p className="text-[#00e0a0] text-sm font-medium">{car.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <Users size={13} />
            {car.seats} Koltuk
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={13} />
            {car.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <DoorOpen size={13} />
            {car.doors} Kapı
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/8">
          <div>
            <span className="text-xl font-black text-[#00e0a0]">{car.price}</span>
            <span className="text-white/40 text-sm"> / gün</span>
          </div>
          <button
            data-testid={`button-kirala-${car.id}`}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#00e0a0]/10 border border-[#00e0a0]/20 text-[#00e0a0] text-sm font-semibold rounded-xl hover:bg-[#00e0a0] hover:text-[#0d0f14] transition-all duration-200"
          >
            Kirala
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CarsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(gridRef.current?.querySelectorAll(".car-card") ?? [], {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="arabalar" ref={sectionRef} className="py-24 bg-[#0d0f14]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#00e0a0] text-xs font-bold uppercase tracking-widest mb-2">
              KEŞFET
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Popüler Seçimler
            </h2>
          </div>
          <a
            href="#arabalar"
            className="hidden sm:flex items-center gap-2 text-sm text-white/50 hover:text-[#00e0a0] transition-colors font-medium"
            data-testid="link-tum-araclar"
          >
            Tüm araçlara bak
            <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:border-[#00e0a0] transition-colors">
              <ArrowRight size={14} />
            </div>
          </a>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
