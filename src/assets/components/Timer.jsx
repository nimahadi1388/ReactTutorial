import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: new Date().toLocaleTimeString(),
    };
  }
  render() {
    setInterval(() => {
      this.setState({
        timer: new Date().toLocaleTimeString(),
      });
    }, 1000);
    return (
      <div>
        <h1>ساعت لحظه ای</h1>
        <p>{this.state.timer}</p>
      </div>
    );
  }
}
export default Timer;
