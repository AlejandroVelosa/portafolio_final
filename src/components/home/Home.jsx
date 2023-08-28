import React, { useEffect, useState } from 'react';
import Profile from '../../assets/newMe.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import About from '../about/About';


const Home = () => {
    const [profession, setProfession] = useState('Web Designer');
    const [currentIndex, setCurrentIndex] = useState(0);
    const professions = ['Full Stack Developer', 'Full Stack Developer', 'Full Stack Developer'];


    const [setshowMenu, setSetshowMenu] = useState(false);

    const handleLinkClick = (targetId) => {
        setSetshowMenu(false); // Cerrar el menú después de hacer clic
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    // este me sirve para hacer el texto  como si fuer amaquina de escribir 
    useEffect(() => {
        const typingInterval = setInterval(() => {
            const currentProfession = professions[currentIndex];
            const currentText = currentProfession.substring(0, profession.length + 1);

            setProfession(currentText);

            if (currentText === currentProfession) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex === professions.length - 1 ? 0 : prevIndex + 1));
                    setProfession(''); // Reiniciar el texto después de completar una profesión
                }, 1500);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [currentIndex, profession, professions]);

    return (
        <section id='home' className="home section grid">
            <img src={Profile} alt="" className="home_img  " data-aos="fade-right" />

            <div className="home_content" data-aos="fade-left">
                <div className="home_data">
                    <div className="profession_container" >
                        <h1 className="home_title">
                            <span>I'm Alejandro Velosa.</span> <span className="professions">{profession}</span>
                        </h1>
                    </div>

                    <p className="home_description">
                        I'm Jairo Alejandro Velosa Bolaños, a dedicated Full-Stack developer with expertise in React JS, Node JS, Redux, and more. My focus is on challenging projects that let me create innovative solutions to user needs. Let's collaborate on your project and make a meaningful impact.
                    </p>

                    <Link onClick={() => handleLinkClick('about')} className="button ">
                        more About Me
                        <span id="about" className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>

                </div>
            </div>

            {/* <div className="color__block"></div> */}
        </section>

    );


};

export default Home;
