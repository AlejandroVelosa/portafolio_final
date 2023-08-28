import React, { useEffect, useRef, useState } from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
    FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css'
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formSent, setFormSent] = useState(false);
    const [resetForm, setResetForm] = useState(false);



    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ymmpxkz', 'template_f35a2kp', form.current, 'licxoe5oC5uPq5254')
            .then((result) => {
                console.log(result.text);
                setFormSent(true);
                setResetForm(true);

                // Reiniciar el formulario y el estado después de un tiempo
                setTimeout(() => {
                    setFormSent(false);
                    setResetForm(false);
                    form.current.reset();
                }, 2000); // Cambia este valor según tus necesidades
            }, (error) => {
                console.log(error.text);
            });
    };

    const resetFormFields = () => {
        setFormSent(false);
        setResetForm(false);
        form.current.reset();
    };
    return (
        <section className="contact section">
            <h2 className="section_title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact_container container grid">

                <div className="contact_data" data-aos="fade-down">
                    <h3 className="contact_title">Don't be Shy !</h3>

                    <p className="contact_description">
                        Let's talk! I'm excited to collaborate with you on exciting projects. Send me a message through the contact form to start our conversation.
                    </p>

                    <div className="contact_info">
                        <div className="info_item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info_title">Mail Me</span>
                                <h4 className="info_desc">Alejovelosa4@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info_item">
                            <FaPhoneSquareAlt className="info__icon" />

                            <div>
                                <span className="info_title">Call Me</span>
                                <h4 className="info_desc">+57 3028387688</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact_socials">
                        <a href="https://github.com/AlejandroVelosa" className="contact_social-link">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/jairo-alejandro-velosa-bola%C3%B1os-879986270/" className="contact_social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="https://wa.me/34602543866" className="contact_social-link">
                            <FaWhatsapp />
                        </a>

                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact_form" data-aos="fade-down">
                    <div className="form_input-group">
                        <div className="form_input-div">
                            <input
                                required
                                type="text"
                                placeholder="Your Name"
                                className="form_control"
                                name="user_name"
                            />
                        </div>


                        <div className="form_input-div">
                            <input
                                required
                                type="email"
                                placeholder="Your Email"
                                className="form_control"
                                name="user_email"
                            />
                        </div>


                        <div className="form_input-div">
                            <input
                                required
                                type="text"
                                placeholder="Your subject"
                                className="form_control"
                                name="subject_name"
                            />
                        </div>

                    </div>

                    <div className="form_input-div">
                        <textarea required name="message" placeholder="Your Message" className="form_control textarea">
                        </textarea>
                    </div>

                    <button className={`button ${formSent ? 'sent' : ''}`}>
                        {formSent ? 'Message Sent!' : 'Send Message'}
                        {/* <span className={`${formSent ? 'sent' : ''}`}>
                            <FiSend />
                        </span> */}
                    </button>
                </form>
                {/* 
                {formSent && (
                    <div className="alert">
                        <p>Message sent successfully!</p>
                        <button onClick={resetFormFields}>OK</button>
                    </div>
                )} */}

            </div>
        </section>
    );
};

export default Contact;
