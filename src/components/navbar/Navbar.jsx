import React, { useState } from 'react';
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [setshowMenu, setSetshowMenu] = useState(false);

    const handleLinkClick = (targetId) => {
        setSetshowMenu(false); // Cerrar el menú después de hacer clic
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='nav'>
            <div className={`${setshowMenu ? 'nav_menu show-menu' : 'nav_menu'}`}>
                <ul className="nav_list">
                    <li className="nav_item" onClick={() => handleLinkClick('home')}>
                        <div className='nav_link'>
                            <FaHome className='nav__icon' />
                            <h3 className="nav_name">Home</h3>
                        </div>
                    </li>
                    <li className="nav_item" onClick={() => handleLinkClick('about')}>
                        <div className='nav_link'>
                            <FaUser className='nav__icon' />
                            <h3 className="nav_name">About</h3>
                        </div>
                    </li>
                    <li className="nav_item" onClick={() => handleLinkClick('portfolio')}>
                        <div className='nav_link'>
                            <FaFolderOpen className='nav__icon' />
                            <h3 className="nav_name">Portfolio</h3>
                        </div>
                    </li>
                    <li className="nav_item" onClick={() => handleLinkClick('contact')}>
                        <div className='nav_link'>
                            <FaEnvelopeOpen className='nav__icon' />
                            <h3 className="nav_name">Contact</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`${setshowMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`} onClick={() => setSetshowMenu(!setshowMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
