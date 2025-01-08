import { useState } from 'react';
import './NewTaskForm.scss';
import PropTypes from 'prop-types';

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default function NewTaskForm({ onAddTask = () => {} }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
