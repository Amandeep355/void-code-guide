import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
<div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-14">

  <a href="/analyze">
    <Button size="lg" className="uppercase tracking-widest font-mono text-xs">
      Try It Free <ArrowRight size={16} strokeWidth={1.5} />
    </Button>
  </a>

  <a href="#features">
    <Button
      variant="outline"
      size="lg"
      className="uppercase tracking-widest font-mono text-xs"
    >
      View Demo
    </Button>
  </a>

</div>
};

export default HeroSection;