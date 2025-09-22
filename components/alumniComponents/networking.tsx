import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, MessageCircle, UserPlus, Search } from "lucide-react"

const connections = [
  {
    id: 1,
    name: "Sarah Johnson",
    batch: "2017",
    role: "Product Manager",
    company: "Google",
    location: "Mountain View, CA",
    avatar: "/professional-woman-diverse.png",
    mutual: 12,
  },
  {
    id: 2,
    name: "Michael Chen",
    batch: "2019",
    role: "Data Scientist",
    company: "Meta",
    location: "Menlo Park, CA",
    avatar: "/professional-man.png",
    mutual: 8,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    batch: "2016",
    role: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    avatar: "/professional-woman-designer.png",
    mutual: 15,
  },
]

const mentorRequests = [
  {
    id: 1,
    name: "Alex Kumar",
    batch: "2023",
    field: "Software Engineering",
    message: "Hi! I'm a recent graduate looking for guidance in full-stack development...",
    avatar: "/young-professional.png",
  },
  {
    id: 2,
    name: "Lisa Wang",
    batch: "2022",
    field: "Product Management",
    message: "Would love to learn about transitioning from engineering to product...",
    avatar: "/young-professional-woman.png",
  },
]

export default function NetworkingSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Networking & Mentorship</h1>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Find Alumni
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Network Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Network Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">127</div>
              <p className="text-sm text-muted-foreground">Total Connections</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold">23</div>
                <p className="text-xs text-muted-foreground">Same Batch</p>
              </div>
              <div>
                <div className="text-xl font-semibold">45</div>
                <p className="text-xs text-muted-foreground">Same Field</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold">8</div>
                <p className="text-xs text-muted-foreground">Mentees</p>
              </div>
              <div>
                <div className="text-xl font-semibold">3</div>
                <p className="text-xs text-muted-foreground">Mentors</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alumni Connections */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Alumni Connections</CardTitle>
            <CardDescription>Connect with fellow alumni in your network</CardDescription>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search connections..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="batch">Same Batch</SelectItem>
                  <SelectItem value="field">Same Field</SelectItem>
                  <SelectItem value="location">Same Location</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {connections.map((connection) => (
                <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={connection.avatar || "/placeholder.svg"} alt={connection.name} />
                      <AvatarFallback>
                        {connection.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{connection.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {connection.role} at {connection.company}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Class of {connection.batch}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{connection.mutual} mutual connections</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <MessageCircle className="h-4 w-4" />
                    Message
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mentor Requests */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Mentorship Requests</CardTitle>
            <CardDescription>Recent requests from alumni seeking mentorship</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {mentorRequests.map((request) => (
                <div key={request.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
                      <AvatarFallback>
                        {request.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{request.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          Class of {request.batch}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{request.field}</p>
                      <p className="text-sm text-muted-foreground mb-3">{request.message}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          Decline
                        </Button>
                      </div>
                    </div>
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
