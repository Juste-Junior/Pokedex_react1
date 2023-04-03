

import './App.css'
import Navbar from './components/NavBar';
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
  
   
    return (
      <div>
         <PokemonCard pokemonList ={pokemonList[index]} /> 
         <Navbar index={index} setIndex={setIndex} pokemonList={pokemonList}/>  
      </div>
    );
}
export default App;


