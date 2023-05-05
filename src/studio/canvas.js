import React, { useRef, useEffect, useState, useCallback } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import tshirt2 from "../pages/assets/rt2000_f_mask.png"
import tshirt3 from "../pages/assets/rt2000_f_texture.png"
import { useSelector, useDispatch } from 'react-redux';
import { SVG } from "@svgdotjs/svg.js";
import { canvasPosition, dragged, selectedDesignId, selectedDesigns } from "../redux/actions/productActions";


const Canvas = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.AllData);
  const dynamicColor = storeData.selectedProductColor;
  const [isDragged, setIsDragged] = useState(false);
  // const textDraggable = useRef(null);
  // const [svgImage, setSvgImage] = useState(null);
  // const imageDraggable = useRef(null);
  // const imageClipRef = useRef(null);


  // const handleImage = () => {
  //   console.log("imageSelected")
  // }

  const handleKeySelect = useCallback((data) => {

    dispatch(selectedDesignId(data.id));
  }, [dispatch])

  // $(textDraggable.current).draggable({
  //   drag: function (event, ui) {
  //     var left = ui.position.left;
  //     var top = ui.position.top;
  //     const position = { "left": left, "top": top };
  //     dispatch(canvasPosition(position));
  //   }
  // });

  // useEffect(() => {
  //   if (storeData?.selectedInputFile) {
  //     const draw = SVG().addTo(imageDraggable.current).size(200, 200);
  //     const image = draw.image(storeData?.selectedInputFile);
  //     image.size(200, 200).move(0, 0);
  //     setSvgImage(draw);
  //     return () => {
  //       draw.clear();
  //     };
  //   }
  //   if (isDragged === true) {
  //     dispatch(dragged(isDragged))
  //   }
  // }, [storeData?.selectedInputFile, isDragged, dispatch, storeData?.selectedDesign?.centerText]);

  // useEffect(() => {
  //   if (storeData?.imageClip) {
  //     const draw = SVG().addTo(imageClipRef.current).size(200, 200);
  //     const image = draw.image(storeData?.imageClip);
  //     image.size(200, 200).move(0, 0);
  //     setSvgImage(draw);
  //     return () => {
  //       draw.clear();
  //     };
  //   }
  //   if (isDragged === true) {
  //     dispatch(dragged(isDragged))
  //   }
  // }, [storeData?.selectedInputFile, isDragged, dispatch, storeData?.selectedDesign?.centerText, storeData?.imageClip]);

  useEffect(() => {
    if (isDragged === true) {
      dispatch(dragged(isDragged))
    }
  })

  const handleKey = useCallback((data) => {
    const svgElementsByKeys = [];
    const reverseElementsByKeys = [];
    if (storeData?.selectedDesign !== undefined) {
      const characters = data?.textInput.split("");
      const y = 20;
      const fontSize = 32;
      const letterSpacing = data?.textSpacing;
      let x = 0;
      {
        const svgElementsArray = characters.map((char) => {
          const svgChar = SVG().size(letterSpacing, fontSize + 5);
          const svgText = svgChar
            .text(char)
            .font({
              size: fontSize,
              family:
                data?.fontFamily !== undefined
                  ? data?.fontFamily?.fontFamily
                  : "sans-serif",
            })
            .fill(
              data?.textColor !== undefined
                ? data?.textColor
                : "black"
            )
            .stroke({
              color: data?.outlineColor,
              width: data?.outlineSize,
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
        svgElementsByKeys.push(svgElementsArray)
      }

      var reverseArray = [];
      if (characters?.length > 0) {
        var arrayLength = characters.length;
        for (let i = arrayLength; i > 0; i--) {
          reverseArray.push(characters[i - 1]);
        }
      }
      {
        const reverseElementsArray = reverseArray.map((char) => {
          const svgChar = SVG().size(letterSpacing, fontSize + 5);
          const svgText = svgChar
            .text(char)
            .font({
              size: fontSize,
              family:
                data?.fontFamily !== undefined
                  ? data?.fontFamily?.fontFamily
                  : "sans-serif",
            })
            .fill(
              data?.textColor !== undefined
                ? data?.textColor
                : "black"
            )
            .stroke({
              color: data?.outlineColor,
              width: data?.outlineSize,
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
        reverseElementsByKeys.push(reverseElementsArray)
      }

      const id = `${data.id}`;

      $(`#${id}`).draggable({
        cursor: "move",
        containment: "parent",
        start: () => $(`#${id}`).addClass("dragging"),
        stop: () => $(`#${id}`).removeClass("dragging"),
        drag: (event, ui) => {
          const { left, top } = ui.position;
          const position = { left, top };
          dispatch(canvasPosition(position));
        }
      });


      return (
        svgElementsByKeys.map((key, index) => (
          <div
            key={index}
            style={{
              width: "max-content",
              transform:
                `${data?.textSize !== undefined ? `scale(${data?.textSize}, ${data?.textSize})` : ""}
                 ${data?.textRotate !== undefined ? `rotate(${data?.textRotate}deg)` : ""}`
            }}

            id={id}
            onClick={() => handleKeySelect(data)}
            // onMouseDown={() => setIsDragged(true)}
            // onMouseUp={() => setIsDragged(false)}
          >
            <div className="canvas-text-input">
              {storeData?.reverseText === false ? key.map((svgEl, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                    // transform: storeData?.flipText === false ? "unset" : `scale(-1, -1)`,  
                  }}
                  dangerouslySetInnerHTML={{ __html: svgEl.svg() }}
                />
              )) :
                reverseElementsByKeys.map((svgEl, index) => (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      transform:
                        storeData?.flipText === false ? "unset" : `scale(-1, -1)`,
                    }}
                    dangerouslySetInnerHTML={{ __html: svgEl.svg() }}
                  />
                )
                )}
            </div>
          </div>
        ))
      )
    }
  }, [storeData?.flipText, storeData?.reverseText, storeData?.selectedDesign, dispatch, handleKeySelect])



  useEffect(() => {
    var saveDesigns = [];
    if (storeData?.saveData === true) {
      saveDesigns.push(storeData?.selectedDesign)
      dispatch(selectedDesigns(saveDesigns))
    }
  }, [dispatch, storeData?.saveData, storeData?.selectedDesign])


  return (
    <div className="canvas-container">
      <img src={tshirt3} alt="canvas tshirt" className="img-canvas mask-image2" style={{ backgroundColor: storeData?.productColor?.color !== undefined ? storeData?.productColor?.color : dynamicColor, zIndex: -1, pointerEvents: "none" }} />
      <img src={tshirt2} alt="canvas tshirt" className="img-canvas mask-image" style={{ filter: "invert(1)", zIndex: 0, pointerEvents: "none" }} />
      <div className="drag-space">
        {storeData?.selectedDesigns !== undefined ? Object.values(storeData?.selectedDesigns).map((key, index) => (
          <React.Fragment key={index}>
            {handleKey(key)}
          </React.Fragment>
        )) :
          <React.Fragment>
            {handleKey(storeData?.selectedDesign)}
          </React.Fragment>
        }
      </div>
    </div>
  );
};

export default Canvas;