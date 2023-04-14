import MenuEdits from './MenuEdits'
import Sidebar from './Sidebar'
import "./studio.css"
import React, { Component } from 'react'
import Canvas from './canvas';


export default class Studio extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this)
        this.state = { menuItem: "Product" };
    }
    handler(value) {
        this.setState({
            menuItem: value
        })
    }
    
    render() {
        return (
            <div className='studio'>
                <div className='studio-editor'>
                <Sidebar active={this.state.menuItem} handler={this.handler} />
                <MenuEdits active={this.state.menuItem} />
                </div>
                <div className='studio-viewer'>
                    <Canvas />
                </div>
            </div>
        )
    }
}
