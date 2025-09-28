
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

export default function UniversityForm() {
  const router = useRouter();
  const [universityName, setUniversityName] = useState("Bharati Vidyapeeth");
  const [affiliation, setAffiliation] = useState("Indraprastha University");
  const [place, setPlace] = useState("Delhi");
  const [letterFromDean, setLetterFromDean] = useState<File | null>(null);
  const [identityProof, setIdentityProof] = useState("proof");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !universityName.trim() ||
      !affiliation.trim() ||
      !place.trim() ||
      // !letterFromDean ||                    **************************** to be correct again *************************
      !identityProof.trim()
    ) {
      toast.error("Please fill all the fields.");
      return;
    }
    router.push("/Dashboards/Admin");
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
          <CardTitle className="text-2xl pt-2">Admin Registration</CardTitle>
          <CardDescription>
            All the details are filled already for prototype navigation.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label>University Name</Label>
            <Input placeholder="Enter university name" value={universityName} onChange={e => setUniversityName(e.target.value)} />
          </div>
          <div>
            <Label>Affiliation</Label>
            <Input placeholder="Enter affiliation" value={affiliation} onChange={e => setAffiliation(e.target.value)} />
          </div>
          <div>
            <Label>Place</Label>
            <Input placeholder="Enter place" value={place} onChange={e => setPlace(e.target.value)} />
          </div>
          <div>
            <Label>Letter from Dean</Label>
            <Input type="file" onChange={e => setLetterFromDean(e.target.files && e.target.files[0] ? e.target.files[0] : null)} />
          </div>
          <div>
            <Label>Identity Proof Request</Label>
            <Input placeholder="Govt/Official ID details" value={identityProof} onChange={e => setIdentityProof(e.target.value)} />
          </div>
          <Button type="submit" className="cursor-pointer">Submit</Button>
        </form>
        </CardContent>
      </Card>
    </div>
  )
}
