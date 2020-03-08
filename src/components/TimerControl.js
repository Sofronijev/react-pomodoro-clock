import React from 'react';

function TimerControl(props) {
    return (
        <div className="timerControl">
            <div onClick={props.decreaseTime} id={props.decrementId} className="decrement buttons">-</div>
            <p id={props.labelId}>{props.title}</p>
            <div onClick={props.increaseTime} id={props.incrementId} className="increment buttons">+</div>
            <p id={props.lengthId}>{props.length}</p>
        </div>
    );
}


export default TimerControl;