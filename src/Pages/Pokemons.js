import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useSelector } from 'react-redux/es/exports';

export default function Users() {
    const [pokemons, setPokemons] = useState([]);
    const [err, setErr] = useState('');

    const user = useSelector((state) => state.user);
  
    useEffect(() => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((result) => setPokemons(result.data.results))
        .catch((err) => setErr(err));
    }, []);
  
    /* check if error exists*/
    if (err) return <div> There was an error fetching ur data: {err}</div>;
  
    /* if pokemon data doesn't exist, show Loading */
    if (!pokemons) return <div> Loading Data..</div>;
  
    return (
      <div className="container mx-auto  m-10">
        {/* {JSON.stringify(pokemons)} */}  {/* ama boi datai api kaman pishan batawa */}
        slaw {user.username}
        <ul>
          {pokemons.map((pokemon, index) => {
            return (
              <Link to={`/pokemon/${index + 1}`} key={index}>
                <div className="text-xl border-2 hover:border-purple-900 border-solid my-3 p-2 bg-purple-700 text-white">
                  <li>{pokemon.name}</li>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
  )
}
