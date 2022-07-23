import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

export default function Profile() {
    const [user, setUser] = useState();

    useEffect(() => {
      // get request to the API endpoint
      axios
        .get('https://randomuser.me/api/')
        .then((result) => setUser(result.data.results[0]))
        .catch((err) => console.log(err));
    }, []);
    return <div>{user && <UserProfile user={user} />}</div>;
}
