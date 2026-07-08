import React from "react";
let timeOut;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }
  componentDidMount() {
    console.log('mamad');
    
    timeOut = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(){
    if(this.state.count == 0){
      clearInterval(timeOut)
    }
  }
  render() {
    console.log('amat');
    
    return (
      <div>
        <h1>شمارش معکوس</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default Timer;
