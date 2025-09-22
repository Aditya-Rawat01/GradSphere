"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const subjects = [
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
        <div>
          <h2 className="text-lg font-semibold">CGPA: 8.7 / 10</h2>
          <Progress value={87} className="w-full mt-2" />
        </div>

        <div className="space-y-3">
          {subjects.map((subj, i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">{subj.name}</p>
                <p className="text-xs text-muted-foreground">Attendance: {subj.attendance}%</p>
              </div>
              <p className="font-semibold">{subj.grade}</p>
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm">Download Report Card</Button>
      </CardContent>
    </Card>
  )
}
