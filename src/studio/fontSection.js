import React, { useState } from 'react'
import { ReactComponent as CenterSVG } from "./snippets/center.svg";
import { ReactComponent as LayerSVG } from "./snippets/layer.svg";
import { ReactComponent as LayerDownSVG } from "./snippets/layer-down.svg";
import { ReactComponent as FlipHorizontalSVG } from "./snippets/flip-horizontal.svg";
import { ReactComponent as FlipVerticalSVG } from "./snippets/flip-vertical.svg";
import cross from './snippets/cross.svg'
import formInputImage from './snippets/getFontPreview.png';
import forward from './snippets/forward.svg';
import { Link } from 'react-router-dom';


function FontSection(props) {
    const [textSettings, setTextSettings] = useState(false);
    const [parentId, setParentId] = useState("");

    function handleChange(e) {
        if (e.target.value !== "") {
            setTextSettings(true);
        } else {
            setTextSettings(false);
        }
    }


    const handleFonts = (e) => {
        setParentId(e.target.parentElement.id)
    }

    return (
        <div className='studio-edits'>
            {parentId !== "fontsId" ?
                <div className='studio-menu-items'>
                    <div className="edits-heading">
                        <label>Text Editor</label>
                        <div className="second-heading">
                            <div className='title'>Add New Text	</div>
                            <button>
                                <img className='cross' src={cross} alt='close' />
                            </button>
                        </div>
                    </div>
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
                            <section className="text-form">
                                <div>Font</div>
                                <div className="inner-options">
                                    <div style={{ cursor: "pointer" }}
                                        onClick={(e) => handleFonts(e)}
                                        id="fontsId" >
                                        <img className="font-input-image" src={formInputImage} alt="fonts" />
                                        <img className="forward-icon" src={forward} alt='forward' />
                                    </div>
                                </div>
                            </section>
                            <section className="text-form">
                                <div>Color</div>
                                <div className="font-styles" >
                                    <Link to='' className="inner-options">
                                        <span className="input-inner-text">Black</span>
                                        <span className="select-color-1" />
                                    </Link>
                                    <Link to=''><img className="forward-icon" src={forward} alt='forward' /></Link>
                                </div>
                            </section>
                            <section className="text-form">
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
                                <input type="range" className="input-slider" id="vol" name="vol" min="0" max="100"></input>
                                <input className="input-box-font" defaultValue={10} type='number' />
                            </section>
                            <section className="text-form">
                                <div>Arc</div>
                                <input type="range" className="input-slider" id="vol" name="vol" min="0" max="100"></input>
                                <input className="input-box-font" defaultValue={10} type='number' />
                            </section>
                            <section className="text-form">
                                <div>Rotate</div>
                                <input type="range" className="input-slider" id="vol" name="vol" min="0" max="100"></input>
                                <input className="input-box-font" defaultValue={10} type='number' />
                            </section>
                            <section className="text-form">
                                <div>Spacing</div>
                                <input type="range" className="input-slider" id="vol" name="vol" min="0" max="100"></input>
                                <input className="input-box-font" defaultValue={10} type='number' />
                            </section>
                        </div>
                    }
                </div>
                :
                ""
            }
        </div>
    )
}

export default FontSection;