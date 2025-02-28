"use client";

import { usePathname } from "next/navigation";

// import { Provider } from "react-redux";
// import Store from "@/redux/store";
import { Context } from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Header from "@/components/Header/Header";
import Separator from "@/components/Common/Separator";
import Footer from "@/components/Footer/Footer";
import BlogDetails from "@/components/Blogs/BlogDetails";
// import BlogListItems from "@/components/Blogs/Blog-Sections/BlogList-Items";
// import Instagram from "@/components/Instagram/Instagram";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";

const SingleBlog = ({ getAllblog }: any) => {

  const pathname = usePathname();

  const extractNumberFromPathname = (pathname: string) => {
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];
    const match = lastPart.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  };

  const blogId = extractNumberFromPathname(pathname);

  const matchedBlog = getAllblog.find((post: any) => post.id === blogId);

  // console.log(getAllblog)

  return (
    <>
      <Context>
        <MobileMenu />
        <Header headerSticky="rbt-sticky" headerType="" />
        <div className="rbt-overlay-page-wrapper">
          <BlogBreadCrumb />
          <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
            <div className="blog-content-wrapper rbt-article-content-wrapper">
              <BlogDetails matchedBlog={matchedBlog !== undefined ? matchedBlog : ""} />
              <div className="related-post pt--60">
                <div className="section-title text-start mb--40">
                  <span className="subtitle bg-primary-opacity">
                    Related Post
                  </span>
                  <h4 className="title">Similar Post</h4>
                </div>
                {/* <BlogListItems selectedBlog={getAllblog} start={1} end={4} /> */}
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <Footer />
      </Context>
    </>
  )
}

export default SingleBlog
