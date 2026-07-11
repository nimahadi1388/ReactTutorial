import { useContext } from "react";
import { TestContext } from "../context/testContext";

const Item = (props) => {
  const context = useContext(TestContext)
  const handleDeleteItem = (e) =>{
    
    context.setTimeArr(context.timeArr.filter((item)=>(
        e.target.textContent !== item
    )))
  }
  return (
    <>
      <h1 onClick={handleDeleteItem}>{props.children}</h1>
    </>
  );
};

export default Item;
