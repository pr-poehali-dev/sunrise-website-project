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

export default function CoursesSection() {
  return (
    <>
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
    </>
  );
}
