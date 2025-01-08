import './Task.scss';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

Task.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool,
  title: PropTypes.string,
  createdTime: PropTypes.instanceOf(Date),
  onChangeTaskCompleted: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onChangeTaskTitle: PropTypes.func,
};

export default function Task({
  id = 0,
  completed = false,
  title = '',
  createdTime = new Date(),
  onChangeTaskCompleted = () => {},
  onDeleteTask = () => {},
  onChangeTaskTitle = () => {},
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  function handleTitle(e) {
    if (e.key === 'Enter') {
      onChangeTaskTitle(id, editTitle);
      setIsEdit(false);
    }
  }

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
      <input
        type="text"
        className="task__edit"
        defaultValue={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        onKeyDown={handleTitle}
      />
    </li>
  );
}