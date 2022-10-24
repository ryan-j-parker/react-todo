import './App.css';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Tasks from './components/Tasks/Tasks';
import Auth from './components/Auth/Auth';
import { useState } from 'react';
import { getUser } from './services/auth';

function App() {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/">
          {!user && <Redirect to="/auth/sign-in" />}
          {user && <Redirect to="/tasks" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
