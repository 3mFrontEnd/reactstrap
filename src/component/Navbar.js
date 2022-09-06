import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <header>
            <div className= "sticky-top bg-white p-2 shadow --bs-bg-opacity: 0.95 ;">
            <nav className="navbar navbar-expand-lg navbar-light container" >
                <div className="container-fluid">
                <a className="navbar-brand fs-4" href="#">Mike Dev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbarFeatuers">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbarBlog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbarTeam">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbarContact">Contact</a>
                    </li>
                    </ul>
                    <div className="d-flex">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#getStartedModal">
                        Get started
                    </button>
                    </div>
                </div>
                </div>
            </nav>
            </div>
        </header >
    );
};

export default Navbar;