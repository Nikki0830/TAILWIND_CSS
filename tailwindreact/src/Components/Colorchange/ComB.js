// import React, { useState } from "react";

// const ComB = ({ onColorChage }) => {
//   const [inputColor, setInputColor] = useState("");

//   const handleButtonClick = (e) => {
//     // onColorChage(inputColor);
//     const newColor = e.target.value;
//     setInputColor(newColor);
//     onColorChage(newColor);
//   };
//   return (
//     <div>
//       Enter Color:{" "}
//       {/* <input
//         name="myInput"
//         type="text"
//         value={inputColor}
//         onChange={(e) => setInputColor(e.target.value)}
//         placeholder="Enter color name"
//       /> */}
//       {/* <button onClick={handleButtonClick}>Change Color</button> */}
//       <input
//         type="text"
//         value={inputColor}
//         onChange={handleButtonClick}
//         placeholder="Enter Color name"
//       />
//     </div>
//   );
// };

// export default ComB;
import React, { useState } from "react";

const ComB = ({ onColorChange }) => {
  const [inputColor, setInputColor] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    const newColor = e.target.value;
    setInputColor(newColor);
    // Call the parent callback function with the new color
    onColorChange(newColor);
  };

  return (
    <div>
      <input
        className="input_css"
        type="text"
        value={inputColor}
        onChange={handleInputChange}
        placeholder="Enter color name"
      />
    </div>
  );
};

export default ComB;
