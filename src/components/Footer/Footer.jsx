import './Footer.scss';

import TasksFilter from '../TasksFilter';

export default function Footer({
  notCompletedTasksLength,
  filterStatus,
  onChangeFilterStatus,
  onClearCompletedTask,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{notCompletedTasksLength} items left</span>
      <TasksFilter
        filterStatus={filterStatus}
        onChangeFilterStatus={onChangeFilterStatus}
      />
      <button className="clear-completed" onClick={onClearCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
}
