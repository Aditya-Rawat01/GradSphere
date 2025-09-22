"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Building2 } from "lucide-react"

type UserType = "alumni" | "student" | "university" | null

export default function SignAs() {
    const [selectedUserType, setSelectedUserType] = useState<UserType>(null)

  const userTypes = [
    {
      id: "alumni" as const,
      label: "Sign up as Alumni",
      description: "Connect with your alma mater and fellow graduates",
      icon: GraduationCap,
    },
    {
      id: "student" as const,
      label: "Sign up as Student",
      description: "Access resources and connect with peers",
      icon: BookOpen,
    },
    {
      id: "university" as const,
      label: "Sign up as University",
      description: "Manage your institution and connect with students",
      icon: Building2,
    },
  ]

  const handleUserTypeSelect = (userType: UserType) => {
    setSelectedUserType(userType)
    if (userType) {
      console.log("User type selected:" , userType)
      // Here you would typically redirect to the appropriate signup flow
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-2">GradSphere</h1>
            <p className="text-gray-600">{"Connecting the educational community"}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4 text-balance">{"Join Our Educational Community"}</h2>
            <p className="text-xl text-gray-600 text-pretty">
              {"Choose your role to get started and connect with peers, mentors, and institutions"}
            </p>
          </div>

          <Card className="w-full max-w-4xl mx-auto bg-white border-gray-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-black">Choose Your Path</CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Select your role to join our educational community
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* User Type Selection */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleUserTypeSelect(type.id)}
                  className={`p-8 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg hover:scale-105 ${
                    selectedUserType === type.id
                      ? "border-black bg-gray-50 shadow-lg scale-105"
                      : "border-gray-200 hover:border-gray-400 bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className={`p-4 rounded-full transition-all duration-300 ${
                        selectedUserType === type.id ? "bg-black text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-lg ${selectedUserType === type.id ? "text-black" : "text-gray-800"}`}
                      >
                        {type.label}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {selectedUserType && (
          <div className="text-center">
            <Button className="px-12 py-4 text-lg font-semibold bg-black hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Continue as {selectedUserType.charAt(0).toUpperCase() + selectedUserType.slice(1)}
            </Button>
          </div>
        )}

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-black hover:text-gray-700 font-medium hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              {"By signing up, you agree to our "}
              <a href="#" className="text-black hover:underline">
                Privacy Policy
              </a>
              {" and "}
              <a href="#" className="text-black hover:underline">
                Terms of Service
              </a>
            </p>
            <p>© 2025 GradSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
