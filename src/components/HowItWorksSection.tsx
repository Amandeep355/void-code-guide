const steps = [
  {
    number: "01",
    title: "Upload Your Code",
    description: "Drop a repository URL or upload a zip. We accept any language, any framework, any size.",
  },
  {
    number: "02",
    title: "AI Analyzes Structure",
    description: "Our engine parses dependencies, maps architecture, identifies patterns, and traces data flow.",
  },
  {
    number: "03",
    title: "Read the Explanation",
    description: "Receive a clear, layered breakdown—from high-level architecture to function-level detail.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-inverted relative px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
      {/* Subtle vertical line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 1px, #fff 1px, #fff 2px)",
          backgroundSize: "4px 100%",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">Process</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <span className="font-mono text-6xl md:text-7xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-100">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-semibold mt-4 mb-4">
                {step.title}
              </h3>
              <p className="font-body text-base leading-relaxed opacity-70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
