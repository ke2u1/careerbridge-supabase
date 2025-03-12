
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainLayout } from "@/components/layout/MainLayout";
import { JobCard } from "@/components/job/JobCard";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURED_JOBS = [
  {
    title: "Senior Frontend Developer",
    company: "TechSolutions India",
    location: "Bangalore, India",
    salary: "₹18L - ₹24L",
    type: "Full-time",
    postedTime: "2 days ago",
  },
  {
    title: "Product Designer",
    company: "DesignLabs",
    location: "Remote",
    salary: "₹12L - ₹18L",
    type: "Full-time",
    postedTime: "1 day ago",
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech India",
    location: "Mumbai, India",
    salary: "₹20L - ₹28L",
    type: "Full-time",
    postedTime: "3 days ago",
  },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Connect with top companies across India and opportunities that match your skills and aspirations.
            </p>

            <div className="bg-white rounded-lg p-4 shadow-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Job title or keyword" 
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
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
            <p className="text-muted-foreground">
              Discover opportunities from companies actively hiring across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_JOBS.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button variant="outline" size="lg">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Extensive Job Listings</h3>
              <p className="text-muted-foreground">
                Access thousands of job opportunities from top companies across India.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Remote Opportunities</h3>
              <p className="text-muted-foreground">
                Find flexible remote work options that fit your lifestyle.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
              <p className="text-muted-foreground">
                Get personalized job recommendations based on your skills and experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
