// import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Hello from "./assets/components/Cornometr&Time/Hello";
import Timer from "./assets/components/Cornometr&Time/Timer";
import Cornometr from "./assets/components/Cornometr&Time/Cornometr";
import { TestContext } from "./assets/context/testContext";
import TimerList from "./assets/components/Cornometr&Time/TimerList";
import TopForm from "./assets/components/TodoList/TopForm";
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
  const [title] = useState("Hello dear user");
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
    <div>
      <div className="componentsTutorial">
        <h1 className="p-5">Tutorial projects</h1>
        <div className="flexes">
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
      </div>
      <div className="componentsMiniProjectsC mt-5">
        <h1>Mini Projects Course</h1>
        <div className="flexes mt-5">
          {/* Todo-List-Start */}
          <div className="box shadow-none border-3 w-100">
            <TopForm />
            <div className="todoItems">
              <div className="item d-flex flex-row-reverse align-items-center justify-content-between bg-white text-black mt-1 rounded-4 px-2 py-1 w-100">
                <p className="fs-4 mt-3">First Todo</p>
                <div className="icons">
                  <svg
                    className="text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                  </svg>
                  <svg
                    className="text-warning"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                  </svg>
                  <svg
                    className="text-danger"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="item d-flex flex-row-reverse align-items-center justify-content-between bg-white text-black mt-1 rounded-4 px-2 py-1 w-100">
                <p className="fs-4 mt-3">Second Todo</p>
                <div className="icons">
                  <svg
                    className="text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                  </svg>
                  <svg
                    className="text-warning"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                  </svg>
                  <svg
                    className="text-danger"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Todo-List-End */}
        </div>
      </div>
    </div>
  );
};
export default App;
