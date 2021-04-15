import React, {useRef, useState} from "react";
import './App.css';

function Clock () {
    let minutes = 25;
    let seconds = 59;

    var timer = setInterval(
        function looping() {
            if (seconds>=1) {
                console.log(minutes+"Minutes"+ seconds-- +"Seconds");
            } else if (seconds<1 && minutes<1) {
                console.log(minutes-- +"Minutes"+ seconds +"Seconds");
                seconds = 59;
            } else if (minutes<1){
                alert("Done for now");
            }
    },100);
 

return (
    <div className="Clock">
        <h2>Its: {minutes} minutes and {seconds} seconds left</h2>
        <button className="start">Start Timer</button>
    </div>
) }
export default Clock