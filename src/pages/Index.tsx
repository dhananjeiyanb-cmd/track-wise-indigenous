import { useState } from "react";
import { ProposalSidebar } from "@/components/ProposalSidebar";
import { CoverPage } from "@/components/sections/CoverPage";
import { ComplianceMatrix } from "@/components/sections/ComplianceMatrix";
import { ProjectPlan } from "@/components/sections/ProjectPlan";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("cover");

  const renderSection = () => {
    switch (currentSection) {
      case "cover":
        return <CoverPage />;
      case "compliance":
        return <ComplianceMatrix />;
      case "project":
        return <ProjectPlan />;
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Section Under Development</h3>
              <p className="text-muted-foreground">This section is being prepared and will be available soon.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <ProposalSidebar 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <div className="flex-1">
        <ScrollArea className="h-screen">
          <main className="p-8 max-w-6xl mx-auto">
            {renderSection()}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Index;
