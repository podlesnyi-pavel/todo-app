import './TaskList.scss';

import Task from '../Task';

export default function TaskList({ tasks, changeTaskCompleted, deleteTask }) {
  return tasks.length ? (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          changeTaskCompleted={changeTaskCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  ) : (
    <div className="empty-tasks">Not available tasks</div>
  );
}
