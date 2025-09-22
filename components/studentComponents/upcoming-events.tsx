"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// ---------- Types ----------
type Event = {
  id: number
  title: string
  date: string
  location: string
  type: "In-person" | "Virtual"
  description: string
  link: string
}

// ---------- Sample Data ----------
const events: Event[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}`,
  date: `Nov ${10 + i}, 2025`,
  location: i % 2 === 0 ? "Main Auditorium" : "Virtual",
  type: i % 2 === 0 ? "In-person" : "Virtual",
  description:
    i % 2 === 0
      ? "Hands-on workshop on AI and React."
      : "Panel discussion with industry leaders.",
  link: "https://example.com/register",
}))

const useExpandableList = (items: any[], defaultVisible = 4) => {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, defaultVisible)
  return { visibleItems, showAll, setShowAll }
}

// ---------- Component ----------
export default function UpcomingEvents() {
  const { visibleItems, showAll, setShowAll } = useExpandableList<Event>(events)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {visibleItems.map((e) => (
            <li
              key={e.id}
              className="p-3 border rounded-lg flex flex-col gap-2 hover:bg-muted/30 transition"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{e.title}</p>
                <Badge
                  variant="outline"
                  className={
                    e.type === "Virtual" ? "text-blue-600" : "text-green-600"
                  }
                >
                  {e.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {e.date} · {e.location}
              </p>
              <p className="text-sm">{e.description}</p>
              <Button asChild variant="link" size="sm" className="self-start">
                <a href={e.link} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
