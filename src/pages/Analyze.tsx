import { useState } from "react";
import Navbar from "@/components/Navbar";
import RepoExplorer from "@/components/RepoExplorer";
import CTASection from "@/components/CTASection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Analyze = () => {

  // controls when repo explorer appears
  const [showExplorer, setShowExplorer] = useState(false);

  return (
    <div className="noise-overlay min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto pt-32 px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT PANEL — INPUT */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>

            <CardContent>
              <CTASection onAnalyzeRepo={() => setShowExplorer(true)} />
            </CardContent>
          </Card>

          {/* RIGHT PANEL — RESULTS */}
          <Card className="min-h-[500px]">
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>

            <CardContent>

  {!showExplorer ? (
    <div className="flex items-center justify-center h-[350px] text-center text-sm text-muted-foreground">
      Paste a GitHub repository and click
      <span className="mx-1 font-semibold text-white">
        Analyze Repository
      </span>
      to view the project structure.
    </div>
  ) : (

    <Tabs defaultValue="explorer" className="w-full">

      <TabsList className="grid grid-cols-4 w-full mb-4">
        <TabsTrigger value="explorer">Explorer</TabsTrigger>
        <TabsTrigger value="explanation">Explanation</TabsTrigger>
        <TabsTrigger value="optimized">Optimized Code</TabsTrigger>
        <TabsTrigger value="visual">Visualization</TabsTrigger>
      </TabsList>

      <TabsContent value="explorer">
        <RepoExplorer />
      </TabsContent>

      <TabsContent value="explanation">
        <div className="text-sm text-muted-foreground">
          AI explanation of the selected file will appear here.
        </div>
      </TabsContent>

      <TabsContent value="optimized">
        <div className="text-sm text-muted-foreground">
          Optimized version of the code will appear here.
        </div>
      </TabsContent>

      <TabsContent value="visual">
        <div className="text-sm text-muted-foreground">
          Algorithm or architecture visualization will appear here.
        </div>
      </TabsContent>

    </Tabs>

  )}

</CardContent>
          </Card>

        </div>

      </main>
    </div>
  );
};

export default Analyze;