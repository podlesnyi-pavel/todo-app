import { useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: true,
      title: 'Completed task',
      createdTime: new Date(),
    },
    { id: 2, completed: false, title: 'Editing task', createdTime: new Date() },
    { id: 3, completed: false, title: 'Active task', createdTime: new Date() },
  ]);

  const isntCompletedTasksLength = tasks.filter(
    ({ completed }) => !completed
  ).length;

  function changeTaskCompleted(id) {
    const indexTask = tasks.findIndex((item) => item.id === id);

    const newTasks = tasks.toSpliced(indexTask, 1, {
      ...tasks[indexTask],
      completed: !tasks[indexTask].completed,
    });

    setTasks(newTasks);
  }

  function deleteTask(id) {
    const indexTask = tasks.findIndex((item) => item.id === id);
    const newTasks = tasks.toSpliced(indexTask, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            tasks={tasks}
            changeTaskCompleted={changeTaskCompleted}
            deleteTask={deleteTask}
          />
          <Footer isntCompletedTasksLength={isntCompletedTasksLength} />
        </section>
      </section>
    </>
  );
}
