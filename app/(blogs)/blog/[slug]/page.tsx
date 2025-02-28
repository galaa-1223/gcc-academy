import BackToTop from "@/app/backToTop";

import SingleBlog from "./blog-details/page";

import { getPostBySlug, getAllPostsMeta } from "@/mdx";

const BlogDetailLayout = async ({ params }: any) => {

  const content:any  = [];//await getPageContent(params.slug);

  const blog = await getAllPostsMeta();

  return (
    <>
      <SingleBlog getParams={content} getAllblog={blog} />
      <BackToTop />
    </>
  )
}

export default BlogDetailLayout
