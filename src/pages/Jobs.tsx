
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { JobCard } from "@/components/job/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import JobFilters from "@/components/job/JobFilters";

// Mock data for jobs
const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    type: "Full-time",
    postedTime: "2 days ago",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignLabs",
    location: "Remote",
    salary: "$90k - $120k",
    type: "Full-time",
    postedTime: "1 day ago",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    postedTime: "3 days ago",
  },
  {
    id: 4,
    title: "UX Researcher",
    company: "UserFirst",
    location: "Boston, MA",
    salary: "$85k - $110k",
    type: "Full-time",
    postedTime: "5 days ago",
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "ServerSide Inc",
    location: "Seattle, WA",
    salary: "$110k - $140k",
    type: "Full-time",
    postedTime: "1 week ago",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "GrowthHub",
    location: "Chicago, IL",
    salary: "$70k - $90k",
    type: "Contract",
    postedTime: "2 days ago",
  },
  {
    id: 7,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Austin, TX",
    salary: "$100k - $130k",
    type: "Full-time",
    postedTime: "4 days ago",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataMinds",
    location: "Remote",
    salary: "$130k - $160k",
    type: "Full-time",
    postedTime: "3 days ago",
  },
];

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <MainLayout>
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Job</h1>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Job title, keywords, or company" 
                  className="pl-10"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location or remote" 
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="md:w-auto">
                Find Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              {JOBS.length} jobs available
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="newest">
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
            {JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
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
