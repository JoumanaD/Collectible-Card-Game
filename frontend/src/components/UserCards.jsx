import { useEffect, useState } from "react";
import axios from 'axios';
import '../css/Sets.css'; 
import '../css/UsersCard.css'



function UserCards({userId}){
    const [userCards, setUserCards] = useState([]);

    if(!userId) { userId = location.state.userId}
    useEffect(() => {
      axios.get('http://localhost:3030/getUserNFTs/'+userId)
        .then(response => {
            setUserCards(response.data.data);
            console.log(response)
        })
        .catch(error => {
          console.error('Error while fetching sets:', error);
        });
    }, []);
    
    return (
        <>
        <h1>USER CARDS</h1>
        <div className="pokemon-card-div">
            <ul className="pokemon-card-grid">
                {userCards.map(card => (
                <li key={card.id} className="pokemon-card animated" >
                    <img src={card.image} alt={card.number} />
                </li>
                ))}
            </ul>
        </div> 
        </> 
       
    )
}

export default UserCards;