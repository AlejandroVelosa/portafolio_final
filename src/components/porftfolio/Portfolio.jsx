import React, { useEffect, useState } from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../shared/PortfolioItem'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Portfolio.css'


const Portfolio = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section className="portfolio section">
            <h2 className="section_title">My <span>Portfolio</span></h2>


            <div className="portfolio_container container grid" data-aos="fade-down">
                {
                    portfolio.map((item) => {
                        return < PortfolioItem key={item.id}{...item} />
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio