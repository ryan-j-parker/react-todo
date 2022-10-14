import { createClient } from '@supabase/supabase-js';
import { useTodos } from '../hooks/useTodos';
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

export async function createTodo(description) {
  const response = await client.from('todos').insert([{ description }]);
  return checkError(response);
}

export async function toggleTasks({ id, complete }) {
  const response = await client.from('todos').update({ complete: !complete }).match({ id }).single();
  return checkError(response);
}

// export async function deleteTasks({ id }) {
//   const response = await client.from('todos').delete().match({ id }).single();
//   return checkError(response);
// }

export async function deleteTodos({ id }) {
  const response = await client.from('todos').delete().match({ id }).single();
  console.log('deleteTodos is working');
  return checkError(response);
}