"use client";

import Link from "next/link";

import User from "./offcanvas/User";
import { useAppContext } from "@/context/Context";

type HeaderRightType = {
  btnClass: string;
  btnText: string;
  userType: string
}

const HeaderRight = ({ btnClass, btnText, userType }: HeaderRightType) => {

  const { mobile, setMobile, search, setSearch } = useAppContext();

  return (
    <div className="header-right">
      <ul className="quick-access">
        <li className="access-icon">
          <Link
            className={`search-trigger-active rbt-round-btn ${
              search ? "" : "open"
            }`}
            href="#"
            onClick={() => setSearch(!search)}
          >
            <i className="feather-search"></i>
          </Link>
        </li>

        <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href="#">
            <i className="feather-user"></i>
            {userType}
          </Link>
          <User />
        </li>

        <li className="access-icon rbt-user-wrapper d-block d-xl-none">
          <Link className="rbt-round-btn" href="#">
            <i className="feather-user"></i>
          </Link>
          <User />
        </li>
      </ul>

      <div className="rbt-btn-wrapper d-none d-xl-block">
        <Link className={`rbt-btn ${btnClass}`} href="#">
          <span data-text={`${btnText}`}>{btnText}</span>
        </Link>
      </div>

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderRight
