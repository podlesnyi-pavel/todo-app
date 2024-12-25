import './Task.scss';
import { useState } from 'react';

export default function Task({
  id,
  completed,
  title,
  changeTaskCompleted,
  deleteTask,
}) {
  const [isEdit, setIsEdit] = useState(false);

  function handlerEditTask() {
    setIsEdit(true);
  }

  function handlerCompleted() {
    changeTaskCompleted(id);
  }

  function handlerDeleteTask() {
    deleteTask(id);
  }

  return (
    <li
      className={`task ${completed ? 'task--completed' : ''} ${
        isEdit ? 'task--editing' : ''
      }`}
    >
      <div className="task__view">
        <input
          className="task__toggle"
          type="checkbox"
          checked={completed}
          onChange={handlerCompleted}
        />
        <label>
          <span className="task__description">{title}</span>
          <span className="task__created">created 17 seconds ago</span>
        </label>
        <button className="icon icon--edit" onClick={handlerEditTask} />
        <button className="icon icon--destroy" onClick={handlerDeleteTask} />
      </div>
      <input type="text" className="task__edit" defaultValue={title} />
    </li>
  );
}
