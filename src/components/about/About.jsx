import React, { useEffect } from "react";
import Info from "../shared/Info";
import Stats from "../shared/Stats";
import { FaDownload } from "react-icons/fa"
import Skills from "../shared/Skills";
import { resume } from "../../data";
import Aos from 'aos';
import 'aos/dist/aos.css'
import './about.css'
import Resumen from "../shared/Resumen";



const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <main className="section container">
            <section className="about" data-aos="flip-left">
                <h2 className="section_title">
                    About <span>Me</span>
                </h2>

                <div className="about_container grid">
                    <div className="about_info">
                        <h3 className="section_subtitle">Personal Info</h3>

                        <ul className="info_list grid">
                            <Info />
                        </ul>
                        <a href="" className="button">
                            Download Cv
                            <span className="button__icon">
                                < FaDownload />
                            </span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="skills" data-aos="zoom-in-down">
                <h3 className="section_subtitle subtitle_center">My Skills</h3>

                <div className="skills_container grid">
                    <Skills />
                </div>
            </section>

            <div className="separator"></div>

            <section className="resumen" data-aos="zoom-in-down">
                <h3 className="section_subtitle subtitle_center">Education</h3>


                <div className="resumen_container grid">
                    {/* <div className="resumen_data">
                        {
                            resume.map((val) => {
                                if (val.category === 'experience') {
                                    return <Resumen key={val.id} {...val} />
                                }
                            })
                        }
                    </div> */}

                    <div className="resumen_data">
                        {
                            resume.map((val) => {
                                if (val.category === 'education') {
                                    return <Resumen key={val.id} {...val} />
                                }
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
