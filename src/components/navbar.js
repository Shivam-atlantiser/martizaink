import React from 'react';
import cart from '../pages/assets/cart.svg'
import account from '../pages/assets/account.svg'
import '../pages/styles.css';


function Navbar() {
    return (
        <>
            <div className='welcome-navbar'>
                <div >
                    Welcome Back!
                    <a href='/' className='linkToPick'> Pick up designing where you left off {">"} </a>
                </div>
                <div className='my-account'>
                    <a href="/">
                        <img src={account} alt='account' className='cart-logo' />My Account</a>
                    <a href="/" className='cart-border'>
                        <img src={cart} alt='cart' className='cart-logo' />Cart<span className='cart-number'>0</span></a>
                </div>
            </div>
        </>

    )
}

export default Navbar