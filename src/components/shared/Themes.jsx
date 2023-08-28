import React, { useEffect, useState } from "react";
import { themes } from "../../data";
import ThemesItem from "./ThemesItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./style/Themes.css";

// para cambiar el color de la pagina
const getStorageColor = () => {
    let color = 'hsl(225, 73%, 57%)'
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color')
    }

    return color
}


// para cambiar el dark moon y permanecer en el localstorage

const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }

    return theme
}

const Themes = () => {
    const [showSwitcher, setshowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme())

    const changeColor = (color) => {
        setColor(color);
    }

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme')
        } else {
            setTheme('dark-theme')
        }
    }
    // este sirve para el cambio de color 
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color)
        localStorage.setItem('color', color)
    }, [color])

    // estees el dark moon

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme])




    return (
        <div>
            <div className={`${showSwitcher ? "show-switcher" : ""} style_switcher`}>
                <div
                    className="style_switcher-toggler"
                    onClick={() => setshowSwitcher(!showSwitcher)}
                >
                    <FaCog />
                </div>
                {/* 
                <div className="theme_toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div> */}

                <h3 className="style_switcher-title">Style Switcher</h3>
                <div className="style_switcher-items">
                    {themes.map((theme, index) => {
                        return <ThemesItem key={index} {...theme} changeColor={changeColor} />;
                    })}
                </div>

                <div
                    className="style_switcher-close"
                    onClick={() => setshowSwitcher(!showSwitcher)}
                >
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    );
};

export default Themes;
