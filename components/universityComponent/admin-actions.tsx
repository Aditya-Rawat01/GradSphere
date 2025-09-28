"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const pendingUsers = [
  { id: 1, name: "Riya Sharma", type: "Student" },
  { id: 2, name: "Amit Verma", type: "Alumni" },
]

export default function AdminActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Approvals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {pendingUsers.map((u) => (
          <div
            key={u.id}
            className="flex items-center justify-between border p-3 rounded-lg"
          >
            <div>
              <p className="font-semibold">{u.name}</p>
              <p className="text-sm text-muted-foreground">{u.type}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={()=>toast.success("User will be added successfully")}>Approve</Button>
              <Button variant="outline" size="sm">
                Reject
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
