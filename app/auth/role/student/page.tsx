"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Toaster} from "sonner";

export default function StudentForm() {
  const router = useRouter();
  const [rollNumber, setRollNumber] = useState("02878281");
  const [department, setDepartment] = useState("Information Technology");
  const [course, setCourse] = useState("B.Tech");
  const [admissionYear, setAdmissionYear] = useState("2025");
  const [graduationYear, setGraduationYear] = useState("2029");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !rollNumber.trim() ||
      !department.trim() ||
      !course.trim() ||
      !admissionYear.trim() ||
      !graduationYear.trim() 

      // || !profilePhoto                                **************************** to be correct again *************************
    ) {
      toast.error("Please fill all the fields.");
      return;
    }
    router.push("/Dashboards/Student");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Toaster/>
      <Card className="w-full max-w-md p-5 shadow-lg">
         <CardHeader>
          {/* Back Button that links to the role selection page */}
          <Link href="/auth/select-role" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors w-fit">
            <ArrowLeft size={16} />
            Go Back
          </Link>
          {/* Form Heading */}
          <CardTitle className="text-2xl pt-2">Student Registration</CardTitle>
          <CardDescription>
            All the details are filled already for prototype navigation.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label>Roll Number</Label>
            <Input placeholder="Enter roll number" value={rollNumber} onChange={e => setRollNumber(e.target.value)} />
          </div>
          <div>
            <Label>Department</Label>
            <Input placeholder="Enter department" value={department} onChange={e => setDepartment(e.target.value)} />
          </div>
          <div>
            <Label>Course</Label>
            <Input placeholder="Enter course" value={course} onChange={e => setCourse(e.target.value)} />
          </div>
          <div>
            <Label>Year of Admission</Label>
            <Input type="number" placeholder="YYYY" value={admissionYear} onChange={e => setAdmissionYear(e.target.value)} />
          </div>
          <div>
            <Label>Year of Graduation</Label>
            <Input type="number" placeholder="YYYY" value={graduationYear} onChange={e => setGraduationYear(e.target.value)} />
          </div>
          <div>
            <Label>Profile Photo</Label>
            <Input type="file" onChange={e => setProfilePhoto(e.target.files && e.target.files[0] ? e.target.files[0] : null)} />
          </div>
          <Button type="submit" className="cursor-pointer">Submit</Button>
        </form>
        </CardContent>
      </Card>
    </div>
  )
}
