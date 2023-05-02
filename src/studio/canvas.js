import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import tshirt2 from "../pages/assets/rt2000_f_mask.png"
import tshirt3 from "../pages/assets/rt2000_f_texture.png"
import { useSelector, useDispatch } from 'react-redux';
import { SVG } from "@svgdotjs/svg.js";
import { canvasPosition, dragged } from "../redux/actions/productActions";

const Canvas = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.AllData);
  const dynamicColor = storeData.selectedProductColor;
  const [svgElements, setSvgElements] = useState([]);
  const [reverseElements, setReverseElements] = useState([]);
  const [svgImage, setSvgImage] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const positionableRef = useRef(null);
  const textRef = useRef(null);
  const imageDraggable = useRef(null);
  const imageClipRef = useRef(null);



  const handleImage = () => {
    console.log("imageSelected")
  }

  const handleText = (id) => {
    setIsDragged(false) 
    console.log(id)
  }

  useEffect(() => {
      const positionable = $(positionableRef.current);
      const text = $(textRef.current);
      const width = positionable.width();
      const centerX =  text.width()/ 2;
      const left = centerX - width / 2;
      positionable.css({ left });
  }, [storeData?.selectedDesign?.centerText]);


  useEffect(() => {
    $(positionableRef.current).draggable({
      drag: function(event, ui) {
        var left = ui.position.left;
        var top = ui.position.top;
        const position = { "left": left, "top": top };
        dispatch(canvasPosition(position));
      }
    });
    $(imageDraggable.current).draggable({
      drag: function(event, ui) {
        var left = ui.position.left;
        var top = ui.position.top;
        const position = { "left": left, "top": top };
        dispatch(canvasPosition(position));
      }
    });
    $(imageClipRef.current).draggable({
      drag: function(event, ui) {
        var left = ui.position.left;
        var top = ui.position.top;
        const position = { "left": left, "top": top };
        dispatch(canvasPosition(position));
      }
    });
  }, [dispatch]);

  useEffect(() => {
  if (storeData?.selectedInputFile) {
    const draw = SVG().addTo(imageDraggable.current).size(200, 200);
    const image = draw.image(storeData?.selectedInputFile);
    image.size(200, 200).move(0, 0);
    setSvgImage(draw);
    return () => {
      draw.clear();
    };
  }
  if (isDragged === true) {
    dispatch(dragged(isDragged))
    }
  }, [storeData?.selectedInputFile, isDragged, dispatch, storeData?.selectedDesigns?.design?.centerText]);
  
  useEffect(() => {
    if (storeData?.imageClip) {
      const draw = SVG().addTo(imageClipRef.current).size(200, 200);
      const image = draw.image(storeData?.imageClip);
      image.size(200, 200).move(0, 0);
      setSvgImage(draw);
      return () => {
        draw.clear();
      };
    }
    if (isDragged === true) {
      dispatch(dragged(isDragged))
      }
  }, [storeData?.selectedInputFile, isDragged, dispatch, storeData?.selectedDesigns?.design?.centerText, storeData?.imageClip]);


  useEffect(() => {
    if (storeData?.selectedDesign !== undefined) {
      if (storeData?.selectedDesign?.textInput) {
        const characters = storeData?.selectedDesign?.textInput.split("");
        const y = 20;
        const fontSize = 32;
        const letterSpacing = storeData?.selectedDesign?.textSpacing;
        let x = 0;
        const svgElementsArray = characters.map((char) => {
          const svgChar = SVG().size(letterSpacing, fontSize + 5);
          const svgText = svgChar
            .text(char)
            .font({
              size: fontSize,
              family:
                storeData?.selectedDesign?.fontFamily !== undefined
                  ? storeData?.selectedDesign?.fontFamily?.fontFamily
                  : "sans-serif",
            })
            .fill(
              storeData?.selectedDesign?.textColor !== undefined
                ? storeData?.selectedDesign?.textColor
                : "black"
            )
            .stroke({
              color: storeData?.selectedDesign?.outlineColor,
              width: storeData?.selectedDesign?.outlineSize,
            });
          svgChar.add(svgText);
          svgText.move(
            (svgChar.width() - svgText.bbox().w) / 2,
            (svgChar.height() - svgText.bbox().h) / 2
          );
          svgChar.move(x, y);
          x += svgChar.width() + letterSpacing;
          return svgChar;
        });
        setSvgElements(svgElementsArray);
        var reverseArray = [];
        if (characters?.length > 0) {
          var arrayLength = characters.length;
          for (let i = arrayLength; i > 0; i--) {
            reverseArray.push(characters[i - 1]);
          }
        }
        const reverseElementsArray = reverseArray.map((char) => {
          const svgChar = SVG().size(letterSpacing, fontSize + 5);
          const svgText = svgChar
            .text(char)
            .font({
              size: fontSize,
              family:
                storeData?.selectedDesign?.fontFamily !== undefined
                  ? storeData?.selectedDesign?.fontFamily?.fontFamily
                  : "sans-serif",
            })
            .fill(
              storeData?.selectedDesign?.textColor !== undefined
                ? storeData?.selectedDesign?.textColor
                : "black"
            )
            .stroke({
              color: storeData?.selectedDesign?.outlineColor,
              width: storeData?.selectedDesign?.outlineSize,
            });
          svgChar.add(svgText);
          svgText.move(
            (svgChar.width() - svgText.bbox().w) / 2,
            (svgChar.height() - svgText.bbox().h) / 2
          );
          svgChar.move(x, y);
          x += svgChar.width() + letterSpacing;
          return svgChar;
        });
        setReverseElements(reverseElementsArray);
      }
    }
  }, [
    storeData?.selectedDesign,
    storeData?.selectedDesign?.textInput,
    storeData?.selectedDesign?.fontFamily,
    storeData?.selectedDesign?.fontFamily?.fontFamily,
    storeData?.selectedDesign?.textColor,
    storeData?.selectedDesign?.outlineColor,
    storeData?.selectedDesign?.outlineSize,
    storeData?.selectedDesign?.textSpacing,
  ]);


  return (
    <div className="canvas-container">
      <img src={tshirt3} alt="canvas tshirt" className="img-canvas mask-image2" style={{ backgroundColor: storeData?.productColor?.color !== undefined ? storeData?.productColor?.color : dynamicColor, zIndex: -1, pointerEvents: "none" }} />
      <img src={tshirt2} alt="canvas tshirt" className="img-canvas mask-image" style={{ filter: "invert(1)", zIndex: 0, pointerEvents: "none" }} />
      <div className="drag-space" id="newReference" ref={textRef}>
        <div
          className="ui-widget-content ui-draggable ui-draggable-handle"
          style={{ width: "max-content" }}
          id={storeData?.selectedDesignId?.id}
          onClick={() => handleText(storeData?.selectedDesigns?.id)}
          onMouseDown={() => setIsDragged(true)}
          onMouseUp={() => setIsDragged(false)}
          ref={positionableRef}

        >
          <div
            className="canvas-text-input"
            style={{
              transform: `${storeData?.selectedDesign?.textRotate ? `rotate(${storeData?.selectedDesign?.textRotate}deg)` : ""}
               ${storeData?.selectedDesign?.textSize ? `scale(${storeData?.selectedDesign?.textSize})` : ""}`
            }}
          >
            {storeData?.reverseText === false ? <>
              {svgElements.map((svgEl, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                    transform: storeData?.flipText === false ? "unset" : `scale(-1, -1)`
                  }}
                  dangerouslySetInnerHTML={{ __html: svgEl.svg() }}
                />
              ))}
            </>
              : reverseElements && reverseElements.map((svgEl, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                    transform: storeData?.flipText === false ? "unset" : `scale(-1, -1)`
                  }}
                  dangerouslySetInnerHTML={{ __html: svgEl.svg() }}
                />
              ))}
          </div>
        </div>
        <div
          ref={imageDraggable}
          className="ui-widget-content ui-draggable ui-draggable-handle"
          style={{ width: "max-content", height: "max-content" }}
          onClick={handleImage}
        />
        <div
          ref={imageClipRef}
          className="ui-widget-content ui-draggable ui-draggable-handle"
          style={{ width: "max-content", height: "max-content" }}
          onClick={handleImage}
        />
      </div>
    </div>
  );
};

export default Canvas;