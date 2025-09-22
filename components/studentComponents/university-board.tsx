"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const notices = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  text: `Notice ${i + 1}: Important update regarding semester exams and scheduling.`,
  category: i % 2 === 0 ? "Exams" : "Career",
  date: `Oct ${25 + i}, 2025`,
}))

const useExpandableList = (items: any[], defaultVisible = 4) => {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, defaultVisible)
  return { visibleItems, showAll, setShowAll }
}

export default function UniversityBoard() {
  const { visibleItems, showAll, setShowAll } = useExpandableList(notices)

  return (
    <Card>
      <CardHeader>
        <CardTitle>University Board</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {visibleItems.map((n) => (
            <li key={n.id} className="p-3 border rounded-lg flex flex-col gap-1 hover:bg-muted/30 transition">
              <div className="flex justify-between items-center">
                <p className="font-medium">{n.text}</p>
                <Badge
                  variant="secondary"
                  className={n.category === "Exams" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}
                >
                  {n.category}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">Published: {n.date}</p>
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
