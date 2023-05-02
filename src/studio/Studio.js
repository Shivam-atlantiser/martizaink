import MenuEdits from './MenuEdits'
import Sidebar from './Sidebar'
import "./studio.css"
import React, { useState } from 'react'
import Canvas from './canvas';
import chat from '../pages/assets/chat-icon.png';
import call from '../pages/assets/call-icon.avif';

const Studio = () => {
    const [menuItem, setMenuItem] = useState('Product');

    const handler = (value) => {
        setMenuItem(value);
    };
    
    return (
        <div className='studio'>
            <div className='studio-editor'>
                <Sidebar active={menuItem} handler={handler} />
                <div className='studio-nav'>
                    <div className='studio-navbar'>
                        <ul className='headings-navbar'>
                            <li className='sub-head'>
                                <span className='number-head'>1</span> Design
                            </li>
                            <li className='sub-head'>
                                <span className='number-head'>2</span> Quantity & sizes
                            </li>
                            <li className='sub-head'>
                                <span className='number-head'>3</span> Review price
                            </li>
                        </ul>

                        <div className='right-menus'>
                            <div className='menu-link'>
                                <img className='img-icon' src={chat} alt='logo' />
                                <div className='inner-menus'>
                                    <button className='menu-title'>Live Chat</button>
                                </div>
                            </div>
                            <div className='menu-link'>
                                <img className='img-icon' src={call} alt='logo' />
                                <div className='inner-menus'>
                                    <button className='menu-title'>(800) 620-1233</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='studio-viewer'>
                        <MenuEdits active={menuItem} handler={handler} />
                        <Canvas />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Studio