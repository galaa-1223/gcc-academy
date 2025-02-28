"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

type ContextType = {
  isLightTheme: true | false;
  setLightTheme: any;
  toggle: true | false;
  setToggle: any;
  search: true | false;
  setSearch: any;
  mobile: true | false;
  setMobile: any;
  smallMobileMenu: true | false;
  setsmallMobileMenu: any;
  toggleTheme: () => void;
};

const ContextDefaultValues: ContextType = {
  isLightTheme: true,
  setLightTheme: true,
  toggle: true,
  setToggle: true,
  search: true,
  setSearch: true,
  mobile: true,
  setMobile: true,
  smallMobileMenu: true,
  setsmallMobileMenu: true,
  toggleTheme: () => {},
};

const CreateContext = createContext<ContextType>(ContextDefaultValues);

export const useAppContext = () => useContext(CreateContext);

type Props = {
  children: React.ReactNode;
}

export function Context({ children }: Props) {

  const [isLightTheme, setLightTheme] = useState<boolean>(true);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [smallMobileMenu, setsmallMobileMenu] = useState(true);

  // useEffect(() => {
  //   dispatch({ type: "COUNT_CART_TOTALS" });
  // }, [cart]);

  useEffect(() => {
    const themeType = localStorage.getItem("histudy-theme");
    if (themeType === "dark") {
      setLightTheme(false);
      document.body.classList.add("active-dark-mode");
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove("active-dark-mode");
      localStorage.setItem("histudy-theme", "light");
    } else {
      document.body.classList.add("active-dark-mode");
      localStorage.setItem("histudy-theme", "dark");
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setLightTheme((prevTheme: any) => !prevTheme);
  };


  const value = {
    isLightTheme,
    setLightTheme,
    toggle,
    setToggle,
    search,
    setSearch,
    mobile,
    setMobile,
    smallMobileMenu,
    setsmallMobileMenu,
    toggleTheme,
  };

  return (
    <>
      <CreateContext.Provider value={value}>
        {children}
      </CreateContext.Provider>
    </>
  )
};

