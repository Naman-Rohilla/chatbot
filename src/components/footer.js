import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer({ targetElement }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [checksubmit, setchecksubmit] = useState(true);

  const nameChange = (event) => {
    setname(event.target.value);
  };

  const emailChange = (event) => {
    setemail(event.target.value);
  };

  const messageChange = (event) => {
    setmessage(event.target.value);
  };

  const handleSubmit = () => {
    console.log(
      {
        name: name,
        email: email,
        message: message,
      },
      "namanROhilla"
    );
  };

  useEffect(() => {
    if (name.length > 0 && message.length > 0 && message.length > 0) {
      setchecksubmit(false);
    } else {
      setchecksubmit(true);
    }
  }, [name, message, email]);

  return (
    <>
      <div ref={targetElement} className="footerweb z-20 bottom-0 bg-gray-800 border-t border-white shadow-sm h-96 flex justify-between">
        <div className="h-full flex flex-col justify-between w-1/2">
          <span className="font-styleFont space-x-5 pt-8 pl-10 text-9xl text-white flex">
            <span className="nspin">n</span>
            <span className="aspin">a</span>
            <span className="mspin">m</span>
            <span className="aaspin">a</span>
            <span className="nnspin">n</span>
          </span>
          <div className="pl-10 -mt-10 flex space-x-10">
            <span className="flex flex-col text-white ">
              <span className="font-bold text-lg">Products</span>
              <Link to="/chat-bot" className="pt-2 cursor-pointer">ChatBot</Link>
              <Link to="/ocr" className="pt-1 cursor-pointer">OCR PDF</Link>
            </span>
            <span className="flex flex-col text-white ">
              <span className="font-bold text-lg">Internship Experience</span>
              <Link target="_blank" to="https://drive.google.com/file/d/1b1yAG6HJsEhG8emqv_Y6hiDs7LLDEO1y/view?usp=sharing" className="pt-2 cursor-pointer">SL SDE Intern</Link>
              <Link target="_blank" to='https://drive.google.com/file/d/1fxOmg-l54g45MGufYORJVembVNyLJvbj/view?usp=sharing' className="pt-1 cursor-pointer">NSDC Full Stack Developer</Link>
            </span>
            <span className="flex flex-col text-white ">
              <span className="font-bold text-lg">Certifications</span>
              <Link target="_blank" to="https://drive.google.com/file/d/1FY_qUwnVMGxWm9YXax9iA8SlO4Kxq2Nn/view?usp=sharing" className="pt-2 cursor-pointer">Patent</Link>
              <Link target="_blank" to="https://drive.google.com/file/d/1xO7OsaAVf1DBFcbt9qC2v1WoYU4up3rL/view?usp=sharing" className="pt-1 cursor-pointer">JPMC Job Simulation forage</Link>
            </span>
          </div>
          <div className="flex justify-between border-t border-dotted ml-10 pt-7">
            <span className="flex mb-4 space-x-8 text-white">
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
            <div className="flex space-x-5 text-white">
              <span>All Rights Reserved</span>
              <span>2023</span>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-center items-end pr-14 space-y-2">
          <div className="flex flex-col text-white space-y-2 ml-10">
            <span>Name</span>
            <input
              value={name}
              onChange={nameChange}
              className="w-96 h-10 rounded-sm shadow-md text-gray-800 pl-2 outline-none"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col text-white space-y-2 ml-10">
            <span>Email</span>
            <input
              value={email}
              onChange={emailChange}
              className="w-96 h-10 rounded-sm shadow-md text-gray-800 pl-2 outline-none"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col text-white space-y-2 ml-10">
            <span>Message</span>
            <textarea
              value={message}
              onChange={messageChange}
              className="w-96 h-28 rounded-sm shadow-md text-gray-800 pl-2 pt-2 outline-none"
              type="text"
            ></textarea>
          </div>
          {checksubmit ? (
            <button
              onClick={handleSubmit}
              className="flex cursor-not-allowed flex-col text-gray-400 space-y-2 ml-10 w-96 h-10 justify-center bg-gray-700 items-center"
            >
              <span>Submit</span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex flex-col text-white space-y-2 ml-10 w-96 h-10 justify-center bg-gray-900 items-center"
            >
              <span>Submit</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
