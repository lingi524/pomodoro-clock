import React, {useState, useEffect} from "react";
import './App.css';

function Clock () {
    let [isActive, setIsActive] = useState(false);
    let [minutes, setMinutes] = useState(25);
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
                setSeconds(59);   

            } else if (minutes<1&&seconds===0&&isBreakTime===false){
                alert("Done for now, breaktime!");
                setMinutes(5);
                setSeconds(0);
                setIsBreakTime(true); 

            } else if (minutes<1&&seconds===0&&isBreakTime===true){
                alert("Break is done!");
                setIsBreakTime(false);
                setMinutes(25);
                setSeconds(0);  
            }
    } return ()=> {clearInterval(interval)}
},[isActive, isBreakTime, seconds, minutes]);
 

return (
        <div className="Clock">
            <h2>Its {minutes} minutes <br /> and {seconds} seconds left</h2>
            <button onClick={()=> setIsActive(!isActive)} className="start">{isActive? "Pause":"Start Timer"}</button>
            <button style={{display: isActive ? "" : 'none' }} onClick={resetTimer}>Reset</button>
        </div>
    ) 
}

export default Clock