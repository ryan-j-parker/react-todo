import { useState } from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { createTodo, fetchTodos } from '../services/client';
// import { useParams } from 'react-router-dom';
import './Main.css';
// import Todo from './Todo';
// import { useTodos } from './useTodos';


export default function Tasks() {
    // const todos = useTodos();
  
  const [todos, setTodos] = useState();
  const [complete, setComplete] = useState(false);

  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Tasks</div>;
}
