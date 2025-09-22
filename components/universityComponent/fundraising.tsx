"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const campaigns = [
  { id: 1, title: "Library Renovation", raised: "₹2.3L", goal: "₹5L" },
  { id: 2, title: "Scholarship Fund", raised: "₹4L", goal: "₹10L" },
]

export default function FundraisingCampaigns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fundraising Campaigns</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="p-4 border rounded-lg flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">{c.title}</p>
              <p className="text-sm text-muted-foreground">
                Raised {c.raised} of {c.goal}
              </p>
            </div>
            <Button size="sm">View</Button>
          </div>
        ))}
        <Button size="sm" className="w-full">
          Create New Campaign
        </Button>
      </CardContent>
    </Card>
  )
}