import './Sidebar.css'
import { ReactComponent as ClothSvg } from "./snippets/cloth.svg"
import { ReactComponent as TextSvg } from "./snippets/text.svg"
import { ReactComponent as UploadSvg } from "./snippets/upload.svg"
import { ReactComponent as ClipartSvg } from "./snippets/clipart.svg"
import { ReactComponent as NameNumberSvg } from "./snippets/name-number.svg"
import { ReactComponent as DesignWizard } from "./snippets/design-wizard.svg"
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Sidebar extends Component {
    render() {
        let active = this.props.active;
        return (
            <div className='studio-tools-sidebar'>

                <div className='logo'>
                    <img src="./logo192.png" alt="logo"/>
                </div>
                <div className='studio-tools'>
                    <Link to="" className={active === "Product" ? "active tool" : "tool"} onClick={() => this.props.handler("Product")}>
                        <div className='icon'>
                            <ClothSvg />
                        </div>
                        <div className='text'>
                            Products
                        </div>
                    </Link>
                    <Link to="" className={active === "Text" ? "active tool" : "tool"} onClick={() => this.props.handler("Text")}>
                        <div className='icon'>
                            <TextSvg />
                        </div>
                        <div className='text'>
                            Add text
                        </div>
                    </Link>
                    <Link to="" className={active === "Upload" ? "active tool" : "tool"} onClick={() => this.props.handler("Upload")}>
                        <div className='icon'>
                            <UploadSvg />
                        </div>
                        <div className='text'>
                            Upload Art
                        </div>
                    </Link>
                    <Link to="" className={active === "Clipart" ? "active tool" : "tool"} onClick={() => this.props.handler("Clipart")}>
                        <div className='icon'>
                            <ClipartSvg />
                        </div>
                        <div className='text'>
                            Add Clipart
                        </div>
                    </Link>
                    <Link to="" className={active === "NameNumber" ? "active tool" : "tool"} onClick={() => this.props.handler("NameNumber")}>
                        <div className='icon'>
                            <NameNumberSvg />
                        </div>
                        <div className='text'>
                            Names & Numbers
                        </div>
                    </Link>
                    <Link to="" className={active === "DesignWizard" ? "active tool" : "tool"} onClick={() => this.props.handler("DesignWizard")}>
                        <div className='icon'>
                            <DesignWizard />
                        </div>
                        <div className='text'>
                            Design Wizard
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
