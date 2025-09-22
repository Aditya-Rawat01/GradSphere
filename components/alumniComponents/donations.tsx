import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Users, TrendingUp } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "New Computer Science Lab",
    description: "Help us build a state-of-the-art computer science laboratory for current students",
    goal: 250000,
    raised: 187500,
    donors: 156,
    daysLeft: 45,
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "Student Scholarship Fund",
    description: "Support deserving students with financial assistance for their education",
    goal: 100000,
    raised: 78900,
    donors: 89,
    daysLeft: 30,
    category: "Scholarships",
  },
  {
    id: 3,
    title: "Alumni Mentorship Program",
    description: "Fund the expansion of our mentorship program to reach more students",
    goal: 50000,
    raised: 42300,
    donors: 67,
    daysLeft: 60,
    category: "Programs",
  },
]

const personalContributions = [
  {
    year: "2023",
    amount: 2500,
    campaigns: 3,
  },
  {
    year: "2022",
    amount: 1800,
    campaigns: 2,
  },
  {
    year: "2021",
    amount: 1200,
    campaigns: 1,
  },
]

export default function DonationsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Donations & Contributions</h1>
        <Button className="gap-2">
          <Heart className="h-4 w-4" />
          Make a Donation
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Personal Impact Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Your Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$5,500</div>
              <p className="text-sm text-muted-foreground">Total Contributed</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold">6</div>
                <p className="text-xs text-muted-foreground">Campaigns</p>
              </div>
              <div>
                <div className="text-xl font-semibold">3</div>
                <p className="text-xs text-muted-foreground">Years Active</p>
              </div>
            </div>
            <Badge className="w-full justify-center" variant="secondary">
              Top 10% Contributor
            </Badge>
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-xl font-semibold">Active Fundraising Campaigns</h2>
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                  </div>
                  <Badge variant="outline">{campaign.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>${campaign.raised.toLocaleString()} raised</span>
                      <span>${campaign.goal.toLocaleString()} goal</span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {Math.round((campaign.raised / campaign.goal) * 100)}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">of goal</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{campaign.donors}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">donors</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{campaign.daysLeft}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">days left</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Donate Now</Button>
                    <Button variant="outline">Share Campaign</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contribution History */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Your Contribution History</CardTitle>
            <CardDescription>Track your donations over the years</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {personalContributions.map((contribution) => (
                <div key={contribution.year} className="p-4 border rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">${contribution.amount.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">{contribution.year}</p>
                    <p className="text-xs text-muted-foreground mt-1">{contribution.campaigns} campaigns supported</p>
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
