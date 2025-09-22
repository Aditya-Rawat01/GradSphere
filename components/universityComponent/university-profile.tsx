"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function UniversityProfile() {
  const [editMode, setEditMode] = useState(false)

  const [university, setUniversity] = useState({
    name: "Global Tech University",
    logoUrl: "/university-logo.png",
    email: "contact@gtu.edu",
    phone: "‪+91 98765 43210‬",
    address: "123 University Road, Bengaluru, India",
    description:
      "Global Tech University is dedicated to fostering innovation, research, and holistic student growth. With strong alumni and corporate ties, GTU prepares students for global opportunities.",
    website: "https://www.gtu.edu",
    established: "1985",
  })

  const [formData, setFormData] = useState(university)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setUniversity(formData)
    setEditMode(false)
  }

  const handleCancel = () => {
    setFormData(university)
    setEditMode(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>University Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Logo + Basic Info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20 rounded">
            <AvatarImage src={university.logoUrl} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          {editMode ? (
            <div className="flex flex-col gap-2">
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="University Name"
              />
              <Input
                value={formData.established}
                onChange={(e) => handleChange("established", e.target.value)}
                placeholder="Established Year"
              />
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold">{university.name}</h2>
              <p className="text-sm text-muted-foreground">
                Established: {university.established}
              </p>
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
              <p className="text-sm text-muted-foreground">📧 {university.email}</p>
              <p className="text-sm text-muted-foreground">📱 {university.phone}</p>
            </>
          )}
        </div>

        {/* Address */}
        <div>
          <p className="text-sm font-medium">Address</p>
          {editMode ? (
            <Input
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="University Address"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{university.address}</p>
          )}
        </div>

        {/* Website */}
        <div>
          <p className="text-sm font-medium">Website</p>
          {editMode ? (
            <Input
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="University Website"
            />
          ) : (
            <a
              href={university.website}
              target="_blank"
              className="text-sm text-blue-600 hover:underline"
            >
              {university.website}
            </a>
          )}
        </div>

        {/* Description */}
        <div>
          <p className="text-sm font-medium">Description</p>
          {editMode ? (
            <Textarea
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="University Description"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{university.description}</p>
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