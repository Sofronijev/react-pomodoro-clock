import React from 'react';
import sound from '../sound/bell.mp3'

function Timer(props) {
    return (
        <div className="timer">
            <div id="timer-label">{props.timerType}</div>
            <div id="time-left">
                {props.createTimer()}
            </div>
            <audio
                id="beep"                
                src={sound}>
            </audio>
        </div>
    );
}


export default Timer;