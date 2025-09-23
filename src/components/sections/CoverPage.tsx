import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/railway-monitoring-hero.jpg";

export function CoverPage() {
  return (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <img 
          src={heroImage} 
          alt="Railway Track Monitoring System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl font-bold mb-4">Indigenous Contactless ITMS</h1>
            <p className="text-xl">Development of Integrated Track Monitoring System for Track Recording</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card style={{ boxShadow: "var(--shadow-card)" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Project Information
              <Badge variant="outline">Rev 1.0</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Project Title</label>
              <p className="mt-1">Development of Indigenous Contactless Integrated Track Monitoring System (ITMS) for Track Recording</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Organisation / Consortium Name</label>
              <p className="mt-1 text-primary font-medium">[Lead organisation name]</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Contact Person</label>
              <p className="mt-1">[Name, role]</p>
            </div>
          </CardContent>
        </Card>

        <Card style={{ boxShadow: "var(--shadow-card)" }}>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Address</label>
              <p className="mt-1">[Postal address]</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email / Phone</label>
              <p className="mt-1">[Contact details]</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Proposal Date</label>
              <p className="mt-1">[DD Month YYYY]</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card style={{ boxShadow: "var(--shadow-card)" }}>
        <CardHeader>
          <CardTitle>Key Features & Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Specifications</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Operating speed: Up to 200 km/h
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Sampling interval: 25 cm chainage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Contactless measurement technology
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Real-time data processing
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Standards Compliance</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  RDSO TM/IM/448 Rev.1:2023
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  EN 13848 Part 1 & 2
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  EMI/EMC compliance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  Environmental sealing (IP rating)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}