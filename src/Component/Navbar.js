import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3">
                <a className="navbar-brand" href="/"  id = "port-logo">Portfo<span id="port-logo-span">lio.</span> </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#experience">Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#achievements">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-items-heading" href="#foo">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
