import React from "react";
import { skills } from "../../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
    return (
        <>
            {skills.map(({ title, percentage, img }, index) => {
                return (
                    <div className="progress_box" key={index}>
                        {/* <div className="progress_circle">
                            <CircularProgressbar
                                strokeWidth={6.5}
                                text={`${percentage}%`}
                                value={percentage}
                            />
                        </div> */}

                        <div className="name_img">
                            <h3 className="skills_title">{title}</h3>
                            <img className="skills_img" src={img} alt="" />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Skills;
