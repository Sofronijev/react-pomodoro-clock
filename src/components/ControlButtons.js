import React from 'react'

function ControlButtons(props) {
    return (
        <div className="controlButtons">
            <div onClick={props.resetTime} className="buttons" id="reset">
                <i class="material-icons">restore</i>
            </div>
            <div onClick={props.toggleCountdown} className="buttons" id="start_stop">
                <i class="material-icons">play_arrow</i>
                <i class="material-icons">pause</i>
            </div>
        </div>
    );
}

export default ControlButtons;