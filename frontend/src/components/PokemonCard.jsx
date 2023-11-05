import "../Card.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom'

function PokemonCard({setId, minting}) {

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const location = useLocation()
  if(!setId) {const { setId } = location.state}
  useEffect(() => {
    axios.get('http://localhost:3030/getSetCards/'+setId)
      .then(response => {
        console.log(response)
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error while fetching cards:', error);
      });
  }, []);
  
  const selectCard = (cardId) => {
    console.log("click", selectedCards)
    if(minting){
      if(selectedCards.includes(cardId)){
        let newArray = selectedCards.filter((id) => id!=cardId);
        setSelectedCards(newArray);
      }else{
        let newArray = [...selectedCards,cardId];
        setSelectedCards(newArray);
      }
    }
  }
  
  return (
  
    <div className="pokemon-card-div">
      <h1>Pokemon Cards</h1>
      <ul className="pokemon-card-grid">
        {cards.map(card => (
          <li key={card.id} style={{filter: selectedCards.includes(card.id)? "none":"grayscale(1)" }}
            className="pokemon-card animated" onClick={() => selectCard(card.id)}>
            <img src={card.image} alt={card.number} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;

