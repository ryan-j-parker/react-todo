import { useContext } from 'react';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { authUser } from '../services/auth';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to="/tasks" />;
  }

  const clickHandler = async () => {

    try {
      const user = await authUser(email, password, type);
      console.log(user);
      setUser(user);
    } catch (e) {
            // eslint-disable-next-line no-console
      console.error(e.message);
    }

  };

  return (
    <div>
      <div className="panel-tabs">
        <NavLink to="/auth/sign-in"><p>Sign In</p></NavLink>
        <NavLink to="/auth/sign-up"><p>Sign Up</p></NavLink>
      </div>
      <div className="form-controls">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}
