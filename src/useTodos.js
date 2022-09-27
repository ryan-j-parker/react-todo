import { useState, useEffect } from 'react';
import { getTodos } from './services/client';

export function useTodos() {

  const [todos, setTodos] = useState([]);
    
  useEffect(() => {
    async function fetchTodos() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchTodos();
  }, []);
  return { todos };
}
