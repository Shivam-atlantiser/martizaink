import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import tshirt2 from "../pages/assets/rt2000_f_mask.png"
import tshirt3 from "../pages/assets/rt2000_f_texture.png"
import { useSelector } from 'react-redux';
import { SVG } from "@svgdotjs/svg.js";

const Canvas = () => {
  const storeData = useSelector((state) => state.AllData);
  const dynamicColor = storeData.selectedProductColor;
  const textDraggable = useRef(null);
  const imageDraggable = useRef(null);
  const [svgElements, setSvgElements] = useState([]);

  const handleClick = () => {
    $(textDraggable.current).draggable("option", "containment", "#newReference");
    $(imageDraggable.current).draggable("option", "containment", "#newReference");
  };

  useEffect(() => {
    $(textDraggable.current).draggable();
    $(imageDraggable.current).draggable();
  }, []);

  useEffect(() => {
    if (storeData.selectedInputText !== undefined) {
      const characters = storeData?.selectedInputText.split('');
      const y = 20;
      const fontSize = 32;
      const letterSpacing = 0;
      let x = 0;
      const svgElementsArray = characters.map((char) => {
        const svgChar = SVG().size(fontSize + letterSpacing, fontSize + 5);
        const svgText = svgChar.text(char)
          .font({ size: fontSize, family: storeData.selectedFontFamily !== undefined ? storeData.selectedFontFamily.fontFamily : "sans-serif" })
          .fill(storeData.changeTextColor !== undefined ? storeData.changeTextColor : "black")
          .stroke({ color: storeData.changeTextOutline, width: storeData.changeOutlineSize });
        svgChar.add(svgText);
        svgText.move((svgChar.width() - svgText.bbox().w) / 2, (svgChar.height() - svgText.bbox().h) / 2);
        svgChar.move(x, y);
        x += svgChar.width() + letterSpacing;
        return svgChar;
      });
      setSvgElements(svgElementsArray);
    }
  }, [storeData.selectedInputText, storeData.changeTextColor, storeData.selectedFontFamily, storeData.changeTextOutline, storeData.changeOutlineSize]);


  return (
    <div className="canvas-container">
      <img src={tshirt3} alt="canvas tshirt" className="img-canvas mask-image2" style={{ backgroundColor: dynamicColor, zIndex: -1, pointerEvents: "none" }} />
      <img src={tshirt2} alt="canvas tshirt" className="img-canvas mask-image" style={{ filter: "invert(1)", zIndex: 0, pointerEvents: "none" }} />
      {storeData.selectedInputText !== undefined && storeData.selectedInputText !== '' ?
        <div
          ref={textDraggable}
          className="ui-widget-content ui-draggable ui-draggable-handle"
          style={{ position: "relative", height: "max-content" }}
          onClick={handleClick}
        >
        <div className="canvas-text-input" style={{ transform: storeData.changeTextSize ? `scale(${storeData.changeTextSize})` : "" }}>

            {svgElements.map((svgEl, index) => <div key={index} style={{ display: "inline-block" }} dangerouslySetInnerHTML={{ __html: svgEl.svg() }} />)}
          </div>
        </div>
        : ""}
      {storeData.selectedInputFile !== undefined && storeData.selectedInputFile !== '' ?
        <div
          ref={imageDraggable}
          className="ui-widget-content ui-draggable ui-draggable-handle"
          style={{ position: "relative", height: "max-content" }}
          onClick={handleClick}
        >
          {storeData.selectedInputFile !== "" && storeData.selectedInputFile !== undefined ?
            <img src={storeData.selectedInputFile} alt="dynamic" className="dynamic_image" />
            : ""
          }
        </div>
        : ""}
    </div>
  );
};

export default Canvas;