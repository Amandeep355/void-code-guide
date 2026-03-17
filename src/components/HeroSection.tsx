import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative px-6 md:px-8 lg:px-12 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative element */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[8px] w-24 bg-foreground" />
        <div className="h-6 w-6 border-2 border-foreground" />
      </div>

      <h1 className="font-display tracking-tighter leading-none">
        <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
          Decode
        </span>
        <span className="block text-3xl md:text-5xl lg:text-6xl font-light mt-2 md:mt-4">
          Any Codebase, Instantly.
        </span>
      </h1>

      <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
        AI-powered understanding for complex repositories. Upload your codebase and receive clear, structured explanations of architecture, patterns, and logic—in seconds.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-14">
        <Button size="lg" className="uppercase tracking-widest font-mono text-xs">
          Try It Free <ArrowRight size={16} strokeWidth={1.5} />
        </Button>
        <Button variant="outline" size="lg" className="uppercase tracking-widest font-mono text-xs">
          View Demo
        </Button>
      </div>

      <div className="mt-16 md:mt-24 flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>React</span>
        <span className="h-4 w-px bg-muted-foreground" />
        <span>Python</span>
        <span className="h-4 w-px bg-muted-foreground" />
        <span>TypeScript</span>
        <span className="h-4 w-px bg-muted-foreground" />
        <span>Go</span>
        <span className="h-4 w-px bg-muted-foreground" />
        <span>Rust</span>
      </div>
    </section>
  );
};

export default HeroSection;
