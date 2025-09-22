
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function StudentForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-8 shadow-lg">
         <CardHeader>
          {/* Back Button that links to the role selection page */}
          <Link href="/auth/select-role" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors w-fit">
            <ArrowLeft size={16} />
            Go Back
          </Link>
          
          {/* Form Heading */}
          <CardTitle className="text-2xl pt-2">Student Registration</CardTitle>
          <CardDescription>
            Please fill in your details to complete your profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form className="flex flex-col gap-4">
          <div>
            <Label>Roll Number</Label>
            <Input placeholder="Enter roll number" />
          </div>
          <div>
            <Label>Department</Label>
            <Input placeholder="Enter department" />
          </div>
          <div>
            <Label>Course</Label>
            <Input placeholder="Enter course" />
          </div>
          <div>
            <Label>Year of Admission</Label>
            <Input type="number" placeholder="YYYY" />
          </div>
          <div>
            <Label>Year of Graduation</Label>
            <Input type="number" placeholder="YYYY" />
          </div>
          <div>
            <Label>Profile Photo</Label>
            <Input type="file" />
          </div>
          <Button type="submit" className="cursor-pointer">Submit</Button>
        </form>
        </CardContent>
      </Card>
    </div>
  )
}
