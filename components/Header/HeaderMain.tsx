"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import Link from "next/link";
import Image from "next/image";

import HeaderRight from "./HeaderRight";
import Search from "./offcanvas/Search";
import Category from "./Category";
import Nav from "./Nav";

import logo from "@/public/images/logo/logo.png";
import logoLight from "@/public/images/dark/logo/logo-light.png";
import { useAppContext } from "@/context/Context";
import { HeaderMainType } from '@/type/types'

const HeaderMain = ({
  headerType,
  gapSpaceBetween,
  sticky,
  headerSticky,
  navigationEnd,
  container,
}: HeaderMainType) => {

  const { data: session, status } = useSession()

  const [isSticky, setIsSticky] = useState(false);
  const { isLightTheme } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky}  ${
          !headerType && isSticky ? `${headerSticky}` : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    {isLightTheme ? (
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    ) : (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    )}
                  </Link>
                </div>
              </div>

              <div className="header-info d-none d-lg-block">
                {/* <Category /> */}
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
            {status === "authenticated" ? (
            <HeaderRight 
              userType="Admin"
              btnText="Enroll Now"
              btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
              authenticated={true}
            />
            ):(
              <HeaderRight 
              userType="Нэвтрэх"
              btnText="Enroll Now"
              btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
              hrefLink="/login"
              authenticated={true}
            />
            )}
          </div>
        </div>
        <Search />
      </div>
    </>
  )
}

export default HeaderMain
