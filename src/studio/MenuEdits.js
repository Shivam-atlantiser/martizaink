import "./menuEdits.css"
import React, { Component } from 'react'
import ProductCard from "./ProductCard";
import { artTypes } from "./dynamicFields";
import FontSection from "./fontSection";
import cross from './snippets/cross.svg'
import search from './snippets/search.svg'
import numberImage from './snippets/numbers.jpg';
import { Link } from 'react-router-dom';

export default class MenuEdits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openLanguagePanel: '',
        };
    }
    render() {
        let active = this.props.active;

        return (
            <>
                <div className='menu-edits'>
                    {(active === "Product") &&
                        <div className='studio-edits'>
                            <div className='studio-menu-items'>
                                <div className="edits-heading">
                                    <label>Product</label>
                                    <div className='title'>Manage Your Products</div>
                                    <div className="note">You can select multiple products and colors.</div>
                                </div>
                                <ProductCard />
                                <Link to='' className="add-products">
                                    <span>+</span> Add Products
                                </Link>
                            </div>
                        </div>
                    }
                    {(active === "Text") &&
                    <FontSection />
                    }
                    {(active === "Upload") &&
                        <div className='studio-edits'>
                            <div className='studio-menu-items'>
                                <div className="edits-heading">
                                    <label>Upload Art</label>
                                    <div className="second-heading">
                                        <div className='title'>Choose file(s) to upload</div>
                                        <button>
                                            <img className='cross' src={cross} alt='close' />
                                        </button>
                                    </div>
                                    <div className="note">Our design professionals will select ink colors for you or tell us your preferred colors with Design Notes.</div>
                                </div>
                                <div id="drop-area">
                                    <form className="my-form">
                                        <p>Drag & Drop Artwork Files or</p>
                                        <input type="file" id="fileElem" multiple accept="image/*" onChange='' />
                                        <label className="button choose-btn" htmlFor="fileElem">Choose File(s)</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                    {(active === "Clipart") &&
                        <div className='studio-edits'>
                            <div className='studio-menu-items'>
                                <div className="edits-heading">
                                    <label>Clipart</label>
                                    <div className="second-heading">
                                        <div className='title'>Add Clipart</div>
                                        <button>
                                            <img className='cross' src={cross} alt='close' />
                                        </button>
                                    </div>
                                    <div className="note">Choose from over 50,000 Clipart Designs !<br /> or Upload Your Own Image</div>
                                </div>
                            </div>
                            <div className="art-box">
                                <div className="input-bar" >
                                    <input className="art-input" placeholder="Search for Clipart" />
                                    <button className="input-btn"><img className="cross" src={search} alt="search icon" /></button>
                                </div>
                                <div className="art-btn-container">
                                    {artTypes && artTypes.map((key, index) => {
                                        return (
                                            <button className="art-btn" key={index}>
                                                <img src={key.icon} alt="icons" className="art-btn-svg"></img>
                                                <p className="btn-label">{key.name}</p>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    {(active === "NameNumber") &&
                        <div className='studio-edits'>
                            <div className='studio-menu-items'>
                                <div className="edits-heading">
                                    <label>Name and Number</label>
                                    <div className="second-heading">
                                        <div className='title'>Add Names & Numbers</div>
                                        <button>
                                            <img className='cross' src={cross} alt='close' />
                                        </button>
                                    </div>
                                    <div className="note">Use personalized Names & Numbers for projects like team jerseys where you need a unique name and/or number for each item.</div>
                                </div>
                            </div>
                            <div className="art-box">
                                <div className="input-bar" >
                                    <img className="number-image" src={numberImage} alt="numbers" />
                                </div>
                                <div className="number-button" >
                                    <button className="button">Add Names & Numbers</button>
                                </div>
                            </div>
                        </div>
                    }
                    {(active === "DesignWizard") &&
                        <div className='studio-edits'>
                            <div className='studio-menu-items'>
                                Design Wizard
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }
}