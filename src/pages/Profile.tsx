
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { UserCircle, BriefcaseIcon, FileText, Plus, Upload, ExternalLink } from "lucide-react";

const Profile = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold mt-4">John Doe</h2>
                  <p className="text-muted-foreground">Frontend Developer</p>
                  
                  <div className="w-full mt-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Profile Completion</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div className="w-full border-t mt-6 pt-6">
                    <h3 className="font-medium mb-4">Profile Sections</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                        <span>Personal Info</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                        <span>Experience</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                        <span>Education</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                        <span>Skills</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 rounded-full bg-gray-300 mr-2"></div>
                        <span>Resume</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="info">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="info" className="flex items-center">
                  <UserCircle className="h-4 w-4 mr-2" /> Info
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center">
                  <BriefcaseIcon className="h-4 w-4 mr-2" /> Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" /> Education
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" /> Skills
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="info">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and how employers can contact you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input id="firstName" value="John" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input id="lastName" value="Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" value="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input id="phone" type="tel" value="(123) 456-7890" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label htmlFor="location" className="text-sm font-medium">
                            Location
                          </label>
                          <Input id="location" value="San Francisco, CA" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label htmlFor="headline" className="text-sm font-medium">
                            Professional Headline
                          </label>
                          <Input 
                            id="headline" 
                            value="Frontend Developer with 5 years of experience in React and TypeScript"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label htmlFor="summary" className="text-sm font-medium">
                            Professional Summary
                          </label>
                          <Textarea 
                            id="summary" 
                            rows={5}
                            value="Experienced Frontend Developer with a passion for creating responsive and user-friendly web applications. Proficient in React, TypeScript, and modern CSS frameworks."
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="experience">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Work Experience</CardTitle>
                      <CardDescription>
                        Add your work history to showcase your professional experience.
                      </CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">Senior Frontend Developer</h3>
                            <p className="text-muted-foreground">TechCorp Inc.</p>
                            <p className="text-sm text-muted-foreground">Jan 2021 - Present · 2 years 6 months</p>
                            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                        <p className="mt-4">
                          Lead frontend development for the company's main SaaS product. Implemented new features, improved performance, and mentored junior developers.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                          <Badge variant="outline">Redux</Badge>
                          <Badge variant="outline">Tailwind CSS</Badge>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">Frontend Developer</h3>
                            <p className="text-muted-foreground">WebSolutions Ltd.</p>
                            <p className="text-sm text-muted-foreground">Mar 2018 - Dec 2020 · 2 years 9 months</p>
                            <p className="text-sm text-muted-foreground">Austin, TX</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                        <p className="mt-4">
                          Developed responsive web applications for various clients. Collaborated with designers and backend developers to implement features and ensure compatibility across browsers.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline">JavaScript</Badge>
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">CSS</Badge>
                          <Badge variant="outline">HTML</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="education">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>
                        Add your educational background and certifications.
                      </CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Education
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                            <p className="text-muted-foreground">University of California, Berkeley</p>
                            <p className="text-sm text-muted-foreground">2014 - 2018</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                        <p className="mt-4">
                          Graduated with honors. Specialized in web technologies and software engineering.
                        </p>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">Advanced React & Redux Certification</h3>
                            <p className="text-muted-foreground">Frontend Masters</p>
                            <p className="text-sm text-muted-foreground">2020</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                        <p className="mt-4">
                          Completed advanced course on React patterns, state management with Redux, and performance optimization.
                        </p>
                        <Button variant="link" className="mt-2 p-0 h-auto" size="sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                    <CardDescription>
                      Highlight your technical skills and areas of expertise.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">Technical Skills</h3>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Skill
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="px-3 py-1">
                            React.js
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            TypeScript
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            Redux
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            Node.js
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            CSS/SCSS
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            Tailwind CSS
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            REST APIs
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1">
                            Git
                            <button className="ml-2">×</button>
                          </Badge>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">Soft Skills</h3>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Skill
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20">
                            Team Leadership
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20">
                            Problem Solving
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20">
                            Communication
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20">
                            Project Management
                            <button className="ml-2">×</button>
                          </Badge>
                          <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20">
                            Mentoring
                            <button className="ml-2">×</button>
                          </Badge>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">Languages</h3>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Language
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>English</span>
                            <span className="text-sm text-muted-foreground">Native</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Spanish</span>
                            <span className="text-sm text-muted-foreground">Intermediate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Card className="bg-muted">
                        <CardContent className="pt-6">
                          <div className="flex items-start">
                            <Upload className="h-10 w-10 text-primary mr-4" />
                            <div>
                              <h3 className="font-medium">Upload your resume</h3>
                              <p className="text-sm text-muted-foreground mb-4">
                                Upload your resume to automatically extract skills and experience.
                              </p>
                              <Button variant="outline" size="sm">
                                Upload Resume
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
