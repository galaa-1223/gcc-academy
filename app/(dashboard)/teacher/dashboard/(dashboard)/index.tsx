"use client";

import Separator from "@/components/Common/Separator";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Dashboard from "@/components/Teacher/Dashboard";
import TeacherDashboardHeader from "@/components/Teacher/TeacherDashboardHeader";
import TeacherDashboardSidebar from "@/components/Teacher/TeacherDashboardSidebar";
import { Context } from "@/context/Context";
// import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const TeacherDashboard = () => {
  return (
    <>
      <Context>
        <MobileMenu />
        <Header headerSticky="rbt-sticky" headerType="" />

        <div className="rbt-page-banner-wrapper">
          <div className="rbt-banner-image" />
        </div>
        <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TeacherDashboardHeader />

                <div className="row g-5">
                  <div className="col-lg-3">
                    <TeacherDashboardSidebar />
                  </div>

                  <div className="col-lg-9">
                    <Dashboard />
                  </div>
                </div>
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

export default TeacherDashboard;
