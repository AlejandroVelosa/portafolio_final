import React from "react";

const ThemesItem = ({ color, img, changeColor }) => {
    return (
        <img
            src={img}
            alt=""
            className="theme_img"
            onClick={() => {
                changeColor(color);
            }}
        />
    );
};

export default ThemesItem;
