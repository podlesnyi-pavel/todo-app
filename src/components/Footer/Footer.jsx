import './Footer.scss';

import TasksFilter from '@/TasksFilter';
import PropTypes from 'prop-types';

Footer.propTypes = {
  notCompletedTasksLength: PropTypes.number,
  filterStatus: PropTypes.string,
  onChangeFilterStatus: PropTypes.func,
  onClearCompletedTask: PropTypes.func,
};

export default function Footer({
  notCompletedTasksLength = 0,
  filterStatus = '',
  onChangeFilterStatus = () => {},
  onClearCompletedTask = () => {},
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
