import './TaskList.scss';

import Task from '@/Task';
import PropTypes from 'prop-types';

TaskList.propTypes = {
  notCompletedTasksLength: PropTypes.number,
  tasks: PropTypes.array,
  onChangeTaskCompleted: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

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
