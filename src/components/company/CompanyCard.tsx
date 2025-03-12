
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employees: string;
  openJobs: number;
}

export const CompanyCard = ({
  id,
  name,
  logo,
  industry,
  location,
  employees,
  openJobs,
}: CompanyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
            <img 
              src={logo} 
              alt={name} 
              className="w-12 h-12 rounded-md object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-muted-foreground">{industry}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {employees} employees
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-medium">{openJobs} open positions</span>
          <Link to={`/companies/${id}`}>
            <Button variant="outline">View Company</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
