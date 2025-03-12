
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">
              For general inquiries and support
            </p>
            <a href="mailto:support@jobscout.in" className="text-primary hover:underline">
              support@jobscout.in
            </a>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">
              Monday to Friday, 9am - 6pm IST
            </p>
            <a href="tel:+919876543210" className="text-primary hover:underline">
              +91 98765 43210
            </a>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-4">
              JobScout HQ, Bangalore
            </p>
            <address className="not-italic text-primary">
              123 Tech Park, Whitefield<br />
              Bangalore, Karnataka 560066<br />
              India
            </address>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Card className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button className="w-full md:w-auto">Send Message</Button>
              </form>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">How do I post a job on JobScout?</h3>
                <p className="text-muted-foreground">
                  To post a job, create an employer account, navigate to your dashboard, and click on "Post a Job." Follow the step-by-step instructions to complete your job listing.
                </p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">What are the payment options available?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, UPI, and net banking options. For enterprise plans, we also offer invoice-based payments.
                </p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">How long will my job posting be visible?</h3>
                <p className="text-muted-foreground">
                  Job postings remain active for 30, 60, or 90 days depending on your plan. You can always extend or renew postings from your dashboard.
                </p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Can I edit my job posting after it's published?</h3>
                <p className="text-muted-foreground">
                  Yes, you can edit your job posting at any time from your employer dashboard. Changes will be reflected immediately.
                </p>
              </Card>
              
              <div className="text-center mt-6">
                <Button variant="link" className="text-primary">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
