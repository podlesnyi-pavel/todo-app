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

  return (
    <li
      className={`task ${completed ? 'task--completed' : ''}${
        isEdit ? ' task--editing' : ''
      }`}
    >
      <div className="task__view">
        <input
          className="task__toggle"
          type="checkbox"
          checked={completed}
          onChange={() => changeTaskCompleted(id)}
        />
        <label>
          <span className="task__description">{title}</span>
          <span className="task__created">created 17 seconds ago</span>
        </label>
        <button className="icon icon--edit" onClick={() => setIsEdit(true)} />
        <button className="icon icon--destroy" onClick={() => deleteTask(id)} />
      </div>
      <input type="text" className="task__edit" defaultValue={title} />
    </li>
  );
}
