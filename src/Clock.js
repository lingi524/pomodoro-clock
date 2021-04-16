import React, {useState, useEffect} from "react";
import './App.css';

function Clock () {
    let [isActive, setIsActive] = useState(false);
    let [minutes, setMinutes] = useState(1);
    let [seconds, setSeconds] = useState(0);
    let [isBreakTime, setIsBreakTime] = useState(false);

    function resetTimer() {
        setMinutes(25);
        setSeconds(0);
        setIsActive(false);
      }

    useEffect(()=>{
    if (isActive){
            if (seconds>=1) {
            var interval = setInterval(() => {
                setSeconds(seconds-1);
            } ,1000) }
            else if (seconds<1 && minutes>=1) {
                setMinutes(minutes-1) ;
                setSeconds(seconds = 59);

            } else if (minutes<1&&seconds===0){
                alert("Done for now, time for break");
                isBreakTime = true;
                isActive = false;
            }
    } return ()=> {clearInterval(interval)}
},[isActive, seconds, minutes]);

useEffect(()=>{
    if (isBreakTime){

            setMinutes(5);
            setSeconds(0);

            if (seconds>=1) {
            var interval = setInterval(() => {
                setSeconds(seconds-1);
            } ,1000) }
            else if (seconds<1 && minutes>=1) {
                setMinutes(minutes-1) ;
                setSeconds(seconds = 59);

            } else if (minutes<1&&seconds===0){
                alert("Break is up"); //Fix so this is not the first thing that pops up when the if statement runs
                isBreakTime = false;
                isActive = true;
            }
    } return ()=> {clearInterval(interval)}
},[isBreakTime, seconds, minutes]);
 

return (
        <div className="Clock">
            <h2>Its: {minutes} minutes and {seconds} seconds left</h2>
            <button onClick={()=> setIsActive(!isActive)} className="start">{isActive? "Pause":"Start Timer"}</button>
            <button style={{display: isActive ? "" : 'none' }} onClick={resetTimer}>Reset</button>
        </div>
    ) 
}

export default Clock