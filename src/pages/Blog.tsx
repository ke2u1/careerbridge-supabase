
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Most In-Demand Tech Skills in India for 2024",
    excerpt: "Discover the tech skills that employers are actively seeking in the Indian job market this year.",
    author: "Priya Sharma",
    date: "May 15, 2024",
    category: "Career Advice",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "How to Navigate Salary Negotiations in the IT Industry",
    excerpt: "Expert tips on how to confidently negotiate your salary in India's competitive tech sector.",
    author: "Raj Kumar",
    date: "May 8, 2024",
    category: "Salary Insights",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Remote Work Trends in Post-Pandemic India",
    excerpt: "How companies across India are adapting their policies for remote and hybrid work arrangements.",
    author: "Aditya Patel",
    date: "April 30, 2024",
    category: "Workplace Trends",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "The Rise of Startup Careers in Tier 2 Cities",
    excerpt: "Why Indian startups are expanding beyond metros and what it means for job seekers.",
    author: "Neha Gupta",
    date: "April 22, 2024",
    category: "Industry Insights",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "5 Resume Mistakes That Hiring Managers Hate",
    excerpt: "Common resume errors that could be costing you job opportunities in the Indian market.",
    author: "Vikram Singh",
    date: "April 15, 2024",
    category: "Career Advice",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "How to Build a Personal Brand for Career Growth",
    excerpt: "Strategies to develop your professional identity and stand out in India's competitive job market.",
    author: "Ananya Desai",
    date: "April 8, 2024",
    category: "Career Development",
    image: "/placeholder.svg"
  }
];

const CATEGORIES = [
  "Career Advice", "Salary Insights", "Workplace Trends", 
  "Industry Insights", "Hiring Tips", "Career Development"
];

const Blog = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Expert advice and insights on careers, hiring trends, and the Indian job market
          </p>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOG_POSTS.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Button variant="link" className="p-0 h-auto mt-4 flex items-center gap-1 text-primary">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted transition-colors">
                    {category}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3 items-start">
                    <div className="w-16 h-16 bg-muted rounded shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 text-sm">{post.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 bg-primary/5">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get the latest job market insights and career advice delivered to your inbox.
              </p>
              <div className="space-y-2">
                <Input placeholder="Your email address" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
