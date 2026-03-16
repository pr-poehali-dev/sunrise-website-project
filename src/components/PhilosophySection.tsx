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

export default function PhilosophySection() {
  return (
    <>
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
    </>
  );
}
