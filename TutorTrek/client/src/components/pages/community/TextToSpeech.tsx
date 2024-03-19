// import React, { useState } from "react";

// const TextToSpeech: React.FC = () => {
//   const [text, setText] = useState<string>("");
//   const [speaking, setSpeaking] = useState<boolean>(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLTexstAreaElement>) => {
//     setText(e.target.value);
//   };

//   const handleSpeak = () => {
//     if (speaking) {
//       window.speechSynthesis.cancel();
//       setSpeaking(false);
//     } else {
//       const utterance = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(utterance);
//       setSpeaking(true);
//     }
//   };

//   return (
//     <div>
//       <textarea
//         className="textarea"
//         value={text}
//         onChange={handleInputChange}
//         placeholder="Enter your Text Here"
//       />

//       <div className="button-container">
//         <button className="button" onClick={handleSpeak}>
//           {speaking ? "Stop Speaking" : "Start Speaking"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TextToSpeech;


import React from 'react'
