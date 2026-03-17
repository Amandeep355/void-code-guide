import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-inverted relative px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40 text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at top center, #ffffff, transparent 70%)",
          opacity: 0.05,
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          Stop Reading Code.<br />Start Understanding It.
        </h2>
        <p className="font-body text-lg md:text-xl opacity-70 mb-12 max-w-xl mx-auto">
          Join thousands of developers who have replaced hours of code review with minutes of AI-powered clarity.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-background text-background hover:bg-background hover:text-foreground uppercase tracking-widest font-mono text-xs"
        >
          Start For Free <ArrowRight size={16} strokeWidth={1.5} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
