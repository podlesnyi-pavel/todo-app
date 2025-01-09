import './TaskList.scss'

import PropTypes from 'prop-types'

import Task from '@/Task'

export default function TaskList({
  tasks = [],
  onChangeTaskCompleted = () => {},
  onDeleteTask = () => {},
  onChangeTaskTitle = () => {},
}) {
  return tasks.length ? (
    <ul className="todo-list">
      {tasks.map(({ id, completed, title, createdTime }) => (
        <Task
          key={id}
          id={id}
          completed={completed}
          title={title}
          createdTime={createdTime}
          onChangeTaskCompleted={onChangeTaskCompleted}
          onDeleteTask={onDeleteTask}
          onChangeTaskTitle={onChangeTaskTitle}
        />
      ))}
    </ul>
  ) : (
    <div className="empty-tasks">Not available tasks</div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      completed: PropTypes.bool,
      title: PropTypes.string,
      createdTime: PropTypes.instanceOf(Date),
    })
  ),
  onChangeTaskCompleted: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onChangeTaskTitle: PropTypes.func,
}
