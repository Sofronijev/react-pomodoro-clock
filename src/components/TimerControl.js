import React from 'react';

function TimerControl(props) {
    return (
        <div className="timerControl">
            <div onClick={props.changeTime} id={props.decrementId} style={{ backgroundColor: props.secondColor }} className="decrement buttons">-</div>
            <p id={props.labelId}>{props.title}</p>
            <div onClick={props.changeTime} id={props.incrementId} style={{ backgroundColor: props.secondColor }} className="increment buttons">+</div>
            <p id={props.lengthId}>{props.length}</p>
        </div>
    );
}


export default TimerControl;