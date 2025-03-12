
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookmarkIcon, MapPin, DollarSign, Clock, Building, BriefcaseIcon, Share2 } from "lucide-react";

// Mock job data
const JOB = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "TechCorp",
  location: "San Francisco, CA",
  salary: "$120k - $150k",
  type: "Full-time",
  postedTime: "2 days ago",
  description: `
    <p>We are looking for a Senior Frontend Developer to join our team and help us build beautiful, fast, and accessible web applications.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Build high-quality, responsive user interfaces using React</li>
      <li>Collaborate with designers, product managers, and backend developers</li>
      <li>Write clean, maintainable, and well-documented code</li>
      <li>Optimize applications for maximum speed and scalability</li>
      <li>Stay up-to-date with emerging trends and technologies</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>5+ years of experience in frontend development</li>
      <li>Expert knowledge of React, TypeScript, and modern frontend tooling</li>
      <li>Strong understanding of web standards and best practices</li>
      <li>Experience with responsive design and cross-browser compatibility</li>
      <li>Good problem-solving skills and attention to detail</li>
    </ul>
    
    <h3>Benefits:</h3>
    <ul>
      <li>Competitive salary and equity package</li>
      <li>Comprehensive health, dental, and vision insurance</li>
      <li>Flexible work arrangements including remote options</li>
      <li>Professional development budget</li>
      <li>Regular team events and activities</li>
    </ul>
  `,
  skills: ["React", "TypeScript", "CSS", "HTML", "JavaScript", "REST APIs"],
  companyInfo: {
    name: "TechCorp",
    size: "50-200 employees",
    industry: "Software Development",
    website: "https://techcorp.example.com",
    founded: 2015,
    description: "TechCorp is a leading software development company specializing in creating innovative web and mobile applications for businesses of all sizes."
  }
};

const JobDetails = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - job details */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {JOB.company[0]}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{JOB.title}</h1>
                    <p className="text-muted-foreground">{JOB.company}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <BookmarkIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {JOB.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {JOB.salary}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <BriefcaseIcon className="h-4 w-4 mr-1" />
                  {JOB.type}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {JOB.postedTime}
                </div>
              </div>

              <div className="mt-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {JOB.type}
                </Badge>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <div 
                  className="prose max-w-none" 
                  dangerouslySetInnerHTML={{ __html: JOB.description }} 
                />
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {JOB.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-muted">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - company info & apply button */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <Button className="w-full mb-4 text-lg py-6">Apply Now</Button>
              <p className="text-center text-sm text-muted-foreground mb-6">
                Be one of the first 10 applicants
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">About {JOB.companyInfo.name}</h2>
              
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Building className="h-4 w-4 mr-2" />
                  <span>{JOB.companyInfo.size}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  <span>{JOB.companyInfo.industry}</span>
                </div>
                
                <p className="text-sm mt-4">{JOB.companyInfo.description}</p>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Company Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobDetails;
