import './TaskList.scss';

import Task from '@/Task';

export default function TaskList({
  tasks = [],
  onChangeTaskCompleted = () => {},
  onDeleteTask = () => {},
}) {
  return tasks.length ? (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChangeTaskCompleted={onChangeTaskCompleted}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  ) : (
    <div className="empty-tasks">Not available tasks</div>
  );
}
