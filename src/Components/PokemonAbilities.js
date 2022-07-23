import React from 'react'

export default function PokemonAbilities( { abilities }) {
  return (
    <ul>
      {abilities.map((ability) => {
        return <li className="text-blue-400">{ability.ability.name}</li>;
      })}
    </ul>
  )
}
