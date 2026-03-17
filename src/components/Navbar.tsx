import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground">
      <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 h-14">
        
        <span className="font-display text-lg font-bold tracking-tight">
          CodeExplainer
        </span>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors duration-100"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors duration-100"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-100"
          >
            Docs
          </a>
        </div>

        <a href="/analyze">
          <Button
            size="sm"
            className="uppercase tracking-widest font-mono text-xs"
          >
            Get Started
          </Button>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;