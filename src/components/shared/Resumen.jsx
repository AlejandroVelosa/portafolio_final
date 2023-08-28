import React from 'react'
import parse from 'html-react-parser';

const Resumen = ({ icon, year, title, desc }) => {
    return (
        <div className="resumen_item">
            <div className="resumen__icon">{icon}</div>

            <span className="resume_date">{year}</span>
            <h3 className="resumen_subtitle">{parse(title)}</h3>
            <p className="resumen_description">{desc}</p>
        </div>
    )
}

export default Resumen