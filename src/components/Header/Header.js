import { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  if (user === null) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <>
      <div className="header">
        <NavLink to="/">
          <h2 className="nav title">Alchemy ToDos</h2>
        </NavLink>
        {user && (
          <div>
            <h2 className="nav greeting">Hello, {user.email}!</h2>
            <NavLink to="/auth">
              <button onClick={handleLogout} className="nav button">
                Logout
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
