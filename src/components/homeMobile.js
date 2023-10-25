import React, { useState, useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeMobile({ targetHome }) {
  const autoPlayInterval = 6000;

  const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
        console.log(currentSlide, "current");
      }, autoPlayInterval);

      return () => {
        clearInterval(timer);
      };
    }, [autoPlayInterval, 2]);

  return (
    <>
      <div ref={targetHome} className="mobileHeight relative">
        <div className="h-full w-full overflow overflow-y-visible overflow-x-clip bg-gray-800 absolute flex justify-center items-center">
          <div className="box z-1 "></div>
          <div className="outer-ring z-1"></div>
          <div className="inner-ring z-1"></div>
          <div className="flex flex-col z-100 space-y-5 left-5 top-20 absolute">
            <div className="flex space-x-5">
              <span id="smallCircle_1" className="h-2 w-2 rounded-full"></span>
              <span id="smallCircle_1" className="h-2 w-2 rounded-full"></span>
            </div>
            <div className="flex space-x-5">
              <span id="smallCircle_2" className="h-2 w-2 rounded-full"></span>
              <span id="smallCircle_2" className="h-2 w-2 rounded-full"></span>
            </div>
            <div className="flex space-x-5">
              <span id="smallCircle_3" className="h-2 w-2 rounded-full"></span>
              <span id="smallCircle_3" className="h-2 w-2 rounded-full"></span>
            </div>
            <div className="flex space-x-5">
              <span id="smallCircle_4" className="h-2 w-2 rounded-full"></span>
              <span id="smallCircle_4" className="h-2 w-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="z-10 w-full absolute overflow-y-visible overflow-x-clip bg-transparent h-screen flex flex-col justify-between text-white items-center">
          <div className="border-gray-400 -top-16 animate-spin-slow-slow h-40 w-40 rounded-full border-2 border-dotted absolute"></div>
          <div className="outer-ring_2 opacity-20 z-1 drop-shadow-lg shadow-xl shadow-black relative"></div>
          <div className="inner-ring_2  z-1 shadow-inner shadow-black relative">
            <img
              className="h-40 opacity-20 skew-y-10 skew-x-10 absolute -bottom-12 z-10"
              src="./boy1.png"
            ></img>
          </div>
          {currentSlide == 0 && (
            <motion.div
              exit={{ opacity: 0, x: -20 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative pt-16"
            >
              <div className="absolute z-2 -left-10 h-40 w-40 rounded-full bg-gradient-to-r animate-spin-slow from-gray-200 via-gray-300 to-gray-400 opacity-80"></div>
              <div className="absolute z-2 left-20 -bottom-10 h-40 w-40 rounded-full animate-spin-slow bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-80"></div>
              <div className="absolute z-2 -right-10 bottom-20 h-40 w-40 rounded-full animate-spin-slow bg-gradient-to-r from-lime-50 via-lime-100 to-lime-200 opacity-80"></div>
              <img
                className="h-80 w-80 rounded-full drop-shadow-lg saturate-150 shadow-md shadow-cyan-500/50  sepia"
                src="./naman_1232.jpg"
              ></img>
            </motion.div>
          )}
          {currentSlide == 1 && (
            <motion.div
              exit={{ opacity: 0, x: -20 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative px-10"
            >
              <img className="h-80 w-96 scale-110" src="./1_2.png"></img>
            </motion.div>
          )}
          {currentSlide == 0 && (
            <motion.div
              exit={{ opacity: 0, x: -20 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              id={`slider-item ${currentSlide == 0 ? "active" : ""}`}
              className="w-full flex flex-col mb-16 z-10 px-4"
            >
              <span className="text-5xl font-bold">Let's Connect</span>
              <span className="text-xl pt-4 text-gray-400">
                Let the expert handle your application
              </span>
              <span className="pt-5">
                I am a full-stack developer with experience in web development,
                mobile development, and data science. I have a strong
                understanding of the full software development lifecycle, from
                ideation to deployment.
              </span>
              <span className="flex pt-5 space-x-5">
                <span className="relative group">
                  <span className="group-hover:visible invisible absolute -top-10 px-4 py-1 bg-gray-900 cursor-pointer">
                    GitHub
                  </span>
                  <Link target="_blank" to="https://github.com/Naman-Rohilla">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 20 20"
                      version="1.1"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="white"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </span>
                <span className="relative group">
                  <span className="group-hover:visible invisible absolute -top-10 px-4 py-1 bg-gray-900 cursor-pointer">
                    Linkedln
                  </span>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/namanrohilla/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                    >
                      <title />

                      <g id="Linkedln">
                        <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z" />
                      </g>
                    </svg>
                  </Link>
                </span>
                <span className="relative group">
                  <span className="group-hover:visible invisible absolute -top-10 px-4 py-1 bg-gray-900 cursor-pointer">
                    Instagram
                  </span>
                  <Link
                    target="_blank"
                    to="https://instagram.com/namanr_rohilla?igshid=YTQwZjQ0NmI0OA=="
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="white"
                      />
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="relative group">
                  <span className="group-hover:visible invisible absolute -top-10 px-4 py-1 bg-gray-900 cursor-pointer">
                    Resume
                  </span>
                  <Link
                    target="_blank"
                    to="https://drive.google.com/file/d/1MXjhGhKmjwmTfuIgrrph7QxHtLaSaXfT/view?usp=sharing"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 60 60"
                      width="30px"
                      height="30px"
                    >
                      <g>
                        <g>
                          <g>
                            <path d="M2,2h39v7h2V1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v58c0,0.6,0.4,1,1,1h32v-2H2V2z" />
                            <path d="M43.7,21.3l-2.8-6.6c-0.1-0.4-0.5-0.6-0.9-0.6s-0.7,0.2-0.9,0.6l-2.8,6.6C36.1,21.5,36,21.7,36,22v31v6c0,0.6,0.4,1,1,1     h6c0.6,0,1-0.4,1-1v-6V22C44,21.7,43.9,21.4,43.7,21.3z M38,23h4v29h-4V23z M40,17.5l1.5,3.5h-3L40,17.5z M42,58h-4v-4h4V58z" />
                            <path d="M59,38H48c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h11c0.6,0,1-0.4,1-1V39C60,38.4,59.6,38,59,38z M58,40v5h-9v-5H58z M49,58     V47h9v11H49z" />
                            <path d="M27,11c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S27,14.3,27,11z M17,11c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S17,13.2,17,11     z" />
                            <rect x="15" y="20" width="12" height="2" />
                            <rect x="15" y="25" width="12" height="2" />
                            <rect x="6" y="31" width="15" height="2" />
                            <rect x="6" y="36" width="26" height="2" />
                            <rect x="6" y="41" width="26" height="2" />
                            <rect x="6" y="46" width="8" height="2" />
                            <rect x="6" y="51" width="11" height="2" />
                            <rect x="21" y="46" width="8" height="2" />
                            <rect x="21" y="51" width="11" height="2" />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </g>
                    </svg>
                  </Link>
                </span>
              </span>
            </motion.div>
          )}
          {currentSlide == 1 && (
            <motion.div
              exit={{ opacity: 0, x: -20 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              id={`slider-item ${currentSlide == 1 ? "active" : ""}`}
              className="w-full flex flex-col z-10 px-4"
            >
              <span className="text-5xl font-bold">
                Writing better with our AI
              </span>
              <span className="text-xl pt-4 text-gray-400">
                AI will handle your problem
              </span>
              <span className="pt-5">
                Are you ready to take your website, application, or customer
                support to the next level with the power of artificial
                intelligence?
              </span>
              <span className="flex pt-5">
                <span className="space-x-1 flex px-4 py-1.5 border border-white border-dotted cursor-pointer">
                  <Link to="/about">Try ChatBot</Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                    >
                      <g data-name="Layer 2">
                        <g data-name="diagonal-arrow-right-up">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          />

                          <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </span>
              </span>
            </motion.div>
          )}
        </div>
      </div>
      <div className="mobile2height overflow-y-visible overflow-x-clip flex flex-col bg-gray-800 text-white relative z-1 items-center">
        <span className="flex z-10 justify-center pt-5 text-4xl">Products</span>
        <span className="flex z-10 w-full px-5 justify-center pt-3 text-center text-sm pb-5">
          Unlock the power of ChatBot for seamless, 24/7 customer interactions,
          and OCR for PDF to effortlessly convert scanned documents into
          editable text.
        </span>
        <div className="border-gray-400 -bottom-16 -right-10 animate-spin-slow-slow h-40 w-40 rounded-full border-2 border-dotted absolute z-10"></div>
        <div className="flex flex-col z-10 space-y-5 right-5 top-40 absolute">
          <div className="flex space-x-5">
            <span id="smallCircle_1" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_1" className="h-2 w-2 rounded-full"></span>
          </div>
          <div className="flex space-x-5">
            <span id="smallCircle_2" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_2" className="h-2 w-2 rounded-full"></span>
          </div>
          <div className="flex space-x-5">
            <span id="smallCircle_3" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_3" className="h-2 w-2 rounded-full"></span>
          </div>
          <div className="flex space-x-5">
            <span id="smallCircle_4" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_4" className="h-2 w-2 rounded-full"></span>
          </div>
        </div>
        <div className="outer-ring_3 z-10 -skew-y-6 skew-x-5 drop-shadow-sm shadow-sm shadow-gray-900"></div>
        {/* <div className="inner-ring_3 z-10 -skew-y-6 skew-x-5 shadow-inner shadow-black"></div> */}
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="flex flex-col h-full justify-center">
            <Link
              to="/about"
              className="chat3 bg-teal-500 p-2 h-60 w-60 ease-in-out duration-150 hover:scale-105 hover:shadow-xl hover:shadow-gray-900"
            >
              <img src="./chat3.png"></img>
            </Link>
            <div className="w-60 text-center">
              <span className="flex justify-center pt-2">ChatBot</span>
              {/* <span className="flex justify-center">
                Elevate your user engagement and support services with ChatBot.
              </span> */}
            </div>
          </div>
          <div className="flex flex-col z-10 items-center h-full justify-center pb-10">
            <Link to="/ocr" className="relative bg-red-300 flex items-center p-2 h-60 w-60 ease-in-out duration-150 hover:scale-105 hover:shadow-xl hover:shadow-gray-900">
              <img src="./ocr.png"></img>
              <span className="dot z-10 h-2 w-6 absolute bg-red-300 rounded-xl -top-2 -left-2"></span>
            </Link>
            <div className="w-60 text-center">
              <span className="flex justify-center pt-2">OCR</span>
              {/* <span className="flex justify-center">
                Ultimate solution for converting scanned documents into editable
                and searchable text.
              </span> */}
            </div>
          </div>
        </div>
        {/* <span className="flex justify-center pb-5 z-10 text-center">
          Join the AI revolution and make every interaction count with ChatBot
        </span> */}
      </div>
      <div className="mobile3height bg-gray-800 relative overflow-y-visible">
        <div className="outer-ring_4 z-10 skew-y-6 skew-x-5 drop-shadow-lg shadow-lg shadow-black"></div>
        <div className="inner-ring_4 z-10 skew-y-6 skew-x-5 shadow-inner shadow-black"></div>
        <div className="flex flex-col z-10 space-y-5 right-5 bottom-0 absolute">
          <div className="flex space-x-5">
            <span id="smallCircle_1" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_1" className="h-2 w-2 rounded-full"></span>
          </div>
          <div className="flex space-x-5">
            <span id="smallCircle_2" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_2" className="h-2 w-2 rounded-full"></span>
          </div>
          <div className="flex space-x-5">
            <span id="smallCircle_3" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_3" className="h-2 w-2 rounded-full"></span>
          </div>
          <div className="flex space-x-5">
            <span id="smallCircle_4" className="h-2 w-2 rounded-full"></span>
            <span id="smallCircle_4" className="h-2 w-2 rounded-full"></span>
          </div>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="h-80 w-80 mt-20 z-10 flex items-center">
            <div className="h-60 w-96 relative flex justify-center items-center px-5">
              <img
                className="css1 z-10 h-10 w-26 absolute left-0"
                src="./css1.png"
              ></img>
              <img className="ft1 h-80 w-96" src="./ft1.png"></img>
              <img
                className="js1 h-10 w-16 hue-rotate-100 absolute left-0 -top-10"
                src="./js.png"
              ></img>
              <img className="html1 h-10 w-16 absolute" src="./html1.png"></img>
              <img
                className="code1 absolute top-0 h-20 w-32"
                src="./code1.png"
              ></img>
              <img
                className="c__1 absolute top-20 right-0 h-10 w-16"
                src="./c++1.png"
              ></img>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                className="react1 absolute -top-16"
              >
                <g fill="#00D8FF" fill-rule="evenodd">
                  <circle cx="11.996" cy="11.653" r="2.142" />
                  <path
                    fill-rule="nonzero"
                    d="M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 -101.5 512 512"
                version="1.1"
                className="next1 bg-white p-2 rounded-full absolute bottom-6 right-10 z-20"
              >
                <g>
                  <path
                    d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52px"
                height="52px"
                viewBox="0 0 256 256"
                version="1.1"
                className="gatsby z-10 absolute -bottom-8"
              >
                <g>
                  <path
                    d="M128,0 C57.3075981,0 0,57.307374 0,128 C0,198.69285 57.3078221,256 128,256 C198.69285,256 256,198.692626 256,128 C256,57.307374 198.69285,0 128,0 Z M27.503973,129.334313 L126.665463,228.496027 C72.2144512,227.786305 28.2134711,183.785325 27.503973,129.334313 Z M150.496265,225.983324 L30.0166761,105.503735 C40.2328216,60.8232766 80.2223482,27.4871709 128,27.4871709 C161.397489,27.4871709 190.984927,43.7800881 209.262736,68.8464075 L195.346089,81.125855 C180.519662,59.8637627 155.886614,45.9486835 128,45.9486835 C92.4948508,45.9486835 62.259523,68.5011796 50.8311596,100.061636 L155.938588,205.169064 C181.463942,195.925651 201.095107,174.378594 207.669894,147.692325 L164.102633,147.692325 L164.102633,128.000224 L210.051317,128.000224 L210.051317,127.999776 L228.512829,127.999776 L228.512829,128 C228.512829,175.777652 195.176947,215.767178 150.496265,225.983324 Z"
                    fill="#744C9E"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 -224 512 512"
                version="1.1"
                className="tailwindcss1 absolute top-10 left-10"
              >
                <defs>
                  <linearGradient
                    x1="-2.77777778%"
                    y1="32%"
                    x2="100%"
                    y2="67.5555556%"
                    id="linearGradient-1"
                  >
                    <stop stop-color="#2298BD" offset="0%"></stop>
                    <stop stop-color="#0ED7B5" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M52.8666139,-1.0658141e-14 C38.7688502,-1.0658141e-14 29.9577479,7.04888185 26.4333069,21.1466456 C31.7199683,14.0977637 37.88774,11.454433 44.9366218,13.2166535 C48.9584005,14.2220981 51.8329737,17.1397478 55.0147606,20.3695063 C60.1980384,25.6307134 66.1970285,31.7199683 79.2999208,31.7199683 C93.3976845,31.7199683 102.208787,24.6710865 105.733228,10.5733228 C100.446566,17.6222046 94.2787948,20.2655353 87.2299129,18.5033149 C83.2081342,17.4978702 80.333561,14.5802205 77.1517741,11.350462 C71.9684963,6.08925491 65.9695062,-1.0658141e-14 52.8666139,-1.0658141e-14 Z M26.4333069,31.7199683 C12.3355432,31.7199683 3.52444093,38.7688502 0,52.8666139 C5.28666139,45.817732 11.454433,43.1744013 18.5033149,44.9366218 C22.5250936,45.9420665 25.3996667,48.8597162 28.5814537,52.0894747 C33.7647315,57.3506818 39.7637215,63.4399367 52.8666139,63.4399367 C66.9643776,63.4399367 75.7754799,56.3910548 79.2999208,42.2932911 C74.0132594,49.342173 67.8454878,51.9855037 60.796606,50.2232832 C56.7748273,49.2178385 53.9002541,46.3001888 50.7184671,43.0704303 C45.5351894,37.8092232 39.5361993,31.7199683 26.4333069,31.7199683 Z"
                    fill="url(#linearGradient-1)"
                  ></path>
                  <path
                    d="M158.59201,26.7309264 L149.365806,26.7309264 L149.365806,44.5880938 C149.365806,49.350005 152.490811,49.2756002 158.59201,48.9779807 L158.59201,56.1952525 C146.240802,57.6833498 141.330081,54.2607261 141.330081,44.5880938 L141.330081,26.7309264 L134.484834,26.7309264 L134.484834,18.9928205 L141.330081,18.9928205 L141.330081,8.9990725 L149.365806,6.61811685 L149.365806,18.9928205 L158.59201,18.9928205 L158.59201,26.7309264 Z M193.762014,18.9928205 L201.797739,18.9928205 L201.797739,56.1952525 L193.762014,56.1952525 L193.762014,50.8381023 C190.934629,54.7815601 186.544742,57.1625158 180.741163,57.1625158 C170.622101,57.1625158 162.214352,48.6059564 162.214352,37.5940365 C162.214352,26.5077118 170.622101,18.0255573 180.741163,18.0255573 C186.544742,18.0255573 190.934629,20.406513 193.762014,24.2755659 L193.762014,18.9928205 Z M182.006045,49.4988148 C188.702483,49.4988148 193.762014,44.5136889 193.762014,37.5940365 C193.762014,30.6743842 188.702483,25.6892583 182.006045,25.6892583 C175.309608,25.6892583 170.250077,30.6743842 170.250077,37.5940365 C170.250077,44.5136889 175.309608,49.4988148 182.006045,49.4988148 Z M215.190615,13.4124557 C212.36323,13.4124557 210.056679,11.0315001 210.056679,8.27852013 C210.056679,5.4511353 212.36323,3.14458451 215.190615,3.14458451 C218.018,3.14458451 220.32455,5.4511353 220.32455,8.27852013 C220.32455,11.0315001 218.018,13.4124557 215.190615,13.4124557 Z M211.172752,56.1952525 L211.172752,18.9928205 L219.208477,18.9928205 L219.208477,56.1952525 L211.172752,56.1952525 Z M228.509085,56.1952525 L228.509085,1.87970183 L236.544811,1.87970183 L236.544811,56.1952525 L228.509085,56.1952525 Z M288.70262,18.9928205 L297.184775,18.9928205 L285.503211,56.1952525 L277.616296,56.1952525 L269.87819,31.1208134 L262.065679,56.1952525 L254.178764,56.1952525 L242.4972,18.9928205 L250.979354,18.9928205 L258.196626,44.6624986 L266.009137,18.9928205 L273.672838,18.9928205 L281.410944,44.6624986 L288.70262,18.9928205 Z M307.155027,13.4124557 C304.327642,13.4124557 302.021091,11.0315001 302.021091,8.27852013 C302.021091,5.4511353 304.327642,3.14458451 307.155027,3.14458451 C309.982411,3.14458451 312.288962,5.4511353 312.288962,8.27852013 C312.288962,11.0315001 309.982411,13.4124557 307.155027,13.4124557 Z M303.137164,56.1952525 L303.137164,18.9928205 L311.172889,18.9928205 L311.172889,56.1952525 L303.137164,56.1952525 Z M340.041977,18.0255573 C348.375321,18.0255573 354.32771,23.680327 354.32771,33.3529593 L354.32771,56.1952525 L346.291985,56.1952525 L346.291985,34.1714128 C346.291985,28.5166431 343.018171,25.5404486 337.95864,25.5404486 C332.675895,25.5404486 328.509223,28.6654529 328.509223,36.254749 L328.509223,56.1952525 L320.473497,56.1952525 L320.473497,18.9928205 L328.509223,18.9928205 L328.509223,23.7547318 C330.964583,19.8856789 334.982446,18.0255573 340.041977,18.0255573 Z M392.423001,4.11184775 L400.458726,4.11184775 L400.458726,56.1952525 L392.423001,56.1952525 L392.423001,50.8381023 C389.595616,54.7815601 385.205729,57.1625158 379.40215,57.1625158 C369.283088,57.1625158 360.875338,48.6059564 360.875338,37.5940365 C360.875338,26.5077118 369.283088,18.0255573 379.40215,18.0255573 C385.205729,18.0255573 389.595616,20.406513 392.423001,24.2755659 L392.423001,4.11184775 Z M380.667032,49.4988148 C387.36347,49.4988148 392.423001,44.5136889 392.423001,37.5940365 C392.423001,30.6743842 387.36347,25.6892583 380.667032,25.6892583 C373.970595,25.6892583 368.911064,30.6743842 368.911064,37.5940365 C368.911064,44.5136889 373.970595,49.4988148 380.667032,49.4988148 Z M427.393287,57.1625158 C416.158152,57.1625158 407.750403,48.6059564 407.750403,37.5940365 C407.750403,26.5077118 416.158152,18.0255573 427.393287,18.0255573 C434.684964,18.0255573 441.009377,21.8202054 443.985572,27.6237848 L437.065919,31.6416474 C435.429012,28.1446188 431.783174,25.9124729 427.318882,25.9124729 C420.771254,25.9124729 415.786128,30.8975988 415.786128,37.5940365 C415.786128,44.2904743 420.771254,49.2756002 427.318882,49.2756002 C431.783174,49.2756002 435.429012,46.9690494 437.214729,43.5464257 L444.134381,47.4898834 C441.009377,53.3678677 434.684964,57.1625158 427.393287,57.1625158 Z M457.378447,29.2606918 C457.378447,36.0315344 477.393355,31.9392669 477.393355,45.7041667 C477.393355,53.1446531 470.920132,57.1625158 462.884407,57.1625158 C455.443921,57.1625158 450.08677,53.8142969 447.705815,48.4571467 L454.625467,44.439284 C455.815945,47.7875029 458.792139,49.7964342 462.884407,49.7964342 C466.45584,49.7964342 469.20882,48.6059564 469.20882,45.6297618 C469.20882,39.007729 449.193912,42.7279722 449.193912,29.4095015 C449.193912,22.4154443 455.220706,18.0255573 462.810002,18.0255573 C468.911201,18.0255573 473.970732,20.8529421 476.574902,25.7636632 L469.804059,29.5583112 C468.464772,26.6565215 465.860602,25.317234 462.810002,25.317234 C459.908212,25.317234 457.378447,26.5821167 457.378447,29.2606918 Z M491.679089,29.2606918 C491.679089,36.0315344 511.693998,31.9392669 511.693998,45.7041667 C511.693998,53.1446531 505.220775,57.1625158 497.185049,57.1625158 C489.744563,57.1625158 484.387413,53.8142969 482.006457,48.4571467 L488.926109,44.439284 C490.116587,47.7875029 493.092782,49.7964342 497.185049,49.7964342 C500.756483,49.7964342 503.509463,48.6059564 503.509463,45.6297618 C503.509463,39.007729 483.494554,42.7279722 483.494554,29.4095015 C483.494554,22.4154443 489.521348,18.0255573 497.110644,18.0255573 C503.211843,18.0255573 508.271374,20.8529421 510.875544,25.7636632 L504.104702,29.5583112 C502.765414,26.6565215 500.161244,25.317234 497.110644,25.317234 C494.208855,25.317234 491.679089,26.5821167 491.679089,29.2606918 Z"
                    fill="#2D3748"
                  ></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 -26 256 256"
                version="1.1"
                className="material1 absolute bottom-7 left-16"
              >
                <g>
                  <polygon
                    fill="#00B0FF"
                    points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
                  ></polygon>
                  <polygon
                    fill="#0081CB"
                    points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
                  ></polygon>
                  <polygon
                    fill="#00B0FF"
                    points="96 129.322667 96 166.272 160 203.221333 160 166.272"
                  ></polygon>
                  <path
                    d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
                    fill="#0081CB"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="pb-20 flex flex-col px-4 justify-start text-justify  text-white w-full">
            <div className="flex flex-col items-center text-center bg-gray-900 bg-opacity-20 rounded-md p-4">
              <span className="text-3xl pt-14">Frontend Developer</span>
              <span className="pt-6">
                As a frontend developer, I have been responsible for designing
                and developing the user interface of various websites and
                applications. My primary focus has been on creating visually
                appealing and intuitive layouts that are easy to use and
                accessible for all users. To accomplish this, I have utilized my
                strong understanding of HTML, CSS, and JavaScript, as well as my
                experience with frontend frameworks such as ReactJs, NextJs and
                gatsby.
              </span>
              <span className="pt-1">
                Throughout my experience as a frontend developer, I have also
                gained a good understanding of user experience (UX) and user
                interface (UI) design principles. This has allowed me to create
                designs that not only look great but also provide a seamless and
                enjoyable user experience.
              </span>
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/1MXjhGhKmjwmTfuIgrrph7QxHtLaSaXfT/view?usp=sharing"
                className="mt-10 flex justify-center items-center bg-gray-900 h-10 w-40 justify-start"
              >
                Explore Resume
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <div className="h-60 w-80 relative flex justify-center items-center">
              <img
                className="rotatecode z-10 h-20 w-20 absolute mb-5"
                src="./code3.png"
              ></img>
              <img className="ft2 h-80 w-96" src="./code2.png"></img>
              <img
                className="js1 h-10 w-16 hue-rotate-100 absolute left-0 -top-10"
                src="./code4.png"
              ></img>
              <img
                className="code1 absolute top-0 h-20 w-32"
                src="./code6.png"
              ></img>
              <img
                className="c__1 absolute top-20 right-0 h-10 w-16"
                src="./code7.png"
              ></img>

              <img
                src="./code5.png"
                className="next1 p-2 h-20 w-20 absolute bottom-6 right-10 z-20"
              ></img>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 -183 512 512"
                version="1.1"
                className="code1 absolute bottom-10 left-0"
              >
                <defs></defs>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g>
                    <path
                      d="M476.713442,60.4626238 C476.252384,60.5550082 475.791324,61.5703742 475.791324,62.1238178 C475.69894,65.8148802 475.606556,75.5972748 475.606556,82.241187 C475.606556,82.425956 475.882846,82.7946306 476.16,82.7946306 C477.54404,82.887015 480.866428,82.9793996 483.726894,82.9793996 C487.69511,82.9793996 490.00213,82.425956 491.29465,81.8725124 C494.616174,80.2113186 496.184984,76.6117772 496.184984,72.6435614 C496.184984,63.6926272 489.909746,60.2778548 480.589274,60.2778548 C479.943446,60.1863338 478.098346,60.1863338 476.713442,60.4626238 L476.713442,60.4626238 L476.713442,60.4626238 Z M500.522738,101.712728 C500.522738,92.5770252 493.785578,87.5010588 481.60464,87.5010588 C481.051196,87.5010588 477.175366,87.4086744 476.252384,87.5934434 C475.97523,87.6858278 475.606556,87.8705968 475.606556,88.1477502 C475.606556,94.699278 475.514172,105.127501 475.791324,109.187238 C475.97523,110.940816 477.26775,113.432607 478.83656,114.170819 C480.49689,115.093801 484.2812,115.277706 486.864512,115.277706 C494.155116,115.277706 500.522738,111.217969 500.522738,101.712728 L500.522738,101.712728 L500.522738,101.712728 Z M457.888592,55.387521 C458.810712,55.387521 461.579656,55.663811 468.68549,55.663811 C475.421786,55.663811 480.774044,55.4799054 487.326434,55.4799054 C495.354388,55.4799054 506.428438,58.3403708 506.428438,70.3365394 C506.428438,76.2431028 502.275454,80.949531 496.830812,83.256553 C496.554522,83.3489374 496.554522,83.532843 496.830812,83.6252274 C504.582474,85.5635748 511.41202,90.3623876 511.41202,99.4057064 C511.41202,108.26512 505.874994,113.893666 497.846178,117.400823 C492.95498,119.523076 486.864512,120.261288 480.681658,120.261288 C475.97523,120.261288 463.333234,119.707845 456.319784,119.892614 C455.581572,119.61546 456.965612,116.293072 457.61144,115.739629 C459.272634,115.647244 460.56429,115.55486 462.317868,115.001416 C464.809658,114.355588 465.085948,113.617376 465.455486,109.833929 C465.640256,106.603926 465.640256,95.1603372 465.640256,87.0399998 C465.640256,75.8735648 465.73264,68.306671 465.640256,64.6156086 C465.547872,61.7551432 464.532506,60.8321618 462.502636,60.2778548 C460.933828,60.0015648 458.349652,59.6320268 456.2274,59.3557368 C455.765476,58.8938144 457.334286,55.7561954 457.888592,55.387521 L457.888592,55.387521 L457.888592,55.387521 Z M404.641456,112.786779 C406.856958,114.539494 411.193848,115.277706 415.069678,115.277706 C420.05326,115.277706 425.03598,114.355588 429.834792,110.017835 C434.72599,105.58856 438.139898,98.7598784 438.139898,87.8705968 C438.139898,77.4423742 434.171682,68.952499 426.051346,63.9697806 C421.437302,61.1084518 415.530738,59.9091802 408.702056,59.9091802 C406.672188,59.9091802 404.73384,60.0015648 403.53457,60.5550082 C403.257416,60.7397772 402.611588,61.5703742 402.611588,62.0314332 C402.426818,63.8773962 402.426818,78.0882022 402.426818,86.3941718 C402.426818,94.9764316 402.426818,106.9726 402.611588,108.356641 C402.611588,109.741545 403.257416,111.863797 404.641456,112.786779 L404.641456,112.786779 L404.641456,112.786779 Z M383.69349,55.387521 C385.447068,55.387521 392.183366,55.663811 395.413368,55.663811 C401.227548,55.663811 405.379668,55.387521 416.361334,55.387521 C425.589422,55.387521 433.341086,57.8793118 438.87811,62.5848768 C445.614408,68.3990554 449.121564,76.4278716 449.121564,86.2094028 C449.121564,100.143919 442.753942,108.172735 436.38632,112.786779 C430.01956,117.493207 421.713592,120.261288 409.902192,120.261288 C403.626954,120.261288 392.830056,120.076519 383.87826,119.984135 L383.785874,119.984135 C383.324816,119.154401 384.524088,115.924398 385.2623,115.832013 C387.661706,115.55486 388.307534,115.462475 389.507668,115.001416 C391.445152,114.263204 391.81469,113.247838 392.091844,109.833929 C392.368134,103.466307 392.27575,95.8070286 392.27575,87.1323844 C392.27575,80.949531 392.368134,68.8601146 392.183366,64.9842832 C391.907076,61.7551432 390.523034,60.9245462 387.75409,60.3702392 C386.37005,60.0939492 384.524088,59.7244114 381.940776,59.4481212 C381.571238,58.8014298 383.232432,55.9409644 383.69349,55.387521 L383.69349,55.387521 L383.69349,55.387521 Z"
                      fill="#8E714E"
                    ></path>
                    <path
                      d="M272.033456,116.385457 C269.726434,116.108303 268.06524,115.739629 266.034508,114.816647 C265.758218,114.631878 265.296296,113.70976 265.296296,113.340222 C265.111528,110.110219 265.111528,100.882131 265.111528,94.699278 C265.111528,89.7156962 264.281794,85.378806 262.158678,82.3335716 C259.666886,78.8264146 256.068208,76.7965462 251.454164,76.7965462 C247.393564,76.7965462 241.948924,79.5654906 237.427264,83.441322 C237.33488,83.532843 236.596668,84.1795344 236.689052,83.1641684 C236.689052,82.1488026 236.87382,80.118934 236.966206,78.7348936 C237.05859,77.4423742 236.320378,76.7965462 236.320378,76.7965462 C233.366664,78.2729712 225.061558,80.2113186 222.016323,80.4876086 C219.801686,80.949531 219.248242,83.071784 221.555264,83.8099964 L221.647649,83.8099964 C224.138576,84.548209 225.79977,85.378806 227.091426,86.2094028 C228.014408,86.9476154 227.922022,87.9629812 227.922022,88.7935782 C228.014408,95.714644 228.014408,106.326772 227.738118,112.140951 C227.645732,114.447973 226.999904,115.277706 225.338712,115.647244 L225.522616,115.55486 C224.23096,115.832013 223.215594,116.108303 221.646785,116.293072 C221.093342,116.846516 221.093342,119.800229 221.646785,120.446057 C222.662152,120.446057 228.014408,120.168904 232.444546,120.168904 C238.535014,120.168904 241.672634,120.446057 243.241442,120.446057 C243.88727,119.707845 244.07204,116.9389 243.702502,116.293072 C241.948924,116.200688 240.657268,116.016782 239.457996,115.647244 C237.796802,115.277706 237.33488,114.447973 237.242496,112.509625 C237.05859,107.618428 237.05859,97.2834534 237.05859,90.2700032 C237.05859,88.3316558 237.612034,87.4086744 238.165476,86.8552308 C240.28773,85.0101314 243.702502,83.717612 246.747736,83.717612 C249.700586,83.717612 251.638934,84.6405934 253.115358,85.8407284 C255.145228,87.5010588 255.791056,89.9004652 256.068208,91.6540436 C256.529268,95.6222596 256.345362,103.466307 256.345362,110.294988 C256.345362,113.98605 256.068208,114.909032 254.684168,115.370091 C254.03834,115.647244 252.377146,116.016782 250.438798,116.200688 C249.79297,116.846516 249.97774,119.707845 250.438798,120.353673 C253.115358,120.353673 256.252978,120.076519 260.867022,120.076519 C266.587952,120.076519 270.279878,120.353673 271.756302,120.353673 C272.217362,119.800229 272.40213,117.123669 272.032592,116.385457 L272.033456,116.385457 L272.033456,116.385457 Z M297.595466,81.1343 C292.70427,81.1343 289.659034,84.9177468 289.659034,90.8234468 C289.659034,96.821531 292.334732,103.742597 299.902488,103.742597 C301.194144,103.742597 303.59355,103.189153 304.700438,101.897497 C306.454016,100.236303 307.654152,96.9139156 307.654152,93.407622 C307.654152,85.7483438 303.86984,81.1343 297.595466,81.1343 L297.595466,81.1343 L297.595466,81.1343 Z M296.948776,121.922482 C295.103676,121.922482 293.811156,122.475926 292.981422,122.937848 C289.104728,125.428776 287.352012,127.828182 287.352012,130.689511 C287.352012,133.365207 288.366516,135.48746 290.582016,137.333423 C293.257712,139.640445 296.948776,140.748195 301.655204,140.748195 C311.06806,140.748195 315.221044,135.672229 315.221044,130.689511 C315.221044,127.182354 313.467466,124.875332 309.868788,123.583676 C307.284614,122.475926 302.578184,121.922482 296.948776,121.922482 L296.948776,121.922482 L296.948776,121.922482 Z M297.595466,145.915683 C291.966056,145.915683 287.905456,144.715548 284.399162,142.039851 C280.98439,139.455676 279.507966,135.579845 279.507966,132.904148 C279.507966,132.165936 279.692734,130.135204 281.353928,128.290104 C282.368432,127.182354 284.583068,125.060101 289.843804,121.461423 C290.02771,121.369039 290.120094,121.276654 290.120094,121.091885 C290.120094,120.907116 289.935324,120.722347 289.75142,120.630826 C285.413666,118.969632 284.12201,116.293072 283.752472,114.816647 L283.752472,114.631878 C283.66095,114.078435 283.476182,113.524991 284.306778,112.970684 C284.952606,112.509625 285.875588,111.956182 286.89009,111.310354 C288.4589,110.387373 290.120094,109.372007 291.13546,108.54141 C291.320228,108.356641 291.320228,108.172735 291.320228,107.987966 C291.320228,107.803197 291.13546,107.618428 290.95069,107.526907 C284.491548,105.403791 281.261544,100.604978 281.261544,93.407622 C281.261544,88.7011938 283.383798,84.4558244 287.167244,81.780128 C289.75142,79.7493962 296.210562,77.2584686 300.455932,77.2584686 L300.733086,77.2584686 C305.069976,77.3499898 307.469382,78.2729712 310.883292,79.473106 C312.729254,80.118934 314.482832,80.3952242 316.882238,80.3952242 C320.480916,80.3952242 322.049726,79.2883372 323.341382,77.9966812 C323.433766,78.1805866 323.618536,78.6425092 323.71092,79.8417806 C323.803304,81.0419156 323.433766,82.7946306 322.510786,84.08715 C321.772572,85.1016524 320.112242,85.8407284 318.451048,85.8407284 L317.989126,85.8407284 C316.327932,85.6559594 315.58972,85.4711904 315.58972,85.4711904 L315.221044,85.6559594 C315.12866,85.8407284 315.221044,86.024634 315.31343,86.3017874 L315.405814,86.4865564 C315.58972,87.3171532 315.959258,89.8080808 315.959258,90.4547722 C315.959258,98.021666 312.914022,101.34319 309.68402,103.834981 C306.5464,106.142003 302.947722,107.618428 298.887122,107.987966 C298.794738,107.987966 298.426064,107.987966 297.595466,108.080351 C297.133544,108.080351 296.487716,108.172735 296.395332,108.172735 L296.302948,108.172735 C295.564734,108.356641 293.719636,109.279622 293.719636,110.848432 C293.719636,112.232472 294.550232,113.893666 298.517584,114.170819 C299.348182,114.263204 300.178778,114.263204 301.10176,114.355588 C306.361632,114.724263 312.914022,115.186185 315.959258,116.200688 C320.203764,117.769497 322.880324,121.552944 322.880324,126.075467 C322.880324,132.904148 317.989126,139.27177 309.868788,143.239123 C305.900572,144.992701 301.932356,145.915683 297.595466,145.915683 L297.595466,145.915683 L297.595466,145.915683 Z M350.195912,81.595359 C348.257564,81.595359 346.503986,82.056418 345.21233,82.9793996 C341.613652,85.194037 339.76769,89.6241752 339.76769,96.0833186 C339.76769,108.172735 345.858158,116.66261 354.532802,116.66261 C357.116978,116.66261 359.146846,115.924398 360.900424,114.447973 C363.57612,112.232472 364.961024,107.803197 364.961024,101.620344 C364.961024,89.6241752 358.962076,81.595359 350.195912,81.595359 L350.195912,81.595359 L350.195912,81.595359 Z M351.857106,121.091885 C336.169012,121.091885 330.539602,109.556776 330.539602,98.7598784 C330.539602,91.1929846 333.584836,85.378806 339.675304,81.225821 C344.013058,78.5501246 349.180546,77.0736996 353.79459,77.0736996 C365.790758,77.0736996 374.189112,85.6559594 374.189112,98.021666 C374.189112,106.419157 370.866724,113.063069 364.499102,117.123669 C361.453868,119.153538 356.193996,121.091885 351.856242,121.091885 L351.857106,121.091885 L351.857106,121.091885 Z M187.410994,81.595359 C185.472647,81.595359 183.719932,82.056418 182.427413,82.9793996 C178.828735,85.194037 176.982772,89.6241752 176.982772,96.0833186 C176.982772,108.172735 183.073241,116.66261 191.747885,116.66261 C194.33206,116.66261 196.361929,115.924398 198.115507,114.447973 C200.791203,112.232472 202.176107,107.803197 202.176107,101.620344 C202.176107,89.6241752 196.269544,81.595359 187.410994,81.595359 L187.410994,81.595359 L187.410994,81.595359 Z M189.072188,121.091885 C173.384094,121.091885 167.754684,109.556776 167.754684,98.7598784 C167.754684,91.1929846 170.799918,85.378806 176.890387,81.225821 C181.228141,78.5501246 186.395628,77.0736996 191.009672,77.0736996 C203.006704,77.0736996 211.404195,85.6559594 211.404195,98.021666 C211.404195,106.419157 208.081807,113.063069 201.714185,117.123669 C198.761335,119.153538 193.501463,121.091885 189.072188,121.091885 L189.072188,121.091885 L189.072188,121.091885 Z M83.5941444,120.168904 C83.4093754,119.892614 83.2246064,119.062017 83.316991,118.046651 C83.316991,117.308438 83.50176,116.846516 83.5941444,116.66261 C85.5316284,116.385457 86.5469944,116.108303 87.6538814,115.832013 C89.4998442,115.370091 90.2380568,114.355588 90.3304412,112.048566 C90.6075946,106.511541 90.6075946,95.990934 90.5152102,88.7011938 L90.5152102,88.5164248 C90.5152102,87.6858278 90.5152102,86.6704618 89.4998442,85.9322494 C88.0234192,85.0101314 86.2698408,84.1795344 83.962819,83.532843 C83.132222,83.256553 82.5787784,82.7946306 82.671163,82.241187 C82.671163,81.6877436 83.2246064,81.0419156 84.4247414,80.8571466 C87.4699758,80.579993 95.405544,78.6425092 98.543163,77.2584686 C98.727932,77.4423742 99.0050854,77.9966812 99.0050854,78.7348936 L98.912701,79.7493962 C98.8203164,80.764762 98.727932,81.964897 98.727932,83.1641684 C98.727932,83.532843 99.0974698,83.8099964 99.4661444,83.8099964 C99.6509134,83.8099964 99.8356824,83.717612 100.020451,83.6252274 C105.926151,79.0111836 111.278407,77.3499898 114.046488,77.3499898 C118.569011,77.3499898 122.075305,79.473106 124.751864,83.902381 C124.93577,84.1795344 125.120539,84.2710554 125.397692,84.2710554 C125.582461,84.2710554 125.858751,84.1795344 125.951136,83.9947654 C131.395777,79.8417806 136.840418,77.3499898 140.439096,77.3499898 C149.021355,77.3499898 154.097321,83.717612 154.097321,94.5145092 C154.097321,97.5597436 154.097321,101.527959 154.004937,105.127501 C154.004937,108.356641 153.912553,111.310354 153.912553,113.432607 C153.912553,113.893666 154.558381,115.370091 155.573746,115.647244 C156.865402,116.293072 158.618981,116.570226 160.926003,116.9389 L161.018387,116.9389 C161.203156,117.584728 160.833618,119.984135 160.464944,120.446057 C159.910637,120.446057 159.08004,120.446057 158.157922,120.353673 C156.404343,120.261288 153.912553,120.168904 151.144472,120.168904 C145.422677,120.168904 142.469827,120.261288 139.608499,120.446057 C139.424593,119.707845 139.332208,117.493207 139.608499,116.9389 C141.269692,116.66261 142.100289,116.385457 143.115655,116.108303 C144.961618,115.55486 145.422677,114.724263 145.515062,112.324856 C145.515062,110.572141 145.883736,95.6222596 145.330293,92.0227182 C144.776849,88.3316558 142.007905,83.9947654 135.917436,83.9947654 C133.610414,83.9947654 130.011736,84.9177468 126.504579,87.5934434 C126.320674,87.7782124 126.135905,88.2392714 126.135905,88.5164248 L126.135905,88.6088092 C126.504579,90.5462932 126.504579,92.7617942 126.504579,96.175703 L126.504579,102.173787 C126.504579,106.326772 126.412195,110.202604 126.504579,113.155453 C126.504579,115.186185 127.704714,115.647244 128.72008,116.016782 C129.273524,116.108303 129.642198,116.200688 130.104121,116.293072 C130.934718,116.477841 131.765315,116.66261 133.056971,116.9389 C133.24174,117.308438 133.24174,118.50771 132.964586,119.523076 C132.872202,120.076519 132.687433,120.353673 132.595912,120.446057 C129.458293,120.353673 126.228289,120.261288 121.521861,120.261288 C120.137821,120.261288 117.738414,120.353673 115.707682,120.353673 C114.046488,120.353673 112.477679,120.446057 111.555561,120.446057 C111.463176,120.261288 111.278407,119.61546 111.278407,118.600094 C111.278407,117.769497 111.463176,117.123669 111.647945,116.9389 C112.109004,116.846516 112.477679,116.754995 112.939601,116.754995 C114.046488,116.570226 114.96947,116.385457 115.892451,116.200688 C117.461261,115.739629 118.014704,114.909032 118.107089,112.879163 C118.384242,108.26512 118.660532,95.068816 118.014704,91.7464282 C116.907817,86.3941718 113.862583,83.717612 108.971386,83.717612 C106.11092,83.717612 102.511379,85.1016524 99.558529,87.3171532 C99.0974698,87.6858278 98.727932,88.6088092 98.727932,89.4394062 L98.727932,94.884047 C98.727932,101.527959 98.727932,109.833929 98.8203164,113.432607 C98.912701,114.539494 99.2813754,115.832013 101.404492,116.293072 C101.865551,116.385457 102.603763,116.570226 103.526745,116.66261 L105.187939,116.9389 C105.372708,117.493207 105.280323,119.707845 104.910785,120.446057 C103.987804,120.446057 102.880917,120.353673 101.588397,120.353673 C99.6509134,120.261288 97.1591224,120.168904 94.3910416,120.168904 C91.1610382,120.168904 88.8540162,120.261288 87.0080534,120.353673 C85.7163974,120.168904 84.7010314,120.168904 83.5941444,120.168904 L83.5941444,120.168904 L83.5941444,120.168904 Z"
                      fill="white"
                    ></path>
                    <g>
                      <path
                        d="M35.0534362,142.317005 L31.2699893,141.024486 C31.2699893,141.024486 31.7319117,121.737713 24.8108459,120.353673 C20.1968021,115.001416 25.5490584,-106.659184 42.1592709,119.61546 C42.1592709,119.61546 36.43834,122.475926 35.4229741,127.367123 C34.3152237,132.165936 35.0534362,142.317005 35.0534362,142.317005 L35.0534362,142.317005 L35.0534362,142.317005 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M35.0534362,142.317005 L31.2699893,141.024486 C31.2699893,141.024486 31.7319117,121.737713 24.8108459,120.353673 C20.1968021,115.001416 25.5490584,-106.659184 42.1592709,119.61546 C42.1592709,119.61546 36.43834,122.475926 35.4229741,127.367123 C34.3152237,132.165936 35.0534362,142.317005 35.0534362,142.317005 L35.0534362,142.317005 L35.0534362,142.317005 Z"
                        fill="#A6A385"
                      ></path>
                      <path
                        d="M37.0841679,123.676061 C37.0841679,123.676061 70.2130718,101.897497 62.461409,56.5867926 C54.9868998,23.6426576 37.360458,12.8457605 35.422974,8.69277572 C33.3007211,5.7399258 31.2699892,0.572438448 31.2699892,0.572438448 L32.6548931,92.2074874 C32.6548931,92.2998718 29.7935642,120.261288 37.0841679,123.676061"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M37.0841679,123.676061 C37.0841679,123.676061 70.2130718,101.897497 62.461409,56.5867926 C54.9868998,23.6426576 37.360458,12.8457605 35.422974,8.69277572 C33.3007211,5.7399258 31.2699892,0.572438448 31.2699892,0.572438448 L32.6548931,92.2074874 C32.6548931,92.2998718 29.7935642,120.261288 37.0841679,123.676061"
                        fill="#499D4A"
                      ></path>
                      <path
                        d="M29.332506,124.875332 C29.332506,124.875332 -1.76652951,103.650212 0.0794333896,66.2768026 C1.8321484,28.9025296 23.7954806,10.5387386 28.0399866,7.21635076 C30.8089308,4.26350084 30.9013154,3.15575042 31.0860844,0.202900506 C33.0235682,4.35588532 32.6548938,62.3085868 32.9311838,69.1372682 C33.7617808,95.4374908 31.4547588,119.892614 29.332506,124.875332 L29.332506,124.875332 L29.332506,124.875332 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M29.332506,124.875332 C29.332506,124.875332 -1.76652951,103.650212 0.0794333896,66.2768026 C1.8321484,28.9025296 23.7954806,10.5387386 28.0399866,7.21635076 C30.8089308,4.26350084 30.9013154,3.15575042 31.0860844,0.202900506 C33.0235682,4.35588532 32.6548938,62.3085868 32.9311838,69.1372682 C33.7617808,95.4374908 31.4547588,119.892614 29.332506,124.875332 L29.332506,124.875332 L29.332506,124.875332 Z"
                        fill="#58AA50"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 16 16"
                fill="none"
                className="code1 absolute mr-40 mb-28"
              >
                <path
                  fill="#252F3E"
                  d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"
                />

                <g fill="#F90" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" />

                  <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z" />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="40px"
                height="40px"
                viewBox="0 0 32 32"
                version="1.1"
                className="absolute mt-20 ml-40"
              >
                <title>mysql</title>
                <path d="M30.026 15.139c-0.082-0.006-0.177-0.010-0.273-0.010-0.484 0-0.947 0.090-1.373 0.254l0.026-0.009c-0.125 0.050-0.325 0.050-0.342 0.209 0.069 0.066 0.079 0.175 0.137 0.267 0.117 0.198 0.261 0.366 0.429 0.506l0.003 0.003c0.175 0.137 0.35 0.27 0.534 0.387 0.325 0.2 0.694 0.319 1.012 0.52 0.181 0.117 0.366 0.266 0.55 0.391 0.091 0.062 0.15 0.175 0.267 0.215v-0.025c-0.057-0.075-0.075-0.184-0.131-0.267-0.084-0.084-0.167-0.159-0.25-0.241-0.248-0.325-0.535-0.603-0.857-0.835l-0.012-0.008c-0.267-0.182-0.852-0.437-0.962-0.744l-0.016-0.018c0.218-0.031 0.412-0.077 0.599-0.139l-0.024 0.007c0.284-0.075 0.544-0.059 0.837-0.132 0.132-0.034 0.266-0.075 0.4-0.117v-0.075c-0.15-0.15-0.262-0.354-0.417-0.494-0.409-0.36-0.86-0.698-1.335-1.002l-0.045-0.027c-0.262-0.167-0.595-0.275-0.871-0.417-0.1-0.050-0.267-0.075-0.325-0.159-0.13-0.185-0.245-0.397-0.336-0.621l-0.008-0.022q-0.368-0.714-0.684-1.453c-0.144-0.383-0.287-0.697-0.448-1.001l0.023 0.047c-0.786-1.319-1.881-2.379-3.188-3.102l-0.043-0.022c-0.309-0.153-0.668-0.272-1.045-0.339l-0.025-0.004c-0.209-0.010-0.417-0.025-0.625-0.034-0.146-0.094-0.272-0.19-0.39-0.296l0.003 0.003c-0.475-0.3-1.704-0.95-2.054-0.090-0.225 0.542 0.334 1.077 0.527 1.352 0.154 0.183 0.294 0.388 0.415 0.605l0.010 0.020c0.059 0.145 0.075 0.294 0.134 0.445 0.145 0.452 0.292 0.823 0.459 1.182l-0.026-0.062c0.099 0.199 0.202 0.368 0.317 0.528l-0.008-0.012c0.067 0.091 0.182 0.134 0.209 0.284-0.086 0.181-0.153 0.391-0.19 0.61l-0.002 0.014c-0.108 0.332-0.171 0.715-0.171 1.112 0 0.621 0.153 1.206 0.423 1.72l-0.010-0.020c0.134 0.207 0.452 0.667 0.878 0.491 0.375-0.15 0.292-0.625 0.4-1.043 0.025-0.1 0.009-0.166 0.060-0.234v0.019c0.117 0.235 0.235 0.459 0.342 0.694 0.302 0.435 0.661 0.805 1.071 1.11l0.013 0.009c0.2 0.15 0.359 0.41 0.609 0.502v-0.025h-0.019c-0.057-0.062-0.12-0.117-0.189-0.164l-0.004-0.002c-0.155-0.152-0.299-0.316-0.429-0.489l-0.008-0.011c-0.326-0.44-0.636-0.938-0.905-1.461l-0.029-0.061c-0.137-0.262-0.252-0.545-0.362-0.804-0.050-0.1-0.050-0.25-0.134-0.3-0.148 0.166-0.281 0.351-0.392 0.55l-0.008 0.016c-0.128 0.373-0.212 0.804-0.234 1.251l-0 0.011c-0.034 0.009-0.017 0-0.034 0.018-0.267-0.065-0.359-0.342-0.459-0.575-0.136-0.366-0.215-0.79-0.215-1.231 0-0.356 0.051-0.7 0.147-1.025l-0.006 0.026c0.059-0.175 0.309-0.727 0.209-0.895-0.052-0.159-0.217-0.25-0.309-0.379-0.109-0.154-0.209-0.329-0.292-0.514l-0.008-0.020c-0.2-0.467-0.3-0.985-0.517-1.452-0.131-0.244-0.269-0.454-0.424-0.65l0.007 0.009c-0.165-0.191-0.317-0.404-0.449-0.63l-0.011-0.020c-0.041-0.091-0.1-0.242-0.034-0.342 0.012-0.058 0.058-0.103 0.117-0.112l0.001-0c0.11-0.090 0.419 0.027 0.527 0.077 0.317 0.12 0.59 0.261 0.843 0.427l-0.016-0.010c0.117 0.082 0.244 0.241 0.394 0.282h0.175c0.267 0.059 0.569 0.018 0.819 0.091 0.459 0.155 0.856 0.349 1.223 0.587l-0.021-0.013c1.104 0.713 1.988 1.677 2.586 2.816l0.020 0.041c0.1 0.192 0.144 0.369 0.235 0.569 0.175 0.412 0.391 0.829 0.569 1.227 0.169 0.428 0.369 0.798 0.607 1.139l-0.012-0.018c0.125 0.175 0.627 0.266 0.852 0.357 0.237 0.083 0.427 0.162 0.611 0.251l-0.037-0.016c0.287 0.175 0.567 0.375 0.837 0.567 0.137 0.095 0.554 0.304 0.579 0.472zM18.302 22.452c0 0.015 0.001 0.032 0.001 0.049 0 0.558-0.249 1.057-0.643 1.393l-0.003 0.002c-0.432 0.352-0.989 0.566-1.596 0.566-0.047 0-0.094-0.001-0.14-0.004l0.006 0c-0.739-0.010-1.419-0.25-1.976-0.651l0.010 0.007 0.296-0.595c0.429 0.24 0.939 0.389 1.481 0.41l0.006 0c0.027 0.002 0.058 0.003 0.090 0.003 0.332 0 0.641-0.104 0.894-0.281l-0.005 0.003c0.229-0.174 0.375-0.446 0.375-0.752 0-0.006-0-0.011-0-0.017v0.001c0-0.412-0.287-0.762-0.81-1.056-0.485-0.266-1.453-0.821-1.453-0.821-0.478-0.296-0.791-0.817-0.791-1.411 0-0.021 0-0.042 0.001-0.063l-0 0.003c-0.001-0.019-0.001-0.041-0.001-0.063 0-0.515 0.227-0.977 0.586-1.291l0.002-0.002c0.382-0.324 0.881-0.521 1.426-0.521 0.035 0 0.069 0.001 0.103 0.002l-0.005-0c0.009-0 0.020-0 0.031-0 0.639 0 1.234 0.191 1.73 0.52l-0.012-0.007-0.266 0.595c-0.391-0.176-0.847-0.282-1.327-0.287l-0.002-0c-0.024-0.002-0.051-0.003-0.079-0.003-0.28 0-0.538 0.098-0.74 0.262l0.002-0.002c-0.189 0.157-0.309 0.392-0.31 0.655v0c0 0.41 0.292 0.762 0.832 1.062 0.491 0.269 1.483 0.837 1.483 0.837 0.488 0.287 0.811 0.809 0.811 1.407 0 0.018-0 0.037-0.001 0.055l0-0.003zM20.374 22.983c-0.273-0.545-0.432-1.187-0.432-1.866 0-0.107 0.004-0.213 0.012-0.317l-0.001 0.014q0-2.611 1.587-2.612c0.026-0.002 0.057-0.003 0.089-0.003 0.475 0 0.892 0.248 1.129 0.622l0.003 0.005c0.271 0.542 0.43 1.182 0.43 1.858 0 0.104-0.004 0.207-0.011 0.309l0.001-0.014q0 2.632-1.587 2.634c-0.027 0.002-0.058 0.003-0.089 0.003-0.475 0-0.893-0.248-1.13-0.622l-0.003-0.005zM24.488 24.535l-1.27-0.625c0.116-0.097 0.22-0.199 0.316-0.309l0.003-0.003c0.513-0.692 0.821-1.563 0.821-2.505 0-0.109-0.004-0.217-0.012-0.324l0.001 0.014q0-3.43-2.693-3.432c-0.040-0.002-0.087-0.003-0.134-0.003-0.767 0-1.456 0.337-1.925 0.872l-0.002 0.003c-0.511 0.692-0.818 1.562-0.818 2.504 0 0.106 0.004 0.211 0.012 0.315l-0.001-0.014c-0.009 0.101-0.014 0.219-0.014 0.338 0 0.874 0.274 1.684 0.74 2.349l-0.009-0.013c0.449 0.478 1.086 0.776 1.791 0.776 0.066 0 0.131-0.003 0.195-0.008l-0.009 0.001c0.009 0 0.021 0 0.032 0 0.311 0 0.612-0.045 0.897-0.128l-0.022 0.006 1.656 0.965 0.45-0.777zM28.636 24.366h-3.287v-6.91h1.106v6.061h2.181zM13.235 19.268c-0.287 2.084-0.944 3.965-1.905 5.65l0.040-0.077c-0.385 0.741-1.113 1.257-1.968 1.34l-0.010 0.001c-0.259-0.014-0.5-0.076-0.719-0.177l0.012 0.005v-0.617c0.137 0.021 0.295 0.033 0.456 0.033 0.009 0 0.018-0 0.028-0h-0.001c0.016 0.001 0.034 0.001 0.052 0.001 0.289 0 0.554-0.105 0.758-0.28l-0.002 0.001c0.22-0.181 0.361-0.451 0.369-0.755l0-0.001c-0.053-0.438-0.154-0.837-0.299-1.214l0.012 0.034-1.267-3.944h1.137l0.909 2.949c0.162 0.416 0.256 0.898 0.256 1.401 0 0.001 0 0.002 0 0.002v-0c0.482-1.262 0.848-2.734 1.034-4.261l0.009-0.092zM8.215 24.366h-1.158q-0.049-2.761-0.337-5.511h-0.010l-1.762 5.511h-0.881l-1.75-5.511h-0.012q-0.205 2.751-0.244 5.511h-1.056q0.103-3.685 0.512-6.911h1.437l1.668 5.079h0.010l1.683-5.079h1.368q0.454 3.777 0.535 6.911zM21.505 7.879c-0.002 0-0.005-0-0.008-0-0.119 0-0.234 0.015-0.344 0.043l0.010-0.002v0.016h0.017c0.086 0.128 0.174 0.239 0.269 0.343l-0.002-0.002c0.067 0.134 0.125 0.267 0.192 0.4l0.017-0.019c0.109-0.086 0.178-0.218 0.178-0.366 0-0.018-0.001-0.035-0.003-0.053l0 0.002c-0.050-0.059-0.057-0.117-0.1-0.175-0.050-0.084-0.157-0.125-0.225-0.191z" />
              </svg>
              <img
                className="code1 -top-10 right-0 h-20 w-20 absolute"
                src="./nodejs.svg"
              ></img>
              <img
                className="code1 mb-40 left-0 h-10 w-10 absolute"
                src="./graphql.svg"
              ></img>
            </div>
            <div className="h-full flex flex-col px-4 justify-start text-justify  text-white w-full">
              <div className="flex flex-col items-center text-center bg-gray-900 bg-opacity-20 rounded-md p-4">
                <span className="text-3xl pt-14">Backend Developer</span>
                <span className="pt-6">
                  As a backend developer, I have been responsible for designing
                  and developing the server-side of various web applications. My
                  primary focus has been on creating efficient and scalable
                  systems that can handle large amounts of data and traffic. To
                  accomplish this, I have utilized my strong understanding of
                  programming languages such as Express.js and Node.js, as well
                  as my experience with backend frameworks such as Flask.
                </span>
                <span className="pt-1">
                  Throughout my experience as a backend developer, I have also
                  gained a good understanding of database management. This has
                  allowed me to create efficient and effective database
                  structures that can handle large amounts of data and provide
                  fast access to information.
                </span>
                <Link
                  target="_blank"
                  to="https://drive.google.com/file/d/1MXjhGhKmjwmTfuIgrrph7QxHtLaSaXfT/view?usp=sharing"
                  className="mt-10 flex justify-center items-center bg-gray-900 h-10 w-40 justify-start"
                >
                  Explore Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 z-20">
        <div className="h-full w-full pt-40 pb-20 relative flex flex-col space-y-10 justify-center items-center">
          <div className="absolute z-20 top-10 w-full px-5 text-center text-lg text-white">
            Elevating Expertise, One Achievement at a Time.
          </div>
          <Link target="_blank" to="https://drive.google.com/file/d/1b1yAG6HJsEhG8emqv_Y6hiDs7LLDEO1y/view?usp=sharing" className="relative hover:border hover:border-gray-500 h-80 w-60 border bg-gray-900 shadow-xl shadow-gray-900">
            <img
              className="cert1 h-80 w-60 bg-white absolute -top-4 -right-4"
              src="./cert1.png"
            ></img>
          </Link>
          <Link target="_blank" to='https://drive.google.com/file/d/1fxOmg-l54g45MGufYORJVembVNyLJvbj/view?usp=sharing' className="relative h-80 w-60 border bg-gray-900 shadow-xl hover:border hover:border-gray-500 shadow-gray-900">
            <img
              className="cert2 h-80 w-60 bg-white absolute -top-4 -right-4"
              src="./cert2.png"
            ></img>
          </Link>
          <Link target="_blank" to="https://drive.google.com/file/d/1FY_qUwnVMGxWm9YXax9iA8SlO4Kxq2Nn/view?usp=sharing" className="relative h-80 w-60 border bg-gray-900 shadow-xl shadow-gray-900 hover:border hover:border-gray-500">
            <img
              className="cert3 h-80 w-60 bg-white absolute -top-4 -right-4"
              src="./cert3.png"
            ></img>
          </Link>
          <div className="relative h-80 w-60 border bg-gray-900 shadow-xl shadow-gray-900 hover:border hover:border-gray-500">
            <Link target="_blank" to="https://drive.google.com/file/d/1xO7OsaAVf1DBFcbt9qC2v1WoYU4up3rL/view?usp=sharing" className="cert4 flex items-center bg-gray-900 h-80 w-60 absolute -top-4 -right-4">
              <img
                className="bg-white h-40 w-60 bg-white"
                src="./cert4.png"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
