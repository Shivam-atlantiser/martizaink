import React, { useEffect, useState } from 'react'
import whiteTshirt from './assets/ZoomImage.jpg'
// import tick from './assets/tick.svg'
// import arrow from './assets/tick.svg'
// import { options, colors } from './products'
// import dropdown from './assets/dropdown.svg'
// import dropdownClose from './assets/dropdown-close.svg'
import forward from './assets/forward.svg'
// import SingleProduct from './singleProduct'
// import group1 from './assets/group1.avif'
// import group2 from './assets/group2.avif'
// import group3 from './assets/group3.avif'
import tipimage from './assets/dog1.avif'
// import delivery from './assets/delivery.svg'
// import industry from './assets/industry.svg'
// import pricing from './assets/pricing.svg'
// import user from './assets/user.svg'
import plus from './assets/plus.svg'
// import minus from './assets/minus.svg'
// import { faqs } from './products'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { productColor } from './../redux/actions/productActions';



function TipSection() {
    return (
        <div className='single-tip'>
            <img src={tipimage} alt='tip' className='group-tshirt-image' />
            <p className="single-tip-heading">1. Use High-Quality Images</p>
            <p className='single-tip-desc'>Pay special attention to the resolution of any image you’re uploading to your design. Low-resolution images will look fuzzy or pixelated and may not look sharp when printed.</p>
        </div>
    )
}

export { TipSection };


