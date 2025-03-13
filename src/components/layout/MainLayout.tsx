
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, BriefcaseIcon, UserCircle, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <span className="font-semibold text-xl">JobScout</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Jobs
              </Link>
              <Link to="/companies" className="text-muted-foreground hover:text-foreground transition-colors">
                Browse Companies
              </Link>
              <Link to="/salary" className="text-muted-foreground hover:text-foreground transition-colors">
                Salary Calculator
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <UserCircle className="h-4 w-4" />
                      <span>My Account</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="w-full cursor-pointer">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/my-applications" className="w-full cursor-pointer">
                        My Applications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to="/signin">
                    <Button variant="outline" className="text-primary flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      <span>Sign In</span>
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="flex items-center gap-2">
                      <UserPlus className="h-4 w-4" />
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Navigation */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/jobs" className="block text-muted-foreground hover:text-foreground">
                Find Jobs
              </Link>
              <Link to="/companies" className="block text-muted-foreground hover:text-foreground">
                Browse Companies
              </Link>
              <Link to="/salary" className="block text-muted-foreground hover:text-foreground">
                Salary Calculator
              </Link>
              <div className="pt-4 space-y-2">
                {user ? (
                  <>
                    <Link to="/profile" className="block w-full">
                      <Button variant="outline" className="w-full flex items-center gap-2 justify-center">
                        <UserCircle className="h-4 w-4" />
                        <span>Profile</span>
                      </Button>
                    </Link>
                    <Button 
                      className="w-full flex items-center gap-2 justify-center" 
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/signin" className="block w-full">
                      <Button variant="outline" className="w-full text-primary flex items-center gap-2 justify-center">
                        <LogIn className="h-4 w-4" />
                        <span>Sign In</span>
                      </Button>
                    </Link>
                    <Link to="/signup" className="block w-full">
                      <Button className="w-full flex items-center gap-2 justify-center">
                        <UserPlus className="h-4 w-4" />
                        <span>Sign Up</span>
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16 min-h-screen">
        {children}
      </main>

      <footer className="bg-muted mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/browse-jobs">Browse Jobs</Link></li>
                <li><Link to="/companies">Browse Companies</Link></li>
                <li><Link to="/salary">Salary Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/post-job">Post a Job</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/resources">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© 2025 JobScout. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
