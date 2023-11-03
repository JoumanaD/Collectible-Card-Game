import "../Card.css"

function PokemonCard() {

  cconst [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("test")
    axios.get('http://localhost:3030/getCards')
      .then(response => {
        console.log(response.data)
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error while fetching cards:', error);
      });
  }, []);

  
  return (
  
    <div>
      <h1>Pokemon Cards</h1>
      <ul >
        {cards.map(card => (
          <li key={card.id} className="pokemon-card">
            <img src={card.image} alt={card.number} />
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useEffect, useState } from "react";

export default PokemonCard;

