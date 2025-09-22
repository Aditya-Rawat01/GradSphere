import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, GraduationCap, Edit } from "lucide-react"

export default function ProfileSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Alumni Profile</h1>
        <Button className="gap-2">
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main Profile Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-start gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/professional-headshot.png" alt="John Doe" />
                <AvatarFallback className="text-lg">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-2xl">John Doe</CardTitle>
                <CardDescription className="text-lg">Class of 2018 • Computer Science</CardDescription>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Briefcase className="h-3 w-3" />
                    Senior Software Engineer
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <MapPin className="h-3 w-3" />
                    San Francisco, CA
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Passionate software engineer with 5+ years of experience in full-stack development. Currently working at a
              leading tech company, focusing on scalable web applications and mentoring junior developers.
            </p>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Connections</span>
              <span className="font-semibold">127</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Events Attended</span>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mentees</span>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Years Since Graduation</span>
              <span className="font-semibold">6</span>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Bachelor of Science</h4>
              <p className="text-sm text-muted-foreground">Computer Science</p>
              <p className="text-sm text-muted-foreground">University Name • 2014-2018</p>
              <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Senior Software Engineer</h4>
              <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
              <p className="text-sm text-muted-foreground">2021 - Present</p>
            </div>
            <div>
              <h4 className="font-semibold">Software Engineer</h4>
              <p className="text-sm text-muted-foreground">StartupXYZ</p>
              <p className="text-sm text-muted-foreground">2018 - 2021</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">GraphQL</Badge>
              <Badge variant="secondary">MongoDB</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
