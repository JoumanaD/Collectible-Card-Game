import "../Card.css"
import { useEffect, useState } from "react";
import axios from 'axios';

function PokemonCard() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/getCards')
      .then(response => {
        console.log(response)
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error while fetching cards:', error);
      });
  }, []);

  
  return (
  
    <div className="pokemon-card-div">
      <h1>Pokemon Cards</h1>
      <ul className="pokemon-card-grid">
        {cards.map(card => (
          <li key={card.id} className="pokemon-card animated">
            <img src={card.image} alt={card.number} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;

