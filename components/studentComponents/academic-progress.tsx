"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Define subject type
type Subject = {
  name: string
  grade: string
  attendance: number
}

// Mock subjects data
const subjects: Subject[] = [
  { name: "Data Structures", grade: "A", attendance: 92 },
  { name: "Operating Systems", grade: "B+", attendance: 88 },
  { name: "Machine Learning", grade: "A-", attendance: 95 },
  { name: "Computer Networks", grade: "B", attendance: 85 },
]

export default function AcademicProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall CGPA */}
        <div>
          <h2 className="text-lg font-semibold">CGPA: 8.7 / 10</h2>
          <Progress value={87} className="w-full mt-2" />
        </div>

        {/* Subjects list */}
        <div className="space-y-3">
          {subjects.map((subj) => (
            <div
              key={subj.name}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{subj.name}</p>
                <p className="text-xs text-muted-foreground">
                  Attendance: {subj.attendance}%
                </p>
              </div>
              <span className="font-semibold">{subj.grade}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <Button variant="outline" size="sm">
          Download Report Card
        </Button>
      </CardContent>
    </Card>
  )
}
