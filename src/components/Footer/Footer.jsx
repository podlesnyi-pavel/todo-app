import './Footer.scss';

import TasksFilter from '../TasksFilter';

export default function Footer({ isntCompletedTasksLength }) {
  return (
    <footer className="footer">
      <span className="todo-count">{isntCompletedTasksLength} items left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
