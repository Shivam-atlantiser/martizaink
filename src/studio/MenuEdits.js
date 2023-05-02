import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { artTypes } from './dynamicFields';
import FontSection from './fontSection';
import cross from './snippets/cross.svg';
import search from './snippets/search.svg';
import numberImage from './snippets/numbers.jpg';
import { Link } from 'react-router-dom';
import './menuEdits.css';
import { useDispatch, useSelector } from 'react-redux';
import { imageClip, selectedInputFile } from './../redux/actions/productActions';
import axios from 'axios';
import DesignWizard from './../pages/DesignWizard';


const MenuEdits = ({ active, handler }) => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const storeData = useSelector((state) => state.allProducts);
    const [fileUrl, setFileUrl] = useState('');
    const [clipsCat, setClipsCat] = useState('');
    const [clip, setClip] = useState('');
    const [individualClip, setIndividualClip] = useState('');
    const [indiClip, setIndiClip] = useState(undefined);
    const [singleClip, setSingleClip] = useState('')
    const [designWizardActive, setDesignWizardActive] = useState(true)
    const [numbers, setNumbers] = useState(false)


    const handlePopupClose = () => {
        setDesignWizardActive(false);
    };

    useEffect(() => {
        if (designWizardActive === false) {
            handler("NameNumber");
        }
        setDesignWizardActive(true)
    }, [designWizardActive])

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];
        if (!file) {
            return;
        }
        const url = URL.createObjectURL(file);
        setFileUrl(url);
    };

    const handleClipart = (data) => {
        setClipsCat(data.name)
    }

    const handleIndividualClip = (data) => {
        setIndividualClip(data.name);
    }

    const handleSingleClip = (data) => {
        setSingleClip(data)
    }

    const handleNumbers = () => {
        setNumbers(true)
    }

    useEffect(() => {
        if (clipsCat === "Animals") {
            axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats/18")
                .then(response => setClip(JSON.parse(response.data)));
        }
        if (individualClip === "Aardvark") {
            axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts/24")
                .then(response => setIndiClip(JSON.parse(response.data)));
        }
        // setIndividualClip(response.data)
        // if (clipsCat === "Designs") {
        //     axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats/20")
        //     .then(response => setClip(JSON.parse(response.data)));
        // }
        // if (clipsCat === "Flags") {
        //     axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats/22")
        //     .then(response => setClip(JSON.parse(response.data)));
        // }
        // if (clipsCat === "Military") {
        //     axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats/19")
        //     .then(response => setClip(JSON.parse(response.data)));
        // }
        // if (clipsCat === "Music") {
        //     axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats/21")
        //     .then(response => setClip(JSON.parse(response.data)));
        // }
        // if (clipsCat === "Nature") {
        //     axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats/23")
        //     .then(response => setClip(JSON.parse(response.data)));
        // }
    }, [clipsCat, individualClip])


    useEffect(() => {
        if (fileUrl) {
            dispatch(selectedInputFile(fileUrl))
        }
        if (singleClip) {
            dispatch(imageClip(singleClip))
        }
    }, [fileUrl, dispatch, singleClip]);

    useEffect(() => {
        axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/cliparts_cats")
            .then(response => setClipsCat(JSON.parse(response.data)));
    }, []);


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
                                    <input
                                        type="file"
                                        id="fileElem"
                                        accept=".csv,.txt,image/*"
                                        onChange={handleFileChange}
                                    />
                                    <label className="button choose-btn" htmlFor="fileElem">
                                        Choose File(s)
                                    </label>
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
                                {!clip && artTypes && artTypes.map((key, index) => {
                                    return (
                                        <button className="art-btn" key={index} onClick={() => handleClipart(key)}>
                                            <img src={key.icon} alt="icons" className="art-btn-svg"></img>
                                            <p className="btn-label">{key.name}</p>
                                        </button>
                                    )
                                })}
                                {indiClip !== undefined ?
                                    indiClip.map((key, index) => (
                                        <img src={key} alt='animals' key={index} className='image-clips' onClick={() => handleSingleClip(key)} />
                                    ))
                                    :
                                    <ul className='list-container'>
                                        {clip && clip.map((key, index) => (
                                            <Link key={index} className='clipart-link' onClick={() => handleIndividualClip(key)}>{key.name}</Link>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                }
                {(active === "NameNumber") && numbers === false &&
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
                                <button className="button" onClick={handleNumbers}>Add Names & Numbers</button>
                            </div>
                        </div>
                    </div>
                }
                {(active === "NameNumber") && numbers === true &&
                    <div className='studio-edits'>
                        <div className='studio-menu-items'>
                            <div className="edits-heading">
                                <label>Names & Numbers</label>
                                <div className="second-heading">
                                    <div className='title'>Names & Numbers Tools</div>
                                    <button>
                                        <img className='cross' src={cross} alt='close' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="art-box">
                            <div className='steps number-and-name'>
                                <div className='step-item'>
                                    <div className='step-title'>Step 1</div>
                                    <div className='step-data'>
                                        <label>
                                            <input type='checkbox' />
                                            Add names
                                        </label>
                                        <label>
                                            <input type='checkbox' />
                                            Add numbers
                                        </label>
                                    </div>
                                </div>
                                <div className='step-item'>
                                    <div className='step-title'>Side</div>
                                    <div className='step-data'>
                                        <div className='front'>
                                            <img alt='' src='https://www.rushordertees.com/design/images/menu/edit-vinyl/porn_star_academy-front.png' />
                                        </div>
                                        <div className='back'>
                                            <img alt='' src='https://www.rushordertees.com/design/images/menu/edit-vinyl/porn_star_academy-back.png' />
                                        </div>
                                    </div>
                                </div>
                                <div className='step-item'>
                                    <div className='step-title'>Size</div>
                                    <div className='step-data'>
                                        <div className='size-small size'>
                                            <img alt='' src='https://www.rushordertees.com/design/images/menu/edit-vinyl/porn_star_academy-small.png' />
                                        </div>
                                        <div className='size-large size'>
                                            <img alt='' src='https://www.rushordertees.com/design/images/menu/edit-vinyl/porn_star_academy-large.png' />
                                        </div>
                                    </div>
                                </div>
                                <div className='step-item'>
                                    <div className='step-title'>Font</div>
                                    <div className='step-data'>
                                        <div className='font-size'>
                                            <img alt='' src='https://luhul4uhfg.execute-api.us-east-1.amazonaws.com/prod/getFontPreview?fontUrl=https://s3.amazonaws.com/eztees-fonts/interstate_black/interstate_black.ttf&previewText=Interstate' />
                                        </div>
                                        <div className='font-size'>
                                            <img alt='' src='https://luhul4uhfg.execute-api.us-east-1.amazonaws.com/prod/getFontPreview?fontUrl=https://s3.amazonaws.com/eztees-fonts/porn_star_academy/porn_star_academy.ttf&previewText=Collegiate' />
                                        </div>
                                    </div>
                                </div>
                                <div className='step-item'>
                                    <div>Color</div>
                                    <div className="font-styles">
                                        <Link to='' className="inner-options">
                                            <span className="input-inner-text">Black
                                            </span>
                                            <span className="select-color-1" style={{
                                                backgroundColor: "Black"
                                            }} />
                                        </Link>
                                        <Link to=''><img className="forward-icon" src={""} alt='' /></Link>
                                    </div>
                                </div>
                                <div className='step-item'>
                                    <span className='button-names'>
                                        <a href='/' className='btn btn-primary btn-full'>Enter names/Number</a>
                                    </span>
                                </div>
                                <div class="name-number-note">
                                    Complete list required for accurate pricing
                                    Names = $4.00 | Numbers = $3.00
                                    Names & Numbers = $6.00</div>
                            </div>
                        </div>
                    </div>
                }
                {(active === "DesignWizard") &&
                    <div className='studio-edits'>
                        <div className='studio-menu-items'>
                            {designWizardActive && (
                                <DesignWizard onPopupClose={handlePopupClose} />
                            )}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default MenuEdits;