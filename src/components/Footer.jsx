import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (e) => {
    setActiveLink(e.target.href);
  };

  return (
    <>
      <div className="bg-[#25252d]" style={{ borderTopRightRadius: "5rem" }}>
        <div className="xl:flex sm:flex  sm:justify-center  md:justify-between p-5 mx-auto container  w-full rounded-tr-3xl text-white text-center ">
          <div className="mb-5 ">
            {/* <img src={logo} alt="" /> */}
            <h1 className="font-bold text-4xl mb-5">Blogr</h1>
          </div>
          <div className="flex flex-col mb-7 text-center ">
            <h2 className="text-2xl font-bold mb-3 font-overpass">Product</h2>
            <ul className=" ">
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Overview
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Marketplace
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mb-5  text-center">
            <h2 className="text-2xl font-bold mb-3 font-overpass">Company</h2>
            <ul className=" ">
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mb-5 text-center">
            <h2 className="text-2xl font-bold mb-3">Connect</h2>
            <ul className="">
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  onClick={handleLinkClick}
                  className={activeLink === "" ? "border-b border-white" : ""}
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className={activeLink === "#" ? "border-4 border-white" : "#"}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;