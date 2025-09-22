import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Alumni Reunion 2024",
    date: "March 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "University Campus, Main Hall",
    attendees: 245,
    type: "Reunion",
    description: "Join us for our biggest alumni gathering of the year with dinner, networking, and awards ceremony.",
  },
  {
    id: 2,
    title: "Tech Talk: AI in Modern Development",
    date: "February 28, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual Event",
    attendees: 89,
    type: "Workshop",
    description: "Learn about the latest AI tools and techniques from industry experts.",
  },
  {
    id: 3,
    title: "Career Fair & Networking Mixer",
    date: "March 8, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Downtown Convention Center",
    attendees: 156,
    type: "Career",
    description: "Connect with recruiters and explore new career opportunities.",
  },
]

const pastEvents = [
  {
    id: 1,
    title: "Holiday Networking Gala",
    date: "December 15, 2023",
    attendees: 198,
    type: "Social",
    highlights: "Great turnout with 3 new partnerships formed",
  },
  {
    id: 2,
    title: "Entrepreneurship Workshop",
    date: "November 22, 2023",
    attendees: 67,
    type: "Workshop",
    highlights: "5 new startup ideas pitched, 2 received funding",
  },
]

export default function EventsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Events & Announcements</h1>
        <Button>Create Event</Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="mt-2">{event.description}</CardDescription>
                    </div>
                    <Badge variant={event.type === "Reunion" ? "default" : "secondary"}>{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button>RSVP</Button>
                    <Button variant="outline">Add to Calendar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <div className="grid gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="mt-2">{event.highlights}</CardDescription>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{event.attendees} attended</span>
                      </div>
                    </div>
                    <Button variant="outline">View Photos</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
