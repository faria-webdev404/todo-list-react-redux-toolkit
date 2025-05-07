import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
