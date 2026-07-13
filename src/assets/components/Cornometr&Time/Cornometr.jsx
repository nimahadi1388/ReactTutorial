import React from "react";
import { TestContext } from "../../context/testContext";
let timeOut;
class Cornometr extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }
  static contextType = TestContext;
  handleStartInterval = () => {
    if (this.state.isStart == false) {
      this.setState({
        isStart: true,
      });
      timeOut = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };
  handelStopInterval = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(timeOut);
  };
  resetInterval = () => {
    this.handelStopInterval();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
    });
  };
  handleSaveTime = () => {
    // first way
    // let s = this.state.second;
    // let m = this.state.minute;
    // let h = this.state.hour;
    // let newTime = `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${s > 9 ? s : "0" + s}`;
    // second way
    let newTime = document.querySelector('.timer').innerHTML
    this.context.setTimeArr([...this.context.timeArr, newTime ]);
  };
  render() {
    let s = this.state.second;
    let m = this.state.minute;
    let h = this.state.hour;
    return (
      <div>
        <h1>Cornometer</h1>
        <p
          onClick={this.handleSaveTime}
          className="timer"
        >{`${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${s > 9 ? s : "0" + s}`}</p>
        <button onClick={this.handleStartInterval} className="btn btn-main">
          Start
        </button>
        <button onClick={this.handelStopInterval} className="btn btn-secondry">
          Stop
        </button>
        <button onClick={this.resetInterval} className="btn">
          Reset
        </button>
        <div>
        </div>
      </div>
    );
  }
}
export default Cornometr;
