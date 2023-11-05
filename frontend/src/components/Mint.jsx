import { useEffect, useState } from "react";
import Sets from "./Sets";
//import "../Mint.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import PokemonCard from "./PokemonCard";
import HomePage from "./HomePage";

function Mint() {
    const [showSets, setShowSets] = useState(true);
    const [setId, setSetId] = useState("base1")
    
  return (
  
    <div className="pokemon-sets-div">
        <input type="text" className="mint-input"/>
       {!showSets && <button onClick={() => setShowSets(!showSets)}>Back to sets</button>}
       {showSets && <Sets setSetId={setSetId} setShowSets={setShowSets} preventNavigation={true}></Sets>}
       {!showSets && <PokemonCard setId={setId} minting={true}></PokemonCard>}
    </div>
  );
}

export default Mint;

