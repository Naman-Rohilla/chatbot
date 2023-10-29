// import React from "react";
// import "./stringEditor.css";

// export default function StringEditor({ text }) {
//   const formatText = (text) => {
//     // Split the input text into lines
//     const lines = text.split("\n");

//     const CodeBlock = ({ code }) => (
//       <div className="codeblock">
//         <code>{code}</code>
//       </div>
//     );

//     const formattedText = lines.map((line, index) =>
//       line
//         .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//         .replace(/\*\s/g, "<br><br>")
//         .replace(/```(.*?)```/g, (match, code) => (
//             <div style={{ background: "black" }} ><CodeBlock code={code} /></div>
//         ))
//     );

//     return formattedText;
//   };

//   const formattedText = formatText(text);

//   return (
//     <div className="flex flex-col">
//       {formattedText.map((line, index) => (
//         <div  key={index} dangerouslySetInnerHTML={{ __html: line }} />
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function StringEditor({ text }) {
  

  function copyFunction() {}
  
  const formatText = (text) => {
    const lines = text.split("\n");

    const CodeBlock = ({ code }) => (
      <div
        style={{
          background: "black",
          padding: "10px",
          borderRadius: "4px",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          fontSize: "14px",
          fontFamily: "monospace",
          marginTop: "20px",
          /* Add your custom CSS styles for code segments here */
          border: "1px solid #ccc",
          background: "black",
        }}
      >
        {/* <div onClick={() => copyFunction()} className="float-right text-gray-100">copy code</div> */}
        {code}
      </div>
    );

    const formattedText = [];
    let codeBlock = null;
    let formatting = true;

    lines.forEach((line) => {
      if (line.match(/^```(.+)$/) && formatting == true) {
        if (codeBlock) {
          formattedText.push(<CodeBlock code={codeBlock} />);
          codeBlock = null;
        }
        codeBlock = [];
      } else if (line.match(/^```/)) {
        formatting = false;
      } else if (codeBlock !== null && formatting == true) {
        codeBlock.push(line);
      } else {
        formattedText.push(line);
      }
    });

    if (codeBlock) {
      formattedText.push(<CodeBlock code={codeBlock.join("\n")} />);
    }

    // console.log(codeBlock, "cc")
    

    return formattedText;
  };

  const formattedText = formatText(text);

  // console.log(formattedText, "naam");
  

  return (
    <div className="stringEditorweb flex flex-col">
      {formattedText.map((line, index) => (
        <div key={index}>
          {typeof line === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: line }} />
          ) : (
            line
          )}
        </div>
      ))}
    </div>
  );
}
