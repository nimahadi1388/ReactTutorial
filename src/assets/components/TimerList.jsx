import { useContext } from "react";
import { TestContext } from "../context/testContext";
import Item from "./item";

// const TimerList = (props) => {
// const context = useContext(TestContext)

// return (
//   <>
// {
/* for use single context */
// }
// {
/* {props.children.map((times) => (
        <p style={{color:context}} key={1}>{times}</p>
      ))} */
// }
//     </>
//   );
// };
const TimerList = () => {
  const context = useContext(TestContext);

  return (
    <>
      {/* for use some context */}
      {context.timeArr.map((times) => (
        <Item>
          <p key={Math.random()}>{times}</p>
        </Item>
      ))}
    </>
  );
};

export default TimerList;
