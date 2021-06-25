import React, { useState } from 'react';

import './header.styles.css';

const Header = props => {
    const [ showMenu, setShowMenu ] = useState("nav__menu");

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">Thai Nguyen</a>
                </div>
                <div className={showMenu} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={() => (showMenu === "nav__menu") ? setShowMenu("nav__menu show") : setShowMenu("nav__menu")}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;