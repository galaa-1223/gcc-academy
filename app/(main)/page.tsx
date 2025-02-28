"use client";

import React from "react";
import { Context } from "@/context/Context";
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";

import Home from '@/components/Home/Home'

export default function HomePage({ getBlog }: any) {

  return (
    <>
      <Context>
        <MobileMenu />
        <Header headerSticky="rbt-sticky" headerType=""/>
        <Home blogs={getBlog} />
        <Separator />
        <Footer />
      </Context>
    </>
  );
}
