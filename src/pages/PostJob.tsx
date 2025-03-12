
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PostJob = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
          <p className="text-muted-foreground mb-6">Reach thousands of qualified candidates</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="details">Job Details</TabsTrigger>
            <TabsTrigger value="company">Company Info</TabsTrigger>
          </TabsList>

          <Card className="p-6">
            <TabsContent value="basic" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g. Senior Frontend Developer" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="job-type">Job Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Bangalore, India or Remote" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="min-salary">Minimum Salary (₹)</Label>
                  <Input id="min-salary" type="number" placeholder="e.g. 500000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-salary">Maximum Salary (₹)</Label>
                  <Input id="max-salary" type="number" placeholder="e.g. 1000000" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Continue to Job Details</Button>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="job-description">Job Description</Label>
                <Textarea id="job-description" placeholder="Describe the responsibilities, requirements, and benefits of the job" className="min-h-[200px]" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="required-skills">Required Skills (comma separated)</Label>
                <Input id="required-skills" placeholder="e.g. React, JavaScript, TypeScript" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                    <SelectItem value="lead">Lead/Manager (7+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Back to Basic Information</Button>
                <Button>Continue to Company Info</Button>
              </div>
            </TabsContent>

            <TabsContent value="company" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Your company name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-website">Company Website</Label>
                <Input id="company-website" placeholder="https://www.example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-description">Company Description</Label>
                <Textarea id="company-description" placeholder="Tell candidates about your company culture and values" className="min-h-[150px]" />
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Back to Job Details</Button>
                <Button>Preview & Submit</Button>
              </div>
            </TabsContent>
          </Card>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default PostJob;
