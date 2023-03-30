
function PokemonCard({pokemonList}) {
  
  const pokemon = pokemonList[0]; // Premier Pokémon

  // Si on veut afficher le deuxième pokémon :
  // const pokemon = pokemonList[1];
  return (
    <figure>
      {pokemon.sprite ? (
        <img src={pokemon.sprite} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;