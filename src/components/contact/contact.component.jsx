import React from 'react';

import "./contact.styles.css";

const Contact = props => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact__container bd-grid">
                <div>
                    <div className="contact__information">
                        <i className='bx bx-phone contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">403-973-2577</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className='bx bx-envelope contact__icon' ></i>
                        <div>
                            <h3 className="contact__title">E-mail</h3>
                            <span className="contact__subtitle">duythai275@gmail.com</span>
                        </div>
                    </div>
                </div>
                <form action="" className="contact__form">
                    <input type="text" placeholder="Name" className="contact__input" />
                    <input type="mail" placeholder="Email" className="contact__input" />
                    <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                    <div className="contact__button__container">
                        <a href="#contact" className="contact__button button">Send</a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;