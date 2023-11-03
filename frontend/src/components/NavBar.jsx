import { Link } from 'react-router-dom';
import '../styles.css'; // Import your CSS file

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/pokemonCards">Pokemon Cards</Link>
      <Link to="/user">Profile</Link>
    </div>
  );
}

export default NavBar;
