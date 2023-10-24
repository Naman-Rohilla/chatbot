import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navMobile.css";

export default function NavMobile() {
  const [isOpen3, setIsOpen3] = useState(false);
  const containerRef = useRef(null);

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

  return (
    <>
      <div
        ref={containerRef}
        className="z-20 absolute text-white cursor-pointer bg-gray-900 bg-opacity-90 flex justify-between items-center h-20 font-sans w-full"
      >
        <div></div>
        <div className="h-full font-styleFont flex items-center">
          <div className="h-10 w-10 border-dotted border border-white rounded-full">
            <img
              className="rounded-full h-10 w-10 p-0.5"
              src="./naman.jpg"
            ></img>
          </div>
          <span className="pl-3">Naman Rohilla</span>
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
                fill="white"
              />
            </svg>
          )}
        </div>
        <div
          className={`drawer3 ${isOpen3 ? "open" : ""} font-sans flex flex-col`}
        >
          <Link
            to="/"
            onClick={toggleDrawer}
            className="relative ease-out transition group hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white"
          >
            <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
            <Link to="/">Home</Link>
          </Link>
          <Link
            to="/about"
            onClick={toggleDrawer}
            className="relative ease-out transition group duration-150 hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white"
          >
            <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
            <Link to="/about">Products</Link>
          </Link>
          <div className="relative ease-out transition group duration-150 hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white">
            <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
