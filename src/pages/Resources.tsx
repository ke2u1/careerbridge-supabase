
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, BookOpen, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Employer Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools, guides, and resources to help you find, hire, and retain top talent in India.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Hiring Guides</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Complete Guide to IT Hiring in India</h3>
              <p className="text-muted-foreground mb-4">
                Learn about the IT talent landscape in India, salary benchmarks, and effective hiring strategies.
              </p>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Guide
              </Button>
            </div>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                <Users className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Remote Work Policies & Best Practices</h3>
              <p className="text-muted-foreground mb-4">
                Create effective remote work policies and manage distributed teams across India.
              </p>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Guide
              </Button>
            </div>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Salary Trends Report 2024</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive analysis of salary trends across industries and cities in India.
              </p>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Report
              </Button>
            </div>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold mb-8">Templates & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="p-6 flex flex-col md:flex-row gap-4 items-center hover:shadow-sm transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Job Description Templates</h3>
              <p className="text-muted-foreground mb-3">
                Ready-to-use templates for common roles across IT, marketing, sales, and more.
              </p>
              <Button variant="link" className="p-0 h-auto flex items-center gap-1 text-primary">
                Access Templates <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col md:flex-row gap-4 items-center hover:shadow-sm transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Interview Scorecards</h3>
              <p className="text-muted-foreground mb-3">
                Standardize your interview process with customizable scorecards and evaluation criteria.
              </p>
              <Button variant="link" className="p-0 h-auto flex items-center gap-1 text-primary">
                Download Templates <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col md:flex-row gap-4 items-center hover:shadow-sm transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Offer Letter Templates</h3>
              <p className="text-muted-foreground mb-3">
                Professional offer letter templates compliant with Indian labor laws.
              </p>
              <Button variant="link" className="p-0 h-auto flex items-center gap-1 text-primary">
                Access Templates <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col md:flex-row gap-4 items-center hover:shadow-sm transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Recruitment ROI Calculator</h3>
              <p className="text-muted-foreground mb-3">
                Calculate the return on investment for your recruitment strategies and hiring channels.
              </p>
              <Button variant="link" className="p-0 h-auto flex items-center gap-1 text-primary">
                Use Calculator <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="bg-muted rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Need personalized hiring assistance?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our team of recruitment specialists can help you build a customized hiring strategy for your specific needs.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
