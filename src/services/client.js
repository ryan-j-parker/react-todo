import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export async function fetchTodos() {
  const response = await client.from('todos').select('*');
  return checkError(response);
}

export async function createTodo(todo) {
  const response = await client.from('todos').insert([{ todo }]);
  return checkError(response);
}

export async function toggleTasks({ id, complete }) {
  const response = await client.from('todos').update({ complete: !complete }).match({ id }).single();
  return checkError(response);
}