import React from "react";
import './App.css';


function Clock() {
    
    const timer = 25;

    return (
        <div className="Clock">
            <h2>Its: {timer} minutes left</h2>
        </div>
    )
}

export default Clock