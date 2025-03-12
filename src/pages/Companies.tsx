
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { CompanyCard } from "@/components/company/CompanyCard";

// Mock data for companies with logos
const COMPANIES = [
  {
    id: 1,
    name: "TechSolutions India",
    logo: "https://logo.clearbit.com/infosys.com",
    industry: "Information Technology",
    location: "Bangalore, India",
    employees: "500-1000",
    openJobs: 12
  },
  {
    id: 2,
    name: "Innovate Labs",
    logo: "https://logo.clearbit.com/wipro.com",
    industry: "Software Development",
    location: "Hyderabad, India",
    employees: "100-500",
    openJobs: 8
  },
  {
    id: 3,
    name: "Global Systems",
    logo: "https://logo.clearbit.com/tcs.com",
    industry: "IT Consulting",
    location: "Mumbai, India",
    employees: "1000-5000",
    openJobs: 15
  },
  {
    id: 4,
    name: "NextGen Solutions",
    logo: "https://logo.clearbit.com/hcl.com",
    industry: "Software Services",
    location: "Pune, India",
    employees: "100-500",
    openJobs: 6
  },
  {
    id: 5,
    name: "Digital Creations",
    logo: "https://logo.clearbit.com/mindtree.com",
    industry: "Digital Marketing",
    location: "Delhi, India",
    employees: "50-100",
    openJobs: 4
  },
  {
    id: 6,
    name: "CloudTech India",
    logo: "https://logo.clearbit.com/cognizant.com",
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
            <CompanyCard key={company.id} {...company} />
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
