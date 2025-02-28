"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Login from "@/components/Login/Login";
import Newsletter2 from "@/components/Newsletters/Newsletter2";
import { Context } from "@/context/Context";
import React from "react";
// import { Provider } from "react-redux";

const LoginPage = () => {

  // toast.error('Invalid credentials');

  return (
    <>
      <Context>
        <Header headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <BreadCrumb title="Login & Register" text="Login & Register" />

        <div className="rbt-elements-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row gy-5 row--30">
              <Login />
            </div>
          </div>
        </div>

        <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
          <Newsletter2 />
        </div>

        <Footer />
      </Context>
    </>
  );
};

export default LoginPage;
