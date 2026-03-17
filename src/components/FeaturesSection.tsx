import { FileText, GitBranch, Layers, Search, Zap, Code } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Architecture Mapping",
    description: "Understand how modules connect. See the full dependency graph and component hierarchy at a glance.",
  },
  {
    icon: Search,
    title: "Pattern Recognition",
    description: "Automatically identifies design patterns, anti-patterns, and architectural decisions in your codebase.",
  },
  {
    icon: GitBranch,
    title: "Data Flow Tracing",
    description: "Follow data through your application—from API calls to state management to rendered output.",
  },
  {
    icon: FileText,
    title: "Documentation Generation",
    description: "Produce rich, structured documentation from raw code. Export as Markdown, PDF, or interactive HTML.",
  },
  {
    icon: Zap,
    title: "Instant Onboarding",
    description: "New to a project? Get a comprehensive walkthrough tailored to your role—frontend, backend, or full-stack.",
  },
  {
    icon: Code,
    title: "Multi-Language Support",
    description: "Works with 40+ languages. From TypeScript to Rust, Python to Go—we parse them all.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Capabilities</p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        What It Does
      </h2>
      <p className="font-body text-lg text-muted-foreground max-w-2xl mb-16 md:mb-20">
        A comprehensive toolkit for understanding, navigating, and documenting  codebase—powered by advanced AI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-foreground">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`card-invert p-8 md:p-10 cursor-default border-foreground ${
              i < 3 ? "border-b" : ""
            } ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 === 0 && i < 4 ? "md:border-r lg:border-r-0" : ""} ${i < 4 ? "md:border-b lg:border-b-0" : ""} ${i < 3 ? "" : "lg:border-t"}`}
          >
            <feature.icon size={24} strokeWidth={1.5} className="mb-6" />
            <h3 className="font-display text-xl font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="font-body text-sm leading-relaxed opacity-70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
