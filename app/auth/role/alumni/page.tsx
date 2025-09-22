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
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // A popular icon library to use with shadcn

export default function AlumniForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
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
          <form className="flex flex-col gap-4">
            <div>
              <Label htmlFor="rollNumber">Roll Number</Label>
              <Input id="rollNumber" placeholder="Enter roll number" />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter department" />
            </div>
            <div>
              <Label htmlFor="course">Course</Label>
              <Input id="course" placeholder="Enter course" />
            </div>
            <div>
              <Label htmlFor="admissionYear">Year of Admission</Label>
              <Input id="admissionYear" type="number" placeholder="YYYY" />
            </div>
            <div>
              <Label htmlFor="graduationYear">Year of Graduation</Label>
              <Input id="graduationYear" type="number" placeholder="YYYY" />
            </div>
            <div>
              <Label htmlFor="profilePhoto">Profile Photo</Label>
              <Input id="profilePhoto" type="file" />
            </div>
            <div>
              <Label htmlFor="currentWork">Current Work</Label>
              <Input id="currentWork" placeholder="Enter your job / company" />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
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