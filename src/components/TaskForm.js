import { useState } from "react";
import { nanoid } from "nanoid";
import "../styles.css";

export default function TaskForm(props) {
  const [task, setTask] = useState("");

  function handleTitleChange(e) {
    // console.log(task);
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    // wont refresh page
    e.preventDefault();

    //add task to list
    const newTask = {
      title: task,
      task_done: false,
      id: nanoid()
    };
    props.addTask(newTask);

    // resetting input to blank
    setTask("");
  }

  return (
    <div className="task_form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Write a Task"
          value={task}
        />
        <button className="add_button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
