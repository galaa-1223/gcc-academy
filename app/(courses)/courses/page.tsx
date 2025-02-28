import BackToTop from "@/app/backToTop";
import CoursePage from './course/index'

export const metadata = {
  title: "Courses",
  description: "Courses",
};

const CourseLayout = () => {
  return (
    <>
      <CoursePage />
      <BackToTop />
    </>
  )
}

export default CourseLayout
