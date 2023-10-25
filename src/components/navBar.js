import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"

export default function Navbar({ targetElement, targetHome }) {
  var location = useLocation();
  const [navstate, setnavstate] = useState(location.pathname);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add an event listener to handle scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToFooter = () => {
    targetElement?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToHome = () => {
    targetHome?.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  var navbarClasses = scrolling ? "navbar scrolled" : "navbar";

  useEffect(() => {
    setnavstate(location.pathname);
  }, [location]);

  return (
    <>
      <div className={`${navbarClasses} z-20 fixed text-white cursor-pointer flex justify-between h-20 font-sans w-full`}>
        <div className="h-full font-styleFont flex pl-20 items-center">
          <div className="h-10 w-10 border-dotted border border-white rounded-full">
            <img
              className="rounded-full h-10 w-10 p-0.5"
              src="./naman.jpg"
            ></img>
          </div>
          <span className="pl-3">Naman Rohilla</span>
        </div>
        <div className="h-full font-sans flex pr-20 space-x-10 items-center">
          {navstate == "/" ? (
            <Link
              to="/"
              onClick={scrollToHome}
              className="relative ease-out transition group hover:text-gray-50 py-1 px-4 border border-dotted border-white"
            >
              <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
              <Link to="/">Home</Link>
            </Link>
          ) : (
            <Link
              to="/"
              onClick={scrollToHome}
              className="relative ease-out transition group hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white"
            >
              <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
              <Link to="/">Home</Link>
            </Link>
          )}
          {navstate == "/about" || navstate == "/ocr" ? (
            <Link
              to="/about"
              className="relative ease-out transition group duration-150 hover:text-gray-50 py-1 px-4 border border-dotted border-white"
            >
              <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>

              <Link to="/about">Products</Link>
            </Link>
          ) : (
            <span className="relative ease-out transition group duration-150 hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white">
              <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
              <span className="group-hover:flex group-hover:flex-col hidden border border-dotted h-16 w-24 bg-gray-900 bg-opacity-80 z-50 absolute mt-7 -left-0">
                <Link
                  to="/about"
                  className="text-sm border-b h-9 flex justify-center items-center"
                >
                  ChatBot
                </Link>
                <Link
                  to="/ocr"
                  className="text-sm h-9 flex justify-center items-center"
                >
                  OCR PDF
                </Link>
              </span>
              <span>Products</span>
            </span>
          )}
          <div onClick={scrollToFooter} className="relative ease-out transition group duration-150 hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white">
            <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
