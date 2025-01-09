import { useState } from 'react';
import './NewTaskForm.scss';
import PropTypes from 'prop-types';

export default function NewTaskForm({ onAddTask = () => {} }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (text) {
      onAddTask(text);
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
