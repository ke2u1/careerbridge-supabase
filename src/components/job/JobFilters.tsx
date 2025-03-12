
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const JobFilters = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Job Type filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Job Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fulltime" />
                <Label htmlFor="fulltime">Full-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="parttime" />
                <Label htmlFor="parttime">Part-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract">Contract</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship">Internship</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="temporary" />
                <Label htmlFor="temporary">Temporary</Label>
              </div>
            </div>
          </div>

          {/* Experience Level filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Experience Level</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry" />
                <Label htmlFor="entry">Entry Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid" />
                <Label htmlFor="mid">Mid Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior" />
                <Label htmlFor="senior">Senior Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="manager" />
                <Label htmlFor="manager">Manager</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="executive" />
                <Label htmlFor="executive">Executive</Label>
              </div>
            </div>
          </div>

          {/* Remote Options filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Remote Options</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote">Remote</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <Label htmlFor="hybrid">Hybrid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="onsite" />
                <Label htmlFor="onsite">On-site</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Range filter */}
        <div className="mt-6">
          <h3 className="font-medium mb-4">Salary Range</h3>
          <div className="px-2">
            <Slider defaultValue={[50000, 150000]} max={250000} step={5000} />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>$50,000</span>
              <span>$150,000</span>
            </div>
          </div>
        </div>

        {/* Date Posted filter */}
        <div className="mt-6">
          <h3 className="font-medium">Date Posted</h3>
          <div className="space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="24h" />
              <Label htmlFor="24h">Last 24 hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="week" />
              <Label htmlFor="week">Last week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="month" />
              <Label htmlFor="month">Last month</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="anytime" />
              <Label htmlFor="anytime">Anytime</Label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button variant="outline">Reset Filters</Button>
          <Button>Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFilters;
