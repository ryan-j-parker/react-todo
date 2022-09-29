import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Header.css';


function Header() {

  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    setUser(null);
  };

  return (
    <>
      <div className="header">
        <Link to="/"><h2 className="nav">Alchemy ToDos</h2></Link>
        <h2 className="nav">Hello!</h2>
        <Link to="/"><button onClick={handleLogout} className="nav">Logout</button></Link>
      </div>
    </>
  );
}

export default Header;