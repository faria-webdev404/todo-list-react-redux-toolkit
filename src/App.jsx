import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './features/todos/TodoList';

const App = () => {
  return (
    <div className="min-h-screen h-[100vh] flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-100 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">To-Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
