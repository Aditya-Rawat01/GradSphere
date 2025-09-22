"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function PlatformAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Analytics</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">Total Alumni</p>
          <h2 className="text-2xl font-bold">12,450</h2>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">New Users</p>
          <h2 className="text-2xl font-bold">340</h2>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">Donations</p>
          <h2 className="text-2xl font-bold">₹8.5L</h2>
        </div>
      </CardContent>
    </Card>
  )
}