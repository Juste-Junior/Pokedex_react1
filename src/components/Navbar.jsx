function Navbar({index, setIndex, pokemonList}) {
    
     // la fonction qui gère la décrémentation
     function handleClickPrevious() {
        setIndex(index - 1)
      }
    
      // fonction qui gère l'incrémentation
      function handleClickNext() {
        setIndex(index + 1)
      }
   return(
    <>
      {index > 0 ? <button onClick = { handleClickPrevious}>Précédent</button> : null}
      {index < pokemonList.length - 1  ? <button onClick = {handleClickNext}>suivant</button> : null}
    </>
   ) 

}

export default Navbar;
