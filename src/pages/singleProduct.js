import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, selectedProductColor } from '../redux/actions/productActions'
import './styles.css';

function SingleProduct() {
    const [defaultColor, setDefaultColor] = useState(null);

    const storeData = useSelector((state) => state.AllData);
    const products = storeData.products;

    const dispatch = useDispatch();

    const handleSelectProduct = (data) => {
        let product = {
            product_Id: data?.product_Id !== undefined ? data.product_Id : undefined,
            name: data?.name !== undefined ? data.name : undefined,
            style: data?.style !== undefined ? data.style : undefined,
            image: data.image,
        }
        dispatch(selectedProduct(product))
    }

    const handleColor = (key) => {
        dispatch(selectedProductColor(key))
        setDefaultColor(key)
    }

    return (
        <>{
            products && products.map((product, index) => {
                return (
                    <button className='product-box' onClick={(e) => handleSelectProduct(product)} key={index}>
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