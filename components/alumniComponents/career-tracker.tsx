import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, Briefcase, Award, MapPin } from "lucide-react"

const careerUpdates = [
  {
    id: 1,
    name: "Sarah Johnson",
    batch: "2017",
    avatar: "/professional-woman-diverse.png",
    update: "Promoted to Senior Product Manager",
    company: "Google",
    location: "Mountain View, CA",
    date: "2 days ago",
    type: "promotion",
  },
  {
    id: 2,
    name: "Michael Chen",
    batch: "2019",
    avatar: "/professional-man.png",
    update: "Started new role as Data Science Lead",
    company: "Meta",
    location: "Menlo Park, CA",
    date: "1 week ago",
    type: "new_job",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    batch: "2016",
    avatar: "/professional-woman-designer.png",
    update: "Launched her own design consultancy",
    company: "Rodriguez Design Studio",
    location: "San Francisco, CA",
    date: "2 weeks ago",
    type: "entrepreneurship",
  },
  {
    id: 4,
    name: "David Kim",
    batch: "2020",
    avatar: "/professional-engineer.png",
    update: "Completed MBA at Stanford",
    company: "Stanford Graduate School of Business",
    location: "Stanford, CA",
    date: "1 month ago",
    type: "education",
  },
]

const industryStats = [
  { industry: "Technology", count: 45, percentage: 35 },
  { industry: "Finance", count: 28, percentage: 22 },
  { industry: "Healthcare", count: 18, percentage: 14 },
  { industry: "Consulting", count: 15, percentage: 12 },
  { industry: "Education", count: 12, percentage: 9 },
  { industry: "Other", count: 10, percentage: 8 },
]

export default function CareerTrackerSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Career Progress Tracker</h1>
        <Button>Share Update</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Career Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Career Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">128</div>
              <p className="text-sm text-muted-foreground">Alumni Tracked</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Promotions (30 days)</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>New Jobs (30 days)</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Career Changes</span>
                <span className="font-semibold">5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Career Updates</CardTitle>
            <CardDescription>Latest professional milestones from your network</CardDescription>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Updates</SelectItem>
                  <SelectItem value="promotion">Promotions</SelectItem>
                  <SelectItem value="new_job">New Jobs</SelectItem>
                  <SelectItem value="entrepreneurship">Startups</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {careerUpdates.map((update) => (
                <div key={update.id} className="flex items-start gap-3 p-3 border rounded-lg">
                  <Avatar>
                    <AvatarImage src={update.avatar || "/placeholder.svg"} alt={update.name} />
                    <AvatarFallback>
                      {update.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{update.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        Class of {update.batch}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          update.type === "promotion"
                            ? "bg-green-100 text-green-800"
                            : update.type === "new_job"
                              ? "bg-blue-100 text-blue-800"
                              : update.type === "entrepreneurship"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {update.type === "promotion" ? (
                          <Award className="h-3 w-3 mr-1" />
                        ) : update.type === "new_job" ? (
                          <Briefcase className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        )}
                        {update.type.replace("_", " ")}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{update.update}</p>
                    <p className="text-sm text-muted-foreground">{update.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {update.location}
                      </div>
                      <span>{update.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Congratulate
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Industry Distribution</CardTitle>
            <CardDescription>Where alumni are working</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {industryStats.map((stat) => (
                <div key={stat.industry} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{stat.industry}</span>
                    <span className="font-medium">{stat.count}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${stat.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
