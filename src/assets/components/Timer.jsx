import React from "react";
import { TestContext } from "../context/testContext";
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
  // context in class components create start
  static contextType = TestContext;
  // context in class components create end
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
      // context in class components use start
      <div style={{ background: this.context }}>
        <p style={{ color: this.context }}>{this.state.count}</p>
        {/*  context in class components use end */}
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
