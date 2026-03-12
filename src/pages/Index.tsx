import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    emoji: "🎨",
    title: "Дизайн и творчество",
    desc: "Научитесь создавать визуальные истории, которые меняют восприятие мира",
    duration: "3 месяца",
    students: "1 240",
    level: "Начинающий",
  },
  {
    id: 2,
    emoji: "💡",
    title: "Мышление и философия",
    desc: "Критическое мышление, логика и глубокое понимание окружающей реальности",
    duration: "2 месяца",
    students: "870",
    level: "Любой уровень",
  },
  {
    id: 3,
    emoji: "🌿",
    title: "Природа и экология",
    desc: "Откройте связь между человеком и природой через науку и практику",
    duration: "4 месяца",
    students: "2 100",
    level: "Продвинутый",
  },
  {
    id: 4,
    emoji: "✍️",
    title: "Литература и письмо",
    desc: "От первого слова до законченного произведения — путь настоящего автора",
    duration: "5 месяцев",
    students: "650",
    level: "Начинающий",
  },
  {
    id: 5,
    emoji: "🎵",
    title: "Музыка и звук",
    desc: "Теория, практика, импровизация — язык звука без границ и барьеров",
    duration: "6 месяцев",
    students: "990",
    level: "Начинающий",
  },
  {
    id: 6,
    emoji: "🔭",
    title: "Астрономия и космос",
    desc: "Вселенная ждёт: от звёздных карт до последних открытий астрофизики",
    duration: "3 месяца",
    students: "1 560",
    level: "Любой уровень",
  },
];

const testimonials = [
  {
    name: "Мария Соколова",
    role: "Дизайнер",
    text: "После курса я смотрю на мир совсем иначе. Рассвет каждого дня стал для меня источником новых идей.",
    avatar: "М",
  },
  {
    name: "Алексей Громов",
    role: "Преподаватель",
    text: "Лучшая образовательная платформа, на которой я учился. Глубина материала поражает.",
    avatar: "А",
  },
  {
    name: "Елена Вишнева",
    role: "Фотограф",
    text: "Курс по философии изменил мой подход к работе. Теперь каждый снимок — это осознанный выбор.",
    avatar: "Е",
  },
];

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  top: (i * 13.7) % 70,
  left: (i * 17.3) % 100,
  opacity: 0.4 + (i % 6) * 0.1,
}));

