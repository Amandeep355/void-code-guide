import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CTASection = ({ onAnalyzeRepo }) => {
  return (
    <section id="workspace" className="section-inverted relative px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40 text-center">
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
  <Tabs defaultValue="code" className="w-full mt-10">

  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="code">Paste Code</TabsTrigger>
    <TabsTrigger value="repo">GitHub Repo</TabsTrigger>
    <TabsTrigger value="zip">Upload ZIP</TabsTrigger>
  </TabsList>

  <TabsContent value="code" className="mt-6">
    <Textarea
  placeholder="Paste your code here..."
  className="bg-zinc-900 text-white border-zinc-700"
/>
    <Button className="mt-4 w-full">
      Analyze Code
    </Button>
  </TabsContent>

  <TabsContent value="repo" className="mt-6">
    <Input
  placeholder="Paste GitHub repository URL..."
  className="bg-white text-black"
/>
  <Button className="mt-4 w-full" onClick={onAnalyzeRepo}>
  Analyze Repository
  </Button>
  </TabsContent>

  <TabsContent value="zip" className="mt-6">
    <Input type="file" className="bg-white text-black" />
    <Button className="mt-4 w-full">
      Upload & Analyze
    </Button>
  </TabsContent>

</Tabs>
      </div>
    </section>
  );
};

export default CTASection;
