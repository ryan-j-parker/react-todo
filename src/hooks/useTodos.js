import { useState, useEffect } from 'react';
import { createTodo, deleteTodos, fetchTodos } from '../services/client.js';

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

  useEffect(() => {
    async function deleteTodo() {
      const data = await deleteTodos();
      setTodos(data);
    }
    deleteTodo();
  }, []);
  
  return { todos, setTodos };
}
