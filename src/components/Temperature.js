import React, { useState } from "react";
import "./Temperature.css";

const Temperature = () => {
    const [temp, setTemp] = useState(72);

    const [color, setColor] = useState("temp-box__orange");

    const increaseTemp = () => {
        setTemp(temp + 1);
    };
    const decreaseTemp = () => {
        setTemp(temp - 1);
    };

    const changeColor = ({ temp }) => {
        console.log(temp);
        if (temp >= 79) {
            setColor("temp-box__red");
        } else if (temp >= 71) {
            setColor("temp-box__orange");
        } else if (temp >= 61) {
            setColor("temp-box__yellow");
        } else if (temp >= 51) {
            setColor("temp-box__green");
        } else if (temp <= 50) {
            setColor("temp-box__teal");
        }
    };

    return (
        <div className={`temp-box  ${color}`}>
            <p>Current Temperature: {temp} degreees F</p>
            <button
                onClick={() => {
                    increaseTemp();
                    changeColor({ temp });
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    decreaseTemp();
                    changeColor({ temp });
                }}
            >
                Decrease
            </button>
        </div>
    );
};

export default Temperature;
