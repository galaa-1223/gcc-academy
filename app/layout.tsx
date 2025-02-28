"use client";

import React, { useEffect } from "react";
import { AuthProvider } from "@/components/providers/Providers";
import "bootstrap/scss/bootstrap.scss";
import { Toaster } from "react-hot-toast";
// import { ConfettiProvider } from '@/components/providers/confetti';
import "@/public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "@/node_modules/sal.js/dist/sal.css";
import "@/public/css/plugins/fontawesome.min.css";
import "@/public/css/plugins/feather.css";
import "@/public/css/plugins/odometer.css";
import "@/public/css/plugins/animation.css";
import "@/public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: {children: React.ReactNode;}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <AuthProvider>
      <html lang="en">
        <body className={roboto.className} suppressHydrationWarning={true}>
          <Toaster position="bottom-center" />
          {/* <ConfettiProvider /> */}
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
