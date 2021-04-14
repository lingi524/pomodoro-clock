import React, {useRef, useState} from "react";
import './App.css';


function Clock() {
    
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0)

    // let interval = useRef();

    // const startTimer = () => {
    //     const countdownDate = new Date().getTime();
    // }

    // interval = getInterval(()=>{
    //     const now = newDate().getTime();
    // },1000);

    return (
        <div className="Clock">
            <h2>Its: {minutes} minutes and {seconds} seconds left</h2>
            <button onClick={()=> setIsActive (true)} className="start">Start Timer</button>
        </div>
    )
}

export default Clock