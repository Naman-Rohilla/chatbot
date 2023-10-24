import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home";
import Chatgpt from "./components/chatgpt";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Ocr from "./components/ocr";
import NavMobile from "./components/navMobile";

function App() {
  const [intro, setIntro] = useState(true);

  const location = useLocation();

  const isContactRoute = location.pathname === "/about";
  const isOcrRoute = location.pathname === "/ocr";

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

  return (
    <>
      {intro ? (
        <div className="text-white font-styleFont italic h4 h-screen w-screen flex justify-center items-center text-6xl font-bold bg-gradient-to-b from-gray-950 from-50% to-zinc-900 to-100%">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Naman Rohilla")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                  setIntro(false);
                })
                .start();
            }}
          />
        </div>
      ) : (
        <>
          {/* <Router> */}
          {isMobile ? <NavMobile /> : <Navbar></Navbar>}

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Chatgpt />} />
            <Route exact path="/ocr" element={<Ocr />} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Routes>
          {/* {isContactRoute || isOcrRoute ? null : <Footer />} */}
          {/* <div className="h-full w-full text-white bg-black">halsdjasld</div> */}
          {/* </Router> */}
        </>
      )}
    </>
  );
}

export default App;
