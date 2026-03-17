const stats = [
  { value: "40+", label: "Languages Supported" },
  { value: "10s", label: "Average Analysis Time" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "50K+", label: "Repos Analyzed" },
];

const StatsSection = () => {
  return (
    <section className="section-inverted relative px-6 md:px-8 lg:px-12 py-20 md:py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 1px, #fff 1px, #fff 2px)",
          backgroundSize: "4px 100%",
          opacity: 0.03,
        }}
      />
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {stat.value}
            </span>
            <p className="font-mono text-xs uppercase tracking-widest mt-3 opacity-60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
