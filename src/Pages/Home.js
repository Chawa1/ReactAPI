import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { clearUser, updateUsername } from '../app/slices/userSlice';

export default function Home() {
  /* return <div>Home api key: {process.env.REACT_APP_API_KEY}</div>;  */

  const [input, setInput] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <div>
        Home Username from global store: {user.username}
        <br />
        Role: {user.role}
      </div>
      <label htmlFor="input">Input</label>
      <input
        id="input"
        name="input"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      input: {input}
      <button
        className="bg-indigo-500 rounded-md shadow-lg p-1 text-white"
        onClick={() => dispatch(clearUser())}
      >
        Clear User
      </button>
      <button
        className="bg-indigo-500 rounded-md shadow-lg p-1 text-white mx-2"
        onClick={() => dispatch(updateUsername(input))}
      >
        Update User
      </button>
    </div>
  );
}
