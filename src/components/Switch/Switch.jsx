import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Switch = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <StyledWrapper>
        <label className="switch">
            <input
            id="input"
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e.target.checked)}
            />
            <div className="slider round">
            <div className="sun-moon">
                <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
                <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
                </svg>
            </div>
            <div className="stars">
                <svg id="star-1" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                </svg>
                <svg id="star-2" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                </svg>
                <svg id="star-3" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                </svg>
                <svg id="star-4" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                </svg>
            </div>
            </div>
        </label>
        </StyledWrapper>
    );
    };

    const StyledWrapper = styled.div`
    .switch {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 25px;
    }
    .switch #input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #2196f3;
        transition: 0.4s;
        z-index: 0;
        overflow: hidden;
    }
    #input:checked + .slider {
        background-color: yellow;
    }
    .slider.round {
        border-radius: 34px;
    }
    .sun-moon {
        position: absolute;
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: yellow;
        transition: 0.4s;
        border-radius: 50%;
    }
    #input:checked + .slider .sun-moon {
        transform: translateX(30px);
        background-color: white;
    }
`;

export default Switch;
