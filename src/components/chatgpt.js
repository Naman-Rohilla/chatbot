import React, { useState, useEffect, useRef } from "react";
import ChatgptWeb from "./chatgptWeb";
import ChatgptMobile from "./chatgptMobile";

export default function Chatgpt() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 768);
      setIsTablet(windowWidth > 768 && windowWidth <= 1024);
    }

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return <>{isMobile ? <ChatgptMobile /> : <ChatgptWeb />}</>;
}
