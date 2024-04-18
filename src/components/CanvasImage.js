// import{useState} from "react";

// const CanvasImage = ()=>{
//     const [file, setFile] = useState();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }
 
//     return (
//         <div >
//             <h3>Change the ad creative Image:</h3>
//             <input type="file" onChange={handleChange} />
//             <img src={file} alt = "img"/>
//         </div>
//     );

// };
// export default CanvasImage;

import React, { useState } from 'react';

const CanvasImage = ({ setImage }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
    setImage(URL.createObjectURL(selectedFile)); // Pass image URL instead of file object
    
  };

  return (
    <div>
      <h3>Change the ad creative Image:</h3>
      <input type="file" onChange={handleChange} />
      {/* <img src={file} alt="img" /> */}
    </div>
  );
};

export default CanvasImage;
