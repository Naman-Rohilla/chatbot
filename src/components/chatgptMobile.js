import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import StringEditor from "./stringEditor";
// import jsPDF from "jspdf";
import "./chatgpt.css";
import { Bars } from "react-loader-spinner";

import Drawer from "./drawer";

export default function ChatgptMobile() {
  const [chatarray, setChatarray] = useState([]);
  const [isOpen2, setIsOpen2] = useState(false);

  const [currentchatarray, setCurrentchatarray] = useState([]);

  const [chatid, setChatid] = useState(0);
  const [curentchatid, setCurrentchatid] = useState(-1);
  const [query, setQuery] = useState("");
  const [file, setFile] = useState(null);
  const [pdfdata, setpdfdata] = useState("");
  const [pdfactive, setpdfactive] = useState(false);
  const fileInputRef = useRef(null);
  const [message, setmessage] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [chatloading, setchatloading] = useState(false);
  const [processloading, setprocessloading] = useState(false);

  function changeChat(e) {
    setQuery(e.target.value);
  }

  async function submitChat(e) {
    setchatloading(true);
    if (e.key == "Enter") {
      setQuery("");
      setCurrentchatarray([...currentchatarray, query]);
      try {
        let finalstr = "You can use this paragraph for refernce:";
        if (query.length < 300) {
          for (var i = 0; i < currentchatarray.length; i++) {
            finalstr = finalstr + currentchatarray[i] + "\n";
          }
        }
        var x = finalstr.length > 7500 ? 7500 : finalstr.length;
        finalstr.slice(-x);
        if (pdfactive)
          finalstr =
            "use this as refernce " +
            pdfdata.substring(0, 7599) +
            "now anser this question :";
        else finalstr = finalstr + "now answer this question:";
        finalstr = finalstr + query;

        const response = await axios.get(
          "https://flaskserver-production.up.railway.app/",
          {
            params: {
              param1: finalstr,
            },
          }
        );

        var tempdata = response.data;

        setCurrentchatarray([...currentchatarray, query, tempdata]);

        var check = 0;
        console.log(curentchatid, "currentchatid");
        const updatedChatarray = chatarray?.map((item) => {
          if (item.id == curentchatid) {
            // If the item has id 1, update its userQuestion array
            check = 1;
            return {
              ...item,
              userQuestion: [...item.userQuestion, query],
              botAnswer: [...item.botAnswer, tempdata],
              // pdf: false;
            };
          }
          // For other items, return them as they are
          return item;
        });
        if (check == 1) {
          setChatarray(updatedChatarray);
        } else {
          const newEntry = {
            id: chatid,
            userQuestion: [query],
            botAnswer: [tempdata],
            pdf: false,
          };
          setChatarray([...chatarray, newEntry]);
          setChatid(chatid + 1);
          setCurrentchatid(curentchatid + 1);
        }
      } catch (err) {
        console.log(err, "err");
        var tempdata = "data not fetched";
        console.log(err, "err");
        setCurrentchatarray([...currentchatarray, query, tempdata]);

        var check = 0;
        console.log(curentchatid, "currentchatid");
        const updatedChatarray = chatarray?.map((item) => {
          if (item.id == curentchatid) {
            // If the item has id 1, update its userQuestion array
            check = 1;
            return {
              ...item,
              userQuestion: [...item.userQuestion, query],
              botAnswer: [...item.botAnswer, tempdata],
              // pdf: false;
            };
          }
          // For other items, return them as they are
          return item;
        });
        if (check == 1) {
          setChatarray(updatedChatarray);
        } else {
          const newEntry = {
            id: chatid,
            userQuestion: [query],
            botAnswer: [tempdata],
            pdf: false,
          };
          setChatarray([...chatarray, newEntry]);
          setChatid(chatid + 1);
          setCurrentchatid(curentchatid + 1);
        }
      }
      // console.log
    }
    setchatloading(false);
  }

  function newChatFunction() {
    setChatid(chatid + 1);
    setCurrentchatid(chatid);
    setCurrentchatarray([]);
    setQuery("");
    setpdfactive(false);
    setpdfdata("");
  }

  function clickChatFunction(ca) {
    setCurrentchatid(ca.id);
    if (ca.pdf) {
      setpdfdata(ca.pdf_data);
      setpdfactive(true);
      setFile(ca.file);
      setNumPages(null);
      setPageNumber(1);
    } else {
      setpdfactive(false);
      setpdfdata("");
    }
    var temparray = [];
    for (var x = 0; x < ca.userQuestion.length; x++) {
      temparray.push(ca.userQuestion[x]);
      temparray.push(ca.botAnswer[x]);
    }
    setCurrentchatarray(temparray);
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // handleUpload();
    setmessage(true);
  };

  const handleUpload = async () => {
    console.log(file, "naman");
    setprocessloading(true);
    if (file) {
      const formData = new FormData();
      formData.append("pdf_file", file);

      try {
        const response = await axios.post(
          "https://flaskserver-production.up.railway.app/process_pdf_chatbot",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        let result = response.data.split("$*breakforresult");
        setpdfdata(result[0]);
        setpdfactive(true);
        const query1 = "Write 5 important points in this pdf";
        setCurrentchatarray([query1, result[1]]);

        const newEntry = {
          id: chatid,
          userQuestion: [query1],
          botAnswer: [result[1]],
          pdf: true,
          pdf_data: result[0],
          file: file,
        };
        setChatarray([...chatarray, newEntry]);
        setChatid(chatid + 1);
        setCurrentchatid(curentchatid + 1);
        console.log(currentchatarray, "jjk");
      } catch (error) {
        console.error("Error processing the PDF:", error);
      }
    } else {
      console.error("No PDF file selected.");
    }
    setmessage(false);
    setprocessloading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the input value to an empty string
    }
  };

  const handleSpanClick = () => {
    if (fileInputRef.current) {
      console.log("hh12");
      fileInputRef.current.click(); // Programmatically click the input element
    }
    console.log("hh");
  };

  console.log(chatarray, "Chatarray");

  const toggleDrawer2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <div className="h-screen bg-gray-800 flex">
      {message && (
          <div className="z-50 absolute h-full w-full flex justify-center items-center">
            <div className="flex justify-center items-center bg-black text-white h-full w-full bg-opacity-50">
              {processloading ? (
                <Bars
                  height="30"
                  width="40"
                  color="#64748b"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                <span
                  className="px-6 py-2 rounded-md bg-gray-500 cursor-pointer hover:scale-110"
                  onClick={handleUpload}
                >
                  Process PDF
                </span>
              )}
            </div>
          </div>
        )}
        <Drawer
          file={file}
          setNumPages={setNumPages}
          setPageNumber={setPageNumber}
          numPages={numPages}
          pageNumber={pageNumber}
        />
        <button
          onClick={toggleDrawer2}
          className="h-10 w-10 text-black animate-pulse z-20 toggle-button2"
        >
          {isOpen2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24.000001 24.000001"
            >
              <filter
                id="a"
                color-interpolation-filters="sRGB"
                height="1.798065"
                width="1.31919"
                x="-.159595"
                y="-.399032"
              >
                <feGaussianBlur stdDeviation="1.3302515" />
              </filter>
              <g transform="matrix(.90944794 0 0 .90944794 -259.0175 -817.2446)">
                <path
                  d="m300.84375 908.875c-.35929.0633-.67275.33918-.78125.6875l-.625 1.8125h-10.4375c-.52358.00005-.99995.47642-1 1v1c.00005.52358.47642.99995 1 1h10.4375l.625 1.8125c.17584.53611.8642.83335 1.375.59375l6-3c.36721-.17625.60257-.59466.5625-1 .001-.0312.001-.0625 0-.0937-.0597-.31022-.27572-.58621-.5625-.71875l-6-3c-.1822-.0907-.39248-.12385-.59375-.0937z"
                  filter="url(#a)"
                  opacity=".2"
                />
                <path d="m308 911.67377a1.0001 1.0001 0 0 0 -.5625-.71875l-6-3a1.0001 1.0001 0 0 0 -1.375.59375l-.625 1.8125h-10.4375a1.0001 1.0001 0 0 0 -1 1v1a1.0001 1.0001 0 0 0 1 1h10.4375l.625 1.8125a1.0001 1.0001 0 0 0 1.375.59375l6-3a1.0001 1.0001 0 0 0 .5625-1 1.0001 1.0001 0 0 0 0-.0937z" />
                <path
                  d="m307 911.86127-6-3-.84375 2.5h-11.15625v1h11.15625l.84375 2.5z"
                  fill="#fefefe"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7L7 7M20 7L11 7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M20 17H17M4 17L13 17"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M4 12H7L20 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          )}
        </button>
        <div className={`drawer2 ${isOpen2 ? "open" : ""} z-50`}>
          <div className="flex flex-col h-screen items-center justify-between bg-gray-900 w-80">
            <div className="w-full h-screen space-y-2 flex flex-col items-center overflow-y-scroll">
              <div className="w-full space-y-2 flex flex-col items-center py-4">
                {chatarray?.map((ca, ind) => (
                  <div
                    onClick={() => clickChatFunction(ca)}
                    key={ind}
                    className={
                      ca.id == curentchatid
                        ? `w-3/4 pl-4 cursor-pointer flex bg-gray-600 space-x-2 items-center h-10 mt-20 text-white`
                        : `w-3/4 pl-4 cursor-pointer flex hover:bg-gray-600 space-x-2 items-center h-10 mt-20 text-white`
                    }
                  >
                    <span className="pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path
                          d="M7 9H17M7 13H12M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      {ca?.userQuestion[0]?.length > 20
                        ? ca.userQuestion[0].substring(0, 20) + "..."
                        : ca.userQuestion[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <div
                onClick={() => newChatFunction()}
                className="flex space-x-2 cursor-pointer hover:scale-105 hover:duration-150 ease-in justify-center items-center text-white w-3/4 h-12 mb-5 border border-dotted border-white"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path
                      d="M4 12H20M12 4V20"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>New Chat</span>
              </div>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
              <div
                onClick={handleSpanClick}
                className="text-white flex justify-center items-center w-3/4 h-12 bg-gray-800 mb-5 space-x-2 hover:scale-105 hover:duration-150 ease-in cursor-pointer"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="_x32_"
                    viewBox="0 0 512 512"
                    fill="white"
                  >
                    <g>
                      <path
                        class="st0"
                        d="M347.746,346.204c-8.398-0.505-28.589,0.691-48.81,4.533c-11.697-11.839-21.826-26.753-29.34-39.053   c24.078-69.232,8.829-88.91-11.697-88.91c-16.119,0-24.167,17.011-22.376,35.805c0.906,9.461,8.918,29.34,18.78,48.223   c-6.05,15.912-16.847,42.806-27.564,62.269c-12.545,3.812-23.305,8.048-31.027,11.622c-38.465,17.888-41.556,41.773-33.552,51.894   c15.197,19.226,47.576,2.638,80.066-55.468c22.243-6.325,51.508-14.752,54.146-14.752c0.304,0,0.721,0.097,1.204,0.253   c16.215,14.298,35.366,30.67,51.128,32.825c22.808,3.136,35.791-13.406,34.891-23.692   C382.703,361.461,376.691,347.942,347.746,346.204z M203.761,408.88c-9.401,11.178-24.606,21.9-29.972,18.334   c-5.373-3.574-6.265-13.86,5.819-25.497c12.076-11.623,32.29-17.657,35.329-18.787c3.59-1.337,4.482,0,4.482,1.791   C219.419,386.512,213.154,397.689,203.761,408.88z M244.923,258.571c-0.899-11.192,1.33-21.922,10.731-23.26   c9.386-1.352,13.868,9.386,10.292,26.828c-3.582,17.464-5.38,29.08-7.164,30.44c-1.79,1.338-3.567-3.144-3.567-3.144   C251.627,282.27,245.815,269.748,244.923,258.571z M248.505,363.697c4.912-8.064,17.442-40.702,17.442-40.702   c2.683,4.926,23.699,29.956,23.699,29.956S257.438,360.123,248.505,363.697z M345.999,377.995   c-13.414-1.768-36.221-17.895-36.221-17.895c-3.128-1.337,24.992-5.157,35.79-4.466c13.875,0.9,18.794,6.718,18.794,12.53   C364.362,373.982,359.443,379.787,345.999,377.995z"
                      />
                      <path
                        class="st0"
                        d="M461.336,107.66l-98.34-98.348L353.683,0H340.5H139.946C92.593,0,54.069,38.532,54.069,85.901v6.57H41.353   v102.733h12.716v230.904c0,47.361,38.525,85.893,85.878,85.893h244.808c47.368,0,85.893-38.532,85.893-85.893V130.155v-13.176   L461.336,107.66z M384.754,480.193H139.946c-29.875,0-54.086-24.212-54.086-54.086V195.203h157.31V92.47H85.86v-6.57   c0-29.882,24.211-54.102,54.086-54.102H332.89v60.894c0,24.888,20.191,45.065,45.079,45.065h60.886v288.349   C438.855,455.982,414.636,480.193,384.754,480.193z M88.09,166.086v-47.554c0-0.839,0.683-1.524,1.524-1.524h15.108   c2.49,0,4.786,0.409,6.837,1.212c2.029,0.795,3.812,1.91,5.299,3.322c1.501,1.419,2.653,3.144,3.433,5.121   c0.78,1.939,1.182,4.058,1.182,6.294c0,2.282-0.402,4.414-1.19,6.332c-0.78,1.918-1.932,3.619-3.418,5.054   c-1.479,1.427-3.27,2.549-5.321,3.329c-2.036,0.78-4.332,1.174-6.822,1.174h-6.376v17.241c0,0.84-0.683,1.523-1.523,1.523h-7.208   C88.773,167.61,88.09,166.926,88.09,166.086z M134.685,166.086v-47.554c0-0.839,0.684-1.524,1.524-1.524h16.698   c3.173,0,5.968,0.528,8.324,1.568c2.386,1.062,4.518,2.75,6.347,5.009c0.944,1.189,1.694,2.504,2.236,3.916   c0.528,1.375,0.929,2.862,1.189,4.407c0.253,1.531,0.401,3.181,0.453,4.957c0.045,1.694,0.067,3.515,0.067,5.447   c0,1.924-0.022,3.746-0.067,5.44c-0.052,1.769-0.2,3.426-0.453,4.964c-0.26,1.546-0.661,3.025-1.189,4.399   c-0.55,1.427-1.3,2.743-2.23,3.909c-1.842,2.282-3.976,3.969-6.354,5.016c-2.334,1.04-5.135,1.568-8.324,1.568h-16.698   C135.368,167.61,134.685,166.926,134.685,166.086z M214.269,137.981c0.84,0,1.523,0.684,1.523,1.524v6.48   c0,0.84-0.683,1.524-1.523,1.524h-18.244v18.579c0,0.84-0.684,1.523-1.524,1.523h-7.209c-0.84,0-1.523-0.683-1.523-1.523v-47.554   c0-0.839,0.683-1.524,1.523-1.524h27.653c0.839,0,1.524,0.684,1.524,1.524v6.48c0,0.84-0.684,1.524-1.524,1.524h-18.92v11.444   H214.269z"
                      />
                      <path
                        class="st0"
                        d="M109.418,137.706c1.212-1.092,1.798-2.645,1.798-4.749c0-2.096-0.587-3.649-1.798-4.741   c-1.263-1.13-2.928-1.68-5.098-1.68h-5.975v12.848h5.975C106.489,139.385,108.155,138.836,109.418,137.706z"
                      />
                      <path
                        class="st0"
                        d="M156.139,157.481c1.13-0.424,2.103-1.107,2.973-2.088c0.944-1.055,1.538-2.571,1.769-4.511   c0.26-2.208,0.386-5.091,0.386-8.569c0-3.485-0.126-6.369-0.386-8.569c-0.231-1.946-0.825-3.462-1.762-4.51   c-0.869-0.982-1.873-1.679-2.972-2.089c-1.182-0.453-2.534-0.676-4.042-0.676h-7.164v31.68h7.164   C153.605,158.15,154.965,157.927,156.139,157.481z"
                      />
                    </g>
                  </svg>
                </span>
                {/* <input type="file" accept=".pdf" onChange={handleFileChange} /> */}

                {/* <button onClick={handleUpload}>Process</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen pb-40 overflow-y-scroll w-full flex flex-col items-center justify-between">
          <div className="w-3/4 mt-24">
            {" "}
            {/* w-3/4 */}
            {currentchatarray?.map((ca1, ind) => (
              <>
                {ind % 2 == 0 && (
                  <>
                    <div className="relative flex p-4 text-blue-100">
                      <span className="border border-white rounded-full p-1 absolute -left-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <circle cx="10" cy="6.75" r="4" fill="white" />
                          <ellipse
                            opacity="0.5"
                            cx="10"
                            cy="17.75"
                            rx="7"
                            ry="4"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.357 2.36424C18.5702 2.00906 19.0309 1.89388 19.386 2.10699L19.0002 2.75011C19.386 2.10699 19.3857 2.10679 19.386 2.10699L19.3874 2.10783L19.389 2.10878L19.3927 2.11103L19.4023 2.11695C19.4096 2.12153 19.4189 2.12737 19.4299 2.13448C19.4519 2.14871 19.481 2.16809 19.5162 2.19272C19.5865 2.24194 19.6815 2.31244 19.7928 2.4052C20.0149 2.59029 20.3054 2.86678 20.5946 3.24283C21.1775 4.00057 21.7502 5.15746 21.7502 6.75011C21.7502 8.34277 21.1775 9.49966 20.5946 10.2574C20.3054 10.6334 20.0149 10.9099 19.7928 11.095C19.6815 11.1878 19.5865 11.2583 19.5162 11.3075C19.481 11.3321 19.4519 11.3515 19.4299 11.3657C19.4189 11.3729 19.4096 11.3787 19.4023 11.3833L19.3927 11.3892L19.389 11.3914L19.3874 11.3924C19.3871 11.3926 19.386 11.3932 19.0002 10.7501L19.386 11.3932C19.0309 11.6063 18.5702 11.4912 18.357 11.136C18.1448 10.7823 18.2581 10.324 18.6098 10.1097L18.6154 10.1062C18.6227 10.1014 18.6365 10.0923 18.656 10.0787C18.6951 10.0513 18.7563 10.0062 18.8325 9.9427C18.9854 9.81529 19.195 9.61678 19.4057 9.34283C19.8228 8.80057 20.2502 7.95746 20.2502 6.75011C20.2502 5.54277 19.8228 4.69966 19.4057 4.1574C19.195 3.88345 18.9854 3.68494 18.8325 3.55753C18.7563 3.49403 18.6951 3.44891 18.656 3.42157C18.6365 3.40792 18.6227 3.39878 18.6154 3.39406L18.6098 3.39053C18.2581 3.17625 18.1448 2.71793 18.357 2.36424Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.3293 4.4147C16.5146 4.04422 16.9651 3.89405 17.3356 4.07929L17.0002 4.75011C17.3356 4.07929 17.3352 4.07909 17.3356 4.07929L17.3372 4.08011L17.3389 4.08097L17.3426 4.08287L17.3512 4.08732L17.3728 4.09893C17.3891 4.10789 17.4091 4.11934 17.4324 4.13344C17.4787 4.16159 17.5383 4.20058 17.6064 4.25168C17.7423 4.35363 17.9153 4.5059 18.0858 4.71909C18.4345 5.15499 18.7502 5.81792 18.7502 6.75011C18.7502 7.6823 18.4345 8.34524 18.0858 8.78113C17.9153 8.99433 17.7423 9.1466 17.6064 9.24855C17.5383 9.29965 17.4787 9.33863 17.4324 9.36679C17.4091 9.38089 17.3891 9.39234 17.3728 9.40129L17.3512 9.4129L17.3426 9.41736L17.3389 9.41925L17.3372 9.42012C17.3368 9.42032 17.3356 9.42093 17.0064 8.76266L17.3356 9.42093C16.9651 9.60618 16.5146 9.45601 16.3293 9.08552C16.1464 8.71965 16.2906 8.27574 16.651 8.08634C16.6518 8.0859 16.6527 8.08533 16.6539 8.08461C16.6622 8.07956 16.6808 8.06776 16.7064 8.04855C16.758 8.00988 16.8351 7.9434 16.9145 7.84409C17.0658 7.65499 17.2502 7.31792 17.2502 6.75011C17.2502 6.1823 17.0658 5.84524 16.9145 5.65613C16.8351 5.55683 16.758 5.49035 16.7064 5.45168C16.6808 5.43246 16.6622 5.42066 16.6539 5.41562C16.6527 5.4149 16.6518 5.41432 16.651 5.41389C16.2906 5.22449 16.1464 4.78057 16.3293 4.4147Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      {ca1}
                    </div>
                    {chatloading && ind == currentchatarray?.length - 1 && (
                      <div className="float-right text-white">
                        <Bars
                          height="30"
                          width="40"
                          color="#fef9c3"
                          ariaLabel="bars-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    )}
                  </>
                )}
                {ind % 2 != 0 && (
                  <>
                    <div className="relative p-2 rounded-sm ml-2 flex justify-end text-amber-100">
                      <span className="border border-2 rounded-full p-1 absolute -right-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          fill="#fef3c7"
                        >
                          <g
                            id="🔍-Product-Icons"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="ic_fluent_bot_24_filled"
                              fill="#fef3c7"
                              fill-rule="nonzero"
                            >
                              <path
                                d="M17.7530511,13.999921 C18.9956918,13.999921 20.0030511,15.0072804 20.0030511,16.249921 L20.0030511,17.1550008 C20.0030511,18.2486786 19.5255957,19.2878579 18.6957793,20.0002733 C17.1303315,21.344244 14.8899962,22.0010712 12,22.0010712 C9.11050247,22.0010712 6.87168436,21.3444691 5.30881727,20.0007885 C4.48019625,19.2883988 4.00354153,18.2500002 4.00354153,17.1572408 L4.00354153,16.249921 C4.00354153,15.0072804 5.01090084,13.999921 6.25354153,13.999921 L17.7530511,13.999921 Z M11.8985607,2.00734093 L12.0003312,2.00049432 C12.380027,2.00049432 12.6938222,2.2826482 12.7434846,2.64872376 L12.7503312,2.75049432 L12.7495415,3.49949432 L16.25,3.5 C17.4926407,3.5 18.5,4.50735931 18.5,5.75 L18.5,10.254591 C18.5,11.4972317 17.4926407,12.504591 16.25,12.504591 L7.75,12.504591 C6.50735931,12.504591 5.5,11.4972317 5.5,10.254591 L5.5,5.75 C5.5,4.50735931 6.50735931,3.5 7.75,3.5 L11.2495415,3.49949432 L11.2503312,2.75049432 C11.2503312,2.37079855 11.5324851,2.05700336 11.8985607,2.00734093 L12.0003312,2.00049432 L11.8985607,2.00734093 Z M9.74928905,6.5 C9.05932576,6.5 8.5,7.05932576 8.5,7.74928905 C8.5,8.43925235 9.05932576,8.99857811 9.74928905,8.99857811 C10.4392523,8.99857811 10.9985781,8.43925235 10.9985781,7.74928905 C10.9985781,7.05932576 10.4392523,6.5 9.74928905,6.5 Z M14.2420255,6.5 C13.5520622,6.5 12.9927364,7.05932576 12.9927364,7.74928905 C12.9927364,8.43925235 13.5520622,8.99857811 14.2420255,8.99857811 C14.9319888,8.99857811 15.4913145,8.43925235 15.4913145,7.74928905 C15.4913145,7.05932576 14.9319888,6.5 14.2420255,6.5 Z"
                                id="🎨-Color"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <StringEditor text={ca1} />
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
          <div className="bg-gray-800 w-full flex flex-col items-center  absolute bottom-0 pt-2">
            <input
              placeholder="what you want to know?"
              className="text-white rounded-sm text-lg px-4 focus:outline focus:outline-gray-700 outline-none h-16 w-4/5 bg-gray-900 mb-6"
              value={query}
              onChange={(e) => changeChat(e)}
              onKeyDown={(e) => submitChat(e)}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
