import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const { id } = useParams();
    // user state
    // error
  
    useEffect(() => {
      /* make get request to the api 
  https:www.publicfreeusers.com/api/user/${id}
  */
    }, []);
  
    return <div>UserProfile the id part of the url is: {id}</div>;
}
