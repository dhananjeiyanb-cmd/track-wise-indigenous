import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProposalSidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "cover", title: "Cover Page", number: "1" },
  { id: "toc", title: "Table of Contents", number: "2" },
  { id: "executive", title: "Executive Summary", number: "3" },
  { id: "objectives", title: "Objectives & Alignment", number: "4" },
  { id: "compliance", title: "Compliance Matrix", number: "5" },
  { id: "technical", title: "Technical Approach", number: "6" },
  { id: "subsystems", title: "Sub-system Descriptions", number: "7" },
  { id: "data", title: "Data Acquisition", number: "8" },
  { id: "hardware", title: "Hardware Design", number: "9" },
  { id: "software", title: "Software Architecture", number: "10" },
  { id: "validation", title: "Validation & Testing", number: "11" },
  { id: "project", title: "Project Plan", number: "12" },
  { id: "cost", title: "Cost & Commercials", number: "13" },
  { id: "team", title: "Team & Experience", number: "14" },
  { id: "maintenance", title: "Maintenance & Scalability", number: "15" },
  { id: "risk", title: "Risk Assessment", number: "16" },
  { id: "deliverables", title: "Deliverables", number: "17" },
  { id: "annexures", title: "Annexures", number: "18" },
];

export function ProposalSidebar({ currentSection, onSectionChange }: ProposalSidebarProps) {
  return (
    <div className="w-80 border-r bg-card">
      <div className="p-6 border-b">
        <h2 className="font-semibold text-lg">ITMS Proposal</h2>
        <p className="text-sm text-muted-foreground mt-1">Indigenous Contactless Track Monitoring</p>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                currentSection === section.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium w-6">{section.number}</span>
                <span>{section.title}</span>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}