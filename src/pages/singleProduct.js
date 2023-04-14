import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, selectedProductColor } from '../redux/actions/productActions'
import './styles.css';

function SingleProduct() {
    const [defaultColor, setDefaultColor] = useState(null);

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    const handleSelectProduct = (data) => {
        dispatch(selectedProduct(data))
    }

    const handleColor = (key) => {
        
        dispatch(selectedProductColor(key))
        setDefaultColor(key)
    }

    return (
        <>{
            products && products.map((product, index) => {
                return (
                    <button className='product-box' onClick={(e) => handleSelectProduct(product.product_Id)} key={index}>
                        <p className='custom-product-title'>{product.name}</p>
                        <img className='product-section-image' src={product.image} alt='product' />
                        <div className='select-color-heading'>
                            Selected Color : {defaultColor ? defaultColor : "White"}
                        </div>
                        <div className='color-input-box'>
                            {product.colors !== undefined &&
                                product.colors.map((key, index) =>
                                    <span className='outer-colors' key={index}>
                                        <span className='color-input' style={{ backgroundColor: key }} onClick={() => handleColor(key)} />
                                    </span>
                                )
                            }
                        </div>
                    </button>
                )
            })}
        </>
    )
}

export default SingleProduct