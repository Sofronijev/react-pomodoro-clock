import React, { useState, useEffect, useRef } from 'react';
import TimerControl from './components/TimerControl'
import Timer from './components/Timer'
import ControlButtons from './components/ControlButtons'
import sound from './sound/bell.mp3'
import useInterval from './hooks/useInterval'

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timer, setTimer] = useState(1500)
  const [isRunning, setIsRunning] = useState(false)
  const [timerType, setTimerType] = useState("Session")
  const [mainColor, setMainColor] = useState("#d53d32")
  const [secondColor, setSecondColor] = useState("#f75f54")
  const [canChangeTimer, setCanChangeTimer] = useState(true)
  const audio = useRef(null)
  const rootElement = useRef(document.querySelector("#root"))

  useEffect(() => {
    if (timerType === "Session") {
      setMainColor("#d53d32")
      setSecondColor("#f75f54")
    } else {
      setMainColor("#52bc6e")
      setSecondColor("#78de93")
    }
  }, [timerType])

  useEffect(() => {
    rootElement.current.style.backgroundColor = secondColor;
  }, [secondColor])

  //play sound when timer reaches 0
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

  function changeTime(e) {
    if (canChangeTimer) {
      const { id } = e.target;
      switch (id) {
        case "break-increment":
          const breakInc = breakLength < 60 ? 1 : 0;
          setBreakLength(prevBreakLength => prevBreakLength + breakInc)
          break;
        case "break-decrement":
          const breakDec = breakLength > 1 ? 1 : 0;
          setBreakLength(prevBreakLength => prevBreakLength - breakDec)
          break;
        case "session-increment":
          const sessionInc = sessionLength < 60 ? 1 : 0;
          setSessionLength(prevSessionLength => prevSessionLength + sessionInc)
          setTimer(prevTimer => prevTimer + 60 * sessionInc)
          break;
        default:
          const sessionDec = sessionLength > 1 ? 1 : 0;
          setSessionLength(prevSessionLength => prevSessionLength - sessionDec)
          setTimer(prevTimer => prevTimer - 60 * sessionDec)
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
  }, isRunning ? 1000 : null);

  function toggleCountdown() {
    if (isRunning) {
      setIsRunning(false)
      stopCountdown()
    } else {
      setIsRunning(true)
    }
    setCanChangeTimer(false)
  }

  function stopCountdown() {
    setIsRunning(false)
    setCanChangeTimer(true)
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
    <div className="App" style={{ backgroundColor: mainColor }}>
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
        changeTime={changeTime}
        secondColor={secondColor}

      />
      <TimerControl
        labelId={"session-label"}
        incrementId={"session-increment"}
        decrementId={"session-decrement"}
        lengthId={"session-length"}
        title={"Session Length"}
        length={sessionLength}
        changeTime={changeTime}
        secondColor={secondColor}
      />
      <ControlButtons
        resetTime={resetTime}
        toggleCountdown={toggleCountdown}
        stopCountdown={stopCountdown}
        isRunning={isRunning}
        secondColor={secondColor}
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
