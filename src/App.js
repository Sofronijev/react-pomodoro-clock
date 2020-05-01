import React, { useState, useEffect, useRef } from 'react';
import TimerControl from './components/TimerControl'
import Timer from './components/Timer'
import ControlButtons from './components/ControlButtons'
import sound from './sound/bell.mp3'
import useInterval from './hooks/useInterval'


function App() {

  const [breakLength, setBreakLength] = useState(1)
  const [sessionLength, setSessionLength] = useState(1)
  const [timer, setTimer] = useState(60)
  const [isRunning, setIsRunning] = useState(false)
  const [timerType, setTimerType] = useState("Session")
  const audio = useRef(null)

  useEffect(() => {
    if (timer === 0) {
      playSound();
    }
  }, [timer])

  function createTimer() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  function increaseTime(e) {
    const { id } = e.target;
    if (!isRunning) {
      if (id === "break-increment") {
        if (breakLength >= 60) {
          return;
        }
        setBreakLength(prevBreakLength => prevBreakLength + 1)
      } else if (id === "session-increment") {
        if (sessionLength >= 60) {
          return;
        }

        setSessionLength(prevSeasonength => prevSeasonength + 1)
        setTimer(prevTimer => prevTimer + 60)
      }
    }
  }

  function decreaseTime(e) {
    const { id } = e.target;
    if (!isRunning) {
      if (id === "break-decrement") {
        if (breakLength <= 1) {
          return;
        }

        setBreakLength(prevBreakLength => prevBreakLength - 1)
      } else if (id === "session-decrement") {
        if (sessionLength <= 1) {
          return;
        }
        setSessionLength(prevSeasonength => prevSeasonength - 1)
        setTimer(prevTimer => prevTimer - 60)
      }
    }
  }

  function resetTime() {
    stopCountdown();
    stopSound()
    setBreakLength(5)
    setSessionLength(25)
    setTimer(1500)
    setIsRunning(false)
    setTimerType("Session")

  }
  //Ovaj deo pokrece tajmere kad je isRunning === True
  useInterval(() => {
    if (timerType === "Session") {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1)
      } else {
        setTimerType("Break")
        setTimer(breakLength * 60)
      }
    } else if (timerType === "Break") {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1)
      } else {
        setTimerType("Session")
        setTimer(sessionLength * 60)
      }
    }
  }, isRunning ? 100 : null);


  function toggleCountdown() {
    if (isRunning) {
      setIsRunning(false)
      stopCountdown()
    } else {
      setIsRunning(true)
    }
  }

  function stopCountdown() {
    setIsRunning(false)
  }

  function playSound() {
    audio.current.currentTime = 0;
    audio.current.play();
  }
  function stopSound() {
    audio.current.pause();
    audio.current.currentTime = 0;
  }

  return (
    <div className="App">
      <h1>Pomodoro clock</h1>
      <Timer
        timerType={timerType}
        breakLength={breakLength}
        sessionLength={sessionLength}
        timer={timer}
        createTimer={createTimer}
      />
      <TimerControl
        labelId={"break-label"}
        incrementId={"break-increment"}
        decrementId={"break-decrement"}
        lengthId={"break-length"}
        title={"Break Length"}
        length={breakLength}
        increaseTime={increaseTime}
        decreaseTime={decreaseTime}
      />
      <TimerControl
        labelId={"session-label"}
        incrementId={"session-increment"}
        decrementId={"session-decrement"}
        lengthId={"session-length"}
        title={"Session Length"}
        length={sessionLength}
        increaseTime={increaseTime}
        decreaseTime={decreaseTime}
      />
      <ControlButtons
        resetTime={resetTime}
        toggleCountdown={toggleCountdown}
        stopCountdown={stopCountdown}
        isRunning={isRunning}
      />
      <audio
        id="beep"
        src={sound}
        ref={audio}
      />
    </div>
  );
}

export default App;
