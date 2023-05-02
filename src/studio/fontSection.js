import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as CenterSVG } from "./snippets/center.svg";
import { ReactComponent as LayerSVG } from "./snippets/layer.svg";
import { ReactComponent as LayerDownSVG } from "./snippets/layer-down.svg";
import { ReactComponent as FlipHorizontalSVG } from "./snippets/flip-horizontal.svg";
import { ReactComponent as FlipVerticalSVG } from "./snippets/flip-vertical.svg";
import { ReactComponent as LockSVG } from "./snippets/lock.svg";
import { ReactComponent as DuplicateSVG } from "./snippets/duplicate.svg";
import cross from './snippets/cross.svg'
import forward from './snippets/forward.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dragged, flipText, reverseText, selectedDesign, selectedDesignId, selectedDesigns } from './../redux/actions/productActions';
import { SVG } from '@svgdotjs/svg.js';
import axios from 'axios';

function FontSection(props) {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.AllData);
    const inputRef = useRef(null);
    const [svgElements, setSvgElements] = useState([]);
    const [duplicate, setDuplicate] = useState({});
    const [textSettings, setTextSettings] = useState(false);
    const [openPanel, setOpenPanel] = useState("");
    const handleClose = () => { setOpenPanel("") }
    const [active, setActive] = useState(null)
    const [textInput, setTextInput] = useState('')
    const [fontFamily, setFontFamily] = useState('san-serif')
    const [textColor, setTextColor] = useState('Black')
    const [outlineColor, setOutlineColor] = useState('White')
    const [outlineSize, setOutlineSize] = useState(0)
    const [textSize, setTextSize] = useState(1)
    const [arcSize, setArcSize] = useState(0)
    const [textRotate, setTextRotate] = useState(0)
    const [textSpacing, setTextSpacing] = useState(30)
    const [arcDirection, setArcDirection] = useState(0)
    const [centerText, setCenterText] = useState(false)
    const [textReverse, setTextReverse] = useState(false)
    const [textFlip, setTextFlip] = useState(false)
    const [position, setPosition] = useState({ "left": 450, "top": 170 })
    const [saveData, setSaveData] = useState(false)
    const [newDesigns, setNewDesigns] = useState({});
    const [colors, setColors] = useState('')



    const handleChange = (e) => {
        if (e.target.value !== "") {
            setTextSettings(true);
            setTextInput(e.target.value)
        } else {
            setTextSettings(false);
            setTextInput('')
        }
    }

    const handleFonts = () => {
        setOpenPanel("fonts-edit")
    }

    const handleColor = () => {
        setOpenPanel("colors")
    }

    const handleOutline = () => {
        setOpenPanel("outline")
    }

    const handleFontSelect = (data) => {
        setFontFamily(data)
    }

    const handleChangeColor = (data) => {
        setActive(data.color)
        setTextColor(data.color_name)
    }

    const handleOutlineColor = (data) => {
        setActive(data)
        setOutlineColor(data)
    }

    const handleOutlineSize = (data) => {
        setOutlineSize(data.target.value)
    }
    const handleTextSize = (data) => {
        setTextSize(data.target.value)
    }
    const handleArcSize = (data) => {
        setArcSize(data.target.value)
        if (data.target.value >= 1) {
            setArcDirection('clockwise')
        }
        else {
            setArcDirection('counter-clockwise')
        }
    }
    const handleTextRotate = (data) => {
        setTextRotate(data.target.value)
    }
    const handleTextSpacing = (data) => {
        setTextSpacing(data.target.value)
    }
    const handleCenterText = () => {
        dispatch(dragged(false))
        centerText === false ? setCenterText(true) : setCenterText(false);
    }
    const handleReverseText = () => {
        textReverse === false ? setTextReverse(true) : setTextReverse(false)
    }
    const handleFlipText = () => {
        textFlip === false ? setTextFlip(true) : setTextFlip(false)
    }
    const handleDuplicate = () => {
        setDuplicate(storeData?.selectedDesign)
    }

    const handleSaveData = () => {
        setSaveData(true)
    }

    useEffect(() => {
        axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/colors")
            .then(response => setColors(JSON.parse(response.data)));
    }, []);


    useEffect(() => {
        const link = document.createElement('link');
        if (fontFamily !== null && fontFamily !== undefined) {
            link.rel = 'stylesheet';
            link.href = fontFamily.link;
            document.head.appendChild(link);
        }
        if (storeData?.dragged === true) {
            setCenterText(false)
        }
        else {
            setCenterText(false)
        }
    }, [fontFamily, storeData?.dragged]);


    const handleSave = () => {
        let existingDesigns = { ...selectedDesigns };
        let updatedDesigns = { ...existingDesigns, ...newDesigns };

        dispatch(selectedDesigns(updatedDesigns));
        localStorage.setItem("Data", JSON.stringify(updatedDesigns));
        setNewDesigns({});
    };

    useEffect(() => {
        let now = new Date();
        let id = now.getDate() + "" + now.getHours() + "" + now.getMinutes();
        id = Number(id);

        if (storeData?.canvasPosition !== undefined) {
            setPosition(storeData.canvasPosition)
        }

        let existingDesigns = { ...selectedDesigns };
        let newDesigns = {};

        if (existingDesigns) {
            newDesigns = { ...existingDesigns };
        }

        if (storeData?.canvasPosition !== undefined) {
            setPosition(storeData?.canvasPosition)
        }

        let newDesign = {
            id: id !== undefined ? id : undefined,
            textInput: textInput !== undefined ? textInput : undefined,
            fontFamily: fontFamily !== undefined ? fontFamily : undefined,
            textColor: textColor !== undefined ? textColor : undefined,
            outlineColor: outlineColor !== undefined ? outlineColor : undefined,
            outlineSize: outlineSize !== undefined ? outlineSize : undefined,
            textSize: textSize !== undefined ? textSize : undefined,
            arcSize: arcSize !== undefined ? arcSize : undefined,
            textRotate: textRotate !== undefined ? textRotate : undefined,
            textSpacing: textSpacing !== undefined ? textSpacing : undefined,
            arcDirection: arcDirection !== undefined ? arcDirection : undefined,
            centerText: centerText !== undefined ? centerText : undefined,
            reverseText: textReverse !== undefined ? textReverse : undefined,
            flipText: textFlip !== undefined ? textFlip : undefined,
            designCanvasPosition: position !== undefined ? position : undefined,
        };

        newDesigns[id] = newDesign

        dispatch(selectedDesigns(newDesigns));
        dispatch(selectedDesignId(id));
        dispatch(selectedDesign(newDesign));
        dispatch(reverseText(textReverse));
        dispatch(flipText(textFlip));
        setNewDesigns({ ...newDesigns, [id]: newDesign })
    }, [
        dispatch,
        duplicate,
        textInput,
        fontFamily,
        textColor,
        outlineSize,
        outlineColor,
        textSize,
        arcSize,
        textRotate,
        textSpacing,
        arcDirection,
        centerText,
        textReverse,
        textFlip,
        storeData?.canvasPosition,
        position
    ])


    useEffect(() => {
        var characters = [];
        if (storeData?.selectedDesign?.fontFamily !== undefined) {
            if (storeData?.selectedDesign?.fontFamily?.fontFamily !== undefined) {
                characters = storeData?.selectedDesign?.fontFamily?.fontFamily.split("");
            } else {
                characters = storeData?.selectedDesign?.fontFamily.split("");
            }
            const fontSize = 25;
            const letterSpacing = 21;
            const svgElementsArray = characters.map((char) => {
                const svgChar = SVG().size(letterSpacing, fontSize + 5);
                const svgText = svgChar
                    .text(char)
                    .font({
                        size: fontSize,
                        family: storeData?.selectedDesign?.fontFamily !== undefined
                            ? storeData?.selectedDesign?.fontFamily : "sans-serif",
                    });
                svgChar.add(svgText);
                svgText.move(
                    (svgChar.width() - svgText.bbox().w) / 2,
                    (svgChar.height() - svgText.bbox().h) / 2
                );
                return svgChar;
            });
            setSvgElements(svgElementsArray);
        }
    }, [storeData?.selectedDesign, fontFamily])


    return (
        <div className='studio-edits'>
            <div className='studio-menu-items'>
                <div className="edits-heading">
                    <label>Text Editor</label>
                    <div className="second-heading">
                        <div className='title'>
                            {openPanel === "" ? <p>Add New Text</p> :
                                openPanel === "fonts-edit" ?
                                    <p>"Standard" Fonts</p> : openPanel === "colors"
                                        ? <p>Text Color</p> : openPanel === "outline"
                                            ? <p>Text Outline</p> : ""}
                        </div>
                        <button onClick={handleClose}>
                            <img className='cross' src={cross} alt='close' />
                        </button>
                    </div>
                </div>
                {openPanel !== "" ? <div>
                    {openPanel === "fonts-edit" && fontFamily !== undefined &&
                        storeData?.fonts?.map((data, index) =>
                            <div className='font-view-panel' onClick={() => handleFontSelect(data)} id={data.fontFamily} data={index} >
                                <img className='font-image-dynamic' src={data.fontImage} alt="fontImage" />
                                <p>{data.fontFamily}</p>
                            </div>
                        )}
                    {openPanel === "colors" &&
                        <div>
                            <div className='select-color-heading'>
                                Color : {textColor ? textColor : "White"}
                            </div>
                            {colors === undefined ? 
                                storeData?.styles.colors && storeData?.styles.colors.map((key, index) =>
                                <div key={index} className={`hover-border ${active === key && 'active'}`}>
                                    <span key={index} className="color-panel-options" style={{ backgroundColor: key.color }} onClick={() => handleChangeColor(key)} />
                                    </div>)
                                    :
                                   colors.map((key, index) =>
                                <div key={index} className={`hover-border ${active === key.color && 'active'}`}>
                                    <span key={index} className="color-panel-options" style={{ backgroundColor: key.color }} onClick={() => handleChangeColor(key)} />
                                </div>
                            )}
                        </div>
                    }
                    {openPanel === "outline" &&
                        <div>
                            <div className='select-color-heading'>
                                Color : {outlineColor ? outlineColor : "White"}
                            </div>
                            {storeData?.styles.outline.colors && storeData?.styles.outline.colors.map((key, index) =>
                                <div key={index} className={`hover-border ${active === key && 'active'}`}>
                                    <span key={index} className="color-panel-options" style={{ backgroundColor: key }} onClick={() => handleOutlineColor(key)} />
                                </div>
                            )}
                            <section className="text-form">
                                <div>Outline size</div>
                                <input type="range" className="input-slider" id="vol" name="vol" min="0" max="20" defaultValue={1} onChange={handleOutlineSize} />
                                <input className="input-box-font" defaultValue={outlineSize && outlineSize} type='number' />
                            </section>
                        </div>
                    }
                </div>
                    : <div>
                        <div className="box">
                            <input type="radio" className="tab-toggle" name="tab-toggle" id="tab1" defaultChecked />
                            <ul className="tab-list">
                                <li className="tab-item">
                                    <label className="tab-trigger" htmlFor="tab1">English</label>
                                </li>
                            </ul>
                        </div>
                        <div className="text-editor">
                            <textarea placeholder="Begin Typing..."
                                onChange={(e) => { handleChange(e) }}
                                defaultValue={storeData?.selectedDesign?.id === storeData?.textFocus ? storeData?.selectedDesign?.textInput : ""}
                                ref={inputRef} />
                        </div>
                        {(textSettings === true) &&
                            <div className="text-settings">
                                <div className="buttons">
                                    <div className="btn-c">
                                        <button className="btn" onClick={handleCenterText}>
                                            <CenterSVG />
                                        </button>
                                        <span className="btn-text">Center</span>
                                    </div>
                                    <div className="btn-g">
                                        <div className='btn-combine'>
                                            <button className="btn-c" style={{
                                                opacity: Object.keys(storeData?.selectedDesign).length > 1 ? "" : "0.2"
                                            }}
                                            >
                                                <Link className="btn" to=''>
                                                    <LayerSVG />
                                                </Link>
                                            </button>
                                            <button className="btn-c" style={{ opacity: "0.2" }}>
                                                <Link className="btn" to=''>
                                                    <LayerDownSVG />
                                                </Link>
                                            </button>
                                        </div>
                                        <span className="btn-text">Layering</span>
                                    </div>
                                    <div className="btn-g">
                                        <div className='btn-combine'>
                                            <button className="btn-c" onClick={handleReverseText}>
                                                <Link className="btn" to='' style={{
                                                    backgroundColor: storeData?.selectedDesign?.reverseText === true ? "#ee5050" : "",
                                                    borderColor: storeData?.selectedDesign?.reverseText === true ? "#ee5050" : ""
                                                }}>
                                                    <FlipHorizontalSVG style={{
                                                        fill: storeData?.selectedDesign?.reverseText && "#fff"
                                                    }} />
                                                </Link>
                                            </button>
                                            <button className="btn-c" onClick={handleFlipText}>
                                                <Link className="btn" to='' style={{
                                                    backgroundColor: storeData?.selectedDesign?.flipText === true ? "#ee5050" : "",
                                                    borderColor: storeData?.selectedDesign?.flipText === true ? "#ee5050" : ""
                                                }}>
                                                    <FlipVerticalSVG style={{
                                                        fill: storeData?.selectedDesign?.flipText && "#fff"
                                                    }} />
                                                </Link>
                                            </button>
                                        </div>
                                        <span className="btn-text">Flip</span>
                                    </div>
                                    <div className="btn-c">
                                        <Link className="btn" to=''>
                                            <LockSVG />
                                        </Link>
                                        <span className="btn-text">Lock</span>
                                    </div>
                                    <div className="btn-c">
                                        <Link className="btn" to='' onClick={handleDuplicate}>
                                            <DuplicateSVG />
                                        </Link>
                                        <span className="btn-text">Duplicate</span>
                                    </div>
                                </div>
                                <section className="text-form" onClick={handleFonts}>
                                    <div>Font</div>
                                    <div className="font-styles">
                                        <Link className="inner-options">
                                            <div style={{ cursor: "pointer" }}
                                                id="fontsId" >
                                                <div className="font-input-image"
                                                >
                                                    {svgElements && svgElements.map((svgEl, index) => (
                                                        <div
                                                            key={index}
                                                            style={{ display: "inline-block" }}
                                                            dangerouslySetInnerHTML={{ __html: svgEl.svg() }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link>
                                            <img className="forward-icon" src={forward} alt='forward' />
                                        </Link>
                                    </div>
                                </section>
                                <section className="text-form" onClick={handleColor}>
                                    <div>Color</div>
                                    <div className="font-styles">
                                        <Link to='' className="inner-options">
                                            <span className="input-inner-text">{
                                                storeData?.selectedDesign?.textColor !== undefined ?
                                                    storeData?.selectedDesign?.textColor : "Black"
                                            }</span>
                                            <span className="select-color-1" style={{
                                                backgroundColor: storeData?.selectedDesign?.textColor !== undefined ?
                                                    storeData?.selectedDesign?.textColor : "Black"
                                            }} />
                                        </Link>
                                        <Link to=''><img className="forward-icon" src={forward} alt='forward' /></Link>
                                    </div>
                                </section>
                                <section className="text-form" onClick={handleOutline}>
                                    <div>Outline</div>
                                    <div className="font-styles" >
                                        <Link to='' className="inner-options">
                                            <span className="input-inner-text">{
                                                storeData?.selectedDesign?.outlineColor !== undefined ?
                                                    storeData?.selectedDesign?.outlineColor : "None"
                                            }</span>
                                            <span className="select-color-2" style={{
                                                backgroundColor: storeData?.selectedDesign?.outlineColor !== undefined ?
                                                    storeData?.selectedDesign?.outlineColor : "White"
                                            }} />
                                        </Link>
                                        <Link to=''><img className="forward-icon" src={forward} alt='forward' /></Link>
                                    </div>
                                </section>
                                <section className="text-form">
                                    <div>Size</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="10" onChange={handleTextSize} defaultValue={
                                        storeData?.selectedDesign?.textSize !== undefined ?
                                            storeData?.selectedDesign?.textSize : 1
                                    } />
                                    <input className="input-box-font" defaultValue={
                                        storeData?.selectedDesign?.textSize !== undefined ?
                                            storeData?.selectedDesign?.textSize : "None"
                                    } type='number' />
                                </section>
                                <section className="text-form">
                                    <div>Arc</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="-360" max="360" onChange={handleArcSize} defaultValue={
                                        storeData?.selectedDesign?.arcSize !== undefined ?
                                            storeData?.selectedDesign?.arcSize : 1
                                    } />
                                    <input className="input-box-font" defaultValue={
                                        storeData?.selectedDesign?.arcSize !== undefined ?
                                            storeData?.selectedDesign?.arcSize : 1
                                    } type='number' />
                                </section>
                                <section className="text-form">
                                    <div>Rotate</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="360" onChange={handleTextRotate} defaultValue={
                                        storeData?.selectedDesign?.textRotate !== undefined ?
                                            storeData?.selectedDesign?.textRotate : 1
                                    } />
                                    <input className="input-box-font" defaultValue={
                                        storeData?.selectedDesign?.textRotate !== undefined ?
                                            storeData?.selectedDesign?.textRotate : 1
                                    } type='number' />
                                </section>
                                <section className="text-form">
                                    <div>Spacing</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="40" onChange={handleTextSpacing} defaultValue={
                                        storeData?.selectedDesign?.textSpacing !== undefined ?
                                            storeData?.selectedDesign?.textSpacing : 1
                                    } />
                                    <input className="input-box-font" defaultValue={
                                        storeData?.selectedDesign?.textSpacing !== undefined ?
                                            storeData?.selectedDesign?.textSpacing : 1
                                    } type='number' />
                                </section>
                                <button className='button' onClick={handleSave}>
                                    Save design
                                </button>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default FontSection;