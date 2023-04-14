import React, { useRef, useEffect, useState } from "react";
import tshirt2 from "../pages/assets/rt2000_f_mask.png"
import tshirt3 from "../pages/assets/rt2000_f_texture.png"
import { useSelector } from 'react-redux';

const Canvas = () => {
  const storeData = useSelector((state) => state.allProducts);
  const dynamicColor = storeData.selectedProductColor;



  console.log(storeData);
  return (
    <div className="canvas-container">
      <img src={tshirt3} alt="canvas tshirt" className="img-canvas mask-image2" style={{ backgroundColor: dynamicColor, zIndex: -1 }} />
      <img src={tshirt2} alt="canvas tshirt" className="img-canvas mask-image" style={{ filter: "invert(1)", zIndex: 0 }} />
    </div>
  );
};

export default Canvas;






////////////////////////////   this code can convert api coming fonts to svg transparent //////////////////////////////////////////////

// const SVG = require('svg.js');
// const opentype = require('opentype.js');

// // Load font
// opentype.load('your-font-url.ttf', function(err, font) {
//   if (err) {
//     console.error(err);
//   } else {
//     // Create SVG canvas
//     const canvas = SVG('canvas').size(500, 500);

//     // Create text element
//     const text = canvas.text('Your text here');

//     // Set font properties
//     text.font({
//       family: font.familyName,
//       size: 64,
//       anchor: 'middle',
//       leading: 1
//     });

//     // Set text position
//     text.move(250, 250);

//     // Set text fill color to transparent
//     text.fill({opacity: 0});

//     // Export SVG as string
//     const svg = canvas.svg();

//     // Use the SVG string as desired
//     console.log(svg);
//   }
// });






