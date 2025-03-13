
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Building, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About JobScout</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connecting talent with opportunity across India
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              At JobScout, we're on a mission to transform how companies hire and how people find jobs in India. We believe that the right job can change a person's life, and the right talent can transform a business.
            </p>
            <p className="text-lg mb-6">
              Founded in 2020, JobScout has quickly grown to become one of India's leading job platforms, connecting millions of job seekers with thousands of employers across the country.
            </p>
            <Button className="flex items-center gap-2">
              Join Our Team <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">People First</h3>
              <p className="text-muted-foreground">
                We believe in putting people at the center of everything we do, creating experiences that empower both job seekers and employers.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in our platform, our service, and our impact, constantly innovating to better serve our community.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty, building trust with our users through every interaction.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Vikram Sharma", title: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" },
              { name: "Priya Patel", title: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop" },
              { name: "Raj Malhotra", title: "Head of Product", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop" },
              { name: "Ananya Desai", title: "Chief Marketing Officer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop" },
              { name: "Arjun Nair", title: "Head of Customer Success", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop" },
              { name: "Meera Singh", title: "Head of Sales", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop" },
              { name: "Karthik Kumar", title: "Lead Engineer", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500&h=500&fit=crop" },
              { name: "Divya Reddy", title: "UX Director", image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=500&h=500&fit=crop" },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
            alt="Our office" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h3 className="text-2xl font-bold mb-2">Our Workplace</h3>
              <p className="max-w-lg">
                A collaborative environment where innovation and creativity thrive
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Join the JobScout journey</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who share our passion for transforming the employment landscape in India.
          </p>
          <Button size="lg">View Career Opportunities</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
