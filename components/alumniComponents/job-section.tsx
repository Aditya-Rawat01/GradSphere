import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign, Search } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    postedBy: "Sarah Johnson (Class of 2017)",
    postedDate: "2 days ago",
    description: "We're looking for an experienced frontend developer to join our growing team...",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    referralAvailable: true,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    postedBy: "Michael Chen (Class of 2019)",
    postedDate: "1 week ago",
    description: "Join our product team to drive innovation and user experience...",
    skills: ["Product Strategy", "User Research", "Analytics", "Agile"],
    referralAvailable: true,
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataCorp",
    location: "New York, NY",
    type: "Internship",
    salary: "$25/hour",
    postedBy: "Emily Rodriguez (Class of 2016)",
    postedDate: "3 days ago",
    description: "Great opportunity for students to gain hands-on experience in data science...",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"],
    referralAvailable: false,
  },
]

export default function JobsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Job & Internship Opportunities</h1>
        <Button>Post a Job</Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Find Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobListings.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">{job.company}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">
                    Posted by {job.postedBy} • {job.postedDate}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>{job.type}</Badge>
                  {job.referralAvailable && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Referral Available
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{job.description}</p>

              <div className="grid gap-3 md:grid-cols-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.type}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button>Apply Now</Button>
                {job.referralAvailable && <Button variant="outline">Request Referral</Button>}
                <Button variant="ghost">Save Job</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
