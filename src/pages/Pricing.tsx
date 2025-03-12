import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your hiring needs. Post jobs, access premium features, and find the best talent.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Basic</h2>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">₹4,999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Perfect for small businesses</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Post up to 5 jobs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Basic candidate filtering</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Email notifications</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>30-day job listings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Basic analytics</span>
              </li>
            </ul>
            
            <Button className="w-full">Get Started</Button>
          </Card>
          
          {/* Professional Plan */}
          <Card className="p-6 border-2 border-primary shadow-lg relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Professional</h2>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">₹9,999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">For growing companies</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Post up to 15 jobs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Advanced candidate filtering</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Featured job listings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>60-day job listings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Detailed analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
            </ul>
            
            <Button className="w-full">Get Started</Button>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">₹24,999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">For large organizations</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Unlimited job posts</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>AI-powered candidate matching</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Premium placement in search results</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>90-day job listings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Advanced reporting & analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>API access</span>
              </li>
            </ul>
            
            <Button className="w-full">Contact Sales</Button>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Need a custom plan?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We offer custom solutions for specialized hiring needs. Contact our sales team to build a tailored plan for your organization.
          </p>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
