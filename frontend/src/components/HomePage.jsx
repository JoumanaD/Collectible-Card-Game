import '../styles.css'; 
import SearchBar from './SearchBar'; 


function HomePage() {

    return (
        <div className="home">
            <div className="overlay"></div>
            <h1 className="title">Welcome to Pokémon TCG</h1>
            <SearchBar />
        </div>
    );
}

export default HomePage;