function DesignTshirt() {
    const [showDiv, setShowDiv] = useState(false);
    const [dropValue, setDropValue] = useState(null);
    const [defaultColor, setDefaultColor] = useState(null);
    const [active, setActive] = useState(null)
    const [acc_icon, setAcc_icon] = useState(plus);
    const [clicked, setClicked] = useState("0");
    const [dynamicColors, setColors] = useState('')
    const dispatch = useDispatch();

    const handleHover = (key) => {
        setDropValue(key)
        setShowDiv(false)
    }
    const handleColor = (key) => {
        setDefaultColor(key.color)
        setActive(key.color_name)
        dispatch(productColor(key))
    }

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    const AccordionItem = ({ faq, onToggle, active }) => {
        const { question, answer } = faq;
        return (
            <li className={`accordion_item ${active ? "active" : ""}`}>
                <button className='accordian-heading' onClick={onToggle}>
                    {question}
                    <span className="control">—</span>
                </button>
                <div className={`answer_wrapper ${active ? "open" : ""}`}>
                    <div className="answer">{answer}</div>
                </div>
            </li>
        );
    };

    useEffect(() => {
        axios.get("http://192.168.29.98/martiza_ink/wp-json/martiza/v1/colors")
            .then(response => setColors(JSON.parse(response.data)));
    }, []);

    return (<>
        <div className='single-design-tshirt'>
            <div className='container design-page-container'>
                <img src={whiteTshirt} alt='design tshirt' className='fixed-tshirt-image' />
                <div className='product-info'>
                    {/* <p className='design-ratings'><span className='rating mr-2'>★★★★★</span> 24,000 5-star reviews</p> */}
                    <p className='design-heading'>Design Custom T-Shirts</p>
                    <p className='design-sub-heading'>Make and print your own shirt design</p>
                    <div>
                        {/* <div className="relative w-full custom-dropdown" onMouseEnter={() => setShowDiv(true)} onMouseLeave={() => setShowDiv(false)}>
                            {
                                options.map((key, index) => (
                                    index === 0 && showDiv === false ?
                                        <div className='flex flex-row each-select' key={index}>
                                            <img src={key.img} alt='design tshirt' className='dropdown-image' />
                                            <div className='flex flex-col justify-center items-start ml-2'>
                                                <p className='name-select'>
                                                    {dropValue !== null ? dropValue.name : "Martizaink Classic Tee"}
                                                </p>
                                                <p className='select-feature'>
                                                    {dropValue !== null ? dropValue.benifit : "Most Popular"}
                                                </p>
                                            </div>
                                            <div className='dropdownArrow'>
                                                <img src={dropdown} alt="dropdown icon" className='dropdown' />
                                            </div>
                                        </div>
                                        : showDiv &&
                                        <div className='flex flex-row each-select' onClick={() => handleHover(key, index)} key={index}>
                                            <img src={key.img} alt='design tshirt' className='dropdown-image' />
                                            <div className='flex flex-col justify-center items-start ml-2'>
                                                <p className='name-select'>
                                                    {key.name}
                                                </p>
                                                <p className='select-feature'>
                                                    {key.benifit}
                                                </p>
                                            </div>
                                            <div className='dropdownArrow'>
                                                <img src={dropdownClose} alt="dropdown icon" className='dropdown' />
                                            </div>
                                        </div>
                                ))}
                        </div> */}
                    </div>
                    <div className='select-color-heading'>
                        Selected Color : {defaultColor ? defaultColor : "White"}
                    </div>
                    <div className='color-input-box position_alteration'>
                        {dynamicColors && dynamicColors !== undefined ? dynamicColors.map((key, index) =>
                            <span className='outer-colors' key={index}>
                                <span className={`color-input  ${active === key && 'active'}`} style={{ backgroundColor: key.color }} onClick={() => handleColor(key)} />
                            </span>
                        ) : 
                        <span className='outer-colors'>
                                <span className={`color-input  ${active === "Black" && 'active'}`} style={{ backgroundColor: "black" }}/>
                            </span>
                        }
                    </div>
                    <button className='design-button design-button-2 design-page-button'>
                        <Link to={'/design-studio'} className="nav-link">Start Designing</Link>
                        <img className="design-arrow" src={forward} alt='forward icon' />
                    </button>
                    <p className='design-page-description'>Creating your own t-shirt design at Martizaink is simple. Start with a t-shirt from our broad inventory and quickly personalize it using our intuitive Design Studio. Upload your artwork or use our free clipart, fonts, and design templates to make your own shirt in no time.</p>
                </div>
            </div>
        </div>
        {/* <div className='category-section design-page-category-section'>
            <p className='category-heading design-page-category-heading'>Find the Right Shirt</p>
            <div className='container categories'>
                <div className='columns-4'>
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
            </div>
            <Link to='' className='border-button'>View all T-shirts</Link>
        </div>
        <div className='category-section design-page-category-section'>
            <div className='heading-box tshirt-design-template'>
                <h1 className='category-heading'>T-Shirt Design Templates</h1>
                <span className='sub-heading'>Customize one of our popular t-shirt design templates</span>
            </div>
            <div className='container categories'>
                <div className='columns-4'>
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
            </div>
        </div>
        <div className='category-section design-page-category-section'>
            <p className='category-heading design-page-category-heading'>More Products to Personalize</p>
            <div className='container categories'>
                <div className='columns-4'>
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
            </div>
            <Link to='' className='border-button'>View all Products</Link>
        </div>
        <div className='category-section custom-tshirt-section'>
            <p className='category-heading design-page-category-heading'>Custom T-Shirt Printing & Designs</p>
            <div className='custom-page-media'>
                <img src={group1} alt='design tshirt' className='group-tshirt-image' />
                <img src={group2} alt='design tshirt' className='group-tshirt-image' />
                <img src={group3} alt='design tshirt' className='group-tshirt-image' />
            </div>
        </div>
        <div className='category-section custom-tshirt-section'>
            <p className='category-heading design-page-category-heading'>Creating The Perfect T-Shirt Design: 5 Pro Tips</p>
            <p className='tips-desc'>A great design can transform an average shirt into one that turns heads. Whether you’re creating a custom shirt for your business, event, or family gathering, consider these pro tips from our design experts to design the perfect look:</p>
            <div className='custom-tips'>
                <TipSection />
                <TipSection />
                <TipSection />
                <TipSection />
                <TipSection />
            </div>
        </div>
        <div className='deserve-section deserve-border-rm'>
            <div className='inner-deserve-box'>
                <div className='heading-box'>
                    <h1 className='category-heading'>The Martizaink Difference</h1>
                    <span className='sub-heading our-difference'>We're a team of 300+ printing experts focused on creating amazing custom products for you</span>
                </div>
                <div className='deserve-container'>
                    <div className='deserve-content'>
                        <img className='svg-style' src={delivery} alt='icon' />
                        <p className='delivery-title'>FAST DELIVERY</p>
                        <p className='delivery-description'>deliveries are our speciality, and we never take an order unless we are 100% sure that we can guarantee your deadline.</p>
                    </div>
                    <div className='deserve-content'>
                        <img className='svg-style' src={industry} alt='icon' />
                        <p className='delivery-title'>BETTER PRICING</p>
                        <p className='delivery-description'>With free shipping and competitive pricing, we provide our high-quality products for a price and standard unmatched anywhere.</p>
                    </div>
                    <div className='deserve-content'>
                        <img className='svg-style' src={pricing} alt='icon' />
                        <p className='delivery-title'>INDUSTRY LEADING <br />SATISFACTION GUARANTEE</p>
                        <p className='delivery-description'>Accuracy, quality and expedience are core to our business and day-to-day operations. We're happy when you're happy.</p>
                    </div>
                    <div className='deserve-content'>
                        <img className='svg-style' src={user} alt='icon' />
                        <p className='delivery-title'>DESIGN REVIEW & REPAIR</p>
                        <p className='delivery-description'>Our professional in-house designers review and repair every order we receive to ensure each one is printed to perfection.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='faq-section-container'>
            <div className='faq-section'>
                <p className='category-heading'>T-Shirt Design FAQs</p>
                <div className='custom-tips mt-2'>
                    <ul>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                onToggle={() => handleToggle(index)}
                                active={clicked === index}
                                faq={faq}
                            />
                        ))}
                    </ul>
                </div>
            </div>

        </div> */}
    </>
    )
}

export default DesignTshirt