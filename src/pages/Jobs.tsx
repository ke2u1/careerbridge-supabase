
import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { JobCard } from "@/components/job/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import JobFilters from "@/components/job/JobFilters";

// Mock data for jobs with Indian cities and company logos
const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechSolutions India",
    location: "Bangalore, India",
    salary: "₹18L - ₹24L",
    type: "Full-time",
    postedTime: "2 days ago",
    logo: "https://logo.clearbit.com/infosys.com"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignLabs",
    location: "Remote",
    salary: "₹12L - ₹18L",
    type: "Full-time",
    postedTime: "1 day ago",
    logo: "https://logo.clearbit.com/wipro.com"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech India",
    location: "Mumbai, India",
    salary: "₹20L - ₹28L",
    type: "Full-time",
    postedTime: "3 days ago",
    logo: "https://logo.clearbit.com/tcs.com"
  },
  {
    id: 4,
    title: "UX Researcher",
    company: "UserFirst",
    location: "Pune, India",
    salary: "₹14L - ₹18L",
    type: "Full-time",
    postedTime: "5 days ago",
    logo: "https://logo.clearbit.com/hcl.com"
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "ServerSide Inc",
    location: "Hyderabad, India",
    salary: "₹16L - ₹22L",
    type: "Full-time",
    postedTime: "1 week ago",
    logo: "https://logo.clearbit.com/mindtree.com"
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "GrowthHub",
    location: "Delhi, India",
    salary: "₹10L - ₹14L",
    type: "Contract",
    postedTime: "2 days ago",
    logo: "https://logo.clearbit.com/cognizant.com"
  },
  {
    id: 7,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Chennai, India",
    salary: "₹15L - ₹20L",
    type: "Full-time",
    postedTime: "4 days ago",
    logo: "https://logo.clearbit.com/techmahindra.com"
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataMinds",
    location: "Kolkata, India",
    salary: "₹18L - ₹25L",
    type: "Full-time",
    postedTime: "3 days ago",
    logo: "https://logo.clearbit.com/lti.com"
  },
];

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(JOBS);
  const [sortOrder, setSortOrder] = useState("newest");
  
  // Handle search and filtering
  useEffect(() => {
    let result = [...JOBS];
    
    // Filter by search query (job title, keywords, company)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query)
      );
    }
    
    // Filter by location
    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(job => 
        job.location.toLowerCase().includes(query)
      );
    }
    
    // Sort results
    switch (sortOrder) {
      case "newest":
        // For mock data we'll just use the array order as is
        break;
      case "relevant":
        // For mock data, just shuffle a bit
        result.sort((a, b) => a.id % 2 - b.id % 2);
        break;
      case "salary-high":
        // Extract the higher number from the salary range and sort
        result.sort((a, b) => {
          const aMaxSalary = parseInt(a.salary.split('₹')[1].split('L')[0].trim());
          const bMaxSalary = parseInt(b.salary.split('₹')[1].split('L')[0].trim());
          return bMaxSalary - aMaxSalary;
        });
        break;
      case "salary-low":
        // Extract the lower number from the salary range and sort
        result.sort((a, b) => {
          const aMinSalary = parseInt(a.salary.split('₹')[1].split('-')[0].trim());
          const bMinSalary = parseInt(b.salary.split('₹')[1].split('-')[0].trim());
          return aMinSalary - bMinSalary;
        });
        break;
    }
    
    setFilteredJobs(result);
  }, [searchQuery, locationQuery, sortOrder]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filtering is already handled by the useEffect
  };
  
  return (
    <MainLayout>
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Job</h1>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Job title, keywords, or company" 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location or remote" 
                  className="pl-10"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" className="md:w-auto">
                Find Jobs
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} jobs available
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Select 
              defaultValue="newest" 
              value={sortOrder}
              onValueChange={setSortOrder}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="relevant">Most relevant</SelectItem>
                <SelectItem value="salary-high">Highest salary</SelectItem>
                <SelectItem value="salary-low">Lowest salary</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {showFilters && <JobFilters />}
          
          <div className="grid grid-cols-1 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} id={job.id} {...job} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No jobs found. Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;
