import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { createTodo, fetchTodos, toggleTasks } from '../services/client';
import { useTodos } from './useTodos';


export default function Tasks() {
  const [todo, setTodo] = useState('');
  const [complete, setComplete] = useState(false);
  const { todos, setTodos } = useTodos();
  // TODO -- redirect the user back to auth if there is not a current user
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleClick = async (task) => {
    try {
      const updatedTask = await toggleTasks(task);
      setTodos((prevTasks) =>
        prevTasks.map((prevTask) => (prevTask.id === task.id ? updatedTask : prevTask))
      );
      setComplete(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  const handleNewTask = async () => {
    try {
      await createTodo(todo, complete);
      setTodos(await fetchTodos());
      setTodo('');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (

    <div className="task-box">
      {todos.map((task) => (
        <div key={task.id}>
          <label className="checkbox">
            <input
              className="status"
              type="checkbox"
              checked={task.complete}
              onChange={() => handleClick(task)}
            />
            {task.description}
          </label>
        </div>
      ))}

      <div className="add-task">
        <input className="new-task" type="text" placeholder="enter new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="add-button" onClick={handleNewTask}>
          Add task
        </button>
      </div>

    </div>
  );
}
