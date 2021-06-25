import React from 'react';

import { ReactComponent as Avatar } from "../../assets/img/mf-avatar.svg";
import "./hero.styles.css";

const Hero = props => {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__profile bd-grid">
                <div className="home__img">
                    <Avatar />
                </div>
                <div className="home__social">
                    <a href="https://www.linkedin.com/in/thaind275/" className="home__social-icon"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/duythai275?tab=repositories" className="home__social-icon"><i className="bx bxl-github"></i></a>
                    <a href="https://duythai275.medium.com/" className="home__social-icon"><i className='bx bxl-medium' ></i></a>
                </div>
            </div>
            <div className="home__data">
                <h1 className="home__title">Hi, <br/>I'm <span className="home__title-color">Thai Nguyen</span><br/>Full Stack Software Developer</h1>
                <a href="#contact" className="button">Contact</a>
            </div>
        </section>
    )
}

export default Hero;