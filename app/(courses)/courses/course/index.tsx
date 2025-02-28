"use client";

import { useEffect, useState } from "react";
import { Context } from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Header from "@/components/Header/Header";
import CategoryHead from "@/components/Category/CategoryHead";
import Pagination from "@/components/Common/Pagination";
import Separator from "@/components/Common/Separator";
import Footer from "@/components/Footer/Footer";

import CourseFilter from "@/components/Category/CourseFilter";

import CourseDetails from "@/data/courseData.json";

const CoursePage = () => {

  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
  );

  const startIndex = (page - 1) * 6;

  const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

  const handleClick = (num: number) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(getAllCourse);
    setTotalPages(Math.ceil(getAllCourse.length / 6));
  }, [setTotalPages, setCourse]);

  return (
    <>
      <Context>
        <MobileMenu />
        <Header headerSticky="rbt-sticky" headerType={true} />
        <CategoryHead category={getAllCourse} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseFilter course={getSelectedCourse} />

                {getAllCourse.length > 6 ? (
                  <div className="row">
                    <div className="col-lg-12 mt--60">
                      <Pagination
                        totalPages={totalPages}
                        pageNumber={page}
                        handleClick={handleClick}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        <Separator />
        <Footer />
      </Context>
    </>
  )
}

export default CoursePage
