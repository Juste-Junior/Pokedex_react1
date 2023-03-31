

import './App.css'
/* importer MyTtile dans App */
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";



function App() {
  
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  const [index, setIndex] = useState(0)
  console.log(index)

  // la fonction qui gère la décrémentation
  function handleClickPrevious() {
    setIndex(index - 1)
  }

  // fonction qui gère l'incrémentation
  function handleClickNext() {
    setIndex(index + 1)
  }

  return (
    <div>
       <PokemonCard pokemonList ={pokemonList[index]} />
       
      {index>0 ? <button onClick = { handleClickPrevious}>Précédent</button> : null}
      {index<pokemonList.length - 1  ? <button onClick = {handleClickNext}>suivant</button> : null}
        
    </div>
  );
}
export default App;


