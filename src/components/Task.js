import "../styles.css";

export default function Task(props) {
  const task = props.task;

  function handleDelete(e) {
    props.remove(task);
  }

  function handleStatusChange() {
    props.togglePlayed(task);
  }

  return (
    <li className="task">
      <p>
        <span>
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={task.task_done}
          />
          {task.task_done === true ? <del>{task.title}</del> : task.title}
        </span>
      </p>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
}
