import React, { useState, useEffect } from "react";
import HomeWeb from "./homeWeb";
import HomeMobile from "./homeMobile";

export default function Home({ targetHome, currentSlide, setCurrentSlide }) {
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

  return <>{isMobile ? <HomeMobile targetHome={targetHome} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} /> : <HomeWeb targetHome={targetHome} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />}</>;
}
