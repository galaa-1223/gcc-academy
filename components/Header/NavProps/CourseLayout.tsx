import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type CLProps = {
  MenuData: any;
  courseTitle: string;
  type: string;
  courseType: any;
  num: number;
}

const CourseLayout = ({ MenuData, courseTitle, type, courseType, num }: CLProps) => {

  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
        <h3 className="rbt-short-title">{courseTitle}</h3>
        <ul className="mega-menu-item">
          {MenuData &&
            MenuData.menuData.map((data: {menuType: string, menuItems: any}, index: number) => {
              if (data.menuType === type) {
                if (courseType) {
                  const coursElements = data.menuItems?.map(
                    (value: {link: string, coming: string, title: string, subTitle: string}, innerIndex: number) =>
                      innerIndex < num && (
                        <li key={innerIndex}>
                          <Link
                            className={isActive(value.link) ? "active" : ""}
                            href={value.coming ? "/maintenance" : value.link}
                          >
                            {value.title}
                            {value.coming ? (
                              <span className="rbt-badge-card ms-3">
                                {value.coming}
                              </span>
                            ) : value.subTitle ? (
                              <span className="rbt-badge-card">
                                {value.subTitle}
                              </span>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      )
                  );
                  return coursElements;
                }
                const coursElements = data.menuItems?.map(
                  (value: {link: string, coming: string, title: string, subTitle: string}, innerIndex: number) =>
                    innerIndex > num && (
                      <li key={innerIndex}>
                        <Link
                          className={isActive(value.link) ? "active" : ""}
                          href={value.coming ? "/maintenance" : value.link}
                        >
                          {value.title}
                          {value.coming ? (
                            <span className="rbt-badge-card ms-3">
                              {value.coming}
                            </span>
                          ) : value.subTitle ? (
                            <span className="rbt-badge-card ms-3">
                              {value.subTitle}
                            </span>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                    )
                );
                return coursElements;
              }
            })}
        </ul>
      </div>
    </>
  )
}

export default CourseLayout
