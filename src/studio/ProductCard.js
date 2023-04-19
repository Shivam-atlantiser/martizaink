import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import { colors } from '../pages/products';
import SingleProduct from '../pages/singleProduct';
import cross from '../pages/assets/cross.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProductColor } from '../redux/actions/productActions';
import "./ProductCard.css";


function ProductCard() {

    const [defaultColor, setDefaultColor] = useState(null);

    const storeData = useSelector((state) => state.AllData);

    const dispatch = useDispatch();

    const handleColor = (key) => {
        dispatch(selectedProductColor(key))
        setDefaultColor(key)
    }

    return (
        <div className="product-card">
            <div className='product-detail'>
                <div className="product-title">Lorem ipsum tee</div>
                <Popup trigger={
                    <Link to="" className="product-change-link">Change Product</Link>
                } modal>
                    {close => (<>
                        <div className='custom-product-popup'>
                            <span className='product-cross-svg'>
                                <button className="close" onClick={(close)}>
                                    <img src={cross} alt='close' />
                                </button>
                            </span>
                            <div className='inner-product-popup'>
                                <SingleProduct />
                            </div>
                        </div>
                    </>)}
                </Popup>
                <Popup
                    trigger={
                        <div>
                            <div className='product-image-c'>
                                <div className="product-image">
                                    {
                                        storeData.selectedProductId === undefined ?
                                            <img alt='' src="./tee.jpeg" />
                                            :
                                            storeData?.products?.map((key, index) => key.product_Id === storeData.selectedProductId &&
                                                <img src={key.image} alt="canvas tshirt" key={index} />
                                            )
                                    }
                                </div>
                                <div className="product-color">
                                    {defaultColor}
                                </div>
                            </div>
                            <Link to='' className="product-change">
                                <span className="p-color" style={{ backgroundColor: defaultColor }} />
                                <span>Change</span>
                            </Link>
                        </div>
                    }>
                    {close => (<>
                        <div className='popup-custom-colors'>
                            <div className='select-color-heading'>
                                <div className='change-color-heading-container'>
                                    <p className='change-color-heading'>
                                        Change Color
                                    </p>
                                    <button className="close" onClick={(close)}>
                                        <img src={cross} alt='close' />
                                    </button>
                                </div>
                                <hr className='in-popup-seperator' />
                                <div className='dynamic-color-info'>
                                    <p className='change-color-default'>
                                        Color :
                                    </p>
                                    <span className='color-dynamic' style={{ backgroundColor: defaultColor }}>
                                    </span>
                                    <span className='color-name-dynamic'>{defaultColor ? defaultColor : "White"}</span>
                                </div>
                            </div>
                            <div className='color-input-box'>
                                {colors !== undefined &&
                                    colors.map((key, index) =>
                                        <span className='outer-colors' key={index}>
                                            <span className='color-input' style={{ backgroundColor: key }} onClick={() => handleColor(key)} />
                                        </span>
                                    )}
                            </div>
                        </div>
                    </>)}
                </Popup>
            </div>
            <div className='product-add-color'>
                <Link to="">
                    <div className='color-icon'>
                        <img alt='default tshirt' src='./add-color-wheel.png' />
                    </div>
                    <span>Add Color</span>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard