const stats = [
  { value: "8", label: "Artikel Edukasi", suffix: "" },
  { value: "1", label: "Video Pembelajaran", suffix: "" },
  { value: "35", label: "Pengguna Aktif", suffix: "" },
  { value: "24/7", label: "AI Advisor", suffix: "" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-foreground/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
