import { Link } from 'react-router-dom';
import '../css/Styles.css'; 

function NavBar() {
  return (
    <div className="navigation">
      <Link className="brand-name" to="/">Home</Link>
      <Link className="brand-name" to="/pokemonCards">Pokemon Cards</Link>
      <Link className="brand-name" to="/sets">Sets</Link>
      <Link className="brand-name" to="/users">Profile</Link>
      <Link className="brand-name" to="/mint">Mint</Link>
    </div>
  );
}

export default NavBar;
