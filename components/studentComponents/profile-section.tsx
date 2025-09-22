"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function ProfileSection() {
  const [editMode, setEditMode] = useState(false)

  const [student, setStudent] = useState({
    name: "Riya Sharma",
    avatarUrl: "/student-profile.png",
    email: "riya.sharma@example.com",
    phone: "+91 98765 43210",
    enrollment: "CS2025-1234",
    course: "B.Tech in Computer Science",
    year: "3rd Year",
    bio: "Passionate about AI/ML and building impactful solutions.",
    skills: ["React", "AI/ML", "Data Structures", "Leadership"],
    interests: ["Hackathons", "Open Source", "Product Design"],
  })

  const [formData, setFormData] = useState(student)

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setStudent(formData)
    setEditMode(false)
  }

  const handleCancel = () => {
    setFormData(student)
    setEditMode(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar + Basic Info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={student.avatarUrl} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {editMode ? (
            <div className="flex flex-col gap-2">
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Full Name"
              />
              <Input
                value={formData.course}
                onChange={(e) => handleChange("course", e.target.value)}
                placeholder="Course"
              />
              <Input
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
                placeholder="Year"
              />
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold">{student.name}</h2>
              <p className="text-sm text-muted-foreground">{student.course}</p>
              <p className="text-sm">Year: {student.year}</p>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-sm font-medium">Contact</p>
          {editMode ? (
            <div className="space-y-2">
              <Input
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email"
              />
              <Input
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Phone"
              />
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">📧 {student.email}</p>
              <p className="text-sm text-muted-foreground">📱 {student.phone}</p>
            </>
          )}
        </div>

        {/* Enrollment */}
        <div>
          <p className="text-sm font-medium">Enrollment</p>
          {editMode ? (
            <Input
              value={formData.enrollment}
              onChange={(e) => handleChange("enrollment", e.target.value)}
              placeholder="Enrollment ID"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{student.enrollment}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm font-medium">Bio</p>
          {editMode ? (
            <Textarea
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Write a short bio..."
            />
          ) : (
            <p className="text-sm text-muted-foreground">{student.bio}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <p className="text-sm font-medium">Skills</p>
          {editMode ? (
            <Input
              value={formData.skills.join(", ")}
              onChange={(e) => handleChange("skills", e.target.value.split(",").map((s) => s.trim()))}
              placeholder="Comma separated skills"
            />
          ) : (
            <div className="flex flex-wrap gap-2 mt-1">
              {student.skills.map((s, i) => (
                <Badge key={i} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Interests */}
        <div>
          <p className="text-sm font-medium">Interests</p>
          {editMode ? (
            <Input
              value={formData.interests.join(", ")}
              onChange={(e) =>
                handleChange("interests", e.target.value.split(",").map((i) => i.trim()))
              }
              placeholder="Comma separated interests"
            />
          ) : (
            <div className="flex flex-wrap gap-2 mt-1">
              {student.interests.map((i, idx) => (
                <Badge key={idx} className="bg-indigo-100 text-indigo-600">
                  {i}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        {editMode ? (
          <div className="flex gap-2">
            <Button size="sm" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outline" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
        )}
      </CardContent>
    </Card>
  )
}
