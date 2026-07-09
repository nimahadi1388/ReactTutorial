import React from "react";
let timeOut;
// ----------------- First Exersice----------------------
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
        <p>{this.state.count}</p>
        <button onClick={this.props.eventClick}>Click</button>
      </div>
    );
  }
}
export default Timer;
