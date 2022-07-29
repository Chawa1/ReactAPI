import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

import { updateRole } from '../app/slices/userSlice';
import { useDispatch } from 'react-redux';


export default function Profile() {
    const [user, setUser] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
      // get request to the API endpoint
      axios
        .get('https://randomuser.me/api/')
        .then((result) => setUser(result.data.results[0]))
        .catch((err) => console.log(err));
    }, []);
    /* return <div>{user && <UserProfile user={user} />}</div>; */ /* agar user aka habo, calli user profile bka w user = ba haryak la user akan */
return(
<div>

<button
        className="bg-indigo-500 rounded-md shadow-lg p-1 text-white"
        onClick={() => {
          dispatch(updateRole('normal_user'));
        }}
      >
        Remove Admin Privilige
      </button>

      {user && <UserProfile user={user} />}
</div>

)

  }
