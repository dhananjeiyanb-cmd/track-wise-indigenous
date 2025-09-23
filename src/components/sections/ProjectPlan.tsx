import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const milestones = [
  {
    milestone: "M1",
    description: "Detailed design & specifications",
    duration: "6 weeks",
    completion: "Week 6",
    status: "planned"
  },
  {
    milestone: "M2", 
    description: "Hardware prototyping",
    duration: "8 weeks",
    completion: "Week 14",
    status: "planned"
  },
  {
    milestone: "M3",
    description: "Software development (core)",
    duration: "10 weeks", 
    completion: "Week 24",
    status: "planned"
  },
  {
    milestone: "M4",
    description: "Integration & bench testing",
    duration: "6 weeks",
    completion: "Week 30", 
    status: "planned"
  },
  {
    milestone: "M5",
    description: "Field validation & demo",
    duration: "6 weeks",
    completion: "Week 36",
    status: "planned"
  },
  {
    milestone: "M6",
    description: "Final deliverables & documentation",
    duration: "4 weeks",
    completion: "Week 40",
    status: "planned"
  }
];

const workPackages = [
  { name: "System Design", progress: 0, color: "bg-blue-500" },
  { name: "Hardware Development", progress: 0, color: "bg-green-500" },
  { name: "Software Development", progress: 0, color: "bg-purple-500" },
  { name: "Integration & Testing", progress: 0, color: "bg-orange-500" },
  { name: "Validation & Documentation", progress: 0, color: "bg-red-500" }
];

export function ProjectPlan() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-4">Project Plan & Milestones</h2>
        <p className="text-muted-foreground mb-6">
          Comprehensive project timeline with key milestones, deliverables, and resource allocation.
        </p>
      </div>

      <Card style={{ boxShadow: "var(--shadow-card)" }}>
        <CardHeader>
          <CardTitle>Project Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Milestone</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Expected Completion</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {milestones.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge variant="outline">{item.milestone}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{item.description}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.completion}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card style={{ boxShadow: "var(--shadow-card)" }}>
          <CardHeader>
            <CardTitle>Work Package Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {workPackages.map((pkg, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{pkg.name}</span>
                  <span className="text-sm text-muted-foreground">{pkg.progress}%</span>
                </div>
                <Progress value={pkg.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card style={{ boxShadow: "var(--shadow-card)" }}>
          <CardHeader>
            <CardTitle>Key Deliverables</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Fully functional prototype system
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Technical documentation package
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Validation report with compliance evidence
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Video demonstration and field test data
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Cost analysis and scalability roadmap
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Source code and software architecture
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card style={{ boxShadow: "var(--shadow-card)" }}>
        <CardHeader>
          <CardTitle>Project Timeline Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Total project duration: <span className="font-medium text-foreground">40 weeks</span>
            </div>
            <div className="grid grid-cols-6 gap-2 text-xs">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-2 rounded text-center">
                Design<br/>6 weeks
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-400 text-white p-2 rounded text-center">
                Prototype<br/>8 weeks
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white p-2 rounded text-center">
                Software<br/>10 weeks
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-2 rounded text-center">
                Integration<br/>6 weeks
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-2 rounded text-center">
                Validation<br/>6 weeks
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-400 text-white p-2 rounded text-center">
                Delivery<br/>4 weeks
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}