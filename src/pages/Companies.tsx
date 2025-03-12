
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, Users, MapPin } from "lucide-react";

// Mock data for companies
const COMPANIES = [
  {
    id: 1,
    name: "TechSolutions India",
    logo: "/placeholder.svg",
    industry: "Information Technology",
    location: "Bangalore, India",
    employees: "500-1000",
    openJobs: 12
  },
  {
    id: 2,
    name: "Innovate Labs",
    logo: "/placeholder.svg",
    industry: "Software Development",
    location: "Hyderabad, India",
    employees: "100-500",
    openJobs: 8
  },
  {
    id: 3,
    name: "Global Systems",
    logo: "/placeholder.svg",
    industry: "IT Consulting",
    location: "Mumbai, India",
    employees: "1000-5000",
    openJobs: 15
  },
  {
    id: 4,
    name: "NextGen Solutions",
    logo: "/placeholder.svg",
    industry: "Software Services",
    location: "Pune, India",
    employees: "100-500",
    openJobs: 6
  },
  {
    id: 5,
    name: "Digital Creations",
    logo: "/placeholder.svg",
    industry: "Digital Marketing",
    location: "Delhi, India",
    employees: "50-100",
    openJobs: 4
  },
  {
    id: 6,
    name: "CloudTech India",
    logo: "/placeholder.svg",
    industry: "Cloud Solutions",
    location: "Chennai, India",
    employees: "500-1000",
    openJobs: 10
  }
];

const Companies = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Browse Companies</h1>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Company name or industry" 
                  className="pl-10"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location" 
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="md:w-auto">
                Search Companies
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANIES.map((company) => (
            <Card key={company.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                    <img src={company.logo} alt={company.name} className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    <p className="text-muted-foreground">{company.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {company.employees} employees
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-primary font-medium">{company.openJobs} open positions</span>
                  <Button variant="outline">View Company</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Load More Companies
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Companies;
