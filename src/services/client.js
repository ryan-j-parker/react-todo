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
  const response = await client.from('todotest').select('*');
  return checkError(response);
}

export async function createTodo(todo) {
  const response = await client.from('todotest').insert(todo);
  return checkError(response);
}
