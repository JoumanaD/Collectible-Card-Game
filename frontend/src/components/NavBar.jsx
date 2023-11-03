import { Link } from 'react-router-dom';
import '../styles.css'; 

function NavBar() {
  return (
    <div className="navigation">
      <Link className="brand-name" to="/">Home</Link>
      <Link className="brand-name" to="/pokemonCards">Pokemon Cards</Link>
      <Link className="brand-name" to="/user">Profile</Link>
    </div>
  );
}

export default NavBar;
