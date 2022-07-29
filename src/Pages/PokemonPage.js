import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PokemonAbilities from '../components/PokemonAbilities';

export default function PokemonPage() {
    const { id } = useParams();

    const [pokemon, setPokemon] = useState();
    // user state
    // error
  
    useEffect(() => {
      // https://pokeapi.co/api/v2/pokemon/1
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/$id`)
        .then((result) => {
          console.log(result.data);
          setPokemon(result.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    /* if data of pokemons doesn't exist */
    if (!pokemon) {
      return <p> Loading data</p>;
    }
  
    return (
      <div className="container mx-auto">
        {/* {JSON.stringify(pokemon)} */}
  
        <input type="text" placeholder="search" />
        <img src={pokemon.sprites.front_default}  />
        <h2 className="text-2xl"> {pokemon.name.toUpperCase()}</h2>
  
        <p>the abilities of the pokemon are:</p>
  
        <PokemonAbilities abilities={pokemon.abilities} />
      </div>
  )
}
