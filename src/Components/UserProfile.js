import React from 'react';
import UserFullName from './UserFullName';
import UserImage from './UserImage';

import { LocationMarkerIcon } from '@heroicons/react/outline';

export default function UserProfile({ user }) {
  return (
    <div className="container bg-gray-300 mx-auto p-5 min-h-screen flex flex-col items-center">
    {/* {JSON.stringify(user)} */}
    <div>
      <UserImage picture={user.picture} />
    </div>
    <div>
      <UserFullName name={user.name} />
    </div>
    <div className="mt-5">{user.email}</div>
    <div className="flex">
      <LocationMarkerIcon className="h-5 w-5 mr-1 text-purple-400" />{' '}
      {user.location.country}
    </div>
  </div>
  )
}
