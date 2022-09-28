import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
// import { useParams } from 'react-router-dom';
import './Main.css';
// import Todo from './Todo';
// import { useTodos } from './useTodos';


export default function Tasks() {
    // const todos = useTodos();
    // const { task } = useParams();
  // const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Tasks</div>;
}
