import { useState } from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { createTodo, fetchTodos } from '../services/client';
// import { useParams } from 'react-router-dom';
import './Tasks.css';
// import Task from './Task';
import { useTodos } from './useTodos';


export default function Tasks() {
  const { tasks } = useTodos();

  const { task, setTask } = useTodos();
  const [complete, setComplete] = useState(false);

  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  async function handleClick() {
    const updatedTask = await createTodo();
    setTodos
  }

  return (
    <div className="tasks">Tasks placeholder
      {tasks().map((todo) => (
        <div key={todo.id} {...todo} >
          {todo.description}
        </div>
      ))}
    </div>
  );
}
