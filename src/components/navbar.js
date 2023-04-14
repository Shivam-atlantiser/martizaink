import React from 'react';
import logo from '../pages/assets/logo.avif';
import chat from '../pages/assets/chat-icon.png';
import call from '../pages/assets/call-icon.avif';
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
                    <img src={account} alt='account' className='cart-logo'/>My Account</a>
                <a href="/" className='cart-border'>
                    <img src={cart} alt='cart' className='cart-logo'/>Cart<span className='cart-number'>0</span></a>
            </div>
        </div>
        <div className='main-navbar'>
                
        </div>

        </>
        //                
        //                 <img className='jss33' src={logo} alt='logo' />


        //                 <ul className='jss43'>
        //                     <li className='jss87'>Products</li>
        //                     <li className='jss87'>Services</li>
        //                     <li className='jss87'>Templates</li>
        //                     <li className='jss87'>Help</li>
        //                     <li className='jss87'>About</li>
        //                     <li className='jss44'><button>Design now</button></li>
        //                 </ul>

        //                         <img className='jss47' src={chat} alt='logo' />

        //                             <button className='jss49'>
        //                                 Live Chat now
        //                             </button>
        //                             <span className='jss41'>
        //                                 Chat with an expert
        //                             </span>


        //                         <img className='jss47' src={call} alt='logo' />
        //                         <div>
        //                             <button className='jss49'>
        //                                 (800) 620-1233
        //                             </button>

        //                                 <span className='jss41'>
        //                                     Talk to an expert
        //                                 </span>
        //                                 <span>
        //                                     Wait time: 0 mins
        //                                 </span>
        //                         </div>
    )
}

export default Navbar