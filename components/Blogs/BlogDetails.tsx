"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import BlogAuthor from "./Blog-Author";

const BlogDetails = ({ matchedBlog }: any) => {
  const thumbsSwiperRef = useRef(null);

  return (
    <>
      <div className="content">
        <h4>{matchedBlog.title}</h4>

        <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
          <figure>
            {matchedBlog.addImg && (
              <Image
                src={matchedBlog.addImg}
                width={1085}
                height={645}
                priority
                alt="Blog Images"
              />
            )}

            <figcaption>{matchedBlog.caption}</figcaption>
          </figure>
        </div>

        <p>{matchedBlog.descFive}</p>
        <h4>{matchedBlog.titleTwo}</h4>

        <p>
          {matchedBlog.descSix}
          <Link href="#">{matchedBlog.linkThree}</Link>.
        </p>

        <p>
          <Link href="#">{matchedBlog.linkTwo}</Link> {matchedBlog.descFive}
        </p>

        <div className="tagcloud">
          {matchedBlog &&
            matchedBlog.tags.map((tagItem: any, innerIndex: number) => (
              <Link href="#" key={innerIndex}>
                {tagItem}
              </Link>
            ))}
        </div>

        <div className="social-share-block">
          <div className="post-like">
            <Link href="#">
              <i className="feather feather-thumbs-up"></i>
              <span>2.2k Like</span>
            </Link>
          </div>
          <ul className="social-icon social-default transparent-with-border">
            {matchedBlog &&
              matchedBlog.social.map((socialItem: any, innerIndex: number) => (
                <li key={innerIndex}>
                  <Link href={socialItem.url}>
                    <i className={socialItem.icon}></i>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="about-author">
          {matchedBlog &&
            matchedBlog.author.map((author: any, innerIndex: number) => (
              <BlogAuthor {...author} author={author} key={innerIndex} />
            ))}
        </div>
        <div className="rbt-comment-area">
          <div className="rbt-total-comment-post">
            <div className="title">
              <h4 className="mb--0">30+ Comments</h4>
            </div>
            <div className="add-comment-button">
              <a
                className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                href="#"
              >
                <span className="btn-text">Add Your Comment</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </>
  );
};

export default BlogDetails;
