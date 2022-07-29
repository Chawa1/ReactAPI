import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomCatFact() {
    const [catFact, setCatFact] = useState({
        fact: ' whatever',
        length: 45,
      });
    
      // do something on first render in this components
      useEffect(() => {
        console.log('slaw, my useEffect function runs');
    
        // get the data from the cat api
        // fetch('https://catfact.ninja/fact')
        //   .then((response) => response.json())
        //   .then((data) => setCatFact(data))
        //   .catch((err) => console.log(err));
    
        // once we have the data, use setCatFact to store the returned data in the state
      }, []);
    
      useEffect(() => {
        // get request to the API endpoint
        axios
          .get('https://catfact.ninja/fact')
          .then((result) => setCatFact(result.data))
          .catch((err) => console.log(err))
          .then(function () {
            // always executed
    
            console.log('the axios get request has ran');
          });
      }, []);
    
      /* return (
        <div>
          <div>
            <p>Fact: {catFact.fact}</p>
    
            {catFact.length > 50 ? (
              <p> the fact is too long</p>
            ) : (
              <p> the fact is less than 20 chars</p>
            )}
             <p>Length: {catFact.length}</p> 
          </div>
        </div>
      ) */
    
}
