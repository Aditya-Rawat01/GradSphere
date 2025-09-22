"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// ---------- Sample Data ----------
const mentors = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Mentor ${i + 1}`,
  role: i % 2 === 0 ? "Software Engineer @ Google" : "Product Manager @ Microsoft",
  avatarUrl: `https://i.pravatar.cc/150?u=${i + 1}`,
  expertise: i % 2 === 0 ? ["React", "AI", "System Design"] : ["Leadership", "Strategy", "Product Roadmaps"],
  bio: `Mentor ${i + 1} has over ${5 + i} years of industry experience mentoring students and professionals.`,
  experience: `${3 + i} years at top companies including Google, Microsoft, and startups.`,
  education: i % 2 === 0 ? "M.Tech in Computer Science, IIT Delhi" : "MBA, IIM Bangalore",
  linkedin: "https://linkedin.com/in/example",
  email: `mentor${i + 1}@example.com`,
  availability: i % 2 === 0 ? "Available" : "Busy",
}))

// ---------- Helper Hook ----------
const useExpandableList = (items: any[], defaultVisible = 4) => {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, defaultVisible)
  return { visibleItems, showAll, setShowAll }
}

// ---------- Mentor Profile Modal ----------
const MentorProfileCard = ({ mentor, onClose }: { mentor: any; onClose: () => void }) => {
  if (!mentor) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <Card className="w-full max-w-lg relative">
        <CardHeader>
          <CardTitle>{mentor.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <img src={mentor.avatarUrl} alt={mentor.name} className="w-20 h-20 rounded-full" />
            <div>
              <p className="font-semibold">{mentor.role}</p>
              <Badge className={mentor.availability === "Available" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}>
                {mentor.availability}
              </Badge>
              <div className="flex flex-wrap gap-1 mt-2">
                {mentor.expertise.map((tag: string, i: number) => (
                  <span key={i} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-3">{mentor.bio}</p>
          <p className="text-sm mb-1">
            <strong>Experience:</strong> {mentor.experience}
          </p>
          <p className="text-sm mb-1">
            <strong>Education:</strong> {mentor.education}
          </p>

          <div className="mt-4 space-y-2">
            <a href={mentor.linkedin} target="_blank" className="text-sm text-blue-600 hover:underline">
              LinkedIn Profile
            </a>
            <p className="text-sm text-gray-600">Email: {mentor.email}</p>
          </div>
        </CardContent>
        <div className="flex justify-end gap-2 p-4">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
          <Button size="sm">Request Mentorship</Button>
        </div>
      </Card>
    </div>
  )
}

// ---------- Main Component ----------
export default function RecommendedMentors() {
  const { visibleItems, showAll, setShowAll } = useExpandableList(mentors)
  const [selectedMentor, setSelectedMentor] = useState<any | null>(null)
  const [requestedMentors, setRequestedMentors] = useState<Set<number>>(new Set())

  const toggleRequest = (id: number) => {
    const newSet = new Set(requestedMentors)
    newSet.has(id) ? newSet.delete(id) : newSet.add(id)
    setRequestedMentors(newSet)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Mentors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {visibleItems.map((m) => (
          <div
            key={m.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition"
          >
            <div className="flex items-center gap-3">
              <img src={m.avatarUrl} alt={m.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setSelectedMentor(m)}>
                View
              </Button>
              <Button
                size="sm"
                onClick={() => toggleRequest(m.id)}
                className={requestedMentors.has(m.id) ? "bg-red-500 hover:bg-red-600" : ""}
              >
                {requestedMentors.has(m.id) ? "Cancel" : "Request"}
              </Button>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <Button variant="outline" size="sm" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      </CardContent>

      {selectedMentor && <MentorProfileCard mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />}
    </Card>
  )
}
