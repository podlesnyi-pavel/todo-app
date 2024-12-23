import './TaskList.scss';

import Task from '../Task';

export default function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map(({ id, ...task }) => (
        <Task key={id} {...task} />
      ))}
    </ul>
  );
}
