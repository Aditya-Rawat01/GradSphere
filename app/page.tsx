// app/page.tsx

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image"
// import AlumniDashboard from "@/components/Dashboards/alumniDashboard"
import StudentDashboard from "@/components/Dashboards/studentDashboard"
// import UniversityDashboard from "@/components/Dashboards/universityDashboard"
// import Homepage from "@/components/homepage"
// import SignAs from "@/components/SignComponents/signAs"
// import Signin from "@/components/SignComponents/Signin"
// import Signup from "@/components/SignComponents/Signup"

export default function Home() {
  return (
    <div className="w-screen h-full">
      {/* Uncomment whichever component you’re working on */}
      {/* <Homepage /> */}
      {/* <Signup /> */}
      {/* <Signin /> */}
      <StudentDashboard />
      {/* <UniversityDashboard /> */}
      {/* <AlumniDashboard /> */}
      {/* <SignAs /> */}
    </div>
  )
}
