import './TasksFilter.scss';
import PropTypes from 'prop-types';

import filterStatuses from '~/constants/filterStatuses';

function TasksFilterItem({ typeFilter = '', filterStatus = '', onChangeFilterStatus = () => {} }) {
  return (
    <li className="filters__item">
      <button
        type="button"
        className={`filters__filter ${filterStatus === typeFilter ? 'selected' : ''}`}
        onClick={() => onChangeFilterStatus(typeFilter)}
      >
        {typeFilter}
      </button>
    </li>
  );
}

TasksFilterItem.propTypes = {
  typeFilter: PropTypes.string,
  filterStatus: PropTypes.string,
  onChangeFilterStatus: PropTypes.func,
};

export default function TasksFilter({ filterStatus = '', onChangeFilterStatus = () => {} }) {
  return (
    <ul className="filters">
      {Object.values(filterStatuses).map((status) => (
        <TasksFilterItem
          key={status}
          typeFilter={status}
          filterStatus={filterStatus}
          onChangeFilterStatus={onChangeFilterStatus}
        />
      ))}
    </ul>
  );
}

TasksFilter.propTypes = {
  filterStatus: PropTypes.string,
  onChangeFilterStatus: PropTypes.func,
};
