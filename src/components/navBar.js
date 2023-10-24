import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="z-20 absolute text-white cursor-pointer bg-transparent flex justify-between h-20 font-sans w-full">
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
          <Link to="/" className="relative ease-out transition group hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white">
            <span className="h-2 w-2 bg-white absolute invisible group-hover:visible rounded-full -end-1 animate-ping -top-1"></span>
            <Link to="/">Home</Link>
          </Link>
          <Link to="/about" className="relative ease-out transition group duration-150 hover:text-gray-50 py-1 px-4 hover:border hover:border-dotted hover:border-white">
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
