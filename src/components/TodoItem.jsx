import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    if (text.trim()) {
      dispatch(updateTodo({ id: todo.id, text }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
      {isEditing ? (
        <input
          className="w-full sm:flex-1 border px-4 py-3 rounded-lg text-lg mb-3 sm:mb-0"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className="text-lg text-gray-800 w-full sm:flex-1">{todo.text}</span>

      )}

      <div className="flex gap-4 mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto justify-start sm:justify-end">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-5 py-3 text-sm sm:text-base rounded-lg hover:bg-green-600 w-full sm:w-auto"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 text-white px-5 py-3 text-sm sm:text-base rounded-lg hover:bg-yellow-500 w-full sm:w-auto"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-500 text-white px-5 py-3 text-sm sm:text-base rounded-lg hover:bg-red-600 w-full sm:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
