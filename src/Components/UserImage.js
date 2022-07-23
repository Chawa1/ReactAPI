import React from 'react'

export default function UserImage({ picture }) {
  return (
    <img
    src={picture.large}
    className="rounded-full h-20 w-20 md:h-32 md:w-auto"
    alt="user profile"
  />
  )
}
