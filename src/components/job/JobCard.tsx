import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, MapPin, IndianRupee, Clock, Briefcase } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedTime: string;
  logo?: string;
}

export const JobCard = ({
  title,
  company,
  location,
  salary,
  type,
  postedTime,
  logo,
}: JobCardProps) => {
  return (
    <Card className="p-6 hover:border-primary/20 transition-colors group animate-fade-up">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
            {logo ? (
              <img src={logo} alt={company} className="h-8 w-8" />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary"
        >
          <BookmarkIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-muted-foreground">
          <IndianRupee className="h-4 w-4 mr-1" />
          {salary}
        </div>
        <div className="flex items-center text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          {postedTime}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
          {type}
        </Badge>
        <Button variant="default">Apply Now</Button>
      </div>
    </Card>
  );
};
