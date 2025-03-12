
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, TrendingUp, Building } from "lucide-react";
import SalaryChart from "@/components/salary/SalaryChart";

const Salary = () => {
  const [submitted, setSubmitted] = useState(false);
  const [estimatedSalary, setEstimatedSalary] = useState(0);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock estimation calculation
    setEstimatedSalary(Math.floor(Math.random() * (150000 - 70000) + 70000));
    setSubmitted(true);
  };
  
  return (
    <MainLayout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Salary Estimator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an accurate estimate of what you should be earning based on your job title, 
            location, experience, and skills.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Salary form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Estimate Your Salary</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="job-title" className="text-sm font-medium">
                      Job Title
                    </label>
                    <Input 
                      id="job-title" 
                      placeholder="e.g. Frontend Developer"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location
                    </label>
                    <Input 
                      id="location" 
                      placeholder="e.g. San Francisco, CA"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium">
                      Years of Experience
                    </label>
                    <Select defaultValue="3-5">
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-9">6-9 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="skills" className="text-sm font-medium">
                      Key Skills (comma separated)
                    </label>
                    <Input 
                      id="skills" 
                      placeholder="e.g. React, JavaScript, CSS"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="education" className="text-sm font-medium">
                      Education Level
                    </label>
                    <Select defaultValue="bachelors">
                      <SelectTrigger>
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="associates">Associate's Degree</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD or Doctorate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Estimate Salary
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Salary results */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="space-y-6">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h2 className="text-xl font-medium mb-2">
                        Estimated Salary Range
                      </h2>
                      <div className="text-4xl font-bold">
                        ${Math.floor(estimatedSalary * 0.9).toLocaleString()} - ${Math.floor(estimatedSalary * 1.1).toLocaleString()}
                      </div>
                      <p className="mt-2 text-primary-foreground/80">
                        per year
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Salary Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SalaryChart salary={estimatedSalary} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <Card className="bg-muted">
                        <CardContent className="p-4 flex flex-col items-center">
                          <DollarSign className="h-8 w-8 text-primary mb-2" />
                          <h3 className="font-medium">Market Average</h3>
                          <p className="font-bold">${Math.floor(estimatedSalary * 0.98).toLocaleString()}</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted">
                        <CardContent className="p-4 flex flex-col items-center">
                          <TrendingUp className="h-8 w-8 text-primary mb-2" />
                          <h3 className="font-medium">Salary Growth</h3>
                          <p className="font-bold">+5.2% YoY</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted">
                        <CardContent className="p-4 flex flex-col items-center">
                          <Building className="h-8 w-8 text-primary mb-2" />
                          <h3 className="font-medium">Top Industry</h3>
                          <p className="font-bold">Technology</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Similar Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <div>
                          <h3 className="font-medium">Senior UX Designer</h3>
                          <p className="text-sm text-muted-foreground">National Average</p>
                        </div>
                        <div className="font-bold">${Math.floor(estimatedSalary * 0.95).toLocaleString()}</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <div>
                          <h3 className="font-medium">Frontend Team Lead</h3>
                          <p className="text-sm text-muted-foreground">National Average</p>
                        </div>
                        <div className="font-bold">${Math.floor(estimatedSalary * 1.15).toLocaleString()}</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <div>
                          <h3 className="font-medium">Full Stack Developer</h3>
                          <p className="text-sm text-muted-foreground">National Average</p>
                        </div>
                        <div className="font-bold">${Math.floor(estimatedSalary * 1.05).toLocaleString()}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-12 bg-muted rounded-lg">
                <div>
                  <DollarSign className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                  <h2 className="text-xl font-medium mb-2">Your Salary Estimate</h2>
                  <p className="text-muted-foreground">
                    Fill out the form to get an accurate salary estimate
                    based on your skills, experience, and location.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Salary;
