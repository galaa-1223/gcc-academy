"use client";

import Link from "next/link";

import User from "./offcanvas/User";
import { useAppContext } from "@/context/Context";

type HeaderRightType = {
  btnClass: string;
  btnText: string;
  userType: string;
  hrefLink?: any;
  authenticated: boolean;
}

const HeaderRight = ({ ...props }: HeaderRightType) => {

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
        {!props.authenticated ? (
        <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href="#">
            <i className="feather-user"></i>
            {props.userType}
          </Link>
          <User />
        </li>
        ):(
        <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href={props.hrefLink}>
            <i className="feather-user"></i>
            {props.userType}
          </Link>
        </li> 
        )}

        <li className="access-icon rbt-user-wrapper d-block d-xl-none">
          <Link className="rbt-round-btn" href={!props.authenticated ? "#" : props.hrefLink}>
            <i className="feather-user"></i>
          </Link>
          {!props.authenticated ? (
          <User />
          ):("")}
        </li>
      </ul>

      {/* <div className="rbt-btn-wrapper d-none d-xl-block">
        <Link className={`rbt-btn ${btnClass}`} href="#">
          <span data-text={`${btnText}`}>{btnText}</span>
        </Link>
      </div> */}

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
