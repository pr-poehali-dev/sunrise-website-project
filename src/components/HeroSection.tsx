import { useEffect, useRef, useState } from "react";

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  top: (i * 13.7) % 70,
  left: (i * 17.3) % 100,
  opacity: 0.4 + (i % 6) * 0.1,
}));

export default function HeroSection() {
  const [sunProgress, setSunProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 4000;
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setSunProgress(eased);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const getSkyGradient = () => {
    const p = sunProgress;
    if (p < 0.3) {
      const t = p / 0.3;
      return `linear-gradient(to bottom, 
        hsl(${240 + t * 10}, ${60 + t * 20}%, ${8 + t * 5}%) 0%, 
        hsl(${270 + t * 20}, ${70 + t * 15}%, ${12 + t * 8}%) 35%,
        hsl(${300 + t * 30}, ${60 + t * 20}%, ${18 + t * 15}%) 65%,
        hsl(${320 + t * 30}, ${50 + t * 30}%, ${22 + t * 20}%) 100%)`;
    } else if (p < 0.7) {
      const t = (p - 0.3) / 0.4;
      return `linear-gradient(to bottom, 
        hsl(${250 + t * 30}, ${70 + t * 10}%, ${13 + t * 20}%) 0%, 
        hsl(${290 + t * 50}, ${65 + t * 10}%, ${20 + t * 25}%) 25%,
        hsl(${10 + t * 15}, ${80 + t * 10}%, ${35 + t * 20}%) 55%,
        hsl(${30 + t * 10}, 90%, ${55 + t * 15}%) 80%,
        hsl(45, 100%, ${70 + t * 10}%) 100%)`;
    } else {
      const t = (p - 0.7) / 0.3;
      return `linear-gradient(to bottom, 
        hsl(${210 + t * 10}, ${80 - t * 20}%, ${50 + t * 10}%) 0%, 
        hsl(${200 + t * 15}, ${90 - t * 10}%, ${65 + t * 10}%) 30%,
        hsl(${40 + t * 5}, 100%, ${75 + t * 5}%) 65%,
        hsl(48, 100%, ${88 + t * 5}%) 100%)`;
    }
  };

  const sunOpacity = Math.min(sunProgress * 3, 1);
  const sunSize = 60 + sunProgress * 40;
  const glowSize = sunProgress * 200;
  const glowOpacity = sunProgress * 0.6;
  const raysOpacity = Math.max(0, (sunProgress - 0.5) * 2);
  const starsOpacity = Math.max(0, 1 - sunProgress * 2.5);
  const sunBottomPct = 15 + sunProgress * 20;

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: getSkyGradient() }}
    >
      {/* Звёзды */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: starsOpacity }}>
        {STARS.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ width: s.size, height: s.size, top: `${s.top}%`, left: `${s.left}%`, opacity: s.opacity }}
          />
        ))}
      </div>

      {/* Горизонтальное свечение */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "50%",
          background: `radial-gradient(ellipse 80% 50% at 50% 100%, rgba(244,160,74,${glowOpacity * 0.8}) 0%, rgba(232,132,92,${glowOpacity * 0.5}) 30%, rgba(196,115,106,${glowOpacity * 0.3}) 60%, transparent 100%)`,
          opacity: sunProgress,
        }}
      />

      {/* Солнце */}
      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          bottom: `${sunBottomPct}%`,
          opacity: sunOpacity,
        }}
      >
        {/* Лучи */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: raysOpacity, animation: "rays-spin 25s linear infinite" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: 2,
                height: sunSize * 1.8,
                background: "linear-gradient(to top, transparent, rgba(255,215,0,0.6), transparent)",
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: "center center",
                borderRadius: 4,
              }}
            />
          ))}
        </div>

        {/* Ореол */}
        <div
          className="absolute"
          style={{
            width: sunSize + glowSize,
            height: sunSize + glowSize,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(244,160,74,0.08) 40%, transparent 70%)",
          }}
        />

        {/* Диск */}
        <div
          style={{
            width: sunSize,
            height: sunSize,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #fff9c4, #ffd700 40%, #f4a04a 80%, #e8845c 100%)",
            boxShadow: `0 0 ${sunSize * 0.5}px rgba(255,215,0,0.8), 0 0 ${sunSize}px rgba(244,160,74,0.5), 0 0 ${sunSize * 2}px rgba(232,132,92,0.3)`,
          }}
        />
      </div>

      {/* Линия горизонта */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: "15%",
          height: 1,
          background: `linear-gradient(to right, transparent, rgba(255,215,0,${sunProgress * 0.8}), transparent)`,
        }}
      />

      {/* Силуэт горизонта */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "15%" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" style={{ opacity: 0.6 }}>
          <path
            d="M0,80 C180,40 360,100 540,60 C720,20 900,90 1080,50 C1260,10 1380,70 1440,55 L1440,120 L0,120 Z"
            style={{ fill: "#0d0d1a" }}
          />
        </svg>
      </div>

      {/* Текст */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          style={{
            opacity: Math.max(0, sunProgress * 2 - 0.3),
            transform: `translateY(${Math.max(0, (1 - sunProgress) * 50)}px)`,
          }}
          className="mb-4"
        >
          <span className="font-golos text-sm tracking-[0.3em] uppercase" style={{ color: "rgba(255,215,0,0.9)" }}>
            Образовательная платформа
          </span>
        </div>

        <h1
          className="font-cormorant leading-none mb-6 tracking-wide"
          style={{
            fontSize: "clamp(4rem, 13vw, 11rem)",
            fontWeight: 800,
            background: `linear-gradient(135deg, #fff5e0 0%, #f5c842 40%, #f4a04a 70%, #e8845c 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: `drop-shadow(0 0 30px rgba(255,215,0,${sunProgress * 0.6}))`,
            opacity: Math.max(0, sunProgress * 2 - 0.4),
            transform: `translateY(${Math.max(0, (1 - sunProgress) * 40)}px)`,
            letterSpacing: "0.05em",
          }}
        >
          Морнинг
        </h1>

        <p
          className="font-golos text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{
            color: "rgba(255,245,224,0.9)",
            textShadow: "0 1px 10px rgba(0,0,0,0.6)",
            opacity: Math.max(0, sunProgress * 2.5 - 1.2),
            transform: `translateY(${Math.max(0, (1 - sunProgress) * 30)}px)`,
          }}
        >
          Каждый новый день — возможность узнать что-то важное.<br />
          Начните своё обучение прямо сейчас.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: Math.max(0, sunProgress * 3 - 2),
            transform: `translateY(${Math.max(0, (1 - sunProgress) * 20)}px)`,
          }}
        >
          <button
            className="px-8 py-4 font-golos font-semibold text-base rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f4a04a, #ffd700)",
              color: "#1a0a2e",
              boxShadow: "0 4px 30px rgba(244,160,74,0.5)",
            }}
          >
            Начать обучение
          </button>
          <button
            className="px-8 py-4 font-golos font-medium text-base rounded-full border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "rgba(255,245,224,0.4)",
              color: "rgba(255,245,224,0.9)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            Смотреть курсы
          </button>
        </div>
      </div>

      {/* Скролл-хинт */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: Math.max(0, sunProgress * 2 - 1), color: "rgba(255,245,224,0.6)" }}
      >
        <span className="font-golos text-xs tracking-widest uppercase">Пролистайте</span>
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-current to-transparent animate-pulse" />
      </div>
    </div>
  );
}