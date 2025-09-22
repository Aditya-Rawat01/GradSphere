import Image from "next/image";
import AlumniDashboard from "@/components/Dashboards/alumniDashboard";
import StudentDashboard from "@/components/Dashboards/studentDashboard";
import UniversityDashboard from "@/components/Dashboards/universityDashboard";
import Homepage from "@/components/homepage";
import Signin from "@/components/SignComponents/signin";
import Signup from "@/components/SignComponents/signup";
import SignAs from "@/components/SignComponents/signAs";
export default function Home() {
  return (
    // uncomment your component and code in your respective components=>_____.tsx file
    <div className="w-screen h-full">
      {/* {<Homepage/>} */}
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <StudentDashboard/> */}
      {/* <UniversityDashboard/> */}
      {/* {<AlumniDashboard/>} */}
      <SignAs/>
    </div>
  );
}
