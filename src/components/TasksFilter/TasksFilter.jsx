import './TasksFilter.scss';

export default function TasksFilter() {
  return (
    <ul className="filters">
      <li className="filters__item">
        <button className="filters__filter selected">All</button>
      </li>
      <li className="filters__item">
        <button className="filters__filter">Active</button>
      </li>
      <li className="filters__item">
        <button className="filters__filter">Completed</button>
      </li>
    </ul>
  );
}
