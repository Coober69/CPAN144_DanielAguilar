//CPAN 144 - FINAL EXAM - Daniel Aguilar
//Components > Todolist.jsx

'use client';
import { useState } from 'react';

/**
Todo list component with add/remove functionality
- Shows conditional rendering when list is empty
**/

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task"
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      {todos.length === 0 ? (
        <p style={{ color: 'gray' }}>No tasks yet. Add some!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;