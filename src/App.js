import React from 'react';
import TimerControl from './components/TimerControl'
import Timer from './components/Timer'
import ControlButtons from './components/ControlButtons'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      // times is time in seconds
      timer: 1500,
      isRunning: false,
      timerType: "Session"
    }
    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.createTimer = this.createTimer.bind(this);
    this.countdown = this.countdown.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
  }

  componentDidMount() {
    this.audio = document.getElementById("beep");
  }

  createTimer() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  increaseTime(e) {
    if (!this.state.isRunning) {
      if (e.target.id === "break-increment") {
        if (this.state.breakLength >= 60) {
          return;
        }
        this.setState(state => {
          return { breakLength: state.breakLength + 1 }
        })
      } else if (e.target.id === "session-increment") {
        if (this.state.sessionLength >= 60) {
          return;
        }
        this.setState(state => {
          return {
            sessionLength: state.sessionLength + 1,
            timer: state.timer + 60
          }
        })
      }
    }
  }

  decreaseTime(e) {
    if (!this.state.isRunning) {
      if (e.target.id === "break-decrement") {
        if (this.state.breakLength <= 1) {
          return;
        }
        this.setState(state => {
          return { breakLength: state.breakLength - 1 }
        })
      } else if (e.target.id === "session-decrement") {
        if (this.state.sessionLength <= 1) {
          return;
        }
        this.setState(state => {
          return {
            sessionLength: state.sessionLength - 1,
            timer: state.timer - 60
          }
        })
      }
    }
  }
  resetTime() {
    this.stopCountdown();
    this.stopSound()
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      isRunning: false,
      timerType: "Session"
    })
  }

  countdown() {
    this.interval = setInterval(() => {

      if (this.state.timerType === "Session") {
        if (this.state.timer > 0) {
          this.setState(state => {
            return { timer: state.timer - 1 }
          }, () => {
            if (this.state.timer === 0) {
              this.playSound();
            }
          })
        } else {
          this.setState({
            timerType: "Break",
            timer: this.state.breakLength * 60
          });
        }
      } else if (this.state.timerType === "Break") {
        if (this.state.timer > 0) {
          this.setState(state => {
            return { timer: state.timer - 1 }
          }, () => {
            if (this.state.timer === 0) {
              this.playSound();
            }
          })
        } else {
          this.setState({
            timerType: "Session",
            timer: this.state.sessionLength * 60
          });
        }
      }
    }, 1000);
  }

  startCountdown() {
    if (this.state.isRunning) {
      this.setState({
        isRunning: false
      }, this.stopCountdown());
    } else {
      this.setState({
        isRunning: true
      }, this.countdown());
    }
  }

  stopCountdown() {
    clearInterval(this.interval)
  }

  playSound() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  render() {
    return (
      <div className="App">
        <h1>Pomodoro clock</h1>
        <Timer
          timerType={this.state.timerType}
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          timer={this.state.timer}
          createTimer={this.createTimer}
        />
        <TimerControl
          labelId={"break-label"}
          incrementId={"break-increment"}
          decrementId={"break-decrement"}
          lengthId={"break-length"}
          title={"Break Length"}
          length={this.state.breakLength}
          increaseTime={this.increaseTime}
          decreaseTime={this.decreaseTime}
        />
        <TimerControl
          labelId={"session-label"}
          incrementId={"session-increment"}
          decrementId={"session-decrement"}
          lengthId={"session-length"}
          title={"Session Length"}
          length={this.state.sessionLength}
          increaseTime={this.increaseTime}
          decreaseTime={this.decreaseTime}
        />
        <ControlButtons
          resetTime={this.resetTime}
          startCountdown={this.startCountdown}
          stopCountdown={this.stopCountdown}
          isRunning={this.state.isRunning}
        />
      </div>
    );
  }

}

export default App;
