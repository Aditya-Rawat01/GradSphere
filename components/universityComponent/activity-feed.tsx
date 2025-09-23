"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const activities = [
  "Event 'Tech Symposium' was created",
  "Company ABC posted a new internship",
  "Student Ravi joined the platform",
]

export default function RecentActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {activities.map((a, i) => (
            <li key={i} className="text-sm p-2 bg-muted rounded">
              {a}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}