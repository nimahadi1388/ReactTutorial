import { useContext, useEffect, useState } from "react";
import Hello from "./assets/components/Cornometr&Time/Hello";
import Timer from "./assets/components/Cornometr&Time/Timer";
import Cornometr from "./assets/components/Cornometr&Time/Cornometr";
import { TestContext } from "./assets/context/testContext";
import { taskContext } from "./assets/context/TaskContext";
import TimerList from "./assets/components/Cornometr&Time/TimerList";
import TopForm from "./assets/components/TodoList/TopForm";
import ItemTodo from "./assets/components/TodoList/ItemTodo";
import ParentComponent from "./assets/components/pureComponents/ParentComponent";
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
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      title: "First Task",
      isDone: false,
    },
    {
      id: 2,
      title: "Second Task",
      isDone: true,
    },
    {
      id: 3,
      title: "Third Task",
      isDone: false,
    },
  ]);
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
          {/* Context Tutorial Start */}
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
          {/* Context Tutorial End */}
          {/* Pure Components Start */}
          <ParentComponent/>
          {/* Pure Components end */}
        </div>
      </div>
      <div className="componentsMiniProjectsC mt-5">
        <h1>Mini Projects Course</h1>
        <div className="flexes mt-5">
          {/* Todo-List-Start */}
          <taskContext.Provider
            value={{
              taskItems,
              setTaskItems,
            }}
          >
            <div className="box shadow-none border-3 w-100">
              <TopForm />
              <ItemTodo />
            </div>
          </taskContext.Provider>
          {/* Todo-List-End */}
        </div>
      </div>
    </div>
  );
};
export default App;
