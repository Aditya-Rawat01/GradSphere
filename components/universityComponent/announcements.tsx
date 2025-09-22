"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const announcements = [
  { id: 1, text: "Semester exams will start from Dec 10th." },
  { id: 2, text: "University Fest registrations open now." },
]

export default function Announcements() {
  const [list, setList] = useState(announcements)
  const [newAnnouncement, setNewAnnouncement] = useState("")

  const handlePost = () => {
    if (!newAnnouncement) return
    setList([{ id: list.length + 1, text: newAnnouncement }, ...list])
    setNewAnnouncement("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Textarea
            placeholder="Write a new announcement..."
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
          />
          <Button size="sm" className="mt-2" onClick={handlePost}>
            Post
          </Button>
        </div>
        <ul className="space-y-2">
          {list.map((a) => (
            <li key={a.id} className="text-sm p-2 border rounded">
              {a.text}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}