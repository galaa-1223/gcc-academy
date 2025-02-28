"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";

import Category from "../Category/Category";
import MainBanner from "./MainBanner";
import Card from "../Card/Card";
import About from "../About/About";
// import CallToAction from "../Call-To-Action/CallToAction";
// import Counter from "../Counters/Counter";
import Testimonial from "../Testimonial/Testimonial";
// import EventCarouse from "../Events/EventCarouse";
import Team from "../Team/Team";
import BlogGridTop from "../Blogs/BlogGrid-Top";
import Newsletter from "../Newsletters/Newsletter";

const threshold: any = 0.01;
const once: boolean = true;

import { ParallaxProvider } from "react-scroll-parallax";

const Home = ({ blogs }: any) => {

  
  

  useEffect(() => {
    sal(threshold);
  }, []);

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-banner-area rbt-banner-1">
          <MainBanner />
        </div>

        <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    CATEGORIES
                  </span>
                  <h2 className="title">
                    Explore Top Courses Caterories <br /> That Change Yourself
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              <Category />
            </div>
          </div>
        </div>

        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Histudy Course student <br /> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <Card
                col="col-lg-4 col-md-6 col-sm-6 col-12"
                mt="mt--30"
                start={0}
                end={3}
                isDesc={true}
                isUser={true}
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course (40)</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>
        </div>

        <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      People like histudy education. <br /> No joking - here’s
                      the proof!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>

        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Our Teacher
                  </span>
                  <h2 className="title">Whose Inspirations You</h2>
                </div>
              </div>
            </div>
            <Team />
          </div>
        </div>

        <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Blog Post</span>
                  <h2 className="title">Post Popular Post.</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/blog"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <BlogGridTop BlogData={blogs} />
          </div>
        </div>

        <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <Newsletter />
        </div>
      </main>
    </>
  )
}

export default Home
