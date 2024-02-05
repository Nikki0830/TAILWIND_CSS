// import React, { useState } from "react";
// import ComB from "./ComB";

// const ComA = () => {
//   const [currentColor, setcurrentColor] = useState("");

//   const updateColor = (newColor) => {
//     setcurrentColor(newColor);
//   };

//   return (
//     <div>
//       <div className="border-slate-900">{currentColor}</div>
//       <ComB onColorChange={updateColor} />
//     </div>
//   );
// };

// export default ComA;
import React, { useState } from "react";
import ComB from "./ComB";

const ComA = () => {
  const [currentColor, setCurrentColor] = useState("");

  // Callback function to update color
  const updateColor = (newColor) => {
    setCurrentColor(newColor);
  };

  return (
    <div>
      <h1
        className="parent_css"
        style={{ backgroundColor: currentColor }}
      >
        Hello, World!
      </h1>
      <ComB onColorChange={updateColor} />
    </div>
  );
};

export default ComA;
