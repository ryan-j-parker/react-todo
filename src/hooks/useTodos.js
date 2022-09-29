import { useState, useEffect } from 'react';
import { createTodo, fetchTodos } from '../services/client.js';

export function useTodos() {

  const [todos, setTodos] = useState([]);
    
  useEffect(() => {
    async function getTodos() {
      const data = await fetchTodos();
      setTodos(data);
    }
    getTodos();
  }, []);

  useEffect(() => {
    async function addTodo() {
      const data = await createTodo();
      setTodos(data);
    }
    addTodo();
  }, []);
  return { todos, setTodos };
}
