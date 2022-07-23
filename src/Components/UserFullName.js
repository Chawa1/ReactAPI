import React from 'react'

export default function UserFullName( { name }) {
  return (
    <p className="text-2xl text-purple-700 ">
    {`${name.title} ${name.first} ${name.last} `}
  </p>
  )
}
