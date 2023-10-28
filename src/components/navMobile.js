import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navMobile.css";

export default function NavMobile({ targetElement, currentSlide }) {
  const [isOpen3, setIsOpen3] = useState(false);
  const containerRef = useRef(null);
  var location = useLocation();
  const [dropdown, setdropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [navstate, setnavstate] = useState(location.pathname);

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

  var navbarClasses = scrolling ? "navbar scrolled" : "navbar";

  const toggleDrawer = () => {
    setIsOpen3(!isOpen3);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen3(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsOpen3(false);
      }
    }

    // Attach the event listeners when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Remove the event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [toggleDrawer]);

  const scrollToFooter = () => {
    targetElement?.current?.scrollIntoView({
      behavior: 'smooth',
    });
    toggleDrawer()
  };

  useEffect(() => {
    setnavstate(location.pathname);
  }, [location]);

  return (
    <>
      <div
        ref={containerRef}
        className={navstate == "/chat-bot" ? `${navbarClasses} z-20 fixed text-white cursor-pointer  bg-opacity-90 flex justify-between items-center h-20 font-sans w-full` : `${navbarClasses} z-30 fixed text-white cursor-pointer  bg-opacity-90 flex justify-between items-center h-20 font-sans w-full`}
      >
        <div className={navstate == "/chat-bot" ? "flex" : "hidden"}></div>
        <div className="pl-2 h-full font-styleFont text-inherit flex items-center">
          <div className="h-10 w-10 border-dotted border border-white rounded-full">
            <img
              className="rounded-full h-10 w-10 p-0.5"
              src="./naman.jpg"
            ></img>
          </div>
          <span className={currentSlide == 0 && !scrolling && navstate == "/" ? "pl-2 font-bold text-gray-800" : "pl-2 font-bold"}>Naman Rohilla</span>
        </div>
        <div onClick={toggleDrawer} className="pr-3 cursor-pointer">
          {isOpen3 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              version="1.1"
              id="Capa_1"
              width="28px"
              height="28px"
              viewBox="0 0 476.166 476.166"
            >
              <g>
                <g>
                  <path d="M331.496,326.155c-0.168-0.686-0.371-1.579-0.482-2.62c-1.092-9.872-1.569-19.5-1.793-28.3h-19.87    c0.604,19.21,1.026,36.79,1.122,51.836c-14.411-4.55-29.31-6.469-44.69-5.438c-1.193,0.076-2.265,0.355-3.271,0.701    c-7.084,0.04-13.924,5.57-10.761,14.065c6.368,17.088,9.278,38.304-0.513,54.645c-11.836,19.769-32.958,19.23-53.039,21.759    c-12.284,1.554-25.339,0.731-37.714,1.077c-9.635,0.273-131.628,3.249-131.628,3.727c-0.287-115.61-4.108-283.668-5.655-399.266    c92.917,0.401,185.808,3.593,278.72,1.607c-0.111,29.061,0.609,62.096,1.666,96.088h22.891c-0.091-2.641-0.197-5.21-0.284-7.899    c-0.939-28.553-1.468-67.125-1.188-95.697c0.011-1.275-0.188-2.397-0.482-3.453c0.559-6.226-3.098-12.797-11.069-12.589    c-100.638,2.636-201.256-1.305-301.894-1.462C3.189,14.921-0.477,22.279,0.552,28.735C0.219,29.86-0.015,31.066,0,32.44    c1.519,120.084,5.647,292.639,5.779,412.743c0,2.691,0.764,4.886,1.985,6.611c0.744,5.094,4.4,9.598,11.02,9.431    c43.495-1.082,87.014-1.782,130.479-3.91c38.74-1.899,87.014,0.645,124.05-11.999c13.106-4.475,24.831-11.096,34.891-20.678    c18.377-17.52,24.653-41.04,26.232-65.821c0.488-7.647,0.503-15.416,0.315-23.165C333.06,332.751,331.877,329.547,331.496,326.155    z M271.591,421.353c9.328-15.899,11.659-35.409,6.805-56.559c11.237,0.437,22.317,2.604,32.813,7.053    c0.041,0.127,0.076,0.264,0.117,0.396C307.929,397.308,292.07,412.679,271.591,421.353z" />
                  <path d="M466.596,201.346c-33.383-34.672-66.766-69.34-100.153-104.012c-2.98-3.1-6.403-4.395-9.724-4.395    c-7.49,0-14.493,6.574-14.939,13.947c-0.163,0.65-0.355,1.285-0.432,1.99c-1.387,12.495-1.777,25.017-1.904,37.555h-12.599    h-22.938H188.538c-7.104,0-11.55,3.864-13.322,8.688c-2.019,2.153-3.334,5.027-3.334,8.713v46.812v9.978v46.812    c0,3.687,1.315,6.561,3.334,8.714c1.772,4.829,6.218,8.684,13.322,8.684h120.478h23.48h6.947    c0.121,12.542,0.518,25.064,1.904,37.557c0.076,0.711,0.269,1.34,0.432,1.99c0.446,7.373,7.449,13.944,14.939,13.944    c3.32,0,6.738-1.29,9.724-4.388c33.383-34.672,66.771-69.345,100.153-104.017c5.651-2.369,9.928-8.178,9.547-14.287    C476.523,209.519,472.247,203.718,466.596,201.346z M368.946,290.314c-0.106-6.397-0.152-12.807-0.152-19.215    c0-8.866-7.354-13.284-14.706-13.284c-0.03,0-0.066,0-0.102,0c-1.184-0.269-2.433-0.457-3.818-0.457h-9.298    c-0.909,0.173-1.869,0.274-2.91,0.274c-2.112,0-4.22-0.01-6.332-0.035c-2.641-0.036-5.276-0.117-7.911-0.233h-15.682H201.281    v-36.737v-9.978v-36.737h98.939c0.016,0,0.03-0.005,0.046-0.013c1.533-0.149,3.062-0.145,4.596-0.205    c4.067-0.173,8.13-0.138,12.172,0.218h10.958h22.181c1.386,0,2.636-0.183,3.818-0.459c0.03,0,0.066,0,0.102,0    c7.353,0,14.701-4.426,14.706-13.279c0-6.411,0.046-12.819,0.152-19.22c23.973,24.897,47.946,49.789,71.914,74.687    C416.893,240.525,392.919,265.423,368.946,290.314z" />
                </g>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              
            >
              <path
                d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"
                fill={currentSlide == 0 && !scrolling && navstate == "/" ? "black" : "white"}
              />
            </svg>
          )}
        </div>
        <div
          className={`drawer3 ${
            isOpen3 ? "open" : ""
          } z-50 font-sans flex flex-col  h-screen justify-between`}
        >
          <div className="w-full flex flex-col items-center">
            <div
              onClick={() => setIsOpen3(false)}
              className="absolute top-2 left-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z"
                  fill="white"
                />
              </svg>
            </div>
            <Link
              to="/"
              onClick={toggleDrawer}
              className="mt-20 space-x-4 relative w-3/4 flex justify-center ease-out transition group hover:text-gray-50 py-4 px-4 border-t border-dotted border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 360 360"
              >
                <path d="M352.163,163.115L198.919,9.871c-10.449-10.449-27.389-10.449-37.838,0L7.837,163.115c-7.652,7.652-9.94,19.16-5.8,29.158  c4.142,9.998,13.898,16.516,24.719,16.516h20.762v114.574c0,19.112,15.493,34.603,34.603,34.603h195.758  c19.11,0,34.603-15.492,34.603-34.603V208.789h20.762c10.821,0,20.578-6.519,24.719-16.516  C362.103,182.275,359.815,170.767,352.163,163.115z M220.431,307.785h-80.862v-45.583c0-22.33,18.102-40.431,40.431-40.431  s40.431,18.1,40.431,40.431V307.785z" />
              </svg>
              <Link to="/">Home</Link>
            </Link>
            <Link
              
              // onClick={toggleDrawer}
              className="relative w-3/4 flex flex-col justify-center pl-12 ease-out transition group duration-150 hover:text-gray-50 py-4 border-t border-dotted border-white"
            >
              <div className="flex w-full justify-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="white"
                >
                  <rect x="8" y="8" width="12" height="12" />
                  <rect x="26" y="8" width="12" height="12" />
                  <rect x="26" y="44" width="12" height="12" />
                  <rect x="44" y="8" width="12" height="12" />
                  <rect x="8" y="26" width="12" height="12" />
                  <rect x="26" y="26" width="12" height="12" />
                  <rect x="44" y="26" width="12" height="12" />
                  <rect x="8" y="44" width="12" height="12" />
                  <rect x="44" y="44" width="12" height="12" />
                </svg>
                <Link>Products</Link>
                <span onClick={() => setdropdown(!dropdown)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 1024 1024"
                    class="icon"
                    version="1.1"
                  >
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              {dropdown && (
                <Link
                  to="chat-bot"
                  onClick={toggleDrawer}
                  className="ease-in-out transition delay-105 duration-100 flex justify-center w-full pt-6 space-x-2"
                >
                  {/* <span>-</span> */}
                  <span>ChatBot</span>
                </Link>
              )}
              {dropdown && (
                <Link
                  to="/ocr"
                  onClick={toggleDrawer}
                  className="ease-in-out transition delay-105 duration-100 flex justify-center w-full pl-2 pt-6 space-x-2"
                >
                  {/* <span>-</span> */}
                  <span>OCR PDF</span>
                </Link>
              )}
            </Link>
            <div onClick={scrollToFooter}  className="relative space-x-4  w-3/4 flex justify-center ease-out transition group duration-150 hover:text-gray-50 py-4 px-4 border-y border-dotted border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                height="24px"
                width="24px"
                version="1.1"
                id="Filled_Icons"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                enable-background="new 0 0 24 24"
              >
                <g id="Contact-Us-Filled">
                  <path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z" />
                </g>
              </svg>
              <span>Contact</span>
            </div>
          </div>
          <div className="mb-5 font-styleFont flex items-center space-x-5">
            <div className="h-10 w-10 border-dotted border border-white rounded-full">
              <img
                className="rounded-full h-10 w-10 p-0.5"
                src="./naman.jpg"
              ></img>
            </div>
            <span>Naman Rohilla</span>
          </div>
        </div>
      </div>
    </>
  );
}
