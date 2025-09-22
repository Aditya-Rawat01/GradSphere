"use client"

import { useState } from "react"
import { Bell, Search, User, Users, Calendar, Briefcase, Heart, TrendingUp, MessageSquare, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import  ProfileSection  from "@/components/alumniComponents/profile"
import  NetworkingSection  from "@/components/alumniComponents/networking"
import  EventsSection from "@/components/alumniComponents/events"
import  JobsSection  from "@/components/alumniComponents/job-section"
import  DonationsSection  from "@/components/alumniComponents/donations"
import  CareerTrackerSection  from "@/components/alumniComponents/career-tracker"
import  CommunityFeedSection from "@/components/alumniComponents/community-feed"

const navigationItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "networking", label: "Networking", icon: Users },
  { id: "events", label: "Events", icon: Calendar },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "donations", label: "Donations", icon: Heart },
  { id: "career", label: "Career Tracker", icon: TrendingUp },
  { id: "community", label: "Community Feed", icon: MessageSquare },
]

export default function AlumniDashboard() {
  const [activeSection, setActiveSection] = useState("profile")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />
      case "networking":
        return <NetworkingSection />
      case "events":
        return <EventsSection />
      case "jobs":
        return <JobsSection />
      case "donations":
        return <DonationsSection />
      case "career":
        return <CareerTrackerSection />
      case "community":
        return <CommunityFeedSection />
      default:
        return <ProfileSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          {/* Logo/Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-sidebar-border">
            <h1 className="text-xl font-bold text-sidebar-foreground">Alumni Hub</h1>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 p-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    activeSection === item.id
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-4 w-4" />
          </Button>

          <div className="flex-1 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search alumni, events, jobs..." className="pl-10" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/professional-headshot.png" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 space-y-6 p-4 sm:p-6">{renderActiveSection()}</main>
      </div>
    </div>
  )
}
