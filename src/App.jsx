import './App.scss';
import { useState } from 'react';

import filterStatuses from '~/constants/filterStatuses';
import Footer from '@/Footer';
import NewTaskForm from '@/NewTaskForm';
import TaskList from '@/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState(filterStatuses.all);

  function onChangeTaskCompleted(id) {
    const indexTask = tasks.findIndex((item) => item.id === id);

    const newTasks = tasks.toSpliced(indexTask, 1, {
      ...tasks[indexTask],
      completed: !tasks[indexTask].completed,
    });

    setTasks(newTasks);
  }

  function onDeleteTask(id) {
    const indexTask = tasks.findIndex((item) => item.id === id);
    const newTasks = tasks.toSpliced(indexTask, 1);
    setTasks(newTasks);
  }

  function handleAddTask(text) {
    const newTask = {
      id: tasks.length ? tasks.at(-1).id + 1 : 1,
      completed: false,
      title: text,
      createdTime: new Date(),
    };

    setTasks([...tasks, newTask]);
  }

  function handleFilterStatus(status) {
    setFilterStatus(status);
  }

  function onClearCompletedTasks() {
    setTasks(tasks.filter((task) => !task.completed));
  }
  function onChangeTaskTitle(id, title) {
    const index = tasks.findIndex((task) => task.id === id);
    setTasks(tasks.toSpliced(index, 1, { ...tasks[index], title }));
  }

  function getCurrentTasks() {
    switch (filterStatus) {
      case filterStatuses.active:
        return tasks.filter((task) => !task.completed);

      case filterStatuses.completed:
        return tasks.filter((task) => task.completed);

      default:
        return tasks;
    }
  }

  const notCompletedTasksLength = tasks.filter(({ completed }) => !completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={handleAddTask} />
      </header>
      <section className="main">
        <TaskList
          tasks={getCurrentTasks()}
          onChangeTaskCompleted={onChangeTaskCompleted}
          onDeleteTask={onDeleteTask}
          onChangeTaskTitle={onChangeTaskTitle}
        />
        <Footer
          notCompletedTasksLength={notCompletedTasksLength}
          filterStatus={filterStatus}
          onChangeFilterStatus={handleFilterStatus}
          onClearCompletedTask={onClearCompletedTasks}
        />
      </section>
    </section>
  );
}