export default function Index() {
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
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: "#0d0d1a" }}>
      {/* HERO */}
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
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" style={{ display: "block" }}>
            <path
              d="M0 120 L0 80 Q50 70 80 60 Q100 50 120 70 L140 55 L160 70 Q200 50 220 65 L240 45 L260 65 Q300 40 340 70 Q380 50 400 65 L420 50 L440 65 Q500 35 540 60 L560 40 L580 60 Q640 30 680 55 L700 38 L720 55 Q780 25 820 50 Q860 30 880 50 L900 35 L920 50 Q980 20 1020 45 L1040 28 L1060 45 Q1120 15 1160 40 Q1200 20 1240 40 L1260 25 L1280 40 Q1340 10 1380 35 L1440 50 L1440 120 Z"
              fill={`hsl(${270 - sunProgress * 200}, ${50 - sunProgress * 30}%, ${8 + sunProgress * 12}%)`}
            />
          </svg>
        </div>

        {/* Текст */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ marginTop: "-8%" }}>
          <div
            style={{
              opacity: Math.max(0, sunProgress * 2 - 0.6),
              transform: `translateY(${Math.max(0, (1 - sunProgress) * 30)}px)`,
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
            Рассвет
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

      {/* STATS */}
      <div className="py-20 px-6" style={{ background: "linear-gradient(to bottom, #fff5e0, #ffffff)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "12+", label: "курсов" },
            { num: "7 400", label: "студентов" },
            { num: "98%", label: "довольны результатом" },
            { num: "3", label: "года опыта" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-cormorant font-light" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#e8845c", lineHeight: 1 }}>
                {s.num}
              </div>
              <div className="font-golos text-sm mt-2" style={{ color: "#8b7aaa" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COURSES */}
      <div className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-golos text-sm tracking-[0.3em] uppercase mb-4 block" style={{ color: "#e8845c" }}>
              Наши программы
            </span>
            <h2 className="font-cormorant font-light" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#1a0a2e", lineHeight: 1.1 }}>
              Курсы для каждого
            </h2>
            <p className="font-golos text-lg mt-4 max-w-xl mx-auto" style={{ color: "#8b7aaa" }}>
              Выберите направление и начните путь к новым знаниям уже сегодня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={course.id}
                className="rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: i % 3 === 0 ? "linear-gradient(135deg, #fff5e0, #fff)" : i % 3 === 1 ? "linear-gradient(135deg, #f8f4ff, #fff)" : "linear-gradient(135deg, #fff4f2, #fff)",
                  border: "1px solid rgba(196,115,106,0.15)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(232,132,92,0.15), 0 4px 20px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)"; }}
              >
                <div className="text-4xl mb-4">{course.emoji}</div>
                <h3 className="font-cormorant font-semibold mb-2" style={{ fontSize: "1.5rem", color: "#1a0a2e" }}>
                  {course.title}
                </h3>
                <p className="font-golos text-sm mb-6" style={{ color: "#8b7aaa", lineHeight: 1.6 }}>
                  {course.desc}
                </p>
                <div className="flex items-center gap-4 text-xs font-golos" style={{ color: "#b09ab0" }}>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    {course.students}
                  </span>
                  <span className="ml-auto px-3 py-1 rounded-full text-xs" style={{ background: "rgba(232,132,92,0.1)", color: "#e8845c" }}>
                    {course.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="py-32 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #3d2b6e 100%)" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,160,74,0.08) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div
            className="mx-auto mb-8 flex items-center justify-center"
            style={{
              width: 80, height: 80, borderRadius: "50%",
              background: "linear-gradient(135deg, #f4a04a, #ffd700)",
              boxShadow: "0 0 40px rgba(244,160,74,0.4)",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <span style={{ fontSize: 36 }}>☀️</span>
          </div>
          <h2 className="font-cormorant font-light mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff5e0", lineHeight: 1.2 }}>
            «Знание — это свет,<br /><em>который не гаснет»</em>
          </h2>
          <p className="font-golos text-lg mb-10" style={{ color: "rgba(255,245,224,0.65)", lineHeight: 1.8 }}>
            Мы верим, что каждый человек способен на большее. Наша платформа создана, 
            чтобы помочь вам найти своё направление и идти по нему с уверенностью — 
            как солнце, которое восходит каждое утро.
          </p>
          <button
            className="px-8 py-4 rounded-full font-golos font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "transparent", border: "1px solid rgba(255,215,0,0.5)", color: "#ffd700" }}
          >
            Узнать о нас подробнее
          </button>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="py-24 px-6" style={{ background: "#faf9f7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-golos text-sm tracking-[0.3em] uppercase mb-4 block" style={{ color: "#e8845c" }}>
              Отзывы
            </span>
            <h2 className="font-cormorant font-light" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#1a0a2e" }}>
              Что говорят студенты
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8"
                style={{ background: "#fff", border: "1px solid rgba(196,115,106,0.12)", boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
              >
                <div className="text-3xl mb-4" style={{ color: "#ffd700" }}>❝</div>
                <p className="font-cormorant text-lg italic mb-6" style={{ color: "#3d2b6e", lineHeight: 1.7 }}>
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full font-golos font-semibold text-sm flex-shrink-0"
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #e8845c, #f4a04a)", color: "#fff" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-golos font-semibold text-sm" style={{ color: "#1a0a2e" }}>{t.name}</div>
                    <div className="font-golos text-xs" style={{ color: "#8b7aaa" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-32 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f4a04a 0%, #ffd700 40%, #fff5c0 100%)" }}>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-cormorant font-light mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#1a0a2e", lineHeight: 1.1 }}>
            Ваш рассвет<br />начинается сейчас
          </h2>
          <p className="font-golos text-lg mb-10" style={{ color: "rgba(26,10,46,0.7)" }}>
            Запишитесь на курс и сделайте первый шаг навстречу новому дню
          </p>
          <button
            className="px-10 py-5 rounded-full font-golos font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{ background: "#1a0a2e", color: "#ffd700", boxShadow: "0 8px 40px rgba(26,10,46,0.3)" }}
          >
            Записаться бесплатно
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-12 px-6 text-center" style={{ background: "#0d0d1a", color: "rgba(255,245,224,0.4)" }}>
        <div className="font-cormorant text-2xl mb-2" style={{ color: "rgba(255,215,0,0.6)" }}>
          Рассвет
        </div>
        <p className="font-golos text-sm">
          © 2026 Образовательная платформа. Все права защищены.
        </p>
      </div>
    </div>
  );
}