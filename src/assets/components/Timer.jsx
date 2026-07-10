import React from "react";
let timeOut;
// ----------------- First Mini Project----------------------
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }
  handleStartInterva = () => {
    timeOut = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  };
  handelStopInterval = () => {
    clearInterval(timeOut);
  };
  componentDidMount() {
    this.handleStartInterva();
  }
  componentDidUpdate() {
    if (this.state.count == 0) {
      this.handelStopInterval();
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          className="btn"
          onClick={this.props.changeColor}
          style={{
            background: this.props.isLight ? "#000" : "#fff",
            color: this.props.isLight ? "#fff" : "#000",
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
// -------------Functional Components-----------------------
// const Timer = () => {
//   const [count, setCount] = useState(10);
//   setInterval(() => {
//     setCount(count + 1);
//   }, 1000);
//   return (
//     <div>
//       <p>{count}</p>
//       <button
//         className="btn"
//         onClick={changeColor}
//         style={{
//           background: this.props.isLight ? "#000" : "#fff",
//           color: this.props.isLight ? "#fff" : "#000",
//         }}
//       >
//         Change
//       </button>
//     </div>
//   );
// };
export default Timer;
