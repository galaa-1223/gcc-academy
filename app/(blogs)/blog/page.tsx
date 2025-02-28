import BackToTop from "@/app/backToTop";
import BlogPage from './blog/index'
import { getAllPostsMeta } from "@/mdx";


export const metadata = {
  title: "Blog With Sidebar- Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const BlogLayout = async () => {

  const blog = await getAllPostsMeta();
  return (
    <>
      <BlogPage getBlog={blog} />
      <BackToTop />
    </>
  )
}

export default BlogLayout
