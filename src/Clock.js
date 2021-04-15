import React, {useRef, useState} from "react";
import './App.css';

function Clock () {
    let minutes = 25;
    let seconds = 59;

    timer = setInterval(
    function looping() {
        if (seconds>=1) {
            seconds--;
        } else if (seconds<1) {
            minutes--;
        } else if (minutes<1){
            alert("Done for now");
        }

},1000);
return (
    <div className="Clock">
        <h2>Its: {minutes} minutes and {seconds} seconds left</h2>
        <button className="start">Start Timer</button>
    </div>
) }
export default Clock