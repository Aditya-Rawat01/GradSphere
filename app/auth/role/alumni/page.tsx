"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster} from "sonner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AlumniForm() {
  const router = useRouter();
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [currentWork, setCurrentWork] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !rollNumber.trim() ||
      !department.trim() ||
      !course.trim() ||
      !admissionYear.trim() ||
      !graduationYear.trim() ||
      !profilePhoto ||
      !currentWork.trim() ||
      !linkedin.trim()
    ) {
      toast.error("Please fill all the fields.");
      return;
    }
    router.push("/Dashboards/Alumni");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Toaster/>
      <Card className="w-full max-w-md p-2 shadow-lg">
        <CardHeader>
          {/* Back Button that links to the role selection page */}
          <Link href="/auth/select-role" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors w-fit">
            <ArrowLeft size={16} />
            Go Back
          </Link>
          
          {/* Form Heading */}
          <CardTitle className="text-2xl pt-2">Alumni Registration</CardTitle>
          <CardDescription>
            Please fill in your details to complete your profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="rollNumber">Roll Number</Label>
              <Input id="rollNumber" placeholder="Enter roll number" value={rollNumber} onChange={e => setRollNumber(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter department" value={department} onChange={e => setDepartment(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="course">Course</Label>
              <Input id="course" placeholder="Enter course" value={course} onChange={e => setCourse(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="admissionYear">Year of Admission</Label>
              <Input id="admissionYear" type="number" placeholder="YYYY" value={admissionYear} onChange={e => setAdmissionYear(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="graduationYear">Year of Graduation</Label>
              <Input id="graduationYear" type="number" placeholder="YYYY" value={graduationYear} onChange={e => setGraduationYear(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="profilePhoto">Profile Photo</Label>
              <Input id="profilePhoto" type="file" onChange={e => setProfilePhoto(e.target.files && e.target.files[0] ? e.target.files[0] : null)} />
            </div>
            <div>
              <Label htmlFor="currentWork">Current Work</Label>
              <Input id="currentWork" placeholder="Enter your job / company" value={currentWork} onChange={e => setCurrentWork(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/username" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
            </div>
            <Button type="submit" className="w-full mt-2 cursor-pointer">
              Submit Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}