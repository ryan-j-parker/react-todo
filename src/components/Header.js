import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/"><h2 className="nav">Alchemy ToDos</h2></Link>
        <h2 className="nav">Hello!</h2>
        <Link to="/logout/"><h2 className="nav">Logout</h2></Link>
      </div>
    </>
  );
}

export default Header;