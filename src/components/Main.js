import React from 'react';
// import { useParams } from 'react-router-dom';
import './Main.css';
// import Todo from './Todo';
// import { useTodos } from './useTodos';


function Main() {
  // const todos = useTodos();
  // const { task } = useParams();

  return (
    <>
      <div className="main">
        <h2>My ToDo List</h2>
        <div>

        </div>
        <div className="add-todo">
          <input placeholder="add new todo"></input>
          <button className="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Main;