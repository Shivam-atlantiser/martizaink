import React, { useEffect, useState } from 'react'
import { ReactComponent as CenterSVG } from "./snippets/center.svg";
import { ReactComponent as LayerSVG } from "./snippets/layer.svg";
import { ReactComponent as LayerDownSVG } from "./snippets/layer-down.svg";
import { ReactComponent as FlipHorizontalSVG } from "./snippets/flip-horizontal.svg";
import { ReactComponent as FlipVerticalSVG } from "./snippets/flip-vertical.svg";
import cross from './snippets/cross.svg'
import formInputImage from './snippets/getFontPreview.png';
import forward from './snippets/forward.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDesign } from './../redux/actions/productActions';

function FontSection(props) {
    const storeData = useSelector((state) => state.AllData);
    const dispatch = useDispatch();

    const [textSettings, setTextSettings] = useState(false);
    const [openPanel, setOpenPanel] = useState("");
    const handleClose = () => { setOpenPanel("") }
    const [active, setActive] = useState(null)
    const [textInput, setTextInput] = useState('')
    const [fontFaimly, setFontFaimly] = useState('')
    const [textColor, setTextColor] = useState('')
    const [outlineColor, setOutlineColor] = useState('')
    const [outlineSize, setOutlineSize] = useState('')
    const [textSize, setTextSize] = useState('')
    const [arcSize, setArcSize] = useState('')
    const [textRotate, setTextRotate] = useState('')
    const [textSpacing, setTextSpacing] = useState('')


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
        setFontFaimly(data)
    }

    const handleChangeColor = (data) => {
        setActive(data)
        setTextColor(data)
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
    }
    const handleTextRotate = (data) => {
        setTextRotate(data.target.value)
    }
    const handleTextSpacing = (data) => {
        setTextSpacing(data.target.value)
    }

    useEffect(() => {
        const link = document.createElement('link');
        if (fontFaimly !== null && fontFaimly !== undefined) {
            link.rel = 'stylesheet';
            link.href = fontFaimly.link;
            document.head.appendChild(link);
        }
    }, [fontFaimly]);

    useEffect (() => {
        let now = new Date()
        let productID = now.getDate() + "" + now.getHours() + "" + now.getMinutes() + "" + now.getSeconds() + "" + now.getMilliseconds()
        let design = {
            productID: productID !== undefined ? productID : undefined,
            textInput: textInput !== undefined ? textInput : undefined,
            fontFaimly: fontFaimly !== undefined ? fontFaimly : undefined,
            textColor: textColor !== undefined ? textColor : undefined,
            outlineColor: outlineColor !== undefined ? outlineColor : undefined,
            outlineSize: outlineSize !== undefined ? outlineSize : undefined,
            textSize: textSize !== undefined ? textSize : undefined,
            arcSize: arcSize !== undefined ? arcSize : undefined,
            textRotate: textRotate !== undefined ? textRotate : undefined,
            textSpacing: textSpacing !== undefined ? textSpacing : undefined,
        }
        dispatch(selectedDesign(design))
    }, [textInput,fontFaimly,textColor,outlineSize,outlineColor,textSize,arcSize,textRotate,textSpacing,])

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
                    {openPanel === "fonts-edit" && fontFaimly !== undefined &&
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
                            {storeData?.styles.colors && storeData?.styles.colors.map((key, index) =>
                                <div key={index} className={`hover-border ${active === key && 'active'}`}>
                                    <span key={index} className="color-panel-options" style={{ backgroundColor: key }} onClick={() => handleChangeColor(key)} />
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
                    : <>
                        <div className="box">
                            <input type="radio" className="tab-toggle" name="tab-toggle" id="tab1" defaultChecked />
                            <ul className="tab-list">
                                <li className="tab-item">
                                    <label className="tab-trigger" htmlFor="tab1">English</label>
                                </li>
                            </ul>
                        </div>
                        <div className="text-editor">
                            <textarea placeholder="Begin Typing..." onChange={(e) => { handleChange(e) }} />
                        </div>
                        {(textSettings === true) &&
                            <div className="text-settings">
                                <div className="buttons">
                                    <div className="btn-c">
                                        <Link className="btn" to=''>
                                            <CenterSVG />
                                        </Link>
                                        <span className="text">Center</span>
                                    </div>
                                    <div className="btn-g">
                                        <div className="btn-c">
                                            <Link className="btn" to=''>
                                                <LayerSVG />
                                            </Link>
                                            <span className="text">Center</span>
                                        </div>
                                        <div className="btn-c">
                                            <Link className="btn" to=''>
                                                <LayerDownSVG />
                                            </Link>
                                            <span className="text">Center</span>
                                        </div>
                                    </div>
                                    <div className="btn-g">
                                        <div className="btn-c">
                                            <Link className="btn" to=''>
                                                <FlipHorizontalSVG />
                                            </Link>
                                            <span className="text">Center</span>
                                        </div>
                                        <div className="btn-c">
                                            <Link className="btn" to=''>
                                                <FlipVerticalSVG />
                                            </Link>
                                            <span className="text">Center</span>
                                        </div>
                                    </div>
                                    <div className="btn-c">
                                        <Link className="btn" to=''>
                                            <CenterSVG />
                                        </Link>
                                        <span className="text">Center</span>
                                    </div>
                                    <div className="btn-c">
                                        <Link className="btn" to=''>
                                            <CenterSVG />
                                        </Link>
                                        <span className="text">Center</span>
                                    </div>
                                </div>
                                <section className="text-form" onClick={handleFonts}>
                                    <div>Font</div>
                                    <div className="inner-options">
                                        <div style={{ cursor: "pointer" }}
                                            id="fontsId" >
                                            <img className="font-input-image" src={formInputImage} alt="fonts" />
                                            <img className="forward-icon" src={forward} alt='forward' />
                                        </div>
                                    </div>
                                </section>
                                <section className="text-form" onClick={handleColor}>
                                    <div>Color</div>
                                    <div className="font-styles">
                                        <Link to='' className="inner-options">
                                            <span className="input-inner-text">Black</span>
                                            <span className="select-color-1" />
                                        </Link>
                                        <Link to=''><img className="forward-icon" src={forward} alt='forward' /></Link>
                                    </div>
                                </section>
                                <section className="text-form" onClick={handleOutline}>
                                    <div>Outline</div>
                                    <div className="font-styles" >
                                        <Link to='' className="inner-options">
                                            <span className="input-inner-text">None</span>
                                            <span className="select-color-2" />
                                        </Link>
                                        <Link to=''><img className="forward-icon" src={forward} alt='forward' /></Link>
                                    </div>
                                </section>
                                <section className="text-form">
                                    <div>Size</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="10" onChange={handleTextSize} defaultValue={1} />
                                    <input className="input-box-font" defaultValue={textSize && textSize} type='number' />
                                </section>
                                <section className="text-form">
                                    <div>Arc</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="360" onChange={handleArcSize} />
                                    <input className="input-box-font" defaultValue={arcSize && arcSize} type='number' />
                                </section>
                                <section className="text-form">
                                    <div>Rotate</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="360" onChange={handleTextRotate} />
                                    <input className="input-box-font" defaultValue={textRotate && textRotate} type='number' />
                                </section>
                                <section className="text-form">
                                    <div>Spacing</div>
                                    <input type="range" className="input-slider" id="vol" name="vol" min="0" max="200" onChange={handleTextSpacing} />
                                    <input className="input-box-font" defaultValue={textSpacing && textSpacing} type='number' />
                                </section>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default FontSection;