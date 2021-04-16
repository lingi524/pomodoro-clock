import React, {useState, useEffect} from "react";
import './App.css';

function Clock () {
    const [isActive, setIsActive] = useState(false);
    let [minutes, setMinutes] = useState(10);
    let [seconds, setSeconds] = useState(59);

    useEffect(()=>{
    if (isActive){
            if (seconds>=1) {
            var interval = setInterval(() => {
                setSeconds(seconds-1);
            } ,1000) }
            else if (seconds<1 && minutes>1) {
                setMinutes(minutes-1) ;
                setSeconds(seconds = 59);

            } else if (minutes<1){
                alert("Done for now");
            }
    } return ()=> {clearInterval(interval)}
},[isActive, seconds, minutes]);
 

return (
        <div className="Clock">
            <h2>Its: {minutes} minutes and {seconds} seconds left</h2>
            <button onClick={()=> setIsActive(!isActive)} className="start">Start Timer</button>
        </div>
    ) 
}

export default Clock