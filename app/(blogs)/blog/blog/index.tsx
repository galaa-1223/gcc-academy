"use client";

import { Context } from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Header from "@/components/Header/Header";
import Separator from "@/components/Common/Separator";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Common/Banner";
import BlogList from "@/components/Blogs/BlogList";

const BlogPage = ({ getBlog } : any ) => {

  // console.log(getBlog)

  return (
    <>
      <Context>
          <MobileMenu />
          <Header headerSticky="rbt-sticky" headerType="" />
          <Banner col="col-lg-12" text="All Courses" blogdata={getBlog} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogList isPagination={true} blogdata={getBlog} />
            </div>
          </div>

        <Separator />
        <Footer />
      </Context>
    </>
  )
}

export default BlogPage
