import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import * as ethereum from '@/lib/ethereum'
import * as main from '@/lib/main'
import HomePage from './components/HomePage'
import PokemonCard from './components/PokemonCard'
import UserPage from './components/UserPage'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

const useAffect = (asyncEffect, dependencies = []) => {
  const cancelerRef = useRef();
  useEffect(() => {
    asyncEffect()
      .then((canceler) => (cancelerRef.current = canceler))
      .catch((error) => console.warn('Uncatched error', error));
    return () => {
      if (cancelerRef.current) {
        cancelerRef.current();
        cancelerRef.current = undefined;
      }
    };
  }, dependencies);
};

const useWallet = () => {
  const [details, setDetails] = useState();
  const [contract, setContract] = useState();
  useAffect(async () => {
    const details_ = await ethereum.connect('metamask');
    if (!details_) return;
    setDetails(details_);
    const contract_ = await main.init(details_);
    if (!contract_) return;
    setContract(contract_);
  }, []);
  return useMemo(() => {
    if (!details || !contract) return;
    return { details, contract };
  }, [details, contract]);
};

export const App = () => {

  const wallet = useWallet()
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/pokemonCards" component={PokemonCard} />
        <Route path="/user" component={UserPage} />
      </Routes>
    </>
    
  
  );
}