import './TasksFilter.scss';
import { filterStatuses } from '~/constants/filterStatuses.js';

function TasksFilterItem({ typeFilter, filterStatus, onChangeFilterStatus }) {
  return (
    <li className="filters__item">
      <button
        className={`filters__filter ${
          filterStatus === typeFilter ? 'selected' : ''
        }`}
        onClick={() => onChangeFilterStatus(typeFilter)}
      >
        {typeFilter}
      </button>
    </li>
  );
}

export default function TasksFilter({ filterStatus, onChangeFilterStatus }) {
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
