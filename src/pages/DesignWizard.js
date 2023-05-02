import React from 'react'


const DesignWizard = (props) => {
    
    const handleClose = () => {
        props.onPopupClose();
    };
    
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <section className="two-column-section">
                    <div className="column column-text">
                        <h2>Try Our New Design Wizard</h2>
                        <p>Instantly create dozens of design options</p>
                        <button className='btn btn-primary'>
                            Try It
                        </button>
                    </div>
                    <div className="column column-image">
                        <img src="https://www.rushordertees.com/design/images/modal/custom-template/welcome-rush.png" alt="Image" />
                    </div>
                </section>
            </div>
        </div>
    )

}

export default DesignWizard;