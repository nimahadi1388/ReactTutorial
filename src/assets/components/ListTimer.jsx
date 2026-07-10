import Item from "./item";

const TimerList = (props) => {
  return (
    <>
      {props.children.map((times) => (
        <Item key={Math.random()}>{times}</Item>
      ))}
    </>
  );
};

export default TimerList;
