import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { createTodo, deleteTodos, fetchTodos, toggleTasks } from '../../services/client';
import { useTodos } from '../../hooks/useTodos';
import './Tasks.css';

export default function Tasks() {
  const [todo, setTodo] = useState('');
  const [complete, setComplete] = useState(false);
  const { todos, setTodos } = useTodos();
  // const [remove, setRemove] = useState(false);
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

  // click button
  // call deleteTodos, delete it from supabase
  // 

  const handleDelete = async () => {
    try {
      // const deletedTask = await deleteTodos(task);
      // setTodos((prevTasks) =>
      //   prevTasks.map((prevTask) => (prevTask.id === task.id ? deletedTask : prevTask))
      // );
      // setTodos(false);
      await deleteTodos(todo);
      setTodos(await fetchTodos());
      console.log('handleDelete is working');
    } catch (e) {
      // eslint-disable-next-line-no-console
      console.error(e.message);
    }
  };

  // const handleDelete = async (todo) => {

  //   await deleteTodos(todo.id);
  // };

  return (

    <div className="task-box">
      <label className="task-header">Current tasks:</label>
      {todos.map((task) => (
        <div className="task-list" key={task.id}>
          <label className="checkbox">
            <input className="status" type="checkbox" checked={task.complete}
              onChange={() => handleClick(task)} />
            {task.description}
            <button className="delete-button" onClick={handleDelete} >
              Delete
            </button>
          </label>
        </div>
      ))}

      <div className="add-task">
        <input className="new-task" type="text" placeholder="enter new task" value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <button className="add-button" onClick={handleNewTask}>
          Add task
        </button>
      </div>

    </div>
  );
}
