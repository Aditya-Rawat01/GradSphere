"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const internships = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Internship ${i + 1}`,
  company: i % 2 === 0 ? "TechSolutions Inc." : "Data Insights Co.",
  location: i % 2 === 0 ? "Remote" : "Bengaluru",
  stipend: i % 2 === 0 ? "₹20,000/month" : "₹15,000/month",
  duration: `${3 + (i % 3)} months`,
  deadline: `Nov ${20 + i}, 2025`,
}))
type internshipType = typeof internships
const useExpandableList = (items: internshipType, defaultVisible = 4) => {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, defaultVisible)
  return { visibleItems, showAll, setShowAll }
}

export default function InternshipBoard() {
  const { visibleItems, showAll, setShowAll } = useExpandableList(internships)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Internship Opportunities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {visibleItems.map((i) => (
            <li key={i.id} className="p-3 border rounded-lg flex flex-col gap-1 hover:bg-muted/30 transition">
              <p className="font-semibold">{i.title}</p>
              <p className="text-sm text-muted-foreground">{i.company} · {i.location}</p>
              <p className="text-xs">Stipend: {i.stipend} · Duration: {i.duration}</p>
              <p className="text-xs text-red-500">Apply by {i.deadline}</p>
              <Button variant="link" size="sm" className="self-start">Apply Now</Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <Button variant="outline" size="sm" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
