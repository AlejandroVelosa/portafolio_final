import React, { useState } from 'react'
import Close from '../../assets/close.svg'

const PortfolioItem = ({ img, title, link, details }) => {

    const [modal, setModal] = useState(false)
    const handletoggleModal = () => {
        setModal(!modal)
    }
    return (
        <div className="portfolio_item">

            <img src={img} alt="" className="portfolio_img" />

            <a href={link} target="_blank">
                <div className="portfolio_hover" onClick={handletoggleModal}>
                    <h3 className="portfolio_title">{title}</h3>
                </div>
            </a>


            {/* {
                modal && (
                    <div className="portfolio_modal">
                        <div className="portfolio_modal-content">
                            <img src={Close} alt="" className="modal_close" onClick={handletoggleModal} />


                            <h3 className="modal_title">{title}</h3>

                            <ul className="modal_list grid">
                                {details.map(({ icon, title, desc }, index) => {
                                    return (
                                        <li className="modal_item" key={index}>
                                            <span className="item__icon">{icon}</span>


                                            <div>
                                                <span className="item_title">{title}</span>
                                                <span className="item_details"><a target="_blank" className='item_details-link item-total' href={desc}>{desc}</a></span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>


                        </div>
                    </div>
                )
            } */}
        </div>
    )
}

export default PortfolioItem