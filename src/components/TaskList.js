import { useState } from "react";
import "../styles.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }

  function removeTask(track) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== track.id;
    });
    setTasks(updatedTasks);
  }

  function toggleDone(track) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === track.id) {
        task.task_done = !task.task_done;

        //strikethrough if the task was done
        if (task.task_done === true) {
          tasks.title = <del>{task.title}</del>;
        }
        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <TaskForm addTask={addTask} />
      <div className="task_list">
        <h2>Your Tasks:</h2>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              remove={removeTask}
              togglePlayed={toggleDone}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
