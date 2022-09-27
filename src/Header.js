import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <h2 className="nav">Alchemy ToDos</h2>
        <h2 className="nav">Hello!</h2>
        <h2 className="nav">Logout</h2>
      </div>
    </>
  );
}

export default Header;