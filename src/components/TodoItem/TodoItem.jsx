import "./TodoItem.css";
import { FaTrash } from "react-icons/fa";

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)} style={{ cursor: "pointer" }}>
        {task.text}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
