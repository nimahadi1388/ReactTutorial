import { useContext, useState } from "react";
import { taskContext } from "../../context/TaskContext";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);
  const handleChangeValue = (e) => {
    setTask(e.target.value);
  };
  const handleAddTask = () => {
    let newTask = {
      id: taskItems.length + 1,
      title: task,
      isDone: false,
    };
    setTaskItems([...taskItems, newTask]);
    setTask("");
    console.log(taskItems);
  };
  return (
    // React Fragment
    <>
      <h1 className="mb-4">TodoList Mini Projects</h1>
      <div className="d-flex gap-1">
        <input
          onChange={handleChangeValue}
          value={task}
          className="form-control"
          type="text"
          placeholder="Please enter your task..."
        />
        <button onClick={handleAddTask} className="btn btn-success">
          Submit
        </button>
      </div>
    </>
  );
};
export default TopForm;
