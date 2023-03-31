
import PropTypes from "prop-types"


 
// function PokemonCard({pokemonList}) {
//   const pokemon = pokemonList[0]; // Premier Pokémon

//   // Si on veut afficher le deuxième pokémon :
//   // const pokemon = pokemonList[1];
//   return (
//     <figure>
//       {pokemon.sprite ? (
//         <img src={pokemon.sprite} alt={pokemon.name} />
//       ) : (
//         <p>???</p>
//       )}
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   );
//}
const PokemonCard = ({pokemonList}) => {
  return (
    <div>
      <figure>
          <img src = {pokemonList.imgSrc} alt = {pokemonList.name}></img>
      </figure>
    </div>
  )
}

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
  }


export default PokemonCard

 