import React, { useEffect } from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Form = ({
  inputText,
  setInputText,
  tasks,
  setTasks,
  editTask,
  setEditTask,
  status,
  filterHandler,
}) => {
  const editHandler = (text, id, completed) => {
    const newTask = tasks.map((item) =>
      item.id === id ? { text, id, completed } : item
    );

    setTasks(newTask);
    setEditTask('');
  };

  useEffect(() => {
    if (editTask) {
      setInputText(editTask.text);
    } else {
      setInputText('');
    }
  }, [setInputText, editTask]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTaskHandler = (e) => {
    e.preventDefault();
    if (!editTask) {
      setTasks([...tasks, { id: uuidv4(), text: inputText, completed: false }]);
      setInputText('');
    } else {
      editHandler(inputText, editTask.id, editTask.completed);
    }
  };

  return (
    <form onSubmit={submitTaskHandler}>
      <input
        placeholder='Enter a Task'
        value={inputText}
        required
        onChange={inputHandler}
        type='text'
        className='task-input'
      />

      <button type='submit' className='button-add'>
        {editTask ? (
          <i>
            <FaMinusSquare />
          </i>
        ) : (
          <i>
            <FaPlusSquare />
          </i>
        )}
      </button>
      <div className='btn-container'>
        {status.map((eachState, index) => {
          return (
            <button
              type='button'
              key={index}
              onClick={() => filterHandler(eachState)}
              className='filter-btn'
            >
              {eachState}
            </button>
          );
        })}
      </div>
    </form>
  );
};

export default Form;
