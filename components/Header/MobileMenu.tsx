"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo/logo.png";

import Nav from "./Nav";
import { useAppContext } from "@/context/Context";
import data from '@/data/site.json'

const MobileMenu = () => {

  const { mobile, setMobile } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            {data.description && (
            <p className="description">
              {data.description}
            </p>
            )}
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              {data.contact.email.name && (
              <li>
                <Link href={`mailto:${data.contact.email.link}`}>
                  <i className="feather-mail"></i>{data.contact.email.name}
                </Link>
              </li>
              )}
              {data.contact.phone.name && (
              <li>
                <Link href={`tel:${data.contact.phone.tel}`}>
                  <i className="feather-phone"></i>{data.contact.phone.name}
                </Link>
              </li>
              )}
            </ul>
          </div>

          <Nav />

          <div className="mobile-menu-bottom">
            {/* <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="#"
              >
                <span>Enroll Now</span>
              </Link>
            </div> */}

            <div className="social-share-wrapper">
            {data.contact.socials && (
              <>
                <span className="rbt-short-title d-block">Бидэнтэй нэгдэх</span>
                <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                  {data.contact.socials.map((social: {name: string, href: string, icon: string}, index:number) => (
                    <li key={index}>
                      <Link href={social.href} title={social.name} target="_blank">
                        <i className={social.icon}></i>
                      </Link>
                    </li>
                    )
                  )}
                </ul>
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
