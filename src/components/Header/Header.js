import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Header.css';


function Header() {

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    setUser(null);
  };

  return (
    <>
      <div className="header">
        <NavLink to="/"><h2 className="nav title">Alchemy ToDos</h2></NavLink>
        <h2 className="nav greeting">Hello, {user.email}!</h2>
        <NavLink to="/"><button onClick={handleLogout} className="nav button">Logout</button></NavLink>
      </div>
    </>
  );
}

export default Header;