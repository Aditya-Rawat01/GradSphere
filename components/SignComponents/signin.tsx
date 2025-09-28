'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Info } from "lucide-react"
import Link  from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export function Signin() {
    const [email,setemail]=useState("m@example.com")
    const [password,setpassword]=useState("password")
    const router =useRouter();
    const handlesubmission=()=>{
      if(!email ||!password){
        return toast.error("please fill in the details");
      }
      toast("user signedin succesfully");
      router.push("/auth/select-role")
    }
  return (
     <Card className="w-full max-w-md p-2 border border-gray-200/80 bg-white/95 shadow-xl  shadow-black/20 backdrop-blur-sm">
      <CardHeader>
         <h1 className="font-bold text-2xl text-center">GradSphere</h1>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">
            <Link href="/auth/signup">Sign Up</Link>
            </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="m@example.com"
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" value={password} required onChange={(e)=>setpassword(e.target.value)} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={handlesubmission}>
          Login
        </Button>
        <Button variant="outline" className="w-full" onClick={()=>toast.info("Implementing google login soon...")}>
          Login with Google
        </Button>
        <div className="flex gap-2 text-center text-sm"><Info/> For ease in signin, default values are put in the input field, just click login.</div>
      </CardFooter>
    </Card>
  )
}
