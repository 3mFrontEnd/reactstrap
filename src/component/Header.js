import React from 'react';
import header from "../images/header.png";
const Header = () => {
    return (
        <div className="py-4">
            <header className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="display-4 mb-4">Build your website wiht <span className="text-warning">Mike Dev</span> easily!</h2>
                        <p className="lead text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, harum?</p>
                        <div className="text-center text-md-start">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#getStartedModal">
                            Get started
                        </button> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={header} alt="header png" className="img-fluid" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;