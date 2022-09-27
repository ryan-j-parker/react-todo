import React from 'react';
import './Main.css';
import Todo from './Todo';
import { useTodos } from './useTodos';


function Main() {
  const { todos } = useTodos();

  return (
    <>
      <div className="main">
        <h2>My ToDo List</h2>

        <div className="add-todo">
          <input placeholder="add new todo"></input>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Main;