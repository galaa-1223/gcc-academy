import BackToTop from "@/app/backToTop";
import TeacherDashboard from "./(dashboard)";

export const metadata = {
  title: "Instructor Dashboard - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const TeacherDashboardLayout = () => {
  return (
    <>
      <TeacherDashboard />
      <BackToTop />
    </>
  )
}

export default TeacherDashboardLayout
