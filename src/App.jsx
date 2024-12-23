import './App.scss';
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const tasks = [
  { id: 1, completed: true, title: 'Completed task', createdTime: new Date() },
  { id: 2, completed: false, title: 'Editing task', createdTime: new Date() },
  { id: 3, completed: false, title: 'Active task', createdTime: new Date() },
];

function App() {
  const isntCompletedTasksLength = tasks.filter(
    ({ completed }) => !completed
  ).length;

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={tasks} />
          <Footer isntCompletedTasksLength={isntCompletedTasksLength} />
        </section>
      </section>
    </>
  );
}

export default App;
