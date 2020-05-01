import React from 'react';


function Timer(props) {
    

    return (
        <div className="timer">
            <div id="timer-label">{props.timerType}</div>
            <div id="time-left">
                {props.createTimer()}
            </div>            
        </div>
    );
}


export default Timer;