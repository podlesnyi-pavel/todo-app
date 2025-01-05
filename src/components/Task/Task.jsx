import './Task.scss';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function Task({
  id = 0,
  completed = false,
  title = '',
  createdTime = new Date(),
  onChangeTaskCompleted = () => {},
  onDeleteTask = () => {},
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
          onChange={() => onChangeTaskCompleted(id)}
        />
        <label>
          <span className="task__description">{title}</span>
          <span className="task__created">
            {formatDistanceToNow(createdTime, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon--edit" onClick={() => setIsEdit(true)} />
        <button
          className="icon icon--destroy"
          onClick={() => onDeleteTask(id)}
        />
      </div>
      <input type="text" className="task__edit" defaultValue={title} />
    </li>
  );
}
