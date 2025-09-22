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
import Link  from "next/link"
import { useState } from "react"

export default function selectrole() {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
    <Card className="w-full max-w-sm  " >
      <CardHeader>
        <h1 className="font-bold text-2xl text-center">GradSphere</h1>
        <CardTitle>  Select your role (Student, Alumni, or Admin) to proceed. </CardTitle>
       
        <CardAction>
         
        </CardAction>
      </CardHeader>
      <CardContent >
         <Button   className="w-full mb-4" type="submit">
            <Link href="/auth/role/admin">Admin</Link>
            </Button>
         <Button  className="w-full mb-4" type="submit">
            <Link href="/auth/role/alumni">Alumni</Link>
            </Button>
         <Button  className="w-full" type="submit">
            <Link href="/auth/role/student">Student</Link>
            </Button>
      
      </CardContent>
      
    </Card>
  </div>
  )
}
