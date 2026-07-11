import { useContext, useEffect, useState } from "react";
import Hello from "./assets/components/Hello";
import Timer from "./assets/components/Timer";
import Cornometr from "./assets/components/Cornometr";
import { TestContext } from "./assets/context/testContext";
import TimerList from "./assets/components/TimerList";
// import Cornometr from "./assets/components/Cornometr";
// let intrval;
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Deadline",
//       count: 0,
//     };
//   }
//   handleSetTitle = () => {
//     this.setState({
//       title: "Welcome to Deadline",
//     });
//   };
//   handelSetStartCount = () => {
//     intrval = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     }, 1000);
//   };
//   handelSetStopCount = () => {
//     clearInterval(intrval);
//   };
//   render() {
//     return (
//       <div className="components">
//         <div className="box">
//           <Hello title={this.state.title} />
//           <Timer eventClick={this.handleSetTitle} />
//         </div>
//         <div className="box">
//           <Cornometr/>
//         </div>
//       </div>
//     );
//   }
// }
const App = () => {
  const [title, setTitle] = useState("Hello dear user");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["11:00:12"]);
  // const handleSetTitle = () => {
  //   setTitle("Welcome to your website");
  // };
  useEffect(() => {
    console.log("mamad");
  }, [isLight]);

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };
  return (
    <div className="components">
      {/* context is TestContext.provider */}
      {/* here is for single value context */}
      {/* <TestContext.Provider value={'red'}>
        <div
          className="box"
          style={{
            background: isLight ? "#fff" : "#000",
            color: isLight ? "#000" : "#fff",
          }}
        >
          <Hello title={title} />
          <Timer isLight={isLight} changeColor={handleSetIsLight} />
        </div>
        <div className="box">
          <Cornometr timeArr={timeArr} setTimeArr={setTimeArr} /> */}
      {/* <TimerList> */}
      {/* we call it this 'Children' in props */}
      {/* {timeArr} */}
      {/* </TimerList> */}
      {/* </div>
      </TestContext.Provider> */}
      {/* here is for some value context */}
      <TestContext.Provider
        value={{
          timeArr: timeArr,
          setTimeArr: setTimeArr,
        }}
      >
        <div
          className="box"
          style={{
            background: isLight ? "#fff" : "#000",
            color: isLight ? "#000" : "#fff",
          }}
        >
          <Hello title={title} />
          <Timer isLight={isLight} changeColor={handleSetIsLight} />
        </div>
        <div className="box">
          <Cornometr />
          {/* <TimerList> */}
          {/* we call it this 'Children' in props */}
          {/* {timeArr} */}
          {/* </TimerList> */}
        <TimerList />
        </div>
      </TestContext.Provider>
    </div>
  );
};
export default App;
