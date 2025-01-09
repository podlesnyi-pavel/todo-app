import './Task.scss';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

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

  function handleEdit() {
    setIsEdit(true);
  }

  function handleTitle(e) {
    if (e.key === 'Enter' && editTitle !== '') {
      onChangeTaskTitle(id, editTitle);
      setIsEdit(false);
    }

    if (e.key === 'Escape') {
      setEditTitle(title);
      setIsEdit(false);
    }
  }

  return (
    <li className={`task ${completed ? 'task--completed' : ''}${isEdit ? ' task--editing' : ''}`}>
      <div className="task__view">
        <input
          className="task__toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onChangeTaskCompleted(id)}
        />
        <div className="label">
          <span className="task__description">{title}</span>
          <span className="task__created">
            created {formatDistanceToNow(createdTime, { includeSeconds: true, addSuffix: true })}
          </span>
        </div>
        <button type="button" aria-label="edit" className="icon icon--edit" onClick={handleEdit} disabled={completed} />
        <button type="button" aria-label="delete" className="icon icon--destroy" onClick={() => onDeleteTask(id)} />
      </div>
      <input
        type="text"
        className="task__edit"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        onKeyDown={handleTitle}
      />
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool,
  title: PropTypes.string,
  createdTime: PropTypes.instanceOf(Date),
  onChangeTaskCompleted: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onChangeTaskTitle: PropTypes.func,
};
