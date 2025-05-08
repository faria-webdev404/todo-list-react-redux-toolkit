import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:gap-3 mb-6">
      <input
        type="text"
        className="w-full sm:w-80 md:w-96 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-lg transition duration-200 sm:w-auto mt-3 sm:mt-0 sm:ml-3 w-full"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
