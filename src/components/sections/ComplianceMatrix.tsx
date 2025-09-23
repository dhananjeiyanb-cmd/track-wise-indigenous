import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const complianceData = [
  {
    requirement: "Lateral alignment accuracy as per EN 13848-2",
    satisfaction: "Laser triangulation sensor + calibration routine; expected RMS error = X mm",
    reference: "Section 6.2, Appendix A"
  },
  {
    requirement: "Track gauge measurement (RDSO TM/IM/448)",
    satisfaction: "Dual laser profiling system with temperature compensation",
    reference: "Section 7.1"
  },
  {
    requirement: "Longitudinal level measurement accuracy",
    satisfaction: "High-precision accelerometer array with digital filtering",
    reference: "Section 7.4"
  },
  {
    requirement: "Cross level measurement (EN 13848-1)",
    satisfaction: "Optical profiling with sub-millimeter accuracy",
    reference: "Section 6.2"
  },
  {
    requirement: "Rail profile measurement and wear assessment",
    satisfaction: "3D laser scanning with ML-based wear analysis",
    reference: "Section 7.2"
  },
  {
    requirement: "Speed measurement and chainage recording",
    satisfaction: "Encoder-based system with GPS synchronization",
    reference: "Section 8.1"
  }
];

export function ComplianceMatrix() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-4">Compliance Matrix</h2>
        <p className="text-muted-foreground mb-6">
          Comprehensive mapping of requirements from RDSO TM/IM/448 Rev.1:2023 and EN 13848 to system design solutions.
        </p>
      </div>

      <Card style={{ boxShadow: "var(--shadow-card)" }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Standards Mapping
            <Badge variant="secondary">RDSO & EN 13848</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Requirement (Standard Clause)</TableHead>
                <TableHead className="w-1/2">How Requirement is Satisfied</TableHead>
                <TableHead className="w-1/6">Reference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complianceData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.requirement}</TableCell>
                  <TableCell>{item.satisfaction}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.reference}</Badge>
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
            <CardTitle>RDSO TM/IM/448 Rev.1:2023</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Track geometry measurement parameters
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Sampling requirements and accuracy
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Data format and export specifications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Environmental and operational conditions
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card style={{ boxShadow: "var(--shadow-card)" }}>
          <CardHeader>
            <CardTitle>EN 13848 Part 1 & 2</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                European standard for track geometry quality
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                Measurement methods and equipment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                Quality assessment and acceptance criteria
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                Calibration and validation procedures
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}